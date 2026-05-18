import React from "react";

const BrandCard = ({ brand }) => {
  return (
    <div className="brand-card">

      <img
        src={brand.logo}
        alt={brand.name}
        className="brand-logo"
      />

      <h4 className="brand-name">
        {brand.name}
      </h4>

    </div>
  );
};

export default BrandCard;