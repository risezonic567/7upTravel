import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";
import CarlistPage from "./CarListPage";
import FAQPage from "./FaqPage";
import Testimonials from "../components/Testimonials";
import Features from "./HowItWorks";

export default function CabBookingSection() {
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    differentDropoff: true,
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
    ageGroup: true,
  });

  const handleChange = (e) => {
    const { id, type, checked, value, placeholder } = e.target;
    const fieldName = id || placeholder?.replace(/\s+/g, "");

    setFormData((prev) => ({
      ...prev,
      [fieldName]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSearch = () => {
    console.log("Cab Search Requested Data:", formData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000)

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <section>
        <div className="min-h-screen mt-20 font-sans overflow-hidden">
          <main className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 lg:px-20 py-10">

            <div className="z-20 w-full md:w-[420px] lg:w-[450px] order-2 md:order-1 mt-[-80px] md:mt-0 md:absolute md:left-20 md:top-1/2 md:-translate-y-1/2 block">
              <AnimatePresence>
                {showForm && (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                  >
                    <div className="p-6 pb-2">
                      <h2 className="text-2xl font-bold text-gray-800">
                        Book Your Online Cab
                      </h2>
                    </div>

                    <div className="bg-[#9b8632] p-6 space-y-4">
                      <input
                        type="text"
                        placeholder="Enter pick-up location"
                        value={formData["Enterpick-uplocation"]}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none text-gray-800"
                      />

                      <div className="flex items-center space-x-2 text-sm font-semibold">
                        <input
                          type="checkbox"
                          id="differentDropoff"
                          checked={formData.differentDropoff}
                          onChange={handleChange}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <label htmlFor="differentDropoff">
                          Drop car off at different location
                        </label>
                      </div>

                      <input
                        type="text"
                        placeholder="Enter drop-off location"
                        value={formData["Enterdrop-offlocation"]}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-gray-50 outline-none text-gray-800"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <input 
                          type="date" 
                          id="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleChange}
                          className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800" 
                        />
                        <input 
                          type="time" 
                          id="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleChange}
                          className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800" 
                        />
                        <input 
                          type="date" 
                          id="dropoffDate"
                          value={formData.dropoffDate}
                          onChange={handleChange}
                          className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800" 
                        />
                        <input 
                          type="time" 
                          id="dropoffTime"
                          value={formData.dropoffTime}
                          onChange={handleChange}
                          className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800" 
                        />
                      </div>

                      <div className="flex items-center space-x-2 text-sm font-semibold">
                        <input
                          type="checkbox"
                          id="ageGroup"
                          checked={formData.ageGroup}
                          onChange={handleChange}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <label htmlFor="ageGroup">
                          Drivers age between 30-65
                        </label>
                      </div>

                      <motion.button
                        onClick={handleSearch}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-[#33A1DE] text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition"
                      >
                        SEARCH
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full md:w-3/4 relative md:ml-auto h-full flex items-center justify-center order-1 md:order-2">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="w-full h-[300px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl relative"
              >
                <img
                  src="/images/Car Home Page.jpg.jpeg"
                  alt="Taxi"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={
                    showForm
                      ? {
                          y: isMobile ? 0 : -150,
                          opacity: 0.8,
                          scale: isMobile ? 1 : 0.8,
                        }
                      : { y: 0 }
                  }
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white drop-shadow-2xl text-center">
                    BOOK YOUR <span className="text-[#FFCC00]">CAB</span>
                  </h1>
                </motion.div>
              </motion.div>
            </div>

          </main>
        </div>
      </section>
      
      <Features/>
      <WhyChooseUs/>
      <div id="sticky-trigger"></div>
      <CarlistPage />

      <FAQPage/>
      <Testimonials/>
    </>
  );
}