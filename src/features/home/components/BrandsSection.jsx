import BrandCard from "./BrandCard";

const BrandsSection = ({ brands = [] }) => {
  return (
    <section className="brands-section">
      <div className="container">
        <h2>Top Brands</h2>

        <div className="brands-grid">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandsSection;