import React from "react";

const ProductRating = ({ rating }) => {
  const stars = Math.round(rating);
  return (
    <div className="product-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < stars ? "star filled" : "star"}>
          ★
        </span>
      ))}
      <span className="rating-number">{rating.toFixed(1)}</span>
    </div>
  );
};

export default ProductRating;