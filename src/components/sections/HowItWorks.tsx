"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function HowItWorks() {
  const steps = [
    { title: "Profile Evaluation", desc: "Comprehensive assessment of academic background." },
    { title: "Goals & Preferences", desc: "Understand your personal interests and ambitions." },
    { title: "Expert Counselling", desc: "1-on-1 guidance from veteran advisors." },
    { title: "Best Fit Match", desc: "Recommend the ideal Country & Program." },
    { title: "Shortlisting Programs", desc: "Narrow down the best university options." },
    { title: "Test Preparation", desc: "Coaching for IELTS, TOEFL, GRE, or GMAT." },
    { title: "LOR & SOP Guidance", desc: "Crafting compelling letters and essays." },
    { title: "Applications", desc: "Flawless paperwork and direct liaising." },
    { title: "Education Loan", desc: "Arranging fast, low-interest financial support." },
    { title: "Visa Documentation", desc: "Bulletproof visa application preparation." },
    { title: "Mockup Interviews", desc: "Intensive 1-on-1 embassy preparation." },
    { title: "Pre-Departure", desc: "Flight booking and packing checklists." },
    { title: "Onshore Arrival", desc: "Campus arrival support and orientation." }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            The Complete VXU <span className="text-secondary">Process</span>
          </h2>
          <p className="text-lg text-primary/70 font-medium">
            Our 13-step methodology designed to guarantee zero stress and maximum success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-secondary hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 text-secondary group-hover:opacity-20">
                <CheckCircle2 size={40} />
              </div>
              <div className="text-secondary font-black text-2xl mb-3">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-primary/60 font-medium leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
