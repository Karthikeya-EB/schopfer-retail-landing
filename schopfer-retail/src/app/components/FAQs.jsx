'use client'

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqData = [
    {
      question: "Why should I partner with a specialized e-commerce content agency instead of creating listing content in-house?",
      answer: "Our specialized expertise delivers results that in-house teams often struggle to achieve. While your team excels at product knowledge, we bring deep understanding of marketplace algorithms, consumer psychology, and technical optimization. With over 50 years of combined e-commerce experience, our systematic approach transforms visibility challenges into measurable outcomes. Additionally, our dedicated team processes high volumes efficiently, allowing your staff to focus on core business activities rather than content creation."
    },
    {
      question: "Which e-commerce platforms and marketplaces do you specialize in?",
      answer: "We have established our expertise primarily on Amazon, mastering its specific requirements and ranking factors. Our experience extends across other major Indian e-commerce platforms including Flipkart and Myntra. Our team maintains comprehensive knowledge of platform-specific guidelines and algorithm updates, ensuring your listings perform optimally within each marketplace's unique environment. This multi-platform expertise allows your products to maintain consistent performance regardless of where customers discover them."
    },
    {
      question: "How do you structure pricing for e-commerce content creation services?",
      answer: "We develop customized proposals based on a strategic assessment of your specific needs. Our pricing framework considers product complexity, service level requirements (from basic listings to enhanced A+ content), volume, and deliverable specifications. Rather than operating on a fixed-price model, we create tailored solutions that align with your business objectives. Our clients consistently view our services as strategic investments that deliver substantial returns through increased visibility, higher conversion rates, and reduced operational costs from fewer returns."
    },
    {
      question: "What is your typical timeline for delivering complete product listings?",
      answer: "We prioritize efficient delivery without compromising our quality standards. Our systematic approach and specialized workflows enable us to maintain consistency and excellence while meeting business timelines. Project schedules vary based on scope, product complexity, and service level requirements—a comprehensive product catalog with custom photography follows a different timeline than standard listings. After our initial assessment, we provide a detailed project plan with clear milestones, ensuring transparency throughout the implementation process."
    },
    {
      question: "What specific information and materials will you need from our team to create effective product listings?",
      answer: "We begin with the product information you currently have—whether comprehensive or minimal—including physical samples, existing catalogs, technical specifications, and brand guidelines. Before initiating the project, we conduct a thorough assessment to identify any additional data requirements. Our process is most effective when we understand your unique selling propositions, target audience demographics, and competitive landscape."
    },
    {
      question: "Beyond creating quality listings, how do your services directly impact sales performance?",
      answer: "Our approach directly enhances three critical performance metrics: visibility (our SEO-optimized content increases organic discovery by 22%), conversion (compelling content and strategic visuals double conversion rates from industry averages), and customer satisfaction (accurate descriptions reduce return rates from 20%+ to just 5%). These improvements translate to measurable revenue growth and reduced operational costs. Additionally, the comprehensive digital assets we create provide long-term value that extends beyond marketplace listings to other marketing channels."
    },
    {
      question: "What types of visual content do you create beyond standard product photography?",
      answer: "We produce a comprehensive visual catalog that showcases your products from every perspective. This includes detailed feature close-ups, material and texture highlights, scale comparison images, 360° product views, informative infographics explaining key features, lifestyle context photography, and demonstration videos. For enhanced content, we develop visual brand narratives that place your products in context. Our photographers employ specialized lighting techniques with polarized filters specifically designed for challenging materials like ceramics, glass, and reflective surfaces."
    },
    {
      question: "Do we need to ship our physical products to you for photography services?",
      answer: "Yes, professional photography requires physical product samples in our controlled studio environment. Our specialized photography stations utilize lighting configurations specifically calibrated for different product categories and materials to achieve optimal results. For larger product volumes, we can evaluate the possibility of establishing an on-site studio at your location to streamline the process. We ensure products are returned in their original condition after the photography process is complete."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen snap-start py-20 lg:pt-24 px-4 sm:px-6 lg:px-8 bg-[#1A2E3C]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <div className="mt-3 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-indigo-500 ring-opacity-50' : 'hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-3 flex justify-between items-center focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <h3 className={`text-lg md:text-md text-left text-gray-800 ${activeIndex === index ? 'font-semibold' : 'font-medium'}`}
                > {faq.question}
                </h3>
                
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180 text-indigo-600' : 'text-gray-400'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}