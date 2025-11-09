"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-42 right-6 z-50 bg-gradient-to-r from-[#47919F] to-[#47919F] hover:from-[#47919F] hover:to-[#3c7d8a] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
