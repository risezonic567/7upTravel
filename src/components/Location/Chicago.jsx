import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import LatestNews from '../../pages/LatestNewsPage'
import { useNavigate } from 'react-router-dom'

export default function Chicago() {
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
                    <h2 className='text-xl font-bold mt-5 mb-5'>🏙️ Featured Hotels in Chicago</h2>
                    <p className='text-gray-500 mb-5'>
                        Discover the best places to stay in the Windy City. From luxury downtown hotels to cozy boutique properties near the lakefront, Chicago offers accommodation options for every traveler. Whether you're visiting for business, food, architecture, or fun, we've got you covered with our curated list of top-rated hotels.
                      </p>  
                    <hr />

                    <h2 className='text-xl font-bold mt-5 mb-5'>🌟 Top Luxury Hotels</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li><b>The Langham, Chicago:</b>  Overlooking the Chicago River, this five-star property features modern elegance, a wellness spa, and Michelin-level dining.</li>
                        <li><b>Four Seasons Hotel Chicago: </b> Nestled on the Magnificent Mile, this hotel boasts lake views, luxurious rooms, and world-class service.</li>
                        <li><b>Waldorf Astoria Chicago: </b> Located in the Gold Coast, this hotel offers French-inspired architecture, a serene courtyard, and upscale dining.</li>
                    </ul>

                    <h2 className='text-xl font-bold mt-5 mb-5'>🏨 Boutique & Chic Hotels</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li><b>Hotel Lincoln:</b>  A funky, eclectic stay near Lincoln Park with rooftop views of Lake Michigan.</li>
                        <li><b>Virgin Hotels Chicago:</b> Stylish, tech-savvy rooms and vibrant social spaces in the Loop district.</li>
                        <li><b>21c Museum Hotel:</b> Combines art gallery and hotel experience in a prime location near Millennium Park.</li>
                    </ul>


                    <h2 className='text-xl font-bold mt-5 mb-5'>👨‍👩‍👧‍👦 Family-Friendly Picks</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li><b>Embassy Suites by Hilton Downtown:</b>  Large suites with separate living areas, free breakfast, and close to Navy Pier.</li>
                        <li><b>Hyatt Regency McCormick Place:</b>  Direct access to the McCormick Convention Center and great for larger families.</li>
                    </ul>



                    <h2 className='text-xl font-bold mt-5 mb-5'>💼 Business Traveler Favorites</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li><b>Swissôtel Chicago:</b> Modern hotel with expansive views, meeting facilities, and close to business hubs.</li>
                        <li><b>Hyatt Centric The Loop:</b> Located in the financial district with fast check-in and work-ready rooms.</li>
                    </ul>

                    <h2 className='text-xl font-bold mt-5 mb-5'>🎡 Close to Attractions</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li><b>Loews Chicago Hotel:</b> Minutes from Navy Pier and Michigan Avenue, featuring a rooftop lounge and indoor pool.</li>
                        <li><b>Hotel EMC2:</b>  Artsy, tech-forward hotel near Magnificent Mile and Museum of Contemporary Art.</li>
                    </ul>
                    <h2 className='text-xl font-bold mt-5 mb-5'>🛌 Budget-Friendly Options</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                       <li><b>HI Chicago Hostel: </b> Affordable, clean, and social — great for solo travelers or students.</li>
                        <li><b>Chicago Getaway Hostel:</b> Located in Lincoln Park, ideal for those looking for comfort and value.</li>
                    </ul>

                    <h2 className='text-xl font-bold mt-5 mb-5'>📌 Why Book with 7UPTRAVEL LLC?</h2>
                    <ul className='text-gray-500 list-disc pl-20'>
                        <li>✅ Up to 60% OFF on select Chicago hotels</li>
                        <li>🏙️ Hotels near the Bean, Navy Pier, Magnificent Mile, and Wrigley Field</li>
                        <li>💳 Secure online payments and instant confirmation</li>
                        <li>💬 24/7 travel assistance from real experts</li>
                    </ul>
                    <h2 className='text-xl font-bold mt-5 mb-5'>🚀 Chicago Travel Tip</h2>
                    <p className='text-gray-500'>
                       Chicago is vibrant year-round, but spring and early fall offer the best mix of weather and pricing. Book early during festivals or summer months to get the best hotel rates and availability.
                       </p>

                    <p className='font-semibold text-gray-500 mt-5 mb-5'>
                      Start planning your stay in Chicago today with 7UPTRAVEL LLC and enjoy exclusive deals at top-rated hotels across the city!
                    </p>
                </div>
                <LatestNews />
            </div>
        </>
    )
}
