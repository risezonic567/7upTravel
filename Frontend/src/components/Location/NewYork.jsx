import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function NewYork() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏙️ Explore New York City with 7upTravel</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                        New York City — “The City That Never Sleeps” — is calling! Whether you're headed there for business, Broadway, shopping, or sightseeing, 7upTravel has you covered with seamless flight bookings and flexible car rental options so you can experience the city your way.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Fly into the Heart of NYC</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Multiple Airports:</b> Choose from JFK, LaGuardia (LGA), or Newark (EWR) for convenient flight options.</li>
                        <li><b>Real-Time Fare Alerts:</b> Never miss a deal — we’ll notify you when prices drop on NYC flights.</li>
                        <li><b>Flexible Booking:</b> Modify or cancel select tickets with ease if plans change.</li>
                        <li><b>Major Carriers:</b> Book with trusted airlines like Delta, JetBlue, United, and more.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚗 Car Rentals to Get Around the Big Apple</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Pick Up at Airport:</b> Rent a car right after landing at JFK, LGA, or EWR.</li>
                        <li><b>All Vehicle Types:</b> Compact cars for city parking or SUVs for family trips — we’ve got it.</li>
                        <li><b>Explore Beyond Manhattan:</b> Visit Brooklyn, Queens, and upstate NY on your schedule.</li>
                        <li><b>No Hidden Fees:</b> Transparent pricing with optional insurance and extras.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 NYC Highlights You Won’t Want to Miss</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>Central Park & Fifth Avenue shopping</li>
                        <li>Statue of Liberty and Ellis Island tours</li>
                        <li>Broadway shows in Times Square</li>
                        <li>Museums like the Met and MoMA</li>
                        <li>Views from the Empire State Building or One World Observatory</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with 7upTravel?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>✅ Flights + Cars — one-stop travel booking</li>
                        <li>🔐 Secure checkout and encrypted payments</li>
                        <li>📞 24/7 customer support from real travel experts</li>
                        <li>💰 Competitive pricing with no surprise charges</li>
                        <li>📱 Mobile-friendly bookings and itinerary access</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💡 Travel Tips for NYC</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>Skip the rental if you're staying in Manhattan — subways are fast and affordable.</li>
                        <li>Travel during shoulder seasons (late Jan–Mar or Aug–Sep) for cheaper flights.</li>
                        <li>Book attraction passes in advance to save time and money.</li>
                        <li>For day trips, drive out to Long Island beaches or the Hudson Valley.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📦 Bundle & Save</h2>
                    <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>
                        Get more value when you book your flight and car rental together with 7upTravel. Whether you're cruising through Times Square or exploring Brooklyn’s culture, we help you do NYC right.
                    </p>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Start your New York City journey now — book your flight and car with 7upTravel today!
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}