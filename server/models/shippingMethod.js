const mongoose = require("mongoose");

const ShippingMethodModel = mongoose.Schema({
  company: String,
  deliveryTime: Number,
  price: Number,
});

module.exports = mongoose.model("shippingMethod", ShippingMethodModel);
