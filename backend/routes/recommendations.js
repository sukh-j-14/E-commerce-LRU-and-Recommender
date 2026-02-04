const express = require("express");
const router = express.Router();

const { getTopKRecommendations } = require("../services/cppRunner");
const products = require("../data/products.json");

router.get("/", async (req, res) => {
  const k = parseInt(req.query.k) || 5;

  try {
    // 1️⃣ Get ranked IDs + scores from C++
    const recommendations = await getTopKRecommendations(k);

    // 2️⃣ Merge with full product details
    const enrichedRecommendations = recommendations.map(rec => {
      const product = products.find(p => p.id === rec.id);

      if (!product) return null;

      return {
        ...product,      // name, price, rating, image, etc
        score: rec.score // add score from C++
      };
    }).filter(Boolean);

    // 3️⃣ Send enriched data
    res.json({
      source: "cpp-engine",
      count: enrichedRecommendations.length,
      data: enrichedRecommendations
    });

  } catch (err) {
    res.status(500).json({
      error: "Failed to generate recommendations",
      details: err.toString()
    });
  }
});

module.exports = router;
