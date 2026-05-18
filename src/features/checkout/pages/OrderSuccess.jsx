// src/features/checkout/pages/OrderSuccess.jsx
import { Link } from "react-router-dom";
import "@/styles/orders.css";

const OrderSuccess = () => {
    return (
        <div className="order-success">
            <div className="success-box">
                <h1>🎉 Order Placed Successfully!</h1>
                <p>Thank you for your purchase.</p>

                <Link to="/" className="back-home-btn">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;