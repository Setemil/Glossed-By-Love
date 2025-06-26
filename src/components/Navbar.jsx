import { Link } from "react-router-dom";
import { useState } from "react";
import { Home, Package, User, MessageCircle, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-gradient-to-r from-pink-50 via-white to-pink-50 backdrop-blur-lg shadow-lg border-b border-pink-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <p className="special-text text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-700 via-rose-600 to-pink-800 bg-clip-text text-transparent hover:from-pink-800 hover:via-rose-700 hover:to-pink-900 transition-all duration-300 transform hover:scale-105">
                <img src={logo} alt="LOGO" className="w-25 sm:w-40" />
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="!text-slate-700 hover:!text-pink-500 px-4 py-2 text-base font-semibold transition-all duration-300 relative group flex items-center gap-2"
              >
                <Home size={18} />
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/products"
                className="!text-slate-700 hover:!text-pink-700 px-4 py-2 text-base font-semibold transition-all duration-300 relative group flex items-center gap-2"
              >
                <Package size={18} />
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/about"
                className="!text-slate-700 hover:!text-pink-700 px-4 py-2 text-base font-semibold transition-all duration-300 relative group flex items-center gap-2"
              >
                <User size={18} />
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/reviews"
                className="!text-slate-700 hover:!text-pink-700 px-4 py-2 text-base font-semibold transition-all duration-300 relative group flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Reviews
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contact"
                className="!text-slate-700 hover:!text-pink-700 px-4 py-2 text-base font-semibold transition-all duration-300 relative group flex items-center gap-2"
              >
                <Phone size={18} />
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-700 hover:text-pink-800 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 transition-all duration-300"
            >
              <svg
                className={`${
                  isOpen ? "hidden" : "block"
                } h-6 w-6 transition-transform duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 transition-transform duration-300 rotate-180`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg border-t border-pink-100">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <p className="text-slate-700 hover:text-pink-700 px-3 py-3 rounded-md text-base font-semibold transition-all duration-300 flex items-center gap-3">
              <Home size={20} />
              Home
            </p>
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>
            <p className="text-slate-700 hover:text-pink-700 px-3 py-3 rounded-md text-base font-semibold transition-all duration-300 flex items-center gap-3">
              <Package size={20} />
              Products
            </p>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <p className="text-slate-700 hover:text-pink-700  px-3 py-3 rounded-md text-base font-semibold transition-all duration-300 flex items-center gap-3">
              <User size={20} />
              About
            </p>
          </Link>
          <Link to="/reviews" onClick={() => setIsOpen(false)}>
            <p className="text-slate-700 hover:text-pink-700  px-3 py-3 rounded-md text-base font-semibold transition-all duration-300 flex items-center gap-3">
              <MessageCircle size={20} />
              Reviews
            </p>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <p className="text-slate-700 hover:text-pink-700  px-3 py-3 rounded-md text-base font-semibold transition-all duration-300 flex items-center gap-3">
              <Phone size={20} />
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
