const express = require("express");
const router = express.Router();
const { validatorHandler } = require("../middlewares/validation.handler");
const { getProduct, createProduct, updateProduct } = require("../schemas/products.schema");
const ProductService = require("../services/products.service");

const productInstance = new ProductService();

router.get("/", async (req, res) => {
  const { limit } = req.query;

  if (limit) {
    await productInstance.init(parseInt(limit));
  }
  const products = await productInstance.find();

  res.status(200).json(products);
});

router.get(
  "/:id",
  validatorHandler(getProduct, "params"), async (req, res) => {
  const { id } = req.params;
  const product = await productInstance.findOne(id);

  res.status(200).json(product);
});

router.post(
  "/",
  validatorHandler(createProduct, "body"), async (req, res) => {
  const product = await productInstance.create(req.body);

  res.status(201).json(product);
});

router.put("/:id",
  validatorHandler(updateProduct, "body", true), async (req, res) => {
  const { id } = req.params;
  const product = await productInstance.update(id, req.body);

  res.status(201).json(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const idDeleted = await productInstance.delete(id);

  res.status(200).json(idDeleted);
});

module.exports = router;
