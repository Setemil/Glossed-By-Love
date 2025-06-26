import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Star,
  Sparkles,
  Play,
  ShoppingBag,
  ArrowRight,
  Users,
  Award,
  Zap,
} from "lucide-react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import video from "../assets/tutorial.mp4";
const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      name: "Velvet Matte Collection",
      description: "Luxurious matte finish with all-day comfort",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
      colors: ["#FF69B4", "#DC143C", "#8B0000", "#FF1493"],
    },
    {
      name: "Glossy Lip Glaze",
      description: "High-shine formula for radiant lips",
      image:
        "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
      colors: ["#FFB6C1", "#FF69B4", "#DDA0DD", "#F0E68C"],
    },
    {
      name: "Nourishing Lip Care",
      description: "Complete care for healthy, beautiful lips",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      colors: ["#FFE4E1", "#FFC0CB", "#FF69B4", "#FF1493"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="flex sm:hidden">
        <br />
        <br />
        <br />
      </div>

      <Hero />

      {/* Brand Story Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Crafted with{" "}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Love
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every product in our collection is thoughtfully created with
                premium ingredients and attention to detail. We believe that
                beautiful lips deserve beautiful care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Heart, label: "Made with Love" },
                  { icon: Sparkles, label: "Premium Quality" },
                  { icon: Users, label: "Customer First" },
                  { icon: Award, label: "Tested & Approved" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section
        id="video-section"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["video-section"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              See Our Products in{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our premium lip products transform your look with
              stunning colors and lasting comfort
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div
              className="relative group cursor-pointer"
              onClick={toggleVideoPlayback}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <video
                  src={video}
                  ref={videoRef}
                  muted
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`${
                    isPlaying && "hidden"
                  } absolute inset-0 bg-black/30 flex items-center justify-center`}
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-pink-500 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Application Tutorial & Results
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Learn the perfect application techniques and see the incredible
                transformation our products provide. From prep to perfection in
                just minutes.
              </p>

              <div className="space-y-4">
                {[
                  "Professional application techniques",
                  "Long-lasting color demonstration",
                  "Tips for different occasions",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section
        id="products-section"
        data-animate
        className={`py-20 bg-gradient-to-r from-pink-50 to-rose-50 transition-all duration-1000 delay-300 ${
          isVisible["products-section"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Collections
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our carefully curated collections, each designed to
              enhance your natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="flex space-x-2 mb-6">
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  View Collection
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Discover Your Perfect Shade?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Explore our complete collection and find the lip products that
            express your unique style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="products">
              <button className="bg-white text-pink-500 px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <Link to="contact">
              <button className="border-2 !border-white !bg-pink-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:!bg-white hover:text-pink-500 transition-all duration-300 inline-flex items-center justify-center">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
