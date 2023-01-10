const express = require("express");
const { Login } = require("../Controllers/Login");
const { Register } = require("../Controllers/Register");

const karanRouter = express.Router();

karanRouter.post("/register", Register);

karanRouter.post("/login", Login);

module.exports = {
  karanRouter,
};
