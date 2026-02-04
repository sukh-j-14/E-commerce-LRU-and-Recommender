import { useEffect, useState } from "react";
import { fetchRecentlyViewed } from "../services/api";

function RecentlyViewed({ refreshKey, onViewProduct }) {
  const [items, setItems] = useState([]);

  const loadRecentlyViewed = async () => {
    const res = await fetchRecentlyViewed();
    setItems(res.data || []);
  };

  useEffect(() => {
    loadRecentlyViewed();
  }, [refreshKey]);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "260px",
        background: "#fff",
        color : "#111",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      <h4 style={{ marginBottom: "10px", color :"#111" }}>🕒 Recently Viewed</h4>

      {items.length === 0 && (
        <p style={{ fontSize: "14px", color: "#777" }}>
          No products viewed yet
        </p>
      )}

      {items.map((p) => (
        <div
        key={p.id}
        onClick={() => onViewProduct(p.id)}
        style={{
            display: "flex",
            gap: "8px",
            marginBottom: "8px",
            cursor: "pointer",
            alignItems: "center"
        }}
        >
        <img
            src={
            p.image
                ? `/images/${p.image}`
                : "https://via.placeholder.com/40"
            }
            alt={p.name}
            style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "4px"
            }}
        />

        <div>
            <div style={{ fontSize: "13px", color: "#111" }}>
            {p.name}
            </div>
            <div style={{ fontSize: "12px", color: "#333" }}>
            ₹ {p.price}
            </div>
        </div>
        </div>
        ))}
    </div>
  );
}

export default RecentlyViewed;
