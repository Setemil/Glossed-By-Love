import pinkGloss from "../products/pinkGloss.jpg";
import clearGloss from "../products/clearGloss.jpg";
import redGloss from "../products/redGloss.jpg";
import unpigmentedPinkGloss from "../products/unpigmentedPink.jpg";
import pigmentedPinkGloss from "../products/pigmentedPink.jpg";
import nudeGloss from "../products/nudeGloss.jpg";
import brownGloss from "../products/brownGloss.jpg";
import scrubs from "../products/scrubs.JPG";
import balms from "../products/balm.JPG";
import colorChange from "../products/colorChangingOil.JPG";
import moisturizingOil from "../products/moisturizingLipOil.JPG";
import essential from "../products/essentialSet.JPG";
import combo from "../products/lipComboSet.JPG";
import mask from "../products/lipMask.JPG";
import brush from "../products/lipBrush.JPG";

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
  balms_and_scrubs: [
    {
      id: 5,
      name: "Lip Balms",
      description: "Creamy vanilla-scented healing balm",
      price: "₦2000",
      image: balms,
      bestseller: true,
    },
    {
      id: 6,
      name: "Lip Scrubs",
      description: "Cooling mint balm for instant refresh",
      price: "₦1500",
      image: scrubs,
      bestseller: false,
    },
  ],
  oils: [
    {
      id: 9,
      name: "Color Changing Lip Oil",
      description: "Lightweight jojoba oil for daily nourishment",
      price: "$22",
      image: colorChange,
      bestseller: true,
    },
    {
      id: 10,
      name: "Moisturizing Lip Oil",
      description: "Premium argan oil for intensive care",
      price: "$28",
      image: moisturizingOil,
      bestseller: false,
    },
  ],
  sets: [
    {
      id: 11,
      name: "Essential Set",
      description: "Full collection of our bestselling products",
      price: "$65",
      image: essential,
      bestseller: true,
    },
    {
      id: 12,
      name: "Color Combo Set",
      description: "Perfect mini sizes for on-the-go care",
      price: "$35",
      image: combo,
      bestseller: false,
    },
    {
      id: 13,
      name: "Lip Brushes",
      description: "Full collection of our bestselling products",
      price: "$65",
      image: brush,
      bestseller: false,
    },
    {
      id: 14,
      name: "Lip Masks",
      description: "Perfect mini sizes for on-the-go care",
      price: "$35",
      image: mask,
      bestseller: false,
    },
  ],
};
