const mongoose = require("mongoose");

const OrderModel = mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "customer",
  },
  products: [Object],
  orderNumber: Number,
  shipped: Boolean,
  shippingMethod: {
    type: mongoose.Types.ObjectId,
    ref: "shippingMethod",
  },
  paymentMethod: Object,
  adress: {
    type: mongoose.Types.ObjectId,
    ref: "adress",
  },
  totalPrice: Number,
});

module.exports = mongoose.model("order", OrderModel);
