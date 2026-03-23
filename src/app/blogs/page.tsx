"use client"

import * as React from "react"
import { db } from "@/lib/db"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BlogPost, BlogsSection } from "@/components/sections/BlogsSection"

export default function BlogsPage() {
  const [blogs, setBlogs] = React.useState<BlogPost[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadBlogs() {
      const data = await db.getBlogs()
      setBlogs(data)
      setLoading(false)
    }
    loadBlogs()
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col font-[var(--font-sans)]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-6">
               Insights for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Global Journey</span>
            </h1>
            <p className="text-lg text-primary/80">
               Expert advice, latest visa updates, upskilling tips, and student success strategies updated weekly by our top mentors.
            </p>
         </div>

         {loading ? (
             <div className="flex justify-center items-center h-64"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent flex items-center justify-center rounded-full animate-spin"></div></div>
         ) : (
            <BlogsSection blogs={blogs} />
         )}
      </main>

      <Footer />
    </div>
  )
}
