"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const seoFeatures = [
  {
    title: "SEO Consultancy",
    description:
      "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.",
  },
  {
    title: "Content Marketing",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    title: "SEO Optimization",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    title: "Social Marketing",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
];

export default function SEOSection() {
  return (
    <section className="bg-white py-20" id="seo">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT IMAGE / ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center order-1 md:order-none"
        >
          <div className="relative w-[90%] md:w-[85%] max-w-lg">
            <Image
              src="/digital-marketing-illustration.png"
              alt="SEO & Marketing"
              width={600}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            SEO & Marketing Services
          </h2>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {seoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-2 bg-blue-50 px-4 py-4 rounded-md cursor-pointer hover:bg-blue-100 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  <span className="font-semibold text-gray-800 text-sm">
                    {feature.title}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
