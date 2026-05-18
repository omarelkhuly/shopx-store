// src/app/providers.jsx
import { ThemeProvider } from "../core/contexts/ThemeContext"
import { LanguageProvider } from "../core/contexts/LanguageContext"
import { CartProvider } from "../core/contexts/CartContext"
import { WishlistProvider } from "../core/contexts/WishlistContext"
import { NotificationProvider } from "../core/contexts/NotificationContext"
import { LoadingProvider } from "../core/contexts/LoadingContext"
import { AuthProvider } from "@/core/contexts/AuthContext";

function Providers({ children }) {
  return (

    <ThemeProvider>
      <LanguageProvider>
        <NotificationProvider>
          <LoadingProvider>
            <AuthProvider>
              <CartProvider>
                <WishlistProvider>
                  {children}
                </WishlistProvider>
              </CartProvider>
            </AuthProvider>
          </LoadingProvider>
        </NotificationProvider>
      </LanguageProvider>
    </ThemeProvider>

  )
}

export default Providers