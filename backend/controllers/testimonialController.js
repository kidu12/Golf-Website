const db = require('../config/db');

// ✅ Submit testimonial (public)
exports.submitTestimonial = async (req, res) => {
  const { name, message } = req.body;

  try {
    await db.execute(
      'INSERT INTO testimonials (name, message) VALUES (?, ?)',
      [name, message]
    );
    res.status(201).json({ message: 'Testimonial submitted for review.' });
  } catch (err) {
    console.error('❌ ERROR in submitTestimonial:', err);
    res.status(500).json({ message: 'Failed to submit testimonial.' });
  }
};

// ✅ Get all approved testimonials (public, for homepage)
exports.getApprovedTestimonials = async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT id, name, message FROM testimonials WHERE isApproved = TRUE ORDER BY created_at DESC'
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error('❌ ERROR in getApprovedTestimonials:', err);
    res.status(500).json({ message: 'Failed to fetch testimonials.' });
  }
};

// ✅ Admin: View all testimonials
exports.getAllTestimonials = async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM testimonials ORDER BY created_at DESC'
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error('❌ ERROR in getAllTestimonials:', err);
    res.status(500).json({ message: 'Failed to fetch all testimonials.' });
  }
};

// ✅ Admin: Approve a testimonial
exports.approveTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute(
      'UPDATE testimonials SET isApproved = TRUE WHERE id = ?',
      [id]
    );
    res.status(200).json({ message: 'Testimonial approved.' });
  } catch (err) {
    console.error('❌ ERROR in approveTestimonial:', err);
    res.status(500).json({ message: 'Failed to approve testimonial.' });
  }
};

exports.deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM testimonials WHERE id = ?', [id]);
    res.status(200).json({ message: 'Testimonial deleted.' });
  } catch (err) {
    console.error('❌ ERROR in deleteTestimonial:', err);
    res.status(500).json({ message: 'Failed to delete testimonial.' });
  }
};
