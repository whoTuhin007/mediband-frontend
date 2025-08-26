"use client";
import React, { useState } from "react";
export default function ContactPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">Contact MediBand</h1>
          <p className="mt-1 text-blue-100">
            Have questions or need support? Get in touch with us.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Extra Info */}
        <div className="bg-gray-50 p-6 text-center">
          <p className="text-gray-600">
            Or email us directly at{" "}
            <a
              href="mailto:support@mediband.com"
              className="text-blue-600 font-medium hover:underline"
            >
              support@mediband.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
