"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const news = [
  {
    title: "Launching Our New Web Platform",
    description:
      "We are excited to announce the launch of our modern web platform for clients worldwide.",
    image: "/projects/project1.jpg",
  },
  {
    title: "Tips for Effective Digital Marketing",
    description:
      "Learn the best strategies for increasing engagement and conversions for your business.",
    image: "/projects/project1.jpg",
  },
  {
    title: "Top Trends in Web Development 2025",
    description:
      "Discover the latest trends and technologies shaping the future of web development.",
    image: "/projects/project1.jpg",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Latest News
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden relative w-full h-56 sm:h-64 md:h-72">
                <motion.div
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  className="w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
