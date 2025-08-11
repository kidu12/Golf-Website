const db = require('../config/db');

exports.getAllServices = async (req, res) => {
  try {
    const [services] = await db.execute('SELECT * FROM services');
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching services' });
  }
};

exports.getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.execute('SELECT * FROM services WHERE id = ?', [id]);
    if (result.length === 0) return res.status(404).json({ message: 'Service not found' });
    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching service by ID' });
  }
};

exports.createService = async (req, res) => {
  const { title, description, link } = req.body;
  const image = req.file?.filename;

  try {
    await db.execute(
      'INSERT INTO services (title, description, image, link) VALUES (?, ?, ?, ?)',
      [title, description, image, link]
    );
    res.status(201).json({ message: 'Service created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating service' });
  }
};

exports.updateService = async (req, res) => {
  const { title, description, link } = req.body;
  const { id } = req.params;
  const image = req.file?.filename;

  try {
    const query = image
      ? 'UPDATE services SET title = ?, description = ?, image = ?, link = ? WHERE id = ?'
      : 'UPDATE services SET title = ?, description = ?, link = ? WHERE id = ?';

    const params = image
      ? [title, description, image, link, id]
      : [title, description, link, id];

    await db.execute(query, params);
    res.json({ message: 'Service updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating service' });
  }
};

exports.deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM services WHERE id = ?', [id]);
    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting service' });
  }
};
