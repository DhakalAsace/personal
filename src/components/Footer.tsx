import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-gray-800 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">&copy; {new Date().getFullYear()} Asace. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer