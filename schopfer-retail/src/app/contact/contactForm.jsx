import { ChevronRight} from 'lucide-react';

export default function ContactForm() {
    return(
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 py-16 pt-24 lg:pt-20 lg:pb-14 w-full mx-auto bg-gray-50">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start text-left max-w-2xl mb-12 mt-12 lg:ml-10 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1">
                     <span>Let's  </span> 
                     <span className="bg-lime-400 text-black px-2 rounded-md">Transform</span>{" "}
                    <br></br>Your E-commerce Performance
                </h1>

                <p className="text-lg md:text-xl mb-6">
                Contact Schopfer Retail for professional e-commerce<br></br>content that drives results
                </p>

                {/* <div className="flex flex-col sm:flex-row  gap-4 w-full sm:w-auto">
                    <button className="btn btnPrimary">
                    Contact Us <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                </div> */}
            </div> 
                
            {/* Right Content */}
            <div className="flex-1 flex justify-center items-center">
                <div className="p-2 ml-10 mx-w-md rounded-lg w-full">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.05)]  bg-white">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Name*</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2" placeholder="" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Company Name*</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email Address</label>
                            <input type="email" className="w-full border-b border-gray-300 focus:outline-none py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                            <input type="tel" className="w-full border-b border-gray-300 focus:outline-none py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Services Interested In</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Project Time</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-600">How did you hear about us</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-600">Additional Details*</label>
                            <textarea className="w-full border-b border-gray-300 focus:outline-none py-2" rows="4" />
                        </div>
                        <div className="md:col-span-2 flex flex-col items-start">
                            <button type="submit" className="bg-lime-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-lime-500 transition">
                                Submit
                            </button>
                            <p className="text-sm text-gray-500 mt-3">
                                Send us a message about your details. Let us reach out to you.<br/>
                                We typically respond to all inquiries within 24 hours or less.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};