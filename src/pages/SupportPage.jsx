"use client"

import { useState } from "react"

export default function SupportPage() {
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
                <a href="#about" className="block text-neutral-200 text-base hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
              Support Center
            </h1>
            <p className="text-neutral-600 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Get help with Vevara and find answers to common questions
            </p>
          </div>

          {/* Contact Options */}
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-neutral-200">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Email Support</h3>
              <p className="text-neutral-600 text-base mb-6">Get help via email within 24 hours</p>
              <button
                onClick={() => window.location.href = 'mailto:toumireda34@gmail.com'}
                className="w-full bg-neutral-900 text-white px-6 py-4 text-base font-semibold rounded-full hover:bg-neutral-800 transition-all active:scale-[0.98] shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Quick answers to common questions about Vevara
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">How do I get started with Vevara?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Simply choose a template from our gallery, add your content (images and text), customize the
                    colors, and click "Generate Slides" to create your animation.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Is Vevara really free?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Yes! Vevara is completely free to use. There are no hidden fees, subscriptions, or premium
                    features. All templates and features are available at no cost.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Do I need a Canva account?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    While you don't need a Canva account to use Vevara, having one allows you to export your
                    animations directly to your Canva workspace for further editing.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">What file formats are supported?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Vevara supports common image formats (JPG, PNG, GIF) and exports animations in formats compatible
                    with Canva and other design platforms.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">How many templates are available?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We currently offer 100+ professionally designed templates across various categories including
                    sliders, text animations, and shape morphing, with new templates added regularly.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Can I customize the templates?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    You can customize colors, fonts, text content, and images to match your brand or personal style.
                    Our templates are designed to be flexible and adaptable.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">How long does it take to create an animation?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Most animations can be created in under 3 seconds once you've selected your template and added
                    your content. The actual generation is nearly instantaneous.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Is there a limit to how many animations I can create?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    No limits! You can create as many animations as you want, whenever you want. There are no
                    restrictions on usage or downloads.
                  </p>
                </div>
              </div>
            </div>
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
                  <a href="#about" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    About
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
                  <a href="/support" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    Support
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
