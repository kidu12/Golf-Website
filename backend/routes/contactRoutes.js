const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/', controller.submitMessage); // public
router.get('/', verifyToken, controller.getMessages); // admin-only
router.delete('/:id', verifyToken, controller.deleteMessage);
router.get('/export', verifyToken, controller.exportMessages);

module.exports = router;
