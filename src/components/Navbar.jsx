import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand - Left aligned */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="ClrBg Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-white font-bold text-2xl tracking-wide">
                ClrBg
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-cyan-100 hover:text-white font-medium transition"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-cyan-100 hover:text-white font-medium transition"
            >
              Pricing
            </a>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-purple-400 transition font-medium shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-sky-400">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#how-it-works"
              className="text-cyan-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-cyan-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <div className="pt-2">
              <button
                className="w-full bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-400 transition font-medium shadow-md"
                onClick={toggleMenu}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
