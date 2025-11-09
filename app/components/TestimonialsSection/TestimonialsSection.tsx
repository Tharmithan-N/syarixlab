// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "This team transformed our website into a modern, user-friendly platform. Truly amazing!",
//     name: "John Doe",
//     position: "Manager",
//     image: "/testimonials/user1.jpg",
//   },
//   {
//     quote:
//       "Our small shop sales increased tremendously after their landing page redesign!",
//     name: "Alice Smith",
//     position: "Small Shop Owner",
//     image: "/testimonials/user1.jpg",
//   },
//   {
//     quote:
//       "Professional and timely delivery. The best web development experience we've had.",
//     name: "Robert Johnson",
//     position: "Business Man",
//     image: "/testimonials/user1.jpg",
//   },
//   {
//     quote: "They understood our vision perfectly and implemented it beautifully.",
//     name: "Emma Brown",
//     position: "Manager",
//     image: "/testimonials/user1.jpg",
//   },
//   {
//     quote:
//       "Highly recommend them for any business looking to improve their online presence.",
//     name: "Michael Davis",
//     position: "Small Shop Owner",
//     image: "/testimonials/user1.jpg",
//   },
// ];

// export default function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(4);

//   const totalCards = testimonials.length;

//   // Update visible cards based on window width
//   useEffect(() => {
//     const updateVisibleCards = () => {
//       const width = window.innerWidth;
//       if (width < 640) setVisibleCards(1); // mobile
//       else if (width < 1024) setVisibleCards(2); // tablet
//       else setVisibleCards(4); // desktop
//     };

//     updateVisibleCards();
//     window.addEventListener("resize", updateVisibleCards);
//     return () => window.removeEventListener("resize", updateVisibleCards);
//   }, []);

//   const next = () => {
//     setCurrentIndex((prev) =>
//       prev + 1 > totalCards - visibleCards ? 0 : prev + 1
//     );
//   };

//   const prev = () => {
//     setCurrentIndex((prev) =>
//       prev - 1 < 0 ? totalCards - visibleCards : prev - 1
//     );
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Small heading */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-blue-600 text-sm font-semibold mb-2"
//         >
//           TESTIMONIALS
//         </motion.p>

//         {/* Big heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
//         >
//           Some Lovely Feedback From Our Clients
//         </motion.h2>

//         {/* Carousel */}
//         <div className="relative">
//           <div className="overflow-hidden">
//             <motion.div
//               animate={{
//                 x: `-${(currentIndex * 100) / visibleCards}%`,
//               }}
//               transition={{ type: "spring", stiffness: 100, damping: 20 }}
//               className="flex gap-6 py-7"
//             >
//               {testimonials.map((t, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex-shrink-0 w-full sm:w-[80%] md:w-[calc(25%-1.5rem)] bg-white shadow-lg rounded-2xl p-6 text-center`}
//                 >
//                   <p className="text-gray-600 mb-4">"{t.quote}"</p>
//                   <div className="flex flex-col items-center">
//                     <Image
//                       src={t.image}
//                       alt={t.name}
//                       width={60}
//                       height={60}
//                       className="rounded-full mb-2 object-cover"
//                     />
//                     <h4 className="text-gray-800 font-semibold">{t.name}</h4>
//                     <p className="text-gray-500 text-sm">{t.position}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Arrows */}
//           <button
//             onClick={prev}
//             className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
//           >
//             <ChevronLeft className="w-5 h-5 text-gray-700" />
//           </button>
//           <button
//             onClick={next}
//             className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
//           >
//             <ChevronRight className="w-5 h-5 text-gray-700" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "This team transformed our website into a modern, user-friendly platform. Truly amazing!",
    name: "John Doe",
    position: "Manager",
    image: "/testimonials/user1.jpg",
  },
  {
    quote:
      "Our small shop sales increased tremendously after their landing page redesign!",
    name: "Alice Smith",
    position: "Small Shop Owner",
    image: "/testimonials/user1.jpg",
  },
  {
    quote:
      "Professional and timely delivery. The best web development experience we've had.",
    name: "Robert Johnson",
    position: "Business Man",
    image: "/testimonials/user1.jpg",
  },
  {
    quote: "They understood our vision perfectly and implemented it beautifully.",
    name: "Emma Brown",
    position: "Manager",
    image: "/testimonials/user1.jpg",
  },
  {
    quote:
      "Highly recommend them for any business looking to improve their online presence.",
    name: "Michael Davis",
    position: "Small Shop Owner",
    image: "/testimonials/user1.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const totalCards = testimonials.length;

  // Update visible cards based on window width
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1); // mobile
      else if (width < 1024) setVisibleCards(2); // tablet
      else setVisibleCards(4); // desktop
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 > totalCards - visibleCards ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? totalCards - visibleCards : prev - 1
    );
  };

  return (
    <section className="py-20 bg-[#fafaff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#47919F] text-sm font-semibold mb-2"
        >
          TESTIMONIALS
        </motion.p>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        >
          Some Lovely Feedback From Our Clients
        </motion.h2>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: `-${(currentIndex * 100) / visibleCards}%`,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex gap-6 py-7"
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-full sm:w-[80%] md:w-[calc(25%-1.5rem)] bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer`}
                >
                  <p className="text-gray-600 mb-4">"{t.quote}"</p>
                  <div className="flex flex-col items-center">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={60}
                      height={60}
                      className="rounded-full mb-2 object-cover"
                    />
                    <h4 className="text-gray-800 font-semibold">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.position}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-[#47919F]/10 transition"
          >
            <ChevronLeft className="w-5 h-5 text-[#47919F]" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-[#47919F]/10 transition"
          >
            <ChevronRight className="w-5 h-5 text-[#47919F]" />
          </button>
        </div>
      </div>
    </section>
  );
}
