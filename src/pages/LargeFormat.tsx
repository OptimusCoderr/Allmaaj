import React from 'react';

const LargeFormat = () => {
  const products = [
    {
      id: 1,
      name: "Exhibition Displays",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80",
      description: "Large format exhibition displays perfect for trade shows and events. High-resolution printing with vibrant colors.",
      price: 299.99
    },
    {
      id: 2,
      name: "Wall Graphics",
      image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80",
      description: "Custom wall graphics and murals for office spaces and retail environments. Durable materials with easy installation.",
      price: 149.99
    },
    {
      id: 3,
      name: "Vehicle Wraps",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
      description: "Full vehicle wraps with weather-resistant materials. Transform your vehicle into a moving advertisement.",
      price: 899.99
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Large Format Printing</h1>
      <p className="text-gray-600 text-center mb-12">Make a big impact with our large format printing solutions</p>
      
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

export default LargeFormat;