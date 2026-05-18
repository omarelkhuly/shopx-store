// src/features/home/components/PromoGrid.jsx

import productsData from "@/features/products/data/products";
import "@/styles/Promo.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// 🔥 نفس hooks بتوع ProductCard
import { useCart } from "@/core/hooks/useCart";
import { useWishlist } from "@/core/hooks/useWishlist";

const PromoGrid = () => {

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const getProductsByTag = (tag) => {
    return productsData.filter((product) =>
      product.tag?.includes(tag)
    );
  };

  const sections = [
    { title: "Big Sale", tag: "sale" },
    { title: "New Collection", tag: "new" },
    { title: "Special Offer", tag: "offer" },
  ];

  return (
    <section className="promo-grid">
      <div className="container">

        <div className="promo-items">

          {sections.map((section) => (
            <div key={section.tag} className="promo-card">

              <h2 className="promo-title">{section.title}</h2>

              <Swiper
                spaceBetween={15}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {getProductsByTag(section.tag).map((product) => {

                  const favorite = isInWishlist(product.id);

                  return (
                    <SwiperSlide key={product.id}>

                      <div className="mini-card">

                        {/* ❤️ Wishlist */}
                        <div style={{ position: "relative" }}>
                          <img
                            src={product.image}
                            alt={product.title}
                            className="mini-card-img"
                          />

                          <button
                            onClick={() => toggleWishlist(product)}
                            style={{
                              position: "absolute",
                              top: "8px",
                              right: "8px",
                              border: "none",
                              background: "white",
                              cursor: "pointer",
                              fontSize: "18px",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                          >
                            {favorite ? "❤️" : "🤍"}
                          </button>
                        </div>

                        {/* 📦 Info */}
                        <h4 className="mini-card-title">
                          {product.title}
                        </h4>

                        <p className="mini-card-price">
                          ${product.price}
                        </p>

                        {/* 🛒 Cart */}
                        <button
                          className="mini-add-to-cart"
                          onClick={() => addToCart(product)}
                        >
                          🛒 Add To Cart
                        </button>

                      </div>

                    </SwiperSlide>
                  );
                })}
              </Swiper>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PromoGrid;