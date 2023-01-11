const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true },
    fullAddress: { type: String, unique: true },
    region: String,
    suburb: String,
    price: String,
    specialText: String,
    bedroom: Number,
    bathroom: Number,
    parking: Number,
    numberOfTenants: Number,
    petFriendly: Boolean,
    availability: Boolean,
    furnished: Boolean,
    images: Array,
  },
  {
    collection: "Property",
  }
);

module.exports = mongoose.model("Property", UserDetailsSchema);
