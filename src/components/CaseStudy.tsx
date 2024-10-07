import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronDown, Lightbulb, Target, Code, Briefcase, CheckCircle, AlertTriangle, TrendingUp, Star, Quote } from 'lucide-react'

interface CaseStudyProps {
  project: {
    name: string
    overview: string
    process: string
    challenges: string
    results: string
    techStack: string[]
    projectFeatures: string[]
    testimonial?: {
      quote: string
      author: string
      role: string
    }
  }
  setCurrentPage: (page: string) => void
}

const CaseStudy: React.FC<CaseStudyProps> = ({ project, setCurrentPage }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  if (!project) {
    return <div>Project not found</div>
  }

  const sections = [
    { 
      title: "Project Overview", 
      content: project.overview, 
      icon: Lightbulb, 
      color: "text-yellow-400"
    },
    { 
      title: "Process and Approach", 
      content: project.process, 
      icon: Target, 
      color: "text-blue-400"
    },
    { 
      title: "Challenges and Solutions", 
      content: project.challenges, 
      icon: AlertTriangle, 
      color: "text-red-400"
    },
    { 
      title: "Potential Results and Impact", 
      content: project.results, 
      icon: TrendingUp, 
      color: "text-green-400"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.button
          onClick={() => setCurrentPage('portfolio')}
          className="mb-8 text-[#00b22d] hover:text-white flex items-center"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </motion.button>
        <div className="flex items-center justify-center mb-8">
          <Briefcase size={48} className="text-[#00b22d] mr-4" />
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-[#00b22d]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.name}
          </motion.h1>
        </div>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={false}
              animate={{ height: expandedSection === section.title ? 'auto' : 'auto' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full p-4 text-left bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <section.icon className={`${section.color} mr-3`} size={24} />
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <ChevronDown
                  className={`text-[#00b22d] transition-transform duration-300 ${
                    expandedSection === section.title ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {expandedSection === section.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4"
                  >
                    <p className="text-gray-300">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00b22d] flex items-center">
              <Star size={24} className="mr-2" />
              Key Features
            </h2>
            <p className="text-gray-300 mb-4">
              Websites of this type typically include the following features:
            </p>
            <ul className="list-none space-y-2">
              {project.projectFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={16} className="text-[#00b22d] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00b22d] flex items-center">
              <Code size={24} className="mr-2" />
              Tech Stack and Tools Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <CheckCircle size={12} className="text-[#00b22d] mr-2" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {project.testimonial && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#00b22d] flex items-center">
                <Quote size={24} className="mr-2" />
                Client Testimonial
              </h2>
              <blockquote className="italic text-gray-300 mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <p className="text-right">
                <span className="font-semibold text-[#00b22d]">{project.testimonial.author}</span>
                <br />
                <span className="text-gray-400">{project.testimonial.role}</span>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudy