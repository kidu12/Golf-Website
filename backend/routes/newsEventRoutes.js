const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

const {
  getAllNewsEvents,
  getNewsEventById,
  createNewsEvent,
  updateNewsEvent,
  deleteNewsEvent
} = require('../controllers/newsEventController');

// -------------------------------------------------------------
// Public routes (Read-only)
// -------------------------------------------------------------
router.get('/', getAllNewsEvents);
router.get('/:id', getNewsEventById);

// -------------------------------------------------------------
// Admin-only routes (Protected by verifyToken)
// -------------------------------------------------------------
router.post(
  '/',
  verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
  ]),
  createNewsEvent
);

router.put(
  '/:id',
  verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
  ]),
  updateNewsEvent
);

router.delete('/:id', verifyToken, deleteNewsEvent);

module.exports = router;
