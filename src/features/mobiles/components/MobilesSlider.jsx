// src/features/mobiles/components/MobilesSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


import MobilesCard from "./MobilesCard";

const MobilesSlider = ({
    products,
    onCardClick
}) => {

    return (

        <Swiper
            spaceBetween={15}
            grabCursor={true}

            breakpoints={{
                320: {
                    slidesPerView: 1.2,
                },

                480: {
                    slidesPerView: 2,
                },

                768: {
                    slidesPerView: 3,
                },

                1024: {
                    slidesPerView: 5,
                },

                1280: {
                    slidesPerView: 6,
                },
            }}
        >

            {products.map((product) => (

                <SwiperSlide key={product.id}>

                    <MobilesCard
                        product={product}
                        onClick={() => onCardClick?.(product)}
                    />

                </SwiperSlide>

            ))}

        </Swiper>

    );
};

export default MobilesSlider;