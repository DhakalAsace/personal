import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

interface BlogPostProps {
  id: number
  setSelectedBlogId: (id: number | null) => void
}

const BlogPost: React.FC<BlogPostProps> = ({ id, setSelectedBlogId }) => {
  const post = blogPosts.find(post => post.id === id)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.button
          onClick={() => setSelectedBlogId(null)}
          className="mb-8 text-[#00b22d] hover:text-white flex items-center"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </motion.button>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-[#00b22d]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </motion.h1>
        <motion.div
          className="mb-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span>{post.date}</span> • <span>{post.author}</span>
        </motion.div>
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-xl mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.div
          className="prose prose-lg prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  )
}

export default BlogPost