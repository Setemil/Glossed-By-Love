import React from "react";
import { Heart, Sparkles, MapPin, Users, Star, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Space for Navbar */}
      <div className="h-8"></div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-rose-200/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              About The
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 block">
                Founder
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              From a simple need for quality lip care to building a thriving
              business that serves customers across Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* Main Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">
                  The Beginning
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                It all started with a simple frustration - finding reliable,
                high-quality lip glosses that actually delivered on their
                promises. As a student who cared about looking and feeling her
                best, our founder discovered that quality lip care products were
                either too expensive or simply unavailable when she needed them
                most.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">
                  Campus Beginnings
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                What started as a personal quest for better lip care quickly
                evolved into something bigger. At Babcock University, she began
                sharing her carefully curated collection of lip glosses with
                friends and classmates. Word spread quickly across campus about
                these amazing products that actually worked - and looked
                incredible too.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">
                  Growing Beyond Campus
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                As demand grew beyond the university walls, she took the leap
                into delivery services, reaching customers across different
                cities. What began as a campus side hustle transformed into a
                thriving business built on trust, quality, and genuine care for
                each customer's beauty journey.
              </p>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  To make premium lip care accessible to everyone, while
                  building a community of confident, beautiful individuals who
                  deserve nothing but the best.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-300 rounded-full animate-bounce"></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-rose-300 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-r from-pink-100 to-rose-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on values that matter, creating experiences that last
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Quality First",
                description:
                  "Every product is carefully selected and tested to ensure it meets our high standards for performance and safety.",
              },
              {
                icon: Users,
                title: "Community Focused",
                description:
                  "We believe in building lasting relationships with our customers, treating each person like family.",
              },
              {
                icon: Sparkles,
                title: "Reliable Service",
                description:
                  "From campus deliveries to nationwide shipping, we're committed to getting your products to you safely and on time.",
              },
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100 h-full transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
