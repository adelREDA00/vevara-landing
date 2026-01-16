"use client"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
          <div className="rounded-lg">
            <img
              src="/logo1.png"
              alt="Vevara"
              width={28}
              height={28}
            />
          </div>
          <span className={`text-lg font-medium transition-colors duration-300 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            Vevara
          </span>
        </Link>
      </div>
    </header>
  )
}
