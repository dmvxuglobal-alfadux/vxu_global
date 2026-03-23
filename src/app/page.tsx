"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { SocialProof } from "@/components/sections/SocialProof"
import { ChoosePath } from "@/components/sections/ChoosePath"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FeaturedPrograms } from "@/components/sections/FeaturedPrograms"
import { StudentSuccessStories } from "@/components/sections/StudentSuccessStories"
import { PartnerUniversities } from "@/components/sections/PartnerUniversities"
import { BrandAmbassadors } from "@/components/sections/BrandAmbassadors"
import { MentorsSection } from "@/components/sections/MentorsSection"
import { BlogsSection } from "@/components/sections/BlogsSection"
import { WhatsAppButton } from "@/components/floating/WhatsAppButton"
import { db } from "@/lib/db"
import { Globe2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatePresence, motion } from "framer-motion"

export function LeadPopup({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      qualification: formData.get("qualification"),
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      
      if (res.ok) {
        alert("Success! Your counselling session is being booked. Check your email shortly.")
        onClose()
      } else {
        throw new Error("Failed to submit")
      }
    } catch (err) {
      alert("Submission temporary unavailable. Please try again or contact us via WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-w-md w-full relative border border-white/20"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-primary/40 hover:text-primary transition-colors z-10 p-2 hover:bg-slate-100 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="h-2 bg-gradient w-full"></div>
            
            <div className="p-10 pt-12">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Globe2 className="text-primary w-8 h-8" />
              </div>

              <h3 className="text-3xl font-black text-primary mb-3 tracking-tight leading-tight">Claim Your Free Counselling!</h3>
              <p className="text-primary/70 mb-8 text-base leading-relaxed">
                Join 5,000+ students on their journey. Drop your details and our experts will reach out.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input name="name" placeholder="Full Name" required className="h-12 rounded-xl bg-slate-50 border-slate-200" />
                <Input name="email" type="email" placeholder="Email Address" required className="h-12 rounded-xl bg-slate-50 border-slate-200" />
                <Input name="phone" type="tel" placeholder="WhatsApp Number" required className="h-12 rounded-xl bg-slate-50 border-slate-200" />
                
                <select name="interest" className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="" disabled selected>Select Interest...</option>
                  <option value="study-abroad">Study Abroad Programs</option>
                  <option value="job-ready">Job Ready Programs</option>
                  <option value="mbbs">MBBS Abroad</option>
                </select>

                <select name="qualification" required className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="" disabled selected>Current Qualification...</option>
                  <option value="12th">12th Standard</option>
                  <option value="undergrad">Undergraduate Student</option>
                  <option value="postgrad">Postgraduate Student</option>
                  <option value="working">Working Professional</option>
                </select>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-lg font-bold py-6 rounded-2xl bg-gradient hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                >
                  {isSubmitting ? "Processing..." : "Secure My Slot Now"}
                </Button>
                
                <p className="text-[10px] text-center text-primary/40 mt-4 px-4">By submitting, you agree to receive updates via WhatsApp/Email.</p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default function Home() {
  const [blogs, setBlogs] = React.useState<any[]>([])
  const [mentors, setMentors] = React.useState<any[]>([])
  const [ambassadors, setAmbassadors] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadData() {
      try {
        const [bData, mData, aData] = await Promise.all([
          db.getBlogs(),
          db.getMentors(),
          db.getAmbassadors()
        ])
        setBlogs(bData)
        setMentors(mData)
        setAmbassadors(aData)
      } catch (error) {
        console.error("Failed to load data", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  React.useEffect(() => {
    if (!loading && window.location.hash) {
      // Allow DOM to settle before smooth scrolling
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [loading]);

  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      <Navbar />
      
      <main>
        <HeroSection />
        <SocialProof />
        <ChoosePath />
        <HowItWorks />
        <FeaturedPrograms />
        <StudentSuccessStories />
        <PartnerUniversities />
        
        <BrandAmbassadors ambassadors={ambassadors} />
        <MentorsSection mentors={mentors} />
        <BlogsSection blogs={blogs} />
      </main>

      <Footer />
      
      <WhatsAppButton />
    </div>
  )
}
