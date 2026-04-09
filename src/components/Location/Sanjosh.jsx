import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import LatestNews from '../../pages/LatestNewsPage'
import { useNavigate } from 'react-router-dom'

export default function Sanjosh() {
    const navigate = useNavigate()
    return (
        <>
            <FlightSearchSection />
            <HowItWorks />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="mt-14 md:mt-20 bg-slate-50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900">
                            It's time to discover ✈️
                        </h2>
                        <p className="mt-3 md:mt-4 text-slate-500 text-base sm:text-lg leading-relaxed">
                            From insider guidance to seamless booking, we'll be with you every step of the way.
                        </p>
                    </div>

                    <button 
                        onClick={() => navigate("/flight")} 
                        className="bg-black cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto">
                        Book a Flight
                    </button>
                </div>

                <div>
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 Travel to San Jose with 7upTravel</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                      Explore San Jose, the innovative heart of Silicon Valley. Whether you're heading here for tech conferences, business meetings, or a relaxing California escape, 7upTravel helps you get there with affordable flights and flexible car rental options to match your itinerary.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights to San Jose</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Best Fare Alerts:</b> Get notified when prices drop on flights to San Jose International Airport (SJC).</li>
                        <li><b>Major Airlines:</b> Book with trusted carriers like Delta, American, and Southwest.</li>
                        <li><b>Flexible Booking:</b> Modify or cancel your trip easily with select flexible fare options.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚗 Car Rentals in San Jose</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Airport Pickup:</b> Choose from a wide selection of vehicles right at SJC.</li>
                        <li><b>Economy to Luxury:</b> Find everything from fuel-efficient compacts to executive sedans.</li>
                        <li><b>Drive Silicon Valley:</b> Enjoy scenic drives and easy access to Cupertino, Palo Alto, and more.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Top Attractions to Explore</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>SAP Center – concerts, events, and Sharks hockey</li>
                        <li>Tech Interactive – hands-on science and innovation museum</li>
                        <li>Santana Row – luxury shopping and dining district</li>
                        <li>Winchester Mystery House – a historic and mysterious mansion tour</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with 7upTravel?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>✅ Competitive flight and rental car deals</li>
                        <li>🔐 Secure and fast online booking</li>
                        <li>📞 24/7 customer assistance</li>
                        <li>🧳 Easy trip management and modifications</li>
                    </ul>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Plan your San Jose trip now with 7upTravel — book your flight and car rental today for convenience, value, and flexibility!
                    </p>
                </div>

                <LatestNews />
            </div>
        </>
    )
}