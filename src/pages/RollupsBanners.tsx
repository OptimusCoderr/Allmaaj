import React from 'react';

const RollupsBanners = () => {
  const products = [
    {
      id: 1,
      name: "Premium Roll-Up Banner",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80",
      description: "Professional roll-up banner with aluminum base. Perfect for conferences and trade shows. Includes carrying case.",
      price: 129.99
    },
    {
      id: 2,
      name: "Outdoor Banner",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80",
      description: "Weather-resistant outdoor banner with reinforced edges and grommets. Ideal for events and advertising.",
      price: 89.99
    },
    {
      id: 3,
      name: "X-Stand Banner",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      description: "Lightweight and portable X-stand banner. Quick setup and breakdown. Includes carrying bag.",
      price: 79.99
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Rollups & Banners</h1>
      <p className="text-gray-600 text-center mb-12">Portable and eye-catching display solutions for your business</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-red-600">${product.price}</span>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollupsBanners;