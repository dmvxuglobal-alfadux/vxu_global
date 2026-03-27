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
import { LeadPopup } from "@/components/floating/LeadPopup"
import { db } from "@/lib/db"

export default function Home() {
  const [blogs, setBlogs] = React.useState<any[]>([])
  const [mentors, setMentors] = React.useState<any[]>([])
  const [ambassadors, setAmbassadors] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)
  const [isLeadPopupOpen, setIsLeadPopupOpen] = React.useState(false)

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
    // Listen for global lead form trigger
    const handleTrigger = () => setIsLeadPopupOpen(true)
    window.addEventListener("trigger-lead-form", handleTrigger)
    return () => window.removeEventListener("trigger-lead-form", handleTrigger)
  }, [])

  React.useEffect(() => {
    if (!loading && window.location.hash) {
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
      <LeadPopup isOpen={isLeadPopupOpen} onClose={() => setIsLeadPopupOpen(false)} />
    </div>
  )
}
