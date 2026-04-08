import React from "react";

export default function ExploreNearby() {
  const places = [
    { id: 1, name: "San Francisco", img: "/images/Explore Nearby San Francisco.jpg.jpeg" },
    { id: 2, name: "Los Angeles", img: "/images/Explore Nearby Los Angeles.jpg.jpeg" },
    { id: 3, name: "Miami", img: "/images/Explore Nearby Miami.jpg.jpeg" },
    { id: 4, name: "San Jose", img: "/images/Explore Nearby San Jose.jpg.jpeg" },
    { id: 5, name: "New York", img: "/images/Explore Nearby New York.jpg.jpeg" },
    { id: 6, name: "Las Vegas", img: "/images/Explore Nearby Las Vegas.jpg.jpeg" },
  ];

  return (
    <section className="py-16 px-4">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Explore Nearby
      </h2>

      {/* Items */}
      <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-3 md:grid-cols-6 gap-10 max-w-7xl mx-auto text-center">
        {places.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            
            {/* Circle */}
            <div className="w-38 h-38 md:w-40 md:h-40 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden hover:scale-110 hover:shadow-2xl transition duration-300">
              
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full rounded-full object-cover"
              />

            </div>

            {/* Name */}
            <p className="mt-4 text-lg font-semibold text-gray-800">
              {item.name}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}