import React, { Children, useState } from 'react';
import { motion } from "framer-motion";
import HowItWorks from './HowItWorks';
import { MdClose } from "react-icons/md";
import { Calendar } from 'lucide-react';
import FlightDestination from './Destination/FlightDestination';
import ExploreNearby from './ExploreNearby';

export default function FlightPage() {
  const [roundedEnable, setRoundedEnable] = useState(false)
  const [returnDate, setReturnDate] = useState("")

  const [formData,setFormData]=useState({
    origin:"",
    destination:"",
    departuredDate:"",
    returnDate:""
  })

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  const [open, setOpen] = useState(false);
  const [cabin, setCabin] = useState("Economy")

  const handleChange = (type, value) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value)
    }));
  };

  const totalText = `${passengers.adults} Adult${passengers.adults > 1 ? "s" : ""}${passengers.children ? `, ${passengers.children} Child` : ""
    }${passengers.infants ? `, ${passengers.infants} Infant` : ""}`;

  return (
    <div className="w-full font-sans mt-25 ">
      <section className="px-4">
        <div className="max-w-7xl mx-auto rounded-[50px] pt-24 pb-32 relative overflow-visible">

          <div className="absolute inset-0 z-0">


            <video
            autoPlay
            loop
            playsInline
            muted
              src="/video/Flight Page GIF.mp4"
              alt="sky"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 "></div>
          </div>

          <div className="relative z-10 text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Find an unpublished deal
            </h1>
          </div>

          <div className="relative z-20 max-w-6xl mx-auto px-6 pt-20 md:pt-20">

            <div className="relative bg-white shadow-2xl  rounded-sm p-8 border-y border-gray-100">

              <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-around py-2 -ml-[1px]">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#dbeafe] rounded-full -ml-1"></div>
                ))}
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-around py-2 -mr-[4px]">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#dbeafe] rounded-full -mr-1"></div>
                ))}
              </div>

              <div className="gap-0 border-gray-200 rounded-lg overflow-visible">
                <form>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border rounded-md p-4 w-full max-w-5xl mx-auto"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">

                      <div className="md:col-span-6">
                        <p className="text-xs text-gray-500 mb-1">Origin</p>
                        <div className="flex items-center border rounded-md px-3 py-2 text-sm">
                          <input
                          type='text'
                            placeholder="Origin"
                            name='origin'
                            className="w-full outline-none md:h-7"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-6">
                        <p className="text-xs text-gray-500 mb-1">Destination</p>
                        <div className="flex items-center border rounded-md px-3 py-2 text-sm">
                          <input
                          type='text'
                            placeholder="Destination"
                            name='destination'
                            className="w-full outline-none md:h-7"
                          />
                        </div>
                      </div>

                    </div>

                    {/* ROW 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-5 items-end">

                      <div className="md:col-span-6 flex flex-col md:flex-row gap-4 md:gap-2">
                        <div className="w-full">
                          <p className="text-xs text-gray-500 mb-1">Depart date</p>
                          <div className="flex items-center border rounded-md px-3 py-2 text-sm">
                            <input type='date' name='departuredDate' className="w-full outline-none" />
                          </div>
                        </div>

                        <div className="w-full md:col-span-6 ">
                          <p className="text-xs text-gray-500 mb-1">Return date</p>

                          <div
                            className={`flex items-center border rounded-md px-3 py-2 text-sm ${roundedEnable ? "" : "bg-gray-100"
                              }`}
                          >
                            <input
                              type="date"
                              name='returnDate'
                              className="w-full outline-none bg-transparent"
                              disabled={!roundedEnable}
                              value={returnDate}
                              onChange={(e) => setReturnDate(e.target.value)}
                            />

                            {roundedEnable ? (
                              <MdClose
                                className="text-gray-500 text-xl cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setRoundedEnable(false);
                                  setReturnDate("");
                                }}
                              />
                            ) : (
                              <span
                                className="text-blue-500 text-md cursor-pointer font-bold"
                                onClick={() => setRoundedEnable(true)}
                              >
                                <Calendar size={15} />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-4 relative">
                        <p className="text-xs text-gray-500 mb-1">Passengers</p>

                        <div
                          onClick={() => setOpen(!open)}
                          className="border rounded-md px-3 py-2 text-sm cursor-pointer bg-white flex justify-between items-center"
                        >
                          <span>{totalText}, <span className="font-medium text-blue-600" />{cabin} </span>
                          <span className="text-gray-400">▼</span>
                        </div>

                        {open && (
                          <div className="absolute z-[999] mt-2 w-full bg-white border rounded-xl shadow-lg p-4 space-y-4">

                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm font-medium">Adults</p>
                                <p className="text-xs text-gray-400">12+ years</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => handleChange("adults", -1)}
                                  className="w-7 h-7 rounded-full border flex items-center justify-center"
                                >-</button>

                                <span>{passengers.adults}</span>

                                <button
                                  onClick={() => handleChange("adults", 1)}
                                  className="w-7 h-7 rounded-full border flex items-center justify-center"
                                >+</button>
                              </div>
                            </div>

                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm font-medium">Children</p>
                                <p className="text-xs text-gray-400">2–11 years</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => handleChange("children", -1)}
                                  className="w-7 h-7 rounded-full border flex items-center justify-center"
                                >-</button>

                                <span>{passengers.children}</span>

                                <button
                                  onClick={() => handleChange("children", 1)}
                                  className="w-7 h-7 rounded-full border flex items-center justify-center"
                                >+</button>
                              </div>
                            </div>

                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm font-medium">Infants</p>
                                <p className="text-xs text-gray-400">Below 2 years</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => handleChange("infants", -1)}
                                  className="w-7 h-7 rounded-full border flex items-center justify-center"
                                >-</button>

                                <span>{passengers.infants}</span>

                                <button
                                  onClick={() => handleChange("infants", 1)}
                                  className="w-7 h-7 rounded-full border flex items-center justify-center"
                                >+</button>
                              </div>
                            </div>

                            <div className="border-t pt-3">
                              <p className='text-sm font-semibold mb-2'>Cabin Class</p>

                              <div className="grid grid-cols-2 gap-2">
                                {["Economy", "Business", "First Class"].map((item) => (
                                  <button
                                    key={item}
                                    onClick={() => setCabin(item)}
                                    className={`px-3 py-2 text-sm rounded-md border transition ${cabin === item ? "bg-blue-500 text-white border-blue-500"
                                      : "bg-white hover:bg-gray-100"}`}
                                  >
                                    {item}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <button
                              onClick={() => setOpen(false)}
                              className="w-full mt-2 bg-[#3aa0c9] text-white py-2 rounded-md text-sm"
                            >
                              Done
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-2 flex md:justify-end">
                        <button type='sumbit' className="w-full md:w-[180px] bg-[#3aa0c9] hover:bg-[#2c8fb6] text-white py-2.5 rounded-md text-sm font-medium">
                          Search
                        </button>
                      </div>

                    </div>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FlightDestination />
      <ExploreNearby />
    </div>
  );
}