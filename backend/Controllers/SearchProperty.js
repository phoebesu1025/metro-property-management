const Property = require("../db/Property");

const SearchProperty = async (req, res) => {
  try {
    console.log(req.body);
    const findProperty = await Property.find(req.body);
    if (findProperty.length === 0) {
      throw new Error("No property matching your filtering");
    }

    res.send(findProperty);
  } catch (e) {
    const newError = e;
    res.status(409).send(`${newError}`);
  }
};

module.exports = { SearchProperty };

/*
  if (req.query.region === "All Regions") {
      req.query.region = `$exists:${true}`;
    }

    console.log(req.body);
    let customQuery = "";
    const queryArray = Object.keys(req.query);

    queryArray.forEach((path) => {
      customQuery = customQuery + `${path} : ${req.query.path},`;
    });

    console.log(customQuery);

*/
