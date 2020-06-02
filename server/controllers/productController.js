const Product = require("../models/productModel");
const ServerError = require("../serverError");

//Get one product
const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
    });
    res.status(200).json(product);
  } catch (err) {
    throw new ServerError("Could not find product", 400);
  }
};

//Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    throw new ServerError("Could not get all products", 400);
  }
};

//Add new product
const addProduct = async (req, res) => {
  const date = Date.now();

  try {
    const product = new Product({
      category: req.body.category,
      quantity: req.body.quantity,
      url: req.body.url,
      price: req.body.price,
      description: req.body.description,
      brand: req.body.brand,
      designer: req.body.designer,
      ref: req.body.ref,
      dimensions: req.body.dimensions,
      date: date,
    });

    await product.save();
    res.status(200).json(product);
  } catch (err) {
    throw new ServerError("Could not add a new product", 400);
  }
};

const editProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    if (req.body.category) {
      product.category = req.body.category;
    }
    if (req.body.quantity) {
      product.quantity = req.body.quantity;
    }

    await product.save();

    res.status(200).json(product);
  } catch (err) {
    throw new ServerError("Could not update product", 400);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).send("Product deleted");
  } catch (err) {
    throw new ServerError("Could not delete product", 400);
  }
};

module.exports = {
  getProduct,
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct,
};
