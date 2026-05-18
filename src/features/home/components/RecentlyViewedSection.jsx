// src/features/home/components/RecentlyViewedSection.jsx
import ProductCard from "../../products/components/ProductCard";
import { useRecentlyViewed } from "../../recentlyViewed/hooks/useRecentlyViewed";

const RecentlyViewedSection = () => {
  const { recentlyViewed: items = [] } = useRecentlyViewed(); // fallback []

  if (!items.length) return null;

  return (
    <section className="recently-viewed">
      <div className="container">
        <h2>Recently Viewed</h2>
        <div className="products-grid">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewedSection;