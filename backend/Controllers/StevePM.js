const PropertyManagers = require("../db/PropertyManagers");

//post new Subscription
const StevePM = async (req, res) => {
  try {
    const { name } = req.body;
    const steve = await PropertyManagers.findOne({ name: name });
    if (!steve) {
      throw new Error(`${steve} not found`);
    }
    res.json(steve);
  } catch (e) {
    res.send({ status: "error" });
    console.log(e);
  }
};

module.exports = {
  StevePM,
};
