"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function JarvisAssistant() {
  const [isVisible, setIsVisible] = useState(false)
  const [messages, setMessages] = useState<string[]>([])
  const [currentMessage, setCurrentMessage] = useState("")

  useEffect(() => {
    // Show Jarvis after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)

      // Initial greeting
      showMessage("Hello, I am JARVIS. Welcome to Dev's portfolio.")

      // Additional messages
      setTimeout(() => showMessage("Feel free to explore the projects and services."), 4000)
      setTimeout(() => showMessage("Can I assist you with anything today?"), 8000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const showMessage = (text: string) => {
    setMessages((prev) => [...prev, text])

    // Type out the message
    let i = 0
    setCurrentMessage("")

    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setCurrentMessage((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => setCurrentMessage(""), 3000)
      }
    }, 50)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <div className="flex items-end">
            <AnimatePresence>
              {currentMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  className="mr-4 mb-4 bg-blue-900/80 backdrop-blur-sm p-4 rounded-lg max-w-xs border border-blue-500/30"
                >
                  <p className="text-blue-100 text-sm">{currentMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-16 w-16 rounded-full bg-blue-900/80 backdrop-blur-sm border-2 border-blue-500/50 flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => showMessage("How can I assist you with your web development needs?")}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/20 animate-pulse" />
                <Image src="/images/jarvis-face.png" alt="JARVIS" width={64} height={64} className="z-10" />
              </div>

              {/* Circular animation */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="1"
                  strokeDasharray="302"
                  strokeDashoffset="302"
                  className="animate-[circle-dash_3s_linear_infinite]"
                ></circle>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
