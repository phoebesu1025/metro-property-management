const express = require("express");
const { AddProperty } = require("../Controllers/AddProperty");
const { Bonnie } = require("../Controllers/Bonnie");
const { Login } = require("../Controllers/Login");
const { Register } = require("../Controllers/Register");
const { SearchProperty } = require("../Controllers/SearchProperty");
const { StevePM } = require("../Controllers/StevePM");
const { UserAuth } = require("../Controllers/UserAuth");

const karanRouter = express.Router();

karanRouter.post("/register", Register);

karanRouter.post("/login", Login);

karanRouter.post("/login/stevePM", StevePM);

karanRouter.post("/addproperty", AddProperty);

karanRouter.post("/property-search", SearchProperty);

karanRouter.post("/auth/user", UserAuth);

karanRouter.post("/bonnie", Bonnie);

module.exports = {
  karanRouter,
};
