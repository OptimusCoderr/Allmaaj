import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">ALLMAAJ PRINTS</h3>
            <p className="text-gray-300">
              Your trusted partner for premium printing solutions. Quality, innovation, and excellence in every print.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-red-600">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-red-600">Admin Portal</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2 text-yellow-500" /> +1234567890</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2 text-yellow-500" /> info@allmaajprints.com</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2 text-yellow-500" /> 123 Print Street, City</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-red-600"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-red-600"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-red-600"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} ALLMAAJ PRINTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;