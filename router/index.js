const express = require("express");
const productsRouter = require("./products.router.js");
const categoriesRouter = require("./categories.router.js");

function routingApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/products", productsRouter);
  router.use("/categories", categoriesRouter);
}

module.exports = routingApi;
