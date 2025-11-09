// "use client";
// import { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Image, { StaticImageData } from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import img1 from "../../../public/img1.jpg";
// import img2 from "../../../public/img2.jpg";
// import img3 from "../../../public/img3.jpg";

// const images: StaticImageData[] = [img1, img2, img3];
// const MotionImage = motion(Image);

// // Helper function to create random float animations
// const random = (min: number, max: number) => Math.random() * (max - min) + min;

// const shapes = [
//   { type: "circle", color: "text-[#5FAAC0]" },   // lighter variant
//   { type: "rect", color: "text-[#3C7E8A]" },     // darker variant
//   { type: "polygon", color: "text-[#6CA2B5]" },  // soft tone
//   { type: "circle", color: "text-[#47919F]" },   // main brand color
//   { type: "rect", color: "text-[#356C7A]" },     // accent dark
//   { type: "circle", color: "text-[#70BCCF]" },   // very light blue
//   { type: "rect", color: "text-[#2E6274]" },     // deep dark accent
//   { type: "polygon", color: "text-[#4F97AC]" },  // mid-tone
//   { type: "circle", color: "text-[#88C4D6]" },   // soft light
//   { type: "rect", color: "text-[#397588]" },     // slightly darker mid
// ];



// export default function HeroSection({ id }: { id?: string }) {
//   const [current, setCurrent] = useState(0);
//   const controls = useAnimation();

//   // Auto image change
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Morphing blob animation
//   useEffect(() => {
//     const animateBlob = async () => {
//       while (true) {
//         await controls.start({
//           borderRadius: [
//             "60% 40% 30% 70% / 60% 30% 70% 40%",
//             "30% 60% 70% 40% / 50% 60% 30% 60%",
//             "60% 30% 40% 70% / 60% 70% 30% 40%",
//           ],
//           transition: { duration: 8, repeat: Infinity, repeatType: "reverse" },
//         });
//       }
//     };
//     animateBlob();
//   }, [controls]);

//   return (
//     <section
//       className="relative overflow-hidden pt-32 pb-16 bg-gray-50"
//       id={id}
//     >
//       {/* Floating SVG background elements */}
//       {shapes.map((shape, i) => (
//         <motion.svg
//           key={i}
//           className={`absolute ${shape.color}`}
//           width="24"
//           height="24"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           style={{
//             top: `${random(5, 80)}%`,
//             left: `${random(5, 90)}%`,
//             opacity: random(0.3, 0.8),
//           }}
//           animate={{
//             x: [0, random(-40, 40), 0],
//             y: [0, random(-40, 40), 0],
//             rotate: [0, random(-45, 45), 0],
//           }}
//           transition={{
//             duration: random(8, 16),
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           {shape.type === "circle" && <circle cx="12" cy="12" r="10" />}
//           {shape.type === "rect" && (
//             <rect x="4" y="4" width="16" height="16" rx="3" />
//           )}
//           {shape.type === "polygon" && <polygon points="12,2 22,22 2,22" />}
//         </motion.svg>
//       ))}

//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10 relative z-10">
//         {/* Left text */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Engineering Excellence through Intelligent Solutions.
//           </h1>
//           <p className="text-gray-600 mb-8">
//             We work hand-in-hand with organizations to create digital solutions
//             that drive growth, security, and innovation.
//           </p>
//           <div className="flex gap-4 justify-center md:justify-start">
//             <button className="px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 bg-gradient-to-r from-[#47919F] to-[#3C7E8A] hover:from-[#3C7E8A] hover:to-[#366973] hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
//               Get Started
//             </button>

//             {/* <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 transition cursor-pointer">
//               ▶ Play Video
//             </button> */}
//           </div>
//         </div>

//         {/* Right animated blob with image */}
//         <div className="relative md:w-1/2 flex justify-center items-center">
//           <motion.div
//             animate={controls}
//             className="relative w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] bg-gradient-to-tr from-[#47919F] to-[#3C7E8A] overflow-hidden flex justify-center items-center"
//           >
//             <MotionImage
//               key={current}
//               src={images[current]}
//               alt="hero"
//               fill
//               priority
//               className="object-cover rounded-[inherit]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8 }}
//             />
//           </motion.div>

//           <button
//             className="absolute left-4 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer"
//             onClick={() =>
//               setCurrent((prev) => (prev - 1 + images.length) % images.length)
//             }
//           >
//             <ChevronLeft size={24} className="text-[#47919F]" />
//           </button>

