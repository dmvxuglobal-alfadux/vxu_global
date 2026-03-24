import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Briefcase, BrainCircuit, LineChart, Code2, Presentation, Gem } from "lucide-react"

export const metadata = {
  title: "Campus Job-Ready Programs | VXU Global",
  description: "Bridge the Gap Between Graduation and Employment with world-class upskilling programs."
}

const programsData = [
  {
    id: "analytics",
    category: "Analytics & AI",
    icon: <BrainCircuit className="text-secondary" size={24} />,
    color: "bg-blue-50 border-blue-100",
    programs: [
      { img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&fit=crop", title: "Artificial Intelligence and Machine Learning for Industry", inst: "IIT Delhi", desc: "Master Artificial Intelligence, GenAI, and Data Science." },
      { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&fit=crop", title: "Advanced Certification Program in Generative AI", inst: "Industry Leaders", desc: "Master the skills that shape the future of technology with a 5-month generative AI course designed by Payton, Gramener & Zalando." },
      { img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&fit=crop", title: "Certificate in Business Analytics & Consulting", inst: "PwC Academy", desc: "Build your career through a curriculum co-designed by PwC Academy." },
      { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&fit=crop", title: "Postgraduate Program in AI & Business Management", inst: "Harvard University", desc: "Advance your career combining analytics edge and business strategy." },
      { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&fit=crop", title: "Executive PG Certification in AI-Powered Full Stack", inst: "IIIT Bangalore", desc: "Build intelligent architecture driven by modern frameworks." }
    ]
  },
  {
    id: "tech",
    category: "Software, Cloud & UI/UX",
    icon: <Code2 className="text-secondary" size={24} />,
    color: "bg-purple-50 border-purple-100",
    programs: [
      { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&fit=crop", title: "Postgraduate Program in Multi Cloud Architecture & DevOps", inst: "Top Tier", desc: "Learn to design, deploy, and manage scalable cloud systems across AWS, Azure, and GCP." },
      { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&fit=crop", title: "Professional Certificate in Cloud Computing & DevOps", inst: "Top Tier", desc: "Cloud Computing can help unlock 46 million jobs by 2030." },
      { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&fit=crop", title: "Certificate in UI/UX Design & Design Thinking", inst: "Top Tier", desc: "Lead the driver's seat of the next big revolution in tech." }
    ]
  },
  {
    id: "management",
    category: "Product & General Management",
    icon: <Presentation className="text-secondary" size={24} />,
    color: "bg-orange-50 border-orange-100",
    programs: [
      { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&fit=crop", title: "Product Management Certificate Program", inst: "eCornell", desc: "Build the foundation for a successful career. Get a deeper understanding of bringing a product from idea to launch." },
      { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&fit=crop", title: "Certificate Program In Entrepreneurship & Venture Creation", inst: "IIM Kozhikode", desc: "Accelerate your start-up journey with elite frameworks." },
      { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&fit=crop", title: "Human Resource Analytics Course", inst: "IIM Kozhikode", desc: "Leverage global HR frameworks through modern data analytics." }
    ]
  },
  {
    id: "finance",
    category: "Finance & Accounting",
    icon: <LineChart className="text-secondary" size={24} />,
    color: "bg-green-50 border-green-100",
    programs: [
      { img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&fit=crop", title: "Postgraduate Program in Equity Research and Trading", inst: "Top Institution", desc: "Advance into equity mechanics, valuations, and trading ops." },
      { img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&fit=crop", title: "Postgraduate Program in Financial Analysis & Risk", inst: "Top Institution", desc: "Finance modelling, analysis, and deep enterprise risk management." }
    ]
  }
]

export default function JobReadyProgramsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-[var(--font-sans)]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-28 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary opacity-90 mix-blend-multiply" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&fit=crop" className="w-full h-full object-cover opacity-20" alt="Students" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl pt-16 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary border border-secondary/30 mb-6 font-bold text-sm tracking-wide">
             <Gem size={16} /> Campus Job-Ready Programs
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Bridge the Gap Between <span className="text-secondary">Graduation</span> & <span className="text-secondary">Employment</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed max-w-3xl mx-auto">
            World&apos;s Top Institutions. Get trained by the best and become Job-ready in Analytics, Management, UI/UX, and Finance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
              className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-bold h-14 px-10 text-lg rounded-full shadow-xl"
            >
              Explore Programs & Get Curriculum
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            <div className="py-8 px-4 text-center group">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Hiring Partners</p>
               <p className="text-3xl font-black text-primary">1,800+</p>
            </div>
            <div className="py-8 px-4 text-center group">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Highest CTC</p>
               <p className="text-3xl font-black text-primary">73 LPA</p>
            </div>
            <div className="py-8 px-4 text-center group">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Avg Salary Hike</p>
               <p className="text-3xl font-black text-primary">50%</p>
            </div>
            <div className="py-8 px-4 text-center group">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Placements Focus</p>
               <p className="text-3xl font-black text-primary">100%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Partners Marquee */}
      <div className="py-12 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
           <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by 1800+ Top Hiring Partners</h3>
           <div className="flex overflow-x-auto snap-x hide-scrollbar gap-12 items-center justify-between opacity-60 grayscale hover:grayscale-0 transition-all duration-500 px-12 pb-4">
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://amazon.com&size=128" alt="Amazon" className="h-12 w-auto snap-start" />
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://microsoft.com&size=128" alt="Microsoft" className="h-12 w-auto snap-start" />
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com&size=128" alt="Google" className="h-12 w-auto snap-start" />
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ibm.com&size=128" alt="IBM" className="h-12 w-auto snap-start" />
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://accenture.com&size=128" alt="Accenture" className="h-12 w-auto snap-start" />
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://pwc.com&size=128" alt="PwC" className="h-12 w-auto snap-start" />
              <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://deloitte.com&size=128" alt="Deloitte" className="h-12 w-auto snap-start" />
           </div>
        </div>
      </div>

      {/* Main Categories & Programs Grid */}
      <div className="container mx-auto px-4 py-20 pb-28">
         <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-primary mb-4">World&apos;s Top Institutions</h2>
            <p className="text-lg text-slate-500 font-medium">Powered by India&apos;s leading edtech partnerships, access Ivy-league tier curriculum combined with aggressive job placement assistance.</p>
         </div>

         <div className="space-y-24">
           {programsData.map((section, index) => (
             <div key={index} id={section.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl border ${section.color}`}>
                     {section.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-primary">{section.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.programs.map((prog, i) => (
                    <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative">
                       <div>
                         <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative">
                            <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                            <div className="absolute top-4 left-4 inline-block px-3 py-1.5 bg-white/95 backdrop-blur shadow-sm border border-white/20 text-xs font-bold text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                              {prog.inst}
                            </div>
                         </div>
                         
                         <h4 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                           {prog.title}
                         </h4>
                         <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">
                           {prog.desc}
                         </p>
                       </div>
                       
                       <button 
                         onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                         className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors text-sm uppercase tracking-wide w-full"
                       >
                          Explore Curriculum
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                       </button>
                    </div>
                  ))}
                </div>
             </div>
           ))}
         </div>
         
         {/* Call To Action */}
         <div className="mt-24 bg-gradient-to-br from-primary to-[#001b96] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
               <Trophy className="text-secondary mx-auto mb-6 w-16 h-16" />
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to fast-track your career?</h2>
               <p className="text-xl text-white/80 font-medium mb-10 leading-relaxed">
                 Join over 5,000+ students who transformed their technical and managerial careers with our Job-Ready Programs.
               </p>
               <Button 
                size="lg" 
                onClick={() => window.dispatchEvent(new CustomEvent("trigger-lead-form"))}
                className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-bold h-14 px-10 text-lg rounded-full shadow-lg"
               >
                 Book Free Career Counselling
               </Button>
            </div>
         </div>
      </div>

      <Footer />
    </div>
  )
}
