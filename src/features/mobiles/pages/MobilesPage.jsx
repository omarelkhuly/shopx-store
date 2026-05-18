// src/features/mobiles/pages/MobilesPage.jsx

import { useState } from "react";

import { mobilesSections } from "../data/sectionsData";

import MobilesSection from "../components/MobilesSection";

import MobilesSidebar from "../components/MobilesSidebar";

import "@/styles/Mobiles.css";

const MobilesPage = () => {

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

            {mobilesSections.map((section, index) => (

                <MobilesSection
                    key={index}
                    title={section.title}
                    products={section.products}
                    onCardClick={openSidebar}
                />

            ))}

            <MobilesSidebar
                product={selectedProduct}
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            />

        </div>

    );
};

export default MobilesPage;