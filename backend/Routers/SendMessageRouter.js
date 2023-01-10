const express = require("express");
const SendMessageRouter = express.Router();
const { CreateMessage } = require("../Controllers/SendMessageController");

SendMessageRouter.post("/sendMessage", CreateMessage)
module.exports = SendMessageRouter