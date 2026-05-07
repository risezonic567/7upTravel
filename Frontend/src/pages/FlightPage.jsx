import React, {  useState } from 'react';
import { motion } from "framer-motion";
import HowItWorks from './HowItWorks';
import { MdClose } from "react-icons/md";
import { Calendar, PlaneLanding, PlaneTakeoff, Users, X } from 'lucide-react';
import FlightDestination from './Destination/FlightDestination';
import ExploreNearby from './ExploreNearby';
import FAQPage from './FaqPage';
import { useNavigate } from 'react-router-dom';

export default function FlightPage() {
  const [roundedEnable, setRoundedEnable] = useState(false)
  const [returnDate, setReturnDate] = useState("")
  

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departuredDate: "",
    returnDate: ""
  })

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  const [open, setOpen] = useState(false);
  const [cabin, setCabin] = useState("Economy")

  const cabinMap = {
  "Economy": "economy",
  "Business": "business",
  "First Class": "first"
};

  const handleChange = (type, value) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value)
    }));
  };

  const totalText = `${passengers.adults} Adult${passengers.adults > 1 ? "s" : ""}${passengers.children ? `, ${passengers.children} Child` : ""
    }${passengers.infants ? `, ${passengers.infants} Infant` : ""}`;

  async function handleSearch(e) {
    e.preventDefault()

    const formData = new FormData(e.target);

    const origin = formData.get("origin");
    const destination = formData.get("destination");
    const date = formData.get("departuredDate");

    if (!origin || !destination || !date) {
      alert("Please fill all Required field")
      return
    }

    navigate(
      "/flight-list", {
      state: {
        origin,
        destination,
        date,
        returnDate,
        adults: passengers.adults,
        children: passengers.children,
        infants: passengers.infants,
        cabin: cabinMap[cabin]
      }
    }
    )
  }

  return (
   <div className="font-sans">
      <section className="h-full">
        <div className="w-full rounded-[40px] md:rounded-[60px] pt-24 pb-44 relative overflow-visible shadow-2xl">
          
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              playsInline
              muted
              src="/video/Flight Page.mp4"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
          </div>

          <div className="relative z-10 text-center mt-24 ">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg"
            >
              Find an <span className="text-[#52a3c3]">unpublished</span> deal
            </motion.h1>
            <p className="text-white/95 mt-4 text-lg hidden md:block">Exclusive fares you won't find anywhere else.</p>
          </div>

          <div className="relative z-20 max-w-6xl mx-auto mt-20 px-4">
            <div className="relative bg-white/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-2xl p-6 md:p-10 border border-white/20">
              
              {/* <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-[#f3f4f6] rounded-full -ml-4 shadow-inner"></div>
                ))}
              </div>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-[#f3f4f6] rounded-full -mr-4 shadow-inner"></div>
                ))}
              </div> */}

              <form onSubmit={handleSearch} className="relative z-30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-black ml-1 mb-1 block">Origin</label>
                      <div className="flex items-center border-2 border-gray-100 group-focus-within:border-[#3aa0c9] rounded-xl px-4 py-3 transition-all ">
                        <PlaneTakeoff size={18} className="text-black mr-3" />
                        <input
                          type='text'
                          placeholder="Where from?"
                          name='origin'
                          className="w-full bg-transparent outline-none text-gray-700 font-medium placeholder:text-black"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-black ml-1 mb-1 block">Destination</label>
                      <div className="flex items-center border-2 border-gray-100 group-focus-within:border-[#3aa0c9] rounded-xl px-4 py-3 transition-all ">
                        <PlaneLanding size={18} className="text-black mr-3" />
                        <input
                          type='text'
                          placeholder="Where to?"
                          name='destination'
                          className="w-full bg-transparent outline-none text-gray-700 font-medium placeholder:text-black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    
                    <div className="md:col-span-6 grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-black ml-1 mb-1 block">Departure</label>
                        <div className="flex items-center border-2 border-gray-100 rounded-xl px-3 py-3 ">
                          <input type='date' name='departuredDate' className="w-full bg-transparent outline-none text-sm cursor-pointer" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-black ml-1 mb-1 block">Return</label>
                        <div className={`flex items-center border-2 transition-all rounded-xl px-3 py-3 ${roundedEnable ? "border-gray-100 " : "border-dashed border-gray-200 bg-transparent"}`}>
                          <input
                            type="date"
                            disabled={!roundedEnable}
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="w-full bg-transparent outline-none text-sm disabled:text-black cursor-pointer"
                          />
                          {roundedEnable ? (
                            <X size={16} className="text-red-400 cursor-pointer" onClick={() => {setRoundedEnable(false); setReturnDate("");}} />
                          ) : (
                            <Calendar size={18} className="text-[#101c20] cursor-pointer" onClick={() => setRoundedEnable(true)} />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-4 relative">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-black ml-1 mb-1 block">Travelers & Class</label>
                      <div
                        onClick={() => setOpen(!open)}
                        className="border-2 border-gray-100 rounded-xl px-4 py-3 text-sm cursor-pointer 
                         flex justify-between items-center hover:border-gray-200 transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-black" />
                          <span className="font-medium text-gray-900">{totalText}</span>
                          <span className="text-[#1f4756] font-bold ml-1">• {cabin}</span>
                        </div>
                        <span className={`text-black transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
                      </div>

                      {open && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute z-[999] mt-3 w-72 left-0 md:right-0 md:left-auto bg-white border rounded-2xl shadow-2xl p-5 space-y-5"
                        >
                          {['adults', 'children', 'infants'].map((type) => (
                            <div key={type} className="flex justify-between items-center">
                              <div>
                                <p className="text-sm font-bold capitalize">{type}</p>
                                <p className="text-[10px] text-black uppercase tracking-tighter">
                                  {type === 'adults' ? '12+ Years' : type === 'children' ? '2-11 Years' : 'Under 2 Years'}
                                </p>
                              </div>
                              <div className="flex items-center gap-4">
                                <button type='button' onClick={() => handleChange(type, -1)} className="w-8 h-8 rounded-lg border-2 border-gray-100 flex items-center justify-center hover:bg-gray-50">-</button>
                                <span className="font-bold w-4 text-center">{passengers[type]}</span>
                                <button type='button' onClick={() => handleChange(type, 1)} className="w-8 h-8 rounded-lg border-2 border-[#3aa0c9] text-[#3aa0c9] flex items-center justify-center hover:bg-blue-50">+</button>
                              </div>
                            </div>
                          ))}

                          <div className="border-t pt-4">
                            <p className='text-xs font-bold text-black uppercase mb-3'>Cabin Class</p>
                            <div className="flex flex-wrap gap-2">
                              {["Economy", "Business", "First"].map((item) => (
                                <button
                                  key={item}
                                  type='button'
                                  onClick={() => setCabin(item)}
                                  className={`px-3 py-1.5 text-xs rounded-full border-2 transition-all font-semibold ${cabin === item ? "bg-[#3aa0c9] text-white border-[#3aa0c9]" : "bg-white text-gray-500 border-gray-100 hover:border-gray-300"}`}
                                >
                                  {item}
                                </button>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() => setOpen(false)}
                            type='button'
                            className="w-full mt-2 bg-gray-900 text-white py-3 rounded-xl text-sm font-bold hover:bg-black transition-colors"
                          >
                            Done
                          </button>
                        </motion.div>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <button type='submit' className="w-full bg-[#265a6f] hover:bg-[#265a6f] hover:shadow-lg hover:shadow-blue-200 text-white py-3.5 rounded-xl text-sm font-bold transition-all transform active:scale-95">
                        Search Flights
                      </button>
                    </div>

                  </div>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20">
        <HowItWorks />
        <FlightDestination />
        <FAQPage />
        <ExploreNearby />
      </div>
    </div>
  );
};