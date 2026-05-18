// src/features/checkout/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useCart } from "@/core/hooks/useCart";
import { useNavigate } from "react-router-dom";
import "@/styles/checkout.css";

const CheckoutPage = () => {

    const { cartItems } = useCart();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });

    // 💳 Payment Method
    const [paymentMethod, setPaymentMethod] = useState("card");

    // 💳 Payment تفاصيل
    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handlePaymentChange = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cartItems.length === 0) return;

        // 🔐 Validation بسيط
        if (paymentMethod === "card") {
            if (!paymentData.cardNumber || !paymentData.expiry || !paymentData.cvv) {
                alert("Please fill card details");
                return;
            }
        }

        // 🚀 ممكن تبعت API هنا

        navigate("/order-success");
    };

    return (
        <div className="checkout-page">
            <h1>Checkout 🧾</h1>

            <div className="checkout-layout">

                {/* ================= FORM ================= */}
                <form className="checkout-form" onSubmit={handleSubmit}>

                    <h2>Billing Details</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="address"
                        placeholder="Shipping Address"
                        onChange={handleChange}
                        required
                    />

                    {/* ================= PAYMENT METHODS ================= */}
                    <h2>Payment Method 💳</h2>

                    <div className="payment-methods">

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Credit / Debit Card
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="cash"
                                checked={paymentMethod === "cash"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Cash on Delivery
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="wallet"
                                checked={paymentMethod === "wallet"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Mobile Wallet
                        </label>

                    </div>

                    {/* ================= PAYMENT DETAILS ================= */}

                    {paymentMethod === "card" && (
                        <div className="payment-box">
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number"
                                onChange={handlePaymentChange}
                            />
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                onChange={handlePaymentChange}
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                onChange={handlePaymentChange}
                            />
                        </div>
                    )}

                    {paymentMethod === "wallet" && (
                        <div className="payment-box">
                            <input
                                type="text"
                                placeholder="Wallet Number"
                                onChange={handlePaymentChange}
                            />
                        </div>
                    )}

                    {paymentMethod === "cash" && (
                        <p className="cash-note">
                            You will pay in cash upon delivery 🚚
                        </p>
                    )}

                    <button type="submit" className="place-order-btn">
                        Place Order
                    </button>

                </form>

                {/* ================= SUMMARY ================= */}
                <div className="checkout-summary">
                    <h2>Order Summary</h2>

                    {cartItems.map((item) => (
                        <div key={item.id} className="summary-item">
                            <span>{item.title}</span>
                            <span>
                                {item.quantity || 1} × ${item.price}
                            </span>
                        </div>
                    ))}

                    <div className="summary-total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutPage;