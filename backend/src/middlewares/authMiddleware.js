const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authorization =
    req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      message: 'Não autorizado',
    });
  }

  const [type, token] =
    authorization.split(' ');

  if (type !== 'Bearer' || !token) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.userId = decoded.userId;
    req.email = decoded.email;

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Sessão inválida ou expirada',
    });
  }
}

module.exports = authMiddleware;