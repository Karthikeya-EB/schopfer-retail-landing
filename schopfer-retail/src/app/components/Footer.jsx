'use client'

import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#001F3F] text-[#F6FCDF] py-10 section border-t border-[#94B4C1]/40">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Info Links */}
          <div className="flex flex-wrap gap-16 text-sm">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#F6FCDF]">About Us</h4>
              <ul className="space-y-2 text-[#94B4C1]">
                <li><a href="#" className="hover:text-[#F6FCDF] transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-[#F6FCDF] transition-colors">What We Do</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#F6FCDF]">Resources</h4>
              <ul className="space-y-2 text-[#94B4C1]">
                <li><a href="#" className="hover:text-[#F6FCDF] transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-[#F6FCDF] transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#F6FCDF]">Get In Touch</h4>
              <ul className="space-y-1 text-[#94B4C1]">
                <li>Email:</li>
                <li><a href="mailto:info@schopferretail.com" className="hover:text-[#F6FCDF] transition-colors">info@schopferretail.com</a></li>
                <li><a href="mailto:schopfer.retail@gmail.com" className="hover:text-[#F6FCDF] transition-colors">schopfer.retail@gmail.com</a></li>
                <li className="pt-2">Phone:</li>
                <li><a href="tel:+918867378930" className="hover:text-[#F6FCDF] transition-colors">+91 88673 78930</a></li>
              </ul>
            </div>
          </div>

          {/* Email Form */}
          <div className="w-full max-w-md">
            <h4 className="text-lg font-semibold mb-3 text-[#F6FCDF]">Drop your mail</h4>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 rounded-l bg-white text-[#001F3F] focus:outline-none focus:ring-1 focus:ring-[#1E488F]"
              />
              <button
                type="submit"
                className="bg-lime-400 text-[#000] font-bold px-6 rounded-r hover:bg-[#859F3D]/90 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#94B4C1]/20 pt-6 text-center text-sm text-[#94B4C1]">
          © {currentYear} Schopfer Retail. All rights reserved.
        </div>
      </div>
    </footer>
  );
}