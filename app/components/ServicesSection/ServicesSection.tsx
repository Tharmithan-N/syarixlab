"use client";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Megaphone, ShoppingCart, MessageSquare, Settings } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: "Website Design & Development",
    description: " We build modern, responsive, and high-performing websites that elevate your brand presence. ",
    icon: Laptop,
  },
  {
    title: "Software & SaaS Development",
    description: " Custom-built software and SaaS solutions designed for scalability, security, and growth. ",
    icon: Laptop,
  },
  {
    title: "Data and Analytics Solution",
    description: " Transform your data into insights with powerful analytics and visualization tools. ",
    icon: Megaphone,
  },
  {
    title: "AI Solutions",
    description: "Intelligent AI models that automate, predict, and optimize business performance.",
    icon: Smartphone,
  },
  {
    title: "Research & Reporting",
    description: "Actionable research and reports that guide strategic, data-driven decisions. ",
    icon: ShoppingCart,
  },
    {
    title: "Digital Marketing",
    description: "Creative, data-backed marketing strategies that boost reach and engagement.",
    icon: Settings,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f9f9ff] py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We deliver creative, high-quality, and reliable technology services for your business success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white rounded-2xl shadow-md p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-600 to-indigo-500 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-white transition-colors duration-500">
                  <service.icon
                    size={32}
                    className="text-blue-600 group-hover:text-blue-700 transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-200 mt-3 text-sm leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Border animation */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                whileHover={{
                  borderColor: "rgba(59,130,246,0.6)",
                  transition: { duration: 0.5 },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
