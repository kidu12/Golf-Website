const nodemailer = require('nodemailer');
const db = require('../config/db');

exports.submitMessage = async (req, res) => {
  const { user_name, user_email, phone_no, message } = req.body;

  try {
    await db.execute(
      'INSERT INTO contact_messages (user_name, user_email, phone_no, message) VALUES (?, ?, ?, ?)',
      [user_name, user_email, phone_no, message]
    );
    res.status(201).json({ message: 'Message submitted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to submit message.' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch messages.' });
  }
};
exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM contact_messages WHERE id = ?', [id]);
    res.json({ message: 'Message deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete message.' });
  }
};


// Setup transporter (use your email service)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred service
  auth: {
    user: 'youremail@gmail.com',
    pass: 'your_app_password_or_key',
  },
});

exports.exportMessages = async (req, res) => {
  const { user_name, user_email, phone_no, message } = req.body;

  try {
    await db.execute(
      'INSERT INTO contact_messages (user_name, user_email, phone_no, message) VALUES (?, ?, ?, ?)',
      [user_name, user_email, phone_no, message]
    );

    // Send email to admin
    await transporter.sendMail({
      from: `"Officers Club" <youremail@gmail.com>`,
      to: 'adminreceiver@gmail.com',
      subject: '📩 New Contact Form Submission',
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${phone_no}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(201).json({ message: 'Message submitted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to submit message.' });
  }
};


const { Parser } = require('json2csv');

exports.exportMessages = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM contact_messages ORDER BY created_at DESC');

    const parser = new Parser({ fields: ['id', 'user_name', 'user_email', 'phone_no', 'message', 'created_at'] });
    const csv = parser.parse(rows);

    res.header('Content-Type', 'text/csv');
    res.attachment('contact_messages.csv');
    res.send(csv);
  } catch (err) {
    res.status(500).json({ message: 'Failed to export CSV.' });
  }
};
