import ProductCard from "../../products/components/ProductCard";
import products from "../../products/data/products";

const RecommendedSection = () => {
  return (
    <section className="recommended-products">
      <div className="container">
        <h2>Recommended For You</h2>

        <div className="products-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecommendedSection;