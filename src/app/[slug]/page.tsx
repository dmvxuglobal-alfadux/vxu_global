"use client"

import * as React from "react"
import { notFound, useParams } from "next/navigation"
import { destinationsData } from "@/data/destinations"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { 
  MapPin, Trophy, DollarSign, Briefcase, ChevronRight, CheckCircle2, 
  ArrowRight, ShieldCheck, Star, Users, Globe2, Zap, AlertTriangle, 
  Heart, Plane, Smile, Clock, Building2, TrendingUp, Info 
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DestinationPage() {
  const params = useParams()
  const slug = params.slug as string
  const data = destinationsData[slug]

  if (!data) {
    notFound()
  }

  const isOverview = slug === 'study-abroad'

  return (
    <div className="min-h-screen bg-slate-50 font-[var(--font-sans)]">
      <Navbar />

      {/* 1. Hero Section (Emotional + Aspirational Hook) */}
      <div className="relative pt-20 pb-0 bg-primary overflow-hidden min-h-[500px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white/60 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Link href="/study-abroad" className="hover:text-white transition-colors">Destinations</Link> 
            <ChevronRight size={14}/> 
            <span className="text-secondary">{data.title}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl max-w-4xl"
          >
             {data.title === "Overseas Education" ? "Build a Global Career, Not Just a Degree" : data.heroTitle || `Study in ${data.title.replace('Study in ', '')}`}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-secondary font-black bg-white/10 backdrop-blur-md inline-block px-6 py-2 rounded-xl mb-8 border border-white/10"
          >
            {data.positioning || "Best for Global Career Growth"}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-20">
            
            {/* 2. Quick Snapshot (Decision in 30 Seconds) */}
            <section className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h2 className="text-3xl font-black text-primary mb-8 flex items-center gap-3">
                  <Clock className="text-secondary" /> Quick Snapshot
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 rounded-3xl overflow-hidden border border-slate-100">
                  <SnapshotItem label="Avg Cost" value={data.quickSnapshot?.avgCost || data.stats?.[0]?.value || "Varies"} />
                  <SnapshotItem label="PSW Visa" value={data.quickSnapshot?.pswVisa || data.stats?.[1]?.value || "Available"} />
                  <SnapshotItem label="PR Chances" value={data.quickSnapshot?.prChances || "Moderate"} />
                  <SnapshotItem label="Job Market" value={data.quickSnapshot?.jobMarket || "High"} />
                  <SnapshotItem label="Safety" value={data.quickSnapshot?.safety || "High"} />
                  <SnapshotItem label="Best For" value={data.quickSnapshot?.bestFor || "Career Growth"} />
               </div>
            </section>

            {/* 3. Why Study in [Country] (2026 Perspective) */}
            <section>
               <h2 className="text-4xl font-black text-primary mb-8 tracking-tight">🎯 Why Study in {data.title.replace('Study in ', '')} (2026 Perspective)</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(data.whyPerspective || [
                    { title: "Global Recognition", desc: "Degrees are respected globally by top employers." },
                    { title: "PSW Advantage", desc: "Stay back and work after graduation." },
                    { title: "High ROI", desc: "Best-in-class salary growth post-graduation." },
                    { title: "Networking", desc: "Connect with global industry leaders." }
                  ]).map((item: any, i: number) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                       <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-4">
                          <CheckCircle2 size={24}/>
                       </div>
                       <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* 4. Who Should Choose This Country? (Personas) */}
            <section className="bg-gradient-to-br from-primary to-[#001c4d] rounded-[2.5rem] p-12 text-white overflow-hidden relative">
               <div className="relative z-10">
                  <h2 className="text-4xl font-black mb-12">👤 Who Should Choose This Country?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <PersonaCard title="Ideal For" type="ideal" items={data.personas?.ideal || ["Goal-oriented students", "Tech enthusiasts", "Budget conscious Families"]} />
                     <PersonaCard title="Borderline Fit" type="borderline" items={data.personas?.borderline || ["Students wanting immediate PR", "Specific small niches"]} />
                     <PersonaCard title="Not For" type="not" items={data.personas?.notFor || ["Students wanting easy degrees", "Very small budgets"]} />
                  </div>
               </div>
               <Users className="absolute bottom-[-50px] right-[-50px] text-white/5 w-96 h-96" />
            </section>

            {/* 5. Cost of Studying in [Country] */}
            <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
               <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
                  <DollarSign className="text-secondary" /> Cost of Studying (Realistic INR)
               </h2>
               <div className="overflow-hidden rounded-3xl border border-slate-100 mb-10">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50">
                           <th className="p-6 font-black text-primary text-xl">Category</th>
                           <th className="p-6 font-black text-primary text-xl text-right">Cost (INR/year)</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50">
                           <td className="p-6 font-bold text-slate-600">Tuition Fees</td>
                           <td className="p-6 font-black text-primary text-right">{data.costBreakdown?.tuition || "₹10L - ₹25L"}</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                           <td className="p-6 font-bold text-slate-600">Living Expenses</td>
                           <td className="p-6 font-black text-primary text-right">{data.costBreakdown?.living || "₹6L - ₹10L"}</td>
                        </tr>
                        <tr className="bg-secondary/5 font-black text-secondary">
                           <td className="p-6 text-xl">Total Cost</td>
                           <td className="p-6 text-2xl text-right">{data.costBreakdown?.total || "₹16L - ₹35L"}</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <HacksCard title="Cheapest Pathways" icon={<Plane size={20}/>} desc={data.costHacks?.pathways || "Hybrid models & Pathway options."} />
                  <HacksCard title="Scholarships" icon={<Star size={20}/>} desc={data.costHacks?.scholarships || "Merit based available from €2k-€5k."} />
                  <HacksCard title="Saving Hacks" icon={<Zap size={20}/>} desc={data.costHacks?.hacks || "Share rooms, cook at home, use student cards."} />
               </div>
            </section>

            {/* 6 & 7. Part-Time & PSW (CRITICAL) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <section className="bg-blue-50/30 rounded-[2.5rem] p-10 border border-blue-50">
                  <h2 className="text-2xl font-black text-primary mb-6 flex items-center gap-2">
                     <Clock className="text-secondary" /> Part-Time Work
                  </h2>
                  <ul className="space-y-4 font-bold text-slate-600">
                     <li className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                        <span className="text-slate-400">Hours</span> <span>{data.workInfo?.hours || "20 Hrs/Week"}</span>
                     </li>
                     <li className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                        <span className="text-slate-400">Avg Wage</span> <span>{data.workInfo?.wage || "€12 - €15/hr"}</span>
                     </li>
                     <li className="mt-6 flex items-start gap-3 bg-white p-6 rounded-2xl border-l-4 border-l-secondary shadow-sm">
                        <Smile className="text-secondary shrink-0" />
                        <p className="text-primary leading-snug">Can cover living? <strong>{data.workInfo?.coversLiving || "Yes (mostly)"}</strong>. {data.workInfo?.coversLivingDesc || "Shared housing is key."}</p>
                     </li>
                  </ul>
               </section>
               <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                  <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                     <Briefcase className="text-secondary" /> Post-Study Work
                  </h2>
                  <div className="space-y-6">
                     <div>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] mb-1">Duration</p>
                        <p className="text-2xl font-black text-secondary">{data.pswInfo?.duration || "1-3 Years"}</p>
                     </div>
                     <div>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] mb-1">Verdict Line</p>
                        <p className="text-lg font-bold leading-tight">PSW in this country is <strong>{data.pswInfo?.verdict || "Strong"}</strong> because of the thriving local job market.</p>
                     </div>
                  </div>
                  <Building2 className="absolute top-[-20px] right-[-20px] text-white/5 w-40 h-40" />
               </section>
            </div>

            {/* 8 & 9. Job Market & Top Companies */}
            <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
               <h2 className="text-4xl font-black text-primary mb-12">🚀 Job Market & Companies</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-xl font-black text-primary mb-6 flex items-center gap-2 font-bold"><TrendingUp size={20} className="text-green-500" /> Top Industries</h3>
                     <div className="flex flex-wrap gap-2 mb-10">
                        {(data.topIndustries || ["Fintech", "HealthTech", "Automotive", "AI Research", "Robotics"]).map((ind: string) => (
                          <span key={ind} className="px-4 py-2 bg-slate-50 text-primary rounded-xl font-bold border border-slate-100">{ind}</span>
                        ))}
                     </div>
                     <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Entry Salary Range</p>
                        <p className="text-2xl font-black text-primary">{data.jobInfo?.salary || "₹45L - ₹80L per year"}</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xl font-black mb-6">🏢 Top Companies Hiring</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {(data.topCompaniesList || ["Amazon", "Google", "Siemens", "SAP", "Volkswagen", "L'Oreal"]).map((comp: string) => (
                           <div key={comp} className="p-4 bg-white border border-slate-100 rounded-2xl text-sm font-black text-primary text-center hover:border-secondary hover:text-secondary transition-all cursor-default">
                              {comp}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 10 & 11. PR & Safety */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 border-t-4 border-t-secondary">
                  <h2 className="text-2xl font-black text-primary mb-6 flex items-center gap-2">
                     <Globe2 className="text-secondary" /> PR & Settlement
                  </h2>
                  <div className="space-y-4 mb-4">
                     <div className="flex justify-between items-center text-sm font-bold border-b border-dotted pb-3"><span>Timeline</span> <span>{data.prInfo?.timeline || "3-5 Years"}</span></div>
                     <div className="flex justify-between items-center text-sm font-bold border-b border-dotted pb-3"><span>Difficulty</span> <span className="text-amber-600">{data.prInfo?.difficulty || "Moderate"}</span></div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 italic">
                     👉 PR is not guaranteed—it depends on policies, employer support, and specific skill demand.
                  </div>
               </section>
               <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 border-t-4 border-t-blue-500">
                  <h2 className="text-2xl font-black text-primary mb-6 flex items-center gap-2">
                     <ShieldCheck className="text-blue-500" /> Safety & Stability
                  </h2>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-sm font-bold border-b border-dotted pb-3"><span>Crime Perception</span> <span className="text-green-600">Very Low</span></div>
                     <div className="flex justify-between items-center text-sm font-bold border-b border-dotted pb-3"><span>Stability</span> <span className="text-green-600">Ultra High</span></div>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 font-medium">Safe for Indian students with vibrant community hubs.</p>
               </section>
            </div>

            {/* 13. 10-Point Rating System */}
            <section className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
               <h2 className="text-3xl font-black text-primary mb-10 text-center uppercase tracking-tighter">📊 10-Point Rating Matrix</h2>
               <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {Object.entries(data.ratings || {
                    Affordability: 7,
                    Quality: 9,
                    Jobs: 8,
                    PR: 6,
                    ROI: 9
                  }).map(([key, val]: any) => (
                    <div key={key} className="text-center group">
                       <div className="relative inline-block mb-3">
                          <svg className="w-16 h-16 transform -rotate-90">
                            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-100" />
                            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" 
                              strokeDasharray={2 * Math.PI * 28} 
                              strokeDashoffset={2 * Math.PI * 28 * (1 - (val/10))}
                              className="text-secondary transition-all duration-1000 group-hover:stroke-primary" 
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center font-black text-primary">{val}</span>
                       </div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{key}</p>
                    </div>
                  ))}
               </div>
               <div className="mt-12 p-8 bg-primary rounded-3xl text-center">
                  <p className="text-white/60 font-bold uppercase tracking-widest mb-1">Overall VXU Score</p>
                  <p className="text-5xl font-black text-secondary">{data.overallRating || "8.5"}</p>
               </div>
            </section>

            {/* 14. Pros & Cons (HONEST) */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="bg-green-50/50 rounded-3xl p-10 border border-green-100">
                  <h3 className="text-2xl font-black text-green-700 mb-6">✅ Pros</h3>
                  <ul className="space-y-4 font-bold text-green-800">
                    {(data.prosLines || ["World class prestige", "Thriving job markets", "Higher salaries"]).map((line: string) => (
                       <li key={line} className="flex items-start gap-3"><CheckCircle2 size={18} className="shrink-0 mt-1"/> {line}</li>
                    ))}
                  </ul>
               </div>
               <div className="bg-red-50/50 rounded-3xl p-10 border border-red-100">
                  <h3 className="text-2xl font-black text-red-700 mb-6">⚠️ Real Challenges</h3>
                  <ul className="space-y-4 font-bold text-red-800">
                    {(data.consLines || ["High living costs", "Intense competition", "Winter weather"]).map((line: string) => (
                       <li key={line} className="flex items-start gap-3"><AlertTriangle size={18} className="shrink-0 mt-1"/> {line}</li>
                    ))}
                  </ul>
               </div>
            </section>

            {/* 16 & 17. Verdict & Closing */}
            <section className="bg-primary rounded-[3.5rem] p-16 text-white text-center relative overflow-hidden">
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-4xl font-black mb-8">🎯 Final Verdict</h2>
                  <p className="text-2xl font-medium mb-12 text-white/80 leading-relaxed">
                     {data.finalVerdict || "Perfect for students targeting high-roi careers in specialized fields. Avoid if you have no budget flex."}
                  </p>
                  <div className="p-10 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                     <p className="text-xl font-bold italic mb-8">&quot;Choosing the right country is not about trends—it’s about choosing what fits your future.&quot;</p>
                     <Button 
                       onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                       className="bg-secondary hover:bg-white hover:text-primary text-white h-16 px-12 rounded-full text-xl font-black transition-all shadow-2xl"
                     >
                       Talk to an Expert Now <ArrowRight size={24} className="ml-2"/>
                     </Button>
                  </div>
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none opacity-50"></div>
            </section>

          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
               
               {/* Eligibility Form */}
               <div className="bg-white border-t-8 border-t-secondary rounded-[2.5rem] p-10 shadow-2xl border border-slate-100">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                     <Globe2 className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-2">Free Profile Eval</h3>
                  <p className="text-sm text-slate-500 mb-8 font-medium italic">Join 5000+ students on their global journey.</p>
                  
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("trigger-lead-form")); }}>
                    <Input placeholder="Full Name" className="h-14 rounded-xl bg-slate-50 border-slate-100" required />
                    <Input placeholder="Highest Qualification" className="h-14 rounded-xl bg-slate-50 border-slate-100" required />
                    
                    <Button block className="w-full h-16 text-lg font-black bg-primary hover:bg-secondary text-white transition-all duration-300 shadow-xl mt-4 rounded-xl">
                      Book Free Counselling
                    </Button>
                  </form>
                  
                  <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-4">Immediate Expert Access</p>
                    <a href="https://wa.me/918885554048" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-full font-black hover:scale-105 transition-transform shadow-lg">
                       <HelpCircle size={20}/> WhatsApp Us Now
                    </a>
                  </div>
               </div>

               {/* Comparison Shortcut */}
               <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white border border-slate-800 shadow-xl">
                  <h4 className="text-lg font-black mb-6 flex items-center gap-2 font-bold"><Info size={20} className="text-secondary" /> Strategic Tip</h4>
                  <p className="text-sm text-white/70 font-medium leading-relaxed mb-6">
                     Better than <strong>Canada</strong> for tech salaries, but higher initial cost than <strong>Germany</strong>. Choose based on ROI timelines.
                  </p>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-primary font-bold">Compare Countries</Button>
               </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

// Subcomponents
function SnapshotItem({ label, value }: any) {
  return (
    <div className="bg-white p-6 md:p-8 flex flex-col items-center justify-center text-center group transition-colors hover:bg-slate-50">
       <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2 group-hover:text-secondary transition-colors">{label}</div>
       <div className="text-sm md:text-lg font-black text-primary group-hover:scale-105 transition-transform">{value}</div>
    </div>
  )
}

function StepItem({ num, text }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100">
       <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black flex-shrink-0">{num}</div>
       <p className="text-slate-700 font-bold leading-snug">{text}</p>
    </div>
  )
}

function PersonaCard({ title, items, type }: any) {
   const colors = {
      ideal: "bg-green-500/10 border-green-500/20 text-green-200",
      borderline: "bg-amber-500/10 border-amber-500/20 text-amber-200",
      not: "bg-red-500/10 border-red-500/20 text-red-100"
   }[type as 'ideal' | 'borderline' | 'not'] || ""

   return (
     <div className={`p-8 rounded-[2rem] border ${colors} backdrop-blur-sm`}>
        <h4 className="text-xl font-black mb-6 uppercase tracking-widest">{title}</h4>
        <ul className="space-y-3">
           {items.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                 {item}
              </li>
           ))}
        </ul>
     </div>
   )
}

function HacksCard({ title, icon, desc }: any) {
   return (
     <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-primary transition-all">
        <div className="flex items-center gap-3 mb-3">
           <div className="text-secondary group-hover:text-white transition-colors">{icon}</div>
           <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest group-hover:text-white/60">{title}</h4>
        </div>
        <p className="text-sm font-bold text-primary group-hover:text-white">{desc}</p>
     </div>
   )
}

function HelpCircle({size}: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
  )
}
