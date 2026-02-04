const express = require("express");
const router = express.Router();
const { getRecentlyViewed } = require("../services/recentlyViewed");

// GET /recently-viewed
router.get("/", (req, res) => {
  const items = getRecentlyViewed();
  res.json({
    count: items.length,
    data: items
  });
});

module.exports = router;
