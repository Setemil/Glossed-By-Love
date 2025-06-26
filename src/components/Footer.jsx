import {
  Heart,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaTiktok, FaSnapchat } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-300 blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-rose-300 blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-pink-400 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 rounded-full bg-rose-400 blur-lg"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-200 to-rose-100 bg-clip-text text-transparent">
                  Glossed By Love
                </h2>
                <Heart
                  className="text-pink-300"
                  size={28}
                  fill="currentColor"
                />
              </div>
              <p className="text-pink-100 text-lg mb-6 leading-relaxed">
                Elevating your natural beauty with premium lip care products.
                From glossy finishes to nourishing balms, we create products
                that make you feel confident and radiant every day.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/glossed_by_love?igsh=MWRveGlscTdrc3pr"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                >
                  <Instagram size={20} className="text-pink-200" />
                </a>
                <a
                  href="https://snapchat.com/t/XlwmIWQB"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                >
                  <FaSnapchat size={20} className="text-pink-200" />
                </a>
                <a
                  href="https://www.tiktok.com/@glossed.by.love?_t=ZM-8xVmOH5d4zu&_r=1"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                >
                  <FaTiktok size={20} className="text-pink-200" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-pink-200 flex items-center gap-2">
                <Sparkles size={20} />
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/">
                    <span className="text-pink-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      Home
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/products">
                    <span className="text-pink-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      Our Products
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <span className="text-pink-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      About Us
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/reviews">
                    <span className="text-pink-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      Reviews
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <span className="text-pink-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-pink-200 flex items-center gap-2">
                <Heart size={20} />
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-pink-100">
                  <MapPin size={18} className="text-pink-300 flex-shrink-0" />
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                    Lagos, Nigeria
                  </span>
                </li>
                <li className="flex items-center gap-3 text-pink-100">
                  <FaWhatsapp
                    size={18}
                    className="text-pink-300 flex-shrink-0"
                  />
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                    +234 810 763 1320
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-700/50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-pink-200 text-sm">
                &copy; 2025 Glossed By Love. All rights reserved. Made with 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
