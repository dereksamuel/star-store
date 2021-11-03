const Joi = require("joi");
const { getCategory } = require("./categories.schema");

const id = Joi.string();
const name = Joi.string().min(1).max(50);
const price = Joi.number().min(10).max(100);
const isBlock =  Joi.bool();
const image = Joi.string().min(2);
const categories = Joi.array().items(getCategory);

const getProduct = Joi.object({
  id: id.required(),
  categories
});

const createProduct = Joi.object({
  name: name.required(),
  price: price.required(),
  isBlock,
  image
});

const updateProduct = Joi.object({
  id: id.required(),
  name: name.required(),
  price: price.required(),
  isBlock,
  image
});

module.exports = {
  getProduct,
  createProduct,
  updateProduct
};
