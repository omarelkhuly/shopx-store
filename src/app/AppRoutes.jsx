// src/app/AppRoutes.jsx
import { Routes, Route } from "react-router-dom"

// Pages
import HomePage from "../features/home/pages/HomePage"
import ProductsPage from "../features/products/pages/ProductsPage"
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage"
import CartPage from "../features/cart/pages/CartPage"
import WishlistPage from "../features/wishlist/pages/WishlistPage"
import CheckoutPage from "../features/checkout/pages/CheckoutPage"
import OrderSuccess from "../features/checkout/pages/OrderSuccess"
import Auth from "../features/auth/pages/Auth"
import DealsPage from "../features/deals/pages/DealsPage"
import ElectronicsPage from "../features/electronics/pages/ElectronicsPage";
import MobilesPage from "../features/mobiles/pages/MobilesPage";
import CategoryPage from "@/features/categories/pages/CategoryPage";
// 🔐 Protected Route
import ProtectedRoute from "./ProtectedRoute"

function AppRoutes() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}

      <Route path="/" element={<HomePage />} />

      <Route path="/products" element={<ProductsPage />} />

      <Route path="/product/:id" element={<ProductDetailsPage />} />

      <Route path="/auth" element={<Auth />} />

      <Route path="/deals" element={<DealsPage />} />

      <Route path="/electronics" element={<ElectronicsPage />} />

      <Route path="/mobiles" element={<MobilesPage />} />

      <Route path="/category/:categoryName"element={<CategoryPage />}/>

      {/* ================= PROTECTED ROUTES ================= */}

      {/* ❤️ Wishlist */}
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        }
      />

      {/* 🛒 Cart */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />

      {/* 💳 Checkout */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }
      />

      {/* ✅ Order Success */}
      <Route
        path="/order-success"
        element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default AppRoutes