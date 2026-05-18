// src/features/deals/components/DealsSidebar.jsx
import { useCart } from "@/core/hooks/useCart";
import "@/styles/dealsSidebar.css";

function DealsSidebar({ product, onClose }) {

    const { addToCart } = useCart();

    if (!product) return null;

    return (
        <>
            <div className="overlay show" onClick={onClose} />

            <div className="deal-sidebar open">

                {/* Image */}
                <img src={product.image} alt={product.title} />

                {/* Info */}
                <h2>{product.title}</h2>
                <p className="price">${product.price}</p>

                <p className="desc">
                    {product.description}
                </p>

                {/* Buttons */}
                <button
                    className="add-cart-btn"
                    onClick={() => addToCart(product)}
                >
                    🛒 Add to Cart
                </button>

                <button className="close-btn" onClick={onClose}>
                    ✖
                </button>

            </div>
        </>
    );
}

export default DealsSidebar;