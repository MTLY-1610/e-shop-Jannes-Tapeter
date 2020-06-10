const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const Adress = require("../models/adressModel");
const ServerError = require("../serverError");

//Get all Orders
const getAllOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("customer")
    .populate("shippingMethod")
    .populate("adress");

  if (orders.length === 0) {
    throw new ServerError("No orders found", 400);
  }
  res.status(200).json(orders);
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

//Edit order
const editOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id });
    if (req.body.shipped) {
      order.shipped = req.body.shipped;
    }

    await order.save();

    res.status(200).json(order);
  } catch (err) {
    throw new ServerError("Could not update order", 400);
  }
};

//Add Adress
const addAdress = async (req, res) => {
  try {
    const adress = new Adress({
      street: req.body.street,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
    });
    await adress.save();
    res.status(200).json(adress);
  } catch (err) {
    throw new ServerError("Could not save adress", 400);
  }
};

const placeOrder = async (req, res) => {
  const orderNumber = Math.floor(Math.random() * 1000000);
  const date = new Date();
  const formattedDate = date.toDateString();
  const slicedDate = formattedDate.slice(4);

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
      date: slicedDate,
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

module.exports = { getOrder, getAllOrders, placeOrder, addAdress, editOrder };
