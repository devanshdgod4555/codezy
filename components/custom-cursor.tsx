"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface MousePosition {
  x: number
  y: number
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [isClicking, setIsClicking] = useState<boolean>(false)
  const [tooltipText, setTooltipText] = useState<string>("Hover")
  const hoverTimeout = useRef<NodeJS.Timeout>()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    // Hide cursor on mobile devices
    if (window.innerWidth < 768) {
      setMousePosition({ x: -9999, y: -9999 })
      return
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleHoverStart = (e: Event) => {
      clearTimeout(hoverTimeout.current)
      const target = e.target as HTMLElement
      const text = target.getAttribute("data-tooltip") || "Hover"
      setTooltipText(text)
      setIsHovering(true)
    }

    const handleHoverEnd = () => {
      hoverTimeout.current = setTimeout(() => setIsHovering(false), 80)
    }

    const addListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, .interactive")
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart)
        el.addEventListener("mouseleave", handleHoverEnd)
      })
    }

    // Use requestAnimationFrame to prevent hydration mismatch
    requestAnimationFrame(() => addListeners())

    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      clearTimeout(hoverTimeout.current)

      const interactiveElements = document.querySelectorAll("a, button, .interactive")
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [])

  if (isMobile) {
    return null
  }

  return (
    <React.Fragment>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.5,
        }}
      />

      {/* Cursor trail with delay */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-500/20 pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.3,
          delay: 0.05,
        }}
      />

      {/* Cursor ring with more delay */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-blue-500/30 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.2 : isClicking ? 0.9 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.2,
          delay: 0.1,
        }}
      />

      {/* Hover tooltip */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 px-2 py-1 text-xs text-white bg-black/80 rounded pointer-events-none z-50"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y + 20,
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isClicking ? "Click" : tooltipText}
        </motion.div>
      )}
    </React.Fragment>
  )
}
