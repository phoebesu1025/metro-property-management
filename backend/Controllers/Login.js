const User = require("../db/User");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      throw new Error(`User Not Found`);
    }
    console.log(password, findUser.password);
    const isCorrectPassword = bcrypt.compareSync(password, findUser.password);
    console.log(isCorrectPassword);
    if (!isCorrectPassword) {
      throw new Error(`Incorrect passwords`);
    }

    //console.log(findUser);
    res.json(findUser);
  } catch (e) {
    const newError = e;
    res.status(409).send(`${newError}`);
  }
};

module.exports = { Login };
