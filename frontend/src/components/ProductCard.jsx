function ProductCard({ product, onView, highlight }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "16px",
        borderRadius: "10px",
        background: "#1e1e1e",

        // 🔥 Highlight styles
        border: highlight ? "2px solid #febd69" : "1px solid #444",
        boxShadow: highlight
          ? "0 0 14px rgba(254, 189, 105, 0.8)"
          : "none",

        transition: "all 0.3s ease"
      }}
    >
      <img
        src={
            product.image
            ? `/images/${product.image}`
            : "https://via.placeholder.com/300x200"
        }
        alt={product.name}
        style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "10px"
        }}
        />


      <h4 style={{ margin: "6px 0" }}>{product.name}</h4>

      <p style={{ margin: "4px 0" }}>₹ {product.price}</p>

      <p style={{ margin: "6px 0", color: "#f1c40f" }}>
        ⭐ {product.avgRating} ({product.numRatings})
      </p>

      <button
        onClick={() => onView(product.id)}
        style={{
          marginTop: "8px",
          padding: "8px 14px",
          borderRadius: "6px",
          border: "none",
          background: "#333",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        View
      </button>
    </div>
  );
}

export default ProductCard;
