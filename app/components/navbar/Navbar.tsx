// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const navItems = ["Home", "About Us", "Testimonials", "Our Works", "Pricing", "Contact Us"];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full" />
//           <h1 className="text-xl font-bold text-gray-800">SyarixLab</h1>
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex gap-8 text-gray-800">
//           {navItems.map((item) => (
//             <motion.li
//               key={item}
//               whileHover={{ scale: 1.1 }}
//               className="relative group cursor-pointer font-medium"
//             >
//               {item}
//               <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
//             </motion.li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-800"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Menu"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 80 }}
//             className="fixed top-0 right-0 w-2/3 h-screen bg-white shadow-lg md:hidden flex flex-col items-center justify-center gap-8"
//           >
//             {navItems.map((item) => (
//               <motion.div
//                 key={item}
//                 whileHover={{ scale: 1.1 }}
//                 className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About Us",
  "Testimonials",
  "Our Works",
  "Pricing",
  "Contact Us",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full" />
          <h1 className="text-xl font-bold text-gray-800">SyarixLab</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-800">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer font-medium"
            >
              {item}
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
            {/* Semi-transparent overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[80]"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer itself */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 w-2/3 sm:w-1/2 h-screen bg-white shadow-2xl z-[100] flex flex-col items-center justify-center gap-8"
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 text-gray-700 hover:text-blue-600 transition z-[110]"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>

              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
