import React from "react";

const Skeleton = ({ width = "100%", height = "20px" }) => {
  return (
    <div
      style={{
        width,
        height,
        background: "#eee",
        borderRadius: "6px",
        animation: "pulse 1.5s infinite",
      }}
    />
  );
};

export default Skeleton;