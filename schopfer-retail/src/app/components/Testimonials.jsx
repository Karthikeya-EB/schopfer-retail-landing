'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'We had a wonderful experience with Furnishing Studio and Mr. Lokesh in helping us choose the perfect curtains and blinds for our home. Mr. Lokesh was incredibly knowledgeable and attentive, helping us find the best styles and materials to suit our space.',
    name: 'Rohan Goud',
    company: 'Nerolac Paints',
  },
  {
    quote:
      'The quality of the curtains and blinds is outstanding, and they\'ve truly elevated the look of our home. Highly recommend Furnishing Studio for anyone looking for top-notch home furnishings and exceptional customer service.',
    name: 'Riya Sharma',
    company: 'Freelance Designer',
  },
  {
    quote:
      'Very prompt and polite team. Loved the color and fabric suggestions they gave. Everything turned out perfect!',
    name: 'Karan Verma',
    company: 'Interior Studio',
  },
  {
    quote:
      'Very prompt and polite team. Loved the color and fabric suggestions they gave. Everything turned out perfect!',
    name: 'Karan Verma',
    company: 'Interior Studio',
  },
  {
    quote:
      'We had a wonderful experience with Furnishing Studio and Mr. Lokesh in helping us choose the perfect curtains and blinds for our home. Mr. Lokesh was incredibly knowledgeable and attentive, helping us find the best styles and materials to suit our space.',
    name: 'Rohan Goud',
    company: 'Nerolac Paints',
  },
  {
    quote:
      'The quality of the curtains and blinds is outstanding, and they\'ve truly elevated the look of our home. Highly recommend Furnishing Studio for anyone looking for top-notch home furnishings and exceptional customer service.',
    name: 'Riya Sharma',
    company: 'Freelance Designer',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    // Update items per view based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalGroups = Math.ceil(testimonials.length / itemsPerView)
  
  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    (currentIndex * itemsPerView) + itemsPerView
  )

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-12 px-4 md:py-42 md:px-6 lg:px-10 section h-screen bg-[#F6FCDF] border-t border-[#94B4C1]/40">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1E488F] mb-8 md:mb-12 text-center">
        Hear from our clients
      </h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 hidden md:block">
          <button 
            onClick={goToPrev}
            className="bg-[#1E488F] p-2 rounded-full shadow-md hover:bg-[#1E488F]/90 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-[#F6FCDF]" />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 hidden md:block">
          <button 
            onClick={goToNext}
            className="bg-[#1E488F] p-2 rounded-full shadow-md hover:bg-[#1E488F]/90 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-[#F6FCDF]" />
          </button>
        </div>

        {/* Testimonials grid/slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm h-full flex flex-col justify-between border border-[#94B4C1]/30"
            >
              <p className="text-[#001F3F] text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-[#1E488F] font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-[#94B4C1] text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex justify-center items-center mt-6 md:hidden space-x-6">
          <button 
            onClick={goToPrev}
            className="bg-[#1E488F] p-2 rounded-full shadow-md hover:bg-[#1E488F]/90 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-[#F6FCDF]" />
          </button>
          
          <button 
            onClick={goToNext}
            className="bg-[#1E488F] p-2 rounded-full shadow-md hover:bg-[#1E488F]/90 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-[#F6FCDF]" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-5 h-2 rounded-lg transition-colors ${
                index === currentIndex ? 'bg-lime-400' : 'bg-[#94B4C1]/40'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}