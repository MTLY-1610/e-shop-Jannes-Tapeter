const ShippingMethod = require("../models/shippingMethod");
const ServerError = require("../serverError");

//Add Shipping Method
const addShippingMethod = async (req, res) => {
  try {
    const shippingMethod = new ShippingMethod({
      company: req.body.company,
      deliveryTime: req.body.deliveryTime,
      price: req.body.price,
    });

    await shippingMethod.save();
    res.status(200).json(shippingMethod);
  } catch (err) {
    throw new ServerError("Could not add shipping method", 400)
  }
};

//Get all shipping methods
const getAllShippingMethods = async (req, res) => {
  try {
    const shippingMethods = await ShippingMethod.find();
    res.status(200).json(shippingMethods);
  } catch (err) {
    throw new ServerError("Could not find any shipping methods", 400);
  }
};

module.exports = { getAllShippingMethods, addShippingMethod };
