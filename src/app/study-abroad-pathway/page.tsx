"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Globe2, GraduationCap, ArrowRight, BookOpen, MapPin, Building2, Star } from "lucide-react"

const studyAbroadData = [
  {
    country: "United States",
    flag: "🇺🇸",
    programs: [
      { name: "MBA", university: "Northeastern University" },
      { name: "MBA", university: "Clark University" },
      { name: "MBA", university: "Drexel University" },
      { name: "MPS in Analytics", university: "Northeastern University" }
    ]
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    programs: [
      { name: "Master of Business Administration (90 ECTS)", university: "SRH University of Applied Sciences" },
      { name: "MA International Business & Leadership", university: "SRH University of Applied Sciences" },
      { name: "Master of Business Administration (90 ECTS)", university: "International School of Management" },
      { name: "MSc International Logistics and Supply Chain Management", university: "International School of Management" }
    ]
  },
  {
    country: "France",
    flag: "🇫🇷",
    programs: [
      { name: "Master of Business Administration", university: "Paris School of Business" },
      { name: "MSc Corporate Finance", university: "KEDGE Business School" },
      { name: "MSc Marketing", university: "KEDGE Business School" },
      { name: "MSc in Luxury and Fashion Management", university: "Paris School of Business" }
    ]
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    programs: [
      { name: "Master of Business Administration", university: "University of Sunderland" },
      { name: "MBA with Work Placement", university: "University of Roehampton" },
      { name: "MSc Data Science with Work Placement", university: "University of Roehampton" },
      { name: "MSc International Business Management", university: "St Mary's University Twickenham London" }
    ]
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
    programs: [
      { name: "MSc in Data Analytics", university: "Dundalk Institute of Technology" },
      { name: "MBS in Entrepreneurship and Marketing", university: "Dundalk Institute of Technology" }
    ]
  },
  {
    country: "Finland",
    flag: "🇫🇮",
    programs: [
      { name: "MBA (Business Informatics)", university: "Metropolia University of Applied Sciences" },
      { name: "MBA (International Business Management)", university: "Seinäjoki University of Applied Sciences (SeAMK)" }
    ]
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    programs: [
      { name: "MS in Project Management", university: "Northeastern University, Canada" },
      { name: "MPS in Analytics", university: "Northeastern University, Canada" },
      { name: "MBA in Technology, Innovation and Entrepreneurship", university: "International Business University" },
      { name: "Master of Business Administration", university: "University Canada West" }
    ]
  }
]

export default function StudyAbroadPathwayPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-[var(--font-sans)]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-28 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary opacity-90 mix-blend-multiply" />
          <img src="https://images.unsplash.com/photo-152305035309e-ad148c0201ee?w=1600&fit=crop" className="w-full h-full object-cover opacity-20" alt="Students Abroad" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl pt-16 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary border border-secondary/30 mb-6 font-bold text-sm tracking-wide">
             <Globe2 size={16} /> Global Pathway Programs
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Your Fast-Track to <span className="text-secondary">Study Abroad</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed max-w-3xl mx-auto">
            Bridge the gap to global top-tier universities with our specialized pathway programs across 7+ countries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
              className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-bold h-14 px-10 text-lg rounded-full shadow-xl"
            >
              Check Eligibility Now
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white border-b shadow-sm relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            <div className="py-8 px-4 text-center group">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Destinations</p>
               <p className="text-3xl font-black text-primary">7+ Countries</p>
            </div>
            <div className="py-8 px-4 text-center group">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">University Partners</p>
               <p className="text-3xl font-black text-primary">200+</p>
            </div>
            <div className="py-8 px-4 text-center group">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Post-Study Work</p>
               <p className="text-3xl font-black text-primary">Up to 3 Yrs</p>
            </div>
            <div className="py-8 px-4 text-center group">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Visa Success</p>
               <p className="text-3xl font-black text-primary">98%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Destinations Grid */}
      <div className="container mx-auto px-4 py-20 pb-28">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-primary mb-4">Top Destinations & Programs</h2>
          <p className="text-lg text-slate-500 font-medium">Explore handpicked programs in the world's leading education hubs tailored for your success.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {studyAbroadData.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="bg-primary p-8 text-white flex items-center justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{dest.flag}</span>
                    <h3 className="text-3xl font-bold tracking-tight">{dest.country}</h3>
                  </div>
                  <p className="text-white/70 font-medium">Top University Programs</p>
                </div>
                <div className="absolute right-[-10px] top-[-10px] opacity-10">
                   <Globe2 size={150} />
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  {dest.programs.map((prog, pIdx) => (
                    <div key={pIdx} className="flex flex-col gap-1 border-b border-slate-50 pb-4 group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:bg-primary group-hover:text-white transition-colors">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-primary mb-1">{prog.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <Building2 size={14} className="text-slate-400" />
                            {prog.university}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button 
                    onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                    className="w-full bg-slate-50 text-primary border-2 border-slate-100 h-14 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-3"
                  >
                    Get Detailed Brochure & Fees <ArrowRight size={20} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-24 bg-gradient-to-br from-[#001265] to-secondary rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to start your Global Journey?</h2>
            <p className="text-xl text-white/90 font-medium mb-12 leading-relaxed">
              Book a free counselling session today and let our experts guide you to your dream international university.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                size="lg" 
                onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                className="bg-white text-primary hover:bg-secondary hover:text-white transition-all font-black h-16 px-12 text-xl rounded-full shadow-2xl"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
