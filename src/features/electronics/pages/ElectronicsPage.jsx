// src/features/electronics/pages/ElectronicsPage.jsx
import { useState } from "react";
import { electronicsSections } from "../data/sectionsData";
import ElectronicsSection from "../components/ElectronicsSection";
import ProductSidebar from "../components/ProductSidebar";
import "@/styles/electronics.css";

const ElectronicsPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = (product) => {
        setSelectedProduct(product);
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <div className="electronics-page">
            {electronicsSections.map((section, index) => (
                <ElectronicsSection
                    key={index}
                    title={section.title}
                    products={section.products}
                    onCardClick={openSidebar}
                />
            ))}
            <ProductSidebar
                product={selectedProduct}
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            />
        </div>
    );
};

export default ElectronicsPage;