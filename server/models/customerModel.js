const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  adress: {
    type: mongoose.Types.ObjectId,
    ref: "adress",
  },
  phone: String,
  email: String,
  role: String,
});

module.exports = mongoose.model("customer", CustomerSchema);
