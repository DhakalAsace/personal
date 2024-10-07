import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Palette } from 'lucide-react'

interface HeroProps {
  setCurrentPage: (page: string) => void
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const scrollToCreations = () => {
    const creationsSection = document.getElementById('creations')
    if (creationsSection) {
      const yOffset = -80; // Adjust this value to fine-tune the scroll position
      const y = creationsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi I'm <span className="text-[#00b22d]">Asace</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Crafting stunning websites and web applications for clients. Let's bring your digital vision to life!
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <motion.button 
              onClick={() => setCurrentPage('blog')}
              className="bg-[#00b22d] text-white hover:bg-opacity-90 text-lg px-6 py-3 rounded-full inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="mr-2" /> Insights
            </motion.button>
            <motion.button
              onClick={scrollToCreations}
              className="bg-transparent border-2 border-[#00b22d] text-[#00b22d] hover:bg-[#00b22d] hover:text-white text-lg px-6 py-3 rounded-full inline-flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Palette className="mr-2" /> View Portfolio
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end pr-4 md:pr-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-full border-4 border-[#00b22d] group">
            <img
              src="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.15752-9/461616209_1981658845613036_7460727614069582536_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=XI_7PJSjOlYQ7kNvgHQOGPs&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=AR-FnYfKPWY0CIcw7ccNQpU&oh=03_Q7cD1QEGCmXONyiH5Dw2Ym2yZAjvn5WqMB8l0PMFsBHVu-6sqA&oe=672A6613"
              alt="Asace - Web Developer"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#00b22d] opacity-20 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default Hero