"use client";

import { motion } from "framer-motion";
import {
  Search,
  Layout,
  Code,
  Rocket,
  RefreshCcw,
} from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    title: "Discovery & Consultation",
    description:
      "Understand goals, challenges, and opportunities to craft a solid foundation for success.",
    icon: Search,
  },
  {
    title: "Planning & Architecture",
    description:
      "Define the technical strategy and design blueprint to ensure scalable, robust systems.",
    icon: Layout,
  },
  {
    title: "Development & Testing",
    description:
      "Build with agility, precision, and scalability through iterative development and testing.",
    icon: Code,
  },
  {
    title: "Deployment & Monitoring",
    description:
      "Launch seamlessly and monitor performance for reliability and optimization.",
    icon: Rocket,
  },
  {
    title: "Support & Evolution",
    description:
      "Continuously improve your product through analytics, user feedback, and regular updates.",
    icon: RefreshCcw,
  },
];

export default function OurProcessSection() {
  return (
    <section className="bg-[#f9f9ff] py-20" id="process">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Process
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A structured and client-focused workflow ensuring every project’s
            success.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 transition-colors duration-500">
                  <step.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
