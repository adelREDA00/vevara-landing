"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, CheckCircle, XCircle, Loader2, ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import editorImage from "@/assets/editor.png"


export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [activeCategory, setActiveCategory] = useState("sliders")
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isAgentVideoMuted, setIsAgentVideoMuted] = useState(true)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [isAgentVideoLoading, setIsAgentVideoLoading] = useState(true)
  const [isCanvaVideoLoading, setIsCanvaVideoLoading] = useState(true)
  const [isTemplateVideoLoading, setIsTemplateVideoLoading] = useState(true)
  const heroVideoRef = useRef(null)
  const agentVideoRef = useRef(null)
  const canvaVideoRef = useRef(null)
  const templateVideoRef = useRef(null)

  const templates = {
    sliders: [
      { name: "Slider 2E Basic A", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/slider/2E/S-2E-Basic%20A.mp4" },
      { name: "Slider 2E Basic B", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/slider/2E/S-2E-Basic%20B.mp4" },
      { name: "Slider 3E Basic A", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/slider/3E/S-3E-Basic%20A.mp4" },
      { name: "Slider 3E Basic B", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/slider/3E/S-3E-Basic%20B.mp4" }
    ],
    shapes: [
      { name: "Shape & Text 1E Basic A", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/shapes/1E/ST-1E-Basic%20A.mp4" },
      { name: "Shape & Text 2E Basic A", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/shapes/2E/ST-2E-Basic%20A.mp4" }
    ],
    text: [
      { name: "Text Simple 1 (3E)", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/text%20animation/three%20elements/text-simple-1.mp4" },
      { name: "Text Simple 2 (3E)", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/text%20animation/three%20elements/text-simple-2.mp4" },
      { name: "Text Simple 2", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/text%20animation/two%20elemnts/text-simple-2.mp4" },
      { name: "Text Simple 3", url: "https://raw.githubusercontent.com/adelREDA00/canva-/main/text%20animation/two%20elemnts/text-simple-3.mp4" }
    ]
  }

  const currentVideos = templates[activeCategory]
  const currentVideo = currentVideos[currentVideoIndex]

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % currentVideos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + currentVideos.length) % currentVideos.length)
  }

  // Hero video loading handler
  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsVideoLoading(false)
    }

    const handleLoadStart = () => {
      setIsVideoLoading(true)
    }

    const handleError = () => {
      setIsVideoLoading(false)
    }

    if (video.readyState >= 3) {
      setIsVideoLoading(false)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('error', handleError)
    }
  }, [])

  // Agent video loading handler
  useEffect(() => {
    const video = agentVideoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsAgentVideoLoading(false)
    }

    const handleLoadStart = () => {
      setIsAgentVideoLoading(true)
    }

    const handleError = () => {
      setIsAgentVideoLoading(false)
    }

    if (video.readyState >= 3) {
      setIsAgentVideoLoading(false)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('error', handleError)
    }
  }, [])

  // Canva video loading handler
  useEffect(() => {
    const video = canvaVideoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsCanvaVideoLoading(false)
    }

    const handleLoadStart = () => {
      setIsCanvaVideoLoading(true)
    }

    const handleError = () => {
      setIsCanvaVideoLoading(false)
    }

    if (video.readyState >= 3) {
      setIsCanvaVideoLoading(false)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('error', handleError)
    }
  }, [])

  // Template video loading handler - resets when video changes
  useEffect(() => {
    const video = templateVideoRef.current
    if (!video) return

    setIsTemplateVideoLoading(true)

    const handleCanPlay = () => {
      setIsTemplateVideoLoading(false)
    }

    const handleLoadStart = () => {
      setIsTemplateVideoLoading(true)
    }

    const handleError = () => {
      setIsTemplateVideoLoading(false)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('error', handleError)
    }
  }, [activeCategory, currentVideoIndex])

  const switchCategory = (category) => {
    setActiveCategory(category)
    setCurrentVideoIndex(0)
  }

  const toggleSound = () => {
    if (heroVideoRef.current) {
      const newMutedState = !isMuted
      heroVideoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  const toggleAgentVideoSound = () => {
    if (agentVideoRef.current) {
      const newMutedState = !isAgentVideoMuted
      agentVideoRef.current.muted = newMutedState
      setIsAgentVideoMuted(newMutedState)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setErrorMessage("")

    try {
      const response = await fetch('https://vexly-node.onrender.com/public/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim()
        })
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setShowSuccessModal(true)
        setEmail("")
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
        setShowErrorModal(true)
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      setErrorMessage('Network error. Please check your connection and try again.')
      setShowErrorModal(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Planity Style */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Video - S-3E-Basic A */}
        <div className="absolute inset-0 z-0">
          {/* Loading Background Gradient */}
          {isVideoLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse"></div>
          )}
          
          <video 
            ref={heroVideoRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoading ? 'opacity-0' : 'opacity-100'
            }`}
            autoPlay 
            loop 
            muted={isMuted}
            playsInline
            preload="auto"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Loading Spinner Overlay */}
          {isVideoLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
                <p className="text-white/80 text-sm font-light">Loading video...</p>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Sound Toggle Button */}
        <button
          onClick={toggleSound}
          className="absolute bottom-6 right-6 z-[60] bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
          aria-label={isMuted ? "Enable sound" : "Disable sound"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-gray-700" />
          ) : (
            <Volume2 className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
                Canva simplicity. Real motion control
              </h1>
            </div>

            {/* Email Form */}
            <div className="max-w-2xl mx-auto mt-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-lg p-2 shadow-xl items-stretch sm:items-center">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="flex-1 px-6 py-4 rounded-md border-0 focus:ring-0 outline-none text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-md transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed font-medium w-full sm:w-auto"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              
              <p className="text-white/70 text-sm mt-4">
                Join 80+ creators already on the waitlist
              </p>

              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="text-white/70 text-sm">Motion tips, tutorials & Vevara updates:</span>
                <a 
                  href="https://www.instagram.com/vevara_motion/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@vevara_motion</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Vevara Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              What is Vevara?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              An online web editor like Canva, but faster and focused on motion. Create high-quality videos, presentations, and animations with smooth motion control.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Simple</h3>
                <p className="text-gray-600 text-sm font-light">Canva-like simplicity with powerful motion tools</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">🎬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Motion Focused</h3>
                <p className="text-gray-600 text-sm font-light">Smooth animations and professional motion control</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High Quality</h3>
                <p className="text-gray-600 text-sm font-light">Create professional videos and presentations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vevara Editor Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                Standalone Web Editor
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Vevara Editor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              A web-based motion editor. Create videos, presentations, and animations with smooth motion control, all in your browser.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border-2 border-gray-800 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-6">
              <img 
                src={editorImage}
                alt="Vevara Editor Preview"
                className="w-full h-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Vevara Agent Feature */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>AI-Powered</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">
                Vevara Agent
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Describe your animation in plain English, and AI creates it for you. Fine-tune every detail to match your vision.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                  Text to Animation
                </span>
                <span className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                  Fully Customizable
                </span>
                <span className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                  Zero Learning Curve
                </span>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 border-2 border-gray-800">
              <div className="aspect-video bg-gray-900 relative">
                {/* Loading Background Gradient */}
                {isAgentVideoLoading && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse"></div>
                )}
                
                <video 
                  ref={agentVideoRef}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isAgentVideoLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  autoPlay 
                  loop 
                  muted={isAgentVideoMuted}
                  playsInline
                  preload="auto"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Loading Spinner Overlay */}
                {isAgentVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                      <p className="text-white/80 text-xs font-light">Loading...</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Sound Toggle Button */}
              {!isAgentVideoLoading && (
                <button
                  onClick={toggleAgentVideoSound}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                  aria-label={isAgentVideoMuted ? "Enable sound" : "Disable sound"}
                >
                  {isAgentVideoMuted ? (
                    <VolumeX className="w-4 h-4 text-gray-700" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-gray-700" />
                  )}
                </button>
              )}

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-white/80 font-light italic bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  Demo created with Vevara Editor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vevara for Canva Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Canva Integration
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Vevara for Canva
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Works inside Canva. Ready-to-use motion templates for presentations, sliders, and more. What takes 10 minutes manually, Vevara does in seconds.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Inside Canva</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Runs directly in your Canva workspace. No switching tools or files.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready-to-Use Templates</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Hundreds of motion templates for sliders, transitions, and animations. Add content and customize.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
            <div className="aspect-video bg-gray-100 relative">
              {/* Loading Background Gradient */}
              {isCanvaVideoLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
              )}
              
              <video 
                ref={canvaVideoRef}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  isCanvaVideoLoading ? 'opacity-0' : 'opacity-100'
                }`}
                autoPlay 
                loop 
                muted
                playsInline
                preload="auto"
              >
                <source src="/demo vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Loading Spinner Overlay */}
              {isCanvaVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-10">
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-6 h-6 text-gray-700 animate-spin" />
                    <p className="text-gray-600 text-xs font-light">Loading...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Templates Gallery */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              Motion Templates Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Examples of what you can create. Smooth animations for presentations, videos, and social media. Available in both Editor and Canva versions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-sm w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  onClick={() => switchCategory("sliders")}
                  className={`flex-1 px-4 py-4 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                    activeCategory === "sliders"
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Slider Templates
                </button>
                <button
                  onClick={() => switchCategory("shapes")}
                  className={`flex-1 px-4 py-4 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                    activeCategory === "shapes"
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Shape & Text
                </button>
                <button
                  onClick={() => switchCategory("text")}
                  className={`flex-1 px-4 py-4 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                    activeCategory === "text"
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Text Animations
                </button>
              </div>
            </div>
          </div>

          {/* Video Slider with Next Preview */}
          <div className="w-full">
            <div className="relative group max-w-4xl mx-auto">
              {/* Video Container */}
              <div className="flex flex-col overflow-hidden">
                {/* Current Video */}
                <div className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-xl bg-white w-full">
                  <div className="aspect-video bg-gray-100 relative">
                    {/* Loading Background Gradient */}
                    {isTemplateVideoLoading && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
                    )}
                    
                    <video 
                      ref={templateVideoRef}
                      key={`${activeCategory}-${currentVideoIndex}`}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        isTemplateVideoLoading ? 'opacity-0' : 'opacity-100'
                      }`}
                      autoPlay 
                      loop 
                      muted
                      playsInline
                      preload="auto"
                    >
                      <source src={currentVideo.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Loading Spinner Overlay */}
                    {isTemplateVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-10">
                        <div className="flex flex-col items-center gap-2">
                          <Loader2 className="w-6 h-6 text-gray-700 animate-spin" />
                          <p className="text-gray-600 text-xs font-light">Loading...</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevVideo}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-6 text-center">
                <div className="flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                      {currentVideo.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {currentVideoIndex + 1} of {currentVideos.length} in {activeCategory === "sliders" ? "Slider" : activeCategory === "shapes" ? "Shape & Text" : "Text Animation"} Templates
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Thumbnails */}
              <div className="flex justify-center mt-6 space-x-3 overflow-x-auto pb-2">
                {currentVideos.map((video, index) => (
                  <button
                    key={`${activeCategory}-${index}`}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`relative rounded-lg overflow-hidden transition-all ${
                      index === currentVideoIndex 
                        ? 'ring-2 ring-gray-900 scale-105' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <div className="w-20 h-12 bg-gray-200 flex items-center justify-center">
                      <video 
                        key={`${activeCategory}-${index}-video`}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                        onLoadedData={(e) => {
                          // Seek to a specific time to show a representative frame
                          e.target.currentTime = 0.5;
                        }}
                        onLoadedMetadata={(e) => {
                          // Also set time when metadata loads to ensure we get a good frame
                          e.target.currentTime = 0.5;
                        }}
                      >
                        <source src={video.url} type="video/mp4" />
                      </video>
                    </div>
                    {index === currentVideoIndex && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-6 tracking-wide">
              Two Ways to Create Motion Content
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light px-2">
              Choose the tool that fits your workflow: standalone editor or Canva integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Vevara Editor - Main App */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 border-2 border-gray-200">
              <div className="mb-6">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  Standalone Web Editor
                </span>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-3 md:mb-4">Vevara Editor</h3>
              <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
                A web-based motion editor. Create videos, presentations, and animations with smooth motion control, all in your browser.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Full Motion Editor</p>
                    <p className="text-gray-600 text-xs md:text-sm">Complete workspace for creating motion content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Smooth Animation Control</p>
                    <p className="text-gray-600 text-xs md:text-sm">Professional-grade motion and animation tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Vevara Agent (AI)</p>
                    <p className="text-gray-600 text-xs md:text-sm">Text-to-animation powered by AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Zero Learning Curve</p>
                    <p className="text-gray-600 text-xs md:text-sm">Canva-like simplicity, no design skills needed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vevara for Canva */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200">
              <div className="mb-4 md:mb-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Canva Integration
                </span>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-3 md:mb-4">Vevara for Canva</h3>
              <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
                Works inside Canva. Ready-to-use motion templates for presentations, sliders, and more. What takes 10 minutes manually, Vevara does in seconds.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Inside Canva</p>
                    <p className="text-gray-600 text-xs md:text-sm">Runs directly in your Canva workspace</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Motion Templates</p>
                    <p className="text-gray-600 text-xs md:text-sm">Ready-to-use sliders, transitions, animations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Save Time</p>
                    <p className="text-gray-600 text-xs md:text-sm">Complex animations in seconds, not minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Perfect for Presentations</p>
                    <p className="text-gray-600 text-xs md:text-sm">Ideal for slides, social media, and marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join Beta Programme */}
          <div className="text-center pt-8 md:pt-12 pb-6 md:pb-8 border-t border-gray-200 px-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-3 md:mb-4 tracking-wide">
              Join Our Beta Programme
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 font-light">
              Be among the first to experience Vevara
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-lg p-2 shadow-xl items-stretch sm:items-center border border-gray-200">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-md border-0 focus:ring-0 outline-none text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent text-sm sm:text-base"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed font-medium w-full sm:w-auto text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Beta Programme
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            <p className="text-gray-600 text-xs sm:text-sm mt-4">
              Join 26+ creators already in our beta programme
            </p>
          </div>

          <div className="text-center pt-6 md:pt-8 border-t border-gray-200 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-gray-600">
              <span className="text-sm sm:text-base">Motion tips, tutorials & Vevara updates:</span>
              <a 
                href="https://www.instagram.com/vevara_motion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium text-sm sm:text-base"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@vevara_motion</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold text-gray-900">
              Success!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              You've been successfully added to our waitlist. We'll notify you when we launch!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => setShowSuccessModal(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Error Modal */}
      <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold text-gray-900">
              Oops!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              {errorMessage}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => setShowErrorModal(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
            >
              Try again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
