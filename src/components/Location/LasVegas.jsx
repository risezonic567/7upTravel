import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function LasVegas() {
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
                    <h2 className='text-xl font-bold mt-5 mb-5'>🎰 Discover Las Vegas with 7upTravel</h2>
                    <p className='text-gray-500 mb-5'>
                        Experience the thrill of Las Vegas — the Entertainment Capital of the World! Whether you're visiting for dazzling shows, high-stakes casinos, or legendary nightlife, 7upTravel makes it easy to get there and explore with top-rated flight deals and convenient car rental options.
                        </p>
                    <hr />

                    <h2 className='text-xl font-bold mt-5 mb-5'>✈️ Flights to Las Vegas</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li><b>Affordable Airfare:</b> Score unbeatable deals on nonstop flights from major cities across the U.S.</li>
                        <li><b>Flexible Schedules: </b> Choose from morning, afternoon, or red-eye flights to fit your Vegas plans.</li>
                        <li><b>Last-Minute Deals:</b> Need a quick escape? 7upTravel offers spontaneous travel savings to Las Vegas.</li>
                    </ul>

                    <h2 className='text-xl font-bold mt-5 mb-5'>🚗 Car Rentals Made Easy</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li><b>Wide Vehicle Selection:</b> From luxury sedans to economy cars and SUVs, find the right ride for your Vegas adventure.</li>
                        <li><b>Pickup at McCarran Airport:</b>  Land and go — car rentals available right at the Las Vegas airport.</li>
                        <li><b>Daily, Weekly & Weekend Rates:</b> Flexible rental terms to match your stay, whether it's a quick trip or an extended vacation.</li>
                    </ul>



                    <h2 className='text-xl font-bold mt-5 mb-5'>📍 Explore the Best of Las Vegas</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li>The Las Vegas Strip – endless entertainment and attractions</li>
                        <li>Fremont Street Experience – vintage Vegas vibes</li>
                        <li>Red Rock Canyon – stunning scenic drives just minutes away</li>
                        <li>Hoover Dam & Grand Canyon day trips with your rental car</li>
                    </ul>

                    <h2 className='text-xl font-bold mt-5 mb-5'>🚀 Why Book with 7upTravel?</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li>✅ Low fares on flights to Las Vegas</li>
                        <li>🚘 Affordable car rental options from top providers</li>
                        <li>💳 Secure booking with flexible payment options</li>
                        <li>📞 24/7 customer service and travel support</li>
                    </ul>
                    <p className='font-semibold text-gray-500 mt-5 mb-5'>
                       Start your Las Vegas journey with 7upTravel — book your flight and car rental today for big savings and unforgettable memories!
                    </p>
                 </div>
                 <LatestNews/>
            </div>
        </>
    )
}
