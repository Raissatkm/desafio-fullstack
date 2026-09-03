function errorMiddleware(
  error,
  req,
  res,
  next
) {
  console.error(error);

  const statusCode =
    error.statusCode || 500;

  const message =
    error.message ||
    'Erro interno do servidor';

  return res.status(statusCode).json({
    message,
  });
}

module.exports = errorMiddleware;