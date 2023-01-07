const express = require("express");
const PropertyManagersRouter = express.Router();
const PropertyManagers = require("../db/PropertyManagers");

// Get all Property Managers' Info
PropertyManagersRouter.get("/PropertyManagers", (req, res, next) => {
    PropertyManagers.find()

        .exec()
        .then((doc) => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});
/////////////////////////////////
PropertyManagersRouter.get("/PropertyManagers/:id", (req, res, next) => {
    res.json("hi")
});






module.exports = PropertyManagersRouter;