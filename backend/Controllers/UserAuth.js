const User = require("../db/User");
const bcrypt = require("bcryptjs");

const UserAuth = async (req, res) => {
  try {
    const email = req.body.email;
    const currentUser = await User.findOne({ email: email });

    //console.log(findUser);
    res.json(currentUser);
  } catch (e) {
    const newError = e;
    res.status(409).send(`${newError}`);
  }
};

module.exports = { UserAuth };
