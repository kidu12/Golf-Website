const db = require('../config/db');
const fs = require('fs');
const path = require('path');

const UPLOADS_DIR = path.resolve(__dirname, '..', 'uploads');

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

// Get all videos for a specific service (Public)
exports.getVideosByService = async (req, res) => {
  const { serviceKey } = req.params;

  if (!serviceKey || typeof serviceKey !== 'string') {
    return res.status(400).json({ message: 'Invalid service key.' });
  }

  const cleanKey = serviceKey.trim().slice(0, 100);

  try {
    const [videos] = await db.execute(
      'SELECT id, service_key, title, filename, created_at FROM service_videos WHERE service_key = ? ORDER BY created_at DESC',
      [cleanKey]
    );
    res.json(videos);
  } catch (err) {
    console.error('Error fetching videos:', err);
    res.status(500).json({ message: 'Error fetching videos' });
  }
};

// Get all videos (Admin only)
exports.getAllVideos = async (req, res) => {
  try {
    const [videos] = await db.execute(
      'SELECT id, service_key, title, filename, created_at FROM service_videos ORDER BY service_key, created_at DESC'
    );
    res.json(videos);
  } catch (err) {
    console.error('Error fetching all videos:', err);
    res.status(500).json({ message: 'Error fetching videos' });
  }
};

// Upload a video for a service (Admin only)
exports.uploadVideo = async (req, res) => {
  const { serviceKey, title } = req.body || {};
  const videoFile = req.file;

  if (!videoFile) {
    return res.status(400).json({ message: 'No video file provided' });
  }

  const safeFilename = path.basename(videoFile.filename);

  if (!serviceKey || typeof serviceKey !== 'string') {
    safeUnlink(safeFilename);
    return res.status(400).json({ message: 'Service key is required' });
  }

  const cleanKey = serviceKey.trim().slice(0, 100);
  const cleanTitle = (title || '').toString().trim().slice(0, 255);

  try {
    await db.execute(
      'INSERT INTO service_videos (service_key, title, filename) VALUES (?, ?, ?)',
      [cleanKey, cleanTitle, safeFilename]
    );
    res.status(201).json({ message: 'Video uploaded successfully', filename: safeFilename });
  } catch (err) {
    console.error('Error uploading video:', err);
    safeUnlink(safeFilename);
    res.status(500).json({ message: 'Error uploading video' });
  }
};

// Delete a video (Admin only)
exports.deleteVideo = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid video ID.' });
  }

  try {
    const [rows] = await db.execute('SELECT filename FROM service_videos WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Video not found' });
    }

    const filename = rows[0].filename;

    await db.execute('DELETE FROM service_videos WHERE id = ?', [id]);
    safeUnlink(filename);

    res.json({ message: 'Video deleted successfully' });
  } catch (err) {
    console.error('Error deleting video:', err);
    res.status(500).json({ message: 'Error deleting video' });
  }
};
