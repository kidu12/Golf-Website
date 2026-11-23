const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

const {
  getAllHeroPosts,
  getActiveHeroPost,
  updateHeroPost,
  createHeroPost,
  toggleHeroActive,
  deleteHeroPost,
} = require('../controllers/heroPostController');

// -------------------------------------------------------------
// Public route - only the active hero post is publicly viewable
// -------------------------------------------------------------
router.get('/active', getActiveHeroPost);

// -------------------------------------------------------------
// Admin-only routes - protected by verifyToken
// -------------------------------------------------------------
router.get('/', verifyToken, getAllHeroPosts);

router.post(
  '/',
  verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
  ]),
  createHeroPost
);

router.put(
  '/:id',
  verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
  ]),
  updateHeroPost
);

router.put('/:id/toggle', verifyToken, toggleHeroActive);

router.delete('/:id', verifyToken, deleteHeroPost);

module.exports = router;
