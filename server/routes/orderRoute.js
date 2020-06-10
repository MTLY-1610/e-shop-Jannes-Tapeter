const express = require("express");
const router = express.Router();

const adminCheck = require("../controllers/adminCheck");

const {
  getOrder,
  getAllOrders,
  placeOrder,
  addAdress,
} = require("../controllers/orderController");

router.use(express.json());

//Get one order
router.get("/:id", getOrder);

//Get all orders
router.get("/", getAllOrders);

//Place order
router.post("/", placeOrder);

//Add Adress
router.post("/AddAdress", addAdress);

module.exports = router;
