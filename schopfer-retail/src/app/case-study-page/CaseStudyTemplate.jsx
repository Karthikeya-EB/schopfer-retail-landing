import React from "react";
import Head from "next/head";

export default function CaseStudyTemplate() {
  return (
    <>
      <Head>
        <title>E-commerce Optimization Case Study</title>
        <meta name="description" content="How we helped our client improve their e-commerce performance" />
      </Head>

      <div className="min-h-screen bg-amber-50">
        {/* Hero Section with Image */}
        <div className="relative h-96 w-full">
          <img 
            src="/api/placeholder/1920/500" 
            alt="E-commerce digital shopping cart interface" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-300 bg-opacity-70 flex items-center"></div>
        </div>

                {/* Project Overview Bar */}
        <div className="bg-blue-950 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <p className="text-lime-400 text-xs font-semibold uppercase">Client Industry</p>
                <p className="font-medium">Home Goods</p>
              </div>
              <div>
                <p className="text-lime-400 text-xs font-semibold uppercase">Project Duration</p>
                <p className="font-medium">3 Months</p>
              </div>
              <div>
                <p className="text-lime-400 text-xs font-semibold uppercase">Service Provided</p>
                <p className="font-medium">E-commerce Optimization</p>
              </div>
              <div>
                <p className="text-lime-400 text-xs font-semibold uppercase">Project Lead</p>
                <p className="font-medium">Jane Smith</p>
              </div>
              <div>
                <p className="text-lime-400 text-xs font-semibold uppercase">Platform</p>
                <p className="font-medium">Shopify Plus</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> */}
            {/* Left Sidebar
            <div className="md:col-span-1">
              <div className="sticky top-20">
                <div className="space-y-2 text-blue-950">
                  <div>
                    <p className="font-medium text-blue-800">Email</p>
                    <p>contact@company.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">Website</p>
                    <p>www.company.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">Project Lead</p>
                    <p>Jane Smith</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">Service Provided</p>
                    <p>E-commerce Optimization</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Main Content */}
            <div className="md:col-span-3">
              {/* Client Overview */}
              <section className="mb-10 mt-5">
                <h2 className="text-xl font-bold text-blue-900 border-b border-blue-300 pb-2 mb-4">Client Overview</h2>
                <p className="text-blue-950 mb-4 text-justify">
                  Our client is a mid-sized e-commerce retailer specializing in home goods and decor, operating primarily in North America with over 5,000 SKUs.
                  They faced challenges with cart abandonment rates and overall conversion optimization in an increasingly competitive market. The company was looking
                  to improve their digital customer experience and increase their online revenue through strategic improvements to their product listings and checkout flow.
                </p>
              </section>

              {/* The Challenge */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-900 border-b border-blue-300 pb-2 mb-4">The Challenge</h2>
                <p className="text-blue-950 mb-6 text-justify">
                  The client was experiencing a high cart abandonment rate of 78%, significantly above industry average. Their product pages had poor engagement metrics,
                  with users spending less than 15 seconds on average before bouncing. Additionally, their mobile conversion rates were particularly problematic,
                  lagging desktop conversions by over 70%. These issues were directly impacting their bottom line and preventing them from achieving their growth targets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">High Abandonment Rate</h4>
                    <p className="text-sm text-blue-950">78% cart abandonment compared to industry average of 65%</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Poor Mobile Experience</h4>
                    <p className="text-sm text-blue-950">Mobile conversion rate 70% lower than desktop</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Low Product Engagement</h4>
                    <p className="text-sm text-blue-950">Less than 15 seconds average time on product pages</p>
                  </div>
                </div>
              </section>

              {/* The Approach */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-900 border-b border-blue-300 pb-2 mb-4">The Approach</h2>
                <p className="text-blue-950 mb-6 text-justify">
                  After a comprehensive audit of the client's e-commerce platform, we developed a multi-faceted strategy focused on improving the user experience, 
                  streamlining the checkout process, and enhancing product presentation across all devices. Our approach was data-driven, with decisions backed by
                  extensive analytics and user behavior studies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">User Research</h4>
                    <p className="text-sm text-blue-950">Conducted extensive user testing and heatmap analysis to identify friction points</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Content Optimization</h4>
                    <p className="text-sm text-blue-950">Revamped product descriptions and imagery to highlight key benefits and features</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Technical Overhaul</h4>
                    <p className="text-sm text-blue-950">Redesigned checkout flow and improved mobile responsiveness</p>
                  </div>
                </div>
              </section>

              {/* The Solution */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-900 border-b border-blue-300 pb-2 mb-4">The Solution</h2>
                <p className="text-blue-950 mb-6 text-justify">
                  We implemented a series of targeted improvements to address each of the identified challenges, focusing on creating 
                  a seamless shopping experience from product discovery to checkout completion. Our solutions were implemented in phases
                  to allow for testing and optimization at each stage.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start text-justify">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-lime-300 flex items-center justify-center mr-4 mt-1">
                      <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Simplified Checkout Process</h4>
                      <p className="text-blue-950">Reduced checkout steps from 5 to 2, implemented guest checkout option, and added multiple payment methods including digital wallets for faster completion.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-lime-300 flex items-center justify-center mr-4 mt-1">
                      <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Enhanced Product Content</h4>
                      <p className="text-blue-950">Rewrote product descriptions to focus on benefits rather than features, added high-quality imagery from multiple angles, and included customer review highlights.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-lime-300 flex items-center justify-center mr-4 mt-1">
                      <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Mobile-First Redesign</h4>
                      <p className="text-blue-950">Completely rebuilt the mobile shopping experience with touch-friendly elements, simplified navigation, and faster loading times through code optimization.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Results */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-900 border-b border-blue-300 pb-2 mb-4">Results</h2>
                <p className="text-blue-950 mb-6 text-justify">
                  Within three months of implementing our solutions, the client saw significant improvements across all key performance indicators,
                  resulting in substantial revenue growth and enhanced customer satisfaction. The impact was measurable and sustainable, with continued
                  improvement trends observed in subsequent quarters.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-lime-300 p-4 rounded text-center">
                    <h3 className="text-2xl font-bold text-blue-900">26%</h3>
                    <p className="text-sm font-medium text-blue-800">Reduction in Cart Abandonment</p>
                  </div>
                  <div className="bg-lime-300 p-4 rounded text-center">
                    <h3 className="text-2xl font-bold text-blue-900">185%</h3>
                    <p className="text-sm font-medium text-blue-800">Increase in Mobile Conversions</p>
                  </div>
                  <div className="bg-lime-300 p-4 rounded text-center">
                    <h3 className="text-2xl font-bold text-blue-900">82%</h3>
                    <p className="text-sm font-medium text-blue-800">Increase in Average Order Value</p>
                  </div>
                  <div className="bg-lime-300 p-4 rounded text-center">
                    <h3 className="text-2xl font-bold text-blue-900">2x</h3>
                    <p className="text-sm font-medium text-blue-800">Increase in Revenue</p>
                  </div>
                </div>
              </section>

              {/* Bottom Image */}
              <div className="relative h-64 w-full mb-10">
                <img 
                  src="/casestudy-example.jpg" 
                  alt="Team working on e-commerce optimization" 
                  className="w-full h-full object-cover rounded" 
                />
                <div className="absolute inset-0 bg-gray-300 bg-opacity-30"><p className="text-black font-semibold text-center py-30">FOOTER IMAGE</p></div>
              </div>

              {/* Key Takeaways */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-900 border-b border-blue-300 pb-2 mb-4">Key Takeaways</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Quality Over Quantity</h4>
                    <p className="text-sm text-blue-950">Comprehensive, benefit-focused product descriptions outperform brief, feature-only listings in both conversion rate and SEO performance.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Simplify the Journey</h4>
                    <p className="text-sm text-blue-950">Each additional step in the checkout process increases abandonment rate by approximately 10%.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Mobile Excellence</h4>
                    <p className="text-sm text-blue-950">Mobile-specific optimizations, not just responsive design, are critical for capturing over 60% of e-commerce traffic.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-900 mb-2">Data-Driven Decisions</h4>
                    <p className="text-sm text-blue-950">A/B testing each element of the product and checkout experience revealed surprising user preferences that contradicted industry "best practices."</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}