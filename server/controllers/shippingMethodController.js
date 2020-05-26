const ShippingMethod = require("../models/shippingMethod");

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
    res.status(400).json(err);
  }
};

//Get all shipping methods
const getAllShippingMethods = async (req, res) => {
  try {
    const shippingMethods = await ShippingMethod.find();
    res.status(200).json(shippingMethods);
  } catch (err) {
    res.status(400).send("Could not find any shipping methods");
  }
};

module.exports = { getAllShippingMethods, addShippingMethod };
