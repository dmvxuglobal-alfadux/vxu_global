"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { db, Announcement } from "@/lib/db"
import { LeadPopup } from "@/components/floating/LeadPopup"

export function Navbar() {
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
      <header className="fixed top-0 w-full z-50 transition-all duration-300">
        <AnimatePresence>
          {announcement && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="bg-gradient-to-r from-red-600 to-rose-600 text-white overflow-hidden relative z-[60]"
            >
              <div className="container mx-auto px-4 py-2 flex items-center justify-center text-sm font-bold gap-3">
                <span className="leading-snug">{announcement.text}</span>
                <button onClick={() => setShowLeadForm(true)} className="bg-white/20 hover:bg-white text-white hover:text-red-600 px-3 py-1 rounded-full text-xs">Explore Now</button>
                <button onClick={() => setAnnouncement(null)} className="absolute right-4"><X size={14} /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b" : "bg-white/10 backdrop-blur-sm"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link href="/"><img src="/logo.png" alt="Logo" className="h-10" /></Link>

              <div className="hidden md:flex items-center gap-6">
                <div className="relative group py-8">
                  <span className="text-sm font-bold text-slate-700 cursor-pointer flex items-center gap-1 group-hover:text-primary transition-colors">
                    Study Abroad <Globe2 size={14} />
                  </span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1240px] bg-white shadow-2xl rounded-[2rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-10 z-50 border border-slate-100 grid grid-cols-4 gap-12">
                     <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b pb-2">Top Tiers</h4>
                        <div className="flex flex-col gap-3">
                           {studyAbroadLinks.slice(0, 5).map(l => <MenuLink key={l.href} {...l} />)}
                        </div>
                     </div>
                     <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b pb-2">Europe Core</h4>
                        <div className="flex flex-col gap-3">
                           {studyAbroadLinks.slice(5, 10).map(l => <MenuLink key={l.href} {...l} />)}
                        </div>
                     </div>
                     <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b pb-2">Safe & Budget</h4>
                        <div className="flex flex-col gap-3">
                           {studyAbroadLinks.slice(10, 15).map(l => <MenuLink key={l.href} {...l} />)}
                        </div>
                     </div>
                     <div className="bg-slate-50 -m-10 p-10 ml-0 rounded-r-[2rem]">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 border-b pb-2">Strategic</h4>
                        <div className="flex flex-col gap-3">
                           {studyAbroadLinks.slice(15).map(l => <MenuLink key={l.href} {...l} />)}
                           <Link href="/study-abroad" className="text-primary font-black text-sm mt-4 inline-flex items-center gap-1">View All <ArrowRight size={14}/></Link>
                        </div>
                     </div>
                  </div>
                </div>

                <Link href="/study-abroad-pathway" className="text-sm font-bold text-slate-700 hover:text-primary relative group">
                  Pathway Program
                  <span className="absolute -top-4 -right-2 bg-secondary text-white text-[8px] px-1.5 py-0.5 rounded-full animate-pulse">NEW</span>
                </Link>

                {navLinks.map(l => <Link key={l.href} href={l.href} className="text-sm font-bold text-slate-700 hover:text-primary">{l.name}</Link>)}
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" className="hidden sm:flex border-primary text-primary font-bold">Admin Login</Button>
                <Button variant="gradient" onClick={() => setShowLeadForm(true)} className="rounded-full px-6 font-bold shadow-xl shadow-primary/20">Book Counselling</Button>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden bg-white border-b overflow-hidden shadow-2xl">
              <div className="p-6 space-y-4">
                 {navLinks.map(l => <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block text-lg font-bold text-slate-800">{l.name}</Link>)}
                 <Button className="w-full h-14 text-lg font-black" onClick={() => { setIsOpen(false); setShowLeadForm(true); }}>Talk to Expert</Button>
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
    <Link href={href} className="text-sm font-bold text-slate-600 hover:text-secondary transition-all hover:translate-x-1">
      {name}
    </Link>
  )
}
