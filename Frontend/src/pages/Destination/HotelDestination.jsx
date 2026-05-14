import React from 'react';
import {
  MapPin,
  Star,
  Heart,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HotelDestination() {

  const hotels = [
    {
      id: 1,
      name: "Baga Comfort",
      location: "New York",
      price: "455",
      rating: "4.5",
      img: "/images/New York Hotel.jpg.jpeg",
      path: "/new-york"
    },
    {
      id: 2,
      name: "New Apollo Hotel",
      location: "California",
      price: "585",
      rating: "4.8",
      img: "/images/California Hotel.jpg.jpeg",
      path: "/california"
    },
    {
      id: 3,
      name: "New Age Hotel",
      location: "Los Angeles",
      price: "385",
      rating: "4.6",
      img: "/images/Los Angeles Hotel.jpg.jpeg",
      path: "/los-angeles"
    },
    {
      id: 4,
      name: "Helios Beach Resort",
      location: "Chicago",
      price: "665",
      rating: "4.8",
      img: "/images/Chicago Hotel.jpg.jpeg",
      path: "/chicago"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#3aa0c9] mb-3">
            Luxury Hotels
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Discover Your Perfect Stay
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl text-base">
            Explore handpicked premium hotels with unbeatable comfort,
            modern amenities, and exclusive prices.
          </p>
        </div>

        <button className="mt-6 md:mt-0 bg-[#265a6f] hover:bg-[#1d4757] transition-all text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold shadow-lg">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

        {hotels.map((hotel, index) => (

          <motion.div
            key={hotel.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <Link to={hotel.path}>

              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100">

                <div className="relative h-[380px] overflow-hidden">

                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-slate-800 shadow">
                    <MapPin size={13} />
                    {hotel.location}
                  </div>

                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full flex items-center gap-1 font-bold text-sm shadow-lg">
                    <Star size={14} className="fill-slate-900" />
                    {hotel.rating}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">

                    <h3 className="text-2xl font-black">
                      {hotel.name}
                    </h3>

                    <div className="flex justify-between items-end mt-3">

                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/70">
                          Starting From
                        </p>

                        <h4 className="text-3xl font-black">
                          ${hotel.price}
                        </h4>
                      </div>

                      <button className="bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all">
                        Book Now
                      </button>

                    </div>
                  </div>

                </div>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Help */}
        <div className="bg-gradient-to-br from-[#f3f8fb] to-[#eef5f8] p-8 rounded-[2rem] flex gap-5 hover:shadow-xl transition-all border border-slate-100">

          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md shrink-0">
            <Heart size={30} className="text-[#265a6f]" />
          </div>

          <div>
            <h4 className="text-2xl font-black text-slate-900 mb-3">
              24×7 Customer Support
            </h4>

            <p className="text-slate-500 leading-relaxed">
              Our dedicated support team is always available to assist you
              before, during, and after your stay experience.
            </p>
          </div>

        </div>

        {/* Payment */}
        <div className="bg-gradient-to-br from-[#f3f8fb] to-[#eef5f8] p-8 rounded-[2rem] flex gap-5 hover:shadow-xl transition-all border border-slate-100">

          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md shrink-0">
            <ShieldCheck size={30} className="text-[#265a6f]" />
          </div>

          <div>
            <h4 className="text-2xl font-black text-slate-900 mb-3">
              Secure Payment Guarantee
            </h4>

            <p className="text-slate-500 leading-relaxed">
              Enjoy safe transactions, instant confirmations, and hassle-free
              refunds with complete peace of mind.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}