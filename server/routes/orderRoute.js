const express = require("express");
const router = express.Router();

const adminCheck = require("../controllers/adminCheck");

const {
  getOrder,
  getAllOrders,
  placeOrder,
} = require("../controllers/orderController");

router.use(express.json());

//et one order
router.get("/:id", getOrder);

//Get all orders
router.get("/", getAllOrders);

//Place order
router.post("/", placeOrder);

module.exports = router;
