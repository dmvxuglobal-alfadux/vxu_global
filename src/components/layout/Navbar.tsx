"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // Added for LeadPopup context
import { db, Announcement } from "@/lib/db"
import { LeadPopup } from "@/components/floating/LeadPopup"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [announcement, setAnnouncement] = React.useState<Announcement | null>(null)
  const [showLeadForm, setShowLeadForm] = React.useState(false)

  React.useEffect(() => {
    // Add event listener for global lead form trigger
    const handleTrigger = () => {
      console.log("Lead form triggered globally");
      setShowLeadForm(true);
    };
    window.addEventListener("trigger-lead-form", handleTrigger);

    async function loadAnnouncement() {
      try {
        const data = await db.getAnnouncement()
        if (data && data.isActive) {
          setAnnouncement(data)
        }
      } catch (err) { }
    }
    loadAnnouncement()

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("trigger-lead-form", handleTrigger);
    }
  }, [])

  const studyAbroadLinks = [
    { name: "Overview (All Countries)", href: "/study-abroad" },
    { name: "Study in Europe", href: "/study-in-europe" },
    { name: "Study in USA", href: "/study-in-usa" },
    { name: "Study in Germany", href: "/study-in-germany" },
    { name: "Study in France", href: "/study-in-france" },
    { name: "Study in Finland", href: "/study-in-finland" },
    { name: "Study in Dubai", href: "/study-in-dubai" },
    { name: "Study in Canada", href: "/study-in-canada-new" },
    { name: "Study in UK", href: "/study-in-uk" },
    { name: "Study in Australia", href: "/study-in-australia" },
    { name: "MBBS Abroad", href: "/mbbs-abroad" },
  ]

  const navLinks = [
    { name: "Job Ready Programs", href: "/job-ready-programs" },
    { name: "Ambassadors", href: "/ambassadors" },
    { name: "Mentors", href: "/mentors" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about-us" }
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
        id="main-nav-header"
      >
        <AnimatePresence>
          {announcement && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gradient-to-r from-[#E31837] via-[#ff4d4d] to-[#E31837] text-white overflow-hidden relative shadow-md"
            >
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-center text-xs md:text-sm font-bold gap-1 md:gap-3 text-center relative max-w-7xl">
                <div className="flex items-center justify-center gap-2">
                  <span className="animate-pulse shrink-0">✨</span>
                  <span className="leading-snug pr-6 md:pr-0">{announcement.text}</span>
                </div>
                <button
                  onClick={() => setShowLeadForm(true)}
                  className="inline-flex items-center bg-white/20 hover:bg-white text-white hover:text-primary transition-all px-3 py-1 rounded-full font-bold whitespace-nowrap shrink-0 mt-1 md:mt-0 shadow-sm border border-white/10"
                >
                  Explore Now <ArrowRight size={14} className="ml-1" />
                </button>
                <button onClick={() => setAnnouncement(null)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded p-1 rounded-full flex shrink-0 border border-transparent hover:border-white/30">
                  <X size={14} className="shrink-0" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="VXU Global Logo" className="h-12 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
            <div className="relative group p-4 -ml-4 cursor-pointer">
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                Study Abroad
                <svg className="w-4 h-4 mt-0.5 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-100 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="flex flex-col py-2">
                    {studyAbroadLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="px-5 py-2.5 text-sm font-medium text-primary hover:bg-blue-50/50 hover:text-secondary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/study-abroad-pathway" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                Pathway Program
                <span className="text-[10px] bg-secondary text-white px-1.5 py-0.5 rounded-full font-bold ml-1 animate-pulse">NEW</span>
            </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="text-sm font-semibold text-primary/80 hover:text-primary hover:bg-slate-50">
                  Admin Login
                </Button>
              </Link>
              <Button variant="gradient" onClick={() => setShowLeadForm(true)}>Book Counselling</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-border shadow-lg overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-primary/10">
                <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Study Abroad</div>
                {studyAbroadLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base leading-snug font-medium text-primary hover:text-secondary hover:bg-slate-50 pl-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-3 py-2 mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-t border-slate-100">Other Programs</div>
                  <Link href="/study-abroad-pathway" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" onClick={() => setIsOpen(false)}>
                  Pathway Program
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 px-3">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">Admin Login</Button>
                  </Link>
                  <Button variant="gradient" className="w-full" onClick={() => { setIsOpen(false); setShowLeadForm(true); }}>
                    Book Counselling
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <LeadPopup isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} />
    </>
  )
}
