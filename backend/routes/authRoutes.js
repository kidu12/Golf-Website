const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');
const { loginLimiter } = require('../middleware/rateLimiter');

// Public login route with strict rate limiting & brute-force protection
router.post('/login', loginLimiter, authController.login);

// Admin-only route: creating another admin requires an active admin session
router.post('/register', verifyToken, authController.register);

// Server-side session invalidation on logout
router.post('/logout', verifyToken, authController.logout);

// Token verification status check
router.get('/me', verifyToken, authController.getMe);

module.exports = router;
