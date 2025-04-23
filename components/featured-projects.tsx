"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ParallaxSection from "@/components/parallax-section"
import { featuredProjects } from "@/lib/data"

export default function FeaturedProjects() {
  return (
    <ParallaxSection className="py-24 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
            Featured Work
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of my recent projects showcasing my skills and expertise in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60" />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-blue-600/90 text-white">{project.category}</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-blue-500/50 text-blue-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link href={`/projects/${project.id}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {project.liveLink && (
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-blue-600 text-blue-500 hover:text-blue-400">
                            Live Site <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-blue-600 text-blue-500 hover:text-blue-400">
                            Source <Github className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-500 hover:text-blue-400">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </ParallaxSection>
  )
}
