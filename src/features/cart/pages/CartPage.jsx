// src/features/cart/pages/CartPage.jsx
import React from "react";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useCart } from "../../../core/hooks/useCart";
import "@/styles/cart.css";

import FeaturedProducts from "../../home/components/FeaturedProducts";
import FlashSaleSection from "../../home/components/FlashSaleSection";
import RecommendedSection from "../../home/components/RecommendedSection";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart 🛒</h1>

      <div className="cart-grid">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))
        )}
      </div>

      <CartSummary />

      <hr />

      <FeaturedProducts />
      <FlashSaleSection />
      <RecommendedSection />
    </div>
  );
};

export default CartPage;