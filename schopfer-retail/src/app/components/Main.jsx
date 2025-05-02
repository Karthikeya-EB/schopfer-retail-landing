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
    <section className="w-full min-h-screen snap-start text-black">


      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 py-16 pt-24 lg:pt-20 lg:pb-14 max-w-7xl mx-auto">

        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl mb-12 mt-12 lg:mb-0">

          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1">
            <span className="bg-lime-400 text-black px-2 rounded-md">Transform</span>{" "}
            Product Listings Into Sales Machines
          </h1>

          <p className="text-lg md:text-2xl mb-6">
            Supercharge your E-commerce Sales with us.
          </p>

          <div className="flex flex-col sm:flex-row  gap-4 w-full sm:w-auto">
            <button className="btn btnPrimary">
              Schedule a Call <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div> 
          
        {/* Right Content - Simple visual */
        /* <div className="flex-1 flex justify-center items-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl w-full max-w-md">
           
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center">
                <ShoppingCart className="text-green-800" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Product Listing Assistant</h3>
                <p className="text-sm text-gray-200">AI-powered optimization</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="h-4 bg-white/20 rounded-full w-full"></div>
              <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
              <div className="h-4 bg-white/20 rounded-full w-5/6"></div>
              <div className="h-4 bg-white/20 rounded-full w-2/3"></div>
            </div>
            
            <div className="border-t border-white/20 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Conversion Rate:</span>
                <span className="font-medium text-lime-300">+89%</span>
              </div>

            </div>*/}
            
            {/* Image with fixed dimensions */}
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
      <div className="bg-lime/10 text-[#1A2E3C] backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-lime-400 text-green-800 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-[26px] font-bold">2,000+</p>
              <p className="text-sm md:text-base mt-1">Brands Served</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-400 text-green-800 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <BarChart2 className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-[26px] font-bold">1,239</p>
              <p className="text-sm md:text-base mt-1">Listings Created</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-400 text-green-800 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Repeat className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-[26px] font-bold">21%</p>
              <p className="text-sm md:text-base mt-1">Decrease in Returns</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-400 text-green-800 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-[26px] font-bold">89%</p>
              <p className="text-sm md:text-base mt-1">Better Conversions</p>
            </div>
          </div>
        </div>
      </div>
      
 {/* Brands Section */}
 <div className="bg-white/80 backdrop-blur-sm py-4 px-4 overflow-hidden">
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