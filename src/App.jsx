import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactUsPage'
import FlightPage from './pages/FlightPage'
import AboutUsPage from './pages/AboutUsPage'
import Cancellation from './pages/Policy/Cancellation'
import TermsCondition from './pages/Policy/Term-condition'
import PrivacyPolicy from './pages/Policy/Privacy-Policy'
import Disclaimer from './pages/Policy/Disclaimer'
import RefundPolicy from './pages/Policy/Refund-Policy'
import LatestNews from './pages/LatestNewsPage'
import Flight from './components/Flight'
import CarRentalPage from './pages/CarRentalPage'
import HotelPage from './pages/HotelPage'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<FlightPage/>}/>
        <Route path='/car-rental' element={<CarRentalPage/>}/>
        <Route path='/hotel' element={<HotelPage/>}/>
        <Route path='/about-us' element={<AboutUsPage/>}/>
        <Route path='/flight' element={<Flight/>}/>


        {/* Policy Page */}
        <Route path='/cancellation' element={<Cancellation/>}/>
        <Route path='/terms-condition' element={<TermsCondition/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/refund-policy' element={<RefundPolicy/>}/>

        <Route path='/latest' element={<LatestNews/>}/>



        <Route path='/contact-us' element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
