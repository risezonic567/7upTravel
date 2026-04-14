import React, { useState } from 'react';
import { Plane, User, CreditCard, ShieldCheck, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function CheckoutPage(){
    

  const [passengers] = useState([
    { name: "Sunny", age: 22 },
    { name: "Rahul", age: 25 }
  ]);

 const location =useLocation()
 const selectedFlight=location.state?.flight

 if(!selectedFlight)
    return <p className='text-center mt-20 '>Not Flight Selected<br/>
    <Link to="/" className='text-blue-600 hover:underline'>Please Search Flight</Link>
    </p>

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Review & Pay</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-600 px-6 py-3 flex items-center gap-2 text-white">
                <Plane size={20} />
                <span className="font-semibold">Flight Information</span>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-800">{selectedFlight.from}</p>
                  <p className="text-sm text-gray-500 font-medium font-mono">{selectedFlight.departure}</p>
                </div>
                <div className="flex flex-col items-center flex-1 px-10">
                  <span className="text-xs text-blue-500 font-bold tracking-widest uppercase">{selectedFlight.type}</span>
                  <div className="w-full h-[2px] bg-gray-200 relative my-2">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                       <Plane size={16} className="text-gray-400 rotate-90" />
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{selectedFlight.duration}</span>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-800">{selectedFlight.to}</p>
                  <p className="text-sm text-gray-500 font-medium font-mono">{selectedFlight.arrival}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold border-b pb-3">
                <User size={20} className="text-blue-600" />
                <h2>Passenger Details</h2>
              </div>
              {passengers.length > 0 ? (
                passengers.map((p, i) => (
                  <div key={i} className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">{i + 1}. {p.name}</span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                      Adult ({p.age})
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm italic">No passenger details added yet.</p>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold border-b pb-3">
                <CreditCard size={20} className="text-blue-600" />
                <h2>Secure Payment</h2>
              </div>
              
              <div id="payment-container" className="min-h-[200px] flex items-center justify-center border-2 border-dashed border-gray-100 rounded-lg">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">BridgerPay widget will load here</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg active:scale-95">
                    Proceed to Pay $520.00
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-green-600 text-xs font-semibold">
                <ShieldCheck size={14} />
                <span>PCI-DSS Compliant & Encrypted</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">Price Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Base Fare</span>
                  <span className="font-medium">${selectedFlight.price}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees</span>
                  <span className="font-medium">$70.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Convenience Fee</span>
                  <span className="text-green-600 font-medium font-mono text-sm">FREE</span>
                </div>
                
                <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-black text-blue-600 font-mono">$520.00</span>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <div className="flex gap-2">
                  <MapPin size={16} className="text-blue-600 shrink-0" />
                  <p className="text-xs text-blue-800 leading-relaxed">
                    By clicking "Proceed to Pay", you agree to the airline's terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}