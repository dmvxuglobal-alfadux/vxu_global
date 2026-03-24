"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Globe2, GraduationCap, ArrowRight, CheckCircle2, DollarSign, Zap, ShieldCheck, Users, TrendingUp, HelpCircle, Info } from "lucide-react"

const studyAbroadData = [
  {
    country: "United States",
    flag: "🇺🇸",
    programs: [
      { name: "MBA", university: "Northeastern University" },
      { name: "MBA", university: "Clark University" },
      { name: "MBA", university: "Drexel University" },
      { name: "MPS in Analytics", university: "Northeastern University" }
    ]
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    programs: [
      { name: "Master of Business Administration (90 ECTS)", university: "SRH University of Applied Sciences" },
      { name: "MA International Business & Leadership", university: "SRH University of Applied Sciences" },
      { name: "Master of Business Administration (90 ECTS)", university: "International School of Management" },
      { name: "MSc International Logistics and Supply Chain Management", university: "International School of Management" }
    ]
  },
  {
    country: "France",
    flag: "🇫🇷",
    programs: [
      { name: "Master of Business Administration", university: "Paris School of Business" },
      { name: "MSc Corporate Finance", university: "KEDGE Business School" },
      { name: "MSc Marketing", university: "KEDGE Business School" },
      { name: "MSc in Luxury and Fashion Management", university: "Paris School of Business" }
    ]
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    programs: [
      { name: "Master of Business Administration", university: "University of Sunderland" },
      { name: "MBA with Work Placement", university: "University of Roehampton" },
      { name: "MSc Data Science with Work Placement", university: "University of Roehampton" },
      { name: "MSc International Business Management", university: "St Mary's University Twickenham London" }
    ]
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
    programs: [
      { name: "MSc in Data Analytics", university: "Dundalk Institute of Technology" },
      { name: "MBS in Entrepreneurship and Marketing", university: "Dundalk Institute of Technology" }
    ]
  },
  {
    country: "Finland",
    flag: "🇫🇮",
    programs: [
      { name: "MBA (Business Informatics)", university: "Metropolia University of Applied Sciences" },
      { name: "MBA (International Business Management)", university: "Seinäjoki University of Applied Sciences (SeAMK)" }
    ]
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    programs: [
      { name: "MS in Project Management", university: "Northeastern University, Canada" },
      { name: "MPS in Analytics", university: "Northeastern University, Canada" },
      { name: "MBA in Technology, Innovation and Entrepreneurship", university: "International Business University" },
      { name: "Master of Business Administration", university: "University Canada West" }
    ]
  }
]

