"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    // Show after scrolling a bit or after a few seconds
    const timeout = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/918885554048" target="_blank" rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-[#1ebd5a] transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
          
          <span className="absolute -top-12 right-0 bg-white text-primary text-xs font-bold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with us
            <div className="absolute -bottom-1 right-5 w-3 h-3 bg-white transform rotate-45"></div>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
