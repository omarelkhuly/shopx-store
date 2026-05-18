// src/core/hooks/useCart.jsx
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {

  const { user } = useAuth();
  const navigate = useNavigate();

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (product) => {

    // 🔐 Guard → لازم يكون مسجل
    if (!user) {
      navigate(ROUTES.AUTH);
      return;
    }

    addToCart(product); // 🔥 سيب المنطق للـ context
  };

  return {
    cartItems,
    addToCart: handleAddToCart,
    removeFromCart,
  };
};