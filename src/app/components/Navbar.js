"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // Replace with actual auth logic

  return (
    <nav className="bg-white shadow-md rounded-b-xl w-3/4 fixed top-0  z-50 left-1/2 transform -translate-x-1/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className=" flex items-center">
            <Link href="/">
              <Image src="/mediband.png" alt="Logo" width={300} height={300} className='md:w-60 w-48'

               />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-3 items-center text-sm gap-2">
           
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/medform" className="text-gray-700 hover:text-blue-600 font-medium">
              Medical Form
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
             <Link href="/register" className="text-gray-700  hover:text-blue-600 font-medium">
              {!isRegistered ? 'Register' : 'Profile'}
            </Link>
            <select className="border-1  rounded px-2 py-1 text-gray-700">
              <option value="en">En</option>
              <option value="hn">Hn </option>
              <option value="bng">Bng</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <Link href="/register" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              {!isRegistered ? 'Register' : 'Profile'}
            </Link>
            <Link href="/qr-card" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              QR Card
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <select className="border w-1/2 rounded px-2 py-1 text-gray-700 mt-2">
              <option value="en">English</option>
              <option value="hn">Hindi</option>
              <option value="bn">Bengali</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;