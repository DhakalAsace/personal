import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Globe, FileText } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const projects = [
  {
    id: 1,
    name: "InnovateTech",
    description: "A custom SaaS website design showcase.",
    url: "https://saaswebsitedesign.netlify.app/",
    caseStudy: "case-study/innovatetech",
    fallbackImage: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.15752-9/462270692_1080765134052547_3719955182475927539_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=t4GERaQ9rmUQ7kNvgGKfpvW&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=AVUYaT0RBYlYd4mvjIb_mMU&oh=03_Q7cD1QHfn1juCqUU7xtbKVtO0DgkendJ24emtSpQJUEM0p2inA&oe=672BB440"
  },
  {
    id: 2,
    name: "CharityZ",
    description: "A compassionate charity website designed to inspire and facilitate donations.",
    url: "https://charityz.netlify.app/",
    caseStudy: "case-study/charityz",
    fallbackImage: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.15752-9/462345971_845637924047241_4804334241602956034_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=KPBAUDcsh2gQ7kNvgEAMqPU&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=AVUYaT0RBYlYd4mvjIb_mMU&oh=03_Q7cD1QGH64DLdgM62_6rx9u8O2u6C_mxPmidED4SpkEGnGdt5w&oe=672BBC4E"
  },
  {
    id: 3,
    name: "ConsultingPro",
    description: "A professional consulting website that exudes expertise and trust.",
    url: "https://consultingprofessional.netlify.app/",
    caseStudy: "case-study/consultingpro",
    fallbackImage: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.15752-9/460022401_564116085964691_7982687542684705193_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=890lJClxyW8Q7kNvgGr1c1T&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=AVUYaT0RBYlYd4mvjIb_mMU&oh=03_Q7cD1QHT86mB9h3SSRc6CoOEHFfgMzxUOxCSqFJ0jDVy45lYWg&oe=672BBCA3"
  },
  {
    id: 4,
    name: "RealEstate",
    description: "A sleek real estate website showcasing properties and services.",
    url: "https://asacerealestate.netlify.app/",
    caseStudy: "case-study/realestate",
    fallbackImage: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.15752-9/462189341_561656019716408_3018896255352340393_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=LBHq_BApzYMQ7kNvgFHw9WJ&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=AVUYaT0RBYlYd4mvjIb_mMU&oh=03_Q7cD1QE7-4mQsHXY9Grb3tRGBGBc4p1SfESxX6jX_KmlFIEmJQ&oe=672BB852"
  },
  {
    id: 5,
    name: "Saffron Indian Foods",
    description: "An appetizing website for an Indian restaurant, highlighting culinary delights.",
    url: "https://saffronindianfoods.ca/",
    caseStudy: "case-study/saffronindianfoods",
    fallbackImage: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.15752-9/462380512_1687055938785151_304340190786968647_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=JGBd0BM4MZ0Q7kNvgE1VqU2&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=AVUYaT0RBYlYd4mvjIb_mMU&oh=03_Q7cD1QEoZjFUBju_Klf8ADCtTp9lgh9y49NB1R18tfk53T9WEA&oe=672BC784"
  },
  {
    id: 6,
    name: "Landing Marketing",
    description: "A high-converting landing page designed for marketing campaigns.",
    url: "https://landingmarketing.netlify.app/",
    caseStudy: "case-study/landingmarketing",
    fallbackImage: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.15752-9/462362127_1237460137290990_11221562163373040_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=bel3Vo6kqA0Q7kNvgE4izik&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=AVUYaT0RBYlYd4mvjIb_mMU&oh=03_Q7cD1QHVR9BCzVkwsDX27cntPHpIiUIx2dGof1nAnVY1xnKHNA&oe=672BC16C"
  }
]

interface ProjectShowcaseProps {
  setCurrentPage: (page: string) => void
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ setCurrentPage }) => {
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(true)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsPreviewAvailable(width >= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="creations" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00b22d]">My Creations</h2>
        <div className="embla relative overflow-hidden">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex">
              {projects.map((project) => (
                <div key={project.id} className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-2">
                  <ProjectCard
                    project={project}
                    isPreviewAvailable={isPreviewAvailable}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="embla__prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="embla__next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors z-10"
            onClick={scrollNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="embla__dots flex justify-center mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot w-3 h-3 rounded-full mx-1 transition-all ${
                index === selectedIndex ? 'bg-[#00b22d]' : 'bg-gray-500'
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
  isPreviewAvailable: boolean
  setCurrentPage: (page: string) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isPreviewAvailable, setCurrentPage }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-[#00b22d] flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        {isPreviewAvailable ? (
          <iframe
            src={project.url}
            title={project.name}
            className="w-full h-full"
            loading="lazy"
          />
        ) : (
          <img
            src={project.fallbackImage}
            alt={project.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      </div>
      <div className="p-4 flex justify-between">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00b22d] text-white px-3 py-1 rounded-full inline-flex items-center text-sm hover:bg-opacity-80 transition-colors"
        >
          <Globe className="mr-1" size={14} />
          Visit Site
        </a>
        <button
          onClick={() => setCurrentPage(project.caseStudy)}
          className="bg-gray-700 text-white px-3 py-1 rounded-full inline-flex items-center text-sm hover:bg-opacity-80 transition-colors"
        >
          <FileText className="mr-1" size={14} />
          Case Study
        </button>
      </div>
    </motion.div>
  )
}

export default ProjectShowcase