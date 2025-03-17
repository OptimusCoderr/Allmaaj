import React from 'react';

const Flags = () => {
  const products = [
    {
      id: 1,
      name: "Feather Flag",
      image: "https://images.unsplash.com/photo-1522091278531-a29c256011a0?auto=format&fit=crop&q=80",
      description: "Tall feather flag with ground stake or cross base. Perfect for outdoor events and storefronts.",
      price: 159.99
    },
    {
      id: 2,
      name: "Custom National Flag",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80",
      description: "High-quality national flags made from durable materials. Available in various sizes.",
      price: 49.99
    },
    {
      id: 3,
      name: "Table Flag Set",
      image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&q=80",
      description: "Desktop flag set with stand. Perfect for office decoration or international meetings.",
      price: 34.99
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Custom Flags</h1>
      <p className="text-gray-600 text-center mb-12">High-quality custom flags for any occasion</p>
      
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

export default Flags;