'use client';

import React from "react";
import MainTwo from "../components/MainTwo";
import { useRouter } from "next/navigation";

const caseStudies = [
  {
    title: "Geocl Returns site",
    description: "Geocl Shares Return site helps B2B with strategic e-commerce content.",
  },
  {
    title: "Build Pro",
    description: "BuildPro 2000+ Product Listings in 60 Days: Design and logic data.",
  },
  {
    title: "Midwest Ratings",
    description: "From Negative Reviews to 4.6+ Star Ratings: Midwest's Customer Satisfaction Story.",
  },
  {
    title: "Kraft Sales",
    description: "Content Breakthrough: How Kraft Tripled Sales with Enhanced Product Content.",
  },
  {
    title: "Kraft Sales",
    description: "Content Breakthrough: How Kraft Tripled Sales with Enhanced Product Content.",
  },
  {
    title: "Midwest Ratings",
    description: "From Negative Reviews to 4.6+ Star Ratings: Midwest's Customer Satisfaction Story.",
  },
  {
    title: "Geocl Returns site",
    description: "Geocl Shares Return site helps B2B with strategic e-commerce content.",
  },
  {
    title: "Build Pro",
    description: "BuildPro 2000+ Product Listings in 60 Days: Design and logic data.",
  },
  {
    title: "Kraft Sales",
    description: "Content Breakthrough: How Kraft Tripled Sales with Enhanced Product Content.",
  },
];

export default function CaseStudiesPage() {
    const router = useRouter();
  return ( <>
  
  < MainTwo />

    <div className="bg-[#F6FCDF] min-h-screen px-4 sm:px-6 lg:px-40 py-12">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-[#001F3F] text-4xl font-bold mb-3 mt-10">Case Studies</h1>
        <p className="text-blue-950 text-base  mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Featured Section */}
      <section className="mb-14">
        <h2 className="text-[#00376f] text-xl font-semibold mb-6">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((study, index) => (
            <div key={index} className="bg-white border border-blue-300 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gray-400 mb-0"></div>
              <div className="p-6">
                <h3 className="text-blue-900 text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-blue-950 mb-4">{study.description}</p>
                <button className="bg-[#001F3F] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#001f3fd1] transition-all w-full flex items-center justify-center" onClick={() => router.push("/case-study-page")}>
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section>
        <h2 className="text-[#00376f] text-xl font-semibold mb-6">All Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="group bg-white border border-blue-200 rounded-lg overflow-hidden shadow hover:shadow-md transition-all">
              <div className="relative">
                <div className="w-full h-40 bg-gray-300 group-hover:bg-gray-400 transition-colors"></div>
                <div className="absolute top-3 right-3 bg-[#001F3F] text-white text-xs font-bold px-2 py-1 rounded">Case Study</div>
              </div>
              <div className="p-5">
                <h3 className="text-blue-900 text-lg font-bold mb-2">{study.title}</h3>
                <p className="text-blue-950 text-sm">{study.description}</p>
                <div className="mt-4 flex justify-end">
                  <button className="text-blue-900 font-bold text-sm hover:text-blue-700 transition-colors flex items-center">
                    Read
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}