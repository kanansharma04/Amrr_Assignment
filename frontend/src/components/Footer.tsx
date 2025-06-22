import React from 'react';
import { Heart, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-500 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-green-500 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AMRR Assignment
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the future of item management with our beautifully designed interface. 
              Discover, organize, and showcase your collection like never before.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-12">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">View Items</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">Add Item</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">Search</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="text-gray-300">for beautiful item management</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 AMRR Assignment. All rights reserved. Designed with passion for excellence.
          </p>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-25"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-20"></div>
      </div>
    </footer>
  );
};

export default Footer;