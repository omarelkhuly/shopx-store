// src/features/home/components/CategoryPreviewCard.jsx
import React from "react";
import "../../../styles/categorie.css";
import { categoriesIcon } from "../data/categoriesIcon.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons"

const CategoryPreviewCard = ({ category }) => {
  return (
    <div className="category-preview-card">

      {/* Icon */}
      <div className="category-icon">
        <FontAwesomeIcon icon={faBox} />
      </div>

      {/* Image */}
      <img
        src={category.image}
        alt={category.name}
        className="category-preview-image"
      />

      {/* Title */}
      <h3 className="category-preview-title">
        {category.name}
      </h3>

    </div>
  );
};

export default CategoryPreviewCard;