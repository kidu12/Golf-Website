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

exports.getAllServices = async (req, res) => {
  try {
    const [services] = await db.execute('SELECT * FROM services');

    for (let service of services) {
      const [videos] = await db.execute(
        'SELECT * FROM service_videos WHERE service_id = ? ORDER BY order_index ASC',
        [service.id]
      );
      service.videos = videos;
    }

    res.json(services);
  } catch (err) {
    console.error('Error fetching services:', err);
    res.status(500).json({ message: 'Error fetching services' });
  }
};

exports.getServiceById = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid service ID.' });
  }

  try {
    const [result] = await db.execute('SELECT * FROM services WHERE id = ?', [id]);
    if (result.length === 0) return res.status(404).json({ message: 'Service not found' });

    const service = result[0];
    const [videos] = await db.execute(
      'SELECT * FROM service_videos WHERE service_id = ? ORDER BY order_index ASC',
      [id]
    );
    service.videos = videos;

    res.json(service);
  } catch (err) {
    console.error('Error fetching service by ID:', err);
    res.status(500).json({ message: 'Error fetching service by ID' });
  }
};

exports.createService = async (req, res) => {
  const { title, description, link } = req.body || {};
  const image = req.files?.image?.[0]?.filename ? path.basename(req.files.image[0].filename) : null;
  const videos = req.files?.videos || [];

  if (!title || typeof title !== 'string') {
    if (image) safeUnlink(image);
    videos.forEach((v) => safeUnlink(v.filename));
    return res.status(400).json({ message: 'Service title is required.' });
  }

  const cleanTitle = title.trim().slice(0, 255);
  const cleanDesc = (description || '').toString().trim().slice(0, 5000);
  const cleanLink = (link || '').toString().trim().slice(0, 255);

  try {
    const [result] = await db.execute(
      'INSERT INTO services (title, description, image, link) VALUES (?, ?, ?, ?)',
      [cleanTitle, cleanDesc, image, cleanLink]
    );
    const serviceId = result.insertId;

    for (let i = 0; i < Math.min(videos.length, 3); i++) {
      const vSafe = path.basename(videos[i].filename);
      await db.execute(
        'INSERT INTO service_videos (service_id, filename, order_index) VALUES (?, ?, ?)',
        [serviceId, vSafe, i]
      );
    }

    res.status(201).json({ message: 'Service created successfully', id: serviceId });
  } catch (err) {
    console.error('Error creating service:', err);
    if (image) safeUnlink(image);
    videos.forEach((v) => safeUnlink(v.filename));
    res.status(500).json({ message: 'Error creating service' });
  }
};

exports.updateService = async (req, res) => {
  const { title, description, link } = req.body || {};
  const { id } = req.params;
  const newImage = req.files?.image?.[0]?.filename ? path.basename(req.files.image[0].filename) : null;

  if (!id || isNaN(id)) {
    if (newImage) safeUnlink(newImage);
    return res.status(400).json({ message: 'Invalid service ID.' });
  }

  try {
    const [existing] = await db.execute('SELECT * FROM services WHERE id = ?', [id]);
    if (existing.length === 0) {
      if (newImage) safeUnlink(newImage);
      return res.status(404).json({ message: 'Service not found.' });
    }

    const currentService = existing[0];
    const cleanTitle = (title || currentService.title || '').toString().trim().slice(0, 255);
    const cleanDesc = (description || currentService.description || '').toString().trim().slice(0, 5000);
    const cleanLink = (link || currentService.link || '').toString().trim().slice(0, 255);

    let setParts = ['title = ?', 'description = ?', 'link = ?'];
    let params = [cleanTitle, cleanDesc, cleanLink];

    if (newImage) {
      setParts.push('image = ?');
      params.push(newImage);
      if (currentService.image) safeUnlink(currentService.image);
    }

    params.push(id);
    const query = `UPDATE services SET ${setParts.join(', ')} WHERE id = ?`;

    await db.execute(query, params);
    res.json({ message: 'Service updated successfully' });
  } catch (err) {
    console.error('Error updating service:', err);
    if (newImage) safeUnlink(newImage);
    res.status(500).json({ message: 'Error updating service' });
  }
};

