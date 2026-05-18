import React, { useState } from "react";

const ProductVariants = ({ variants }) => {
  const [selected, setSelected] = useState(variants?.[0] || null);

  if (!variants || variants.length === 0) return null;

  return (
    <div className="product-variants">
      <h4>Select Variant:</h4>
      <div className="variants-list">
        {variants.map((variant, idx) => (
          <button
            key={idx}
            className={`variant-btn ${selected === variant ? "selected" : ""}`}
            onClick={() => setSelected(variant)}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariants;