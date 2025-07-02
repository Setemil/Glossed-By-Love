import glosses from "../products/Glosses.jpg";
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
    id: "balms",
    name: "Lip Balms",
    description: "Nourishing and hydrating balms for everyday lip care",
    image: "🌸",
    bgGradient: "from-purple-400 to-pink-500",
    productCount: products.balms.length,
    featured: false,
  },
  {
    id: "oils",
    name: "Lip Oils",
    description: "Luxurious oils that hydrate and add natural shine",
    image: "✨",
    bgGradient: "from-amber-400 to-orange-500",
    productCount: products.oils.length,
    featured: false,
  },
  {
    id: "sets",
    name: "Gift Sets",
    description: "Curated collections perfect for gifting or treating yourself",
    image: "🎁",
    bgGradient: "from-violet-400 to-purple-500",
    productCount: products.sets.length,
    featured: true,
  },
];
