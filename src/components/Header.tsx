import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  setCurrentPage: (page: string) => void
  currentPage: string
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = (page: string) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  const scrollToCreations = () => {
    setCurrentPage('portfolio')
    setIsMenuOpen(false)
  }

  const isActive = (page: string) => currentPage === page || (page === 'portfolio' && currentPage === 'home')

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 }
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <motion.header 
      className="container mx-auto px-4 py-6 flex justify-between items-center relative z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`${isMobile ? 'hidden' : 'flex'} space-x-6`}>
        <NavLink href="home" onClick={() => handleNavClick('home')} isActive={isActive('home')}>Home</NavLink>
        <NavLink href="blog" onClick={() => handleNavClick('blog')} isActive={isActive('blog')}>Blog</NavLink>
        <NavLink href="#" onClick={scrollToCreations} isActive={isActive('portfolio')}>Portfolio</NavLink>
      </nav>
      {isMobile && (
        <button 
          className="text-white z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>
      )}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col space-y-8 text-2xl">
              <NavLink href="home" onClick={() => handleNavClick('home')} isActive={isActive('home')} variants={linkVariants}>Home</NavLink>
              <NavLink href="blog" onClick={() => handleNavClick('blog')} isActive={isActive('blog')} variants={linkVariants}>Blog</NavLink>
              <NavLink href="#" onClick={scrollToCreations} isActive={isActive('portfolio')} variants={linkVariants}>Portfolio</NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

interface NavLinkProps {
  href: string
  onClick: () => void
  isActive: boolean
  children: React.ReactNode
  variants?: any
}

const NavLink: React.FC<NavLinkProps> = ({ href, onClick, isActive, children, variants }) => (
  <motion.a
    href={href}
    onClick={(e) => { e.preventDefault(); onClick(); }}
    className={`text-lg font-medium transition-colors duration-300 ${isActive ? 'text-[#00b22d]' : 'text-white hover:text-[#00b22d]'}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    variants={variants}
  >
    {children}
  </motion.a>
)

export default Header