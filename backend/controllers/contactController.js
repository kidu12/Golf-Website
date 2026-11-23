const db = require('../config/db');
const { Parser } = require('json2csv');

// Regex for basic email format validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Regex for phone format validation (allowing numbers, plus, spaces, dashes, parentheses)
const PHONE_REGEX = /^[0-9+\s\-()]{5,30}$/;

// Sanitize string cells to prevent CSV formula injection (CVE-2014-3524 / Excel macro execution)
function sanitizeForCSV(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  // If cell starts with formula trigger characters, prefix with single quote
  if (/^[=\+\-@\t\r]/.test(str)) {
    return `'${str}`;
  }
  return str;
}

exports.submitMessage = async (req, res) => {
  const { user_name, user_email, phone_no, message, website_hp } = req.body || {};

  // Honeypot check: If the hidden honeypot field is filled, silently ignore to deter bots
  if (website_hp) {
    console.warn(`[SPAM BLOCKED] Honeypot triggered from IP: ${req.ip}`);
    return res.status(201).json({ message: 'Message submitted successfully.' });
  }

  // Validate required fields
  if (!user_name || !user_email || !phone_no || !message) {
    return res.status(400).json({ message: 'All fields (name, email, phone, message) are required.' });
  }

  // Type and length validations
  if (typeof user_name !== 'string' || typeof user_email !== 'string' ||
      typeof phone_no !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ message: 'Invalid input types.' });
  }

  const trimmedName = user_name.trim().slice(0, 100);
  const trimmedEmail = user_email.trim().toLowerCase().slice(0, 100);
  const trimmedPhone = phone_no.trim().slice(0, 30);
  const trimmedMessage = message.trim().slice(0, 2500);

  if (trimmedName.length < 2) {
    return res.status(400).json({ message: 'Name must be at least 2 characters long.' });
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  if (!PHONE_REGEX.test(trimmedPhone)) {
    return res.status(400).json({ message: 'Please provide a valid phone number.' });
  }

  if (trimmedMessage.length < 5) {
    return res.status(400).json({ message: 'Message must be at least 5 characters long.' });
  }

  try {
    await db.execute(
      'INSERT INTO contact_messages (user_name, user_email, phone_no, message) VALUES (?, ?, ?, ?)',
      [trimmedName, trimmedEmail, trimmedPhone, trimmedMessage]
    );

    res.status(201).json({ message: 'Message submitted successfully.' });
  } catch (err) {
    console.error('Error submitting contact message:', err);
    res.status(500).json({ message: 'Failed to submit message. Please try again later.' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ message: 'Failed to fetch messages.' });
  }
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    await db.execute('DELETE FROM contact_messages WHERE id = ?', [id]);
    res.json({ message: 'Message deleted successfully.' });
  } catch (err) {
    console.error('Error deleting message:', err);
    res.status(500).json({ message: 'Failed to delete message.' });
  }
};

exports.exportMessages = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM contact_messages ORDER BY created_at DESC');

    // Protect all cell values against CSV injection
    const sanitizedRows = rows.map((r) => ({
      id: r.id,
      user_name: sanitizeForCSV(r.user_name),
      user_email: sanitizeForCSV(r.user_email),
      phone_no: sanitizeForCSV(r.phone_no),
      message: sanitizeForCSV(r.message),
      created_at: r.created_at ? new Date(r.created_at).toISOString() : ''
    }));

    const parser = new Parser({
      fields: ['id', 'user_name', 'user_email', 'phone_no', 'message', 'created_at']
    });
    const csv = parser.parse(sanitizedRows);

    res.header('Content-Type', 'text/csv; charset=utf-8');
    res.header('X-Content-Type-Options', 'nosniff');
    res.attachment(`contact_messages_${new Date().toISOString().slice(0, 10)}.csv`);
    res.send(csv);
  } catch (err) {
    console.error('Error exporting messages CSV:', err);
    res.status(500).json({ message: 'Failed to export CSV.' });
  }
};
