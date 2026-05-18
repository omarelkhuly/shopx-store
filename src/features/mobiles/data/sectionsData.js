// src/features/mobiles/data/sectionsData.js
import mobilesData from "./mobilesData";

export const mobilesSections = [

    {
        title: "Top Mobiles",
        products: mobilesData,
    },

    {
        title: "Apple",
        products: mobilesData.filter(
            (p) => p.brand === "Apple"
        ),
    },

    {
        title: "Samsung",
        products: mobilesData.filter(
            (p) => p.brand === "Samsung"
        ),
    },

];