// src/features/home/components/FeaturedProducts.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = ({ products = [], lang = "en" }) => {
  return (
    <div className="featured-products">
      <div className="container">
        <h2>Featured Products</h2>

        <Swiper
          spaceBetween={20}
          dir={lang === "ar" ? "rtl" : "ltr"} // 🔥 دعم العربي
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <FeaturedProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;