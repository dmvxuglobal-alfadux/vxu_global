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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {(limit ? ambassadors.slice(0, limit) : ambassadors).map((ambassador, i) => (
            <motion.div
              key={ambassador.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={ambassador.photo || "https://i.pravatar.cc/300"} 
                  alt={ambassador.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                 <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                   {ambassador.name}
                 </h3>
                 <p className="text-slate-300 text-sm font-medium mb-4">
                   {ambassador.college}
                 </p>
                 <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">
                      {ambassador.country}
                    </span>
                    <button className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-400 hover:text-white">
                      <ExternalLink size={14} />
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && ambassadors.length > limit && (
          <div className="text-center mt-12">
            <Link href="/ambassadors" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-colors shadow-lg shadow-primary/20 group">
               View All Ambassadors <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
