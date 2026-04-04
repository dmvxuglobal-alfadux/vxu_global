"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe2, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db } from "@/lib/db"

export function LeadPopup({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [settings, setSettings] = React.useState<any>(null)

  React.useEffect(() => {
    const loadSettings = async () => {
      const s = await db.getPopupSettings()
      setSettings(s)
    }
    if (isOpen) loadSettings()
  }, [isOpen])

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            className="bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] overflow-hidden max-w-[850px] w-full relative border border-white/20 flex flex-col md:flex-row"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-all z-20 p-2 hover:bg-slate-100 rounded-2xl"
            >
              <X size={20} />
            </button>

            {/* Left Side: Campaign Image */}
            <div className="md:w-[45%] relative min-h-[300px] bg-slate-900 group">
              <img 
                src={settings?.promoImage || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&fit=crop"} 
                alt="Campaign" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001265] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-10 left-10 right-10 z-10 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-4xl font-black mb-4 leading-tight">
                    {settings?.promoTitle || "Kickstart Your Future."}
                  </h2>
                  <p className="text-white/70 font-bold text-sm">
                    {settings?.promoSubtitle || "Connect with 500+ Top Universities globally."}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 p-10 md:p-14 bg-white relative">
              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center h-full"
                >
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="text-green-500 w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-black text-primary mb-4">Confirmed!</h3>
                  <p className="text-primary/70 mb-8 font-bold leading-relaxed">
                    Check your email and WhatsApp for confirmation. Our senior consultant will call you shortly.
                  </p>
                  <Button variant="outline" onClick={onClose} className="rounded-2xl border-slate-200 h-14 px-10 font-black">Success</Button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-black text-primary mb-3">Claim Your Session</h3>
                    <p className="text-sm font-black text-secondary tracking-widest uppercase">FREE COUNSELLING SESSION</p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <Input name="name" placeholder="Name" required className="h-14 text-sm font-bold rounded-2xl bg-slate-50 border-slate-100 focus:bg-white" />
                      <Input name="phone" type="tel" placeholder="WhatsApp" required className="h-14 text-sm font-bold rounded-2xl bg-slate-50 border-slate-100 focus:bg-white" />
                    </div>
                    <Input name="email" type="email" placeholder="Email" required className="h-14 text-sm font-bold rounded-2xl bg-slate-50 border-slate-100 focus:bg-white" />

                    <div className="grid grid-cols-2 gap-4">
                      <select name="interest" defaultValue="" className="flex h-14 w-full rounded-2xl border border-slate-100 bg-slate-50 py-2 px-4 text-xs font-black text-primary focus:outline-none focus:ring-4 focus:ring-primary/5">
                        <option value="" disabled>Select Goal</option>
                        <option value="study-abroad">Study Abroad</option>
                        <option value="job-ready">Job Ready</option>
                        <option value="mbbs">MBBS</option>
                        <option value="MBA">MBA</option>
                      </select>
                      <select name="qualification" required defaultValue="" className="flex h-14 w-full rounded-2xl border border-slate-100 bg-slate-50 py-2 px-4 text-xs font-black text-primary focus:outline-none focus:ring-4 focus:ring-primary/5">
                        <option value="" disabled>Level</option>
                        <option value="12th">12th Standard</option>
                        <option value="undergrad">Undergrad</option>
                        <option value="postgrad">Postgrad</option>
                        <option value="working">Professional</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-md font-black h-16 rounded-2xl bg-gradient hover:scale-[1.02] transition-all shadow-2xl shadow-primary/30 mt-6 uppercase tracking-widest"
                    >
                      {isSubmitting ? "Syncing..." : "Claim Securely"}
                    </Button>

                    <p className="text-[10px] text-center text-primary/30 mt-auto pt-6">
                      Trusted by 10,000+ Students Worldwide. High Privacy Standard.
                    </p>
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
