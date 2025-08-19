"use client";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-1 text-xs">
            <div className="flex items-center space-x-4">
              <a href="mailto:info@biafricantouch.com" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="hidden sm:inline">info@biafricantouch.com</span>
                <span className="sm:hidden">Email Us</span>
              </a>
              <a href="tel:+250788282252" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden sm:inline">+250 788 282 252</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-1 sm:mt-0">
              <span className="text-xs opacity-90">Follow us:</span>
              {/* Social Icons */}
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="fixed top-6 left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b-2 border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-yellow-50 to-orange-50 p-1.5 rounded-full shadow-md">
                  <img src="/logo/favicon.ico" alt="logo" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Tailors Dream College
                </h1>
                <div className="flex items-center space-x-2 -mt-1">
                  <div className="h-0.5 w-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                  <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Educational Excellence</p>
                </div>
              </div>
              <div className="block sm:hidden">
                <h1 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  TDC
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <Tabs />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 transition-all duration-200 group shadow-md"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col justify-center items-center w-4 h-4">
                  <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-4 h-0.5 bg-white my-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="border-t border-yellow-100">
            <div className="px-4 py-4">
              <Tabs />
            </div>
            {/* Decorative gradient */}
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-yellow-400 to-orange-400 rounded-tl-full"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

const Tabs = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-1">
        <Link href="/" className="group px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 relative">
          <span className="relative z-10">Home</span>
          <span className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </Link>
        <Link href="/schools" className="group px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 relative">
          <span className="relative z-10">Schools</span>
          <span className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </Link>
        <Link href="/plans&calendar" className="group px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 relative">
          <span className="relative z-10">Plans</span>
          <span className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </Link>
        <Link href="/testimonials" className="group px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 relative">
          <span className="relative z-10">Reviews</span>
          <span className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </Link>
        <Link href="/contact-us" className="group px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 relative">
          <span className="relative z-10">Contact</span>
          <span className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </Link>
      </div>
      
      {/* CTA Section */}
      <div className="flex items-center space-x-3 mt-4 md:mt-0 md:ml-6">
       
        <Link
          href="/apply"
          className="relative group bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-full hover:shadow-lg transition-all duration-300"
        >
          <span className="relative z-10">Apply Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;