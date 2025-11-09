"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Our Services", id: "our_services" },
  { label: "Why Choose Us", id: "why_us" },
  { label: "Our Process", id: "our_process" },
  { label: "Latest Works", id: "latest_works" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact Us", id: "contact_us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle scroll
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // adjust this for fixed navbar height
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 ">
        {/* Logo */}
<div
  className="flex items-center cursor-pointer"
  onClick={() => scrollToSection("home")}
>
  {/* FIXED box — change w-12 h-12 to control visual size without affecting navbar height */}
  <div className="relative w-16 h-16 overflow-hidden">
    <Image
      src="/logo/logo.png"    // must be in /public/logo/logo.png or adjust path
      alt="SyarixLab Logo"
      fill
      className="object-contain"
      style={{ transform: "scale(1.45)", transformOrigin: "center" }}
      priority
    />
  </div>
</div>


        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-800">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer font-medium"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 z-[70]"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[80]"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 w-2/3 sm:w-1/2 h-screen bg-white shadow-2xl z-[100] flex flex-col items-center justify-center gap-8"
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-gray-700 hover:text-blue-600 transition z-[110]"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>

              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
