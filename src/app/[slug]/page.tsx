import * as React from "react"
import { notFound } from "next/navigation"
import { destinationsData } from "@/data/destinations"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { MapPin, Trophy, DollarSign, Briefcase, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Server component dynamic metadata
export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const data = destinationsData[resolvedParams.slug]
  if (!data) return { title: 'Not Found' }
  return {
    title: `${data.title} | VXU Global`,
    description: data.subheadline
  }
}

export default async function DestinationPage({ params }: any) {
  const resolvedParams = await params;
  const data = destinationsData[resolvedParams.slug]
  if (!data) {
    notFound()
  }

  const isOverview = resolvedParams.slug === 'study-abroad'

  return (
    <div className="min-h-screen bg-white font-[var(--font-sans)]">
      <Navbar />

      {/* Hero Banner Yocket Style */}
      <div className="relative pt-20 pb-0 bg-primary overflow-hidden h-[450px] md:h-[500px]">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="flex items-center gap-2 text-white/60 text-sm font-semibold tracking-widest uppercase mb-6">
            <span className="hover:text-white cursor-pointer">Destinations</span> <ChevronRight size={14}/> 
            <span className="text-secondary">{data.title}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed">
            {data.headline}. <span className="text-white/70 font-normal">{data.subheadline}</span>
          </p>
        </div>
      </div>

      {/* Hero Stats Strip */}
      <div className="bg-white border-b shadow-sm relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {data.stats.map((stat: any, i: number) => (
              <div key={i} className="py-6 px-4 md:px-8 text-center flex flex-col justify-center items-center group">
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">{stat.label}</p>
                 <p className="text-xl font-black text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column (Content) */}
          <div className="lg:w-2/3 space-y-12">
            
            {isOverview ? (
              <div className="space-y-16">
                 {/* 1. Why Choose VXU Global? */}
                 <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                    <h2 className="text-3xl font-bold text-primary mb-6">VXU Global Makes It Simple, Affordable, and Life-Changing</h2>
                    <p className="text-lg text-primary/80 mb-6 font-medium">Your future deserves clarity. Get Free Career Counselling today — just one call can change everything.</p>
                    <h3 className="text-xl font-bold text-primary mb-4">Why Choose VXU Global for Overseas Education?</h3>
                    <ul className="space-y-3 mb-8">
                       {[
                         "End-to-End handholding support & Study Abroad Guidance – from profile building to post-landing support",
                         "Upto 40% Cost Savings with our unique pathway programs",
                         "Admissions to 1000+ universities across 30+ countries",
                         "Support for IELTS, SOPs, LORs, and visa interviews",
                         "Exclusive education loan assistance (secured & unsecured)",
                         "Fast-tracked pathway programs in partnership with global edtech leaders",
                         "Personalized support for students from Tier 2/3 cities in India"
                       ].map((item, i) => (
                         <li key={i} className="flex items-start gap-3">
                           <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                           <span className="text-primary/80 font-medium">{item}</span>
                         </li>
                       ))}
                    </ul>

                    <div className="bg-[#f4f7fa] p-6 rounded-2xl border border-blue-100">
                       <h3 className="text-xl font-bold text-primary mb-4">Take your career Global</h3>
                       <p className="text-primary/80 mb-4">We support you explore and choose the best Country & Program options matching your requirements.</p>
                       <div className="grid sm:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100">
                             <Trophy className="text-secondary mx-auto mb-2" size={24}/>
                             <p className="text-primary font-bold text-sm">Post Study Visas up to 5 Years</p>
                          </div>
                          <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100">
                             <DollarSign className="text-secondary mx-auto mb-2" size={24}/>
                             <p className="text-primary font-bold text-sm">Cost savings up to 50 Lakhs</p>
                          </div>
                          <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100">
                             <Briefcase className="text-secondary mx-auto mb-2" size={24}/>
                             <p className="text-primary font-bold text-sm">Masters starting from 10 Lakhs</p>
                          </div>
                       </div>
                    </div>
                 </section>

                 {/* 2. Why Overseas Education Details */}
                 <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-primary">Why Overseas Education?</h2>
                    
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                      <h3 className="text-2xl font-bold text-primary mb-4">1. Enhanced Job Opportunities</h3>
                      <ul className="space-y-4 text-primary/80 font-medium">
                        <li><strong className="text-primary">Global Job Market Access:</strong> Degrees from renowned international universities increase employability. 90% of UK international grads secure employment/further study within 6 months.</li>
                        <li><strong className="text-primary">Higher Salaries:</strong> Grads often earn up to a 35% increase compared to domestic graduates.</li>
                        <li><strong className="text-primary">Internships & Work Placements:</strong> Strong industry ties worldwide provide immense practical experience.</li>
                        <li><strong className="text-primary">Minimizing AI Risk:</strong> Specialize in emerging fields like AI ethics and governance to work alongside automation safely.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                      <h3 className="text-2xl font-bold text-primary mb-4">2. Superior Quality of Education</h3>
                      <ul className="space-y-4 text-primary/80 font-medium">
                        <li><strong className="text-primary">Advanced Research:</strong> The US alone houses over 150 of the world's top 500 universities.</li>
                        <li><strong className="text-primary">Diverse Academic Environment:</strong> Multicultural settings enhance innovation, such as Germany's hands-on practical learning approach.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                      <h3 className="text-2xl font-bold text-primary mb-4">3. Personal & Professional Growth</h3>
                      <ul className="space-y-4 text-primary/80 font-medium">
                        <li><strong className="text-primary">Cultural Exposure:</strong> Broader perspectives. 95% of exchange students report improved cultural understanding.</li>
                        <li><strong className="text-primary">Networking Opportunities:</strong> 85% of global jobs are filled through networking through peers and professors abroad.</li>
                        <li><strong className="text-primary">Improved Quality of Life:</strong> Enjoy high standards of living, healthcare, and work-life balance in countries like Canada & Australia.</li>
                        <li><strong className="text-primary">Global Citizen:</strong> Develop cross-cultural competence and achieve near-native language fluency.</li>
                      </ul>
                    </div>
                 </section>

                 {/* 3. Destination Grid (Already here from previous step) */}
                 <section>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold text-primary">Top Study Abroad Destinations We Serve</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {Object.entries(destinationsData).filter(([slug]) => slug !== 'study-abroad').map(([slug, dest]) => (
                        <Link href={`/${slug}`} key={slug} className="group block relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 cursor-pointer">
                          <img src={dest.heroImage} alt={dest.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent group-hover:from-secondary transition-colors duration-500" />
                          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white tracking-wide">{dest.title}</h3>
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-secondary transition-colors shadow-lg">
                                <ArrowRight size={16} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                 </section>

                 {/* 4. FAQs */}
                 <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                    <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions (FAQs)</h2>
                    <div className="space-y-4">
                       {[
                         { q: "Which country is best for Indian students to study abroad?", a: "The best country depends on your budget, course, and career goals. Popular choices include the USA, UK, Canada, Australia, and Germany." },
                         { q: "Can I study abroad without IELTS?", a: "Yes, several universities in Germany, France, and Poland accept students without IELTS." },
                         { q: "How do I get a loan for overseas education?", a: "VXU Global offers education loan assistance through top public-sector and private lenders, including options without collateral." },
                         { q: "Is the visa process difficult?", a: "With proper documentation and interview prep, the visa process is straightforward. Our expert counsellors ensure you're fully prepared." },
                         { q: "Do you offer any fast-track or low-cost study abroad programs?", a: "Yes, we offer pathway programs and hybrid study models that save up to 40% on costs with options to complete studies in 2 countries." },
                         { q: "How early should I start my overseas education planning?", a: "Ideally, students should begin planning 12–18 months in advance to meet application and visa timelines comfortably." },
                         { q: "What documents are needed to apply for universities abroad?", a: "Typical documents include academic transcripts, passport, SOP, LORs, resume, and English proficiency scores (if applicable)." },
                         { q: "Do you help with scholarship applications?", a: "Yes, we guide students to merit-based and need-based scholarships offered by universities and external funding bodies." },
                         { q: "Can I work part-time while studying abroad?", a: "Yes, most countries like Canada, Australia, the UK, and Germany allow students to work part-time while studying." },
                         { q: "What support do you offer after the student reaches the destination country?", a: "We provide pre-departure briefings, connect students with local communities, and offer post-landing guidance to ensure a smooth transition." },
                       ].map((faq, index) => (
                         <details key={index} className="group bg-[#f4f7fa] p-4 rounded-xl cursor-pointer marker:content-['']">
                            <summary className="flex justify-between items-center font-bold text-primary text-lg transition-colors group-hover:text-secondary list-none">
                               {faq.q}
                               <ChevronRight className="transform transition-transform group-open:rotate-90 text-secondary" />
                            </summary>
                            <p className="mt-4 text-primary/80 font-medium leading-relaxed pl-2 border-l-2 border-secondary">{faq.a}</p>
                         </details>
                       ))}
                    </div>
                 </section>

              </div>
            ) : (
              <div className="space-y-12">
                <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                  <h2 className="text-3xl font-bold text-primary mb-6">Why {data.title}?</h2>
                  <p className="text-lg text-primary/80 leading-relaxed mb-6">
                    {data.content || "Experience world-class education surrounded by global industry leaders. Graduates enjoy excellent return on investment, dynamic cultural experiences, and massive career acceleration."}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-100">
                      <Trophy className="text-secondary shrink-0" />
                      <span className="text-primary font-bold">Top Global Universities</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-100">
                      <Briefcase className="text-secondary shrink-0" />
                      <span className="text-primary font-bold">Thriving Job Market</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-100">
                      <DollarSign className="text-secondary shrink-0" />
                      <span className="text-primary font-bold">High ROI & Scholarships</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-100">
                      <CheckCircle2 className="text-secondary shrink-0" />
                      <span className="text-primary font-bold">Fast-Track Visas</span>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-primary">Top Universities</h2>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">View All</Button>
                  </div>
                  <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {(data.universities || []).map((uni: any, idx: number) => (
                      <div key={idx} className="snap-start shrink-0 w-80 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                        <div className="h-40 bg-white relative flex items-center justify-center p-6 border-b border-slate-100">
                           <img src={uni.img} alt={uni.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2 truncate">{uni.name}</h3>
                          <p className="text-sm text-primary/70 font-medium mb-4">{uni.loc}</p>
                          <div className="flex gap-2">
                            <span className="px-3 py-1 bg-blue-50 text-xs font-bold text-primary border border-blue-100 rounded-md">Rank {uni.rank}</span>
                            <span className="px-3 py-1 bg-red-50 text-xs font-bold text-secondary border border-red-100 rounded-md">Fall Intake</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-primary">Top Hiring Companies</h2>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">View All</Button>
                  </div>
                  <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {(data.companies || []).map((company: any, idx: number) => (
                      <div key={idx} className="snap-start shrink-0 w-64 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col items-center p-6">
                        <div className="w-24 h-24 mb-4 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-4 overflow-hidden relative">
                           <img src={company.logo} alt={company.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110" />
                        </div>
                        <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors text-center w-full truncate">{company.name}</h3>
                        <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest text-center">Top Employer</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white border-t-4 border-t-secondary rounded-2xl p-8 shadow-2xl">
               <h3 className="text-2xl font-black text-primary mb-2">Check Your Eligibility</h3>
               <p className="text-sm text-primary/70 mb-6 font-medium">Get a free profile evaluation from our expert counsellors for {data.title}.</p>
               
               <form className="space-y-4">
                 <Input placeholder="Full Name" className="bg-white border-none h-12" required />
                 <Input placeholder="Email Address" type="email" className="bg-white border-none h-12" required />
                 <Input placeholder="Phone Number" type="tel" className="bg-white border-none h-12" required />
                 <Input placeholder="Highest Qualification" className="bg-white border-none h-12" required />
                 
                 <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-secondary text-white transition-colors duration-300 shadow-xl mt-4">
                   Book Free Counselling
                 </Button>
               </form>
               
               <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                 <p className="text-xs text-primary/60 font-bold uppercase tracking-widest mb-3">Or chat with us now</p>
                 <a href="https://wa.me/918885554048" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-[#25D366] font-bold hover:opacity-80 transition-opacity">
                    Need instant answers? WhatsApp Us.
                 </a>
               </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
