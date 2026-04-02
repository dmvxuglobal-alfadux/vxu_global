"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Award, ArrowRight } from "lucide-react"

export interface Ambassador {
  id: string
  name: string
  college: string
  country: string
  photo: string
}

export function BrandAmbassadors({ 
  ambassadors,
  limit = 8,
  showViewAll = true
}: { 
  ambassadors: Ambassador[]
  limit?: number
  showViewAll?: boolean
}) {
  return (
    <section className="py-24 bg-white relative" id="ambassadors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
             <Award className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Our Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ambassadors</span>
          </h2>
          <p className="text-lg text-primary/80">
            Connect with our representatives currently studying in top universities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(limit ? ambassadors.slice(0, limit) : ambassadors).map((ambassador, i) => (
            <motion.div
              key={ambassador.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 bg-white border border-slate-100"
            >
              {/* Image with high-end filter */}
              <div className="absolute inset-0">
                <img 
                  src={ambassador.photo || "https://i.pravatar.cc/400"} 
                  alt={ambassador.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white">Global Student Rep</span>
                </div>
              </div>
              
              {/* Glass Info Panel */}
              <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-center">
                 <h3 className="text-xl font-black text-white mb-1">
                   {ambassador.name}
                 </h3>
                 <p className="text-secondary font-black text-[9px] uppercase tracking-[0.2em] mb-4">
                   Representing {ambassador.country}
                 </p>
                 
                 <div className="h-px bg-white/10 w-full mb-4"></div>
                 
                 <p className="text-white/70 text-[11px] font-bold italic line-clamp-2 mb-0">
                   {ambassador.college}
                 </p>

                 <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500 mt-0 group-hover:mt-4 opacity-0 group-hover:opacity-100">
                    <button 
                      onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                      className="w-full h-full bg-secondary text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-colors"
                    >
                      Connect with Rep <ExternalLink size={14} />
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && (ambassadors.length > limit || limit === 0) && (
          <div className="text-center mt-20">
            <Link href="/ambassadors" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#001265] text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary transition-all shadow-2xl shadow-primary/20 group">
               Explore Global Network <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
