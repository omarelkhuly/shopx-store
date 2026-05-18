// src/features/home/pages/HomePage.jsx
import { useHomeData } from "../hooks/useHomeData";

import HeroSection from "../components/HeroSection";
import CategoriesPreview from "../components/CategoriesPreview";
import FeaturedProducts from "../components/FeaturedProducts";
import FlashSaleSection from "../components/FlashSaleSection";
import BestSellerSection from "../components/BestSellerSection";
import TrendingProducts from "../components/TrendingProducts";
import PromoGrid from "../components/PromoGrid";
import BrandsSection from "../components/BrandsSection";
import RecommendedSection from "../components/RecommendedSection";
import RecentlyViewedSection from "../components/RecentlyViewedSection";
import NewsletterSection from "../components/NewsletterSection";
import HomeSkeleton from "../components/HomeSkeleton";

const HomePage = () => {
  const { loading, banners, featuredProducts, brands } = useHomeData();

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <main className="home-page">

      {/* Hero / Slider */}
      <HeroSection banners={banners} />

      {/* Categories */}
      <CategoriesPreview />

      {/* Featured Products */}
      <FeaturedProducts products={featuredProducts} />

      {/* Flash Sale */}
      <FlashSaleSection />

      {/* Best Sellers */}
      <BestSellerSection />

      {/* Trending */}
      <TrendingProducts />

      {/* Promotions */}
      <PromoGrid />

      {/* Brands */}
      <BrandsSection brands={brands} />

      {/* Recommendations */}
      <RecommendedSection />

      {/* Recently Viewed */}
      <RecentlyViewedSection />

      {/* Newsletter */}
      <NewsletterSection />

    </main>
  );
};

export default HomePage;