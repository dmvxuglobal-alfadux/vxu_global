"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { LeadPopup } from "@/components/floating/LeadPopup"
import { 
  Rocket, Target, Zap, Globe2, CheckCircle2, 
  TrendingUp, GraduationCap, Users, ShieldCheck, 
  Briefcase, ArrowRight, BarChart3, Award
} from "lucide-react"
import { motion } from "framer-motion"

export default function AscentProgramPage() {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = React.useState(false)

  const features = [
    { 
      icon: <Rocket className="text-secondary" size={28} />, 
      title: "Fast-Track Deployment", 
      desc: "Go from entry-level to high-demand roles in months, not years." 
    },
    { 
      icon: <TrendingUp className="text-secondary" size={28} />, 
      title: "Salary Optimization", 
      desc: "Bridge the gap between your current pay and industry benchmarks." 
    },
    { 
      icon: <Target className="text-secondary" size={28} />, 
      title: "Skill Precision", 
      desc: "Curated programs from IITs & Harvard focused on actual job tasks." 
    }
  ]

  const streams = [
    {
      title: "AI & Data Science",
      partner: "IIT Delhi & Harvard",
      courses: [
        "Quantum Computing & ML",
        "Generative AI (5 Months)",
        "AI for Business Management"
      ]
    },
    {
      title: "Software Engineering",
      partner: "IIIT Bangalore",
      courses: [
        "Full Stack Development",
        "Cyber Security Expert",
        "Cloud Architecture"
      ]
    },
    {
      title: "Management & Finance",
      partner: "IIM & Elite B-Schools",
      courses: [
        "Equity Research & Analysis",
        "HR Analytics & Strategy",
        "Digital Marketing Leadership"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white font-[var(--font-sans)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary border border-secondary/30 mb-8 font-bold text-sm">
              <Zap size={16} animate-pulse /> Ascent: 0-3 Years Experience
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              Boring Job? Meagre Salary? <br/>
              <span className="text-secondary">Rise Above.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed">
              Don't settle for "okay." Invest in yourself and fast-track your early career with top-tier certifications from IIT Delhi, IIIT-B, and Harvard.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsLeadPopupOpen(true)}
              className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-black h-16 px-10 text-xl rounded-2xl shadow-2xl shadow-secondary/20"
            >
              Get Free Career Counselling <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Frustration Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&fit=crop" 
                className="rounded-[3rem] shadow-2xl" 
                alt="Career Growth" 
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex gap-2 text-amber-400 mb-2">
                  {[1,2,3,4,5].map(i => <Award key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-sm font-bold text-primary">"The transition from a junior role to a lead in 6 months was life-changing."</p>
                <p className="text-[10px] text-slate-400 mt-2">— Rahul S., Software Engineer</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-primary mb-6">Invest in Yourself.</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Most professionals wait years for a 10% hike. Ascent candidates leapfrog the hierarchy by mastering the skills Google, Microsoft, and Amazon are actually hiring for.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">{f.title}</h4>
                      <p className="text-sm text-slate-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Core */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-primary mb-6">Elite Program Streams</h2>
            <p className="text-lg text-slate-500 font-medium">Industry-aligned curriculums that translate directly to PPO offers and salary hikes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {streams.map((s, i) => (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <h3 className="text-2xl font-black text-primary mb-2">{s.title}</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">
                  Partner: {s.partner}
                </p>
                <ul className="space-y-4 mb-8">
                  {s.courses.map((c, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={18} />
                      {c}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => setIsLeadPopupOpen(true)}
                  className="w-full rounded-xl font-bold py-6 hover:bg-primary transition-colors"
                  variant="outline"
                >
                  View Curriculum
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-black mb-6">Built for the Top 1%.</h2>
          <p className="text-lg text-white/60 mb-16 max-w-2xl mx-auto">Access a massive hiring network of 1800+ top MNCs including Google, Microsoft, and Amazon.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-center p-8 border border-white/10 rounded-2xl grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-black">GOOGLE</span>
            </div>
            <div className="flex items-center justify-center p-8 border border-white/10 rounded-2xl grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-black">AMAZON</span>
            </div>
            <div className="flex items-center justify-center p-8 border border-white/10 rounded-2xl grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-black">MICROSOFT</span>
            </div>
            <div className="flex items-center justify-center p-8 border border-white/10 rounded-2xl grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-black">META</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Let's Connect */}
      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Users className="text-primary" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">Ready to Rise?</h2>
            <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed">
              One career counselling session can save you 2 years of trial and error. Let's blueprint your path to the top.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsLeadPopupOpen(true)}
              className="bg-secondary text-white hover:bg-primary transition-all font-black h-16 px-10 text-xl rounded-2xl shadow-xl shadow-secondary/10"
            >
              Secure Free Slot Now
            </Button>
         </div>
      </section>

      <Footer />
      <LeadPopup isOpen={isLeadPopupOpen} onClose={() => setIsLeadPopupOpen(false)} />
    </div>
  )
}
