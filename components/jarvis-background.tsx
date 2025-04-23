"use client"

import { useEffect, useRef } from "react"

export default function JarvisBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Particles configuration
    const particles: Particle[] = []
    const particleCount = 100
    const maxDistance = 150
    const mouseRadius = 100
    let mouseX = 0
    let mouseY = 0

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.25})`,
      })
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy

        // Mouse interaction
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx)
          const force = (mouseRadius - distance) / mouseRadius
          p.vx -= Math.cos(angle) * force * 0.2
          p.vy -= Math.sin(angle) * force * 0.2
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${((maxDistance - distance) / maxDistance) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Draw circular HUD elements
      drawHudElements(ctx, canvas.width, canvas.height)
    }

    // Draw Jarvis-inspired HUD elements
    const drawHudElements = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Bottom right corner HUD
      ctx.beginPath()
      ctx.arc(width - 100, height - 100, 50, 0, Math.PI * 0.5)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(width - 100, height - 100, 60, 0, Math.PI * 0.4)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Top left corner HUD
      ctx.beginPath()
      ctx.arc(100, 100, 40, Math.PI, Math.PI * 1.5)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(100, 100, 50, Math.PI, Math.PI * 1.6)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Center scanning line
      const time = Date.now() * 0.001
      const scanY = height * 0.5 + Math.sin(time) * height * 0.2

      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(width, scanY)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
      ctx.lineWidth = 2
      ctx.stroke()
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

// Particle type
interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
}
