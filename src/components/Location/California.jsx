import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'

export default function California() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌴 Featured Hotels in California</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                        From the golden beaches of Southern California to the towering redwoods of the north, California offers something for every type of traveler. Whether you're chasing sunshine in Los Angeles, soaking up culture in San Francisco, or relaxing in a vineyard in Napa Valley — we’ve selected the best hotels to make your California dream a reality.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏖️ Top Beachside Hotels</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Shutters on the Beach – Santa Monica:</b> A luxury beachfront resort with elegant coastal decor, gourmet dining, and direct access to the boardwalk.</li>
                        <li><b>Hotel del Coronado – San Diego:</b> Historic charm meets modern luxury in this iconic oceanfront resort with beautiful Victorian architecture.</li>
                        <li><b>Dream Inn – Santa Cruz:</b> Bright, retro-chic hotel overlooking the Santa Cruz Beach Boardwalk and Monterey Bay.</li>
                        <li><b>Malibu Beach Inn – Malibu:</b> Sophisticated boutique stay with private balconies over the Pacific Ocean and a serene spa.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 Urban Retreats in Major Cities</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Fairmont San Francisco:</b> Elegant hotel atop Nob Hill offering panoramic views, a historic ballroom, and proximity to cable cars.</li>
                        <li><b>The LINE LA – Los Angeles:</b>  Hip and modern stay in Koreatown with industrial aesthetics, a rooftop pool, and local flair.</li>
                        <li><b>Omni San Diego Hotel:</b> Steps from Petco Park and the Gaslamp Quarter, ideal for baseball fans and nightlife lovers.</li>
                        <li><b>InterContinental Los Angeles Downtown:</b> Skyscraper luxury with sweeping city views and rooftop dining at the tallest building west of the Mississippi.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🍷Wine Country Escapes</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Auberge du Soleil – Napa Valley:</b> Romantic resort surrounded by vineyards, offering fine dining, a world-class spa, and Mediterranean-inspired rooms.</li>
                        <li><b>Carneros Resort and Spa – Napa:</b>  Rustic luxury with private cottages, vineyard views, and farm-to-table dining experiences.</li>
                        <li><b>Hotel Healdsburg – Sonoma</b> Contemporary sophistication with a pool, spa, and access to some of Sonoma's top tasting rooms.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌲 Mountain & Nature Getaways</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Tenaya Lodge at Yosemite:</b> Gateway to Yosemite National Park with family-friendly amenities, guided hikes, and cabin options.</li>
                        <li><b>Lake Tahoe Resort Hotel:</b> Spacious suites steps from the Heavenly Gondola and Lake Tahoe's stunning shores.</li>
                        <li><b>Post Ranch Inn – Big Sur:</b> Exclusive adults-only eco-resort with cliffside views, wood-and-glass architecture, and serenity beyond compare.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🎡 Family-Friendly Stays</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Disneyland Hotel – Anaheim</b> The magic starts at check-in with themed rooms, monorail waterslides, and early park entry.</li>
                        <li><b>LEGOLAND Hotel – Carlsbad:</b>  Immersive LEGO-themed rooms and direct access to the park — a kid’s dream come true.</li>
                        <li><b>Hyatt Regency – Huntington Beach:</b> Family-favorite beach resort with waterslides, campfires, and surf school.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💼 For Business Travelers</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>L.A. Grand Hotel Downtown: </b> Centralized for business in DTLA with easy freeway access and modern conference facilities.</li>
                        <li><b>JW Marriott – San Francisco Union Square:</b> Sleek and professional with event space, fast Wi-Fi, and fine dining options.</li>
                        <li><b>Anaheim Marriott:</b> Steps from the Anaheim Convention Center with large meeting rooms and tech-enabled guest rooms.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🧳 Why Book with 7UPTRAVEL LLC?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Best Rate Guarantee – We’ll match any lower rate you find.</li>
                        <li>🚗 Huge Selection – From budget to boutique to 5-star luxury.</li>
                        <li>💳 Easy, Secure Booking – Encrypted checkout and instant confirmations.</li>
                        <li>🌟 Verified Reviews – Real guests. Real stays. Real feedback.</li>
                        <li>💬 24/7 Support – Talk to a travel expert any time of day.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🎯 Booking Tips</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>Traveling during summer? Book beachside and mountain stays at least 2 months in advance.</li>
                        <li>Look for labels like “Up to 60% OFF” or “Book & Enjoy 20%” during checkout for extra savings.</li>
                        <li>California’s wine country is best visited in fall – September and October are harvest months.</li>
                        <li>For Yosemite and Big Sur, opt for weekday stays to avoid crowds and surge pricing.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Ready to Explore California?</h2>
                    <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>
                        Whether you're dreaming of the Pacific Coast Highway, the thrills of Hollywood, or the serenity of Sequoia forests, California has it all — and <b>7UPTRAVEL LLC</b> is your ticket to explore it affordably and in style.
                    </p>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Book now and enjoy exclusive California hotel deals curated just for you.
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}