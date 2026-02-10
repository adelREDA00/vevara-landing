"use client"

import { useState, useEffect, useRef } from "react"
import { toast } from "sonner"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Lazy video hooks for each video
  const [firstVideoRef, firstVideoInView] = useLazyVideo()
  const [secondVideoRef, secondVideoInView] = useLazyVideo()

  // Custom hook for lazy loading videos
  function useLazyVideo() {
    const videoRef = useRef(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1, rootMargin: '100px' }
      )

      if (videoRef.current) {
        observer.observe(videoRef.current)
      }

      return () => observer.disconnect()
    }, [])

    return [videoRef, isInView]
  }

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
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-white">Vevara</div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hidden md:block text-white/70 hover:text-white transition-colors text-sm font-medium">How it works</a>
            <a href="#about" className="hidden md:block text-white/70 hover:text-white transition-colors text-sm font-medium">Canva vs Vevara</a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-xl transition-all border border-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
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
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 text-white flex items-center justify-center rounded-xl hover:bg-white/20 transition-all border border-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Menu Items */}
          <div className="px-12">
            <nav className="space-y-8">
              <a
                href="#features"
                className="block text-white text-5xl md:text-7xl font-bold hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#about"
                className="block text-white text-5xl md:text-7xl font-bold hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Canva vs Vevara
              </a>
              <a
                href="#use-cases"
                className="block text-white text-5xl md:text-7xl font-bold hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                What it is
              </a>
            </nav>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/ph1.png"
        >
          <source src="/demo.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 w-full">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#8B5CF6] text-white px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-lg shadow-purple-500/20">
              Coming soon
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.05] text-balance">
              Create video that <span className="text-[#A78BFA]">actually</span> moves.
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Simple like Canva, but built for motion. Drop clips, cut, and resize fast.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="max-w-2xl mx-auto mb-20">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="flex-1 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-white/50 text-base focus:outline-none focus:border-purple-400 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-neutral-900 px-10 py-5 text-base font-bold rounded-2xl hover:bg-neutral-100 transition-all active:scale-[0.98] shadow-xl disabled:opacity-50"
                >
                  {isLoading ? "Joining..." : "Get early access"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="features" className="py-32 md:py-48 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-6 leading-tight">
              How it works
            </h2>
            <p className="text-neutral-600 text-xl md:text-2xl leading-relaxed">
              Design like normal. When you want motion, just click record and move stuff.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">1. Start Recording</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  No keyframes. Just click Motion and start.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">2. Move elements</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Move, rotate, or scale elements. Vevara records every step.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">3. Edit Fast</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Drop your videos, cut them, and resize. It&apos;s built for speed.
                </p>
              </div>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-100 bg-black" ref={firstVideoRef}>
              <video
                className="w-full h-auto object-cover"
                autoPlay={firstVideoInView}
                controls
                loop
                playsInline
                preload={firstVideoInView ? "metadata" : "none"}
              >
                {firstVideoInView && <source src="/first.mp4" type="video/mp4" />}
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Canva vs Vevara Section */}
      <section id="about" className="py-32 md:py-48 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-100 bg-black" ref={secondVideoRef}>
              <video
                className="w-full h-auto object-cover"
                autoPlay={secondVideoInView}
                controls
                loop
                playsInline
                preload={secondVideoInView ? "metadata" : "none"}
              >
                {secondVideoInView && <source src="/CanvavsVevara.mp4" type="video/mp4" />}
              </video>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
                How this is different from Canva
              </h2>
              <div className="space-y-4">
                <p className="text-neutral-700 text-xl md:text-2xl font-medium">
                  Canva is great for static design, but motion is messy.
                </p>
                <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
                  Stop duplicating pages and using transition hacks. All motion happens step by step, in one place.
                </p>
                <div className="inline-block px-6 py-3 bg-purple-100 text-purple-700 rounded-xl font-bold">
                  Vevara does motion inside the page.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Vevara is Section */}
      <section id="use-cases" className="py-24 md:py-32 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
              What it is
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 md:p-12 rounded-[2rem] space-y-4">
              <h3 className="text-2xl font-bold text-purple-700">Vevara is</h3>
              <div className="space-y-2 text-lg text-neutral-700">
                <p>Simple like Canva</p>
                <p>Built for motion and video</p>
                <p>Fast: cut, resize, edit</p>
                <p>Easy to change later</p>
              </div>
            </div>

            <div className="bg-neutral-100 p-8 md:p-12 rounded-[2rem] space-y-4">
              <h3 className="text-2xl font-bold text-neutral-500">Vevara is not</h3>
              <div className="space-y-2 text-lg text-neutral-600">
                <p>A complex pro tool</p>
                <p>A massive timeline editor</p>
                <p>A template factory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Vevara is for Section */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">
            Who it&apos;s for
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="font-medium">Canva users who want motion</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="font-medium">Fast video editors</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="font-medium">Social media creators</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="font-medium">Animated presentation lovers</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-10">
            <p className="text-2xl font-bold text-purple-300">
              If motion feels hard, Vevara is for you.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="flex-1 px-8 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 text-base focus:outline-none focus:border-purple-400 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-purple-600 text-white px-10 py-5 text-base font-bold rounded-2xl hover:bg-purple-500 transition-all active:scale-[0.98] shadow-lg disabled:opacity-50"
                >
                  {isLoading ? "Joining..." : "Join"}
                </button>
              </div>
              <p className="mt-4 text-white/40 text-sm">Join 100+ others waiting for early access.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-neutral-200 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight mb-4">Vevara</h3>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-sm">
                The simple way to add real motion to your videos and presentations. No keyframes, no mess.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-neutral-900 mb-5">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#use-cases" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    What it is
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                    Canva vs Vevara
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
