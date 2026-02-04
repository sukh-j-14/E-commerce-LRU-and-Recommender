import { useEffect, useState } from "react";
import { fetchRecommendations } from "../services/api";

function RecommendationsModal({ open, onClose, onSelectProduct }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      fetchRecommendations(5).then((res) => {
        setItems(res.data || []);
        setLoading(false);
      });
    }
  }, [open]);

  if (!open) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>⭐ Top Recommendations</h3>

        {loading && <p>Loading recommendations...</p>}

        
        {!loading &&
        items.map((p) => (
            <div
            key={p.id}
            onClick={() => onSelectProduct(p.id)}
            style={{
                display: "flex",
                gap: "10px",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                alignItems: "center"
            }}
            >
            <img
                src={
                p.image
                    ? `/images/${p.image}`
                    : "https://via.placeholder.com/60"
                }
                alt={p.name}
                style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "6px"
                }}
            />

            <div>
                <strong style={{ color: "#111" }}>{p.name}</strong>

                <div style={{ fontSize: "13px", color: "#333" }}>
                ₹ {p.price}
                </div>

                <div style={{ fontSize: "12px", color: "#f1c40f" }}>
                ⭐ {p.avgRating} ({p.numRatings})
                </div>
            </div>
            </div>
        ))}

        <button onClick={onClose} style={{ marginTop: "12px" }}>
          Close
        </button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "#fff",
  color: "#111",
  padding: "20px",
  borderRadius: "8px",
  width: "320px",
  maxHeight: "80vh",
  overflowY: "auto"
};

export default RecommendationsModal;
