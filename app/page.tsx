"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Cpu, Globe, Layers, Zap, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import ContactForm from "@/components/contact-form"
import MagneticButton from "@/components/magnetic-button"
import ParallaxSection from "@/components/parallax-section"
import FeaturedProjects from "@/components/featured-projects"
import HeroSection from "@/components/hero-section"
import { testimonials, services } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Add animate-on-scroll class to appropriate elements
    const elements = document.querySelectorAll("h2, h3, p, .card, .badge, .button")
    elements.forEach((el) => {
      el.classList.add("animate-on-scroll")
    })
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <ParallaxSection className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
                Turning ideas into digital reality
              </h2>
              <p className="text-gray-300 mb-6">
                As the CEO of WebWhizz, I specialize in creating immersive digital experiences that push the boundaries
                of web technology. With expertise in Next.js, React, and modern frontend frameworks, I build solutions
                that are not just visually stunning but also performant and accessible.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-2 group">
                  <Zap className="text-blue-500 h-5 w-5 group-hover:text-blue-400 transition-colors" />
                  <span className="group-hover:text-blue-400 transition-colors">Next.js</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Code className="text-blue-500 h-5 w-5 group-hover:text-blue-400 transition-colors" />
                  <span className="group-hover:text-blue-400 transition-colors">TypeScript</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Layers className="text-blue-500 h-5 w-5 group-hover:text-blue-400 transition-colors" />
                  <span className="group-hover:text-blue-400 transition-colors">Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Cpu className="text-blue-500 h-5 w-5 group-hover:text-blue-400 transition-colors" />
                  <span className="group-hover:text-blue-400 transition-colors">Framer Motion</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-500 hover:text-blue-400 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Learn more about me</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent z-10" />
                <Image src="/images/jarvis-face.png" alt="Jarvis Interface" fill className="object-cover" />

                {/* HUD overlay elements */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="250"
                      cy="250"
                      r="200"
                      stroke="rgba(59, 130, 246, 0.1)"
                      strokeWidth="1"
                      fill="none"
                    ></circle>
                    <circle
                      cx="250"
                      cy="250"
                      r="150"
                      stroke="rgba(59, 130, 246, 0.2)"
                      strokeWidth="1"
                      fill="none"
                    ></circle>
                    <circle
                      cx="250"
                      cy="250"
                      r="100"
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                      fill="none"
                    ></circle>

                    {/* Data points */}
                    <circle cx="250" cy="50" r="5" fill="rgba(59, 130, 246, 0.5)"></circle>
                    <circle cx="450" cy="250" r="5" fill="rgba(59, 130, 246, 0.5)"></circle>
                    <circle cx="250" cy="450" r="5" fill="rgba(59, 130, 246, 0.5)"></circle>
                    <circle cx="50" cy="250" r="5" fill="rgba(59, 130, 246, 0.5)"></circle>

                    {/* Connection lines */}
                    <line x1="250" y1="50" x2="450" y2="250" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1"></line>
                    <line x1="450" y1="250" x2="250" y2="450" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1"></line>
                    <line x1="250" y1="450" x2="50" y2="250" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1"></line>
                    <line x1="50" y1="250" x2="250" y2="50" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1"></line>
                  </svg>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-blue-600 rounded-xl p-6 shadow-xl"
                whileHover={{ y: -5, x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm">Years of Experience</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Rest of the page content remains the same */}
      <FeaturedProjects />

      {/* Services Section */}
      <ParallaxSection className="py-24 bg-gradient-to-b from-gray-900 to-black" id="services">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">Services</Badge>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500 glitch"
              data-text="What I Offer"
            >
              What I Offer
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your specific needs, from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Card className="bg-gray-900 border-gray-800 h-full flex flex-col holographic relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader>
                    <motion.div 
                      className="h-12 w-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-blue-300 transition-colors">Starting at ₹{service.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start group-hover:translate-x-2 transition-transform"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <div className="mr-2 mt-1 h-4 w-4 text-blue-500 group-hover:text-blue-400 transition-colors">✓</div>
                          <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <MagneticButton>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:scale-105 transition-transform">
                        Get Started
                      </Button>
                    </MagneticButton>
                  </CardFooter>
                </Card>

                {service.popular && (
                  <motion.div 
                    className="absolute -top-3 right-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Badge className="bg-blue-600 text-white px-3 py-1 group-hover:bg-blue-500 transition-colors">Popular</Badge>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
              What Clients Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Card className="bg-gray-900 border-gray-800 h-full flex flex-col relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-blue-500/20">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400 group-hover:text-blue-300 transition-colors">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Star className="h-5 w-5 text-yellow-500" />
                        </motion.div>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ParallaxSection className="py-24 bg-gradient-to-b from-black to-gray-900" id="contact">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">Contact</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
                Let's Work Together
              </h2>
              <p className="text-gray-300 mb-8">
                Have a project in mind? Get in touch and let's create something amazing together.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Mumbai, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">webwhizz.com@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+91 7798933033</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 hover:bg-blue-600/30 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 hover:bg-blue-600/30 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 hover:bg-blue-600/30 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Globe className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold text-white">WebWhizz</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link href="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-blue-500 transition-colors">
                Projects
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Services
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} WebWhizz. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
