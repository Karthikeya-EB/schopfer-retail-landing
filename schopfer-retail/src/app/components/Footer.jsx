'use client'

import { useState } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  return (
    <footer className="bg-black text-white py-8 snap-start">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Side: Links */}
          <div className="flex flex-wrap gap-12 mb-8 md:mb-0">
            {/* About Us Section */}
            <div>
              <h3 className="font-medium text-lg mb-2">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-white transition duration-300">Our Story</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white transition duration-300">What We Do</a></li>
              </ul>
            </div>
            
            {/* Resources Section */}
            <div>
              <h3 className="font-medium text-lg mb-2">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-white transition duration-300">Blogs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white transition duration-300">Case Studies</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-medium text-lg mb-2">Get In Touch</h3>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Email:</p>
                <a href="mailto:info@schopferretail.com" className="block text-gray-600 hover:text-white transition duration-300">info@schopferretail.com</a>
                <a href="mailto:schopfer.retail@gmail.com" className="block text-gray-600 hover:text-white transition duration-300">schopfer.retail@gmail.com</a>
                
                <p className="text-gray-400 text-sm mt-3">Phone:</p>
                <p className="text-gray-600">
                  <span>Call: </span>
                  <a href="tel:+918867378930" className="hover:text-white transition duration-300">+91 88673 78930</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Side: Newsletter */}
          <div className="w-full md:w-auto">
            <h3 className="font-medium mb-3">Drop your mail</h3>
            <div className="flex">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" 
                className="px-4 py-2 w-full md:w-64 bg-gray-100 border border-gray-700 text-black rounded-l focus:outline-none focus:border-white"
              />
              <button 
                type="submit" 
                className="btn bg-green-900"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        
        {/* Social Links and Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-around items-center">
          {/* Copyright */}
          <div className="text-white text-sm">
            © {currentYear} Schopfer Retail. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}