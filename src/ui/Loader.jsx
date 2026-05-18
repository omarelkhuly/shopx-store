// src/ui/Loader.jsx
import React from "react";
import "../styles/Loader.css"; // لو عندك CSS خاص باللودر

/**
 * Loader Component
 * قابل لإعادة الاستخدام في جميع أنحاء المشروع
 * يمكن تخصيص الحجم واللون عبر props
 */
const Loader = ({ size = 50, color = "#4F46E5", message = "Loading..." }) => {
  const loaderStyle = {
    width: size,
    height: size,
    borderColor: `${color} transparent transparent transparent`,
  };

  return (
    <div className="loader-wrapper" style={{ textAlign: "center", padding: "2rem" }}>
      <div className="loader" style={loaderStyle}></div>
      {message && <p style={{ marginTop: "1rem", color }}>{message}</p>}
    </div>
  );
};

export default Loader;