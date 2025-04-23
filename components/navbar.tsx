"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ]

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false)

    // Handle hash navigation for same page
    if (href.startsWith("/#") && pathname === "/") {
      const element = document.getElementById(href.substring(2))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">WebWhizz</span>
          </Link>

          {!isMobile ? (
            <nav className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-500 transition-colors relative group"
                    onClick={() => handleNavigation(link.href)}
                  >
                    {link.name}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link href="/#contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get in Touch</Button>
                </Link>
              </motion.div>
            </nav>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="container flex justify-between items-center py-6">
              <Link href="/" className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-white">WebWhizz</span>
              </Link>

              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl text-white hover:text-blue-500 transition-colors"
                    onClick={() => handleNavigation(link.href)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-8"
              >
                <Link href="/#contact">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
