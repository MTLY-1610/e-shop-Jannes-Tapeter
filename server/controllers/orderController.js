const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ServerError = require("../serverError");

//Get all Orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer")
      .populate("shippingMethod")
      .populate("adress");
    res.status(200).json(orders);
  } catch (err) {
    throw new ServerError('No orders found', 400)
  }
};

//Get one Order
const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
    });
    res.status(200).json(order);
  } catch (err) {
    throw new ServerError("Could not find order", 400);
  }
};

const placeOrder = async (req, res) => {
  const orderNumber = Math.floor(Math.random() * 1000000);

  try {
    const order = new Order({
      customer: req.body.customer,
      products: req.body.products,
      orderNumber: orderNumber,
      shipped: false,
      shippingMethod: req.body.shippingMethod,
      paymentMethod: req.body.paymentMethod,
      adress: req.body.adress,
      totalPrice: req.body.totalPrice,
    });

    await order.save();

    //Decrease quantity on the products ordered
    for (const product of req.body.products) {
      let productToDecrease = await Product.findOne({ _id: product });
      if (productToDecrease) {
        productToDecrease.quantity--;
        await productToDecrease.save();
      }
    }

    res.status(200).json(order);
  } catch (err) {
    throw new ServerError("Could not place order", 400);
  }
};

module.exports = { getOrder, getAllOrders, placeOrder };
