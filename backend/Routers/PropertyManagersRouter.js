const express = require("express");
const PropertyManagersRouter = express.Router();

const { PropertyManagersController } = require('../Controllers/PropertyManagerController')
const { PropertyManagersIdController } = require('../Controllers/PropertyManagerIdController')
const { PropertyManagerFilterController } = require('../Controllers/PropertyManagerFilterController')

// Get all Property Managers' Info
PropertyManagersRouter.get("/PropertyManagers", PropertyManagersController);
PropertyManagersRouter.post("/PropertyManagers", PropertyManagerFilterController);
PropertyManagersRouter.get("/PropertyManagers/:id", PropertyManagersIdController);







module.exports = PropertyManagersRouter;