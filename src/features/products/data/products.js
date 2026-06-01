// src/features/products/data/products.js

import iphone14Img from "@/images/products/iphone14.jpg";
import galaxyS23Img from "@/images/products/galaxys23.jpg";
import drenchedImage from "@/images/products/drenched.png";
import containerImage from "@/images/products/container.jpg";
import tennisImage from "@/images/products/tennis.jpg";
import tennissImage from "@/images/products/tennis-2.jpg";
import teddyImage from "@/images/products/teddy.jpg";
import woodenImage from "@/images/products/wooden.jpg";
import microwaveImage from "@/images/products/microwave.jpg";
import makerImage from "@/images/products/maker.jpg";
import arcadeImage from "@/images/products/arcade.jpg";
import loungeImage from "@/images/products/lounge.jpg";
import vegetableImage from "@/images/products/vegetable.jpg";
import breadImage from "@/images/products/bread.jpg";
import coffeeImage from "@/images/products/coffee.jpg";
import lemonadeImage from "@/images/products/lemonade.jpg";
import dogfoodImage from "@/images/products/dogfood.jpg";
import petwaterImage from "@/images/products/petwater.jpg";

const productsData = [

  // Electronics
  {
    id: 1,
    title: "Apple iPhone 14 Pro",
    description: "Premium smartphone with A16 Bionic chip, Dynamic Island and advanced camera system.",
    price: 999,
    image: iphone14Img,
    rating: 4.8,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    description: "Flagship Android smartphone with powerful performance and professional camera features.",
    price: 1199,
    image: galaxyS23Img,
    rating: 4.9,
    tag: ["sale" , "new" , "offer"],
  },

  // Fashion
  {
    id: 3,
    title: "Drenched Street Fashion Jacket",
    description: "Modern streetwear jacket with premium materials and stylish urban design.",
    price: 249,
    image: drenchedImage,
    rating: 4.5,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 4,
    title: "Container Classic Backpack",
    description: "Durable backpack suitable for travel, work and daily use.",
    price: 89,
    image: containerImage,
    rating: 4.4,
    tag: ["sale" , "new" , "offer"],
  },

  // Sports
  {
    id: 5,
    title: "Professional Tennis Racket",
    description: "Lightweight tennis racket designed for speed, control and comfort.",
    price: 179,
    image: tennisImage,
    rating: 4.6,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 6,
    title: "Tennis Training Set",
    description: "Complete tennis practice kit for beginners and advanced players.",
    price: 129,
    image: tennissImage,
    rating: 4.3,
    tag: ["sale" , "new" , "offer"],
  },

  // Dolls and Toys
  {
    id: 7,
    title: "Classic Teddy Bear",
    description: "Soft plush teddy bear perfect for children and gift occasions.",
    price: 39,
    image: teddyImage,
    rating: 4.7,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 8,
    title: "Wooden Educational Toy Set",
    description: "Creative wooden toy set that helps develop learning and motor skills.",
    price: 59,
    image: woodenImage,
    rating: 4.5,
    tag: ["sale" , "new" , "offer"],
  },

  // Appliances
  {
    id: 9,
    title: "Smart Microwave Oven",
    description: "Digital microwave with multiple cooking modes and energy-efficient operation.",
    price: 299,
    image: microwaveImage,
    rating: 4.4,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 10,
    title: "Coffee Maker Pro",
    description: "Automatic coffee machine for espresso and cappuccino lovers.",
    price: 349,
    image: makerImage,
    rating: 4.6,
    tag: ["sale" , "new" , "offer"],
  },

  // Game Zone
  {
    id: 11,
    title: "Retro Arcade Machine",
    description: "Classic arcade gaming experience with multiple built-in games.",
    price: 799,
    image: arcadeImage,
    rating: 4.8,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 12,
    title: "Gaming Lounge Chair",
    description: "Comfortable gaming chair with ergonomic support for long sessions.",
    price: 299,
    image: loungeImage,
    rating: 4.5,
    tag: ["sale" , "new" , "offer"],
  },

  // Grocery
  {
    id: 13,
    title: "Fresh Organic Vegetables Pack",
    description: "Healthy organic vegetables sourced from trusted local farms.",
    price: 24,
    image: vegetableImage,
    rating: 4.7,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 14,
    title: "Artisan Bread Collection",
    description: "Freshly baked bread assortment made with premium ingredients.",
    price: 15,
    image: breadImage,
    rating: 4.5,
    tag: ["sale" , "new" , "offer"],
  },

  // Beverages
  {
    id: 15,
    title: "Premium Coffee Beans",
    description: "Rich roasted coffee beans with smooth aroma and balanced flavor.",
    price: 22,
    image: coffeeImage,
    rating: 4.8,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 16,
    title: "Fresh Lemonade Drink",
    description: "Refreshing lemonade made from natural lemons and pure ingredients.",
    price: 8,
    image: lemonadeImage,
    rating: 4.4,
    tag: ["sale" , "new" , "offer"],
  },

  // Pet Supplies
  {
    id: 17,
    title: "Premium Dog Food",
    description: "Nutritious dog food formulated for healthy growth and energy.",
    price: 49,
    image: dogfoodImage,
    rating: 4.7,
    tag: ["sale" , "new" , "offer"],
  },

  {
    id: 18,
    title: "Automatic Pet Water Fountain",
    description: "Continuous fresh water dispenser designed for cats and dogs.",
    price: 69,
    image: petwaterImage,
    rating: 4.6,
    tag: ["sale" , "new" , "offer"],
  },
];

export default productsData;