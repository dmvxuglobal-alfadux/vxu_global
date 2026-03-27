"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Microscope, GraduationCap, Globe2, CheckCircle2, Award, Briefcase, Zap, BookOpen, MapPin } from "lucide-react"

const mbbsData = {
  price: "15.5 Lakhs",
  seatBooking: "25,000 INR",
  duration: "5 Years Course + 1 Year Internship",
  approvals: "WHO & NMC (MCI) Approved",
  destinations: [
    { country: "Kazakhstan", image: "https://images.pexels.com/photos/15720042/pexels-photo-15720042.jpeg?auto=compress&cs=tinysrgb&w=800", universities: ["West Marat Ospanov Medical University", "Semey State Medical University", "IMS Almaty"] },
    { country: "Kyrgyz Republic", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&fit=crop", universities: ["Osh State Medical University", "Jalal-Abad State Medical University", "International School of Medicine (ISM)"] },
    { country: "Uzbekistan", image: "https://images.pexels.com/photos/14841785/pexels-photo-14841785.jpeg?auto=compress&cs=tinysrgb&w=800", universities: ["Samarkand State Medical University", "Tashkent Medical Academy"] },
    { country: "Tajikistan", image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800", universities: ["Avicenna Tajik State Medical University"] }
  ],
  eligibility: [
    "12th Standard with minimum 50% in PCB",
    "Must be NEET-UG Qualified",
    "Minimum age 17 years"
  ]
}

export default function MBBSAbroadPage() {
  return (
    <div className="min-h-screen bg-white font-[var(--font-sans)]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-28 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary opacity-80 mix-blend-multiply" />
          <img src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=1600&fit=crop" className="w-full h-full object-cover opacity-30" alt="Medical Students" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl pt-16 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary border border-secondary/30 mb-6 font-bold text-sm tracking-wide">
             <Microscope size={16} /> Global Medical Education
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Study MBBS Abroad <br/> starting @ <span className="text-secondary">{mbbsData.price}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed max-w-3xl mx-auto">
            Become a world-class doctor. WHO and NMC approved top-tier medical universities in Kazakhstan, Kyrgyzstan, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
              className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-bold h-14 px-10 text-lg rounded-full shadow-xl"
            >
              Book Your Seat for {mbbsData.seatBooking}
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Specs */}
      <div className="bg-slate-50 border-b relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-slate-200">
            <div className="py-10 px-8 flex items-center gap-5 group">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all"><BookOpen size={28} /></div>
               <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Duration</p>
                  <p className="text-xl font-black text-primary">{mbbsData.duration}</p>
               </div>
            </div>
            <div className="py-10 px-8 flex items-center gap-5 group">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all"><Award size={28} /></div>
               <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Approval</p>
                  <p className="text-xl font-black text-primary">{mbbsData.approvals}</p>
               </div>
            </div>
            <div className="py-10 px-8 flex items-center gap-5 group">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all"><Globe2 size={28} /></div>
               <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Eligibility</p>
                  <p className="text-xl font-black text-primary">PCB 50% + NEET</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Destinations Grid */}
      <div className="container mx-auto px-4 py-24 pb-28">
         <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-primary mb-4">Top MCI/NMC Approved Destinations</h2>
            <p className="text-lg text-slate-500 font-medium">Explore the best medical universities offering high-quality education at an affordable price.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
           {mbbsData.destinations.map((dest, index) => (
             <motion.div 
               key={index} 
               initial={{opacity:0, y:30}} 
               whileInView={{opacity:1, y:0}} 
               viewport={{once:true}}
               className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row group"
             >
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                   <img src={dest.image} alt={dest.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
                   <div>
                      <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                         <MapPin size={24} className="text-secondary" /> {dest.country}
                      </h3>
                      <ul className="space-y-4">
                         {dest.universities.map((uni, idx) => (
                           <li key={idx} className="flex items-start gap-3 text-sm font-bold text-primary/80">
                              <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                              {uni}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <Button 
                    onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                    className="mt-10 bg-primary text-white hover:bg-secondary h-12 rounded-xl text-sm font-bold transition-all w-full"
                   >
                     Apply Now & Book Seat
                   </Button>
                </div>
             </motion.div>
           ))}
         </div>

         {/* Eligibility & Benefits */}
         <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
               <h2 className="text-4xl font-black text-primary mb-8 leading-tight">Minimum Eligibility to <span className="text-secondary">Study MBBS Abroad</span></h2>
               <div className="space-y-6">
                  {mbbsData.eligibility.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                       <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0"><Zap size={18} /></div>
                       <p className="text-lg font-bold text-primary">{item}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-8">Why VXU for MBBS?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <BenefitItem icon={<Globe2 size={24}/>} title="Direct Admissions" desc="Complete support from application to university placement." />
                     <BenefitItem icon={<Briefcase size={24}/>} title="Visa Guaranteed" desc="100% assistance with documentation and travel." />
                     <BenefitItem icon={<GraduationCap size={24}/>} title="FMGE Training" desc="Integrated NEXT/FMGE coaching with top faculty." />
                     <BenefitItem icon={<Award size={24}/>} title="WHO Approved" desc="Degrees globally recognized across 190+ countries." />
                  </div>
               </div>
               <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                  <Microscope size={200} />
               </div>
            </div>
         </div>
         
         {/* Final CTA */}
         <div className="mt-32 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">Ready to wear your white coat?</h2>
            <Button 
              size="lg" 
              onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
              className="bg-secondary text-white hover:bg-primary transition-all font-black h-16 px-12 text-xl rounded-full shadow-2xl"
            >
              Consult with Admission Experts <ArrowRight size={24} className="ml-2" />
            </Button>
         </div>
      </div>

      <Footer />
    </div>
  )
}

function BenefitItem({icon, title, desc}: any) {
  return (
    <div className="flex flex-col gap-3">
       <div className="text-secondary">{icon}</div>
       <h4 className="font-bold text-xl">{title}</h4>
       <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
