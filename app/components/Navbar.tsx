'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-sky-700 text-white shadow-md"> {/* Updated background color */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              Genesis Global Partners
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#vision" className="hover:text-blue-200">Vision</Link>
            <Link href="#mission" className="hover:text-blue-200">Mission</Link>
            <Link href="#our-story" className="hover:text-blue-200">Our Story</Link>
            <Link href="#partner" className="hover:text-blue-200">Partner</Link>
            <Link href="#contact" className="hover:text-blue-200">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#vision" className="block hover:text-blue-200">Vision</Link>
            <Link href="#mission" className="block hover:text-blue-200">Mission</Link>
            <Link href="#our-story" className="block hover:text-blue-200">Our Story</Link>
            <Link href="#partner" className="block hover:text-blue-200">Partner</Link>
            <Link href="#contact" className="block hover:text-blue-200">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

