// src/features/cart/components/CartItem.jsx
import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.title}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <p className="cart-item-quantity">Qty: {item.quantity || 1}</p>
      </div>
    </div>
  );
};

export default CartItem;