const jwt = require('jsonwebtoken');

function createToken(payload) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET não configurado');
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
}

function decodeToken(token) {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET não configurado');
    }

    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}

module.exports = {
  createToken,
  decodeToken,
};