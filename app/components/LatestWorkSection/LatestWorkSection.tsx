"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "Creative Portfolio",
    image: "/projects/project1.jpg",
  },
  {
    name: "Real Estate Landing Page",
    image: "/projects/project1.jpg",
  },
  {
    name: "Restaurant Website",
    image: "/projects/project1.jpg",
  },
  {
    name: "Travel Agency UI",
    image: "/projects/project1.jpg",
  },
  {
    name: "E-commerce Dashboard",
    image: "/projects/project1.jpg",
  },
  {
    name: "Fitness App Design",
    image: "/projects/project1.jpg",
  },
];

export default function LatestWorkSection({id}: {id?: string}) {
  return (
    <section className="bg-white py-20" id={id}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Our Latest Work
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group h-[480px] cursor-pointer"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-700" />

              {/* Hover Mask Animation */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-60 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out" />

              {/* Text + Button */}
              <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 group-hover:translate-y-[-10px] z-10 text-center">
                <h3 className="text-white text-lg font-semibold mb-3">
                  {project.name}
                </h3>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-300">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* View More Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-900 transition-colors duration-300 mt-10 cursor-pointer"
        >
          View More
        </motion.button>
      </div>
    </section>
  );
}
