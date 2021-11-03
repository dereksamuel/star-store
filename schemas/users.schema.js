const Joi = require("joi");
const { createProduct, updateProduct } = require("./products.schema");

const fullName = Joi
  .string()
  .min(1)
  .max(50);

const email = Joi.string().email();

const password = Joi
  .string()
  .min(8)
  .max(70);

const getUser = Joi.object({
  user_id: Joi.string().required()
});

const createUser = Joi.object({
  fullName: fullName.required(),
  email: email.required(),
  password,
  products: Joi.array().items(createProduct),
});

const updateUser = Joi.object({
  user_id: Joi.string(),
  fullName: fullName.required(),
  email: email.required(),
  password,
  products: Joi.array().items(updateProduct),
});

module.exports = {
  getUser,
  createUser,
  updateUser
};
