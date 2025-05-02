'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Menu } from 'lucide-react'; // For hamburger and close icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center z-20 bg-transparent ">
      <div className="w-full text-black max-w-[1350px] mx-auto bg-white shadow-md flex items-center justify-between px-10 py-3 rounded-b-2xl">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-4xl">
            Schopfer
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-semibold text-">About Us</a>
          <a href="#" className="font-semibold text-md">Case Studies</a>
          <a href="#" className="font-semibold text-md">Blogs</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="btn btnAction">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (

            <div className="fixed inset-0 bg-white z-30 flex flex-col p-6 space-y-4 overflow-y-auto">
                
                {/* Top: Logo + Close */}
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-black text-xl">
                    Schopfer
                    </span>
                </div>
                <button onClick={() => setMenuOpen(false)}>
                    <X size={28} />
                </button>
                </div>

                {/* Nav Items */}
                <nav className="flex flex-col text-black space-y-4">
                <a href="#" className="font-semibold text-base">About Us</a>
                <a href="#" className="font-semibold text-base">Case Studies</a>
                <a href="#" className="font-semibold text-base">Blogs</a>
                </nav>

                {/* Buttons */}
                <div className="flex flex-col space-y-4 mt-auto border-t border-gray-300 pt-6">
                <button className="btn btnAction">
                    Contact Us
                </button>
                </div>

            </div>
)}

    </header>
  );
}
