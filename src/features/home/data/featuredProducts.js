// src/features/home/data/featuredProducts.js
import iphone14Img from "@/images/products/iphone14.jpg";
import galaxyS23Img from "@/images/products/galaxys23.jpg";
import huaweiImage from "@/images/products/huawei.jpg";
import oppoImg from "@/images/products/oppo.png";
import redmiImg from "@/images/products/redmi.jpg";
import infinixImage from "@/images/products/infinix.jpg";
import motoImage from "@/images/products/moto.jpg";
import magicImage from "@/images/products/magic.jpg";
const featuredProducts = [
  {
    id: 1,
    title: "Apple iPhone 14",
    description: "The latest iPhone from Apple with advanced features and performance.",
    price: 999,
    image: iphone14Img,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    description: "The latest smartphone from Samsung with cutting-edge technology.",
    price: 899,
    image: galaxyS23Img,
    rating: 4.7,
  },

  {
    id: 3,
    title: "Huawei P50",
    description: "A powerful smartphone from Huawei with excellent camera capabilities.",
    price: 799,
    image: huaweiImage,
    rating: 4.6,
  },

  {
    id: 4,
    title: "Oppo Find X5",
    description: "A premium smartphone from Oppo with outstanding performance and design.",
    price: 699,
    image: oppoImg,
    rating: 4.5,
  },

  {
    id: 5,
    title: "Xiaomi Redmi Note 12",
    description: "A budget-friendly smartphone from Xiaomi with good performance and battery life.",
    price: 299,
    image: redmiImg,
    rating: 4.4,
  },

  {
    id: 6,
    title: "Infinix Zero 5G 2023",
    description: "A feature-packed smartphone from Infinix with 5G connectivity and a large display.",
    price: 399,
    image: infinixImage,
    rating: 4.3,
  },

  {
    id: 7,
    title: "Motorola Moto G Power",
    description: "A budget-friendly smartphone from Motorola with long battery life and decent performance.",
    price: 199,
    image: motoImage,
    rating: 4.2,
  },

  {
    id: 8,
    title: "Honor Magic 4 Pro",
    description: "A high-end smartphone from Honor with a sleek design and powerful features.",
    price: 899,
    image: magicImage,
    rating: 4.1,
  },
];

export default featuredProducts;