import {  X } from 'lucide-react'
import React from 'react'

export default function CarModal({isOpen,onClose,children}) {
    if(!isOpen)
        return null
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
          >
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-lg z-50">
          <button onClick={onClose} className='absolute top-2 right-3 text-gray-600 text-xl'>
            <X size={25}/>
            </button>
            {children}  
        </div>

    </div>
  )
}
