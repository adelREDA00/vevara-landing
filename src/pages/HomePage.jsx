"use client"

import { useState, useEffect } from "react"
import { toast } from "sonner"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('https://vexly-node.onrender.com/public/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        toast.success("Thanks for joining! We'll be in touch soon.", {
          duration: 4000,
          style: {
            background: '#10b981',
            color: 'white',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600'
          }
        })
        setEmail("")
      } else {
        const errorMessage = data.message || "Something went wrong. Please try again."
        toast.error(errorMessage, {
          duration: 4000,
          style: {
            background: '#ef4444',
            color: 'white',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600'
          }
        })
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      toast.error("Network error. Please check your connection and try again.", {
        duration: 4000,
        style: {
          background: '#ef4444',
          color: 'white',
          border: 'none',
          fontSize: '16px',
          fontWeight: '600'
        }
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 delay-75 ${isScrolled ? 'bg-black/40 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'} ${isMenuOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <div className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-neutral-900'}`}>Vevara</div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-all border-2 border-[#8B5CF6]"
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
                <polyline points="18,15 12,9 6,15"></polyline>
              </svg>
              {/* Corner handles */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Full Width Menu */}
      <div className={`fixed top-0 left-0 right-0 h-full z-50 bg-black/40 backdrop-blur-lg border-t border-white/10 transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex flex-col h-full pt-24">
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-6 w-10 h-10 rounded-lg text-white flex items-center justify-center hover:text-neutral-300 transition-colors border-2 border-[#8B5CF6]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            {/* Corner handles */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </button>

          {/* Menu Items */}
          <div className="px-12">
            <nav className="space-y-8">
              <a
                href="#features"
                className="block text-white text-5xl md:text-6xl lg:text-7xl font-bold hover:text-neutral-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Vevara
              </a>
              <a
                href="#about"
                className="block text-white text-5xl md:text-6xl lg:text-7xl font-bold hover:text-neutral-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href="#use-cases"
                className="block text-white text-5xl md:text-6xl lg:text-7xl font-bold hover:text-neutral-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Perfect For
              </a>
            </nav>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 bg-neutral-50 overflow-hidden">
        {/* Floating selected text element - top left */}
        <div className="absolute top-40 left-4 lg:left-32 hidden lg:block">
          <div className="relative group scale-75 md:scale-100">
            <div className="px-6 py-3 bg-white shadow-sm border-2 border-[#8B5CF6]">
              <span className="text-xl font-bold text-neutral-900">Motion Graphics</span>
            </div>
            {/* Corner handles */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </div>
        </div>

        {/* Floating selected shape - top right */}
        <div className="absolute top-48 right-4 lg:right-40 hidden lg:block">
          <div className="relative scale-75 md:scale-100">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-lg border-2 border-[#8B5CF6]"></div>
            {/* Corner handles */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </div>
        </div>

        {/* Small selected text - middle left */}
        <div className="absolute top-[35%] -left-8 hidden lg:block">
          <div className="relative">
            <div className="px-4 py-2 bg-white shadow-md border-2 border-[#8B5CF6]">
              <span className="text-sm font-bold text-neutral-900 transform rotate-12">video editing</span>
            </div>
            {/* Corner handles */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </div>
        </div>

        {/* Selected text element - bottom left */}
        <div className="absolute bottom-40 left-8 lg:left-48 hidden lg:block">
          <div className="relative scale-75 md:scale-100">
            <div className="px-5 py-2 bg-white shadow-md border-2 border-[#8B5CF6]">
              <span className="text-base font-bold text-neutral-900">Create</span>
            </div>
            {/* Corner handles */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </div>
        </div>

        {/* Selected rectangle - bottom right */}
        <div className="absolute bottom-32 right-24 lg:right-56 hidden md:block">
          <div className="relative">
            <div className="w-40 h-24 bg-gradient-to-r from-purple-200 to-purple-300 shadow-md border-2 border-[#8B5CF6]"></div>
            {/* Corner handles */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </div>
        </div>

        {/* Yellow rectangle for mobile - partially off-screen left */}
        <div className="absolute top-[40%] -left-10 md:hidden">
          <div className="relative scale-100">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-lg border-2 border-[#8B5CF6]"></div>
            {/* Corner handles */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </div>
        </div>

        {/* Small selected text - mobile visible */}
        <div className="absolute bottom-12 right-4 md:hidden">
          <div className="relative">
            <div className="px-3 py-1.5 bg-white shadow-sm border-2 border-[#8B5CF6]">
              <span className="text-sm font-bold text-neutral-900">Edit</span>
            </div>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 w-full">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#8B5CF6] text-white px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-lg shadow-purple-500/20">
              comming soon
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight mb-8 leading-[1.1] text-balance">
              
            Motion-first presentations and short videos
            </h1>
            <p className="text-neutral-700 text-xl md:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed">
              
            Built for Canva users who want more control          </p>

            <form onSubmit={handleWaitlistSubmit} className="max-w-4xl mx-auto mb-20">
              <div className="flex flex-col md:flex-row gap-3 md:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="flex-1 px-6 py-4 bg-white border border-neutral-300 rounded-2xl md:rounded-r-none text-neutral-900 placeholder:text-neutral-400 text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="md:w-auto w-full bg-neutral-900 text-white px-8 py-5 text-base font-semibold rounded-2xl md:rounded-l-none hover:bg-neutral-800 transition-all active:scale-[0.98] shadow-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span>Loading...</span>
                  ) : (
                    <>
                      <span className="hidden md:inline">Join the waitlist</span>
                      <span className="md:hidden">Join the waitlist</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="relative inline-block mx-auto">
            <img
              src="/editor.png"
              alt="Vevara Editor Interface"
              className="w-full max-w-4xl border-2 border-[#8B5CF6]"
            />
            {/* Corner handles */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* When you want more than basic animations Section */}
      <section id="features" className="py-32 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative border-2 border-dotted border-[#8B5CF6] p-12 md:p-16">
              {/* Corner handles */}
              <div className="absolute -top-3 -left-3 w-5 h-5 bg-white border-2 border-[#8B5CF6] rounded-full translate-x-0.5 translate-y-0.5"></div>
              <div className="absolute -top-3 -right-3 w-5 h-5 bg-white border-2 border-[#8B5CF6] rounded-full translate-x-0.5 -translate-y-0.5"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-white border-2 border-[#8B5CF6] rounded-full -translate-x-0.5 translate-y-0.5"></div>
              <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-white border-2 border-[#8B5CF6] rounded-full -translate-x-0.5 -translate-y-0.5"></div>

              <div className="text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight mb-8 leading-[1.1] text-balance">
                Canva works until motion gets complex
                </h2>
                <p className="text-neutral-700 text-xl md:text-2xl leading-relaxed mb-8">
                  Canva is great for basics, but complex motion means duplicating slides, manual positioning, and fragile timing. Other tools are too heavy for quick videos or presentations.
                </p>
                <p className="text-neutral-700 text-xl md:text-2xl leading-relaxed font-medium">
                  That's why I'm building Vevara, easy like Canva, but designed from the start for real motion and editing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for motion and fast video editing Section */}
      <section id="about" className="py-32 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight mb-24 text-center leading-[1.15] text-balance">
          Built for motion and fast video editing
          </h2>

          <div className="grid gap-12">
            <div className="bg-[#A78BFA] rounded-[2rem] p-8 md:p-12 hover:bg-[#8B5CF6] transition-all duration-300">
              <span className="inline-block bg-white text-[#8B5CF6] px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg">
                Motion & Video Editing
              </span>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight leading-tight">
                Design smooth animations, transitions, and movement without duplicating slides or hacking pages.
                </h3>
                <p className="text-neutral-900 text-base md:text-lg leading-relaxed">
                Drop in clips, make quick cuts, add transitions, and layer motion on top all in one place. Familiar like Canva, but gives you real control.
                </p>
              </div>
              <a
                href="#features"
                className="inline-flex items-center text-neutral-900 text-base md:text-lg font-medium hover:gap-3 transition-all mt-6"
              >
                              Learn more

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="bg-purple-200 rounded-[2rem] p-8 md:p-12 hover:bg-purple-300 transition-all duration-300">
              <span className="inline-block bg-[#8B5CF6] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-purple-500/20">
              Our Story
              </span>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">University Project Becomes Reality</h4>
                    <p className="text-neutral-900 text-base md:text-lg leading-relaxed">
                    Vevara started as a private Canva app I built for myself and a few colleagues - never launched publicly, just a personal tool for our workflow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">The Problem</h4>
                    <p className="text-neutral-900 text-base md:text-lg leading-relaxed">
                    For uni projects, I was constantly duplicating slides and moving elements manually just to get smooth motion. My colleagues had the same issue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">The Solution</h4>
                    <p className="text-neutral-900 text-base md:text-lg leading-relaxed">
                    So I built motion templates we could share privately. Pick one, add your images & text once, click create, and the slides are ready.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">Beyond Limits</h4>
                    <p className="text-neutral-900 text-base md:text-lg leading-relaxed">
                    But the Canva SDK had limits, so some of the motion we wanted wasn't possible. That's why I'm building the standalone editor now.
                    </p>
                  </div>
                </div>

                {/* Demo Video */}
                <div className="mt-8">
                  <video
                    className="w-full rounded-xl border-2 border-[#8B5CF6] shadow-lg"
                    controls
                    poster="/editor.png"
                  >
                    <source src="/demo vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="text-neutral-700 text-sm mt-3 text-center">
                    Watch Vevara templates in action inside Canva (before the standalone editor)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section id="use-cases" className="relative py-32 md:py-40 bg-neutral-50 overflow-hidden">
        {/* Floating video play icon - top left */}
        <div className="absolute top-20 left-4 lg:left-16 hidden lg:block">
          <div className="relative group scale-75 md:scale-100">
            <div className="p-4 bg-white shadow-sm border-2 border-[#8B5CF6] rounded-full flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#8B5CF6]"
              >
                <path
                  d="M5 3L19 12L5 21V3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating selected shape - top right */}
        <div className="absolute top-32 right-4 lg:right-24 hidden lg:block">
          <div className="relative scale-75 md:scale-100">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-300 to-purple-400 shadow-lg border-2 border-[#8B5CF6]"></div>
          </div>
        </div>

        {/* Video camera icon - bottom left */}
        <div className="absolute bottom-24 left-8 lg:left-32 hidden lg:block">
          <div className="relative scale-75 md:scale-100">
            <div className="p-3 bg-white shadow-md border-2 border-[#8B5CF6] rounded-lg transform -rotate-12">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#8B5CF6]"
              >
                <path
                  d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Yellow rectangle - bottom right */}
        <div className="absolute bottom-16 right-12 lg:right-40 hidden md:block">
          <div className="relative">
            <div className="w-32 h-20 bg-gradient-to-r from-yellow-200 to-yellow-300 shadow-md border-2 border-[#8B5CF6]"></div>
          </div>
        </div>

        {/* Small shape for mobile - top left */}
        <div className="absolute top-16 -left-8 md:hidden">
          <div className="relative scale-90">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-purple-400 shadow-lg border-2 border-[#8B5CF6]"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight text-balance">
              Perfect For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group">
              <div className="bg-white shadow-lg border-2 border-[#8B5CF6] p-6 text-center hover:shadow-xl transition-all duration-300 lg:h-24 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Social Media Videos</h3>
              </div>
              {/* Corner handles */}
              <div className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            </div>

            <div className="relative group">
              <div className="bg-white shadow-lg border-2 border-[#8B5CF6] p-6 text-center hover:shadow-xl transition-all duration-300 lg:h-24 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Product Demos</h3>
              </div>
              {/* Corner handles */}
              <div className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            </div>

            <div className="relative group">
              <div className="bg-white shadow-lg border-2 border-[#8B5CF6] p-6 text-center hover:shadow-xl transition-all duration-300 lg:h-24 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Presentations</h3>
              </div>
              {/* Corner handles */}
              <div className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            </div>

            <div className="relative group">
              <div className="bg-white shadow-lg border-2 border-[#8B5CF6] p-6 text-center hover:shadow-xl transition-all duration-300 lg:h-24 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Video Editing</h3>
              </div>
              {/* Corner handles */}
              <div className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Start for free Section */}
      <section className="py-32 md:py-40 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <span className="inline-block bg-yellow-300 text-neutral-900 px-5 py-2 rounded-full text-sm font-semibold mb-8">
            Join Waitlist
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-neutral-900 text-balance leading-[1.15]">
            Over 100 Canva users are already on the list!
          </h2>
          <p className="text-neutral-700 text-xl md:text-2xl tracking-tight leading-relaxed mb-12 text-balance">
            By joining, you'll get early access to the new standalone Vevara editor our bigger, motion-first project and the motion template system I originally built as a private internal Canva tool. Be among the first to try it and help shape the editor.
          </p>

          <form onSubmit={handleWaitlistSubmit} className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3 md:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isLoading}
                className="flex-1 px-6 py-4 bg-white border border-neutral-300 rounded-2xl md:rounded-r-none text-neutral-900 placeholder:text-neutral-400 text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="md:w-auto w-full bg-neutral-900 text-white px-8 py-5 text-base font-semibold rounded-2xl md:rounded-l-none hover:bg-neutral-800 transition-all active:scale-[0.98] shadow-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <span className="hidden md:inline">Join the waitlist</span>
                    <span className="md:hidden">Join the waitlist</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

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

            {/* <div>
              <h4 className="text-sm font-bold text-neutral-900 mb-5">Company</h4>
              <ul className="space-y-3">
              </ul>
            </div> */}
          </div>

          <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">© 2026 Vevara. All rights reserved.</p>
            <div className="flex gap-8">
              <a target="_blank" href="https://www.instagram.com/vevara_motion/" className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors">
                Instagram
              </a>
              {/* <a href="#" className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors">
                GitHub
              </a> */}
              <a target="_blank" href="https://www.linkedin.com/in/reda-toumi-b7a401234/" className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
