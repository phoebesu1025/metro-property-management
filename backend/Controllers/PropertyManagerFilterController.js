const PropertyManagers = require("../db/PropertyManagers");

const PropertyManagerFilterController = async (req, res) => {
    try {
        console.log(req.query);
        const user = await PropertyManagers.find(req.query);
        console.log(user);
        res.json(user);
    } catch (e) {
        const newError = e;
        res.status(409).send(`${newError}`);
    }
};

module.exports = { PropertyManagerFilterController };
