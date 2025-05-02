'use client';

import React, { useState } from 'react';
import { Mail, Send, BarChart2, Star, ChevronRight, ChevronLeft } from 'lucide-react';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('engagement');

  const features = [
    { 
      id: 'engagement', 
      label: 'Engagement', 
      icon: <Mail className="w-6 h-6" />, 
      color: 'bg-emerald-600',
      lightColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      title: "Turn Browsers Into Buyers",
      description: "Drive deeper connections with your audience through interactive, value-driven content. Turn casual visitors into loyal customers who keep coming back.",
      features: [
        "Create content that sparks real conversations.",
        "Increase repeat visits and customer loyalty.",
        "Build a community around your brand."
      ],
      image: "/feature-images/engagement.jpg",
      cta: "Explore our engagement features"
    },
    { 
      id: 'listing', 
      label: 'Product Listing', 
      icon: <Send className="w-6 h-6" />, 
      color: 'bg-blue-600',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      title: "Craft Listings That Sell",
      description: "Transform ordinary product listings into powerful sales tools. We optimize copy, keywords, and layout to maximize discoverability and conversions.",
      features: [
        "SEO-optimized titles and descriptions.",
        "B+ Listings (Images + Content + Infographics)",
        "A+ Listings (Enhanced Brand Content)",
        "Structure listings for faster, smarter buying decisions",
        "Highlight key benefits and features clearly."
      ],
      image: "/feature-images/product-listing.jpg",
      cta: "Explore our listing tools"
    },
    { 
      id: 'marketing', 
      label: 'Marketing', 
      icon: <Star className="w-6 h-6" />, 
      color: 'bg-rose-600',
      lightColor: 'bg-rose-50',
      textColor: 'text-rose-600',
      title: "Amplify Your Reach",
      description: "Supercharge your brand's reach with smart, targeted marketing strategies. Capture attention, build excitement, and turn interest into real sales.",
      features: [
        "Target the right audience with precision.",
        "Craft campaigns that drive real engagement.",
        "Turn brand awareness into measurable sales growth."
      ],
      image: "/feature-images/marketing.png",
      cta: "Explore influencer marketing"
    },
    { 
      id: 'photography', 
      label: 'Photography', 
      icon: <BarChart2 className="w-6 h-6" />, 
      color: 'bg-teal-600',
      lightColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      title: "Pictures That Persuade",
      description: "Bring your products to life with stunning, high-converting visuals. Professional images that set clear expectations and build instant trust.",
      features: [
        "High-quality, conversion-driven product photography.",
        "Visual storytelling that builds trust instantly.",
        "Showcase true product details and value."
      ],
      image: "/feature-images/photography.png",
      cta: "Explore our photography"
    }
  ];

  const currentIndex = features.findIndex(feature => feature.id === activeTab);
  const currentFeature = features[currentIndex];

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % features.length;
    setActiveTab(features[nextIndex].id);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + features.length) % features.length;
    setActiveTab(features[prevIndex].id);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px]">
        {/* Feature selection indicators at top */}
        <div className="flex items-center justify-center py-4 bg-gray-50 border-b">
          {features.map((feature, index) => (
            <button 
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className="relative mx-2 flex flex-col items-center"
            >
              <div className={`w-16 h-1 mb-2 rounded-full ${feature.id === activeTab ? feature.color : 'bg-gray-200'}`}></div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                feature.id === activeTab ? feature.lightColor : 'bg-gray-100'
              }`}>
                {React.cloneElement(feature.icon, { 
                  className: `${feature.id === activeTab ? feature.textColor : 'text-gray-400'}`
                })}
              </div>
              <span className={`text-xs font-medium mt-1 ${
                feature.id === activeTab ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {feature.label}
              </span>
            </button>
          ))}
        </div>
        
        {/* Main content area */}
        <div className="flex h-[calc(600px-116px)]">
          {/* Left nav button */}
          <button 
            onClick={goToPrevious}
            className="flex-shrink-0 w-12 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Feature content */}
          <div className="flex-1 flex flex-col md:flex-row p-6 overflow-hidden">
            {/* Text content */}
            <div className="md:w-1/2 md:pr-8 flex flex-col">
              <div className="mb-4">
                <div className={`inline-block px-3 py-1 rounded-full ${currentFeature.lightColor} ${currentFeature.textColor} text-sm font-medium mb-2`}>
                  {currentFeature.label}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{currentFeature.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">{currentFeature.description}</p>
              
              <div className="space-y-3 mb-6 overflow-y-auto flex-1">
                {currentFeature.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 ${currentFeature.color} rounded-full p-1 text-white mr-3`}>
                      <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <button className={`group inline-flex items-center ${currentFeature.color} text-white px-5 py-2 rounded-lg hover:opacity-90 transition-opacity`}>
                  {currentFeature.cta}
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="h-full w-full rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right nav button */}
          <button 
            onClick={goToNext}
            className="flex-shrink-0 w-12 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {features.map((feature, index) => (
          <button 
            key={feature.id}
            onClick={() => setActiveTab(feature.id)}
            className={`w-2 h-2 rounded-full transition-colors ${
              feature.id === activeTab ? currentFeature.color : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}