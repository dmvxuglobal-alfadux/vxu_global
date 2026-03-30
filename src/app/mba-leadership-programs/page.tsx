"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { LeadPopup } from "@/components/floating/LeadPopup"
import { 
  Rocket, Target, Zap, Globe2, CheckCircle2, 
  TrendingUp, GraduationCap, Users, ShieldCheck, 
  Briefcase, ArrowRight, BarChart3, Award, Trophy
} from "lucide-react"
import { motion } from "framer-motion"

export default function MBALeadershipPage() {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = React.useState(false)

  const ascentFeatures = [
    { 
      icon: <Rocket className="text-secondary" size={28} />, 
      title: "Fast-Track Deployment", 
      desc: "Go from entry-level to high-demand roles in months, not years." 
    },
    { 
      icon: <TrendingUp className="text-secondary" size={28} />, 
      title: "Salary Optimization", 
      desc: "Bridge the gap between your current pay and industry benchmarks." 
    }
  ]

  const elevateFeatures = [
    { 
      icon: <Trophy className="text-secondary" size={28} />, 
      title: "Leadership Elevation", 
      desc: "Go from mid-level manager to executive leadership roles with global credentials." 
    },
    { 
      icon: <Award className="text-secondary" size={28} />, 
      title: "ROI Optimized", 
      desc: "Degrees from SSBM (Swiss), Golden Gate University (USA), and SPJIMR." 
    }
  ]

  return (
    <div className="min-h-screen bg-white font-[var(--font-sans)]">
      <Navbar />

      {/* Shared Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary border border-secondary/30 mb-8 font-bold text-sm">
              <Zap size={16} className="animate-pulse" /> MBA & Leadership Programs
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight uppercase">
              Accelerate Your <span className="text-secondary">Career Growth...</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed">
              From entry-level fast-tracking to C-Suite leadership transitions. 
              Ivy League certifications, Global MBAs, and Doctorates designed for legends.
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

      {/* Path Choice Tabs-style Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Ascent Pathway */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h2 className="text-4xl font-black text-primary mb-4 italic">Ascent Program</h2>
              <p className="text-xs font-black text-secondary tracking-widest mb-6 uppercase border-b border-slate-200 pb-4">0-3 Years Experience</p>
              
              <h3 className="text-2xl font-black mb-6 text-slate-800">Boring job? Meagre salary? <span className="text-primary underline">Rise Above.</span></h3>
              <p className="text-slate-600 mb-8 font-medium leading-relaxed">Most professionals wait years for a 10% hike. Ascent candidates leapfrog the hierarchy by mastering the skills Google, Microsoft, and Amazon are actually hiring for.</p>
              
              <div className="space-y-6 mb-12 flex-grow">
                {ascentFeatures.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{f.title}</h4>
                      <p className="text-sm text-slate-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-10">
                <p className="text-xs font-black text-slate-400 mb-4 uppercase">Elite Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {['IIT Delhi', 'Harvard Business', 'IIIT-B', 'IIM Brands'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 rounded-full text-xs font-bold text-primary border border-slate-100">{tag}</span>
                  ))}
                </div>
              </div>

              <Button onClick={() => setIsLeadPopupOpen(true)} className="w-full h-16 text-lg font-black rounded-2xl bg-primary hover:bg-secondary">Fast-Track My Career</Button>
            </motion.div>

            {/* Elevate Pathway */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-primary text-white flex flex-col h-full relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -mr-32 -mt-32 group-hover:scale-110 transition-transform"></div>
              
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Trophy className="text-secondary" size={32} />
              </div>
              <h2 className="text-4xl font-black mb-4 italic">Elevate Program</h2>
              <p className="text-xs font-black text-secondary tracking-widest mb-6 uppercase border-b border-white/10 pb-4">3+ Years Experience</p>
              
              <h3 className="text-2xl font-black mb-6">Promotion Delayed? Layoff Fear? <span className="text-secondary">Rise & Rule.</span></h3>
              <p className="text-white/70 mb-8 font-medium leading-relaxed">The highest earners work with higher credentials. Elevate helps you transition to C-Suite roles with Global MBAs and DBAs recognized by Ivy League standards.</p>
              
              <div className="space-y-6 mb-12 flex-grow">
                {elevateFeatures.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{f.title}</h4>
                      <p className="text-sm text-white/50">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-10">
                <p className="text-xs font-black text-white/30 mb-4 uppercase tracking-widest">Premium Credentials</p>
                <div className="flex flex-wrap gap-2">
                  {['SSBM Switzerland', 'Paris School of Biz', 'GGU USA', 'SPJIMR Executive'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>

              <Button onClick={() => setIsLeadPopupOpen(true)} className="w-full h-16 text-lg font-black rounded-2xl bg-secondary text-white hover:bg-white hover:text-primary transition-all shadow-xl shadow-secondary/20">Secure My Advance</Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Global Hiring Network */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-primary mb-6">Elite Hiring Network</h2>
          <p className="text-lg text-slate-500 mb-16 max-w-2xl mx-auto font-medium">Join 50,000+ Alumni across 1800+ Top MNCs worldwide.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-40 hover:opacity-100 transition-opacity">
            {['GOOGLE', 'AMAZON', 'PWC', 'P&G', 'KPMG', 'META'].map(logo => (
              <div key={logo} className="p-8 border border-slate-200 rounded-3xl bg-white text-primary font-black text-lg hover:border-secondary transition-all">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-primary mb-2">400%+</div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Average ROI</p>
            </div>
            <div>
              <div className="text-5xl font-black text-primary mb-2">1800+</div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Hiring Partners</p>
            </div>
            <div>
              <div className="text-5xl font-black text-primary mb-2">14+</div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Salary Multiplier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient text-white mix-blend-overlay opacity-10"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-white/20">
            <Users size={48} className="text-secondary" />
          </div>
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight uppercase">Ready to Rise?</h2>
          <p className="text-2xl text-white/70 font-medium mb-12 leading-relaxed">
             Don't leave your career to chance. Blueprint your high-growth pathway today.
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsLeadPopupOpen(true)}
            className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-black h-20 px-14 text-2xl rounded-[2rem] shadow-2xl shadow-secondary/30"
          >
            Secure Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
      <LeadPopup isOpen={isLeadPopupOpen} onClose={() => setIsLeadPopupOpen(false)} />
    </div>
  )
}
