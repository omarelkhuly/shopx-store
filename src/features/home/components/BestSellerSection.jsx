import ProductCard from "../../products/components/ProductCard";
import products from "../../products/data/products";

const BestSellerSection = () => {
  return (
    <section className="best-sellers">
      <div className="container">
        <h2>Best Sellers</h2>

        <div className="products-grid">
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellerSection;