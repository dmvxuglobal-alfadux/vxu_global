"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { LeadPopup } from "@/components/floating/LeadPopup"
import { 
  Target, Eye, ShieldCheck, HeartHandshake, Zap, 
  Globe2, CheckCircle2, Scale, Headset, Banknote, 
  TrendingUp, MonitorSmartphone, GraduationCap, Map
} from "lucide-react"

export function AboutUsContent() {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = React.useState(false)
  const coreValues = [
    { icon: <ShieldCheck size={28} className="text-secondary" />, title: "Commitment to Excellence", desc: "We uphold the highest standards in every service, refining programs to deliver exceptional outcomes." },
    { icon: <Scale size={28} className="text-secondary" />, title: "Integrity & Accountability", desc: "We act with transparency and ethical rigor—providing clear guidance on costs, timelines, and expectations." },
    { icon: <HeartHandshake size={28} className="text-secondary" />, title: "Learner-Centric Advocacy", desc: "We put your aspirations at the heart, delivering impartial guidance free from vendor influence." },
    { icon: <Globe2 size={28} className="text-secondary" />, title: "Expansive Collaborative Network", desc: "Alliances with top universities, industry leaders, and financial institutions across 30+ countries." },
    { icon: <Zap size={28} className="text-secondary" />, title: "Agile Innovation", desc: "Integrating emerging technologies and World Economic Forum trends rapidly into our offerings." }
  ]

  const whyChooseUs = [
    { title: "Accelerated Pathways", desc: "Start in India, finish abroad—slash time and cost by up to 40% without burning cash." },
    { title: "One-Stop Solutions", desc: "From student visas and IELTS training to unsecured loans and mock interviews. We handle it all." },
    { title: "Industry-Aligned Upskilling", desc: "Programs co-designed by IITs, IIIT-B, IIMs, and PwC ensure you leapfrog the competition." },
    { title: "Global Recognition", desc: "Study in WHO/NMC-accredited MBBS universities or pursue online MBAs with global leaders." },
    { title: "Flexible Financing", desc: "EMI plans, non-collateral loans, and bank tie-ups make affordability our superpower." },
    { title: "Proven Track Record", desc: "We might be the new kids on the block, but our impact on hundreds of learners speaks volumes." }
  ]

  const comparison = [
    { title: "Objective Program Selection", vx: "Holistic audit of all leading providers to recommend the precise course aligning with your budget and style.", direct: "Platforms naturally favor their own highly specific offerings over your personalized success." },
    { title: "End-to-End Support", vx: "A highly responsive single point of contact for mentoring, visa, loan, and IELTS.", direct: "Direct enrollments require navigating multiple portals and disparate support teams." },
    { title: "Cost-Effective Pathways", vx: "Up to 40% savings on total fees with no hidden charges starting via India blocks.", direct: "Direct overseas entails full international fees plus separate test-prep expenses." },
    { title: "Local Global Expertise", vx: "Headquartered in Hyderabad with deep regional nuance in bank loans and applications.", direct: "Standardized support processes lacking deep personalized geographic and regional insight." },
    { title: "Flexible Financing", vx: "Unsecured, non-collateral loans and EMI plans across multiple elite Indian banks.", direct: "Limited in-house financing at predefined, stiff interest rates." },
    { title: "Consolidated Dashboard", vx: "No juggling multiple logins. Study-abroad and upskilling synced under one roof.", direct: "Fragmented communication across entirely siloed corporate environments." }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-[var(--font-sans)]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary border border-secondary/30 mb-6 font-bold text-sm tracking-wide">
             <Map size={16} /> Get to know us
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Accelerate you for <span className="text-secondary">Excellence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed max-w-4xl mx-auto">
            Welcome to the heart and soul of VXU Global—where ambition meets action and your success story begins. We partner with world-class universities and top Indian brands to bring the future of education to your doorstep.
          </p>
        </div>
      </div>

      {/* Who We Are & How We Work */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl font-black text-primary mb-6">Who We Are</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    A dynamic mix of mentors, technologists, academicians, visa-wizards, and career coaches—all obsessed with one thing: your growth. We merge data-driven insights with heartfelt guidance, so you always know which step comes next.
                  </p>
                  
                  <h2 className="text-3xl font-bold text-primary mb-6">How We Work</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-black text-xl flex-shrink-0">1</div>
                       <div>
                         <h4 className="text-xl font-bold text-primary mb-2">Listen & Learn</h4>
                         <p className="text-slate-600">We deeply analyze your goals, your challenges, and your dreams.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-black text-xl flex-shrink-0">2</div>
                       <div>
                         <h4 className="text-xl font-bold text-primary mb-2">Map & Master</h4>
                         <p className="text-slate-600">We blueprint a tailored journey—be it MBBS in Georgia, an AI bootcamp, or an IIM-backed executive MBA.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-black text-xl flex-shrink-0">3</div>
                       <div>
                         <h4 className="text-xl font-bold text-primary mb-2">Support & Sprint</h4>
                         <p className="text-slate-600">From mock interviews to bank-loan tie-ups, we handle the logistics so you can focus on learning and growing.</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="relative">
                 <div className="aspect-square rounded-[3rem] overflow-hidden relative shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop" className="w-full h-full object-cover" alt="VXU Team" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent"></div>
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-sm">
                    <h4 className="text-2xl font-black text-primary mb-2">Our Promise</h4>
                    <ul className="space-y-3">
                       <li className="flex gap-2 items-start"><CheckCircle2 className="text-green-500 mt-1 flex-shrink-0 w-5 h-5"/> <span className="text-sm font-medium text-slate-600"><strong>No Bouncing Around:</strong> All services under one roof.</span></li>
                       <li className="flex gap-2 items-start"><CheckCircle2 className="text-green-500 mt-1 flex-shrink-0 w-5 h-5"/> <span className="text-sm font-medium text-slate-600"><strong>Transparent Guidance:</strong> Clear costs, timelines, and next steps.</span></li>
                       <li className="flex gap-2 items-start"><CheckCircle2 className="text-green-500 mt-1 flex-shrink-0 w-5 h-5"/> <span className="text-sm font-medium text-slate-600"><strong>Relentless Innovation:</strong> Adapting to WEF insights.</span></li>
                    </ul>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-3xl">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-amber-400">
                    <Target size={32} />
                 </div>
                 <h3 className="text-3xl font-black mb-4">Our Mission</h3>
                 <p className="text-lg text-slate-300 leading-relaxed">
                   At VXU Global, our mission is to accelerate you toward excellence by empowering students and professionals with world-class educational pathways, cutting-edge upskilling, and job-ready programs. We relentlessly innovate, personalize, and guide every learner.
                 </p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-3xl">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                    <Eye size={32} />
                 </div>
                 <h3 className="text-3xl font-black mb-4">Our Vision</h3>
                 <p className="text-lg text-slate-300 leading-relaxed">
                   We envision a future where every ambitious student and working professional—regardless of geography or background—can Excel on the world stage. By 2030, VXU Global will be the go-to catalyst for transformational learning journeys shaping global leaders.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-primary mb-6">Our Core Values</h2>
              <p className="text-lg text-slate-500 font-medium">The architectural pillars that construct everything we do.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {coreValues.map((value, i) => (
                <div key={i} className={`bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 ${i === 3 ? "md:col-span-2 lg:col-span-1" : ""} ${i === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}>
                   <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                      {value.icon}
                   </div>
                   <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                   <p className="text-slate-500 leading-relaxed">{value.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Why Choose Us vs Others Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-primary mb-6">Why Choose VXU Global?</h2>
              <p className="text-lg text-slate-500 font-medium">Opt for a consultancy that champions your priorities—rather than a platform that simply promotes its own.</p>
           </div>

           <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-slate-50 border-b border-slate-200 text-sm font-black uppercase tracking-widest text-primary">
                 <div className="p-6">Feature / Capability</div>
                 <div className="p-6 text-secondary bg-blue-50">Going with VXU Global</div>
                 <div className="p-6 text-slate-500">Directly with UpGrad, TimesPro etc.</div>
              </div>
              
              <div className="divide-y divide-slate-100">
                 {comparison.map((row, i) => (
                   <div key={i} className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 hover:bg-slate-50 transition-colors">
                      <div className="p-6 md:p-8 font-bold text-primary flex items-center">{row.title}</div>
                      <div className="p-6 md:p-8 text-primary font-medium bg-blue-50/30 flex gap-3">
                        <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                        <p className="leading-relaxed text-sm">{row.vx}</p>
                      </div>
                      <div className="p-6 md:p-8 text-slate-500 flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">X</div>
                        <p className="leading-relaxed text-sm">{row.direct}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, i) => (
                 <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="text-secondary shrink-0" size={24} />
                    <div>
                       <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                       <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Let's Connect */}
      <section className="py-24 bg-primary text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Let's Connect</h2>
            <p className="text-xl text-white/80 font-medium mb-10 leading-relaxed">
              Whether you’re in Vanasthalipuram or Vancouver, our Hyderabad-based team is just a WhatsApp ping away. Ready to see just how far you can go when acceleration meets excellence?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => setIsLeadPopupOpen(true)}
                size="lg" 
                className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-bold h-14 px-8 text-lg"
              >
                Book Free Consultation
              </Button>
            </div>
         </div>
      </section>

      <Footer />
      <LeadPopup isOpen={isLeadPopupOpen} onClose={() => setIsLeadPopupOpen(false)} />
    </div>
  )
}
