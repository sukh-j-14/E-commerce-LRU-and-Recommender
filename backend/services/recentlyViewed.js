const LRUCache = require("./lruCache");

// Keep last 5 viewed products
const recentlyViewedCache = new LRUCache(5);

function addRecentlyViewed(product) {
  recentlyViewedCache.put(product.id, product);
}

function getRecentlyViewed() {
  // Map keeps order → newest at end
  return Array.from(recentlyViewedCache.map.values()).reverse();
}

module.exports = {
  addRecentlyViewed,
  getRecentlyViewed
};
