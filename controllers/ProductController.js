const Product = require("../models/Product");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();
    res.json({ product });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// List all products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndRemove(productId);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update the quantity of a product
exports.updateProductQuantity = async (req, res) => {
  try {
    const productId = req.params.id;
    const { number } = req.query;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    product.quantity += parseInt(number);
    await product.save();
    res.json({ product, message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
