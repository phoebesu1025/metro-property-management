const Property = require("../db/Property");

const AddProperty = async (req, res) => {
  try {
    console.log(req.body);

    const createdProperty = await Property.create(req.body);

    res.send(createdProperty);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { AddProperty };
