import { useEffect, useState, useRef } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Products({ onProductView, selectedProductId }) {
  const [products, setProducts] = useState([]);

  // 🔥 map: productId -> DOM element
  const productRefs = useRef({});

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // 🔥 SCROLL when selected product changes
  useEffect(() => {
    if (
      selectedProductId &&
      productRefs.current[selectedProductId]
    ) {
      productRefs.current[selectedProductId].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [selectedProductId]);

  const handleView = async (id) => {
    await onProductView(id);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <h2>Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px",
            marginTop: "20px"
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              ref={(el) => (productRefs.current[p.id] = el)}
            >
              <ProductCard
                product={p}
                onView={handleView}
                highlight={p.id === selectedProductId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
