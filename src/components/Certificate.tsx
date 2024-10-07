import React from 'react'
import { Award } from 'lucide-react'

const Certificate: React.FC = () => {
  return (
    <section id="certificate" className="py-20 bg-navy-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Programming Diploma Certificate</h2>
        <div className="bg-navy-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Award size={48} className="text-teal-500 mr-4" />
            <h3 className="text-2xl font-semibold">Web Development Diploma</h3>
          </div>
          <p className="text-center mb-6">
            Awarded by [Institution Name] for successfully completing the comprehensive Web Development program.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Advanced JavaScript and ES6+</li>
            <li>React and Redux</li>
            <li>Node.js and Express</li>
            <li>Database Design with MongoDB and MySQL</li>
            <li>WordPress Theme and Plugin Development</li>
          </ul>
          <p className="text-center">
            This intensive program has equipped me with a strong foundation in full-stack web development, enabling me to create robust and scalable web applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certificate