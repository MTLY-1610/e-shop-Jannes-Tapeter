const mongoose = require("mongoose");

const AdressSchema = mongoose.Schema({
  street: String,
  city: String,
  zip: String,
  country: String,
});

module.exports = mongoose.model("adress", AdressSchema);
