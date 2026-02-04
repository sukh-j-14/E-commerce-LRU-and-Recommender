import { useState } from "react";
import Products from "./pages/Products";
import RecentlyViewed from "./components/RecentlyViewed";
import Navbar from "./components/Navbar";
import RecommendationsModal from "./components/RecommendationsModal";
import { fetchProductById } from "./services/api";

function App() {
  const [refreshRV, setRefreshRV] = useState(0);
  const [showRecs, setShowRecs] = useState(false);

  // 🔥 NEW: track selected product
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductView = async (id) => {
    await fetchProductById(id);      // backend LRU update
    setSelectedProductId(id);        // 🔥 track selection
    setRefreshRV(prev => prev + 1);  // refresh recently viewed
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Navbar onShowRecommendations={() => setShowRecs(true)} />

      {/* 🔥 pass selectedProductId */}
      <Products
        onProductView={handleProductView}
        selectedProductId={selectedProductId}
      />

      <RecentlyViewed
        refreshKey={refreshRV}
        onViewProduct={handleProductView}
      />

      <RecommendationsModal
        open={showRecs}
        onClose={() => setShowRecs(false)}
        // 🔥 allow clicking recommendations
        onSelectProduct={(id) => {
          setShowRecs(false);
          handleProductView(id);
        }}
      />
    </div>
  );
}

export default App;
