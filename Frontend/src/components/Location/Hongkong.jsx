import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function Hongkong() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 Featured Hotels in Hong Kong</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                     Hong Kong is a dazzling fusion of East and West — where skyscrapers meet serene temples, and street food shares the spotlight with Michelin-starred cuisine. Whether you're here for business, shopping, or sightseeing, 7upTravel.com helps you book the perfect hotel, flight, and car rental for a seamless stay.
                     </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏨 Luxury Hotels with Skyline Views</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>The Ritz-Carlton, Hong Kong:</b> One of the world’s highest hotels with breathtaking views and fine dining at Ozone.</li>
                        <li><b>Four Seasons Hotel Hong Kong: </b> Offers Victoria Harbour views, world-class spa, and award-winning restaurants.</li>
                        <li><b>Island Shangri-La:</b> Elegant, centrally located with sweeping city views and renowned hospitality.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💼 Business-Friendly Stays</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>JW Marriott Hotel Hong Kong:</b> Located above Pacific Place mall, ideal for business travelers.</li>
                        <li><b>Hyatt Regency Tsim Sha Tsui:  </b>  Offers modern rooms, great transport links, and event spaces.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🛌 Boutique & Mid-Range Hotels</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hotel ICON:</b> A design-led hotel created by Hong Kong Polytechnic University with artistic flair and top-notch service.</li>
                        <li><b>The Fleming:</b>  A stylish boutique hotel in Wan Chai inspired by Hong Kong’s maritime heritage.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💰 Budget-Friendly Options</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Mini Hotel Central: </b> Compact, clean rooms in the heart of the city at great value.</li>
                        <li><b>YHA Mei Ho House Hostel: </b>Affordable and modern with a touch of local culture and history.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Top Attractions Nearby</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>Victoria Peak</li>
                        <li>Tsim Sha Tsui Promenade</li>
                        <li>Mong Kok Street Markets</li>
                        <li>Disneyland Hong Kong</li>
                        <li>Ngong Ping 360 & Big Buddha</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights & 🚗 Car Rentals with 7upTravel.com</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✈️ Find great flight deals to and from Hong Kong</li>
                        <li>🚗 Book trusted car rentals for airport pickups or local exploring</li>
                        <li>🔒 One-stop booking with instant confirmations</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with 7upTravel.com?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Exclusive hotel, flight & car rental deals</li>
                        <li>💳 Secure and instant bookings</li>
                        <li>📞 24/7 multilingual customer support</li>
                    </ul>


                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                       From harbor views to hidden gems, book your hotel, flight, and car rental with 7upTravel.com today and experience Hong Kong in complete comfort and style!
                       </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}