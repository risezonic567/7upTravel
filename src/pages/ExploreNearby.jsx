import React from "react";
import { Link } from "react-router-dom";

export default function ExploreNearby() {
  const places = [
    { id: 1, name: "San Francisco", img: "/images/Explore Nearby San Francisco.jpg.jpeg",path:"/san-francisco" },
    { id: 2, name: "Los Angeles", img: "/images/Explore Nearby Los Angeles.jpg.jpeg",path:"/los-angeles" },
    { id: 3, name: "Miami", img: "/images/Explore Nearby Miami.jpg.jpeg",path:"/miami" },
    { id: 4, name: "San Jose", img: "/images/Explore Nearby San Jose.jpg.jpeg",path:"/sanjosh" },
    { id: 5, name: "New York", img: "/images/Explore Nearby New York.jpg.jpeg",path:"new-york" },
    { id: 6, name: "Las Vegas", img: "/images/Explore Nearby Las Vegas.jpg.jpeg",path:"las-vegas" },
  ];

  return (
    <section className="py-5 px-4">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Explore Nearby
      </h2>

      {/* Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 max-w-7xl mx-auto text-center">
        {places.map((item) => (
         <Link to={item.path}>
          <div key={item.id} className="flex flex-col items-center">
            
            
            <div className="w-38 h-38 md:w-40 md:h-40 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden hover:scale-110 hover:shadow-2xl transition duration-300">
              
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full rounded-full object-cover"
              />

            </div>

            <p className="mt-4 text-lg font-semibold text-gray-800">
              {item.name}
            </p>

          </div>
         </Link>
        ))}
      </div>

    </section>
  );
}