// src/features/deals/pages/DealsPage.jsx
import { useState } from "react";
import dealsData from "../data/dealsData";
import DealsSidebar from "../components/DealsSidebar";
import { useWishlist } from "@/core/hooks/useWishlist"; // 🔥 wishlist
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/styles/deals.css";

function DealsPage() {

    const [selectedProduct, setSelectedProduct] = useState(null);

    const { toggleWishlist, isInWishlist } = useWishlist(); // 🔥

    return (
        <div className="deals-grid">

            {dealsData.map((product) => (
                <div key={product.id} className="deal-card">

                    {/* Image */}
                    <img src={product.image} alt={product.title} />

                    {/* Discount */}
                    <span className="discount">
                        {product.discount}% off
                    </span>

                    {/* ❤️ Wishlist Button */}
                    <button
                        className={`wishlist-btn ${isInWishlist(product.id) ? "active" : ""}`}
                        onClick={() => toggleWishlist(product)}
                    >
                        <FontAwesomeIcon icon="heart" />
                    </button>

                    {/* ➕ Add button (Sidebar) */}
                    <button
                        className="add-btn"
                        onClick={() => setSelectedProduct(product)}
                    >
                        +
                    </button>

                    {/* Info */}
                    <h4>{product.title}</h4>
                    <p>${product.price}</p>

                </div>
            ))}

            {/* Sidebar */}
            <DealsSidebar
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />

        </div>
    );
}

export default DealsPage;