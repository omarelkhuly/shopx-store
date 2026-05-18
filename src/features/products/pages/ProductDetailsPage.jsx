// src/features/products/pages/ProductDetailsPage.jsx
import React from "react";
import ProductGallery from "../components/ProductGallery";
import ProductRating from "../components/ProductRating";
import ProductVariants from "../components/ProductVariants";
import { useProducts } from "../../../core/hooks/useProducts";

const ProductDetailsPage = () => {
  const { products, selectProductById, selectedProduct } = useProducts();

  useEffect(() => {
    selectProductById(1); // test
  }, []);

  if (!selectedProduct) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details-page">
      <h1>{selectedProduct.title}</h1>
      <ProductGallery images={selectedProduct.images} />
      <ProductRating rating={selectedProduct.rating} />
      <p className="product-price">${selectedProduct.price.toFixed(2)}</p>
      <ProductVariants variants={selectedProduct.variants} />
      <button className="add-to-cart-btn">🛒Add To Cart</button>
    </div>
  );
};

export default ProductDetailsPage;