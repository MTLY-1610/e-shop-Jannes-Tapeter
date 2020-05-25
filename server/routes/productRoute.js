const express = require("express");
const router = express.Router();

const adminCheck = require("../controllers/adminCheck");

const {
  getProduct,
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");

router.use(express.json());

// //Get one product
router.get("/:id", getProduct);

// //Get all customers
router.get("/", getAllProducts);

//Register new customer
router.post("/", addProduct);

//Edit product
router.put("/:id", editProduct);

//Delete product
router.delete("/:id", deleteProduct);

module.exports = router;
