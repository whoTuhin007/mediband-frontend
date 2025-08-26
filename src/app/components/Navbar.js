"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from './FormContext';

const Navbar = () => {
  const { formData } = useForm();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log('nav:', formData);
  }, [formData]);

  // Menu items
  const menuItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: (
        <svg className="w-5 h-5 mr-1 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
    },
    {
      href: '/medform',
      label: 'Medical Form',
      icon: (
        <svg className="w-5 h-5 mr-1 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
        </svg>
      ),
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: (
        <svg className="w-5 h-5 mr-1 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 10.5a8.38 8.38 0 0 1-7.5 7.5c-4.5 0-8.5-4-8.5-8.5a8.38 8.38 0 0 1 7.5-7.5c4.5 0 8.5 4 8.5 8.5z"/>
        </svg>
      ),
    },
    {
      href: formData?.user?._id ? '/profile' : '/register',
      label: formData?.user?._id ? 'Profile' : 'Register',
      icon: (
        <svg className="w-5 h-5 mr-1 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4"/>
          <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
        </svg>
      ),
    },
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'hn', label: 'Hindi' },
    { value: 'bn', label: 'Bengali' },
  ];

  return (
    <nav className="bg-white shadow-md rounded-b-xl w-3/4 fixed top-0 z-50 left-1/2 transform -translate-x-1/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/mediband.png" alt="Logo" width={300} height={300} className='md:w-60 w-48' />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-3 items-center text-sm gap-2">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center text-gray-700 hover:text-blue-600 font-medium px-2 py-1 rounded transition-colors duration-200">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            <select className="border rounded px-2 py-1 text-gray-700 ml-2">
              {languageOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
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
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            <select className="border w-1/2 rounded px-2 py-1 text-gray-700 mt-2">
              {languageOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
