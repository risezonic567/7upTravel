import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function Maldives() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏝️ Featured Hotels in the Maldives</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                    The Maldives is a dream destination known for its turquoise waters, overwater bungalows, and breathtaking marine life. Whether you're planning a honeymoon, a family retreat, or a solo getaway, 7upTravel.com offers everything you need — luxury resorts, flight deals, and car transfers — for a seamless and unforgettable trip.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌊 Overwater Villa Resorts</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Baros Maldives:</b> Elegant villas surrounded by coral reefs, ideal for romantic getaways and snorkeling.</li>
                        <li><b>Soneva Jani:</b>  Luxurious water villas with private slides, retractable roofs, and personalized service.</li>
                        <li><b>COMO Cocoa Island:</b> Intimate resort with Dhoni boat-inspired overwater suites and holistic wellness.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>👨‍👩‍👧 Family-Friendly Resorts</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Sun Siyam Iru Fushi:</b> Spacious villas, kids' club, and a wide range of dining and activities.</li>
                        <li><b>Constance Halaveli: </b>  Family-friendly overwater and beach villas with a safe, fun environment.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💰 Affordable Luxury</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Reethi Beach Resort: </b> Eco-friendly resort offering value-for-money villas and vibrant house reefs.</li>
                        <li><b>Embudu Village:</b> Simple yet charming beachfront bungalows with direct access to the ocean.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🛎️ Ultimate 5-Star Experiences</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>One&Only Reethi Rah: </b>  Iconic ultra-luxury resort with grand villas and Michelin-level dining.</li>
                        <li><b>Velaa Private Island: </b>Exclusive, private, and impeccably designed for high-end travelers.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Top Experiences in the Maldives</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>Snorkeling and scuba diving</li>
                        <li>Underwater dining and spa experiences</li>
                        <li>Sunset cruises and dolphin watching</li>
                        <li>Private sandbank picnics</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights & 🚗 Transfers with 7upTravel.com</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✈️ Find the best flight deals to Malé International Airport</li>
                        <li>🚤 Book seamless speedboat or seaplane transfers to your resort</li>
                        <li>🚗 Island car rentals available on local islands</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with 7upTravel.com?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Handpicked island resorts and exclusive offers</li>
                        <li>🌐 Compare hotels, flights, and transfers in one place</li>
                        <li>💬 24/7 expert support and customized travel planning</li>
                    </ul>


                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                      Paradise awaits! Book your Maldives escape today with 7upTravel.com and dive into luxury, tranquility, and unforgettable memories.
                      </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}