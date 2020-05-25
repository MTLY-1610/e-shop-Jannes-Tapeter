const Product = require("../models/productModel");

//Get one product
const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).send("Could not find product");
  }
};

//Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

//Add new product
const addProduct = async (req, res) => {
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
    });

    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

const editProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    product.category = req.body.category;
    product.quantity = req.body.quantity;
    product.url = req.body.url;
    product.price = req.body.price;
    product.description = req.body.description;
    product.brand = req.body.brand;
    product.designer = req.body.designer;
    product.ref = req.body.ref;
    product.dimensions = req.body.dimensions;

    await product.save();

    res.status(200).json(product);
  } catch (err) {
    res.status(400).send("Could not update product");
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).send("Product deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getProduct,
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct,
};
