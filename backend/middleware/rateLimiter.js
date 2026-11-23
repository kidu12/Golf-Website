// In-Memory Rate Limiting and Brute Force Protection Middleware

const rateStore = new Map();

// Periodic cleanup of expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateStore.entries()) {
    if (now > record.resetTime) {
      rateStore.delete(key);
    }
  }
}, 5 * 60 * 1000).unref();

/**
 * Creates a rate-limiting middleware.
 * @param {Object} options
 * @param {number} options.windowMs - Time window in milliseconds (e.g. 15 * 60 * 1000)
 * @param {number} options.max - Maximum requests allowed in the window
 * @param {string} options.message - Error message when rate limit is exceeded
 * @param {Function} [options.keyGenerator] - Optional custom key generator
 */
function createRateLimiter(options) {
  const {
    windowMs = 15 * 60 * 1000,
    max = 5,
    message = 'Too many requests. Please try again later.',
    keyGenerator = (req) => req.ip || req.connection?.remoteAddress || 'unknown'
  } = options;

  return (req, res, next) => {
    const key = keyGenerator(req);
    const now = Date.now();

    let record = rateStore.get(key);

    if (!record || now > record.resetTime) {
      record = { count: 1, resetTime: now + windowMs, lockoutUntil: 0 };
      rateStore.set(key, record);
    } else {
      // Check if locked out
      if (record.lockoutUntil && now < record.lockoutUntil) {
        const remainingMinutes = Math.ceil((record.lockoutUntil - now) / 60000);
        res.setHeader('Retry-After', Math.ceil((record.lockoutUntil - now) / 1000));
        return res.status(429).json({
          message: `Account temporarily locked due to repeated attempts. Try again in ${remainingMinutes} minute(s).`
        });
      }

      record.count += 1;
    }

    const remaining = Math.max(0, max - record.count);
    res.setHeader('X-RateLimit-Limit', max);
    res.setHeader('X-RateLimit-Remaining', remaining);
    res.setHeader('X-RateLimit-Reset', Math.ceil(record.resetTime / 1000));

    if (record.count > max) {
      // If excessive attempts occur, lock out for the duration of the window
      record.lockoutUntil = now + windowMs;
      const retryAfterSec = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader('Retry-After', retryAfterSec);
      return res.status(429).json({ message });
    }

    next();
  };
}

// Pre-configured rate limiters aligned with Phase 2 & Phase 3
const loginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,                   // 5 attempts per 15 minutes
  message: 'Too many login attempts. Access temporarily restricted for 15 minutes.',
  keyGenerator: (req) => {
    const ip = req.ip || req.connection?.remoteAddress || 'unknown';
    const user = (req.body?.username || '').trim().toLowerCase();
    return `login:${ip}:${user}`;
  }
});

const contactLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,                   // 5 messages per 15 minutes
  message: 'Too many contact form submissions from this IP. Please wait before sending more.',
  keyGenerator: (req) => `contact:${req.ip || req.connection?.remoteAddress || 'unknown'}`
});

const testimonialLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,                   // 5 submissions per 15 minutes
  message: 'Too many testimonial submissions. Please wait before submitting another.',
  keyGenerator: (req) => `testimonial:${req.ip || req.connection?.remoteAddress || 'unknown'}`
});

module.exports = {
  createRateLimiter,
  loginLimiter,
  contactLimiter,
  testimonialLimiter
};

