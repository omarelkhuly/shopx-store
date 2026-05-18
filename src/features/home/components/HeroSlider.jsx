// src/features/home/components/HeroSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "../../../styles/HeroSlider.css";

const HeroSlider = ({ slides = [], autoPlay = true, autoPlayTime = 15000 }) => {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const totalSlides = Array.isArray(slides) ? slides.length : 0;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Auto play functionality
  useEffect(() => {
    if (autoPlay && totalSlides > 0) {
      slideInterval.current = setInterval(nextSlide, autoPlayTime);
      return () => clearInterval(slideInterval.current);
    }
  }, [current, autoPlay, autoPlayTime, totalSlides]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="hero-slider">

      {/* Slides */}
      <div
        className="slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={slide.image}
              alt={slide.title || `slide-${index}`}
              className="slide-image"
            />
            {/* {slide.title && (
              <div className="slide-content">
                <h2>{slide.title}</h2>
                {slide.subtitle && <p>{slide.subtitle}</p>}
                {slide.cta && (
                  <a href={slide.cta.link}>
                    {slide.cta.label}
                  </a>
                )}
              </div>
            )} */}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {totalSlides > 1 && (
        <>
          <button onClick={prevSlide} className="arrow left">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="arrow right">
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`dot ${idx === current ? "active" : ""}`}
              />
            ))}
          </div>
        </>
      )}

    </div>
  );
};

HeroSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      cta: PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
};

export default HeroSlider;