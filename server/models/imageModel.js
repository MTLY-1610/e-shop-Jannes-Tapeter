const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  img: String,
});

module.exports = mongoose.model("uploadedImage", ImageSchema);
