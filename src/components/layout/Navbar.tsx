"use client"
import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const BoutiqueNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="w-full shadow-lg" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold transition-all duration-300 hover:scale-105" style={{ color: '#2C0F12' }}>
              BOUTIQUE
            </div>
          </div>
          {/* Desktop Search Bar - Center */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative max-w-md w-full border-[1px] border-[#2C0F12] rounded-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 rounded-md border-none outline-none transition-all duration-300 focus:ring-2 focus:ring-opacity-50 hover:shadow-md"
                style={{ backgroundColor: '#F7F8F3', color: '#2C0F12' }}
                onFocus={(e) => (e.target as HTMLInputElement).style.transform = 'scale(1.02)'}
                onBlur={(e) => (e.target as HTMLInputElement).style.transform = 'scale(1)'}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300" style={{ color: '#6B1E23' }} />
            </div>
          </div>
          {/* Desktop Right Side - Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="relative p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ backgroundColor: 'transparent', color: '#2C0F12' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2C0F12')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: '#F7F8F3', color: '#6B1E23' }}>
                3
              </span>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{ color: '#F7F8F3' }}
            >
              <Search className="w-5 h-5" />
            </button>
            {/* Mobile Cart */}
            <button className="relative p-2 rounded-full transition-all duration-300 hover:scale-110" style={{ color: '#F7F8F3' }}>
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 text-xs rounded-full flex items-center justify-center" style={{ backgroundColor: '#F7F8F3', color: '#6B1E23' }}>
                3
              </span>
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{ color: '#F7F8F3' }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 pl-10 rounded-full border-none outline-none transition-all duration-300 focus:ring-2 focus:ring-opacity-50"
                style={{ backgroundColor: '#F7F8F3', color: '#2C0F12' }}
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#6B1E23' }} />
            </div>
          </div>
        )}
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t animate-fade-in" style={{ borderColor: '#2C0F12' }}>
            <div className="py-4 space-y-2">
              <a
                href="#"
                className="block px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ color: '#F7F8F3' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2C0F12')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ color: '#F7F8F3' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2C0F12')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Collections
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ color: '#F7F8F3' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2C0F12')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Sale
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ color: '#F7F8F3' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2C0F12')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        input:focus {
          ring-color: #6B1E23;
        }
        input::placeholder {
          color: #6B1E23;
          opacity: 0.7;
        }
      `}</style>
    </nav>
  );
};

export default BoutiqueNavbar;