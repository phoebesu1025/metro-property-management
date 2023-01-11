const Property = require("../db/Property");

const SearchProperty = async (req, res) => {
  try {
    console.log(req.query);

    const findProperty = await Property.find(req.query);
    if (!findProperty) {
      throw new Error("No property found");
    }

    res.send(findProperty);
  } catch (e) {
    const newError = e;
    res.status(409).send(`${newError}`);
  }
};

module.exports = { SearchProperty };
