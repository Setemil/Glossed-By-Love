import React from "react";
import {
  MessageSquare,
  Instagram,
  Send,
  Phone,
  Heart,
  Sparkles,
} from "lucide-react";

import { FaTiktok, FaSnapchat } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className=" hidden sm:flex">
        <br />
      </div>
      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mb-6 animate-pulse">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to discover the perfect lip care for you? Reach out through
            any of our channels - we're here to help you shine! ✨
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Social Links Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Social Links
                </h2>
                <p className="text-gray-600">
                  Follow us for daily lip care tips and product updates
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Snapchat */}
              <a
                target="_blank"
                href="https://snapchat.com/t/XlwmIWQB"
                className="group flex items-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaSnapchat className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                    Snapchat
                  </h3>
                  <p className="text-sm text-gray-600">
                    Quick updates & behind-the-scenes
                  </p>
                </div>
                <div className="text-yellow-400 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </div>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@glossed.by.love?_t=ZM-8xVmOH5d4zu&_r=1"
                target="_blank"
                className="group flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaTiktok className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">
                    TikTok
                  </h3>
                  <p className="text-sm text-gray-600">
                    Fun tutorials & product demos
                  </p>
                </div>
                <div className="text-gray-400 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/glossed_by_love?igsh=MWRveGlscTdrc3pr"
                target="_blank"
                className="group flex items-center p-4 bg-gradient-to-r from-pink-50 to-rose-100 rounded-2xl border border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                    Instagram
                  </h3>
                  <p className="text-sm text-gray-600">
                    Daily inspiration & customer features
                  </p>
                </div>
                <div className="text-pink-400 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </div>
              </a>
            </div>
          </div>

          {/* Direct Contact Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mr-4">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Direct Contact
                </h2>
                <p className="text-gray-600">
                  For business inquiries and partnerships
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-3">
                  💼 Business & Partnerships
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Ready to collaborate? Whether you're interested in wholesale
                  orders, retail partnerships, or custom formulations, we'd love
                  to hear from you!
                </p>
                <a
                  target="_blank"
                  href="https://wa.me/2348107631320?text=Hello%2C%20i%20got%20your%20number%20from%20the%20glossed%20by%20love%20website%20and%20i%20would%20like%20to%20inquire%20about%20your%20products%2C%20my%20name%20is%20"
                  className="hover:text-white group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-400 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  WhatsApp Business
                  <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </a>
              </div>

              <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-200">
                <h3 className="font-semibold text-gray-800 mb-3">
                  🚚 Delivery & Orders
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Questions about your order? Need expedited delivery? Our team
                  is standing by to ensure your lip care arrives perfectly and
                  on time.
                </p>
                <div className="text-sm text-gray-500 bg-white/50 p-3 rounded-lg">
                  <p className="font-medium text-gray-700 mb-1">
                    📱 Quick Response Guaranteed
                  </p>
                  <p>
                    We typically respond within 2-4 hours during business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
