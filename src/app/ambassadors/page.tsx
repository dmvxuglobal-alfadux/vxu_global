"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BrandAmbassadors } from "@/components/sections/BrandAmbassadors"
import { db } from "@/lib/db"

export default function AmbassadorsPage() {
  const [ambassadors, setAmbassadors] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadData() {
      try {
        const data = await db.getAmbassadors()
        setAmbassadors(data)
      } catch (error) {
        console.error("Failed to load ambassadors", error)
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
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Complete <span className="text-secondary">Network</span></h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">Browse our entire global database of incredible student representatives across 30+ countries.</p>
      </div>

      <main className="min-h-[50vh] bg-white">
        {!loading ? (
          <BrandAmbassadors ambassadors={ambassadors} limit={0} showViewAll={false} />
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
