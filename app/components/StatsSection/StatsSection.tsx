"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "120+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "15", label: "Awards" },
  { number: "48+", label: "Expert Members" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer
              border-2 border-dotted border-blue-300 bg-gradient-to-t from-blue-400 to-blue-500 text-white
              shadow-md hover:shadow-xl transition-all duration-500 group"
            >
              {/* Animated background shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 opacity-20 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 pointer-events-none rounded-2xl"></div>

              <span className="text-4xl md:text-5xl font-bold mb-2 z-10">
                {stat.number}
              </span>
              <span className="text-sm md:text-base text-white text-center z-10">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
