"use client"

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <img src="/ChatGPT Image 19 mai 2025, 22_38_42.png"
 alt="Vevara" width={24} height={24} className="rounded" />
            <span className="font-medium text-gray-900">Vevara</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/support" className="text-gray-600 hover:text-gray-900">
              Support
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </div>

          <p className="text-gray-500 text-sm">&copy; 2025 Vevara</p>
        </div>
      </div>
    </footer>
  )
}
