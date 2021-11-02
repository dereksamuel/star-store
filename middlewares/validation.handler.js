const boom = require("@hapi/boom");

function validatorHandler(schema, property = "query", optionalObject) {
  return (req, res, next) => {
    const data = optionalObject ? {
      ...req.params,
      ...req.body
    } : req[property];
    const { error } = schema.validate(data, { abortEarly: false, });

    if (error) {
      next(boom.badRequest(error));
    }

    next();
  };
}

module.exports = {
  validatorHandler
};