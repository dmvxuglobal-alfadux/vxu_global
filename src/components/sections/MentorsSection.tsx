"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, Linkedin, ArrowRight } from "lucide-react"

export interface Mentor {
  id: string
  name: string
  photo: string
  expertise: string
  experience: string
  company: string
}

export function MentorsSection({ 
  mentors,
  limit = 8,
  showViewAll = true
}: { 
  mentors: Mentor[]
  limit?: number
  showViewAll?: boolean
}) {
  return (
    <section className="py-24 bg-white relative" id="mentors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industry Leaders</span>
            </h2>
            <p className="text-lg text-primary/80">
              Guidance and 1-on-1 mentorship from professionals actively working in your dream companies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(limit ? mentors.slice(0, limit) : mentors).map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
              
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-tr from-primary to-secondary">
                   <img 
                     src={mentor.photo || "https://i.pravatar.cc/150"} 
                     alt={mentor.name} 
                     className="w-full h-full object-cover rounded-full border-4 border-white"
                   />
                </div>
              </div>

              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-blue-600 transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-primary/70 font-medium text-sm mb-4">
                  {mentor.expertise}
                </p>
                
                <div className="flex flex-col gap-3 text-sm text-primary/80 bg-white rounded-2xl p-4 mb-6">
                   <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2"><Briefcase size={14} className="text-primary/60"/> Company</span>
                      <span className="font-semibold text-primary">{mentor.company}</span>
                   </div>
                   <div className="flex items-center justify-between border-t border-slate-200/60 pt-3">
                      <span className="text-primary/70">Experience</span>
                      <span className="font-semibold text-primary">{mentor.experience}</span>
                   </div>
                </div>

                <button className="w-full py-3 rounded-full border-2 border-slate-100 text-primary font-bold hover:bg-primary hover:text-white hover:border-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md">
                   <Linkedin size={18} /> Connect
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && mentors.length > limit && (
          <div className="text-center mt-12">
            <Link href="/mentors" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-colors shadow-lg shadow-primary/20 group">
               View All Mentors <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
