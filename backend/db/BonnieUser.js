const mongoose = require("mongoose");

const BonnieUserSchema = new mongoose.Schema({
  name: {
    fName: { type: String },
    lName: { type: String },
  },
  email: { type: String, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("BonnieUser", BonnieUserSchema);
