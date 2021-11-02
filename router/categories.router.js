const express = require("express");
const router = express.Router();
const { validatorHandler } = require("../middlewares/validation.handler");
const { getCategory, createCategory, updateCategory } = require("../schemas/categories.schema");
const CategorieService = require("../services/categories.service");

const categoriesInstance = new CategorieService();

router.get("/", async (req, res) => {
  const categories = await categoriesInstance.find();

  res.status(200).json(categories);
});

router.get("/:id",
  validatorHandler(getCategory, "params"), async (req, res) => {
  const { id } = req.params;
  const category = await categoriesInstance.findOne(id);

  res.status(200).json(category);
});

router.post("/",
  validatorHandler(createCategory, "body"), async (req, res) => {
  const category = await categoriesInstance.create(req.body);

  res.status(201).json(category);
});

router.put("/:id",
  validatorHandler(updateCategory, "body", true), async (req, res) => {
  const { id } = req.params;
  const category = await categoriesInstance.update(id, req.body);

  res.status(200).json(category);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedId = await categoriesInstance.delete(id);

  res.status(200).json(deletedId);
});

module.exports = router;
