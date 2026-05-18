// src/features/home/components/HeroSection.jsx
import React from "react";
import HeroSlider from "./HeroSlider";

const HeroSection = ({ banners = [] }) => {
  // تأكد من أن banners دائمًا array
  const safeBanners = Array.isArray(banners) ? banners : [];

  return (
    <section className="hero-section">

        <HeroSlider slides={safeBanners} />
    </section>
  );
};

export default HeroSection;