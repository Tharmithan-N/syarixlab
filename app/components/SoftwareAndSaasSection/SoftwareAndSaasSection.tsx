"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
  "Custom Software Solutions",
  "SaaS Product Development & Deployment ",
  "API Development & Integration",
  "Cloud-Based Application Development",
  "Enterprise Systems (ERP, HRM, CRM)",
  "DevOps & Continuous Delivery Setup",
  "Product Maintenance & Support"
];

export default function SoftwareAndSaasSection() {
  return (
    <section className="bg-[#fafaff] py-20" id="digital-marketing">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Software & SaaS Development
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-lg">
            We believe brand interaction is key to communication. Real
            innovations and positive customer experience are the heart of
            success.
          </p>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-2 bg-blue-50 px-4 py-3 rounded-md cursor-pointer hover:bg-blue-100 transition-all duration-300"
              >
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span className="font-medium text-gray-800 text-sm">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* READ MORE BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 transition-all duration-300 cursor-pointer"
          >
            READ MORE
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE / ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[90%] md:w-[85%] max-w-lg">
            <Image
              src="/digital-marketing-illustration.png"
              alt="Digital Marketing"
              width={600}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
