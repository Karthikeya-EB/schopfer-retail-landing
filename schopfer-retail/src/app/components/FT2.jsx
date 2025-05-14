'use client';

import React, { useState } from 'react';
import { Mail, Send, BarChart2, Star, ChevronRight } from 'lucide-react';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('listing');

  // Updated tab colors with more subtle, professional variations
  const tabs = [
    { id: 'listing', label: 'Product Listing', icon: <Send className="w-5 h-5" />, color: 'from-[#184775] to-[#0F2D4A]' },
    { id: 'engagement', label: 'Engagement', icon: <Mail className="w-5 h-5" />, color: 'from-[#2D4263] to-[#1A2538]' },
    { id: 'marketing', label: 'Marketing', icon: <Star className="w-5 h-5" />, color: 'from-[#31572C] to-[#1E331A]' },
    { id: 'photography', label: 'Photography', icon: <BarChart2 className="w-5 h-5" />, color: 'from-[#4A5568] to-[#2D3748]' },
  ];

  const tabContent = {
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
      cta: "Explore our marketing tools"
    }
  };

  const activeContent = tabContent[activeTab];
  const activeTabInfo = tabs.find(tab => tab.id === activeTab);
  const activeGradient = activeTabInfo?.color || 'from-[#184775] to-[#0F2D4A]';

  // Get the corresponding button color based on active tab - with more subtle tones
  const getButtonColor = (tabId) => {
    switch(tabId) {
      case 'listing': return 'bg-[#2B6CB0] hover:bg-[#2C5282]';
      case 'engagement': return 'bg-[#4A5568] hover:bg-[#2D3748]';
      case 'marketing': return 'bg-[#48BB78] hover:bg-[#38A169]';
      case 'photography': return 'bg-[#718096] hover:bg-[#4A5568]';
      default: return 'bg-[#2B6CB0] hover:bg-[#2C5282]';
    }
  };

  // Function to truncate features list to maintain consistent card height
  const getDisplayFeatures = (features) => {
    // Maximum number of features to show across all tabs
    const maxFeatures = 3;
    return features.slice(0, maxFeatures);
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-28 section h-screen bg-[#F6FCDF] border-t border-[#94B4C1]/40">
      {/* Card container with fixed height */}
      <div className="rounded-xl shadow-xl overflow-hidden max-w-7xl mx-auto bg-white border border-[#94B4C1]/30">
        {/* Main content display area with fixed height */}
        <div className={`bg-gradient-to-br ${activeGradient} text-[#F6FCDF] p-6 md:p-8 lg:p-10 h-[500px]`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">            
            {/* Text content with overflow handling */}
            <div className="order-2 lg:order-1 flex flex-col h-full">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{activeContent.title}</h2>
              <p className="text-lg mb-6 text-[#F6FCDF]/90 line-clamp-3">{activeContent.description}</p>
              
              <div className="space-y-3 mb-8 overflow-y-auto flex-grow">
                {getDisplayFeatures(activeContent.features).map((feature, index) => (
                  <div key={index} className="flex items-center bg-[#F6FCDF]/10 p-3 rounded-lg">
                    <div className={`rounded-full p-1 mr-3 flex-shrink-0 ${getButtonColor(activeTab).split(' ')[0]}`}>
                      <svg className="w-4 h-4 text-[#F6FCDF]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="line-clamp-2">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <button className={`group inline-flex items-center ${getButtonColor(activeTab)} text-[#F6FCDF] font-medium px-5 py-3 rounded-lg transition-colors`}>
                  {activeContent.cta}
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Image with fixed dimensions */}
            <div className="order-1 lg:order-2 flex items-center justify-center h-full">
              <div className="bg-[#F6FCDF]/10 p-2 rounded-lg shadow-lg w-full max-w-md aspect-video">
                <img
                  src={activeContent.image || "/api/placeholder/400/300"}
                  alt={activeContent.title}
                  className="w-full h-full object-fit rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation tabs with fixed height */}
        <div className="flex overflow-x-auto scrollbar-hide h-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center p-4 md:p-6 min-w-[120px] transition-all ${
                activeTab === tab.id 
                  ? `bg-gradient-to-r ${tab.color} text-[#F6FCDF]`
                  : 'bg-white text-[#001F3F] hover:bg-[#F6FCDF]/50'
              }`}
            >
              <div className={`rounded-full p-2 mb-2 ${
                activeTab === tab.id ? 'bg-[#F6FCDF]/20' : 'bg-[#94B4C1]/20'
              }`}>
                {React.cloneElement(tab.icon, { 
                  className: `w-5 h-5 ${activeTab === tab.id ? 'text-[#F6FCDF]' : 'text-[#001F3F]'}`
                })}
              </div>
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}