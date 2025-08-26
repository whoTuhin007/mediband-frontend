'use client'
import Link from 'next/link'
import React from 'react'
import { useForm } from './FormContext'

const Menu = () => {
    const { formData } = useForm();
  return (
    <div className='md:w-1/4 w-full h-[20%] md:h-full bg-blue-100 p-4  rounded-xl shadow-sm'>

    <ul className='space-y-1 md:space-y-4 w-full text-center font-semibold text-sm md:text-lg h-full flex flex-col md:justify-evenly'>
      <Link href={'/dashboard/medical-form'}>
        <li className='flex items-center gap-3 justify-center hover:bg-emerald-800 hover:text-white p-2 rounded-xl border-2 border-blue-300 transition-colors duration-200 shadow-sm cursor-pointer'>
          <span className="text-blue-700">
            {/* Medical Form Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
          </span>
          My Medical Form
        </li>
      </Link>
      <Link href={'/dashboard/qr-card'}>
        <li className='flex items-center gap-3 justify-center hover:bg-emerald-800 hover:text-white p-2 rounded-xl border-2 border-blue-300 transition-colors duration-200 shadow-sm cursor-pointer'>
          <span className="text-blue-700">
            {/* QR Code Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </span>
          My QR Code
        </li>
      </Link>
      <Link href={'/dashboard/orders'}>
        <li className='flex items-center gap-3 justify-center hover:bg-emerald-800 hover:text-white p-2 rounded-xl border-2 border-blue-300 transition-colors duration-200 shadow-sm cursor-pointer'>
          <span className="text-blue-700">
            {/* Orders Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
          </span>
          My Orders
        </li>
      </Link>
    </ul>


    </div>
  )
}

export default Menu