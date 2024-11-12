// utils.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    phone: user.phone,
    isAdmin: user.isAdmin,
  }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = { generateToken }; // Export as an object with named property