//           <button
//             className="absolute right-4 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer"
//             onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
//           >
//             <ChevronRight size={24} className="text-[#47919F]" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";

const images: StaticImageData[] = [img1, img2, img3];
const MotionImage = motion(Image);

// Helper function to create random float animations
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Define shape type
type Shape = {
  type: "circle" | "rect" | "polygon";
  color: string;
  top: number;
  left: number;
  opacity: number;
  xAnim: number[];
  yAnim: number[];
  rotateAnim: number[];
};

// Create 10 shapes with random positions and animations
const createShapes = (): Shape[] => {
  const baseShapes = [
  { type: "circle" as const, color: "text-[#5FAAC0]" },
  { type: "rect" as const, color: "text-[#3C7E8A]" },
  { type: "polygon" as const, color: "text-[#6CA2B5]" },
  { type: "circle" as const, color: "text-[#47919F]" },
  { type: "rect" as const, color: "text-[#356C7A]" },
  { type: "circle" as const, color: "text-[#70BCCF]" },
  { type: "rect" as const, color: "text-[#2E6274]" },
  { type: "polygon" as const, color: "text-[#4F97AC]" },
  { type: "circle" as const, color: "text-[#88C4D6]" },
  { type: "rect" as const, color: "text-[#397588]" },
];


  return baseShapes.map((shape) => ({
    ...shape,
    top: random(5, 80),
    left: random(5, 90),
    opacity: random(0.3, 0.8),
    xAnim: [0, random(-40, 40), 0],
    yAnim: [0, random(-40, 40), 0],
    rotateAnim: [0, random(-45, 45), 0],
  }));
};

export default function HeroSection({ id }: { id?: string }) {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();
  const [animatedShapes, setAnimatedShapes] = useState<Shape[]>([]);

  // Generate shapes once
  useEffect(() => {
    setAnimatedShapes(createShapes());
  }, []);

  // Auto image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Morphing blob animation
  useEffect(() => {
    const animateBlob = async () => {
      while (true) {
        await controls.start({
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 30% 40% 70% / 60% 70% 30% 40%",
          ],
          transition: { duration: 8, repeat: Infinity, repeatType: "reverse" },
        });
      }
    };
    animateBlob();
  }, [controls]);

  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 bg-gray-50"
      id={id}
    >
      {/* Floating SVG background elements */}
      {animatedShapes.map((shape, i) => (
        <motion.svg
          key={i}
          className={`absolute ${shape.color}`}
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ top: `${shape.top}%`, left: `${shape.left}%`, opacity: shape.opacity }}
          animate={{ x: shape.xAnim, y: shape.yAnim, rotate: shape.rotateAnim }}
          transition={{ duration: random(8, 16), repeat: Infinity, ease: "easeInOut" }}
        >
          {shape.type === "circle" && <circle cx="12" cy="12" r="10" />}
          {shape.type === "rect" && <rect x="4" y="4" width="16" height="16" rx="3" />}
          {shape.type === "polygon" && <polygon points="12,2 22,22 2,22" />}
        </motion.svg>
      ))}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10 relative z-10">
        {/* Left text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Engineering Excellence through Intelligent Solutions.
          </h1>
          <p className="text-gray-600 mb-8">
            We work hand-in-hand with organizations to create digital solutions
            that drive growth, security, and innovation.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 bg-gradient-to-r from-[#47919F] to-[#3C7E8A] hover:from-[#3C7E8A] hover:to-[#366973] hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

        {/* Right animated blob with image */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <motion.div
            animate={controls}
            className="relative w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] bg-gradient-to-tr from-[#47919F] to-[#3C7E8A] overflow-hidden flex justify-center items-center"
          >
            <MotionImage
              key={current}
              src={images[current]}
              alt="hero"
              fill
              priority
              className="object-cover rounded-[inherit]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Carousel navigation buttons */}
          <button
            className="absolute left-4 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer z-20"
            onClick={() =>
              setCurrent((prev) => (prev - 1 + images.length) % images.length)
            }
          >
            <ChevronLeft size={24} className="text-[#47919F]" />
          </button>

          <button
            className="absolute right-4 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer z-20"
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
          >
            <ChevronRight size={24} className="text-[#47919F]" />
          </button>
        </div>
      </div>
    </section>
  );
}
