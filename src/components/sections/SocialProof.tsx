import { motion } from "framer-motion"

export function SocialProof() {
  const stats = [
    { value: "5000+", label: "Students Trained" },
    { value: "20+", label: "Partner Universities" },
    { value: "15", label: "Countries Placements" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((stat, i) => (
            <div key={i} className="py-6 md:py-0 px-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {stat.value}
                </span>
              </h2>
              <p className="text-lg text-primary/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Company and University Logos */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <p className="text-center text-sm font-semibold text-primary/60 uppercase tracking-widest mb-8">
            Our Students Excel At
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos Dummy Replacements */}
            <div className="text-xl font-bold font-serif text-primary">Stanford</div>
            <div className="text-xl font-bold font-serif text-primary">MIT</div>
            <div className="text-xl font-bold font-sans text-primary tracking-tight">Google</div>
            <div className="text-xl font-bold font-sans text-primary tracking-tight">Microsoft</div>
            <div className="text-xl font-bold font-serif text-primary">Oxford</div>
          </div>
        </div>
      </div>
    </section>
  )
}
