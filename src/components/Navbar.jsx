import React from "react";
import { Layers, Zap, DollarSign } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Layers className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold text-white">ClrBG</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition"
            >
              Pricing
            </a>
            <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
