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
import { Globe2, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatePresence, motion } from "framer-motion"

export function LeadPopup({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showSuccess, setShowSuccess] = React.useState(false)

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
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          onClose()
        }, 5000)
      } else {
        throw new Error("Failed to submit")
      }
    } catch (err: any) {
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

              {showSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-500 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-3">Booking Confirmed!</h3>
                  <p className="text-primary/70 mb-6 px-4">
                    Your free counselling session is being processed. <strong>Check your email</strong> (and spam) for the confirmation details.
                  </p>
                  <Button variant="outline" onClick={onClose} className="rounded-xl border-slate-200">Close Window</Button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-primary mb-2 tracking-tight">Free Counselling!</h3>
                  <p className="text-xs text-primary/70 mb-6 font-medium">
                    Our experts will reach out to you shortly.
                  </p>

                  <form className="space-y-3" onSubmit={handleSubmit}>
                    <Input name="name" placeholder="Full Name" required className="h-11 text-xs rounded-lg bg-slate-50 border-slate-200" />
                    <Input name="email" type="email" placeholder="Email Address" required className="h-11 text-xs rounded-lg bg-slate-50 border-slate-200" />
                    <Input name="phone" type="tel" placeholder="WhatsApp Number" required className="h-11 text-xs rounded-lg bg-slate-50 border-slate-200" />
                    
                    <select name="interest" defaultValue="" className="flex h-11 w-full rounded-lg border border-slate-200 bg-slate-50 py-2 px-3 text-xs font-bold text-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option value="" disabled>Select Interest...</option>
                      <option value="study-abroad">Study Abroad Programs</option>
                      <option value="job-ready">Job Ready Programs</option>
                      <option value="mbbs">MBBS Abroad</option>
                    </select>

                    <select name="qualification" required defaultValue="" className="flex h-11 w-full rounded-lg border border-slate-200 bg-slate-50 py-2 px-3 text-xs font-bold text-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option value="" disabled>Current Qualification...</option>
                      <option value="12th">12th Standard</option>
                      <option value="undergrad">Undergraduate Student</option>
                      <option value="postgrad">Postgraduate Student</option>
                      <option value="working">Working Professional</option>
                    </select>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full text-sm font-bold py-5 rounded-xl bg-gradient hover:opacity-90 transition-all shadow-lg shadow-primary/20 mt-2"
                    >
                      {isSubmitting ? "Processing..." : "Book Now"}
                    </Button>
                    
                    <p className="text-[9px] text-center text-primary/40 mt-3 px-2">By submitting, you agree to receive updates via WhatsApp/Email.</p>
                  </form>
                </>
              )}
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
