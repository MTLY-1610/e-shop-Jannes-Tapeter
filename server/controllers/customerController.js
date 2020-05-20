const Customer = require("../models/customerModel");
const bcrypt = require("bcrypt");

//Register
const registerCustomer = async (req, res) => {
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
    } else {
      res.status(403).send("Customer with that username already exist");
    }
  } catch (err) {
    res.json(err);
  }
};

//Get all
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(400).json(err);
  }
};

//Get one customer
const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });
    res.status(200).json(customer);
  } catch (err) {
    res.status(400).json(err);
  }
};

//Log in
const loginCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ username: req.body.username });

    if (
      !customer ||
      !(await bcrypt.compare(req.body.password, customer.password))
    ) {
      return res.status(401).json("Wrong username or password");
    }

    req.session.username = customer.username;
    if (customer.role === "admin") {
      req.session.role = "admin";
    } else {
      req.session.role = "customer";
    }

    res.status(200).json(customer);
  } catch (err) {
    res.status(400).json(err);
  }
};

//Logout customer
const logoutCustomer = async (req, res) => {
  try {
    req.session = null;
    res.status(200).send("Successfully logged out user");
  } catch {
    res.status(418).send("Could not log out user");
  }
};

module.exports = {
  getCustomer,
  registerCustomer,
  getAllCustomers,
  loginCustomer,
  logoutCustomer,
};
