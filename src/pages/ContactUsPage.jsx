import React from "react";
import { motion } from "framer-motion";
import { Headphones, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">

      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 mt-20 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1 
          className="text-4xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let's connect and get to know each other
        </motion.h1>

        <motion.p
          className="max-w-4xl font-semibold mx-auto text-gray-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
         Let’s connect and get to know each other better! At 7UPTRAVEL LLC, we’re more than just bookings—we’re your travel companion. Share your dreams, and we’ll help turn them into journeys. Whether it’s flights, hotels, or car rentals, we’re here to make every step smooth, exciting, and unforgettable.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Headphones size={20} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Call us</h3>
            <p className="text-gray-800 mb-6 text-center">
              We’re here to help you anytime. Our service is dedicated to providing comfort and care whenever you need it.
            </p>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full font-semibold">
              <Phone size={14} />
              <Link to="tel:+1-888-315-3380">+1-888-315-3380</Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Mail size={20} className="text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Email us</h3>
            <p className="text-gray-800 mb-6 text-center">
              We’re here to help. Your needs matter, and we’re always ready to listen and assist with care and understanding.
            </p>
            <a href="mailto:info@7uptravel.com" className="border-b border-blue-600 font-semibold">
              info@7uptravel.com
            </a>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center relative"
             initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -top-4 -right-4 text-yellow-400 text-4xl">★</div>
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
              <Globe size={20} className="text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visit us</h3>
            <p className="text-gray-800 mb-6 text-center">
              Come see us in person—where every visit is an opportunity to connect, assist, and inspire your journey.
            </p>
            <p>200 Spectrum Center Dr Irvine, CA 92618, USA</p>
          </motion.div>

        </div>
      </motion.section>

     <motion.section
  className="max-w-7xl mx-auto px-6 py-16"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50/50 rounded-[40px] p-8 md:p-16">
    
    {/* Image */}
    <motion.div
      className="w-full md:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img 
        src="/images/Contact Us Banner.jpg.jpeg"
        alt="Travel Illustration" 
        className="h-[600px] w-[767px]"
      />
    </motion.div>

    {/* Form */}
    <motion.div
      className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8">Send us message</h2>
      
      <motion.form
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Your name *</label>
            <input type="text" className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-400 transition-colors" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email address *</label>
            <input type="email" className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-400 transition-colors" />
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Mobile number *</label>
          <input type="text" className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-400 transition-colors" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Message *</label>
          <textarea rows="4" className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-400 transition-colors resize-none"></textarea>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-xs text-gray-500 leading-tight">By submitting this form you agree to our terms and conditions.</span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-xs text-gray-500 leading-tight">
              By clicking submit, I authorize 7uptravel LLC to send me booking updates.
            </span>
          </label>
        </motion.div>

        <motion.button
          className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

      </motion.form>

      <div className="absolute bottom-4 right-4 grid grid-cols-5 gap-2 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
        ))}
      </div>
    </motion.div>

  </div>
</motion.section>

      <motion.section
        className="w-full px-6 py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Find us on map</h3>

          <motion.div
            className="w-full h-[450px] rounded-[40px] overflow-hidden shadow-lg border-8 border-white"
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              title="Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.123456789!2d-117.751234567!3d33.651234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd123456789%3A0x123456789abcdef!2s200%20Spectrum%20Center%20Dr%2C%20Irvine%2C%20CA%2092618%2C%20USA!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"

              className="w-full h-full grayscale hover:grayscale-0 transition-all"
            />
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}