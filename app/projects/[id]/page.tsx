"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams, notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import { allProjects } from "@/lib/data"

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState<any>(null)
  const [nextProject, setNextProject] = useState<any>(null)
  const [prevProject, setPrevProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const currentProject = allProjects.find((p) => p.id === params.id)

      if (!currentProject) {
        notFound()
        return
      }

      setProject(currentProject)

      // Find next and previous projects
      const currentIndex = allProjects.findIndex((p) => p.id === params.id)
      setNextProject(allProjects[(currentIndex + 1) % allProjects.length])
      setPrevProject(allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length])

      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!project) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container max-w-5xl">
          <Link href="/projects" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech: string, i: number) => (
                <Badge key={i} variant="outline" className="border-blue-500/50 text-blue-400">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden mb-12">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              {project.liveLink && (
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
              {project.githubLink && (
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-blue-600 text-blue-500 hover:text-blue-400">
                    View Source <Github className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-2">Client</h3>
                <p className="text-gray-300">{project.client || "Personal Project"}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Timeline</h3>
                <p className="text-gray-300">{project.timeline || "2 weeks"}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Role</h3>
                <p className="text-gray-300">{project.role || "Full-stack Developer"}</p>
              </div>
            </div>

            <div className="space-y-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {project.challenge && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                  <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {project.features && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Results</h2>
                  <p className="text-gray-300 leading-relaxed">{project.results}</p>
                </div>
              )}
            </div>

            {project.gallery && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="relative h-[250px] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} gallery image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-gray-800 pt-12 mt-12">
              <h2 className="text-2xl font-bold mb-8 text-center">More Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {prevProject && (
                  <Link href={`/projects/${prevProject.id}`}>
                    <motion.div
                      whileHover={{ x: -10 }}
                      className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center"
                    >
                      <ArrowLeft className="h-6 w-6 text-blue-500 mr-4" />
                      <div>
                        <p className="text-sm text-gray-400">Previous Project</p>
                        <h3 className="text-lg font-bold">{prevProject.title}</h3>
                      </div>
                    </motion.div>
                  </Link>
                )}
                {nextProject && (
                  <Link href={`/projects/${nextProject.id}`}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center justify-end text-right"
                    >
                      <div>
                        <p className="text-sm text-gray-400">Next Project</p>
                        <h3 className="text-lg font-bold">{nextProject.title}</h3>
                      </div>
                      <ArrowRight className="h-6 w-6 text-blue-500 ml-4" />
                    </motion.div>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
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
