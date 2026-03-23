"use client"

import * as React from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export function HowItWorks() {
  const steps = [
    { title: "Profile Evaluation", desc: "Comprehensive assessment of academic background and trajectory.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&fit=crop" },
    { title: "Goals & Preferences", desc: "Understand your personal interests and future ambitions.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&fit=crop" },
    { title: "Expert Counselling", desc: "1-on-1 guidance from veteran global admissions advisors.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&fit=crop" },
    { title: "Best Fit Match", desc: "Recommend the ideal Country & Program.", img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&fit=crop" },
    { title: "Shortlisting Programs", desc: "Narrow down the best university options for maximum ROI.", img: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800&fit=crop" },
    { title: "Test Preparation", desc: "Rigorous coaching for IELTS, TOEFL, GRE, or GMAT.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&fit=crop" },
    { title: "LOR & SOP Guidance", desc: "Crafting compelling letters of recommendation and essays.", img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&fit=crop" },
    { title: "Application Submissions", desc: "Flawless paperwork and direct university liaising.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&fit=crop" },
    { title: "Education Loan", desc: "Arranging fast, low-interest financial support.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop" },
    { title: "Visa Documentation", desc: "Bulletproof visa application preparation.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&fit=crop" },
    { title: "Mockup Interviews", desc: "Intensive 1-on-1 embassy interview preparation.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&fit=crop" },
    { title: "Pre-Departure", desc: "Flight booking, packing checklists, and local transit.", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&fit=crop" },
    { title: "Onshore Arrival", desc: "Campus arrival support, orientation, and settling in.", img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&fit=crop" }
  ]

  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Add physics spring to the scroll progress line so it beautifully catches up to the scroll position
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section className="py-24 bg-[#f4f7fa] relative overflow-hidden" id="process" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            The Complete VXU <span className="text-secondary">Process</span>
          </h2>
          <p className="text-lg text-primary/70 font-medium leading-relaxed">
            See the exact 13-step methodology we use to guarantee zero stress and maximum success. Follow your complete timeline from dream to departure.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
           {/* THE CENTRAL CONNECTING TIMELINE (Shadow line) */}
           <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2 rounded-full"></div>
           
           {/* THE GLOWING ANIMATED SCROLL LINE */}
           <motion.div 
             style={{ scaleY, transformOrigin: 'top' }}
             className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary md:-translate-x-1/2 rounded-full z-10 shadow-[0_0_15px_rgba(227,24,55,0.8)]"
           ></motion.div>

           <div className="space-y-12 md:space-y-24 pt-4">
              {steps.map((step, index) => {
                 const isEven = index % 2 !== 0;
                 return (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                     className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? "md:flex-row-reverse" : ""}`}
                   >
                     {/* The Central Glowing Dot Connector */}
                     <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-slate-200 md:-translate-x-1/2 flex items-center justify-center z-20 shadow-lg group-hover:border-secondary transition-colors duration-500">
                       <div className="w-2.5 h-2.5 bg-primary group-hover:bg-secondary rounded-full transition-colors duration-500" />
                     </div>

                     {/* The Image/Content Card */}
                     <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                        <div className="relative h-[250px] md:h-[300px] w-full rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-slate-100 group/card">
                           {/* High Quality Background Image */}
                           <div className="absolute inset-0 z-0">
                              <img 
                                src={step.img} 
                                alt={step.title} 
                                className="w-full h-full object-cover filter grayscale transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-110" 
                              />
                              {/* Dark Overlay replacing slate with rich VXU Blue */}
                              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 group-hover/card:from-primary/95 group-hover/card:via-primary/70 transition-colors duration-500" />
                           </div>

                           {/* Foreground Text */}
                           <div className={`relative z-10 h-full p-8 flex flex-col justify-end ${isEven ? "items-end" : "items-start"}`}>
                              <div className="text-secondary font-black text-5xl opacity-40 absolute top-4 left-6 group-hover/card:opacity-100 transition-opacity">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                {step.title}
                              </h3>
                              <p className="text-white/70 text-sm font-medium group-hover/card:text-white transition-colors duration-500">
                                {step.desc}
                              </p>
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 )
              })}
           </div>
        </div>

      </div>
    </section>
  )
}
