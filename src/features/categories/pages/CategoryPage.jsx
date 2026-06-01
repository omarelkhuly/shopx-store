// src/features/categories/pages/CategoryPage.jsx

import { useParams } from "react-router-dom";
import products from "@/features/home/data/featuredProducts";
import ProductCard from "@/features/products/components/ProductCard";
import { formatSlug } from "@/core/utils/formatSlug";

import "@/styles/categoryPage.css";

function CategoryPage() {

    const { categoryName } = useParams();

    // 🔥 Format category title
    const formattedName = formatSlug(categoryName);

    // 🔥 Filter products by category
    const filteredProducts = products.filter((product) =>
        product.category?.toLowerCase() === categoryName.toLowerCase()
    );

    return (
        <div className="category-page container">

            {/* Title */}
            <h1 className="category-title">
                {formattedName}
            </h1>

            {/* Products */}
            <div className="category-products">

                {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))

                ) : (

                    <p className="empty-category">
                        No products found in this category.
                    </p>

                )}

            </div>

        </div>
    );
}

export default CategoryPage;