const mongoose = require('mongoose');

const SubscribeSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {
        collection: "Subscribe",
    }
);

module.exports = mongoose.model("Subscribe", SubscribeSchema);