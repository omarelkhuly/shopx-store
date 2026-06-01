// src/core/utils/formatSlug.js
export const formatSlug = (slug) => {
    return slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};