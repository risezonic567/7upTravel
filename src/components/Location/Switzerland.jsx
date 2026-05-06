import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function Switzerland() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏔️ Featured Hotels in Switzerland</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                   Switzerland is where alpine beauty meets luxury hospitality. From snow-capped peaks to serene lakes and vibrant cities, Switzerland offers unforgettable stays in every season. Whether you're skiing in Zermatt, exploring Zurich, or cruising Lake Geneva, 7upTravel.com helps you book hotels, flights, and even car rentals for a seamless Swiss escape.
                   </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>⛷️ Luxury Alpine Resorts</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Badrutt’s Palace Hotel, St. Moritz:</b>Iconic resort offering glamour, gourmet dining, and ski-in/ski-out access.</li>
                        <li><b>The Chedi Andermatt:</b>  Modern luxury in a charming alpine village, blending Asian and Swiss influences.</li>
                        <li><b>Kulm Hotel, St. Moritz:</b> Historic elegance with breathtaking mountain views and world-class service.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 City Comforts</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hotel Schweizerhof Zurich</b>Boutique hotel opposite the main station with refined rooms and top service.</li>
                        <li><b>Hotel Beau-Rivage Geneva: </b>  Overlooking Lake Geneva, known for timeless luxury and diplomatic history.</li>
                        <li><b>Art Deco Hotel Montana, Lucerne:</b>  Stunning lake views, creative cuisine, and easy access to Old Town sights.</li>
                    
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💰 Mid-Range & Boutique Gems</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hotel Bristol, Bern: </b> A stylish and affordable option in the heart of the Swiss capital.</li>
                        <li><b>Hotel Edelweiss, Geneva:</b> Swiss-themed boutique hotel with charming décor and modern comfort.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏞️ Nature & Lakeside Escapes</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hotel Villa Honegg, Ennetbürgen:</b> Famous for its infinity pool overlooking Lake Lucerne.</li>
                        <li><b>Grand Hotel Zermatterhof:</b>Nestled in Zermatt with views of the Matterhorn and traditional Alpine ambiance.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Must-Visit Swiss Destinations</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>Zermatt – Home of the Matterhorn</li>
                        <li>Lucerne – Lakeside charm & medieval bridges</li>
                        <li>Interlaken – Adventure capital of Switzerland</li>
                        <li>Zurich – Financial hub with artistic flair</li>
                        <li>Geneva – Culture, diplomacy, and luxury</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights & 🚗 Car Rentals with 7upTravel.com</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✈️ Book flights to Zurich, Geneva, and Bern at great rates</li>
                        <li>🚗 Rent a car for scenic road trips through the Alps and countryside</li>
                        <li>🚆 Combine rail and drive options for flexible travel</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with 7upTravel.com?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Best rates on Swiss luxury & boutique hotels</li>
                        <li>💳 Safe and secure payment process</li>
                        <li>🕘 24/7 travel assistance for hotels, flights, and car rentals</li>
                    </ul>


                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                     Discover Switzerland’s natural beauty and refined living — book your alpine escape today with 7upTravel.com.
                     </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}