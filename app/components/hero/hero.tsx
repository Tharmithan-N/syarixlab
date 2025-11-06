"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";

const images: StaticImageData[] = [img1, img2, img3];
const MotionImage = motion(Image);

// Helper function to create random float animations
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// SVG icons for the background
const shapes = [
  { type: "circle", color: "text-blue-400" },
  { type: "rect", color: "text-indigo-400" },
  { type: "polygon", color: "text-blue-300" },
  { type: "circle", color: "text-indigo-300" },
  { type: "rect", color: "text-blue-500" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();

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
    <section className="relative overflow-hidden pt-32 pb-16 bg-gray-50">
      {/* Floating SVG background elements */}
      {shapes.map((shape, i) => (
        <motion.svg
          key={i}
          className={`absolute ${shape.color}`}
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{
            top: `${random(5, 80)}%`,
            left: `${random(5, 90)}%`,
            opacity: random(0.3, 0.8),
          }}
          animate={{
            x: [0, random(-40, 40), 0],
            y: [0, random(-40, 40), 0],
            rotate: [0, random(-45, 45), 0],
          }}
          transition={{
            duration: random(8, 16),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && <circle cx="12" cy="12" r="10" />}
          {shape.type === "rect" && <rect x="4" y="4" width="16" height="16" rx="3" />}
          {shape.type === "polygon" && (
            <polygon points="12,2 22,22 2,22" />
          )}
        </motion.svg>
      ))}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10 relative z-10">
        {/* Left text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Engineering Excellence through Intelligent Solutions.
          </h1>
          <p className="text-gray-600 mb-8">
            We work hand-in-hand with organizations to create digital solutions that drive growth, security, and 
innovation.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition cursor-pointer">
              Get Started
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 transition cursor-pointer">
              ▶ Play Video
            </button>
          </div>
        </div>

        {/* Right animated blob with image */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <motion.div
            animate={controls}
            className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-blue-500 to-indigo-400 overflow-hidden flex justify-center items-center"
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

          {/* Image navigation buttons */}
          <button
            className="absolute left-4 bg-white/70 rounded-full p-2 hover:bg-white shadow cursor-pointer"
            onClick={() =>
              setCurrent((prev) => (prev - 1 + images.length) % images.length)
            }
          >
            ◀
          </button>
          <button
            className="absolute right-4 bg-white/70 rounded-full p-2 hover:bg-white shadow cursor-pointer"
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
