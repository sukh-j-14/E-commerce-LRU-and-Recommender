const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

const recommendationRoutes = require("./routes/recommendations");
app.use("/recommendations", recommendationRoutes);

const recentlyViewedRoutes = require("./routes/recentlyViewed");
app.use("/recently-viewed", recentlyViewedRoutes);

// Root route (test)
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
