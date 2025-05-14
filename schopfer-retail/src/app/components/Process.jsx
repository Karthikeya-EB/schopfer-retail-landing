// ProcessSection.jsx
import React from 'react';
import { ClipboardDocumentIcon, PhotoIcon, PlayIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Process() {
  // Define more subdued, toned-down colors for each process step
  const stepColors = [
    {
      bg: "bg-[#235789]", // Subdued blue
      text: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#001F3F]",
      border: "border-[#94B4C1]/40"
    },
    {
      bg: "bg-[#29698C]", // Muted teal blue
      text: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#001F3F]",
      border: "border-[#94B4C1]/40"
    },
    {
      bg: "bg-[#2F7CA0]", // Medium ocean blue
      text: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#001F3F]",
      border: "border-[#94B4C1]/40"
    },
    {
      bg: "bg-[#3A8FB7]", // Soft sky blue
      text: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#001F3F]",
      border: "border-[#94B4C1]/40"
    },
    {
      bg: "bg-[#2A6495]", // Steel blue
      text: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#001F3F]",
      border: "border-[#94B4C1]/40"
    }
  ];

  const processSteps = [
    {
      number: "01",
      icon: <ClipboardDocumentIcon className="h-8 w-8" />,
      title: "Discovery and Analysis",
      description: "We begin by analyzing your products, target audience, and current listings to identify improvement opportunities."
    },
    {
      number: "02",
      icon: <PhotoIcon className="h-8 w-8" />,
      title: "Strategy and Development",
      description: "Our specialists create professional photography, compelling copy, and engaging videos for your products."
    },
    {
      number: "03",
      icon: <PlayIcon className="h-8 w-8" />,
      title: "Production & Creation",
      description: "We optimize and upload your content across e-commerce platforms, ensuring proper formatting and presentation."
    },
    {
      number: "04",
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: "Optimisation & Implementation",
      description: "We optimize and upload your content across e-commerce platforms, ensuring proper formatting and presentation."
    },
    {
      number: "05",
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Analysis & Refinement",
      description: "We track key metrics and make data-driven refinements to maximize your listing performance."
    },
  ];

  return (
    <section className="py-20 pt-24 section h-screen bg-[#F6FCDF] border-t border-[#94B4C1]/40">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E488F] tracking-tight sm:text-5xl">
            Our Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#001F3F]/80">
            Our streamlined approach delivers quality results with 
            industry-leading turnaround times
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#259b23] via-[#0f9733] to-[#3A8FB7] transform -translate-y-1/2 z-0"></div>
          
          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`
                  flex flex-col items-center transition-all duration-300 ease-in-out
                  ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-16'}
                  ${index === 1 || index === 3 ? 'md:col-span-1 lg:col-span-1' : ''}
                `}
              >
                <div className={`${stepColors[index].bg} rounded-2xl p-4 ${stepColors[index].border} border shadow-md hover:shadow-lg transition-shadow duration-300 max-w-4xl max-h-[350px]`}>
                  <div className="flex flex-col items-center mb-4">
                    <span className={`text-3xl font-bold ${stepColors[index].text} mb-3`}>{step.number}</span>
                    <div className={`p-3 ${stepColors[index].iconBg} border-2 border-[#056403] rounded-full shadow-md mb-3`}>
                      {React.cloneElement(step.icon, { className: `h-8 w-8 ${stepColors[index].iconColor}` })}
                    </div>
                    <h3 className={`text-xl font-semibold ${stepColors[index].text} text-center`}>{step.title}</h3>
                  </div>
                  <p className={`${stepColors[index].text}/90 text-center`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}