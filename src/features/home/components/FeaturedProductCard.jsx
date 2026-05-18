// src/features/home/components/FeaturedProductCard.jsx
import React from "react";
import "@/styles/product.css";

const FeaturedProductCard = ({ product }) => {
  return (
    <div className="featured-product-card">
      <div className="image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <h3 className="product-title">{product.title}</h3>

      <span className="product-span">
        {product.description}
      </span>

      <p className="product-price">
        ${product.price}
      </p>
    </div>
  );
};

export default FeaturedProductCard;