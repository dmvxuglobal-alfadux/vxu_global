"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MentorsSection } from "@/components/sections/MentorsSection"
import { db } from "@/lib/db"

export default function MentorsPage() {
  const [mentors, setMentors] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadData() {
      try {
        const data = await db.getMentors()
        setMentors(data)
      } catch (error) {
        console.error("Failed to load mentors", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  return (
    <div className="min-h-screen font-[var(--font-sans)] bg-slate-50">
      <Navbar />
      
      <div className="pt-28 pb-12 bg-primary text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Meet Your <span className="text-secondary">Mentors</span></h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">Browse our entire roster of industry experts ready to guide your specialized career journey.</p>
      </div>

      <main className="min-h-[50vh] bg-white">
        {!loading ? (
          <MentorsSection mentors={mentors} limit={0} showViewAll={false} />
        ) : (
          <div className="flex items-center justify-center py-32">
             <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
