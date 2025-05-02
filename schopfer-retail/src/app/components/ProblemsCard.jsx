import { ChevronRight, Edit, Image, PieChart } from 'lucide-react';

export default function ProblemsCard() {
    return (
        <div id="features" className="w-full mx-auto px-6 bg-gray-50 p-14 md:px-20 md:py-38 snap-start">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-12">
          How We Transform Your <span className="text-lime-600">Product Listings</span>
        </h2>
        
        <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-10">
          {[
            {
              title: "Increase Visibility",
              icon: <Edit className="w-10 h-10" />,
              description: "Our strategically crafted, SEO-optimized content—with intelligent keyword placement—boosts organic views by 22%, significantly enhancing product discovery.",
              buttonText: "Learn More"
            },
            {
              title: "Reduce Return Rates",
              icon: <Image className="w-10 h-10" />,
              description: "Our detailed, easy-to-understand product descriptions and professional visuals resonate with your audience and set accurate expectations—cutting return rates from 20%+ down to just 5%.",
              buttonText: "Read Case Study"
            },
            {
              title: "Boost Conversions",
              icon: <PieChart className="w-10 h-10" />,
              description: "Our conversion-focused content highlights key benefits, addresses customer questions, and doubles conversion rates from 2.5% to 5%.",
              buttonText: "Read More"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white border border-black/20 rounded-xl p-6 flex flex-col">
              <div className="flex items-center mb-4 gap-4">
                <div className="w-12 h-12 bg-lime-400 text-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-black font-semibold text-center">{feature.title}</h3>
              </div>

              <p className="text-md leading-7 mb-4 flex flex-grow text-black">{feature.description}</p>
              {/* Button at bottom */}
              <button className="w-full py-3 px-4 font-semibold bg-green-800 hover:bg-green-600 text-white rounded-md border border-white/30 text-sm  transition flex items-center justify-center">
                {feature.buttonText}
                <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
}