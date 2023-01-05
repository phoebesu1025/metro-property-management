const express = require("express");
const { Register } = require("../Controllers/Register");

const karanRouter = express.Router();

karanRouter.post("/register", Register);

module.exports = {
  karanRouter,
};
