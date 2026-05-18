// src/layout/Header.jsx
import { Link } from "react-router-dom"
import { ROUTES } from "@/core/constants/routes"
import { useAuth } from "@/core/hooks/useAuth"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle, faUser, faIdBadge } from "@fortawesome/free-solid-svg-icons"

import { useLanguage } from "../core/hooks/useLanguage"
import { useCart } from "../core/hooks/useCart"
import { useWishlist } from "../core/hooks/useWishlist"

import MegaMenu from "./MegaMenu"
import SidebarMenu from "./SidebarMenu"
import SearchBar from "../features/search/components/SearchBar"

import products from "../data/products"

import LogoImg from "../images/Logo.png"
import "../styles/layout.css"
import "../styles/responsive.css"

function Header() {
  const { language, setLanguage, t } = useLanguage()

  const { cartItems, removeFromCart } = useCart()
  const { wishlistItems, toggleWishlist } = useWishlist()

  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const { user } = useAuth()

  // 🔥 NEW STATES
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>

        {/* ================= TOP HEADER ================= */}
        <div className="header-top container">

          {/* Logo */}
          <Link to="/" className="logo">
            <img className="logoImg" src={LogoImg} alt="ShopX Logo" />
            Shop<span>X</span>
          </Link>

          {/* Search */}
          <div className="search">
            <SearchBar
              products={products}
              placeholder={t("nav.search")}
            />
          </div>

          {/* Actions */}
          <div className="actions">

            {/* Language */}
            <button className="lang-btn" onClick={toggleLanguage}>
              <FontAwesomeIcon icon="globe" />
              <span>{language === "en" ? "AR" : "EN"}</span>
            </button>

            {/* Auth 👤 */}
            <Link to={ROUTES.AUTH} className="auth-item">
              <FontAwesomeIcon
                icon={
                  user
                    ? faIdBadge   // 🔥 بعد تسجيل الدخول
                    : (isMobile ? faUser : faUserCircle)
                }
                className="auth-icon"
              />

              <div className="auth-text">
                <span className="auth-small">
                  {user ? `Hello, ${user.name}` : "Hello, sign in"}
                </span>

                <span className="auth-bold">
                  {user ? "My Account" : "Account & Lists"}
                </span>

              </div>
            </Link>

            {/* Wishlist ❤️ */}
            <div
              className="action-item"
              onClick={() => setWishlistOpen(true)}
            >
              <FontAwesomeIcon icon="heart" />

              {wishlistItems.length > 0 && (
                <span className="badge">
                  {wishlistItems.length}
                </span>
              )}
            </div>

            {/* Cart 🛒 */}
            <div
              className="action-item"
              onClick={() => setCartOpen(true)}
            >
              <FontAwesomeIcon icon="shopping-cart" />

              {cartItems.length > 0 && (
                <span className="badge">
                  {cartItems.length}
                </span>
              )}
            </div>

          </div>
        </div>

        {/* ================= BOTTOM HEADER ================= */}
        <div className="header-bottom">

          <div className="container bottom-container">

            {/* ALL MENU */}
            <div className="all-menu" onClick={() => setSidebarOpen(true)}>
              <FontAwesomeIcon icon="bars" />
              <span>All</span>
            </div>

            {/* MOBILE NAV BUTTON */}
            <div className="nav-toggle" onClick={() => setNavOpen(true)}>
              <FontAwesomeIcon icon="list" />
            </div>

            {/* NAV */}
            <nav className={`navigation ${navOpen ? "open" : ""}`}>

              {/* CLOSE BUTTON */}
              <div className="nav-close" onClick={() => setNavOpen(false)}>
                <FontAwesomeIcon icon="times" />
              </div>

              <MegaMenu />

            </nav>

          </div>

        </div>

        <SidebarMenu
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

      </header>

      {/* ================= Wishlist Panel ================= */}
      <div className={`side-panel ${wishlistOpen ? "open" : ""}`}>
        <div className="panel-header">
          <h3>Wishlist</h3>
          <span onClick={() => setWishlistOpen(false)}>✖</span>
        </div>

        {wishlistItems.length === 0 ? (
          <p className="empty">No items</p>
        ) : (
          wishlistItems.map((item) => {
            return (
              <div key={item.id} className="panel-item">
                <img src={item.image} alt="" />

                <div>
                  <p>{item.title}</p>
                  <span>${item.price}</span>
                </div>

                <button onClick={() => toggleWishlist(item)}>
                  ➝
                </button>
              </div>
            )
          })
        )}
      </div>

      {/* ================= Cart Panel ================= */}
      <div className={`side-panel ${cartOpen ? "open" : ""}`}>
        <div className="panel-header">
          <h3>Cart</h3>
          <span onClick={() => setCartOpen(false)}>✖</span>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty">No items</p>
        ) : (
          cartItems.map((item) => {
            return (
              <div key={item.id} className="panel-item">
                <img src={item.image} alt="" />

                <div>
                  <p>{item.title}</p>
                  <span>${item.price}</span>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  ➝
                </button>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default Header