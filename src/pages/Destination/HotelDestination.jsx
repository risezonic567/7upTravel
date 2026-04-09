import React from 'react';
import { MapPin, Star, Heart, ShieldCheck } from 'lucide-react';

export default function HotelDestination(){
  const hotels = [
    {
      id: 1,
      name: "Baga Comfort",
      location: "New York",
      price: "455",
      rating: "4.5",
      img: "/images/New York Hotel.jpg.jpeg"
    },
    {
      id: 2,
      name: "New Apollo Hotel",
      location: "California",
      price: "585",
      rating: "4.8",
      img: "/images/California Hotel.jpg.jpeg"
    },
    {
      id: 3,
      name: "New Age Hotel",
      location: "Los Angeles",
      price: "385",
      rating: "4.6",
      img: "/images/Los Angeles Hotel.jpg.jpeg"
    },
    {
      id: 4,
      name: "Helios Beach Resort",
      location: "Chicago",
      price: "665",
      rating: "4.8",
      img: "/images/Chicago Hotel.jpg.jpeg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="group cursor-pointer">
            <div className="relative h-100 rounded-[2rem] overflow-hidden shadow-sm">
              <img 
                src={hotel.img} 
                alt={hotel.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-full flex items-center space-x-1 text-xs font-medium">
                <MapPin size={12} />
                <span>{hotel.location}</span>
              </div>
            </div>

            <div className="mt-4 px-2">
              <h3 className="text-xl font-bold text-slate-900">{hotel.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm">
                  <span className="text-emerald-500 font-bold text-lg">${hotel.price}</span>
                  <span className="text-slate-400 font-medium ml-1">/starting at</span>
                </p>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-slate-800">{hotel.rating}</span>
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 p-8 rounded-[2rem] flex items-start space-x-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm text-slate-900">
            <Heart size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">24x7 Help</h4>
            <p className="text-slate-500 text-sm font-semibold leading-relaxed max-w-sm">
              If we ever fall short of your expectations, please let us know — our dedicated team is here 24/7.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 p-8 rounded-[2rem] flex items-start space-x-6">
          <div className=" p-4 rounded-2xl shadow-md text-slate-900">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Payment Trust</h4>
            <p className="text-slate-500 text-sm font-semibold leading-relaxed max-w-sm">
              All refunds are backed by our no-questions-asked guarantee, providing you complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}