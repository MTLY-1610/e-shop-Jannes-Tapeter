const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  street: String,
  city: String,
  zip: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model("customer", CustomerSchema);
