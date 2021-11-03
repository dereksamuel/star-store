const express = require("express");
const router = express.Router();
const { validatorHandler } = require("../middlewares/validation.handler");
const { getUser, createUser, updateUser } = require("../schemas/users.schema");
const UsersService = require("../services/users.service");

const usersInstance = new UsersService();

router.get("/", async (req, res) => {
  const users = await usersInstance.find();

  res.status(200).json(users);
});

router.get("/:user_id",
  validatorHandler(getUser, "params"), async (req, res) => {
  const { user_id } = req.params;
  const user = await usersInstance.findOne(user_id);

  res.status(200).json(user);
});

router.post("/",
  validatorHandler(createUser, "body"), async (req, res) => {
  const user = await usersInstance.create(req.body);

  res.status(201).json(user);
});

router.put("/:user_id",
  validatorHandler(updateUser, "body", true), async (req, res) => {
  const { user_id } = req.params;
  const user = await usersInstance.update(user_id, req.body);

  res.status(200).json(user);
});

router.delete("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const deletedId = await usersInstance.delete(user_id);

  res.status(200).json(deletedId);
});

module.exports = router;