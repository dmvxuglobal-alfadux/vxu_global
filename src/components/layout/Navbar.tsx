"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { db, Announcement } from "@/lib/db"
import { LeadPopup } from "@/components/floating/LeadPopup"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false) // Keeping state if needed for minor logic, but UI will be static
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
      <header className="fixed top-0 w-full z-50 pointer-events-none">
        {/* Fixed Announcement Section */}
        <div className="pointer-events-auto">
          <AnimatePresence>
            {announcement && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="bg-[#E31837] text-white overflow-hidden relative shadow-lg"
              >
                <div className="container mx-auto px-4 py-2 flex items-center justify-center text-xs md:text-sm font-bold gap-3">
                  <span className="leading-snug pr-6 md:pr-0">{announcement.text}</span>
                  <button onClick={() => setShowLeadForm(true)} className="bg-white/20 hover:bg-white text-white hover:text-red-600 px-3 py-1 rounded-full text-xs transition-colors">Explore Now</button>
                  <button onClick={() => setAnnouncement(null)} className="absolute right-4"><X size={14} /></button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Navbar - STATIC WHITE BACKGROUND ALWAYS */}
        <div className="pointer-events-auto bg-white shadow-md border-b border-slate-100 transition-all duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link href="/"><img src="/logo.png" alt="VXU Global" className="h-10 lg:h-12 object-contain" /></Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <div className="relative group py-8">
                  <span className="text-sm font-bold text-slate-800 cursor-pointer flex items-center gap-1 group-hover:text-primary transition-colors">
                    Study Abroad <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </span>
                  
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-0 w-[95vw] lg:w-[1100px] bg-white shadow-2xl rounded-[2.5rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden border border-slate-100 grid md:grid-cols-4 gap-0 pointer-events-auto">
                     <div className="p-8 lg:p-10">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-50 pb-2">Top Tiers</h4>
                        <div className="flex flex-col gap-3.5">
                           {studyAbroadLinks.slice(0, 5).map(l => <MenuLink key={l.href} {...l} />)}
                        </div>
                     </div>
                     <div className="p-8 lg:p-10 bg-slate-50/30">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Europe Core</h4>
                        <div className="flex flex-col gap-3.5">
                           {studyAbroadLinks.slice(5, 10).map(l => <MenuLink key={l.href} {...l} />)}
                        </div>
                     </div>
                     <div className="p-8 lg:p-10">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-50 pb-2">Safe & Budget</h4>
                        <div className="flex flex-col gap-3.5">
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

                <Link href="/study-abroad-pathway" className="text-sm font-bold text-slate-800 hover:text-primary relative group">
                  Pathway Program
                  <span className="absolute -top-4 -right-2 bg-secondary text-white text-[8px] px-1.5 py-0.5 rounded-full animate-pulse font-black shadow-sm">NEW</span>
                </Link>

                {navLinks.map(l => (
                  <Link key={l.href} href={l.href} className="text-sm font-bold text-slate-800 hover:text-primary transition-colors">{l.name}</Link>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link href="/login" className="hidden lg:block">
                  <Button variant="ghost" className="text-slate-600 font-bold hover:text-primary">Admin Login</Button>
                </Link>
                <Button variant="gradient" onClick={() => setShowLeadForm(true)} className="rounded-full px-6 md:px-8 font-bold shadow-xl shadow-primary/20 scale-90 md:scale-100">Book Now</Button>
                <button className="md:hidden p-2 text-slate-800" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'calc(100vh - 5rem)', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }} 
              className="md:hidden bg-white overflow-y-auto pointer-events-auto border-t border-slate-50"
            >
              <div className="p-8 space-y-8 pb-32">
                 <div className="space-y-4">
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-50 pb-2">Destinations</div>
                   <div className="grid grid-cols-2 gap-4">
                      {studyAbroadLinks.slice(0, 10).map(l => (
                        <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-800 hover:text-primary">{l.name}</Link>
                      ))}
                   </div>
                   <Link href="/study-abroad" className="inline-flex items-center gap-2 text-xs font-black text-secondary pt-2" onClick={() => setIsOpen(false)}>
                     View All 30+ <ArrowRight size={14}/>
                   </Link>
                 </div>

                 <div className="space-y-4">
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-50 pb-2">Programs</div>
                   <Link href="/study-abroad-pathway" className="block text-lg font-black text-primary flex items-center justify-between" onClick={() => setIsOpen(false)}>
                     Pathway Program <span className="text-[8px] bg-secondary text-white px-1.5 py-0.5 rounded-full">NEW</span>
                   </Link>
                   {navLinks.slice(0, 1).map(l => (
                     <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block text-lg font-bold text-slate-900">{l.name}</Link>
                   ))}
                 </div>

                 <div className="space-y-4">
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-50 pb-2">Resources</div>
                   {navLinks.slice(1).map(l => (
                     <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block text-md font-bold text-slate-700">{l.name}</Link>
                   ))}
                 </div>

                 <div className="pt-8 border-t border-slate-100 grid grid-cols-1 gap-4">
                    <Button variant="gradient" className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-primary/20" onClick={() => { setIsOpen(false); setShowLeadForm(true); }}>Book Free Consultation</Button>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full h-12 font-bold text-slate-400">Admin Login</Button>
                    </Link>
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

function MenuLink({ href, name }: { href: string; name: string }) {
  return (
    <Link href={href} className="text-sm font-bold text-slate-600 hover:text-secondary transition-all hover:translate-x-1 inline-block">
      {name}
    </Link>
  )
}
