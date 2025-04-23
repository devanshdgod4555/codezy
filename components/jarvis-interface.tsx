"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function JarvisInterface() {
  const [loaded, setLoaded] = useState(false)
  const [systemStatus, setSystemStatus] = useState("Initializing...")
  const [statusMessages, setStatusMessages] = useState<string[]>([])

  useEffect(() => {
    const messages = [
      "Scanning environment...",
      "Analyzing user data...",
      "Calibrating interface...",
      "Loading portfolio assets...",
      "Establishing secure connection...",
      "Optimizing display parameters...",
      "System ready.",
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < messages.length) {
        setSystemStatus(messages[index])
        setStatusMessages((prev) => [...prev, messages[index]])
        index++
      } else {
        clearInterval(interval)
        setTimeout(() => setLoaded(true), 500)
      }
    }, 600)

    return () => clearInterval(interval)
  }, [])

  if (loaded) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 text-center mb-8">
          <svg className="w-24 h-24 mx-auto mb-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="283"
              strokeDashoffset="283"
            >
              <animate attributeName="stroke-dashoffset" values="283;0" dur="2s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="50" cy="50" r="20" fill="rgba(59, 130, 246, 0.3)"></circle>
          </svg>
          <h2 className="text-2xl font-bold mb-2">J.A.R.V.I.S</h2>
          <p className="text-blue-400">Just A Rather Very Intelligent System</p>
        </motion.div>

        <div className="bg-blue-900/10 border border-blue-500/30 rounded-lg p-4 text-blue-400 font-mono text-sm">
          <div className="mb-4">
            <span className="text-blue-500">{">"}</span> System Status: {systemStatus}
          </div>
          <div className="h-40 overflow-y-auto">
            {statusMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-1"
              >
                <span className="text-blue-500 mr-2">{">"}</span>
                {message}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-10 left-0 right-0 text-center text-blue-400 text-xs">
          Press ESC to skip intro
        </div>
      </div>
    </div>
  )
}
