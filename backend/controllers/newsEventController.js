const db = require('../config/db');

exports.getAllNewsEvents = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM news_events ORDER BY date DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch records.' });
  }
};

exports.getNewsEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.execute('SELECT * FROM news_events WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Item not found.' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch item.' });
  }
};

exports.createNewsEvent = async (req, res) => {
  const { title, type, shortDesc, detailedDesc, date } = req.body;
  const image = req.file?.filename;
  

  try {
    await db.execute(
      'INSERT INTO news_events (title, type, shortDesc, detailedDesc, image, date) VALUES (?, ?, ?, ?, ?, ?)',
      [title, type, shortDesc, detailedDesc, image, date]
    );
    res.status(201).json({ message: 'Item created successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create item.' });
  }
};

exports.updateNewsEvent = async (req, res) => {
  const { id } = req.params;
  const { title, type, shortDesc, detailedDesc, date } = req.body;
  const image = req.file?.filename;

  try {
    const query = image
      ? 'UPDATE news_events SET title = ?, type = ?, shortDesc = ?, detailedDesc = ?, image = ?, date = ? WHERE id = ?'
      : 'UPDATE news_events SET title = ?, type = ?, shortDesc = ?, detailedDesc = ?, date = ? WHERE id = ?';

    const params = image
      ? [title, type, shortDesc, detailedDesc, image, date, id]
      : [title, type, shortDesc, detailedDesc, date, id];

    await db.execute(query, params);
    res.json({ message: 'Item updated successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update item.' });
  }
};

exports.deleteNewsEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM news_events WHERE id = ?', [id]);
    res.json({ message: 'Item deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete item.' });
  }
};
