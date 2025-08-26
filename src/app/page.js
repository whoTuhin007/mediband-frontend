"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          MediBand <span className="text-blue-600">— Your Digital Emergency Health ID</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Store your medical history, allergies, and emergency contacts securely.
          Access it instantly with a simple QR scan — saving lives when it matters most.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">⚡ Instant Access</h3>
          <p className="text-gray-600">
            Doctors & first responders can view your health details by scanning your QR code.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">🔒 Secure & Private</h3>
          <p className="text-gray-600">
            Your data is encrypted and only shared when you allow it, ensuring privacy.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">📱 Easy to Use</h3>
          <p className="text-gray-600">
            Generate your QR ID in minutes, save it digitally or print it on a card/wristband.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 bg-blue-600 text-white p-10 rounded-2xl shadow-lg max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Be Prepared for Emergencies</h2>
        <p className="text-lg mb-6">
          In critical situations, every second matters. MediBand makes sure your health
          info is available instantly — anytime, anywhere.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
        >
          <Link
            href="/register"
          >
            Create Your MediBand Now
          </Link>
        </button>
      </section>
    </div>
  );
}
