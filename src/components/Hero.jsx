import { Sparkles, ShoppingBag, ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import video from "../assets/lips.MOV";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-600 text-sm font-medium mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              New Collection Available
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className=" bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Beautiful
              </span>
              <br />
              Lips Deserve
              <br />
              <span className="better-text bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Beautiful
              </span>{" "}
              Care
            </h1>

            <p className="special-text text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our premium collection of lip products that combine
              luxury, comfort, and stunning colors to enhance your natural
              beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Link className="hover:text-white" to="/products">
                  Explore Collection
                </Link>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <video
                src={video}
                autoPlay
                muted
                loop
                className="h-150 rounded-3xl shadow-2xl"
              />
              <div className="absolute top-6 right-0 sm:right-0 sm:-top-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700 font-semibold">
                    Premium Quality
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
