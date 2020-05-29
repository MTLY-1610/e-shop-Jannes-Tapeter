const Image = require("../models/imageModel");

const addImage = async (req, res) => {
  try {
    const uploadedImage = new Image({
      img: req.file.path,
      namn: req.body.namn,
    });
    await uploadedImage.save();
    res.status(200).json(uploadedImage);
  } catch (err) {
    console.log(err);
  }
};

const getImage = async (req, res) => {
  const productImage = await Image.findById(req.params.id);
  res.status(200).json(productImage);
};

module.exports = { addImage, getImage };
