import React from 'react'
import { motion } from 'framer-motion'

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind CSS', color: '#38B2AC' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Lucide React', color: '#FFD700' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'WordPress', color: '#21759B' },
  { name: 'GraphQL', color: '#E10098' }
]

const TechStack: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">Tech Stack & Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {techStack.map((tech, index) => (
          <motion.div 
            key={tech.name} 
            className="flex items-center justify-center h-16 bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05, backgroundColor: tech.color }}
          >
            <span className="font-medium text-white">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TechStack