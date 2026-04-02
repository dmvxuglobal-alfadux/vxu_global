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
  linkedinUrl?: string
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(limit ? mentors.slice(0, limit) : mentors).map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-slate-100 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              
              <div className="relative mb-8 text-center">
                <div className="w-28 h-28 mx-auto rounded-3xl p-1 bg-gradient-to-tr from-primary via-blue-500 to-secondary transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-lg shadow-primary/20">
                   <img 
                     src={mentor.photo || "https://i.pravatar.cc/150"} 
                     alt={mentor.name} 
                     className="w-full h-full object-cover rounded-[1.25rem] border-2 border-white"
                   />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-slate-50 flex items-center gap-1">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Available</span>
                </div>
              </div>

              <div className="text-center flex flex-col flex-1">
                <h3 className="text-xl font-black text-primary mb-1 group-hover:text-blue-600 transition-colors leading-tight">
                  {mentor.name}
                </h3>
                <p className="text-secondary font-black text-[10px] uppercase tracking-[0.2em] mb-6">
                  {mentor.expertise}
                </p>
                
                <div className="space-y-4 text-sm text-primary/80 bg-slate-50/50 border border-slate-100 rounded-[2rem] p-5 mb-8 flex-1">
                   <div className="flex flex-col gap-1 text-left">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <Briefcase size={10} className="text-primary/40"/> Current Company
                      </span>
                      <span className="font-bold text-slate-700 text-sm whitespace-nowrap overflow-hidden text-ellipsis">{mentor.company}</span>
                   </div>
                   <div className="h-px bg-slate-200/50 w-full"></div>
                   <div className="flex flex-col gap-1 text-left">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Expertise Level</span>
                      <span className="font-bold text-primary text-sm">{mentor.experience} Industry Exp</span>
                   </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={mentor.linkedinUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full h-12 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2">
                       <Linkedin size={14} className="mb-0.5" /> Profile
                    </button>
                  </a>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                    className="w-12 h-12 rounded-2xl border-2 border-slate-100 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && (mentors.length > limit || limit === 0) && (
          <div className="text-center mt-20">
            <Link href="/mentors" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#001265] text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary transition-all shadow-2xl shadow-primary/20 group">
               Explore More Mentors <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
