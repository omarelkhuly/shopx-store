// src/features/home/components/CategoriesPreview.jsx
import CategoryPreviewCard from "./CategoryPreviewCard";
import categories from "../../categories/data/categories.js";

const CategoriesPreview = () => {
  return (
    <section className="categories-preview">
      <div className="container">
        <h2>Shop by Category</h2>

        <div className="categories-grid">
          {categories.slice(0, 10).map((category) => (
            <CategoryPreviewCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPreview;