'use client';

import React, { useState } from 'react';
import { Mail, Send, BarChart2, Star, ArrowRight } from 'lucide-react';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('engagement');

  const tabs = [
    { 
      id: 'engagement', 
      label: 'Engagement', 
      icon: <Mail className="w-5 h-5" />, 
      accent: 'border-emerald-500',
      bgAccent: 'bg-emerald-500' 
    },
    { 
      id: 'listing', 
      label: 'Product Listing', 
      icon: <Send className="w-5 h-5" />, 
      accent: 'border-blue-500',
      bgAccent: 'bg-blue-500' 
    },
    { 
      id: 'marketing', 
      label: 'Marketing', 
      icon: <Star className="w-5 h-5" />, 
      accent: 'border-rose-500',
      bgAccent: 'bg-rose-500' 
    },
    { 
      id: 'photography', 
      label: 'Photography', 
      icon: <BarChart2 className="w-5 h-5" />, 
      accent: 'border-teal-500',
      bgAccent: 'bg-teal-500' 
    },
  ];

  const tabContent = {
    engagement: {
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
    listing: {
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
    photography: {
      title: "Pictures That Persuade",
      description: "Bring your products to life with stunning, high-converting visuals. Professional images that set clear expectations and build instant trust.",
      features: [
        "High-quality, conversion-driven product photography.",
        "Visual storytelling that builds trust instantly.",
        "Showcase true product details and value."
      ],
      image: "/feature-images/photography.png",
      cta: "Explore our photography"
    },
    marketing: {
      title: "Amplify Your Reach",
      description: "Supercharge your brand's reach with smart, targeted marketing strategies. Capture attention, build excitement, and turn interest into real sales.",
      features: [
        "Target the right audience with precision.",
        "Craft campaigns that drive real engagement.",
        "Turn brand awareness into measurable sales growth."
      ],
      image: "/feature-images/marketing.png",
      cta: "Explore influencer marketing"
    }
  };

  const activeContent = tabContent[activeTab];
  const activeTabInfo = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-white">
      {/* Side-by-side layout */}
      <div className="flex flex-col lg:flex-row border border-gray-200 rounded-lg overflow-hidden shadow-md">
        {/* Left sidebar navigation */}
        <div className="lg:w-64 bg-gray-50 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">Our Solutions</h3>
            <p className="text-sm text-gray-500">Explore how we can help</p>
          </div>
          <div className="flex flex-col">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center p-4 border-l-4 transition-all ${
                  activeTab === tab.id 
                    ? `${tab.accent} bg-white`
                    : 'border-transparent hover:bg-gray-100'
                }`}
              >
                <div className={`rounded-full p-2 mr-3 ${
                  activeTab === tab.id ? tab.bgAccent : 'bg-gray-200'
                }`}>
                  {React.cloneElement(tab.icon, { 
                    className: `w-4 h-4 ${activeTab === tab.id ? 'text-white' : 'text-gray-600'}`
                  })}
                </div>
                <span className={`font-medium ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Right content area - fixed height to maintain card size */}
        <div className="flex-1">
          <div className="h-full flex flex-col">
            {/* Feature content header */}
            <div className={`p-6 ${activeTabInfo?.bgAccent} text-white`}>
              <h2 className="text-2xl font-bold mb-2">{activeContent.title}</h2>
              <p className="text-sm text-white/90">{activeContent.description}</p>
            </div>

            {/* Content area with fixed height and scrollable features */}
            <div className="p-6 flex flex-col md:flex-row gap-6 h-96 overflow-hidden">
              {/* Left column: Features (scrollable) */}
              <div className="md:w-1/2 overflow-y-auto pr-2">
                <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {activeContent.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className={`flex-shrink-0 w-6 h-6 ${activeTabInfo?.bgAccent} rounded-full flex items-center justify-center mr-3`}>
                        <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className={`group flex items-center text-sm font-medium ${activeTabInfo?.bgAccent} text-white px-4 py-2 rounded-md transition-all`}>
                    {activeContent.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Right column: Image in fixed-aspect container */}
              <div className="md:w-1/2">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}