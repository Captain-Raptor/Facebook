const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expired) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: expired,
  });
};



// Generate JWT for account verification
exports.generateVerificationToken = (email) => {
  return jwt.sign({ email }, 'your_secret_key', { expiresIn: '1d' });
};

// Verify JWT received from email link
exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    return decoded.email;
  } catch (err) {
    return null; // Invalid or expired token
  }
};
