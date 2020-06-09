const express = require("express");
const router = express.Router();

const adminCheck = require("../controllers/adminCheck");

const {
  getOrder,
  getAllOrders,
  placeOrder,
  addAdress,
  //getAdress,
} = require("../controllers/orderController");

router.use(express.json());

//Get one order
router.get("/:id", getOrder);

//Get all orders
router.get("/", adminCheck, getAllOrders);

//Place order
router.post("/", placeOrder);

//Add Adress
router.post("/AddAdress", addAdress);

// //Get one adress
// router.get("/getAdress", getAdress);

module.exports = router;
