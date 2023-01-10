const mongoose = require('mongoose');

const SendMessageSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: Number,
        prefer: String,
        message: String
    },
    {
        collection: "SendMessage",
    }
);

module.exports = mongoose.model("SendMessage", SendMessageSchema);