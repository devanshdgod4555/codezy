"use client"

import React, { useEffect, useState, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import MagneticButton from "@/components/magnetic-button"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  const [particles, setParticles] = useState<Particle[]>([])
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (windowSize.width === 0 || windowSize.height === 0) return

    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    setParticles(newParticles)
  }, [windowSize])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, rgba(0, 0, 0, 0) 70%)",
          opacity,
          scale,
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: particle.size,
              }}
              animate={{
                y: [null, Math.random() * windowSize.height],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Jarvis HUD elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top left corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-8 left-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 L0 0 L40 0" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none"></path>
            <circle cx="60" cy="60" r="30" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" fill="none"></circle>
            <circle cx="60" cy="60" r="20" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" fill="none"></circle>
          </svg>
        </motion.div>

        {/* Bottom right corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 right-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 80 L120 120 L80 120" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none"></path>
            <circle cx="60" cy="60" r="40" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" fill="none"></circle>
            <circle cx="60" cy="60" r="30" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" fill="none"></circle>
          </svg>
        </motion.div>

        {/* Scanning line */}
        <div className="absolute left-0 right-0 h-px bg-blue-500/20 scanning-line" />

        {/* Jarvis face in background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[500px] h-[500px] opacity-20">
            <Image src="/images/jarvis-face.png" alt="Jarvis" fill className="object-contain" />
          </div>
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm">CEO of WebWhizz</Badge>

          <div className="relative">
            <AnimatedText
              text="Dev"
              className="text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500"
            />
            {/* Enhanced holographic effect */}
            <div className="absolute inset-0 holographic" style={{
              background: "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(59, 130, 246, 0.1) 100%)",
              filter: "blur(20px)",
              mixBlendMode: "screen"
            }} />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl text-lg md:text-xl text-gray-300"
          >
            <span className="text-blue-400">Powered by J.A.R.V.I.S</span> - Crafting digital experiences that blend
            cutting-edge technology with stunning design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <MagneticButton>
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </Button>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-500 hover:text-blue-400 rounded-full px-8 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    About Me{" "}
                    <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      // JARVIS APPROVED
                    </span>
                  </span>
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-blue-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-1 bg-blue-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
