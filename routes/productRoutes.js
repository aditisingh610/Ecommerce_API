const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

// Create a new product
router.post("/create", ProductController.createProduct);

// List all products
router.get("/", ProductController.listProducts);

// Delete a product by ID
router.delete("/:id", ProductController.deleteProduct);

// Update the quantity of a product
router.post("/update_quantity/:id", ProductController.updateProductQuantity);

module.exports = router;
