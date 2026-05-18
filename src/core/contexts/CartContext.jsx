// src/core/contexts/CartContext.jsx
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 🛒 Cart state (initial load from localStorage)
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // 💾 Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ➕ Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {

      const exists = prev.find((item) => item.id === product.id);

      // 🔥 لو المنتج موجود → زود الكمية
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // 🔥 لو جديد → حط quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ❌ Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems, // 🔥 مهم جدًا
      addToCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};