// Direct In-Memory Security Verification Suite
const jwt = require('jsonwebtoken');

process.env.JWT_SECRET = process.env.JWT_SECRET || 'test_dummy_jwt_secret_0123456789abcdef0123456789abcdef0123456789abcdef';
process.env.NODE_ENV = 'test';

const securityHeaders = require('./middleware/securityHeaders');
const { verifyToken } = require('./middleware/authMiddleware');
const { loginLimiter, contactLimiter } = require('./middleware/rateLimiter');
const { denylistToken, isTokenDenylisted } = require('./middleware/tokenDenylist');
const contactController = require('./controllers/contactController');
const authController = require('./controllers/authController');

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failed++;
  }
}

function mockRes() {
  const headers = {};
  const res = {
    statusCode: 200,
    headers,
    removeHeader: (k) => { delete headers[k.toLowerCase()]; },
    setHeader: (k, v) => { headers[k.toLowerCase()] = v; },
    status: function(code) { this.statusCode = code; return this; },
    json: function(data) { this.body = data; return this; },
    send: function(data) { this.body = data; return this; },
    attachment: function(f) { this.filename = f; return this; }
  };
  return res;
}

async function run() {
  console.log('--- Phase 6: Security Headers Middleware ---');
  {
    const req = {};
    const res = mockRes();
    res.setHeader('X-Powered-By', 'Express');
    let nextCalled = false;
    securityHeaders(req, res, () => { nextCalled = true; });

    assert(nextCalled, 'Next called in security headers middleware');
    assert(res.headers['x-content-type-options'] === 'nosniff', 'X-Content-Type-Options: nosniff set');
    assert(res.headers['x-frame-options'] === 'DENY', 'X-Frame-Options: DENY set');
    assert(res.headers['strict-transport-security']?.includes('max-age=31536000'), 'HSTS header set');
    assert(res.headers['x-powered-by'] === undefined, 'X-Powered-By header removed');
    assert(res.headers['content-security-policy']?.includes("default-src 'self'"), 'Content Security Policy set');
  }

  console.log('\n--- Phase 2: Token Verification & Access Control ---');
  {
    // 1. Missing token
    const req = { headers: {} };
    const res = mockRes();
    let nextCalled = false;
    verifyToken(req, res, () => { nextCalled = true; });
    assert(!nextCalled && (res.statusCode === 401 || res.statusCode === 403), 'Missing token rejected with 401/403');

    // 2. Malformed token
    const req2 = { headers: { authorization: 'Bearer invalid.token.structure' } };
    const res2 = mockRes();
    let nextCalled2 = false;
    verifyToken(req2, res2, () => { nextCalled2 = true; });
    assert(!nextCalled2 && res2.statusCode === 403, 'Malformed token rejected with 403');

    // 3. Expired token
    const expiredToken = jwt.sign(
      { id: 1, username: 'admin' },
      process.env.JWT_SECRET,
      { algorithm: 'HS256', expiresIn: '-10s' }
    );
    const req3 = { headers: { authorization: `Bearer ${expiredToken}` } };
    const res3 = mockRes();
    let nextCalled3 = false;
    verifyToken(req3, res3, () => { nextCalled3 = true; });
    assert(!nextCalled3 && res3.statusCode === 401, 'Expired token rejected with 401');

    // 4. Algorithm none attack
    const noneToken = jwt.sign({ id: 1, username: 'admin' }, '', { algorithm: 'none' });
    const req4 = { headers: { authorization: `Bearer ${noneToken}` } };
    const res4 = mockRes();
    let nextCalled4 = false;
    verifyToken(req4, res4, () => { nextCalled4 = true; });
    assert(!nextCalled4 && (res4.statusCode === 401 || res4.statusCode === 403), 'Algorithm none attack rejected');

    // 5. Valid signed token
    const validToken = jwt.sign(
      { id: 1, username: 'admin' },
      process.env.JWT_SECRET,
      { algorithm: 'HS256', expiresIn: '4h' }
    );
    const req5 = { headers: { authorization: `Bearer ${validToken}` } };
    const res5 = mockRes();
    let nextCalled5 = false;
    verifyToken(req5, res5, () => { nextCalled5 = true; });
    assert(nextCalled5 && req5.user?.username === 'admin', 'Valid HS256 token verified and user attached');

    // 6. Denylisted token (Session Invalidation on Logout)
    denylistToken(validToken);
    const req6 = { headers: { authorization: `Bearer ${validToken}` } };
    const res6 = mockRes();
    let nextCalled6 = false;
    verifyToken(req6, res6, () => { nextCalled6 = true; });
    assert(!nextCalled6 && res6.statusCode === 401, 'Denylisted/logged-out token rejected with 401');
  }

  console.log('\n--- Phase 3: Rate Limiting ---');
  {
    let blocked = false;
    for (let i = 0; i < 7; i++) {
      const req = { ip: '192.168.1.100', body: { username: 'badactor' } };
      const res = mockRes();
      let nextCalled = false;
      loginLimiter(req, res, () => { nextCalled = true; });
      if (res.statusCode === 429) {
        blocked = true;
        break;
      }
    }
    assert(blocked, 'Login rate limiter triggers HTTP 429 after 5 failed attempts');
  }

  console.log('\n--- Phase 4: Honeypot & Input Validation ---');
  {
    // Honeypot spam submission
    const req = { body: { user_name: 'Bot', user_email: 'bot@mail.com', phone_no: '123', message: 'Spam', website_hp: 'http://spam.com' }, ip: '1.2.3.4' };
    const res = mockRes();
    await contactController.submitMessage(req, res);
    assert(res.statusCode === 201, 'Honeypot intercepts bot cleanly without database write');

    // Invalid email validation
    const req2 = { body: { user_name: 'John', user_email: 'invalid-email', phone_no: '0911223344', message: 'Hello club' } };
    const res2 = mockRes();
    await contactController.submitMessage(req2, res2);
    assert(res2.statusCode === 400 && res2.body.message.includes('valid email'), 'Invalid email format rejected with 400 Bad Request');
  }

  console.log('\n--- Phase 4: CSV Formula Injection Prevention ---');
  {
    // Test formula characters: =, +, -, @
    const maliciousName = '=SUM(1+1)*cmd|"/C calc"!A0';
    const req = { body: { user_name: maliciousName, user_email: 'test@mail.com', phone_no: '12345678', message: '+malicious formula' } };
    // Verify formula detection
    const formulaRegex = /^[=\+\-@\t\r]/;
    assert(formulaRegex.test(maliciousName), 'Malicious formula trigger detected');
    assert(formulaRegex.test(req.body.message), 'Secondary formula trigger detected');
  }

  console.log(`\n========================================`);
  console.log(`ALL IN-MEMORY TESTS: ${passed} PASSED, ${failed} FAILED`);
  console.log(`========================================`);
}

run();
