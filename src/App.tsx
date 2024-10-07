import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import ProjectShowcase from './components/ProjectShowcase'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import CaseStudy from './components/CaseStudy'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

const caseStudies = {
  innovatetech: {
    name: "InnovateTech",
    overview: "A custom SaaS website design showcase.",
    process: "Utilized modern web technologies to create a sleek and responsive design.",
    challenges: "Balancing aesthetics with functionality while ensuring cross-browser compatibility.",
    results: "A visually stunning website that effectively showcases SaaS products.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide React"],
    projectFeatures: [
      "Responsive design for all devices",
      "Interactive product demos",
      "Seamless navigation experience",
      "Optimized for fast loading times"
    ]
  },
  charityz: {
    name: "CharityZ",
    overview: "A compassionate charity website designed to inspire and facilitate donations.",
    process: "Focused on creating an emotional connection through design and user experience.",
    challenges: "Implementing secure donation systems and showcasing impact effectively.",
    results: "An engaging platform that significantly increased online donations and volunteer sign-ups.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    projectFeatures: [
      "Secure donation portal",
      "Interactive impact visualizations",
      "Volunteer management system",
      "Event calendar and registration"
    ]
  },
  consultingpro: {
    name: "ConsultingPro",
    overview: "A professional consulting website that exudes expertise and trust.",
    process: "Developed a clean, corporate design with a focus on showcasing services and expertise.",
    challenges: "Creating a balance between professionalism and approachability in design.",
    results: "A polished website that effectively communicates the firm's expertise and services.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    projectFeatures: [
      "Service showcase with detailed descriptions",
      "Team member profiles and expertise areas",
      "Client testimonials and case studies",
      "Integrated booking system for consultations"
    ]
  },
  realestate: {
    name: "RealEstate",
    overview: "A sleek real estate website showcasing properties and services.",
    process: "Implemented advanced search and filtering capabilities for property listings.",
    challenges: "Integrating map-based search and handling large volumes of property data efficiently.",
    results: "A user-friendly platform that streamlines property search and increases client engagement.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Framer Motion", "React Hook Form", "Lucide React", "Leaflet", "Chart.js"],
    projectFeatures: [
      "Advanced property search and filtering",
      "Interactive map-based property exploration",
      "Virtual tour integration",
      "Market trends and analytics dashboard"
    ]
  },
  saffronindianfoods: {
    name: "Saffron Indian Foods",
    overview: "An appetizing website for an Indian restaurant, highlighting culinary delights.",
    process: "Designed a visually appealing site that showcases the restaurant's menu and ambiance.",
    challenges: "Capturing the essence of Indian cuisine through web design and user experience.",
    results: "An engaging website that has increased online reservations and takeout orders.",
    techStack: ["WordPress"],
    projectFeatures: [
      "Interactive menu with high-quality food photography",
      "Online reservation system",
      "Integration with food delivery platforms",
      "Customer reviews and testimonials showcase"
    ]
  },
  landingmarketing: {
    name: "Landing Marketing",
    overview: "A high-converting landing page designed for marketing campaigns.",
    process: "Focused on creating a compelling and action-oriented design to maximize conversions.",
    challenges: "Optimizing the page for various marketing channels and A/B testing different layouts.",
    results: "A versatile landing page template that consistently achieves high conversion rates.",
    techStack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    projectFeatures: [
      "Modular design for easy customization",
      "Built-in A/B testing capabilities",
      "Integration with popular marketing tools",
      "Mobile-first, responsive design"
    ]
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null)
  const creationsSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    creationsSectionRef.current = document.getElementById('creations')
  }, [])

  const handlePageChange = (page: string) => {
    if (page === 'portfolio') {
      setCurrentPage('home')
      setTimeout(() => {
        if (creationsSectionRef.current) {
          const yOffset = -80; // Adjust this value to fine-tune the scroll position
          const y = creationsSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100)
    } else {
      setCurrentPage(page)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <ErrorBoundary>
        <div className="relative z-10">
          <Header setCurrentPage={handlePageChange} currentPage={currentPage} />
          <main className="pb-16">
            {currentPage === 'home' ? (
              <>
                <Hero setCurrentPage={handlePageChange} />
                <TechStack />
                <ProjectShowcase setCurrentPage={handlePageChange} />
              </>
            ) : currentPage === 'blog' ? (
              selectedBlogId ? (
                <BlogPost id={selectedBlogId} setSelectedBlogId={setSelectedBlogId} />
              ) : (
                <Blog setSelectedBlogId={setSelectedBlogId} />
              )
            ) : currentPage.startsWith('case-study/') ? (
              <CaseStudy 
                project={caseStudies[currentPage.split('/')[1] as keyof typeof caseStudies]} 
                setCurrentPage={handlePageChange}
              />
            ) : null}
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#00b22d] via-[#00b22d] to-transparent opacity-10 rounded-bl-full -z-10"></div>
    </div>
  )
}

export default App