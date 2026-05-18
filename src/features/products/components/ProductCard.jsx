// src/features/products/components/ProductCard.jsx
import React from "react";
import { useCart } from "../../../core/hooks/useCart";
import { useWishlist } from "../../../core/hooks/useWishlist";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const favorite = isInWishlist(product.id);

  return (
    <div className="product-card">
      <div style={{ position: "relative" }}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        <button
          onClick={() => toggleWishlist(product)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "white",
            cursor: "pointer",
            fontSize: "22px",
          }}
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="product-price">
          ${product.price}
        </p>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;