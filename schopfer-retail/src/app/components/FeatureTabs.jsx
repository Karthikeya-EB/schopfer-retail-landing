'use client';

import React, { useState } from 'react';
import { Mail, Send, BarChart2, Star } from 'lucide-react';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('engagement');

  const tabs = [
    { id: 'engagement', label: 'Engagement', icon: <Mail className="w-5 h-5" />, color: 'bg-[#006b40]' },
    { id: 'listing', label: 'Product Listing', icon: <Send className="w-5 h-5" />, color: 'bg-[#0c3f89]' },
    { id: 'marketing', label: 'Marketing', icon: <Star className="w-5 h-5" />, color: 'bg-[#931847]' },
    { id: 'photography', label: 'Photography', icon: <BarChart2 className="w-5 h-5" />, color: 'bg-[#083f3f]' },
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
  const activeColor = tabs.find(tab => tab.id === activeTab)?.color || 'bg-[#006b40]';

  return (
    <div className="w-full bg-white max-w-8xl mx-auto px-4 sm:px-6 md:px-30 py-6 md:py-8">
      {/* Tabs Navigation - Wrapping on small screens */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-wrap border-b justify-between border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center px-3 sm:px-4 md:px-8 py-2 md:py-3 text-sm md:text-lg font-medium transition-colors duration-800 hover:text-black  ${
                activeTab === tab.id
                  ? 'border-b-2 border-black text-black font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={`p-1 md:p-1.5 text-white rounded-full mr-1 md:mr-2 ${activeTab === tab.id ? tab.color : 'bg-gray-300'}`}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className={`rounded-lg p-4 md:p-6 transition-colors duration-800 ${activeColor}`}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Content Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
            <div className="bg-white/10 p-2 rounded-lg shadow-lg">
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          {/* Content Text */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4">{activeContent.title}</h2>
            <p className="text-base md:text-lg mb-4 md:mb-6">{activeContent.description}</p>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {activeContent.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20 flex items-center justify-center mr-2 md:mr-3 mt-1">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 underline underline-offset-4 md:underline-offset-8 font-medium md:font-semibold text-white rounded-md hover:no-underline transition-colors text-sm md:text-base">
              {activeContent.cta}
              <svg className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}