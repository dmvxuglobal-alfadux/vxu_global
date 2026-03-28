"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { LeadPopup } from "@/components/floating/LeadPopup"
import { 
  Trophy, Target, Zap, Globe2, CheckCircle2, 
  TrendingUp, GraduationCap, Users, ShieldCheck, 
  Briefcase, ArrowRight, BarChart3, Award
} from "lucide-react"
import { motion } from "framer-motion"

export default function ElevateProgramPage() {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = React.useState(false)

  const features = [
    { 
      icon: <Trophy className="text-secondary" size={28} />, 
      title: "Leadership Elevation", 
      desc: "Go from mid-level manager to executive leadership roles with global credentials." 
    },
    { 
      icon: <Award className="text-secondary" size={28} />, 
      title: "Credential Credibility", 
      desc: "Earn degrees from SSBM (Swiss), Golden Gate University (USA), and SPJIMR." 
    },
    { 
      icon: <Zap className="text-secondary" size={28} />, 
      title: "ROI Optimized", 
      desc: "High-impact programs with flexible EMIs and non-collateral loan tie-ups." 
    }
  ]

  const programs = [
    {
      title: "Global MBAs & DBAs",
      partner: "Swiss School & GGU USA",
      label: "EXECUTIVE TRACK",
      courses: [
        "Global DBA (Swiss SSBM)",
        "Global MBA (Paris School of Business)",
        "Executive MBA (SPJIMR)",
        "MS in Project Management (Paris)"
      ]
    },
    {
      title: "Advanced Masters (MS)",
      partner: "NJIT & ASU USA",
      label: "US TECH TRACK",
      courses: [
        "Master of Science - Arizona State",
        "Cloud Computing - NJIT",
        "AI-Powered Full Stack (Advanced)",
        "UI/UX Design Leadership"
      ]
    },
    {
      title: "Strategic Finance",
      partner: "IIM & IISC Brands",
      label: "LEADERSHIP TRACK",
      courses: [
        "Financial Risk Management (FRM)",
        "Supply Chain Transformation",
        "Equity Research (Advanced)",
        "Advanced Data Analytics"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white font-[var(--font-sans)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 to-primary/60"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary border border-secondary/30 mb-8 font-bold text-sm">
              <Trophy size={16} animate-pulse /> Elevate: 3+ Years Experience
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight uppercase">
              Rise & <span className="text-secondary">Rule...</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 leading-relaxed">
              Facing a Layoff fear or Promotion delay? Upgrade your expertise with elite Global MBAs and Doctorates (DBA) designed for mid-career legends.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                size="lg" 
                onClick={() => setIsLeadPopupOpen(true)}
                className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-black h-16 px-12 text-xl rounded-2xl shadow-2xl shadow-secondary/20"
              >
                Secure My Advancement <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Proof Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-black text-primary mb-6">Overcome the Plateau.</h2>
               <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                 The world's highest earners don't work harder—they work with higher credentials. Elevate helps you transition from an individual contributor to a decision-maker with degrees recognized by Ivy League standards.
               </p>
               
               <div className="grid grid-cols-1 gap-8">
                 {features.map((f, i) => (
                   <div key={i} className="flex gap-6 items-start">
                     <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                       {f.icon}
                     </div>
                     <div>
                       <h4 className="text-xl font-black text-primary mb-2">{f.title}</h4>
                       <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             
             <div className="relative">
               <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                 <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="Executives" 
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                 <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                    <p className="text-white text-xl font-bold italic">"From Senior Associate to AVP in just 14 months after finishing my Swiss MBA."</p>
                    <p className="text-secondary text-sm font-black mt-4 uppercase tracking-widest">— Karthik V., Alumni</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Program Core - Multi-Degree Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-primary mb-6 uppercase tracking-tight">The Executive Portfolio</h2>
            <p className="text-xl text-slate-500 font-medium">Degrees from the top 1% of global business schools with non-collateral financing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-secondary hover:shadow-2xl transition-all duration-500 flex flex-col h-full border-b-[6px] border-b-slate-100 hover:border-b-secondary">
                <span className="text-[10px] font-black text-secondary tracking-[0.2em] mb-4 bg-secondary/10 px-3 py-1.5 rounded-full self-start">
                    {p.label}
                </span>
                <h3 className="text-2xl font-black text-primary mb-1">{p.title}</h3>
                <p className="text-sm font-bold text-slate-400 mb-8 pb-4 border-b border-slate-50">{p.partner}</p>
                
                <ul className="space-y-5 mb-10 flex-grow">
                  {p.courses.map((c, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-700 font-bold group-hover:text-primary transition-colors">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0 text-xs font-black">✔</div>
                      {c}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => setIsLeadPopupOpen(true)}
                  className="w-full rounded-2xl font-black py-7 text-lg bg-primary hover:bg-secondary transition-all shadow-xl shadow-primary/10"
                >
                  Download Brochure
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network Banner */}
      <section className="py-20 bg-primary">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="text-center lg:text-left">
                  <h3 className="text-4xl font-black text-white mb-4 italic">The Global Network...</h3>
                  <p className="text-white/70 text-lg font-medium">Join 50,000+ Alumni across 1800+ Top MNCs worldwide.</p>
               </div>
               <div className="flex flex-wrap justify-center gap-4">
                  {['GOOGLE', 'MICROSOFT', 'AWS', 'PwC', 'KPMG', 'META'].map(logo => (
                    <div key={logo} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/50 text-sm font-black hover:text-white transition-colors cursor-default">
                        {logo}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA Final */}
      <section className="py-28 bg-white text-center">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="w-24 h-24 bg-gradient rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl rotate-3">
              <Trophy className="text-white" size={48} />
            </div>
            <h2 className="text-5xl font-black text-primary mb-8 tracking-tight uppercase">Ready to Rise & Rule?</h2>
            <p className="text-2xl text-slate-500 font-medium mb-12 leading-relaxed">
               Don't let your plateau become your ceiling. Let's blueprint your path to the C-Suite today.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsLeadPopupOpen(true)}
              className="bg-secondary text-white hover:bg-primary transition-all font-black h-20 px-14 text-2xl rounded-[2rem] shadow-2xl shadow-secondary/30 hover:scale-105"
            >
              Secure Free Slot Now
            </Button>
            <p className="mt-8 text-slate-400 font-bold flex items-center justify-center gap-2">
               <ShieldCheck size={18} className="text-green-500" /> Safe & Secure Path Powered by VXU Global
            </p>
         </div>
      </section>

      <Footer />
      <LeadPopup isOpen={isLeadPopupOpen} onClose={() => setIsLeadPopupOpen(false)} />
    </div>
  )
}
