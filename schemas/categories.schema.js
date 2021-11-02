const Joi = require("joi");

const id = Joi.string();
const label = Joi.string().min(1).max(150);

const getCategory = Joi.object({
  id: id.required()
});

const createCategory = Joi.object({
  label: label.required()
});

const updateCategory = Joi.object({
  id: id.required(),
  label: label.required()
});

module.exports = {
  getCategory,
  createCategory,
  updateCategory
};