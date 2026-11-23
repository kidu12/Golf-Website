const express = require('express');
const router = express.Router();
const controller = require('../controllers/testimonialController');
const { verifyToken } = require('../middleware/authMiddleware');
const { testimonialLimiter } = require('../middleware/rateLimiter');

// Public routes
router.post('/', testimonialLimiter, controller.submitTestimonial);
router.get('/approved', controller.getApprovedTestimonials);

// Admin routes (Protected)
router.get('/', verifyToken, controller.getAllTestimonials);
router.put('/:id/approve', verifyToken, controller.approveTestimonial);
router.delete('/:id', verifyToken, controller.deleteTestimonial);

module.exports = router;
