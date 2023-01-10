const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema(
    {
        name: String,
        imgSrc: String,
        email: String,
        successfulClient: Number,
        email: String,
        phone: String,
        detail: String,
        availableDate: String,
        location: String,
        category: String,
    },
    {
        collection: "PropertyManagers",
    }
);

module.exports = mongoose.model("PropertyManagers", UserDetailsSchema);