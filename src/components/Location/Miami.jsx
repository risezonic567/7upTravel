import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function Miami() {
    const navigate = useNavigate()
    return (
        <>
            <FlightSearchSection />
            <HowItWorks />

            <div className=' max-w-7xl mx-auto'>
                <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                            It's time to discover ✈️
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                            From insider guidance to seamless booking, we'll be with you every step of the way.
                        </p>
                    </div>

                    <button onClick={() => navigate("/flight")} className="bg-black cursor-pointer text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto">
                        Book a Flight
                    </button>
                </div>



                <div>
                    <h2 className='text-xl font-bold mt-5 mb-5'>🌴 Explore Miami with 7UpTravel</h2>
                    <p className='text-gray-500 mb-5'>
                    Welcome to Miami — where sun, style, and vibrant city life meet the ocean breeze. Whether you're heading to the beach, nightlife, or a cultural escape, 7UpTravel helps you get there with the best flight deals and reliable car rental options.

   
                    </p>
                    <hr />

                    <h2 className='text-xl font-bold mt-5 mb-5'>🛫 Popular Flights to Miami</h2>
                    <ul className='text-gray-500 list-disc mb-5 pl-20'>
                        <li><b>New York (JFK) ➝ Miami (MIA):</b>Frequent nonstop service from major carriers.</li>
                        <li><b>Chicago (ORD) ➝ Miami (MIA): </b> Great for winter escapes and quick weekend trips.</li>
                        <li><b>Atlanta (ATL) ➝ Miami (MIA):</b>Short and affordable flights year-round.</li>

                    </ul>

                     <h2 className='text-xl font-bold mt-5 mb-5'>🚗 Car Rentals for Every Traveler</h2>
                    <ul className='text-gray-500 list-disc mb-5 pl-20'>
                        <li><b>Compact & Economy Cars:</b>Ideal for cruising South Beach or city sightseeing.</li>
                        <li><b>Convertibles & Luxury Rides:</b> Drive in style along Ocean Drive or to the Keys.</li>
                        <li><b>SUVs & Vans:</b> Great for families or groups heading to the Everglades or beyond.</li>

                    </ul>

                    <h2 className='text-xl font-bold mt-5 mb-5'>📍 Convenient Pick-Up Spots</h2>
                    <ul className='pl-10 list-disc mb-5 text-gray-500'>
                        <li>Miami International Airport (MIA)</li>
                        <li>Downtown Miami & Brickell</li>
                        <li>South Beach</li>
                    </ul>

                     <h2 className='text-xl font-bold mt-5 mb-5'>🎯 Why Choose 7UpTravel?</h2>
                    <ul className='pl-10 list-disc mb-5 text-gray-500'>
                        <li>✅ Exclusive flight and rental deals</li>
                        <li>🧳 Bundle & save on airfare and car bookings</li>
                        <li>💳 Fast & secure checkout process</li>
                        <li>📞 24/7 customer support from booking to arrival</li>
                    </ul>

                    <p className='font-semibold text-gray-500 mt-5 mb-5'>
                        Ready to discover Miami? Book your flight and car rental with 7UpTravel and travel smart from takeoff to touchdown!
                    </p>
                 </div>
                 <LatestNews/>
            </div>
        </>
    )
}
