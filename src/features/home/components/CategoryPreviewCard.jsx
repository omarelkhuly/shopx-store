// src/features/home/components/CategoryPreviewCard.jsx

import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/categorie.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";

const CategoryPreviewCard = ({ category }) => {

  return (

    <Link
      to={`/category/${category.slug}`}
      className="category-preview-card"
    >

      {/* Icon */}
      <div className="category-icon">
        <FontAwesomeIcon icon={faBox} />
      </div>

      {/* Image */}
      <img
        src={category.image}
        alt={category.title}
        className="category-preview-image"
      />

      {/* Title */}
      <h3 className="category-preview-title">
        {category.title}
      </h3>

    </Link>
  );
};

export default CategoryPreviewCard;