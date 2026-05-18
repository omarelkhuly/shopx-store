// src/features/home/hooks/useHomeData.js
import { useState, useEffect } from "react";
import products from "../data/featuredProducts";
import categories from "../data/homeBanners";
import brands from "../data/brands";

export const useHomeData = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    setFeaturedProducts(products);
    setBanners(categories);
    setBrandList(brands);
  }, []);

  return { featuredProducts, banners, brandList };
};