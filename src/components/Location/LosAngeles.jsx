import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function LosAngeles() {
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

                    <button onClick={() => navigate("/flight")} className="bg-black cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto">
                        Book a Flight
                    </button>
                </div>

                <div>
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏨 Featured Hotels in Los Angeles</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                       Discover our handpicked selection of top-rated hotels in Los Angeles — perfect for every kind of traveler, whether you're here for business, leisure, or a bit of both. These properties offer excellent amenities, convenient locations, and unbeatable comfort.
                    </p>
                    <hr />

                    <ul className='text-gray-500 list-disc mt-5 mb-5 pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>The Beverly Hills Hotel –</b> Iconic luxury with celebrity charm, nestled in the heart of Beverly Hills.</li>
                        <li><b>Hotel Figueroa –</b> Stylish downtown hotel with rooftop pool and close access to LA Live and the Convention Center.</li>
                        <li><b>Loews Hollywood Hotel –</b> Perfect for movie buffs, located steps from the Walk of Fame and Dolby Theatre.</li>
                        <li><b>Shutters on the Beach –</b> Upscale beachfront retreat in Santa Monica offering ocean views and spa services.</li>
                        <li><b>Freehand Los Angeles –</b> Trendy, affordable stay with a rooftop pool bar and communal vibe in the heart of downtown.</li>
                    </ul>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                      ✨ Tip: Use filters on 7UPTRAVEL LLC to find the best deals, real guest reviews, and exclusive offers on these hotels and more in Los Angeles.
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}