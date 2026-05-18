// src/features/electronics/components/ElectronicsSection.jsx
import ElectronicsSlider from "./ElectronicsSlider";

const ElectronicsSection = ({
  title,
  products,
  onCardClick
}) => {
  return (
    <section className="electronics-section">

      <h2 className="section-title">
        {title}
      </h2>

      <ElectronicsSlider
        products={products}
        onCardClick={onCardClick}
      />

    </section>
  );
};

export default ElectronicsSection;