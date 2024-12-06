'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/0laSKfdVHEM?autoplay=1&controls=0&rel=0&showinfo=0&mute=1&loop=1&playlist=0laSKfdVHEM"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ border: 'none' }}
          ></iframe>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"> {/* Updated overlay color */}
        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Genesis Global Partnership
          </h1>
          <p className="text-xl sm:text-2xl mb-8">Giving is a way of life</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 w-full sm:w-auto"
            >
              Sign Up
            </button>
            <Link
              href="#our-story"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300 w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Sign Up</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-blue-300 rounded text-blue-900"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-blue-300 rounded text-blue-900"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-blue-300 rounded text-blue-900"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

