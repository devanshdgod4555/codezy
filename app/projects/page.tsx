"use client"

import { useState } from "react"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import { allProjects } from "@/lib/data"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Get unique categories
  const categories = Array.from(new Set(allProjects.map((project) => project.category)))

  // Filter projects based on search and category
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <CustomCursor />
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <h1>Projects</h1>
        <p>Project list will be displayed here.</p>
      </div>
    </div>
  )
}
