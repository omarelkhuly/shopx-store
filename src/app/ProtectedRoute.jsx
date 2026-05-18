// src/app/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/core/hooks/useAuth";
import { ROUTES } from "@/core/constants/routes";

function ProtectedRoute({ children }) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to={ROUTES.AUTH} state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedRoute;