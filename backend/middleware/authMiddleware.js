const jwt = require('jsonwebtoken');
const { isTokenDenylisted } = require('./tokenDenylist');

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required. Token missing or invalid format.' });
  }

  const token = authHeader.split(' ')[1];

  if (!token || token.trim() === '') {
    return res.status(401).json({ message: 'Authentication required. Token missing.' });
  }

  // Reject revoked/denylisted tokens (logout)
  if (isTokenDenylisted(token)) {
    return res.status(401).json({ message: 'Session has been invalidated. Please log in again.' });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret || secret === 'supersecretkey') {
    console.error('CRITICAL WARNING: Insecure or default JWT_SECRET detected.');
  }

  try {
    // Explicitly lock algorithm to HS256 and reject "none" algorithm attacks
    const decoded = jwt.verify(token, secret, {
      algorithms: ['HS256'],
    });

    // Attach user payload
    req.user = decoded;
    req.token = token;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Session expired. Please log in again.' });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid or malformed authentication token.' });
    }
    return res.status(403).json({ message: 'Authentication failed.' });
  }
};
