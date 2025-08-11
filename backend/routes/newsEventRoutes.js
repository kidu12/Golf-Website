const express = require('express');
const router = express.Router();
const controller = require('../controllers/newsEventController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// Public routes
router.get('/', controller.getAllNewsEvents);
router.get('/:id', controller.getNewsEventById);

// Admin routes
router.post('/', verifyToken, upload.single('image'), controller.createNewsEvent);
router.put('/:id', verifyToken, upload.single('image'), controller.updateNewsEvent);
router.delete('/:id', verifyToken, controller.deleteNewsEvent);

module.exports = router;

