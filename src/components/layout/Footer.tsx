import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <img src="/flogo.png" alt="VXU Global Logo" className="h-12 object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Accelerating futures with global education, AI upskilling, and migration pathways.
              Your trusted partner for international success.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/90/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/90/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/90/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/90/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Programs</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">Study Abroad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">AI Engineering</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">Data Science</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">Cloud Computing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">Career Migration</Link></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Countries</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">USA</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">United Kingdom</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">Canada</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">Australia</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">Germany</Link></li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  <strong>Corporate:</strong> D4, 4th Fl, Silver Cloud, Opp KIMS Gachibowli, Hyderabad<br /><br />
                  <strong>Branch:</strong> Block 1, 2nd Fl, BMA Towers, Vanasthalipuram, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+91 888 555 4048</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">connect@vxuglobal.com</span>
              </li>
            </ul>
            {/* Google Maps Embed Dummy */}
            <div className="w-full h-32 bg-primary/90 rounded-xl mt-4 relative overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.234125740428!2d78.3551523!3d17.4429995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a2eb620af7%3A0xed45a8ecafb01c18!2sGachibowli%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1650393040905!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} VXU Global Consulting.<br />A division of AruNex Gen Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
