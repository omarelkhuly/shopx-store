// src/features/mobiles/components/MobilesSection.jsx

import MobilesSlider from "./MobilesSlider";

const MobilesSection = ({
    title,
    products,
    onCardClick
}) => {

    return (

        <section className="electronics-section">

            <h2 className="section-title">
                {title}
            </h2>

            <MobilesSlider
                products={products}
                onCardClick={onCardClick}
            />

        </section>

    );
};

export default MobilesSection;