const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: { type: String, unique: true },
        password: String
    },
    {
        collection: "UserInfo",
    }
);

module.exports = mongoose.model("UserInfo", UserDetailsSchema);