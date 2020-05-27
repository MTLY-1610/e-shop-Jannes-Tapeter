const express = require("express");
const router = express.Router();

const adminCheck = require("../controllers/adminCheck");

const {
  getAllShippingMethods,
  addShippingMethod,
} = require("../controllers/shippingMethodController");

router.use(express.json());

//Get all shippingMethods
router.get("/", getAllShippingMethods);

//Add ShippingMethod
router.post("/", adminCheck, addShippingMethod);

module.exports = router;
