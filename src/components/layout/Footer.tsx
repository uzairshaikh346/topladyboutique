"use client"
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const BoutiqueFooter: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ];

  return (
    <footer className="w-full" style={{ backgroundColor: '#2C0F12' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Side - Logo & Description */}
          <div className="text-center md:text-left">
            <div 
              className="text-3xl font-bold mb-4 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ color: '#F7F8F3' }}
            >
              BOUTIQUE
            </div>
            <p 
              className="text-sm leading-relaxed opacity-90 max-w-xs mx-auto md:mx-0"
              style={{ color: '#F7F8F3' }}
            >
              Curated fashion for the modern woman. Discover timeless pieces that celebrate your unique style and sophistication.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <h3 
              className="text-lg font-semibold mb-6"
              style={{ color: '#F7F8F3' }}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative inline-block text-sm transition-all duration-300 hover:scale-105 group"
                  style={{ color: '#F7F8F3' }}
                >
                  {link.name}
                  <span 
                    className="absolute left-1/2 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0"
                    style={{ backgroundColor: '#F7F8F3' }}
                  ></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side - Social Media */}
          <div className="text-center md:text-right">
            <h3 
              className="text-lg font-semibold mb-6"
              style={{ color: '#F7F8F3' }}
            >
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: '#F7F8F3',
                      border: `1px solid #F7F8F3`
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      (e.target as HTMLAnchorElement).style.backgroundColor = '#F7F8F3';
                      (e.target as HTMLAnchorElement).style.color = '#2C0F12';
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
                      (e.target as HTMLAnchorElement).style.color = '#F7F8F3';
                    }}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-12 pt-8 border-t text-center"
          style={{ borderColor: '#F7F8F3', opacity: 0.3 }}
        >
          <p 
            className="text-sm opacity-80"
            style={{ color: '#F7F8F3' }}
          >
            © 2025 Boutique Store – All Rights Reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .group:hover .group-hover\\:w-full {
          width: 100%;
        }
        
        .group:hover .group-hover\\:left-0 {
          left: 0;
        }
        
        /* Custom animation for social icons */
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(247, 248, 243, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(247, 248, 243, 0);
          }
        }
        
        a[aria-label]:hover {
          animation: pulseGlow 1.5s ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default BoutiqueFooter;