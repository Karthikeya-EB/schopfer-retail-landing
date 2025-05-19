"use client";

import React, { useState } from 'react';

const CaseStudyForm = () => {
//   const [formData, setFormData] = useState({
//     // Meta information
//     pageTitle: 'E-commerce Optimization Case Study',
//     metaDescription: 'How we helped our client improve their e-commerce performance',
    
//     // Hero section
//     heroImage: '/api/placeholder/1920/500',
//     heroImageAlt: 'E-commerce digital shopping cart interface',
    
//     // Project overview
//     clientIndustry: 'Home Goods',
//     projectDuration: '3 Months',
//     serviceProvided: 'E-commerce Optimization',
//     projectLead: 'Jane Smith',
//     platform: 'Shopify Plus',
    
//     // Client overview
//     clientOverview: 'Our client is a mid-sized e-commerce retailer specializing in home goods and decor, operating primarily in North America with over 5,000 SKUs. They faced challenges with cart abandonment rates and overall conversion optimization in an increasingly competitive market. The company was looking to improve their digital customer experience and increase their online revenue through strategic improvements to their product listings and checkout flow.',
    
//     // Challenge section
//     challengeDescription: 'The client was experiencing a high cart abandonment rate of 78%, significantly above industry average. Their product pages had poor engagement metrics, with users spending less than 15 seconds on average before bouncing. Additionally, their mobile conversion rates were particularly problematic, lagging desktop conversions by over 70%. These issues were directly impacting their bottom line and preventing them from achieving their growth targets.',
//     challengePoint1Title: 'High Abandonment Rate',
//     challengePoint1Text: '78% cart abandonment compared to industry average of 65%',
//     challengePoint2Title: 'Poor Mobile Experience',
//     challengePoint2Text: 'Mobile conversion rate 70% lower than desktop',
//     challengePoint3Title: 'Low Product Engagement',
//     challengePoint3Text: 'Less than 15 seconds average time on product pages',
    
//     // Approach section
//     approachDescription: 'After a comprehensive audit of the client\'s e-commerce platform, we developed a multi-faceted strategy focused on improving the user experience, streamlining the checkout process, and enhancing product presentation across all devices. Our approach was data-driven, with decisions backed by extensive analytics and user behavior studies.',
//     approachPoint1Title: 'User Research',
//     approachPoint1Text: 'Conducted extensive user testing and heatmap analysis to identify friction points',
//     approachPoint2Title: 'Content Optimization',
//     approachPoint2Text: 'Revamped product descriptions and imagery to highlight key benefits and features',
//     approachPoint3Title: 'Technical Overhaul',
//     approachPoint3Text: 'Redesigned checkout flow and improved mobile responsiveness',
    
//     // Solution section
//     solutionDescription: 'We implemented a series of targeted improvements to address each of the identified challenges, focusing on creating a seamless shopping experience from product discovery to checkout completion. Our solutions were implemented in phases to allow for testing and optimization at each stage.',
//     solutionPoint1Title: 'Simplified Checkout Process',
//     solutionPoint1Text: 'Reduced checkout steps from 5 to 2, implemented guest checkout option, and added multiple payment methods including digital wallets for faster completion.',
//     solutionPoint2Title: 'Enhanced Product Content',
//     solutionPoint2Text: 'Rewrote product descriptions to focus on benefits rather than features, added high-quality imagery from multiple angles, and included customer review highlights.',
//     solutionPoint3Title: 'Mobile-First Redesign',
//     solutionPoint3Text: 'Completely rebuilt the mobile shopping experience with touch-friendly elements, simplified navigation, and faster loading times through code optimization.',
    
//     // Results section
//     resultsDescription: 'Within three months of implementing our solutions, the client saw significant improvements across all key performance indicators, resulting in substantial revenue growth and enhanced customer satisfaction. The impact was measurable and sustainable, with continued improvement trends observed in subsequent quarters.',
//     resultsMetric1Value: '26%',
//     resultsMetric1Label: 'Reduction in Cart Abandonment',
//     resultsMetric2Value: '185%',
//     resultsMetric2Label: 'Increase in Mobile Conversions',
//     resultsMetric3Value: '82%',
//     resultsMetric3Label: 'Increase in Average Order Value',
//     resultsMetric4Value: '2x',
//     resultsMetric4Label: 'Increase in Revenue',
    
//     // Footer image
//     footerImage: '/api/placeholder/800/400',
//     footerImageAlt: 'Team working on e-commerce optimization',
    
//     // Key takeaways
//     takeawayPoint1Title: 'Quality Over Quantity',
//     takeawayPoint1Text: 'Comprehensive, benefit-focused product descriptions outperform brief, feature-only listings in both conversion rate and SEO performance.',
//     takeawayPoint2Title: 'Simplify the Journey',
//     takeawayPoint2Text: 'Each additional step in the checkout process increases abandonment rate by approximately 10%.',
//     takeawayPoint3Title: 'Mobile Excellence',
//     takeawayPoint3Text: 'Mobile-specific optimizations, not just responsive design, are critical for capturing over 60% of e-commerce traffic.',
//     takeawayPoint4Title: 'Data-Driven Decisions',
//     takeawayPoint4Text: 'A/B testing each element of the product and checkout experience revealed surprising user preferences that contradicted industry "best practices."',
    
//     // For case study list page
//     cardTitle: 'E-commerce Optimization Case Study',
//     cardDescription: 'How we helped our client improve their e-commerce performance',
//     cardFeatured: true
//   });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to an API or process it
    alert('Case study data submitted! Check console for details.');
  };

  return (
    <div className="bg-amber-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Create New Case Study</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Meta Section */}
          
          {/* Hero Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Hero Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label className="block text-blue-900 font-medium mb-1">Upload Hero Image</label>
            <input
                type="file"
                accept="image/*"
                name="heroImage"
                className="w-full px-3 py-2 border border-blue-200 rounded-md bg-white"
            />
            </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Hero Image Alt Text</label>
                <input
                  type="text"
                  name="heroImageAlt"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                />
              </div>
            </div>
          </div>
          
          {/* Project Overview */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-blue-900 font-medium mb-1">Client Industry</label>
                <input
                  type="text"
                  name="clientIndustry"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Project Duration</label>
                <input
                  type="text"
                  name="projectDuration"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Service Provided</label>
                <input
                  type="text"
                  name="serviceProvided"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Project Lead</label>
                <input
                  type="text"
                  name="projectLead"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Platform</label>
                <input
                  type="text"
                  name="platform"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                />
              </div>
            </div>
          </div>
          
          {/* Client Overview Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Client Overview</h2>
            <div>
              <label className="block text-blue-900 font-medium mb-1">Client Overview</label>
              <textarea
                name="clientOverview"
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-blue-200 rounded-md"
              ></textarea>
            </div>
          </div>
          
          {/* Challenge Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">The Challenge</h2>
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1">Challenge Description</label>
              <textarea
                name="challengeDescription"
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-blue-200 rounded-md"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-blue-900 font-medium mb-1">Challenge Point 1 Title</label>
                <input
                  type="text"
                  name="challengePoint1Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="challengePoint1Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 1 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Challenge Point 2 Title</label>
                <input
                  type="text"
                  name="challengePoint2Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="challengePoint2Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 2 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Challenge Point 3 Title</label>
                <input
                  type="text"
                  name="challengePoint3Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="challengePoint3Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 3 description"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Approach Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">The Approach</h2>
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1">Approach Description</label>
              <textarea
                name="approachDescription"
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-blue-200 rounded-md"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-blue-900 font-medium mb-1">Approach Point 1 Title</label>
                <input
                  type="text"
                  name="approachPoint1Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="approachPoint1Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 1 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Approach Point 2 Title</label>
                <input
                  type="text"
                  name="approachPoint2Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="approachPoint2Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 2 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Approach Point 3 Title</label>
                <input
                  type="text"
                  name="approachPoint3Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="approachPoint3Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 3 description"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Solution Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">The Solution</h2>
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1">Solution Description</label>
              <textarea
                name="solutionDescription"
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-blue-200 rounded-md"
              ></textarea>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-blue-900 font-medium mb-1">Solution Point 1 Title</label>
                <input
                  type="text"
                  name="solutionPoint1Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="solutionPoint1Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 1 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Solution Point 2 Title</label>
                <input
                  type="text"
                  name="solutionPoint2Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="solutionPoint2Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 2 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Solution Point 3 Title</label>
                <input
                  type="text"
                  name="solutionPoint3Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="solutionPoint3Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Point 3 description"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Results</h2>
            <div className="mb-4">
              <label className="block text-blue-900 font-medium mb-1">Results Description</label>
              <textarea
                name="resultsDescription"
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-blue-200 rounded-md"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-blue-900 font-medium mb-1">Metric 1 Value</label>
                <input
                  type="text"
                  name="resultsMetric1Value"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <input
                  type="text"
                  name="resultsMetric1Label"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Metric 1 Label"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Metric 2 Value</label>
                <input
                  type="text"
                  name="resultsMetric2Value"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <input
                  type="text"
                  name="resultsMetric2Label"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Metric 2 Label"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Metric 3 Value</label>
                <input
                  type="text"
                  name="resultsMetric3Value"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <input
                  type="text"
                  name="resultsMetric3Label"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Metric 3 Label"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Metric 4 Value</label>
                <input
                  type="text"
                  name="resultsMetric4Value"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <input
                  type="text"
                  name="resultsMetric4Label"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Metric 4 Label"
                />
              </div>
            </div>
          </div>
          
          {/* Footer Image */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Footer Image</h2>

            <div>
            <label className="block text-blue-900 font-medium mb-1">Upload Footer Image</label>
            <input
                type="file"
                accept="image/*"
                name="footerImage"
                className="w-full px-3 py-2 border border-blue-200 rounded-md bg-white"
            />
            </div>

              <div>
                <label className="block text-blue-900 font-medium mb-1">Footer Image Alt Text</label>
                <input
                  type="text"
                  name="footerImageAlt"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                />
              </div>

            </div>

          
          {/* Key Takeaways */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Key Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-blue-900 font-medium mb-1">Takeaway 1 Title</label>
                <input
                  type="text"
                  name="takeawayPoint1Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="takeawayPoint1Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Takeaway 1 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Takeaway 2 Title</label>
                <input
                  type="text"
                  name="takeawayPoint2Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="takeawayPoint2Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Takeaway 2 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Takeaway 3 Title</label>
                <input
                  type="text"
                  name="takeawayPoint3Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="takeawayPoint3Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Takeaway 3 description"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-900 font-medium mb-1">Takeaway 4 Title</label>
                <input
                  type="text"
                  name="takeawayPoint4Title"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-md mb-2"
                />
                <textarea
                  name="takeawayPoint4Text"
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-blue-200 rounded-md"
                  placeholder="Takeaway 4 description"
                ></textarea>
              </div>
            </div>
          </div>
          

          
          {/* Submission Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-end">
            <button
              type="button"
              className="px-6 py-3 bg-gray-300 text-blue-900 font-bold rounded-lg hover:bg-gray-400 transition-all"
              onClick={() => {
                if (confirm('Are you sure you want to reset the form? All entered data will be lost.')) {
                  window.location.reload();
                }
              }}
            >
              Reset Form
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all"
            >
              Submit Case Study
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default CaseStudyForm;