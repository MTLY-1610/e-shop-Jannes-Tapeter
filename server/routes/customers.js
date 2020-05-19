const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Customer = require("../models/customer");

router.use(express.json());

//Get all users
router.get("/", async (req, res) => {
  try {
    console.log(Customer);
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Register new user
router.post("/register", async (req, res) => {
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
});

module.exports = router;
