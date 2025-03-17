import React from 'react';

const Monogramming = () => {
  const products = [
    {
      id: 1,
      name: "Custom Business Shirts",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80",
      description: "Professional business shirts with custom embroidered logos or monograms. Perfect for corporate uniforms and business casual wear.",
      price: 49.99
    },
    {
      id: 2,
      name: "Personalized Towel Set",
      image: "https://images.unsplash.com/photo-1629197680383-56c0b3a6f4fb?auto=format&fit=crop&q=80",
      description: "Luxury cotton towel sets with elegant monogrammed initials. Available in various colors and sizes.",
      price: 79.99
    },
    {
      id: 3,
      name: "Custom Sports Jerseys",
      image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?auto=format&fit=crop&q=80",
      description: "High-quality sports jerseys with custom names and numbers. Perfect for teams and individual athletes.",
      price: 64.99
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Monogramming Services</h1>
      <p className="text-gray-600 text-center mb-12">Add a personal touch to your items with our premium monogramming services</p>
      
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

export default Monogramming;