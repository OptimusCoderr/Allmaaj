import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Printer className="h-8 w-8 text-red-600" />
            <span className="font-bold text-xl">ALLMAAJ PRINTS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/monogramming" className="hover:text-orange-500 transition-colors">Monogramming</Link>
            <Link to="/large-format" className="hover:text-orange-500 transition-colors">Large Format</Link>
            <Link to="/rollups-banners" className="hover:text-orange-500 transition-colors">Rollups & Banners</Link>
            <Link to="/flags" className="hover:text-orange-500 transition-colors">Flags</Link>
            <Link to="/about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 hover:bg-red-600 rounded-md">Home</Link>
              <Link to="/monogramming" className="block px-3 py-2 hover:bg-red-600 rounded-md">Monogramming</Link>
              <Link to="/large-format" className="block px-3 py-2 hover:bg-red-600 rounded-md">Large Format</Link>
              <Link to="/rollups-banners" className="block px-3 py-2 hover:bg-red-600 rounded-md">Rollups & Banners</Link>
              <Link to="/flags" className="block px-3 py-2 hover:bg-red-600 rounded-md">Flags</Link>
              <Link to="/about" className="block px-3 py-2 hover:bg-red-600 rounded-md">About</Link>
              <Link to="/contact" className="block px-3 py-2 hover:bg-red-600 rounded-md">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;