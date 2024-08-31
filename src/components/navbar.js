
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logopic from '../assets/AkashVibeWebLogo.jpg'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <div class="flex-shrink-0">
           <img  src={logopic} className='h-12 w-auto'></img>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <a href="#home" className="text-black hover:text-orange-600">Home</a>
          <a href="#Clients" className="text-black hover:text-orange-600">Our Clients</a>
          <a href="#About" className="text-black hover:text-orange-600">About</a>
          <a href="#products" className="text-black hover:text-orange-600">Product</a>
          <a href="#testimonial" className="text-black hover:text-orange-600">Testimonial</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700">
            Login
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700">
            Signup
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 sticky top-0 z-10">
          <a href="#home" className="block text-gray-950 text-center py-2 hover:bg-orange-700">Home</a>
          <a href="#Clients" className="block text-gray-950 text-center py-2 hover:bg-orange-700">Our Clients</a>
          <a href="#About" className="block text-gray-950 text-center py-2 hover:bg-orange-700">About</a>
          <a href="#products" className="block text-gray-950 text-center py-2 hover:bg-orange-700">Product</a>
          <a href="#testimonial" className="block text-gray-950 text-center py-2 hover:bg-orange-700">Testimonial</a>
          <button className="bg-orange-500 text-white w-full py-2 mt-2 rounded hover:bg-orange-700">
            Login
          </button>
          <button className="bg-orange-500 text-white w-full py-2 mt-2 rounded hover:bg-orange-700">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
