"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-200">
      {/* Hero Section */}
      <section className="max-w-4xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
          <span className="inline-block align-middle mr-2">
            <svg className="w-10 h-10 text-blue-600 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12h8M12 8v8"/></svg>
          </span>
          MediBand <span className="text-blue-600">— Your Digital Emergency Health ID</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Store your medical history, allergies, and emergency contacts securely.<br/>
          Access it instantly with a simple QR scan — saving lives when it matters most.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            <span className="mr-2">🚀</span>Get Started
          </Link>
          <Link
            href="/about"
            className="px-7 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold shadow hover:bg-gray-100 hover:scale-105 transition-all duration-200"
          >
            <span className="mr-2">ℹ️</span>Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl">
        <div className="p-7 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 border-t-4 border-blue-200">
          <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center"><span className="mr-2">⚡</span>Instant Access</h3>
          <p className="text-gray-600">
            Doctors & first responders can view your health details by scanning your QR code.
          </p>
        </div>
        <div className="p-7 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 border-t-4 border-blue-200">
          <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center"><span className="mr-2">🔒</span>Secure & Private</h3>
          <p className="text-gray-600">
            Your data is encrypted and only shared when you allow it, ensuring privacy.
          </p>
        </div>
        <div className="p-7 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 border-t-4 border-blue-200">
          <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center"><span className="mr-2">📱</span>Easy to Use</h3>
          <p className="text-gray-600">
            Generate your QR ID in minutes, save it digitally or print it on a card/wristband.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 bg-blue-600 text-white p-10 rounded-2xl shadow-xl max-w-4xl animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4">Be Prepared for Emergencies</h2>
        <p className="text-lg mb-6">
          In critical situations, every second matters. MediBand makes sure your health
          info is available instantly — anytime, anywhere.
        </p>
        <Link
          href="/register"
          className="inline-block px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold shadow hover:bg-gray-100 hover:scale-105 transition-all duration-200"
        >
          <span className="mr-2">🆕</span>Create Your MediBand Now
        </Link>
      </section>
    </div>
  );
}
