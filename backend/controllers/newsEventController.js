const db = require('../config/db');
const fs = require('fs');
const path = require('path');

const UPLOADS_DIR = path.resolve(__dirname, '..', 'uploads');

// Safe file deletion helper to prevent directory traversal
function safeUnlink(filename) {
  if (!filename || typeof filename !== 'string') return;
  const safeName = path.basename(filename);
  const fullPath = path.join(UPLOADS_DIR, safeName);
  try {
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  } catch (err) {
    console.error(`Failed to unlink file ${safeName}:`, err.message);
  }
}

// Get all news and events (Public, latest first)
exports.getAllNewsEvents = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM news_events ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching news/events:', err);
    res.status(500).json({ message: 'Failed to fetch records.' });
  }
};

// Get single news/event by ID (Public)
exports.getNewsEventById = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    const [rows] = await db.execute('SELECT * FROM news_events WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Item not found.' });
    res.json(rows[0]);
  } catch (err) {
    console.error('Error fetching news item:', err);
    res.status(500).json({ message: 'Failed to fetch item.' });
  }
};

// Create new news/event (Admin only)
exports.createNewsEvent = async (req, res) => {
  const { title, type, shortDesc, detailedDesc, link, date, links } = req.body || {};
  const image = req.files?.image ? path.basename(req.files.image[0].filename) : null;
  const video = req.files?.video ? path.basename(req.files.video[0].filename) : null;

  if (!title || typeof title !== 'string') {
    if (image) safeUnlink(image);
    if (video) safeUnlink(video);
    return res.status(400).json({ message: 'Title is required.' });
  }

  const cleanTitle = title.trim().slice(0, 255);
  const cleanType = (type || 'news').toString().trim().slice(0, 50);
  const cleanShortDesc = (shortDesc || '').toString().trim().slice(0, 1000);
  const cleanDetailedDesc = (detailedDesc || '').toString().trim().slice(0, 10000);
  const cleanLink = (link || '').toString().trim().slice(0, 500);
  const cleanDate = date ? new Date(date).toISOString().slice(0, 19).replace('T', ' ') : new Date().toISOString().slice(0, 19).replace('T', ' ');
  const cleanLinks = (links || '').toString().trim().slice(0, 1000);

  try {
    await db.execute(
      `INSERT INTO news_events (title, type, shortDesc, detailedDesc, image, video, link, date, links)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [cleanTitle, cleanType, cleanShortDesc, cleanDetailedDesc, image, video, cleanLink, cleanDate, cleanLinks]
    );
    res.status(201).json({ message: 'Item created successfully.' });
  } catch (err) {
    console.error('Error creating news/event:', err);
    if (image) safeUnlink(image);
    if (video) safeUnlink(video);
    res.status(500).json({ message: 'Failed to create item.' });
  }
};

// Update existing news/event (Admin only)
exports.updateNewsEvent = async (req, res) => {
  const { id } = req.params;
  const { title, type, shortDesc, detailedDesc, link, date, links } = req.body || {};
  const newImage = req.files?.image ? path.basename(req.files.image[0].filename) : null;
  const newVideo = req.files?.video ? path.basename(req.files.video[0].filename) : null;

  if (!id || isNaN(id)) {
    if (newImage) safeUnlink(newImage);
    if (newVideo) safeUnlink(newVideo);
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    const [existing] = await db.execute('SELECT * FROM news_events WHERE id = ?', [id]);
    if (existing.length === 0) {
      if (newImage) safeUnlink(newImage);
      if (newVideo) safeUnlink(newVideo);
      return res.status(404).json({ message: 'Item not found.' });
    }

    const currentItem = existing[0];
    const cleanTitle = (title || currentItem.title || '').toString().trim().slice(0, 255);
    const cleanType = (type || currentItem.type || 'news').toString().trim().slice(0, 50);
    const cleanShortDesc = (shortDesc || currentItem.shortDesc || '').toString().trim().slice(0, 1000);
    const cleanDetailedDesc = (detailedDesc || currentItem.detailedDesc || '').toString().trim().slice(0, 10000);
    const cleanLink = (link || currentItem.link || '').toString().trim().slice(0, 500);
    const cleanDate = date ? new Date(date).toISOString().slice(0, 19).replace('T', ' ') : currentItem.date;
    const cleanLinks = (links || currentItem.links || '').toString().trim().slice(0, 1000);

    let query = `
      UPDATE news_events
      SET title = ?, type = ?, shortDesc = ?, detailedDesc = ?, link = ?, date = ?, links = ?`;
    const params = [cleanTitle, cleanType, cleanShortDesc, cleanDetailedDesc, cleanLink, cleanDate, cleanLinks];

    if (newImage) {
      query += ', image = ?';
      params.push(newImage);
      if (currentItem.image) safeUnlink(currentItem.image);
    }

    if (newVideo) {
      query += ', video = ?';
      params.push(newVideo);
      if (currentItem.video) safeUnlink(currentItem.video);
    }

    query += ' WHERE id = ?';
    params.push(id);

    await db.execute(query, params);
    res.json({ message: 'Item updated successfully.' });
  } catch (err) {
    console.error('Error updating news/event:', err);
    if (newImage) safeUnlink(newImage);
    if (newVideo) safeUnlink(newVideo);
    res.status(500).json({ message: 'Failed to update item.' });
  }
};

// Delete item and remove files from disk (Admin only)
exports.deleteNewsEvent = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    const [rows] = await db.execute('SELECT image, video FROM news_events WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    const item = rows[0];
    await db.execute('DELETE FROM news_events WHERE id = ?', [id]);

    if (item.image) safeUnlink(item.image);
    if (item.video) safeUnlink(item.video);

    res.json({ message: 'Item deleted successfully.' });
  } catch (err) {
    console.error('Error deleting news/event:', err);
    res.status(500).json({ message: 'Failed to delete item.' });
  }
};
