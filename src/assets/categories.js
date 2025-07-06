import glosses from "../products/Glosses.jpg";
import balms from "../products/balm.JPG";
import oils from "../products/colorChangingOil.JPG";
import sets from "../products/lipComboSet.JPG";
import { products } from "./products";

export const categories = [
  {
    id: "glosses",
    name: "Lip Glosses",
    description:
      "High-shine, non-sticky formulas for the perfect glossy finish",
    image: glosses,
    bgGradient: "from-pink-400 to-rose-500",
    productCount: products.glosses.length,
    featured: true,
  },
  {
    id: "balms_and_scrubs",
    name: "Balms & Scrubs",
    description: "Nourishing and hydrating balms for everyday lip care ",
    image: balms,
    bgGradient: "from-purple-400 to-pink-500",
    productCount: products.balms_and_scrubs.length,
    featured: false,
  },
  {
    id: "oils",
    name: "Lip Oils",
    description: "Luxurious oils that hydrate and add natural shine",
    image: oils,
    bgGradient: "from-amber-400 to-orange-500",
    productCount: products.oils.length,
    featured: false,
  },
  {
    id: "sets",
    name: "Sets and Extras",
    description: "Curated collections perfect for gifting or treating yourself",
    image: sets,
    bgGradient: "from-violet-400 to-purple-500",
    productCount: products.sets.length,
    featured: true,
  },
];
