// Server-Side Token Denylist (Session Invalidation)
// Ensures logged out tokens cannot be reused even before their natural expiration.

const denylistedTokens = new Map();

// Periodic purge of expired tokens from the denylist
setInterval(() => {
  const now = Date.now();
  for (const [token, expiry] of denylistedTokens.entries()) {
    if (now > expiry) {
      denylistedTokens.delete(token);
    }
  }
}, 10 * 60 * 1000).unref();

function denylistToken(token, expiryMs = 4 * 60 * 60 * 1000) {
  if (!token) return;
  const expiresAt = Date.now() + expiryMs;
  denylistedTokens.set(token, expiresAt);
}

function isTokenDenylisted(token) {
  if (!token) return false;
  const expiry = denylistedTokens.get(token);
  if (!expiry) return false;
  if (Date.now() > expiry) {
    denylistedTokens.delete(token);
    return false;
  }
  return true;
}

module.exports = {
  denylistToken,
  isTokenDenylisted
};

