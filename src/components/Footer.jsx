import React from 'react';
import { Button } from './ui/button';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Section - CTA with Green Gradient */}
      <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 py-12 md:py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Budlee Character - increased size, no yellow circle */}
            <div className="relative">
              <img 
                src="/images/budlee.png" 
                alt="Budlee" 
                className="w-20 h-20 md:w-28 md:h-28 object-contain animate-bounce-gentle"
              />
            </div>
            
            {/* CTA Content */}
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Ready to discover your curiosity?
              </h3>
              <p className="text-green-100 text-base md:text-lg mb-4">
                Join thousands of students learning with Budlee
              </p>
              <Button 
                className="bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Budlee
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Simple Info Bar */}
      <div className="bg-white py-6 px-4 md:px-12 lg:px-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo with Tagline */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/budlee.png" 
                  alt="Budlee" 
                  className="w-8 h-8 object-contain"
                />
                <span className="logo-text text-xl text-gray-800">Budlee AI</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Learn Better. Build Curiosity</p>
            </div>

            {/* Links and Social Icons */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors">
                Contact
              </a>
              <div className="flex items-center gap-3 ml-2">
                <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Budlee AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
