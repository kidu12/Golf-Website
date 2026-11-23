const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { denylistToken } = require('../middleware/tokenDenylist');

// Audit logger for security-relevant authentication events
function logAuthEvent(action, username, ip, success, details = '') {
  const timestamp = new Date().toISOString();
  console.log(`[AUTH-AUDIT] ${timestamp} | IP: ${ip} | User: "${username}" | Action: ${action} | Success: ${success} ${details ? '| ' + details : ''}`);
}

exports.login = async (req, res) => {
  const ip = req.ip || req.connection?.remoteAddress || 'unknown';
  const { username, password } = req.body || {};

  if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
    logAuthEvent('LOGIN', username || 'empty', ip, false, 'Missing username or password');
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username.trim()]);

    // Use uniform response for non-existent user and wrong password to prevent user enumeration
    if (rows.length === 0) {
      logAuthEvent('LOGIN', username, ip, false, 'User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      logAuthEvent('LOGIN', username, ip, false, 'Incorrect password');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Token lifetime: 4 hours (within 1-8 hours recommendation in Phase 3)
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { algorithm: 'HS256', expiresIn: '4h' }
    );

    logAuthEvent('LOGIN', username, ip, true, `User ID: ${user.id}`);

    res.json({
      token,
      user: { id: user.id, username: user.username },
      expiresIn: '4h'
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'An internal error occurred during login.' });
  }
};

exports.register = async (req, res) => {
  const ip = req.ip || req.connection?.remoteAddress || 'unknown';
  const { username, password } = req.body || {};

  if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const trimmedUsername = username.trim();
  const trimmedPassword = password.trim();

  // Phase 3 requirement: Require strong admin passwords: 12+ characters
  if (trimmedPassword.length < 12) {
    return res.status(400).json({
      message: 'Password must be at least 12 characters long and include a mix of uppercase, lowercase, numbers, and symbols.'
    });
  }

  // Strong password complexity check
  const hasUpper = /[A-Z]/.test(trimmedPassword);
  const hasLower = /[a-z]/.test(trimmedPassword);
  const hasNumber = /[0-9]/.test(trimmedPassword);
  const hasSpecial = /[^A-Za-z0-9]/.test(trimmedPassword);

  if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
    return res.status(400).json({
      message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
    });
  }

  try {
    const [existingUser] = await db.execute('SELECT id FROM users WHERE username = ?', [trimmedUsername]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    // Phase 3 requirement: Store admin passwords hashed with bcrypt cost 12 or more
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(trimmedPassword, salt);

    await db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [trimmedUsername, hashedPassword]);

    logAuthEvent('REGISTER', trimmedUsername, ip, true, `Created by admin ${req.user?.username || req.user?.id}`);

    res.status(201).json({ message: 'Admin user created successfully.' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'An internal error occurred during registration.' });
  }
};

exports.logout = async (req, res) => {
  const token = req.token;
  const ip = req.ip || req.connection?.remoteAddress || 'unknown';

  if (token) {
    // Add to server-side denylist for remaining lifetime
    denylistToken(token, 4 * 60 * 60 * 1000);
    logAuthEvent('LOGOUT', req.user?.username || 'unknown', ip, true);
  }

  res.json({ message: 'Logged out successfully. Server session terminated.' });
};

exports.getMe = async (req, res) => {
  res.json({ user: req.user });
};
