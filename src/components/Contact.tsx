import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-navy-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <form className="mb-12">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 bg-navy-900 rounded" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 bg-navy-900 rounded" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows={5} className="w-full p-2 bg-navy-900 rounded" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="text-teal-500 hover:text-teal-400">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact