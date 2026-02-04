function Navbar({ onShowRecommendations }) {
  return (
    <div style={navbarStyle}>
      {/* Left: Brand */}
      <div style={brandStyle}>
        🛒 ShopSmart
      </div>

      {/* Center: Search */}
      <input
        type="text"
        placeholder="Search products"
        style={searchStyle}
      />

      {/* Right: Actions */}
      <div style={actionsStyle}>
        <button
          style={recButtonStyle}
          onClick={onShowRecommendations}
        >
          ⭐ Recommendations
        </button>

        <div style={userStyle}>👤</div>
      </div>
    </div>
  );
}

const navbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
  background: "#131921",
  color: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  width: "100%"   
};

const brandStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer"
};

const searchStyle = {
  width: "40%",
  padding: "8px",
  borderRadius: "4px",
  border: "none"
};

const actionsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px"
};

const recButtonStyle = {
  background: "#febd69",
  border: "none",
  padding: "8px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold"
};

const userStyle = {
  fontSize: "20px",
  cursor: "pointer"
};

export default Navbar;
