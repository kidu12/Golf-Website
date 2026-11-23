const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// Public: Get videos for a specific service page
router.get('/service/:serviceKey', videoController.getVideosByService);

// Admin: Get all videos
router.get('/', verifyToken, videoController.getAllVideos);

// Admin: Upload video for a service
router.post('/', verifyToken, upload.single('video'), videoController.uploadVideo);

// Admin: Delete a video
router.delete('/:id', verifyToken, videoController.deleteVideo);

module.exports = router;
