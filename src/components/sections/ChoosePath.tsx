"use client"

import { motion } from "framer-motion"
import { Globe, GraduationCap, Briefcase, Cpu, ArrowRight } from "lucide-react"

export function ChoosePath() {
  const paths = [
    {
      title: "Study Abroad",
      description: "End-to-end consulting for 30+ countries. Visas up to 5 Years.",
      icon: <Globe className="w-8 h-8 text-primary" />,
      color: "bg-white",
      border: "border-blue-100",
      href: "/study-abroad",
      delay: 0.1
    },
    {
      title: "Job-Ready Programs",
      description: "Campus Job-Ready programs designed to upskill college students and freshers.",
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      color: "bg-red-50",
      border: "border-red-100",
      href: "/job-ready-programs",
      delay: 0.2
    },
    {
      title: "MBBS Abroad",
      description: "WHO-approved MBBS programs abroad with Indian hostel & food.",
      icon: <Globe className="w-8 h-8 text-primary" />,
      color: "bg-white",
      border: "border-blue-100",
      href: "/mbbs-abroad",
      delay: 0.3
    },
    {
      title: "Pathway Programs",
      description: "Fast-track your global education with our specialized pathway programs.",
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      color: "bg-red-50",
      border: "border-orange-100",
      href: "/study-abroad-pathway",
      delay: 0.4
    }
  ]

  return (
    <section className="py-24 bg-white" id="programs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Choose Your <span className="text-gradient">Pathway</span>
          </h2>
          <p className="text-lg text-primary/80">
            Tailored journeys for future leaders. Whether it's academics, skill-building, or global employment, we guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paths.map((path, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-white p-8 border hover:shadow-2xl transition-all duration-300 group cursor-pointer ${path.border} relative overflow-hidden flex flex-col h-full`}
              onClick={() => {
                if (path.href.startsWith('/')) {
                  window.location.href = path.href
                } else {
                  sessionStorage.removeItem("vxu_lead_popup_seen")
                  window.location.reload()
                }
              }}
            >
              <div className={`w-16 h-16 rounded-xl ${path.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {path.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary transition-colors relative z-10">
                {path.title}
              </h3>
              <p className="text-primary/80 mb-8 leading-relaxed">
                {path.description}
              </p>
              <div className="mt-auto flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                Explore Pathway <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
