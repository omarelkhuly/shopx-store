// src/features/wishlist/pages/WishlistPage.jsx
import React from "react";
import ProductCard from "../../products/components/ProductCard";
import { useWishlist } from "../../../core/hooks/useWishlist";

const WishlistPage = () => {
    const { wishlistItems } = useWishlist();

    return (
        <div className="wishlist-page">
            <h1>My Wishlist ❤️</h1>

            {wishlistItems.length === 0 ? (
                <p>No favorite products yet.</p>
            ) : (
                <div className="products-grid">
                    {wishlistItems.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;