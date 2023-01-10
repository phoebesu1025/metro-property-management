const BonnieUser = require("../db/BonnieUser");

const Bonnie = async (req, res) => {
  try {
    console.log(req.query);
    const user = await BonnieUser.findOne(req.query);
    console.log(user);
    res.json(user);
  } catch (e) {
    const newError = e;
    res.status(409).send(`${newError}`);
  }
};

module.exports = { Bonnie };