export default function StudyAbroadPathwayPage() {
  return (
    <div className="min-h-screen bg-white font-[var(--font-sans)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#001265] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#001265] opacity-90 mix-blend-multiply" />
          <img src="https://images.unsplash.com/photo-152305035309e-ad148c0201ee?w=1600&fit=crop" className="w-full h-full object-cover opacity-20" alt="Students Abroad" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-8 font-black text-sm tracking-widest uppercase"
          >
             <TrendingUp size={16} /> 40% Cost Savings Destinations
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
          >
            Study Abroad at <span className="text-secondary italic">40% Lower Cost</span> — Without Compromising Your Dream 🌍
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <HeroFeature icon={<CheckCircle2 className="text-secondary" />} text="Start your degree from India" />
            <HeroFeature icon={<CheckCircle2 className="text-secondary" />} text="Move abroad when it matters" />
            <HeroFeature icon={<CheckCircle2 className="text-secondary" />} text="Graduate from top universities" />
          </div>

          <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
            💡 The smartest way to study abroad in 2026 is not expensive—it&apos;s strategic.
          </p>

          <Button 
            size="lg" 
            onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
            className="bg-secondary text-white hover:bg-white hover:text-[#001265] transition-all font-black h-16 px-12 text-xl rounded-full shadow-[0_0_30px_rgba(227,24,55,0.4)]"
          >
            Start Your Strategic Journey <ArrowRight size={24} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Simplified Definition */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
                <img src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&fit=crop" className="rounded-3xl shadow-2xl border-8 border-white" alt="Pathway Illustration" />
            </div>
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl font-black text-primary mb-6">⚡ What is a Pathway Program?</h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 A Pathway Program is a <strong>hybrid study abroad model</strong> designed for smart transitions:
               </p>
               <ul className="space-y-4">
                  <StepItem num="1" text="You start your degree in India (online/learning hub)" />
                  <StepItem num="2" text="Then transfer to an international university abroad" />
                  <StepItem num="3" text="Graduate with a full international degree" />
               </ul>
               <div className="mt-10 p-6 bg-blue-50 rounded-2xl border-l-4 border-primary italic text-primary font-medium">
                 👉 This model helps students save significantly on costs and transition smoothly into global education systems.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 40% Savings */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <h2 className="text-4xl md:text-5xl font-black text-primary mb-16">💰 Why “40% Cost Savings”?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-10 rounded-[2.5rem] border-2 border-slate-100 bg-slate-50/50">
                 <div className="text-slate-400 font-bold uppercase tracking-widest mb-4">Traditional Route</div>
                 <h3 className="text-2xl font-black mb-8 text-primary">High Upfront Investment</h3>
                 <div className="space-y-4 text-slate-500 font-medium text-left">
                    <div className="flex items-center gap-3">❌ Full tuition abroad</div>
                    <div className="flex items-center gap-3">❌ Full living expenses abroad</div>
                    <div className="flex items-center gap-3">❌ High initial financial burden</div>
                 </div>
              </div>
              <div className="p-10 rounded-[2.5rem] border-2 border-secondary bg-secondary/5 relative overflow-hidden">
                 <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Recommended</div>
                 <div className="text-secondary font-bold uppercase tracking-widest mb-4">Pathway Model</div>
                 <h3 className="text-2xl font-black mb-8 text-primary">Smart Strategic Saving</h3>
                 <div className="space-y-4 text-primary font-bold text-left">
                    <div className="flex items-center gap-3">✅ Study first phase from India</div>
                    <div className="flex items-center gap-3">✅ Reduce living + tuition costs</div>
                    <div className="flex items-center gap-3 text-secondary">✅ Save ₹15L–₹30L+ on average</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Builder Table */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">🔥 Pathway vs Traditional Study Abroad</h2>
              <p className="text-white/60 font-bold uppercase tracking-widest">The Smart Route Trust Builder</p>
           </div>
           
           <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-white/5 border-b border-white/10 font-black text-lg">
                       <th className="p-8">Parameter</th>
                       <th className="p-8">Traditional Route</th>
                       <th className="p-8 text-secondary">Pathway (Smart Route)</th>
                    </tr>
                 </thead>
                 <tbody className="text-white/80 font-medium">
                    <TableRow label="💰 Cost" v1="High (₹30–60L)" v2="30–40% lower" />
                    <TableRow label="🌍 Start" v1="Abroad only" v2="India + Abroad" />
                    <TableRow label="📚 Prep" v1="Direct entry" v2="Structured prep" />
                    <TableRow label="🎯 Risk" v1="Higher" v2="Lower (Guided)" />
                    <TableRow label="💼 Career" v1="Moderate" v2="Higher Industry Prep" />
                    <TableRow label="🧠 Transition" v1="Sudden shift" v2="Gradual transition" />
                 </tbody>
              </table>
           </div>
           
           <div className="text-center mt-12">
              <p className="text-2xl font-black italic">👉 This is not a shortcut—it’s a smarter route.</p>
           </div>
        </div>
      </section>

      {/* Destinations Marquee */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
           <h2 className="text-4xl font-black text-primary mb-4">🌏 40% Cost Saving Countries</h2>
           <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">High-quality education, strong job markets, and global career exposure at a fraction of the cost.</p>
           <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center mb-16">
              <CountryFlag flag="🇺🇸" name="USA" />
              <CountryFlag flag="🇨🇦" name="Canada" />
              <CountryFlag flag="🇬🇧" name="UK" />
              <CountryFlag flag="🇮🇪" name="Ireland" />
              <CountryFlag flag="🇩🇪" name="Germany" />
              <CountryFlag flag="🇫🇷" name="France" />
              <CountryFlag flag="🇫🇮" name="Finland" />
           </div>
           <div className="p-8 bg-slate-50 rounded-3xl inline-block border border-slate-100 font-bold text-primary">
              👉 “One path, multiple destinations” flexibility — choose or switch destination mid-journey.
           </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">🎯 Why Pathway Programs?</h2>
              <p className="text-xl text-slate-500">Real differentiators that set your global career on fire.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard icon={<DollarSign/>} title="Massive Cost Savings" desc="Save on living + tuition in Year 1. Reduce the direct financial burden on your family." />
              <BenefitCard icon={<GraduationCap/>} title="Academic Readiness" desc="Build foundations before global classrooms. Get familiar with the international curriculum." />
              <BenefitCard icon={<Globe2/>} title="Smooth Transition" desc="Adapt to teaching styles and communication early. No culture shock—just success." />
              <CountryCard icon={<Zap/>} title="Strategic Flexibility" desc="Start now, decide later. Switch your foreign destination if needed mid-journey." />
              <BenefitCard icon={<ShieldCheck/>} title="Higher Admission Odds" desc="Pathway builds your profile. Significantly reduces the risk of rejection." />
              <BenefitCard icon={<Users/>} title="End-to-End Support" desc="Complete handholding: from university selection to SOP, apps, and final visa." />
           </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-primary mb-4">📊 Is This For You?</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                 <h3 className="text-xl font-bold flex items-center gap-2 text-green-600"><CheckCircle2/> ✅ Ideal For:</h3>
                 <ul className="space-y-3 text-slate-600 font-medium">
                    <li>• Budget-conscious students</li>
                    <li>• Students unsure about direct admission</li>
                    <li>• Families looking for low-risk options</li>
                    <li>• Students needing academic support</li>
                 </ul>
              </div>
              <div className="space-y-6">
                 <h3 className="text-xl font-bold flex items-center gap-2 text-slate-400"><HelpCircle/> ❌ Not Ideal For:</h3>
                 <ul className="space-y-3 text-slate-400 font-medium">
                    <li>• Immediate full abroad experience seekers</li>
                    <li>• Students with high budget + strong profile</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* PSA Advantage */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                 <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">🚀 Career & PSW Advantage</h2>
                 <p className="text-xl font-medium mb-12 text-white/80 leading-relaxed">
                   Pathway students get the <strong>same degree, same PSW opportunities</strong>, and access to the same global job markets.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <PSWItem flag="🇺🇸" country="USA" psw="3 Yrs (STEM)" />
                    <PSWItem flag="🇨🇦" country="Canada" psw="Up to 3 Yrs" />
                    <PSWItem flag="🇬🇧" country="UK" psw="2 Years" />
                    <PSWItem flag="🇩🇪" country="Germany" psw="18 Months" />
                 </div>
              </div>
              <div className="w-full lg:w-1/2 p-10 bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20">
                 <SecurityItem icon={<ShieldCheck size={32}/>} title="Safety & Risk Reduction" desc="Lower financial risk. Gradual exposure to international life. Better preparedness before migration. Safer emotionally + financially." />
                 <div className="mt-10 pt-10 border-t border-white/20">
                    <h3 className="text-2xl font-black mb-4 flex items-center gap-3"><Info/> 🧠 The Strategic Verdict</h3>
                    <p className="text-lg font-medium italic opacity-90">
                      “Don’t spend ₹50 Lakhs to learn abroad—spend smart and earn faster.”
                    </p>
                 </div>
              </div>
           </div>
        </div>
        <div className="absolute right-[-100px] top-[-100px] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Countries Detail Section (Restored from previous version) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-4xl font-black text-primary mb-4">Explore Our Top Destinations</h2>
             <p className="text-lg text-slate-500 font-medium font-bold uppercase tracking-widest text-sm mb-4">Detailed Program Pathways</p>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {studyAbroadData.map((dest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="bg-primary p-8 text-white flex items-center justify-between relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{dest.flag}</span>
                        <h3 className="text-3xl font-bold tracking-tight">{dest.country}</h3>
                      </div>
                      <p className="text-white/70 font-medium">Top University Programs</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      {dest.programs.map((prog, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-4 pb-4 border-b border-slate-50 last:border-0">
                          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 animate-pulse"><GraduationCap size={20}/></div>
                          <div>
                            <h4 className="text-lg font-bold text-primary mb-1">{prog.name}</h4>
                            <p className="text-sm text-slate-500">{prog.university}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                      className="w-full mt-8 bg-slate-50 text-primary border-2 border-slate-100 h-14 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-all"
                    >
                      Get Detailed Brochure & Fees
                    </Button>
                  </div>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* CRM CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
             Confused between <span className="text-secondary italic">Pathway vs Direct</span> Study Abroad?
           </h2>
           <p className="text-2xl text-slate-500 mb-12 font-medium">
             Get a <strong>FREE Personalized Country + Cost Plan</strong> today.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                size="lg" 
                onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                className="bg-secondary text-white hover:bg-primary transition-all font-black h-16 px-12 text-xl rounded-full shadow-2xl"
              >
                Talk to VXU Experts Today <ArrowRight className="ml-2" />
              </Button>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Subcomponents
function HeroFeature({icon, text}: any) {
  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 whitespace-nowrap">
       {icon} <span className="font-bold text-sm tracking-wide">{text}</span>
    </div>
  )
}

function StepItem({num, text}: any) {
  return (
    <div className="flex items-start gap-4">
       <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black flex-shrink-0">{num}</div>
       <p className="text-slate-700 font-bold">{text}</p>
    </div>
  )
}

function TableRow({label, v1, v2}: any) {
  return (
    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
       <td className="p-8 font-black text-white">{label}</td>
       <td className="p-8 text-white/50">{v1}</td>
       <td className="p-8 text-secondary font-black">{v2}</td>
    </tr>
  )
}

function CountryFlag({flag, name}: any) {
  return (
    <div className="flex flex-col items-center gap-3 group">
       <div className="text-6xl group-hover:scale-125 transition-transform cursor-default grayscale group-hover:grayscale-0">{flag}</div>
       <span className="text-xs font-black text-slate-400 group-hover:text-primary uppercase tracking-tighter">{name}</span>
    </div>
  )
}

function BenefitCard({icon, title, desc}: any) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-secondary hover:shadow-2xl transition-all group">
       <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-8 shadow-sm">
          {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
       </div>
       <h3 className="text-2xl font-black text-primary mb-4">{title}</h3>
       <p className="text-slate-600 font-medium leading-relaxed">{desc}</p>
    </div>
  )
}

function CountryCard({icon, title, desc}: any) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border-2 border-secondary relative overflow-hidden group">
       <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl"></div>
       <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm">
          {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
       </div>
       <h3 className="text-2xl font-black text-primary mb-4">{title}</h3>
       <p className="text-slate-600 font-medium leading-relaxed">{desc}</p>
    </div>
  )
}

function PSWItem({flag, country, psw}: any) {
   return (
     <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
        <div className="flex items-center gap-2 mb-1">
           <span className="text-xl">{flag}</span>
           <span className="font-bold text-sm">{country}</span>
        </div>
        <div className="text-xs font-black text-secondary uppercase tracking-tighter">{psw}</div>
     </div>
   )
}

function SecurityItem({icon, title, desc}: any) {
   return (
     <div className="flex gap-6">
        <div className="text-secondary shrink-0">{icon}</div>
        <div>
           <h4 className="text-xl font-black mb-2">{title}</h4>
           <p className="text-white/70 font-medium leading-relaxed">{desc}</p>
        </div>
     </div>
   )
}
