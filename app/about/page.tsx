"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Globe, Linkedin, Mail } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import { skills, experiences, education } from "@/lib/data"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">About Me</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
              Dev
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              CEO of WebWhizz | UI/UX Designer | Web Developer | Digital Experience Creator
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -5 }}
                className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 hover:bg-blue-600/30 transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5 }}
                className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 hover:bg-blue-600/30 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5 }}
                className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 hover:bg-blue-600/30 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-blue-500/20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <Image src="/placeholder.svg?height=800&width=600" alt="Dev portrait" fill className="object-cover" />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-6">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span>webwhizz.com@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <span>webwhizz.dev</span>
                  </div>
                  <div className="flex items-center space-x-3">
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
                    <span>+91 7798933033</span>
                  </div>
                  <div className="flex items-center space-x-3">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  I'm Dev, the CEO and founder of WebWhizz, a creative studio specializing in crafting immersive digital
                  experiences. With over 5 years of experience in UI/UX design and web development, I've helped
                  businesses of all sizes establish their digital presence and connect with their audiences in
                  meaningful ways.
                </p>
                <p>
                  My journey began as a self-taught developer with a passion for design. I was always fascinated by the
                  intersection of technology and creativity, and how digital experiences could evoke emotions and drive
                  actions. This fascination led me to explore various aspects of web development and design, from
                  front-end frameworks to user experience principles.
                </p>
                <p>
                  What sets my work apart is my focus on creating futuristic, cutting-edge designs that not only look
                  visually stunning but also provide intuitive user experiences. I believe that great design should be
                  invisible – it should guide users naturally without them even noticing the thoughtful decisions behind
                  each interaction.
                </p>
                <p>
                  Today, I specialize in building modern web applications using Next.js, React, and other cutting-edge
                  technologies. My approach combines technical expertise with creative vision, resulting in digital
                  products that are both beautiful and functional.
                </p>
                <p>
                  When I'm not coding or designing, you can find me exploring new design trends, contributing to
                  open-source projects, or mentoring aspiring developers. I'm always eager to take on new challenges and
                  push the boundaries of what's possible in digital design.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6">My Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30" />
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                      <div className="h-6 w-6 rounded-full bg-blue-600 border-4 border-black" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`w-5/12 ${index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8"}`}
                    >
                      <Card className="bg-gray-900 border-gray-800">
                        <CardContent className="pt-6">
                          <Badge className="mb-2 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30">
                            {experience.period}
                          </Badge>
                          <h3 className="text-xl font-bold mb-1">{experience.role}</h3>
                          <p className="text-blue-400 mb-4">{experience.company}</p>
                          <p className="text-gray-300">{experience.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900 border-gray-800 h-full">
                    <CardContent className="pt-6">
                      <Badge className="mb-2 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30">{edu.period}</Badge>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-blue-400 mb-4">{edu.institution}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

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
