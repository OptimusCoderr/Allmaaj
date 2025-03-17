import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, Flag, Image, Type } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to ALLMAAJ PRINTS</h1>
              <p className="text-xl mb-8">Your Premier Printing Solutions Partner</p>
              <Link 
                to="/contact" 
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Type />}
              title="Monogramming"
              description="Custom monogramming services for personal and business needs"
              link="/monogramming"
            />
            <ServiceCard 
              icon={<Image />}
              title="Large Format"
              description="High-quality large format printing for maximum impact"
              link="/large-format"
            />
            <ServiceCard 
              icon={<Printer />}
              title="Rollups & Banners"
              description="Eye-catching banners and rollups for your events"
              link="/rollups-banners"
            />
            <ServiceCard 
              icon={<Flag />}
              title="Flags"
              description="Custom flags for any occasion or business"
              link="/flags"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ALLMAAJ PRINTS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Quality Guaranteed"
              description="We use top-of-the-line equipment and materials to ensure the highest quality prints."
            />
            <FeatureCard 
              title="Fast Turnaround"
              description="Quick delivery without compromising on quality."
            />
            <FeatureCard 
              title="Expert Support"
              description="Our team of printing experts is always ready to help."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, link }) => (
  <Link to={link} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-red-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;