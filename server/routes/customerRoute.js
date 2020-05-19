const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  registerCustomer,
} = require("../controllers/customerController");

router.use(express.json());

//Get all users
router.get("/", getAllCustomers);

//Register new user
router.post("/register", registerCustomer);

module.exports = router;
