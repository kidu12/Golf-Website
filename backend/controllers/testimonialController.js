const db = require('../config/db');

// Submit testimonial (public, unapproved by default)
exports.submitTestimonial = async (req, res) => {
  const { name, message, website_hp } = req.body || {};

  // Honeypot spam trap
  if (website_hp) {
    console.warn(`[SPAM BLOCKED] Testimonial honeypot triggered from IP: ${req.ip}`);
    return res.status(201).json({ message: 'Testimonial submitted for review.' });
  }

  if (!name || !message || typeof name !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ message: 'Name and message are required.' });
  }

  const trimmedName = name.trim().slice(0, 100);
  const trimmedMessage = message.trim().slice(0, 1000);

  if (trimmedName.length < 2) {
    return res.status(400).json({ message: 'Name must be at least 2 characters long.' });
  }

  if (trimmedMessage.length < 5) {
    return res.status(400).json({ message: 'Message must be at least 5 characters long.' });
  }

  try {
    // Explicitly enforce isApproved = 0 / FALSE on submission
    await db.execute(
      'INSERT INTO testimonials (name, message, isApproved) VALUES (?, ?, FALSE)',
      [trimmedName, trimmedMessage]
    );
    res.status(201).json({ message: 'Testimonial submitted for review.' });
  } catch (err) {
    console.error('Error in submitTestimonial:', err);
    res.status(500).json({ message: 'Failed to submit testimonial. Please try again later.' });
  }
};

// Get all approved testimonials (public, for homepage)
exports.getApprovedTestimonials = async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT id, name, message FROM testimonials WHERE isApproved = 1 ORDER BY created_at DESC'
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error in getApprovedTestimonials:', err);
    res.status(500).json({ message: 'Failed to fetch testimonials.' });
  }
};

// Admin: View all testimonials
exports.getAllTestimonials = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM testimonials ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error in getAllTestimonials:', err);
    res.status(500).json({ message: 'Failed to fetch all testimonials.' });
  }
};

// Admin: Approve a testimonial
exports.approveTestimonial = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    await db.execute('UPDATE testimonials SET isApproved = 1 WHERE id = ?', [id]);
    res.status(200).json({ message: 'Testimonial approved.' });
  } catch (err) {
    console.error('Error in approveTestimonial:', err);
    res.status(500).json({ message: 'Failed to approve testimonial.' });
  }
};

// Admin: Delete a testimonial
exports.deleteTestimonial = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    await db.execute('DELETE FROM testimonials WHERE id = ?', [id]);
    res.status(200).json({ message: 'Testimonial deleted.' });
  } catch (err) {
    console.error('Error in deleteTestimonial:', err);
    res.status(500).json({ message: 'Failed to delete testimonial.' });
  }
};
