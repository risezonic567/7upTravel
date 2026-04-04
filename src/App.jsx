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

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<FlightPage/>}/>
        <Route path='/about-us' element={<AboutUsPage/>}/>

        {/* Policy Page */}
        <Route path='/cancellation' element={<Cancellation/>}/>
        <Route path='/terms-condition' element={<TermsCondition/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/refund-policy' element={<RefundPolicy/>}/>


        <Route path='/contact-us' element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
