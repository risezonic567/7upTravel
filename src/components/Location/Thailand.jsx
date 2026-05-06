import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function Thailand() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌴 Featured Destinations with 7up Travel</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                      Explore our curated selection of top destinations worldwide. Whether you're planning a beach getaway, cultural adventure, or city escape, find the perfect accommodations to make your trip memorable.
                      </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏖️ Top Beachfront Escapes</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hawaiian Paradise Resort:</b> Luxury beachfront retreat with stunning ocean views and private cabanas.</li>
                        <li><b>Maldives Hideaway:</b> Overwater villas and pristine beaches for the ultimate tropical experience.</li>
                        <li><b>Bali Beach Resort:</b>Balinese-style villas surrounded by lush gardens and azure waters.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 Luxury Stays in Major Cities</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>New York City Elegance:</b> Iconic hotels with skyline views and top-rated dining experiences.</li>
                        <li><b>Parisian Chic Retreat: </b>  Boutique hotels in historic neighborhoods with classic French charm.</li>
                        <li><b>Tokyo Urban Oasis:</b> Modern comforts and traditional Japanese hospitality in the heart of Tokyo.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌄 Cultural Experiences Around the World</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Rome Historical Gems:</b> Elegant hotels near ancient landmarks and vibrant piazzas.</li>
                        <li><b>Cairo Ancient Wonders:</b> Nile River views and proximity to pyramids and museums.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💰 Budget-Friendly Options</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Bangkok Affordable Comforts:</b> Convenient hotels near shopping and cultural sites.</li>
                        <li><b>Buenos Aires Hidden Gems:</b>Quaint hotels in charming neighborhoods with local flair.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Popular Travel Destinations</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>New York City – The city that never sleeps</li>
                        <li>Paris – Romantic capital of the world</li>
                        <li>Tokyo – Blend of tradition and modernity</li>
                        <li>Rome – Eternal city of history and culture</li>
                        <li>Bangkok – Bustling metropolis of Southeast Asia</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Book with 7up Travel</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Best price guarantee on flights and car rentals</li>
                        <li>🌐 Wide selection of accommodations worldwide</li>
                        <li>📞 24/7 support for every booking</li>
                    </ul>


                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Let 7up Travel inspire your next journey. Book your ideal stay and transportation with us and embark on your unforgettable adventure today!
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}