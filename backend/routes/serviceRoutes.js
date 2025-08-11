const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// Read
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);

// Create with image
router.post('/', verifyToken, upload.single('image'), serviceController.createService);

// Update with image
router.put('/:id', verifyToken, upload.single('image'), serviceController.updateService);

// Delete
router.delete('/:id', verifyToken, serviceController.deleteService);

module.exports = router;
