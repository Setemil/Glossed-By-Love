import React, { useState } from "react";
import { Heart, ShoppingBag, ArrowLeft, Sparkles, Star } from "lucide-react";
import { products } from "../assets/products.js";
import { categories } from "../assets/categories.js";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    const categoryData = categories.find((cat) => cat.id === selectedCategory);
    const categoryProducts = products[selectedCategory] || [];

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 mt-15">
        <div className="h-8"></div>
        {/* Header with Back Button */}
        <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white py-16">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleBackToCategories}
              className="flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Categories
            </button>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                {categoryData.name}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {categoryData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categoryProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-pink-100"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  {/* Product Badge */}
                  {product.bestseller && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ Bestseller
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110"
                  >
                    <Heart
                      size={18}
                      className={`transition-colors duration-300 ${
                        favorites.has(product.id)
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  {/* Product Image Area */}
                  <div className="relative h-64 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center overflow-hidden">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-500">
                      <img src={product.image} alt={product.name} />
                    </div>

                    {/* Floating animation elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-6 left-6 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
                      <div
                        className="absolute bottom-8 right-8 w-2 h-2 bg-purple-300 rounded-full animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 left-8 w-4 h-4 bg-pink-200 rounded-full animate-bounce"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-pink-600">
                        {product.price}
                      </span>
                      <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <ShoppingBag size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 mt-15">
      <div className="h-8"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Discover our luxurious collection of lip products crafted with
              premium ingredients for the perfect pout
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
        </div>
        <div
          className="absolute top-40 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-4 h-4 bg-pink-300/30 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-20 left-1/4 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-8 h-8 bg-purple-300/20 rounded-full"></div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections designed to meet every
              lip care need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-pink-100 relative"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Star size={12} />
                      Featured
                    </div>
                  </div>
                )}

                {/* Category Image Area */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${category.bgGradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">
                    <img src={category.image} alt={category.name} />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.productCount} items
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-xl">
                    Explore Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
