// src/features/electronics/data/sectionsData.js
import electronicsProducts from "./electronicsData";

export const electronicsSections = [
    {
        title: "Top Picks",
        products: electronicsProducts.slice(0, 10),
    },

    {
        title: "New Arrivals",
        products: electronicsProducts.slice(10, 20),
    },

    {
        title: "Best Electronics",
        products: electronicsProducts.filter(p =>
            p.tag.includes("electronics")
        ),
    },

    {
        title: "Big Discounts",
        products: electronicsProducts.filter(p =>
            p.discount >= 20
        ),
    },
];