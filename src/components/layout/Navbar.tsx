"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { db, Announcement } from "@/lib/db"
import { LeadPopup } from "@/components/floating/LeadPopup"

import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [announcement, setAnnouncement] = React.useState<Announcement | null>(null)
  const [showLeadForm, setShowLeadForm] = React.useState(false)

  React.useEffect(() => {
    const handleTrigger = () => setShowLeadForm(true);
    window.addEventListener("trigger-lead-form", handleTrigger);

    async function loadAnnouncement() {
      try {
        const data = await db.getAnnouncement()
        if (data && data.isActive) setAnnouncement(data)
      } catch (err) { }
    }
    loadAnnouncement()

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("trigger-lead-form", handleTrigger);
    }
  }, [])

  const studyAbroadLinks = [
    { name: "United States", href: "/study-in-usa" },
    { name: "United Kingdom", href: "/study-in-uk" },
    { name: "Canada", href: "/study-in-canada" },
    { name: "Australia", href: "/study-in-australia" },
    { name: "Ireland", href: "/study-in-ireland" },
    { name: "Germany", href: "/study-in-germany" },
    { name: "France", href: "/study-in-france" },
    { name: "Netherlands", href: "/study-in-netherlands" },
    { name: "Finland", href: "/study-in-finland" },
    { name: "Sweden", href: "/study-in-sweden" },
    { name: "Spain", href: "/study-in-spain" },
    { name: "Italy", href: "/study-in-italy" },
    { name: "New Zealand", href: "/study-in-new-zealand" },
    { name: "Dubai", href: "/study-in-dubai" },
    { name: "Singapore", href: "/study-in-singapore" },
    { name: "Japan", href: "/study-in-japan" },
    { name: "Malta", href: "/study-in-malta" },
    { name: "Cyprus", href: "/study-in-cyprus" },
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
      {/* Static Announcement Bar (Scrolls away) */}
      <AnimatePresence>
        {announcement && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="bg-[#E31837] text-white overflow-hidden relative z-[60]"
          >
            <div className="container mx-auto px-4 py-2 flex items-center justify-center text-xs md:text-sm font-bold gap-3">
              <span className="leading-snug pr-6 md:pr-0 text-center">{announcement.text}</span>
              <button 
                onClick={() => setShowLeadForm(true)} 
                className="bg-white/20 hover:bg-white text-white hover:text-red-600 px-3 py-1 rounded-full text-[10px] md:text-xs transition-colors whitespace-nowrap"
              >
                Explore Now
              </button>
              <button onClick={() => setAnnouncement(null)} className="absolute right-4"><X size={14} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Sticky Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "top-0 bg-white shadow-lg border-b border-slate-100 py-2" 
          : isHome 
            ? "top-auto bg-transparent py-4 text-white" 
            : "top-0 bg-white shadow-sm border-b border-slate-100 py-2 text-slate-800"
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex flex-shrink-0">
               <img 
                 src="/flogo.png" 
                 alt="VXU Global" 
                 className={`h-10 lg:h-12 object-contain transition-all ${(!scrolled && isHome) ? "brightness-0 invert" : ""}`} 
               />
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <div className="relative group py-2">
                <span className={`text-sm font-bold cursor-pointer flex items-center gap-1 group-hover:text-secondary transition-colors ${
                    (scrolled || !isHome) ? "text-slate-800" : "text-white"
                  }`}>
                  Study Abroad <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </span>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-[40%] w-[95vw] lg:w-[1100px] bg-white shadow-2xl rounded-[2.5rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-0 z-50 overflow-hidden border border-slate-100 grid md:grid-cols-4 gap-0 pointer-events-auto">
                   <div className="p-8 lg:p-10">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-50 pb-2">Top Tiers</h4>
                      <div className="flex flex-col gap-3.5 text-slate-800">
                         {studyAbroadLinks.slice(0, 5).map(l => <MenuLink key={l.href} {...l} />)}
                      </div>
                   </div>
                   <div className="p-8 lg:p-10 bg-slate-50/30">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Europe Core</h4>
                      <div className="flex flex-col gap-3.5 text-slate-800">
                         {studyAbroadLinks.slice(5, 10).map(l => <MenuLink key={l.href} {...l} />)}
                      </div>
                   </div>
                   <div className="p-8 lg:p-10">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-50 pb-2">Safe & Budget</h4>
                      <div className="flex flex-col gap-3.5 text-slate-800">
                         {studyAbroadLinks.slice(10, 15).map(l => <MenuLink key={l.href} {...l} />)}
                      </div>
                   </div>
                   <div className="p-8 lg:p-10 bg-slate-900 text-white">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6 border-b border-white/10 pb-2">Strategic</h4>
                      <div className="flex flex-col gap-3.5 mb-8">
                         {studyAbroadLinks.slice(15).map(l => (
                           <Link key={l.href} href={l.href} className="text-sm font-bold text-white/70 hover:text-secondary transition-all hover:translate-x-1">{l.name}</Link>
                         ))}
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <Link href="/study-abroad" className="inline-flex items-center gap-2 text-sm font-black text-secondary hover:translate-x-1 transition-transform">
                          View All 30+ <ArrowRight size={14}/>
                        </Link>
                      </div>
                   </div>
                </div>
              </div>

              <Link href="/study-abroad-pathway" className={`text-sm font-bold relative group ${
                  (scrolled || !isHome) ? "text-slate-800" : "text-white/90"
                }`}>
                Pathway Program
                <span className="absolute -top-4 -right-2 bg-secondary text-white text-[8px] px-1.5 py-0.5 rounded-full animate-pulse font-black shadow-sm">NEW</span>
              </Link>
 
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} className={`text-sm font-bold transition-colors ${
                    (scrolled || !isHome) ? "text-slate-800 hover:text-primary" : "text-white/90 hover:text-white"
                  }`}>{l.name}</Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" className="hidden lg:block">
                <Button variant="ghost" className={`font-bold transition-colors ${
                    (scrolled || !isHome) ? "text-slate-600 hover:text-primary" : "text-white/80 hover:text-white"
                  }`}>Admin Login</Button>
              </Link>
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(227, 24, 55, 0)",
                    "0 0 20px rgba(227, 24, 55, 0.4)",
                    "0 0 0 rgba(227, 24, 55, 0)"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-full sm:w-auto relative group overflow-hidden rounded-full"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                  className="h-14 px-8 text-lg rounded-full bg-white hover:bg-slate-50 border-primary text-primary shadow-xl w-full border-2 relative overflow-hidden"
                >
                  <span className="relative z-10">Book Free Counselling</span>
                  {/* Sheen Effect */}
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                </Button>
              </motion.div>
              <button className={`md:hidden p-2 ${(scrolled || !isHome) ? "text-slate-800" : "text-white"}`} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl pointer-events-auto">
              <div className="p-6 space-y-4 text-slate-800">
                 <div className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-2">Programs</div>
                 <Link href="/study-abroad" className="block text-lg font-bold text-slate-900" onClick={() => setIsOpen(false)}>Study Abroad</Link>
                 <Link href="/study-abroad-pathway" className="block text-lg font-bold text-slate-900" onClick={() => setIsOpen(false)}>Pathway Program</Link>
                 <div className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-2 pt-4">Other</div>
                 {navLinks.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block text-lg font-bold text-slate-900">{l.name}</Link>
                 ))}
                 <div className="pt-6">
                    <Button className="w-full h-14 text-lg font-black rounded-2xl" onClick={() => { setIsOpen(false); setShowLeadForm(true); }}>Talk to Expert</Button>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <LeadPopup isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} />
    </>
  )
}

function MenuLink({ href, name }: { href: string; name: string }) {
  return (
    <Link href={href} className="text-sm font-bold text-slate-600 hover:text-secondary transition-all hover:translate-x-1 inline-block">
      {name}
    </Link>
  )
}
