const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  category: [String],
  quantity: Number,
  url: String,
  price: Number,
  description: String,
  brand: String,
  designer: String,
  ref: String,
  dimensions: String,
});

module.exports = mongoose.model("product", ProductSchema);
