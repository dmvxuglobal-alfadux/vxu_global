"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, MapPin, DollarSign, ArrowUpRight, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export function FeaturedPrograms() {
  const [selectedProgram, setSelectedProgram] = React.useState<string | null>(null)

  const programs = [
    {
      title: "Artificial Intelligence & Machine Learning",
      duration: "6 Months",
      country: "IIT Delhi",
      salary: "₹15L+ Potential",
      link: "/job-ready-programs#analytics",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop"
    },
    {
      title: "Business Analytics & Consulting",
      duration: "5 Months",
      country: "PwC Academy",
      salary: "₹12L+ Potential",
      link: "/job-ready-programs#analytics",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop"
    },
    {
      title: "Cloud Computing & DevOps",
      duration: "8 Months",
      country: "Top Tier",
      salary: "₹18L+ Potential",
      link: "/job-ready-programs#tech",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
    }
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Programs</span>
            </h2>
            <p className="text-lg text-primary/80">
              Future-proof your career with our most sought-after tech certifications and degrees.
            </p>
          </div>
          <Link href="/job-ready-programs" className="whitespace-nowrap font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2 group transition-colors">
            View All Programs <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100/50 group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-blue-600 shadow-sm inline-flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /> Popular
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>
                
                <div className="space-y-4 text-sm text-primary/80 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary/70">
                      <Clock size={16} />
                    </div>
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary/70">
                      <MapPin size={16} />
                    </div>
                    {program.country}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <DollarSign size={16} />
                    </div>
                    <span className="text-emerald-600 font-bold">{program.salary}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button onClick={() => setSelectedProgram(program.title)} className="w-full flex items-center justify-center py-4 rounded-xl bg-white text-primary font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300 border border-slate-200 hover:border-blue-600">
                    Get Syllabus
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pop-up Syllabus Request Form */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 text-primary/60 hover:text-primary z-10"
              >
                <X size={24} />
              </button>

              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 w-full"></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Get Detailed Syllabus</h3>
                <p className="text-primary/70 mb-6 text-sm">
                  Register below to instantly receive the curriculum and placement details for <strong className="text-primary">{selectedProgram}</strong>.
                </p>

                <form className="space-y-4" onSubmit={async (e) => { 
                  e.preventDefault(); 
                  const btn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
                  const originalText = btn.innerText;
                  btn.innerText = "Processing...";
                  btn.disabled = true;

                  const formData = new FormData(e.currentTarget);
                  const payload = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    qualification: formData.get("graduation"),
                    interest: `Syllabus: ${selectedProgram}`,
                  };

                  try {
                    const res = await fetch("/api/leads", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });
                    
                    if (res.ok) {
                      alert(`Success! We've sent the syllabus for ${selectedProgram} to your email/whatsapp.`); 
                      setSelectedProgram(null); 
                    } else {
                      throw new Error("Submission failed");
                    }
                  } catch (err) {
                    alert("Submission currently unavailable. Please check your internet or try again.");
                  } finally {
                    btn.innerText = originalText;
                    btn.disabled = false;
                  }
                }}>
                  <div>
                    <Input name="name" placeholder="Full Name" required className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                  <div>
                    <Input name="email" type="email" placeholder="Email Address" required className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                  <div>
                    <Input name="phone" type="tel" placeholder="Phone / WhatsApp Number" required className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                  <div>
                    <select name="graduation" required className="flex h-12 w-full rounded-md border border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option value="" disabled selected>Highest Qualification...</option>
                      <option value="12th">12th Standard</option>
                      <option value="undergrad">Undergraduate Degree</option>
                      <option value="postgrad">Postgraduate Degree</option>
                      <option value="working">Working Professional</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 h-12 rounded-lg hover:bg-blue-700 transition-colors">
                    Download Syllabus
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-4 leading-tight">By registering, you agree to our terms/conditions and authorize VXU Global to contact you via Whatsapp/Email regarding admission details.</p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
