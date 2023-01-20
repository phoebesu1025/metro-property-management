const PropertyManagers = require("../db/PropertyManagers");

const PropertyManagersController = async (req, res) => {
    try {

        const managers = await PropertyManagers.find();
        res.json(managers)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

module.exports = { PropertyManagersController }