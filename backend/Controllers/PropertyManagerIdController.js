const PropertyManagers = require("../db/PropertyManagers");


const PropertyManagersIdController = async (req, res) => {
    try {
        const { id } = req.params
        const managers = await PropertyManagers.findById(id);
        console.log(managers);
        res.json(managers)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};




module.exports = { PropertyManagersIdController }