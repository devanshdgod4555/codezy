"use client"

import { useEffect } from "react"

export default function MicroAnimations() {
  useEffect(() => {
    // Add subtle animations to elements when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    // Select elements to animate
    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    // Add hover animations to buttons and links
    const addHoverEffects = () => {
      const buttons = document.querySelectorAll("button:not(.micro-animated), a:not(.micro-animated)")

      buttons.forEach((button) => {
        button.classList.add("micro-animated")

        button.addEventListener("mouseenter", () => {
          button.style.transition = "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        })

        button.addEventListener("mousemove", (e) => {
          const rect = button.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          const centerX = rect.width / 2
          const centerY = rect.height / 2

          const moveX = ((x - centerX) / centerX) * 5
          const moveY = ((y - centerY) / centerY) * 5

          button.style.transform = `perspective(500px) rotateY(${moveX}deg) rotateX(${-moveY}deg) scale(1.05)`
        })

        button.addEventListener("mouseleave", () => {
          button.style.transform = "perspective(500px) rotateY(0) rotateX(0) scale(1)"
        })
      })
    }

    // Run once and then periodically to catch dynamically added elements
    addHoverEffects()
    const interval = setInterval(addHoverEffects, 2000)

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return null
}
