"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket, Users, RefreshCw, Globe } from "lucide-react";

const reasons = [
  {
    title: "End-to-End Expertise",
    description:
      "From data pipelines to AI integration, we handle the full lifecycle of development.",
    icon: Cpu,
  },
  {
    title: "Cutting-Edge Technologies",
    description:
      "We use modern, scalable tech stacks to ensure long-term performance and innovation.",
    icon: Rocket,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We collaborate closely with you to craft solutions perfectly aligned with your goals.",
    icon: Users,
  },
  {
    title: "Agile Delivery",
    description:
      "Adaptive and transparent project execution ensures timely, quality outcomes.",
    icon: RefreshCw,
  },
  {
    title: "Global Standards",
    description:
      "We follow international best practices for quality, security, and compliance.",
    icon: Globe,
  },
];

export default function WhyUsSection({id}: {id?: string}) {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20" id={id}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We combine technology, strategy, and creativity to deliver exceptional results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(37, 99, 235, 0.25)",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-start text-left transition-transform duration-500 ease-out"
              >
                <div className="p-3 bg-blue-100 rounded-xl mb-4 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
