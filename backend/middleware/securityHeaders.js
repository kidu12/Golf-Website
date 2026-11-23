// Security Headers Middleware
// Sets security-enhancing HTTP response headers aligned with Phase 6 requirements

module.exports = function securityHeaders(req, res, next) {
  // Hide server technology banner
  res.removeHeader('X-Powered-By');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Prevent clickjacking / frame embedding
  res.setHeader('X-Frame-Options', 'DENY');

  // Strict Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Disable sensitive hardware access not needed by the API
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // HTTP Strict Transport Security (HSTS) - 1 year with subdomains
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "img-src 'self' data: blob: https://golfclubaddis.com https://backend.golfclubaddis.com",
    "media-src 'self' blob: https://golfclubaddis.com https://backend.golfclubaddis.com",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com https://cdn.jsdelivr.net",
    "font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com data:",
    "frame-src 'self' https://www.google.com https://www.youtube.com https://youtube.com",
    "connect-src 'self' https://golfclubaddis.com https://backend.golfclubaddis.com"
  ].join('; ');

  res.setHeader('Content-Security-Policy', csp);

  next();
};

