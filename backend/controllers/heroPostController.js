const db = require('../config/db');
const fs = require('fs');
const path = require('path');

const UPLOADS_DIR = path.resolve(__dirname, '..', 'uploads');

// Helper to safely delete file from uploads without path traversal
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

// Get all hero posts (Admin only)
exports.getAllHeroPosts = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM heroes ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching hero posts:', err);
    res.status(500).json({ message: 'Failed to fetch hero posts.' });
  }
};

// Get all active posts (Public - used on homepage Hero)
exports.getActiveHeroPost = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM heroes WHERE is_active = 1 ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching active hero posts:', err);
    res.status(500).json({ message: 'Failed to fetch active hero posts.' });
  }
};

// Create new post
exports.createHeroPost = async (req, res) => {
  try {
    const { detailedDesc, author } = req.body || {};
    const image = req.files?.image ? path.basename(req.files.image[0].filename) : null;

    if (!detailedDesc || !author || typeof detailedDesc !== 'string' || typeof author !== 'string') {
      if (image) safeUnlink(image);
      return res.status(400).json({ message: 'Description and author are required.' });
    }

    const trimmedAuthor = author.trim().slice(0, 150);
    const trimmedDesc = detailedDesc.trim().slice(0, 5000);

    const [result] = await db.execute(
      'INSERT INTO heroes (author, description, image, is_active) VALUES (?, ?, ?, 0)',
      [trimmedAuthor, trimmedDesc, image]
    );

    res.status(201).json({
      message: 'Hero post created successfully.',
      id: result.insertId
    });
  } catch (err) {
    console.error('Error in createHeroPost:', err);
    res.status(500).json({ message: 'Failed to create hero post.' });
  }
};

// Update post
exports.updateHeroPost = async (req, res) => {
  const { id } = req.params;
  const { author, detailedDesc } = req.body || {};
  const newImage = req.files?.image ? path.basename(req.files.image[0].filename) : null;

  if (!id || isNaN(id)) {
    if (newImage) safeUnlink(newImage);
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    const [existing] = await db.execute('SELECT * FROM heroes WHERE id = ?', [id]);
    if (existing.length === 0) {
      if (newImage) safeUnlink(newImage);
      return res.status(404).json({ message: 'Hero post not found.' });
    }

    const currentPost = existing[0];
    const trimmedAuthor = (author || currentPost.author || '').trim().slice(0, 150);
    const trimmedDesc = (detailedDesc || currentPost.description || '').trim().slice(0, 5000);

    let query = 'UPDATE heroes SET author = ?, description = ?';
    const params = [trimmedAuthor, trimmedDesc];

    if (newImage) {
      query += ', image = ?';
      params.push(newImage);
      // Remove previous image file if replaced
      if (currentPost.image) {
        safeUnlink(currentPost.image);
      }
    }

    query += ' WHERE id = ?';
    params.push(id);

    await db.execute(query, params);
    res.json({ message: 'Hero post updated successfully.' });
  } catch (err) {
    console.error('Error in updateHeroPost:', err);
    res.status(500).json({ message: 'Failed to update hero post.' });
  }
};

// Toggle active status
exports.toggleHeroActive = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    const [rows] = await db.execute('SELECT is_active FROM heroes WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Post not found.' });

    const isActive = rows[0].is_active;
    const newStatus = isActive ? 0 : 1;

    await db.execute('UPDATE heroes SET is_active = ? WHERE id = ?', [newStatus, id]);

    res.json({
      message: newStatus
        ? 'Hero post selected! It will now appear on the homepage.'
        : 'Hero post unselected. It will no longer appear on the homepage.',
      active: newStatus
    });
  } catch (err) {
    console.error('Error in toggleHeroActive:', err);
    res.status(500).json({ message: 'Failed to toggle active status.' });
  }
};

// Delete post and remove its file
exports.deleteHeroPost = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID provided.' });
  }

  try {
    const [rows] = await db.execute('SELECT image FROM heroes WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Hero post not found.' });
    }

    const post = rows[0];
    await db.execute('DELETE FROM heroes WHERE id = ?', [id]);

    if (post.image) {
      safeUnlink(post.image);
    }

    res.json({ message: 'Hero post deleted successfully.' });
  } catch (err) {
    console.error('Error in deleteHeroPost:', err);
    res.status(500).json({ message: 'Failed to delete hero post.' });
  }
};
