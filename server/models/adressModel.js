const mongoose = require("mongoose");

const AdressSchema = mongoose.Schema({
  street: String,
  city: String,
  zip: Number,
});

module.exports = mongoose.model("adress", AdressSchema);