exports.deleteService = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid service ID.' });
  }

  try {
    const [videos] = await db.execute('SELECT filename FROM service_videos WHERE service_id = ?', [id]);
    const [service] = await db.execute('SELECT image FROM services WHERE id = ?', [id]);

    await db.execute('DELETE FROM service_videos WHERE service_id = ?', [id]);
    await db.execute('DELETE FROM services WHERE id = ?', [id]);

    if (service[0]?.image) {
      safeUnlink(service[0].image);
    }
    for (let v of videos) {
      safeUnlink(v.filename);
    }

    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    console.error('Error deleting service:', err);
    res.status(500).json({ message: 'Error deleting service' });
  }
};

exports.addVideo = async (req, res) => {
  const { id } = req.params;
  const video = req.file?.filename ? path.basename(req.file.filename) : null;

  if (!video) return res.status(400).json({ message: 'No video file provided' });
  if (!id || isNaN(id)) {
    safeUnlink(video);
    return res.status(400).json({ message: 'Invalid service ID.' });
  }

  try {
    const [countResult] = await db.execute('SELECT COUNT(*) as count FROM service_videos WHERE service_id = ?', [id]);
    if (countResult[0].count >= 3) {
      safeUnlink(video);
      return res.status(400).json({ message: 'Maximum 3 videos allowed per service' });
    }

    await db.execute(
      'INSERT INTO service_videos (service_id, filename, order_index) VALUES (?, ?, ?)',
      [id, video, countResult[0].count]
    );
    res.status(201).json({ message: 'Video added successfully' });
  } catch (err) {
    console.error('Error adding video:', err);
    safeUnlink(video);
    res.status(500).json({ message: 'Error adding video' });
  }
};

exports.replaceVideo = async (req, res) => {
  const { id, vid } = req.params;
  const newVideo = req.file?.filename ? path.basename(req.file.filename) : null;

  if (!newVideo) return res.status(400).json({ message: 'No new video file provided' });
  if (!id || isNaN(id) || !vid || isNaN(vid)) {
    safeUnlink(newVideo);
    return res.status(400).json({ message: 'Invalid service or video ID.' });
  }

  try {
    const [oldVideo] = await db.execute('SELECT filename FROM service_videos WHERE id = ? AND service_id = ?', [vid, id]);
    if (oldVideo.length === 0) {
      safeUnlink(newVideo);
      return res.status(404).json({ message: 'Video not found' });
    }

    safeUnlink(oldVideo[0].filename);

    await db.execute('UPDATE service_videos SET filename = ? WHERE id = ?', [newVideo, vid]);
    res.json({ message: 'Video replaced successfully' });
  } catch (err) {
    console.error('Error replacing video:', err);
    safeUnlink(newVideo);
    res.status(500).json({ message: 'Error replacing video' });
  }
};

exports.deleteVideo = async (req, res) => {
  const { id, vid } = req.params;

  if (!id || isNaN(id) || !vid || isNaN(vid)) {
    return res.status(400).json({ message: 'Invalid service or video ID.' });
  }

  try {
    const [video] = await db.execute('SELECT filename FROM service_videos WHERE id = ? AND service_id = ?', [vid, id]);
    if (video.length === 0) return res.status(404).json({ message: 'Video not found' });

    safeUnlink(video[0].filename);

    await db.execute('DELETE FROM service_videos WHERE id = ?', [vid]);
    res.json({ message: 'Video deleted successfully' });
  } catch (err) {
    console.error('Error deleting video:', err);
    res.status(500).json({ message: 'Error deleting video' });
  }
};
