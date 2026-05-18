// src/layout/SidebarMenu.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { ROUTES } from "@/core/constants/routes"
import { useAuth } from "@/core/hooks/useAuth"
import "../styles/SidebarMenu.css";

function SidebarMenu({ open, onClose }) {

    const { user, logout } = useAuth()

    // 🔐 handle logout
    const handleLogout = () => {
        logout()
        onClose()
    }

    return (
        <>
            {/* Overlay */}
            <div
                className={`overlay ${open ? "show" : ""}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className={`sidebar ${open ? "open" : ""}`}>

                {/* Header */}
                <div className="sidebar-header">

                    {/* 👤 Auth Link (dynamic after login) */}
                    <Link
                        to={ROUTES.AUTH}
                        className="sidebar-login-link"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon="user-circle" className="sidebar-user-icon" />

                        <span>
                            {user
                                ? `Hello, ${user.name}`
                                : "Hello, sign in"
                            }
                        </span>
                    </Link>

                    <button onClick={onClose}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                </div>

                {/* Content */}
                <div className="sidebar-content">

                    <h4>Trending</h4>
                    <a>Best Sellers</a>
                    <a>New Releases</a>
                    <a>Movers & Shakers</a>

                    <hr />

                    <h4>Digital content and devices</h4>
                    <a>
                        Amazon Kindle E-readers
                        <span>›</span>
                    </a>

                    <hr />

                    <h4>Shop by Category</h4>
                    <a>Mobiles, Tablets & Accessories <span>›</span></a>
                    <a>Computers & Office Supplies <span>›</span></a>
                    <a>TVs & Electronics <span>›</span></a>
                    <a>Women's Fashion <span>›</span></a>
                    <a>See all ⌄</a>

                    <hr />

                    <h4>Programs & Features</h4>
                    <a>Bazaar</a>
                    <a>Amazon Outlet</a>
                    <a>Sell on Amazon</a>
                    <a>Subscribe & Save</a>

                    <hr />

                    <h4>Help & Settings</h4>
                    <a>Your Account</a>
                    <a>🌐 English</a>
                    <a>🇪🇬 Egypt</a>

                    <a>Help</a>

                    {/* 🔥 AUTH / LOGOUT */}
                    {user ? (
                        <a onClick={handleLogout} style={{ cursor: "pointer", color: "red" }}>
                            Logout
                        </a>
                    ) : (
                        <Link to={ROUTES.AUTH} onClick={onClose}>
                            Sign in
                        </Link>
                    )}

                </div>
            </div>
        </>
    )
}

export default SidebarMenu