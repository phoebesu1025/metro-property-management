const express = require("express");
const PropertyManagersRouter = express.Router();

const { PropertyManagersController } = require('../Controllers/PropertyManagerController')
const { PropertyManagersIdController } = require('../Controllers/PropertyManagerIdController')
const { PropertyManagerFilterController } = require('../Controllers/PropertyManagerFilterController')

// Get all Property Managers' Info
PropertyManagersRouter.get("/PropertyManagers", PropertyManagersController);

//Post by req.query to filter manager's location/category
PropertyManagersRouter.post("/PropertyManagers", PropertyManagerFilterController);

//Get individual manager by req.param with id
PropertyManagersRouter.get("/PropertyManagers/:id", PropertyManagersIdController);

module.exports = PropertyManagersRouter;