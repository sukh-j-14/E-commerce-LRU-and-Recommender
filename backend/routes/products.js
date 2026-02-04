const express = require("express");
const router = express.Router();
const products = require("../data/products.json");
const { addRecentlyViewed } = require("../services/recentlyViewed");

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET single product + track recently viewed
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  //  Track recently viewed
  addRecentlyViewed(product);

  res.json(product);
});

module.exports = router;
