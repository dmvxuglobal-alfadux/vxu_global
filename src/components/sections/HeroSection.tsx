"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Plane, Code, Globe2, Sparkles, Target, Zap } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const videoTexts = [
    { text: "Your Fast-Track to Global Universities", highlight: "Global Universities", icon: <Globe2 size={40} className="text-primary" /> },
    { text: "Job-Ready Upskilling for AI & Cloud", highlight: "Job-Ready", icon: <Code size={40} className="text-secondary" /> },
    { text: "College Students: Secure Your Dream Placement", highlight: "Dream Placement", icon: <Target size={40} className="text-primary" /> },
    { text: "Working Professionals: Accelerate ROI 400%", highlight: "Accelerate ROI", icon: <Zap size={40} className="text-secondary" /> },
    { text: "End-to-End Consulting & 5-Year Visas", highlight: "End-to-End", icon: <Plane size={40} className="text-primary" /> }
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoTexts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [videoTexts.length])

  return (
    <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden">
      {/* Pure White Background */}
      <div className="absolute inset-0 z-0 bg-white" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Empowering Global Ambitions
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-tight mb-6 tracking-tight">
              Accelerate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">You For Excellence...</span>
            </h1>

            <p className="text-lg text-primary/80 mb-8 leading-relaxed max-w-xl">
              From WHO-approved MBBS programs abroad to Job-Ready Upskilling in AI & Cloud.
              Join thousands taking the leap to world-class universities and top tech careers!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/job-ready-programs">
                <Button size="lg" variant="gradient" className="gap-2 h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                  Explore Programs <ArrowRight size={20} />
                </Button>
              </Link>
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 20px rgba(59,130,246,0.3)",
                    "0 0 0 rgba(0,0,0,0)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                  className="h-14 px-8 text-lg rounded-full bg-white hover:bg-slate-50 border-primary/20 hover:border-primary text-primary font-bold shadow-sm w-full sm:w-auto relative overflow-hidden group"
                >
                  <span className="relative z-10">Book Free Counselling</span>
                  <motion.div 
                    className="absolute inset-0 bg-primary/5 transition-transform duration-300 translate-x-[-100%] group-hover:translate-x-0" 
                  />
                </Button>
              </motion.div>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-primary/70 font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Student ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-primary/80">
                  +5k
                </div>
              </div>
              <p>Trusted by students globally</p>
            </div>
          </motion.div>

          {/* Engaging Video Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[550px] w-full"
          >
            {/* Decorative Background Glows behind the video */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-primary to-secondary rounded-[40px] blur-3xl opacity-20 animate-pulse"></div>

            {/* Animated Text Vibe Showcase Container */}
            <div className="absolute inset-0 right-4 top-10 bottom-10 bg-gradient-to-br from-[#001265] to-[#1E4785] rounded-[32px] border-[8px] border-slate-100 shadow-2xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-500 z-10 flex flex-col justify-center items-center text-center p-8 box-border">

              <div className="absolute top-0 right-0 p-8 opacity-20"><Sparkles size={120} className="text-white animate-pulse" /></div>
              <div className="absolute bottom-0 left-0 p-8 opacity-10"><Target size={120} className="text-white" /></div>

              {/* Rotating Video Text Animation */}
              <div className="relative w-full h-[250px] flex items-center justify-center z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -30 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="flex flex-col items-center gap-6 w-full"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl mb-2">
                      {videoTexts[currentSlide].icon}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight px-4 shadow-black/10 drop-shadow-md">
                      {videoTexts[currentSlide].text.split(videoTexts[currentSlide].highlight).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-secondary bg-white px-2 rounded-lg mx-1 inline-block -rotate-2 transform">
                              {videoTexts[currentSlide].highlight}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
                {videoTexts.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 bg-secondary' : 'w-3 bg-white/30'}`} />
                ))}
              </div>
            </div>

            {/* Floating Badges tailored for Students & Professionals */}
            <motion.div
              animate={{ y: [-15, 0, -15] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-16 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 z-20"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                <Globe2 size={24} />
              </div>
              <div>
                <p className="font-bold text-primary">Working Professionals</p>
                <p className="text-xs text-primary/70">Elevate Your Career</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-16 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 z-20"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-secondary">
                <Code size={24} />
              </div>
              <div>
                <p className="font-bold text-primary">College Students</p>
                <p className="text-xs text-primary/70">Job-Ready Upskilling</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
