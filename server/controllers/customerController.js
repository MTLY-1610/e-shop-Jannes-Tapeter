const Customer = require("../models/customerModel");
const bcrypt = require("bcrypt");

const registerCustomer = async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);

    const customer = new Customer({
      username: req.body.username,
      password: password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      street: req.body.street,
      zip: req.body.zip,
      phone: req.body.phone,
      email: req.body.email,
    });

    const sameUserName = await Customer.findOne({
      username: req.body.username,
    });
    if (!sameUserName) {
      const newCustomer = await customer.save();
      res.status(200).json(newCustomer);
      next();
    } else {
      res.status(403).send("Customer with that username already exist");
    }
  } catch (err) {
    res.json(err);
  }
};

const getAllCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { registerCustomer, getAllCustomers };
