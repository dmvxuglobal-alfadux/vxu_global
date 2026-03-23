"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Tag, ArrowRight } from "lucide-react"

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  image: string
  category: string
  date: string
  tags: string[]
}

export function BlogsSection({ blogs }: { blogs: BlogPost[] }) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              Latest from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journal</span>
            </h2>
            <p className="text-lg text-primary/80">
              Expert insights, visa guidelines, and student guides updated weekly.
            </p>
          </div>
          <Link href="/blogs" className="whitespace-nowrap font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2 group transition-colors">
            Read all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              <Link href={`/blogs/${blog.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-sm flex items-center gap-1.5 uppercase tracking-wide">
                  <Tag size={12} /> {blog.category}
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-center gap-2 text-xs text-primary/70 font-medium mb-4">
                    <Calendar size={14} className="text-primary/60" /> {new Date(blog.date).toLocaleDateString()}
                 </div>
                 
                 <Link href={`/blogs/${blog.slug}`} className="group/link flex-grow">
                   <h3 className="text-2xl font-bold text-primary mb-4 leading-snug group-hover/link:text-blue-600 transition-colors line-clamp-2">
                     {blog.title}
                   </h3>
                   <p className="text-primary/80 leading-relaxed mb-6 line-clamp-3">
                     {blog.content.substring(0, 150)}...
                   </p>
                 </Link>
                 
                 <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-primary">
                    <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      Read full article <ArrowRight size={16} />
                    </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
