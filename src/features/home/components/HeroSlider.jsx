// src/features/home/components/HeroSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useDirection from "../../../core/hooks/useDirection";
import "../../../styles/HeroSlider.css";

const HeroSlider = ({ slides = [], autoPlay = true, autoPlayTime = 15000 }) => {
  const { isRTL, dir } = useDirection();

  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const totalSlides = Array.isArray(slides) ? slides.length : 0;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto play
  useEffect(() => {
    if (autoPlay && totalSlides > 0) {
      slideInterval.current = setInterval(nextSlide, autoPlayTime);

      return () => {
        clearInterval(slideInterval.current);
      };
    }
  }, [current, autoPlay, autoPlayTime, totalSlides]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="hero-slider" dir={dir}>

      {/* Slides */}
      <div
        className="slides"
        style={{
          transform: isRTL
            ? `translateX(${current * 100}%)`
            : `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={slide.image}
              alt={slide.title || `slide-${index}`}
              className="slide-image"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={isRTL ? nextSlide : prevSlide}
            className="arrow left"
            aria-label="Previous Slide"
          >
            {isRTL ? (
              <ChevronRightIcon className="w-6 h-6" />
            ) : (
              <ChevronLeftIcon className="w-6 h-6" />
            )}
          </button>

          {/* Right Arrow */}
          <button
            onClick={isRTL ? prevSlide : nextSlide}
            className="arrow right"
            aria-label="Next Slide"
          >
            {isRTL ? (
              <ChevronLeftIcon className="w-6 h-6" />
            ) : (
              <ChevronRightIcon className="w-6 h-6" />
            )}
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
        label: PropTypes.string,
        link: PropTypes.string,
      }),
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
};

export default HeroSlider;