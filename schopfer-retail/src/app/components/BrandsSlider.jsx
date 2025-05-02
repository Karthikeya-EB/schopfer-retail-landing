'use client'
import { useEffect, useRef } from 'react'

const logos = [
  '/logos/godrej.png',
  '/logos/nippon.png',
  '/logos/kansai.png',
  '/logos/asianpaints.png',
  '/logos/marshalls.png',
  '/logos/hyphen.png',
]

export default function BrandsSlider() {
  const scrollRef = useRef(null)

  useEffect(() => {
    let scrollAmount = 0

    const autoScroll = () => {
      if (scrollRef.current) {
        scrollAmount = scrollRef.current.scrollLeft + 2.5
        if (
          scrollAmount >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollAmount = 0
        }
        scrollRef.current.scrollLeft = scrollAmount
      }
    }

    const interval = setInterval(autoScroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className=" backdrop-blur-sm py-10 px-4 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-10 overflow-x-scroll whitespace-nowrap scrollbar-hide"
      >
        {logos.concat(logos).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index}`}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  )
}
