// src/core/hooks/useProducts.jsx
import { useState, useEffect } from "react";
import productsData from "@/features/products/data/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const selectProductById = (id) => {
    const product = products.find((p) => p.id === id);
    setSelectedProduct(product || null);
  };

  return {
    products,
    selectedProduct,
    selectProductById,
  };
};