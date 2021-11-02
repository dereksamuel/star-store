const boom = require("@hapi/boom");

function logErrors(error, req, res, next) {
  console.error("[error]: ", error);
  next(error);
}

// eslint-disable-next-line no-unused-vars
function handleBoomError(error, req, res, next) {
  if (boom.isBoom) {
    const { output } = error;
    res.status(output?.statusCode || 500).json(output?.payload || error);
  }

  res.send(boom.badRequest(error));
}

// eslint-disable-next-line no-unused-vars
function handleErrors(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = {
  logErrors,
  handleBoomError,
  handleErrors
};
