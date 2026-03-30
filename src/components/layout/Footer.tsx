import Link from "next/link"
import { 
  Facebook, Twitter, Instagram, Linkedin, MapPin, 
  Mail, Phone, ArrowRight, ExternalLink, Globe,
  MessageCircle, Award, ShieldCheck, Zap, Youtube
} from "lucide-react"

export function Footer() {
  const destinations = [
    { name: "Study in USA", href: "/study-in-usa" },
    { name: "Study in UK", href: "/study-in-uk" },
    { name: "Study in Canada", href: "/study-in-canada" },
    { name: "Study in Germany", href: "/study-in-germany" },
    { name: "Study in Ireland", href: "/study-in-ireland" },
    { name: "Study in Italy", href: "/study-in-italy" },
    { name: "Study in France", href: "/study-in-france" },
    { name: "Study in Australia", href: "/study-in-australia" },
    { name: "Study in Malta", href: "/study-in-malta" },
    { name: "Study in Finland", href: "/study-in-finland" },
    { name: "Study in Dubai", href: "/study-in-dubai" },
    { name: "Study in Japan", href: "/study-in-japan" },
  ]

  const programs = [
    { name: "MBA Professionals", href: "/mba-leadership-programs" },
    { name: "Pathway Programs", href: "/study-abroad-pathway" },
    { name: "AI & Data Science", href: "/job-ready-programs" },
    { name: "Software Engineering", href: "/job-ready-programs" },
    { name: "Cyber Security", href: "/job-ready-programs" },
    { name: "Cloud Computing", href: "/job-ready-programs" },
  ]

  const resources = [
    { name: "Career Blog", href: "/blog" },
    { name: "Success Stories", href: "/ambassadors" },
    { name: "Our Mentors", href: "/mentors" },
    { name: "Admissions help", href: "/contact" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ]

  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-16 pb-8 border-t border-slate-800 font-[var(--font-sans)]">
      
      {/* Top Conversion Bar (Yocket Style) */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase italic">Still Confused?</h2>
            <p className="text-white/80 text-lg font-medium max-w-xl">
              Don't leave your global career to chance. Connect with our expert counselors for a free 1:1 blueprinting session today.
            </p>
          </div>
          <Link href="/contact" className="relative z-10 shrink-0">
            <button className="bg-secondary text-white hover:bg-white hover:text-primary transition-all font-black py-5 px-10 rounded-2xl text-xl shadow-xl shadow-black/20 flex items-center gap-3 group/btn">
              Book Free Slot <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-1 space-y-8">
            <Link href="/" className="inline-block">
              <img src="/flogo.png" alt="VXU Global" className="h-14 object-contain brightness-110" />
            </Link>
            <p className="text-sm leading-relaxed font-medium">
              Accelerating futures with elite global education, AI upskilling, and direct migration pathways. Trusted by 50,000+ students worldwide.
            </p>
            <div className="flex gap-4">
               <Link href="https://www.facebook.com/profile.php?id=61562120493658" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all hover:-translate-y-1">
                 <Facebook size={18} />
               </Link>
               <Link href="https://www.instagram.com/vxu.global/" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all hover:-translate-y-1">
                 <Instagram size={18} />
               </Link>
               <Link href="https://www.linkedin.com/company/vxuglobal/" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all hover:-translate-y-1">
                 <Linkedin size={18} />
               </Link>
               <Link href="https://x.com/vxu_global" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all hover:-translate-y-1">
                 <Twitter size={18} />
               </Link>
               <Link href="https://www.youtube.com/@VXUGLOBALConsulting" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all hover:-translate-y-1">
                 <Youtube size={18} />
               </Link>
            </div>
            <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest brightness-125">
                   <Award size={14} /> ISO 9001:2015 Certified
                </div>
            </div>
          </div>

          {/* Destinations - SEO Heavy */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <Globe size={14} className="text-secondary" /> Study Abroad
            </h3>
            <ul className="space-y-4">
              {destinations.map(d => (
                <li key={d.name}>
                  <Link href={d.href} className="text-sm font-bold hover:text-secondary transition-colors flex items-center gap-1 group/link">
                    {d.name} <ArrowRight size={10} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-secondary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <Zap size={14} className="text-secondary" /> Career Growth
            </h3>
            <ul className="space-y-4">
              {programs.map(p => (
                <li key={p.name}>
                  <Link href={p.href} className="text-sm font-bold hover:text-secondary transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <ShieldCheck size={14} className="text-secondary" /> Resources
            </h3>
            <ul className="space-y-4">
              {resources.map(r => (
                <li key={r.name}>
                  <Link href={r.href} className="text-sm font-bold hover:text-secondary transition-colors">{r.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="space-y-8">
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Get In Touch</h3>
            <div className="space-y-6">
               <div className="flex items-start gap-3">
                  <MapPin className="text-secondary w-5 h-5 shrink-0" />
                  <p className="text-xs font-bold leading-relaxed">
                    D4, 4th Fl, Silver Cloud, Opp KIMS Gachibowli, Hyderabad, India.
                  </p>
               </div>
               <div className="flex items-center gap-3">
                  <Phone className="text-secondary w-5 h-5 shrink-0" />
                  <p className="text-sm font-black">+91 888 555 4048</p>
               </div>
               <div className="flex items-center gap-3">
                  <Mail className="text-secondary w-5 h-5 shrink-0" />
                  <p className="text-sm font-black">connect@vxuglobal.com</p>
               </div>
               <Link href="https://wa.me/918885554048" target="_blank" className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl hover:bg-green-500 hover:text-white transition-all group">
                  <MessageCircle className="text-green-500 group-hover:text-white w-6 h-6" />
                  <div className="text-xs font-black uppercase tracking-widest">Chat on WhatsApp</div>
               </Link>
            </div>
          </div>
        </div>

        {/* SEO Link Cloud / Sub-Footer Area */}
        <div className="pt-16 pb-8 border-t border-white/5">
           <div className="flex flex-wrap gap-x-6 gap-y-4 mb-12">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/30 self-center">Popular Hubs:</span>
              {['Milan', 'Munich', 'Berlin', 'New York', 'London', 'Paris', 'Dublin', 'Sydney', 'Rome', 'Dubai'].map(city => (
                <Link key={city} href="/study-abroad" className="text-[11px] font-bold text-white/40 hover:text-secondary transition-colors">Study in {city}</Link>
              ))}
           </div>
           
           <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-[11px] font-bold text-white/30 text-center lg:text-left space-y-1">
                 <p>© {new Date().getFullYear()} VXU Global Consulting. A division of AruNex Gen Solutions Pvt. Ltd.</p>
                 <p>Innovation Center, Silver Cloud, Financial District, Hyderabad.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                 {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap'].map(link => (
                    <Link key={link} href="#" className="text-[11px] font-black text-white/30 hover:text-white transition-colors uppercase tracking-widest">{link}</Link>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </footer>
  )
}
