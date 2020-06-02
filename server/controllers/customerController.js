const Customer = require("../models/customerModel");
const Adress = require("../models/adressModel");
const bcrypt = require("bcrypt");
const ServerError = require("../serverError");

//Register
const registerCustomer = async (req, res, next) => {
  //Kryptera lösenord
  const password = await bcrypt.hash(req.body.password, 10);

  //Kolla om användarnamn redan finns
  const sameEmail = await Customer.findOne({
    email: req.body.email,
  });

  //Kolla om adress redan finns
  const sameAdress = await Adress.findOne({
    street: req.body.street,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
  });

  //Om adress redan finns, referera till befintligt adress-object i databasen.
  let adress;
  if (!sameAdress) {
    adress = new Adress({
      street: req.body.street,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
    });
    await adress.save();
  } else {
    adress = sameAdress;
  }

  //Så länge inte användarnamn redan finns, registrera och lagra ny kund i databasen.
  if (!sameEmail) {
    const customer = new Customer({
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
    throw new ServerError("A Customer with that email already exists", 403);
  }
};

//Get all
const getAllCustomers = async (req, res) => {
  const customers = await Customer.find();
  if (!customers) {
    throw new ServerError("Could not get all costumers", 400);
  }
  res.status(200).json(customers);
};

//TODO -error for 500(ids length is not correct)
//Get one customer
const getCustomer = async (req, res) => {
  const customer = await Customer.findOne({ _id: req.params.id });
  if (!customer) {
    throw new ServerError("User does not exist", 400);
  }
  res.status(200).json(customer);
};

//Log in
const loginCustomer = async (req, res) => {
  const customer = await Customer.findOne({ username: req.body.username });

  if (
    !customer ||
    !(await bcrypt.compare(req.body.password, customer.password))
  ) {
    throw new ServerError("Wrong username or password", 401);
  }

  req.session.username = customer.username;
  if (customer.role === "admin") {
    req.session.role = "admin";
  } else {
    req.session.role = "customer";
  }
  res.status(200).json(customer);
};

//TODO change errorhandling?
//Logout customer
const logoutCustomer = async (req, res) => {
  req.session = null;
  res.status(200).send("Successfully logged out user");

  throw new ServerError("Could not logout", 418);
};

module.exports = {
  getCustomer,
  registerCustomer,
  getAllCustomers,
  loginCustomer,
  logoutCustomer,
};
