import pinkGloss from "../products/pinkGloss.jpg";
import clearGloss from "../products/clearGloss.jpg";
import redGloss from "../products/redGloss.jpg";
import unpigmentedPinkGloss from "../products/unpigmentedPink.jpg";
import pigmentedPinkGloss from "../products/pigmentedPink.jpg";
import nudeGloss from "../products/nudeGloss.jpg";
import brownGloss from "../products/brownGloss.jpg";

export const products = {
  glosses: [
    {
      id: 1,
      name: "Pink Gloss w/ Glitter",
      description: "A beautiful rose-tinted gloss with subtle shimmer",
      price: "₦3000",
      image: pinkGloss,
      bestseller: true,
    },
    {
      id: 2,
      name: "Crystal Clear",
      description: "Ultra-clear gloss for natural enhancement",
      price: "₦3000",
      image: clearGloss,
      bestseller: false,
    },
    {
      id: 3,
      name: "Berry Burst",
      description: "Deep berry shade with high-shine finish",
      price: "₦3000",
      image: redGloss,
      bestseller: false,
    },
    {
      id: 4,
      name: "Brown Glow",
      description: "Golden honey shade with nourishing formula",
      price: "₦3000",
      image: brownGloss,
      bestseller: false,
    },
    {
      id: 5,
      name: "Faded Pink Glow",
      description: "Golden honey shade with nourishing formula",
      price: "₦3000",
      image: unpigmentedPinkGloss,
      bestseller: false,
    },

    {
      id: 6,
      name: "Bright Pink Glow",
      description: "Golden honey shade with nourishing formula",
      price: "₦3000",
      image: pigmentedPinkGloss,
      bestseller: false,
    },
    {
      id: 7,
      name: "Nude Glow",
      description: "Golden honey shade with nourishing formula",
      price: "₦3000",
      image: nudeGloss,
      bestseller: false,
    },
  ],
  balms: [
    {
      id: 5,
      name: "Vanilla Dreams",
      description: "Creamy vanilla-scented healing balm",
      price: "$12",
      image: "🧴",
      bestseller: true,
    },
    {
      id: 6,
      name: "Mint Fresh",
      description: "Cooling mint balm for instant refresh",
      price: "$14",
      image: "🌿",
      bestseller: false,
    },
    {
      id: 7,
      name: "Coconut Bliss",
      description: "Tropical coconut balm with SPF protection",
      price: "$15",
      image: "🥥",
      bestseller: false,
    },
    {
      id: 8,
      name: "Shea Butter Classic",
      description: "Pure shea butter for maximum hydration",
      price: "$13",
      image: "🌰",
      bestseller: true,
    },
  ],
  oils: [
    {
      id: 9,
      name: "Jojoba Silk",
      description: "Lightweight jojoba oil for daily nourishment",
      price: "$22",
      image: "🌾",
      bestseller: true,
    },
    {
      id: 10,
      name: "Argan Luxury",
      description: "Premium argan oil for intensive care",
      price: "$28",
      image: "🫒",
      bestseller: false,
    },
    {
      id: 11,
      name: "Rosehip Glow",
      description: "Vitamin-rich rosehip oil for repair",
      price: "$25",
      image: "🌹",
      bestseller: false,
    },
  ],
  sets: [
    {
      id: 12,
      name: "Complete Care Set",
      description: "Full collection of our bestselling products",
      price: "$65",
      image: "🎀",
      bestseller: true,
    },
    {
      id: 13,
      name: "Travel Essentials",
      description: "Perfect mini sizes for on-the-go care",
      price: "$35",
      image: "✈️",
      bestseller: false,
    },
    {
      id: 14,
      name: "Seasonal Collection",
      description: "Limited edition seasonal flavors",
      price: "$45",
      image: "🌸",
      bestseller: true,
    },
  ],
};
