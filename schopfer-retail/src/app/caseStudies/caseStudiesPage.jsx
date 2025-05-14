import React from "react";

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
    description: "From Negative Reviews to 4.6+ Star Ratings: Midwest’s Customer Satisfaction Story.",
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
    description: "From Negative Reviews to 4.6+ Star Ratings: Midwest’s Customer Satisfaction Story.",
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
  return (
    <div className="bg-[#F6FCDF] min-h-screen px-40 py-12">
      <h1 className="text-[#1E488F] text-3xl font-bold mb-2 mt-10">Case Studies</h1>
      <p className="text-[#001F3F] text-base max-w-3xl mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <section className="mb-10">
        <h2 className="text-[#94B4C1] text-xl font-semibold mb-4">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((study, index) => (
            <div key={index} className="bg-white border border-[#94B4C1] p-4 rounded-lg shadow-sm">
              <div className="w-full h-40 bg-[#94B4C1] mb-4"></div>
              <h3 className="text-[#1E488F] text-lg font-semibold mb-2">{study.title}</h3>
              <p className="text-[#001F3F] text-sm">{study.description}</p>
              <button className="bg-[#1E488F] text-[#fff] font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-all mt-2">Read</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[#94B4C1] text-xl font-semibold mb-4">All Case studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white border border-[#94B4C1] p-4 rounded-lg shadow-sm">
              <div className="w-full h-40 bg-[#94B4C1] mb-4"></div>
              <h3 className="text-[#1E488F] text-lg font-semibold mb-2">{study.title}</h3>
              <p className="text-[#001F3F] text-sm">{study.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
