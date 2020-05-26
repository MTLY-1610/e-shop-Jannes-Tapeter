const Order = require("../models/orderModel");

//Get all Orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer")
      .populate("shippingMethod")
      .populate("adress");
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).send("No orders found");
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
    res.status(400).send("Could not find order");
  }
};

const placeOrder = async (req, res) => {
  const orderNumber = Math.floor(Math.random() * 10000);

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
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getOrder, getAllOrders, placeOrder };
