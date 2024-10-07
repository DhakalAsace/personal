import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

interface BlogProps {
  setSelectedBlogId: (id: number) => void
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const Blog: React.FC<BlogProps> = ({ setSelectedBlogId }) => {
  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-[#00b22d]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{post.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <motion.button
                  onClick={() => setSelectedBlogId(post.id)}
                  className="inline-flex items-center text-[#00b22d] hover:text-white group"
                  whileHover={{ x: 5 }}
                >
                  Read More 
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog