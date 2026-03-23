"use client"

import { motion } from "framer-motion"

export function PartnerUniversities() {
  const partners = [
    { name: "University of Toronto", domain: "https://utoronto.ca" },
    { name: "Stanford University", domain: "https://stanford.edu" },
    { name: "Oxford University", domain: "https://ox.ac.uk" },
    { name: "MIT", domain: "https://mit.edu" },
    { name: "Melbourne Uni", domain: "https://unimelb.edu.au" },
    { name: "UCL", domain: "https://ucl.ac.uk" },
    { name: "Harvard", domain: "https://harvard.edu" },
    { name: "UC Berkeley", domain: "https://berkeley.edu" },
  ]

  // Duplicate for seamless infinite slider
  const sliderItems = [...partners, ...partners]

  return (
    <section className="py-24 bg-primary overflow-hidden relative" id="destinations">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Global Network
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            20+ Partner Universities
          </h2>
       </div>

       {/* Infinite Slider Implementation */}
       <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex flex-nowrap gap-8 py-8"
          >
             {sliderItems.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-64 h-32 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group/item cursor-pointer px-6 gap-4"
                >
                   <div className="w-14 h-14 bg-white rounded-full p-2 flex items-center justify-center shrink-0 shadow-md">
                     <img 
                       src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${partner.domain}&size=128`} 
                       alt={partner.name} 
                       className="w-full h-full object-contain" 
                     />
                   </div>
                   <span className="text-lg font-bold text-slate-400 group-hover/item:text-white transition-colors leading-tight">
                     {partner.name}
                   </span>
                </div>
             ))}
          </motion.div>
       </div>
    </section>
  )
}
