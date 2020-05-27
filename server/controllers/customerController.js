const Customer = require("../models/customerModel");
const Adress = require("../models/adressModel");
const bcrypt = require("bcrypt");
const ServerError = require("../serverError")

//Register
const registerCustomer = async (req, res, next) => {
  try {
    //Kryptera lösenord
    const password = await bcrypt.hash(req.body.password, 10);

    //Kolla om användarnamn redan finns
    const sameUserName = await Customer.findOne({
      username: req.body.username,
    });

    //Kolla om adress redan finns
    const sameAdress = await Adress.findOne({
      street: req.body.street,
      city: req.body.city,
      zip: req.body.zip,
    });

    //Om adress redan finns, referera till befintligt adress-object i databasen.
    if (!sameAdress) {
      let adress;
      adress = new Adress({
        street: req.body.street,
        city: req.body.city,
        zip: req.body.zip,
      });
      await adress.save();
    } else {
      adress = sameAdress;
    }

    //Så länge inte användarnamn redan finns, registrera och lagra ny kund i databasen.
    if (!sameUserName) {
      const customer = new Customer({
        username: req.body.username,
        password: password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        adress: adress,
        phone: req.body.phone,
        email: req.body.email,
        role: req.body.role,
      });
      const newCustomer = await customer.save();
      res.status(200).json(newCustomer);
    } else {
      throw new ServerError("Customer with that username already exist", 403);
    }
  } catch (err) {
    next (err);
  }
};

//Get all
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    throw new ServerError('Could not get all costumers...', 400);
  }
};

//Get one customer
const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });
    res.status(200).json(customer);
  } catch (err) {
    throw new ServerError('User does not exist...', 400)
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
      throw new ServerError('Wrong username or password', 401)
    }

    req.session.username = customer.username;
    if (customer.role === "admin") {
      req.session.role = "admin";
    } else {
      req.session.role = "customer";
    }

    res.status(200).json(customer);
  } catch (err) {
    throw err
  }
};

//Logout customer
const logoutCustomer = async (req, res) => {
  try {
    req.session = null;
    res.status(200).send("Successfully logged out user");
  } catch {
    throw new ServerError('Could not logout user..', 418)
  }
};

module.exports = {
  getCustomer,
  registerCustomer,
  getAllCustomers,
  loginCustomer,
  logoutCustomer,
};
