import React, { useState, useEffect } from 'react';
import { Plane, Clock, Luggage, ChevronRight, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FlightList({ searchParams }){
//   const [loading, setLoading] = useState(true);

  // Fake Data: Isse tum baad mein API se replace kar lena
  const navigate = useNavigate()
  const dummyFlights = [
    {
      id: 1,
      airline: "IndiGo",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/IndiGo_Airlines_logo.svg/200px-IndiGo_Airlines_logo.svg.png",
      departure: "10:30 AM",
      arrival: "01:00 PM",
      duration: "2h 30m",
      price: 5200,
      type: "Non-stop",
      class: "Economy"
    },
    {
      id: 2,
      airline: "Air India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Air_India_Logo.svg/200px-Air_India_Logo.svg.png",
      departure: "02:15 PM",
      arrival: "05:00 PM",
      duration: "2h 45m",
      price: 6150,
      type: "Non-stop",
      class: "Business"
    },
    {
      id: 3,
      airline: "Vistara",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Vistara_logo.svg/200px-Vistara_logo.svg.png",
      departure: "08:00 PM",
      arrival: "11:15 PM",
      duration: "3h 15m",
      price: 4800,
      type: "1-Stop",
      class: "Economy"
    }
  ];

//   // Simulation: Jaise hi user search karega, loading dikhegi
//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000); // 1 sec loading
//     return () => clearTimeout(timer);
//   }, [searchParams]);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center py-20">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
//         <p className="mt-4 text-gray-500 font-medium animate-pulse">Searching best flights for you...</p>
//       </div>
//     );
//   }

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      
      {/* Header Info */}
      <div className="flex justify-between items-end border-b pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Flights from Delhi to Mumbai</h2>
          <p className="text-sm text-gray-500">20 Apr 2026 • 1 Adult</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Flight Cards Loop */}
      <div className="space-y-4">
        {dummyFlights.map((flight) => (
          <div 
            key={flight.id} 
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              
              {/* Airline Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                  <img src={flight.logo} alt={flight.airline} className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{flight.airline}</h3>
                  <p className="text-xs text-gray-400">{flight.class}</p>
                </div>
              </div>

              {/* Timing & Path */}
              <div className="col-span-2 flex items-center justify-between px-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800">{flight.departure}</p>
                  <p className="text-xs text-gray-400 font-medium">DEL</p>
                </div>

                <div className="flex-1 px-8 flex flex-col items-center">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{flight.duration}</span>
                  <div className="relative w-full h-[2px] bg-gray-200">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                      <Plane size={14} className="text-blue-500" />
                    </div>
                  </div>
                  <span className="text-[10px] text-green-600 font-bold mt-1">{flight.type}</span>
                </div>

                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800">{flight.arrival}</p>
                  <p className="text-xs text-gray-400 font-medium">BOM</p>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                <div className="text-right">
                  <p className="text-2xl font-black text-gray-900">₹{flight.price.toLocaleString()}</p>
                  <p className="text-[10px] text-gray-400">+ taxes & fees</p>
                </div>
                <button onClick={()=>navigate("/checkout",{state:{flight}})} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 group-hover:bg-blue-700 transition-colors">
                  Book <ChevronRight size={18} />
                </button>
              </div>

            </div>

            {/* Extra Benefits Tag */}
            <div className="mt-4 pt-4 border-t border-dashed border-gray-100 flex gap-4">
              <span className="flex items-center gap-1 text-[11px] bg-green-50 text-green-700 px-2 py-1 rounded-md font-medium">
                <Luggage size={12} /> 7Kg Cabin, 15Kg Check-in
              </span>
              <span className="flex items-center gap-1 text-[11px] bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium">
                <Clock size={12} /> Free Cancellation available
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}