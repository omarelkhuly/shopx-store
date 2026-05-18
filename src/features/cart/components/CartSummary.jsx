// src/features/cart/components/CartSummary.jsx
import React from "react";
import { useCart } from "@/core/hooks/useCart";
import { useNavigate } from "react-router-dom";
import "@/styles/cart.css";

const CartSummary = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // const total = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span>Items</span>
        <span>{cartItems.length}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="summary-row total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        className="checkout-button"
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;