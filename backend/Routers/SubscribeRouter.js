const express = require('express');
const Subscribe = require('../db/Subscribe');
const SubscribeRouter = express.Router();

SubscribeRouter.post("/subscribe", async (req, res) => {
    try {
        const { email } = req.body;
        const emailExists = await Subscribe.findOne({ email: email });
        console.log(emailExists);
        if (emailExists) {
            throw new Error(`${email} already exists`);
        }
        const subscribe = await Subscribe.create({
            email
        });
        console.log(subscribe);
        res.status(200).json(subscribe);
    } catch (e) {
        const newError = e;
        res.status(400).send(`${newError}`);
    }
})
module.exports = SubscribeRouter

