import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fuel, Settings, Zap, Filter } from 'lucide-react';


const CarlistPage = () => {



  const [cars, setCars] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isSticky, setIsSticky] = useState(false);

  const [typeFilter, setTypeFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");

  const [showFilter, setShowFilter] = useState(false)

  const carSectionRef = useRef(null);

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0]
  }



  const [pickUpDate, setPickUpDate] = useState(getTodayDate())
  const [dropeDate, setDropeDate] = useState(getTodayDate())




  useEffect(() => {
    const dummy = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: i % 2 === 0 ? "Nissan Versa" : i % 3 === 0 ? "Toyota Corolla" : "Kia Rio",
      price: (12 + i).toFixed(2),
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=500",
      type: i % 4 === 0 ? "SUV" : "Economy",
      transmission: "Automatic",
      kmLimit: "160 km",
    }))
    setCars(dummy)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!carSectionRef.current) return;

      const top = carSectionRef.current.getBoundingClientRect().top;

      if (top <= 70) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCars = cars.filter((car) => {
    const typeMatch = typeFilter === "All" || car.type === typeFilter;

    const priceMatch =
      priceFilter === "All" ||
      (priceFilter === "low" && car.price < 25) ||
      (priceFilter === "high" && car.price >= 25)

    return typeMatch && priceMatch
  });

  return (
    <div className="min-h-screen mt-5 bg-gray-50">

      <div className="bg-white p-6 text-center">
        <h1 className="text-3xl font-bold">
          Our Awesome Vehicles
        </h1>
      </div>

      <div className={`z-50 transition-all duration-300 ${isSticky
        ? 'fixed top-[70px] left-0 w-full bg-white/90 backdrop-blur-md shadow-lg'
        : 'max-w-7xl mx-auto'
        }`}>

        <div className="bg-[#10B981] p-4 flex flex-wrap gap-4 items-center justify-between text-white rounded-xl">

          <div className="flex flex-wrap gap-4 w-full md:w-auto">

            <div className="flex flex-col">
              <label className="text-sm mb-1">Pickup</label>
              <input
                type="text"
                placeholder="Pickup Location"
                className="px-4 py-2 rounded-md text-black bg-white outline-none w-full md:w-48"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Drop</label>
              <input
                type="text"
                placeholder="Drop Location"
                className="px-4 py-2 rounded-md text-black bg-white outline-none w-full md:w-48"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Pickup Date</label>
              <input
                type="date"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
                className="px-4 py-2 rounded-md text-black bg-white outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Drop Date</label>
              <input
                type="date"
                value={dropeDate}
                onChange={(e) => setDropeDate(e.target.value)}
                className="px-4 py-2 rounded-md text-black bg-white outline-none"
              />
            </div>

          </div>

          <div>
            <button
              onClick={() => setShowFilter(prev=>!prev)}
              className="bg-white cursor-pointer text-[#10B981] px-6 py-2 rounded-lg font-bold flex items-center gap-2"
            >
              <Filter size={18} /> Filters
            </button>
          </div>

        </div>

        <AnimatePresence>
          {showFilter && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-[95%] md:w-[1100px] max-h-[90vh] overflow-y-auto"
            >

              <h2 className="text-xl font-bold mb-4 text-black">
                Filter Options
              </h2>

              <div className="flex gap-3 overflow-x-auto mb-6">
                {["Economy", "Standard", "SUV", "Luxury", "Van"].map((item) => (
                  <button
                    key={item}
                    className="px-4 py-2 bg-gray-100 rounded-xl text-sm whitespace-nowrap hover:bg-gray-200"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div>
                  <p className="font-semibold mb-2">Gear box</p>
                  <label className="block"><input type="checkbox" /> Automatic</label>
                  <label className="block"><input type="checkbox" /> Manual</label>
                </div>

                <div>
                  <p className="font-semibold mb-2">Deposit</p>
                  <label className="block"><input type="checkbox" /> No deposit</label>
                  <label className="block"><input type="checkbox" /> Credit card</label>
                </div>

                <div>
                  <p className="font-semibold mb-2">Payment</p>
                  <label className="block"><input type="checkbox" /> Cash</label>
                  <label className="block"><input type="checkbox" /> Card</label>
                </div>

                <div>
                  <p className="font-semibold mb-2">Insurance</p>
                  <label className="block"><input type="checkbox" /> Basic</label>
                  <label className="block"><input type="checkbox" /> Full</label>
                </div>

              </div>

              <div className="sticky bottom-0 bg-white pt-6 flex justify-between items-center mt-6">
                <button className="text-gray-500">
                  Reset all filters
                </button>

                <button
                  onClick={() => setShowFilter(false)}
                  className="bg-[#10B981] text-white px-6 py-2 rounded-md"
                >
                  View Cars
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isSticky && <div className="h-[80px]" />}

      <div ref={carSectionRef} className="max-w-7xl mx-auto p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredCars.slice(0, visibleCount).map((car, index) => (

            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
            >

              <div className="relative p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-36 object-contain group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-3 left-3 bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Zap size={12} /> Instant
                </span>
              </div>

              <div className="px-4 pb-4">

                <h3 className="text-lg font-bold text-gray-800">
                  {car.name}
                </h3>

                <div className="flex gap-3 text-xs text-gray-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Settings size={14} /> {car.transmission}
                  </span>
                  <span className="flex items-center gap-1">
                    <Fuel size={14} /> {car.kmLimit}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-4">

                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      ${car.price}
                    </p>
                    <span className="text-xs text-gray-400">
                      per day
                    </span>
                  </div>

                  <button className="bg-[#10B981] hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    View
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {visibleCount < filteredCars.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="bg-white border border-[#10B981] text-[#10B981] px-8 py-3 rounded-full font-bold hover:bg-[#10B981] hover:text-white transition"
            >
              Load More
            </button>
          </div>
        )}

      </div>


    </div>
  );
};

export default CarlistPage;