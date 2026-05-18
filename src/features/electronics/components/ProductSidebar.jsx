// src/features/electronics/components/ProductSidebar.jsx

import { FaArrowRight } from "react-icons/fa";

import { useCart } from "@/core/hooks/useCart";

import { useWishlist } from "@/core/hooks/useWishlist";

import "@/styles/electronicsSidebar.css";

const ProductSidebar = ({
    product,
    isOpen,
    onClose
}) => {

    const { addToCart } = useCart();

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();

    return (

        <div
            className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        >

            <div
                className={`product-sidebar ${isOpen ? "open" : ""}`}
            >

                {/* Close Button */}
                <button
                    className="close-btn-elec"
                    onClick={onClose}
                >

                    <FaArrowRight className="close_icon_color" />

                </button>

                {/* Product Data */}
                {product && (

                    <>

                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                        />

                        {/* Product Title */}
                        <h2 className="h2_color">
                            {product.title}
                        </h2>

                        {/* Product Price */}
                        <p className="sidebar-price">
                            {product.price} EGP
                        </p>

                        {/* Product Description */}
                        <p className="sidebar-description">
                            {product.description}
                        </p>

                        {/* Buttons */}
                        <div className="sidebar-actions">

                            {/* Add To Cart */}
                            <button
                                className="cart-btn"
                                onClick={() => addToCart(product)}
                            >

                                Add To Cart

                            </button>

                            {/* Wishlist */}
                            <button
                                className={`wishlist-btn-elec ${isInWishlist(product.id)
                                    ? "active"
                                    : ""
                                    }`}
                                onClick={() => toggleWishlist(product)}
                            >

                                {isInWishlist(product.id)
                                    ? "Remove Wishlist"
                                    : "Add To Wishlist"
                                }

                            </button>

                        </div>

                    </>

                )}

            </div>

        </div>

    );
};

export default ProductSidebar;