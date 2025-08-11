const express = require('express');
const router = express.Router();
const controller = require('../controllers/testimonialController');
const { verifyToken } = require('../middleware/authMiddleware');

// ✅ Public Routes
router.post('/', controller.submitTestimonial);
router.get('/approved', controller.getApprovedTestimonials);

// ✅ Admin Routes (Protected)
router.get('/', verifyToken, controller.getAllTestimonials);
router.put('/:id/approve', verifyToken, controller.approveTestimonial);
router.delete('/:id', verifyToken, controller.deleteTestimonial);

module.exports = router;
