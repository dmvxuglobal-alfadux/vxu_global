"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { db } from "@/lib/db"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BlogPost } from "@/components/sections/BlogsSection"
import Link from "next/link"
import { Calendar, Tag, ArrowLeft, Clock } from "lucide-react"


export default function BlogDetailPage() {
  const { slug } = useParams()
  const [blog, setBlog] = React.useState<BlogPost | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadBlog() {
      const blogs = await db.getBlogs()
      const found = blogs.find(b => b.slug === slug)
      setBlog(found || null)
      setLoading(false)
    }
    loadBlog()
  }, [slug])

  if (loading) {
     return <div className="h-screen flex items-center justify-center font-[var(--font-sans)]"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent flex items-center justify-center rounded-full animate-spin"></div></div>
  }

  if (!blog) {
     return (
       <div className="min-h-screen flex flex-col font-[var(--font-sans)]">
         <Navbar />
         <main className="flex-1 flex flex-col items-center justify-center py-24 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-primary/70 mb-8">The article you are looking for doesn't exist.</p>
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Back to Home</Link>
         </main>
         <Footer />
       </div>
     )
  }

  return (
    <div className="min-h-screen flex flex-col font-[var(--font-sans)] bg-white">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/70 hover:text-blue-600 mb-8 transition-colors text-sm font-semibold">
             <ArrowLeft size={16} /> Back to Home
          </Link>

          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-primary/70 font-medium mb-6">
               <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1"><Tag size={12}/> {blog.category}</span>
               <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(blog.date).toLocaleDateString()}</span>
               <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-8">
               {blog.title}
            </h1>
            
            <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl">
               <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </div>
          </header>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600">
             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 text-primary leading-relaxed font-medium">
               {blog.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">{paragraph}</p>
               ))}
               
               {/* Call to Action Inside Blog */}
               <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center shadow-md">
                 <h3 className="text-2xl font-bold mb-4 text-white">Ready to start your journey?</h3>
                 <p className="mb-6 opacity-90">Speak to our expert counsellors for free and find the perfect path for you.</p>
                 <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:shadow-lg transition-shadow">Book Free Consultation</button>
               </div>
             </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
