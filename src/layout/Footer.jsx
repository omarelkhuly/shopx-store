import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import LogoImg from "../images/Logo.png"

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo">
            <img className="logoImg logofooter" src={LogoImg} alt="ShopX Logo" />
            ShopX
          </h3>
          <p>Your best online shopping experience.</p>
        </div>

        {/* Shop */}
        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/products">
            <FontAwesomeIcon icon={["fas", "list"]} /> Products
          </Link>
          <Link to="/offers">
            <FontAwesomeIcon icon={["fas", "tags"]} /> Offers
          </Link>
          <Link to="/categories">
            <FontAwesomeIcon icon={["fas", "list"]} /> Categories
          </Link>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4> Support</h4>
          <Link to="/help">
            <FontAwesomeIcon icon={["fas", "info-circle"]} /> Help Center
          </Link>
          <Link to="/faq">
            <FontAwesomeIcon icon={["fas", "info-circle"]} /> FAQ
          </Link>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Follow Us</h4>

          <div className="social-item">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} /> Facebook
          </div>
          <div className="social-item">
            <FontAwesomeIcon icon={["fab", "instagram"]} /> Instagram
          </div>
          <div className="social-item">
            <FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopX. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer