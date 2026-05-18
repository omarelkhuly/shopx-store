import React from "react";

const ProductGallery = ({ images }) => {
  if (!images || images.length === 0) return <p>No images available</p>;

  return (
    <div className="product-gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Product image ${index + 1}`}
          className="product-gallery-image"
        />
      ))}
    </div>
  );
};

export default ProductGallery;