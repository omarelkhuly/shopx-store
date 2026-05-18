// src/features/home/components/FlashSaleSection.jsx
import { useState } from "react"; // 🔥 الحل هنا
import FlashSaleTimer from "./FlashSaleTimer";
import ProductCard from "../../products/components/ProductCard";
import products from "../../products/data/products";

const FlashSaleSection = () => {
  const getEndTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 10);
    return now;
  };

  const [endTime] = useState(() => getEndTime()); // ✅ best practice

  return (
    <section className="flash-sale">
      <div className="container">

        <div className="flash-header">
          <h2>Flash Sale</h2>
          <FlashSaleTimer endTime={endTime} />
        </div>

        <div className="products-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FlashSaleSection;