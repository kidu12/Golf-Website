const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');
const { verifyToken } = require('../middleware/authMiddleware');
const { contactLimiter } = require('../middleware/rateLimiter');

// Public contact submission with rate limiting and honeypot protection
router.post('/', contactLimiter, controller.submitMessage);

// Admin-only contact management
router.get('/', verifyToken, controller.getMessages);
router.get('/export', verifyToken, controller.exportMessages);
router.delete('/:id', verifyToken, controller.deleteMessage);

module.exports = router;
