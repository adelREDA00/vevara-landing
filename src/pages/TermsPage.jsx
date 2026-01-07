"use client"

import { useState } from "react"

export default function TermsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#8B5CF6]/95 backdrop-blur-lg border-b border-purple-400/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">Vevara</div>
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-6 py-2.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all">
              My files
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-[72px] right-6 md:right-8 z-50 bg-neutral-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="p-8 w-64">
            <ul className="space-y-4">
              <li>
                <a href="/" className="block text-neutral-200 text-base hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="block text-neutral-200 text-base hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#use-cases" className="block text-neutral-200 text-base hover:text-white transition-colors">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="/support" className="block text-neutral-200 text-base hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
              Terms and Conditions
            </h1>
            <p className="text-neutral-600 text-lg">Last updated: May 2025</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-12">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Acceptance</h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Using Vévara means you accept these terms. We may update them; check regularly.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Usage</h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Vévara is for personal or commercial slide creation. You must comply with Canva's terms and provide your own content (e.g., images, text).
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">License</h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                We grant you a non-exclusive, revocable license to use Vévara. You may not resell or modify the app.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Liability</h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Vévara is provided "as is." We are not liable for any damages from use, including data loss or errors.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Termination</h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                We can suspend or terminate your access if you violate these terms.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Contact</h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                For questions, contact us at toumlireda34@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white border-t border-neutral-200 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight mb-4">Vevara</h3>
              <p className="text-neutral-600 text-base leading-relaxed max-w-sm">
                The future of motion editing. Create professional videos, presentations, and animations directly in your
                browser.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-neutral-900 mb-5">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#use-cases" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="/support" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-neutral-900 mb-5">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">© 2026 Vevara. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
