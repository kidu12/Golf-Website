const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Route handlers
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const newsEventRoutes = require('./routes/newsEventRoutes');
const heroPostRoutes = require('./routes/heroPostRoutes');
const contactRoutes = require('./routes/contactRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const videoRoutes = require('./routes/videoRoutes');

// Security middlewares
const securityHeaders = require('./middleware/securityHeaders');

const app = express();

// Apply security response headers
app.use(securityHeaders);

// Robust Origin Validator for CORS
const extraOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim().toLowerCase()).filter(Boolean)
  : [];

function isAllowedOrigin(origin) {
  if (!origin) return true; // allow tools, curl, mobile, server-to-server

  const normalized = origin.trim().toLowerCase().replace(/\/+$/, '');

  // Match golfclubaddis.com and any subdomains (*.golfclubaddis.com) over http or https
  if (/^https?:\/\/([a-z0-9-]+\.)*golfclubaddis\.com(:[0-9]+)?$/i.test(normalized)) {
    return true;
  }

  // Match local development
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:[0-9]+)?$/i.test(normalized)) {
    return true;
  }

  // Match any custom configured origins from .env
  if (extraOrigins.some((o) => normalized === o.replace(/\/+$/, ''))) {
    return true;
  }

  return false;
}

// Explicit CORS middleware for preflight and standard requests
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Vary', 'Origin');
  }

  // Handle browser preflight immediately
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

// Use standard cors library as secondary layer
app.use(
  cors({
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) {
        return callback(null, true);
      }
      return callback(null, false);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
  })
);

// Body parser with size limits
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));

// Serve uploads folder safely
app.use(
  '/uploads',
  express.static(path.resolve(__dirname, 'uploads'), {
    dotfiles: 'ignore',
    index: false,
    maxAge: '1d',
    setHeaders: (res) => {
      res.setHeader('X-Content-Type-Options', 'nosniff');
    }
  })
);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    environment: process.env.NODE_ENV || 'production',
    timestamp: new Date().toISOString()
  });
});

// Mount application API routers
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/news-events', newsEventRoutes);
app.use('/api/hero-post', heroPostRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/videos', videoRoutes);

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);

  // Handle Multer upload errors
  if (err.name === 'MulterError') {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'File is too large.' });
    }
    return res.status(400).json({ message: err.message });
  }

  const isProd = process.env.NODE_ENV === 'production';
  res.status(err.status || 500).json({
    message: isProd ? 'Internal server error. Please try again later.' : (err.message || 'Internal server error')
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[SERVER] Running on port ${PORT} in ${process.env.NODE_ENV || 'production'} mode`);
});

// Export app for cPanel Passenger integration
module.exports = app;
