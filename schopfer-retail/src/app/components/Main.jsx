'use client';

import React from 'react';
import { ChevronRight, ShoppingCart, BarChart2, Repeat, TrendingUp, Edit, Image, PieChart } from 'lucide-react';
import { useEffect, useRef } from 'react'

const logos = [
  '/logos/godrej.png',
  '/logos/nippon.png',
  '/logos/kansai.png',
  '/logos/asianpaints.png',
  '/logos/marshalls.png',
  '/logos/hyphen.png',
]

export default function Main() {

    // Brand Slider
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
    <section className="w-full section h-screen bg-[#F6FCDF] text-[#001F3F]">


      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 py-16 pt-24 lg:pt-20 lg:pb-14 max-w-7xl mx-auto">

        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl mb-12 mt-12 lg:mb-0">

          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1 text-[#001F3F]"> 
            <span className="bg-lime-400 text-[#001F3F] px-2 rounded-md">Transform</span>{" "}
            Product Listings Into Sales Machines
          </h1>

          <p className="text-lg md:text-2xl font-semibold mb-6 text-[#001F3F]">
            Supercharge your E-commerce Sales with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#001F3F] text-[#F6FCDF] font-bold py-3 px-8 rounded-lg flex items-center hover:border-lime-400 ">
              Schedule a Call <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div> 
            
        
        <div className="flex-1 flex justify-center items-center">
          <div className="p-2 ml-10 mx-w-md rounded-lg w-full">
            <img
              src='/feature-images/product-listing.jpg'
              className="w-full h-full object-fit rounded-md"
            />
          </div>
        </div>
      </div>
   

      {/* Stats Section */}
      <div className="bg-[#001F3F] text-[#F6FCDF] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-lime-600 text-[#F6FCDF] w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-[26px] font-bold">2,000+</p>
              <p className="text-sm md:text-base mt-1">Brands Served</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-600 text-[#F6FCDF] w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <BarChart2 className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-[26px] font-bold">1,239</p>
              <p className="text-sm md:text-base mt-1">Listings Created</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-600 text-[#F6FCDF] w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Repeat className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-[26px] font-bold">21%</p>
              <p className="text-sm md:text-base mt-1">Decrease in Returns</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-600 text-[#F6FCDF] w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-[26px] font-bold">89%</p>
              <p className="text-sm md:text-base mt-1">Better Conversions</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brands Section */}
      <div className="bg-[#94B4C1]/20 backdrop-blur-sm py-6 px-4 overflow-hidden border-t border-b border-[#94B4C1]/40">
        <div
          ref={scrollRef}
          className="flex space-x-10 overflow-x-scroll whitespace-nowrap scrollbar-hide"
        >
          {logos.concat(logos).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
      
     
    </section>
  );
}