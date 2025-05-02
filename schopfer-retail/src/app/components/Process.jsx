// ProcessSection.jsx
import { ClipboardDocumentIcon, PhotoIcon, PlayIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Process() {
  const processSteps = [
    {
      number: "01",
      icon: <ClipboardDocumentIcon className="h-8 w-8 text-lime-700" />,
      title: "Discovery and Analysis",
      description: "We begin by analyzing your products, target audience, and current listings to identify improvement opportunities."
    },
    {
      number: "02",
      icon: <PhotoIcon className="h-8 w-8 text-lime-700" />,
      title: "Strategy and Development",
      description: "Our specialists create professional photography, compelling copy, and engaging videos for your products."
    },
    {
      number: "03",
      icon: <PlayIcon className="h-8 w-8 text-lime-700" />,
      title: "Production & Creation",
      description: "We optimize and upload your content across e-commerce platforms, ensuring proper formatting and presentation."
    },
    {
      number: "04",
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-lime-700" />,
      title: "Optimisation & Implementation",
      description: "We optimize and upload your content across e-commerce platforms, ensuring proper formatting and presentation."
    },
    {
      number: "05",
      icon: <ChartBarIcon className="h-8 w-8 text-lime-700" />,
      title: "Analysis & Refinement",
      description: "We track key metrics and make data-driven refinements to maximize your listing performance."
    },
  ];

  return (
    <section className="py-20 pt-24 snap-start bg-white">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Our Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Our streamlined approach delivers quality results with 
            industry-leading turnaround times
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-lime-700 transform -translate-y-1/2 z-0"></div>
          
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
                <div className="bg-gray-200 rounded-2xl p-4 border border-orange-100 shadow-sm hover:shadow-md transition-shadow duration-300 max-w-4xl max-h-[350px]">
                  <div className="flex flex-col items-center mb-4">
                    <span className="text-3xl font-bold text-black mb-3">{step.number}</span>
                    <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black text-center">{step.title}</h3>
                  </div>
                  <p className="text-black-200 text-center">{step.description}</p>
                </div>
                
               
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}