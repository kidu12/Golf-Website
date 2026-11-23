const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// Read
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);

// Create with image and optional videos
router.post('/', verifyToken, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'videos', maxCount: 3 }]), serviceController.createService);

// Update with image
router.put('/:id', verifyToken, upload.fields([{ name: 'image', maxCount: 1 }]), serviceController.updateService);

// Video Management
router.post('/:id/videos', verifyToken, upload.single('video'), serviceController.addVideo);
router.put('/:id/videos/:vid', verifyToken, upload.single('video'), serviceController.replaceVideo);
router.delete('/:id/videos/:vid', verifyToken, serviceController.deleteVideo);

// Delete Service
router.delete('/:id', verifyToken, serviceController.deleteService);

module.exports = router;
