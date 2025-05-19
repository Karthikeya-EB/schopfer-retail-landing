'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { X, Menu } from 'lucide-react'; // For hamburger and close icons

export default function Header() {
  const router = useRouter(); 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center z-20 bg-transparent">
      <div className="w-full text-[#001F3F] max-w-[1350px] mx-auto bg-[#F6FCDF] shadow-md flex items-center justify-between px-10 py-3 rounded-b-2xl border-b border-[#94B4C1]/40">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-extrabold text-4xl cursor-pointer text-[#1E488F]" onClick={() => router.push("/")}>
            Schopfer
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-semibold text-[#001F3F] hover:text-[#1E488F] transition-colors" onClick={() => router.push("")}>Form Submissions</a>
          <a href="#" className="font-semibold text-md text-[#001F3F] hover:text-[#1E488F] transition-colors" onClick={() => router.push("")}>Case Studies</a>
          <a href="#" className="font-semibold text-md text-[#001F3F] hover:text-[#1E488F] transition-colors">Blogs</a>
        </nav>


        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#001F3F]"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (

            <div className="fixed inset-0 bg-[#F6FCDF] z-30 flex flex-col p-6 space-y-4 overflow-y-auto">
                
                {/* Top: Logo + Close */}
                <div className="flex items-center justify-between border-b border-[#94B4C1] pb-2">
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-[#1E488F] text-xl">
                    Schopfer
                    </span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="text-[#001F3F]">
                    <X size={28} />
                </button>
                </div>

                {/* Nav Items */}
                <nav className="flex flex-col text-[#001F3F] space-y-4">
                <a href="#" className="font-semibold text-base hover:text-[#1E488F] transition-colors">About Us</a>
                <a href="#" className="font-semibold text-base hover:text-[#1E488F] transition-colors">Case Studies</a>
                <a href="#" className="font-semibold text-base hover:text-[#1E488F] transition-colors">Blogs</a>
                </nav>

                {/* Buttons */}
                <div className="flex flex-col space-y-4 mt-auto border-t border-[#94B4C1] pt-6">
                <button className="bg-[#84cc16] text-[#F6FCDF] py-3 px-5 rounded-lg hover:bg-opacity-90 transition-all" onClick={() => router.push("/contact")}>
                    Contact Us
                </button>
                </div>

            </div>
)}

    </header>
  );
}