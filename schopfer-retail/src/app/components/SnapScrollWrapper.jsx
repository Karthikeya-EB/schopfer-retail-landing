"use client";
import { useEffect, useRef } from "react";

export default function FullPageScrollWrapper({ children }) {
  const containerRef = useRef(null);
  const sectionIndex = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const sections = container.querySelectorAll(".section");

    const scrollToSection = (index) => {
      const target = sections[index];
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleWheel = (e) => {
      if (isScrolling.current) return;

      const delta = e.deltaY;
      const direction = delta > 0 ? 1 : -1;
      const newIndex = sectionIndex.current + direction;

      if (newIndex >= 0 && newIndex < sections.length) {
        sectionIndex.current = newIndex;
        isScrolling.current = true;
        scrollToSection(sectionIndex.current);

        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }

      e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      {children}
    </div>
  );
}
