import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    quote: "Working with [Your Name] was a game-changer for our company's online presence. Their WordPress expertise and attention to detail resulted in a website that exceeded our expectations."
  },
  {
    name: "Jane Smith",
    company: "Creative Studios",
    quote: "[Your Name] is a true professional. Their ability to translate our vision into a functional and beautiful website was impressive. I highly recommend their services to anyone looking for top-notch WordPress development."
  },
  {
    name: "Mike Johnson",
    company: "E-commerce Solutions",
    quote: "The custom WooCommerce solution [Your Name] developed for us has significantly improved our online sales. Their technical skills and understanding of e-commerce best practices are outstanding."
  }
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Clients Say</h2>
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-navy-800 p-8 rounded-lg shadow-lg">
            <blockquote className="text-lg italic mb-4">"{testimonials[currentIndex].quote}"</blockquote>
            <p className="font-semibold">{testimonials[currentIndex].name}</p>
            <p className="text-teal-500">{testimonials[currentIndex].company}</p>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-teal-500 p-2 rounded-full">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-teal-500 p-2 rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials