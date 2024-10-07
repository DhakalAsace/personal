import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully responsive WooCommerce site with custom theme and plugins.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Portfolio Theme",
    description: "A sleek WordPress theme for creative professionals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Blog Platform",
    description: "A custom WordPress multisite setup for a publishing company.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    demoLink: "#",
    githubLink: "#"
  }
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-navy-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.demoLink} className="flex items-center text-teal-500 hover:text-teal-400">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center text-teal-500 hover:text-teal-400">
                    <Github size={18} className="mr-1" /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects