// src/core/hooks/useWishlist.jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../contexts/WishlistContext";
import { useAuth } from "./useAuth";
import { ROUTES } from "../constants/routes";

export const useWishlist = () => {

    const { wishlistItems, setWishlistItems } = useContext(WishlistContext);

    const { user } = useAuth();
    const navigate = useNavigate();

    const toggleWishlist = (product) => {

        // 🔐 Guard → لازم يكون مسجل
        if (!user) {
            navigate(ROUTES.AUTH);
            return;
        }

        const exists = wishlistItems.find(item => item.id === product.id);

        let updated;

        if (exists) {
            updated = wishlistItems.filter(item => item.id !== product.id);
        } else {
            updated = [...wishlistItems, product];
        }

        setWishlistItems(updated);

        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    const isInWishlist = (id) => {
        return wishlistItems.some(item => item.id === id);
    };

    return {
        wishlistItems,
        toggleWishlist,
        isInWishlist,
    };
};