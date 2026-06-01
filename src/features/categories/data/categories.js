// src/features/categories/data/categories.js
import electronicsImg from "@/images/categories/electronics.jpg";
import fashionImg from "@/images/categories/fashion.jpg";
import housewaresImg from "@/images/categories/housewares.jpg";
import sportsImg from "@/images/categories/sports.jpg";
import dollsandtoysimg from "@/images/categories/dollsandtoys.jpg";
import appliancesImg from "@/images/categories/appliances.png";
import gamezoneImg from "@/images/categories/gamezone.PNG";
import groceryImg from "@/images/categories/grocery.PNG";
import beveragesImg from "@/images/categories/beverages.PNG";
import petsuppliesImg from "@/images/categories/petsupplies.PNG";
const categories = [
  {
    id: 1,
    title: "Electronics",
    slug: "electronics",
    image: electronicsImg,
  },
  {
    id: 2,
    title: "Fashion",
    slug: "fashion",
    image: fashionImg,
  },
  {
    id: 3,
    title: "Housewares",
    slug: "housewares",
    image: housewaresImg,
  },
  {
    id: 4,
    title: "Sports",
    slug: "sports",
    image: sportsImg,
  },
  {
    id: 5,
    title: "Dolls and Toys",
    slug: "dolls-and-toys",
    image: dollsandtoysimg,
  },

  {
    id: 6,
    title: "Appliances",
    slug: "appliances",
    image: appliancesImg,
  },

  {
    id: 7,
    title: "Game Zone",
    slug: "game-zone",
    image: gamezoneImg,
  },

  {
    id: 8,
    title: "Grocery",
    slug: "grocery",
    image: groceryImg,
  },

  {
    id: 9,
    title: "Beverages",
    slug: "beverages",
    image: beveragesImg,
  },

  {
    id: 10,
    title: "Pet Supplies",
    slug: "pet-supplies",
    image: petsuppliesImg,
  }
];

export default categories;