const express = require("express");
const router = express.Router();
const adminCheck = require("../controllers/adminCheck");

const {
  getCustomer,
  getAllCustomers,
  registerCustomer,
  loginCustomer,
  logoutCustomer,
  editCustomer,
} = require("../controllers/customerController");

router.use(express.json());

//Get one customer
router.get("/:id", getCustomer);

//Get all customers
router.get("/", getAllCustomers);

//Register new customer
router.post("/register", registerCustomer);

//Login customer
router.post("/login", loginCustomer);

//Logout customer
router.post("/logout", logoutCustomer);

//Edit customer role
router.put("/:id", adminCheck, editCustomer);

module.exports = router;
