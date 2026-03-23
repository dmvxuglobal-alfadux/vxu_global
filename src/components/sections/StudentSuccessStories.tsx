"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export function StudentSuccessStories() {
  const stories = [
    {
      name: "Sarah Jenkins",
      placement: "Data Scientist at Google UK",
      country: "United Kingdom",
      image: "https://i.pravatar.cc/150?img=47",
      quote: "VXU's career assessment changed my life. They didn't just help me study abroad; they practically built a bridge to my dream job in London. The AI upskilling was top-notch."
    },
    {
      name: "David Chen",
      placement: "MS Computer Science, Stanford",
      country: "USA",
      image: "https://i.pravatar.cc/150?img=11",
      quote: "From visa rejections to a 100% scholarship at Stanford. The mentoring and end-to-end guidance I received from VXU Global is unmatched in the industry."
    },
    {
      name: "Aisha Patel",
      placement: "Cloud Architect, AWS Sydney",
      country: "Australia",
      image: "https://i.pravatar.cc/150?img=5",
      quote: "The career migration pathway is incredibly streamlined. I upskilled, cleared my certifications, and with their visa support, relocated to Sydney within 8 months."
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="success">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Success</span> Stories
          </h2>
          <p className="text-lg text-primary/80">
            Real stories from real students who turned their global aspirations into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 relative hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200 group-hover:text-blue-100 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                />
                <div>
                  <h4 className="font-bold text-primary text-lg">{story.name}</h4>
                  <p className="text-blue-600 font-medium text-sm">{story.placement}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
              </div>

              <p className="text-primary/80 leading-relaxed italic relative z-10">
                "{story.quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200/60 font-semibold text-primary text-sm flex justify-between items-center group-hover:border-blue-100 transition-colors">
                 <span>Placed in</span>
                 <span className="bg-slate-200/50 px-3 py-1 rounded-full">{story.country}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
