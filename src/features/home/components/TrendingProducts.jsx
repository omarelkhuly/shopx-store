import ProductCard from "../../products/components/ProductCard";
import products from "../../products/data/products";

const TrendingProducts = () => {
  return (
    <section className="trending-products">
      <div className="container">
        <h2>Trending Now</h2>

        <div className="products-grid">
          {products.slice(8, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;