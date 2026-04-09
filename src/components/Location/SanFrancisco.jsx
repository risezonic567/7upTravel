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
                    <h2 className='text-xl font-bold mt-5 mb-5'>Discover San Francisco: The Golden City</h2>
                    <p className='text-gray-500 mb-5'>
                       San Francisco, located in northern California, is a city bursting with culture, iconic landmarks, and unforgettable experiences. From the majestic Golden Gate Bridge to the historic streets of Chinatown, this city offers something for every traveler.
                       </p>

                       <h2 className='text-md font-semibold mt-5 mb-5'>1. Golden Gate Bridge</h2>
                    <p className='text-gray-500 mb-5'>
                      No visit to San Francisco is complete without walking or biking across the world-famous Golden Gate Bridge. It's a masterpiece of engineering and a symbol of the city.</p>
                       <h2 className='text-md font-semibold mt-5 mb-5'>2. Alcatraz Island</h2>
                    <p className='text-gray-500 mb-5'>
                       Explore the notorious former prison on Alcatraz Island. Take a ferry from Pier 33 and dive into the island's fascinating history with an audio-guided tour.</p>

                       <h2 className='text-md font-semibold mt-5 mb-5'>3. Ride the Historic Cable Cars</h2>
                    <p className='text-gray-500 mb-5'>
                       Hop aboard the city's beloved cable cars and enjoy scenic views as you travel up and down San Francisco's steep hills.
                       </p>

                       <h2 className='text-md font-semibold mt-5 mb-5'>4. Fisherman’s Wharf</h2>
                    <p className='text-gray-500 mb-5'>
                      This bustling waterfront area is perfect for seafood lovers and sightseers alike. Don't forget to say hello to the sea lions at Pier 39!
                      </p>

                       <h2 className='text-md font-semibold mt-5 mb-5'>5. Visit Chinatown</h2>
                    <p className='text-gray-500 mb-5'>
                      San Francisco’s Chinatown is the oldest and one of the most vibrant in North America. Try authentic Chinese cuisine and shop for unique souvenirs.
                      </p>

                       <h2 className='text-md font-semibold mt-5 mb-5'>6. Explore the Mission District</h2>
                    <p className='text-gray-500 mb-5'>
                     The Mission is known for its colorful murals, hip eateries, and Latin culture. Be sure to visit Mission Dolores Park for great views of the skyline.
                     </p>

                       <h2 className='text-md font-semibold mt-5 mb-5'>7. Twin Peaks</h2>
                    <p className='text-gray-500 mb-5'>
                      For breathtaking panoramic views of the city, head to Twin Peaks. It’s a favorite spot for both tourists and locals.
                      </p>

                       <h2 className='text-md font-semibold mt-5 mb-5'>8. The Painted Ladies</h2>
                    <p className='text-gray-500 mb-5'>
                       These iconic Victorian homes at Alamo Square Park are best known from the opening credits of "Full House." A great photo op!
                       </p>
                       <h2 className='text-md font-semibold mt-5 mb-5'>9. Exploratorium</h2>
                    <p className='text-gray-500 mb-5'>
                      A fantastic interactive science museum for kids and adults alike. Located at Pier 15, it’s both fun and educational.
                      </p>

                       <h2 className='text-md font-semibold mt-5 mb-5'>10. Why San Francisco?</h2>
                    <p className='text-gray-500 mb-5'>
                     Whether you're into nature, history, food, or tech, San Francisco offers a rich mix of experiences in one compact, beautiful city. Come and explore its unique charm!
                     </p>
                 </div>
                 <LatestNews/>
            </div>
        </>
    )
}
