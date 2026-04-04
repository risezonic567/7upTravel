import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import HowItWorks from './HowItWorks';
import { FaPlaneDeparture } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Calendar } from 'lucide-react';

export default function FlightPage() {
  const [roundedEnable, setRoundedEnable] = useState(false)
  const [returnDate, setReturnDate] = useState("")
  const inputRef = useRef(null);

  return (
    <div className="w-full font-sans mt-[50px]">
      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#dbeafe] to-[#ffffff] rounded-[50px] pt-24 pb-32 relative overflow-hidden">

          <div className="absolute top-10 right-10 w-full flex justify-center opacity-70 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1000"
              alt="Airplane"
              className="w-[600px] object-contain rotate-[-10deg] translate-x-20"
            />
          </div>

          <div className="relative z-10 text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
              Find an unpublished deal
            </h1>
          </div>

          <div className="relative z-20 max-w-6xl mx-auto px-6">

            <div className="relative bg-white shadow-2xl rounded-sm p-8 border-y border-gray-100">

              <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-around py-2 -ml-[1px]">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#dbeafe] rounded-full -ml-1"></div>
                ))}
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-around py-2 -mr-[1px]">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#dbeafe] rounded-full -mr-1"></div>
                ))}
              </div>

              <div className="gap-0 border-gray-200 rounded-lg overflow-hidden">

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border rounded-md p-4 w-full max-w-5xl mx-auto"
                >
                  {/* ROW 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">

                    {/* ORIGIN */}
                    <div className="md:col-span-6">
                      <p className="text-xs text-gray-500 mb-1">Origin</p>
                      <div className="flex items-center border rounded-md px-3 py-2 text-sm">
                        <input
                          placeholder="Origin"
                          className="w-full outline-none md:h-7"
                        />
                      </div>
                    </div>

                    {/* DESTINATION */}
                    <div className="md:col-span-6">
                      <p className="text-xs text-gray-500 mb-1">Destination</p>
                      <div className="flex items-center border rounded-md px-3 py-2 text-sm">
                        <input
                          placeholder="Destination"
                          className="w-full outline-none md:h-7"
                        />
                      </div>
                    </div>


                  </div>

                  {/* ROW 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">

                    <div className="md:col-span-6 flex gap-2">
                      <div className="w-full">
                        <p className="text-xs text-gray-500 mb-1">Depart date</p>
                        <div className="flex items-center border rounded-md px-3 py-2 text-sm">
                          <input type='date' className="w-full outline-none" />
                        </div>
                      </div>

                      <div className="w-full md:col-span-6">
                        <p className="text-xs text-gray-500 mb-1">Return date</p>

                        <div
                          className={`flex items-center border rounded-md px-3 py-2 text-sm ${roundedEnable ? "" : "bg-gray-100"
                            }`}
                        >
                          <input
                            type="date"
                            className="w-full outline-none bg-transparent"
                            disabled={!roundedEnable}
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                          />

                          {/* ICON TOGGLE */}
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
                              <Calendar size={15}/>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* PASSENGER */}
                    <div className="md:col-span-4">
                      <p className="text-xs text-gray-500 mb-1">Passengers</p>
                      <select className="w-full border rounded-md px-3 py-2 text-sm">
                        <option>1 passenger</option>
                        <option>2 passengers</option>
                      </select>
                    </div>

                    {/* BUTTON */}
                    <div className="md:col-span-2 flex md:justify-end">
                      <button className="w-full md:w-[180px] bg-[#3aa0c9] hover:bg-[#2c8fb6] text-white py-2.5 rounded-md text-sm font-medium">
                        Search
                      </button>
                    </div>

                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
    </div>
  );
};




