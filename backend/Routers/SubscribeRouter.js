const express = require('express');
const SubscribeRouter = express.Router();
const { CreateSubscribe, } = require('../Controllers/SubscribeController')


SubscribeRouter.post("/subscribe", CreateSubscribe)
module.exports = SubscribeRouter

