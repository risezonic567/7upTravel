import React from 'react';
import { Info, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Thailand',
    rating: '4.3',
    description: 'Temples & sun-soaked sands.',
    image: 'https://images.unsplash.com/photo-1528181304800-2f140819898f?auto=format&fit=crop&q=80&w=800',
    active: true,
  },
  {
    id: 2,
    name: 'Hong Kong',
    rating: '4.6',
    description: 'Skyline thrills & street eats.',
    image: 'https://images.unsplash.com/photo-1506353301390-276326c9973f?auto=format&fit=crop&q=80&w=800',
    active: true,
  },
  {
    id: 3,
    name: 'Maldives',
    rating: '4.3',
    description: 'Overwater bliss & blue lagoons.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    active: true,
  },
  {
    id: 4,
    name: 'Switzerland',
    rating: '4.3',
    description: 'Alpine peaks & crystal lakes.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
    active: true,
  },
];

export default function FlightDestination() {
  const navigate = useNavigate()
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
      <h2 className='md:text-3xl mb-20 text-center text-xl font-bold'>Popular Destination</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        
        {destinations.map((dest) => (
          
          <div key={dest.id} className="group cursor-pointer w-full max-w-[300px]">
            
            <div className="relative overflow-hidden rounded-2xl h-[420px] w-full">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-[300px] h-[400px] border object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-1.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors">
                <Info size={18} />
              </div>
            </div>

            <div className="mt-5 space-y-1 px-1 w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold hover:text-indigo-600">
                  {dest.name}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-slate-800">{dest.rating}</span>
                  <Star size={16} fill="#FFC107" stroke="#FFC107" />
                </div>
              </div>

              <p className="text-slate-500 text-[15px] font-medium">
                {dest.description}
              </p>
            </div>

          </div>
        ))}

      </div>

      <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            It's time to discover ✈️
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            From insider guidance to seamless booking, we'll be with you every step of the way.
          </p>
        </div>

        <button onClick={()=>navigate("/flight")} className="bg-black cursor-pointer text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto">
          Book a Flight
        </button>

      </div>

    </section>
  );
}