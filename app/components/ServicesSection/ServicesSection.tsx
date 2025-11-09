// "use client";

// import { motion } from "framer-motion";
// import {
//   Laptop,
//   Smartphone,
//   Megaphone,
//   ShoppingCart,
//   Settings,
// } from "lucide-react";
// import { useEffect } from "react";

// interface Service {
//   title: string;
//   description: string;
//   icon: React.ElementType;
//   targetId: string; // 👈 add this
// }

// const services: Service[] = [
//   {
//     title: "Website Design & Development",
//     description:
//       "We build modern, responsive, and high-performing websites that elevate your brand presence.",
//     icon: Laptop,
//     targetId: "webdesign",
//   },
//   {
//     title: "Software & SaaS Development",
//     description:
//       "Custom-built software and SaaS solutions designed for scalability, security, and growth.",
//     icon: Laptop,
//     targetId: "software",
//   },
//   {
//     title: "Data and Analytics Solution",
//     description:
//       "Transform your data into insights with powerful analytics and visualization tools.",
//     icon: Megaphone,
//     targetId: "data",
//   },
//   {
//     title: "AI Solutions",
//     description:
//       "Intelligent AI models that automate, predict, and optimize business performance.",
//     icon: Smartphone,
//     targetId: "ai",
//   },
//   {
//     title: "Research & Reporting",
//     description:
//       "Actionable research and reports that guide strategic, data-driven decisions.",
//     icon: ShoppingCart,
//     targetId: "research",
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Creative, data-backed marketing strategies that boost reach and engagement.",
//     icon: Settings,
//     targetId: "marketing",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function ServicesSection({ id }: { id?: string }) {
//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = "smooth";
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const offset = 80; // adjust based on navbar height
//       const top = section.offsetTop - offset;
//       window.scrollTo({ top, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="bg-[#f9f9ff] py-20" id={id}>
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             We deliver creative, high-quality, and reliable technology services
//             for your business success.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, i) => (
//             <motion.div
//               key={service.title}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               transition={{
//                 duration: 0.6,
//                 delay: i * 0.15,
//                 ease: [0.25, 0.1, 0.25, 1],
//               }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               className="group relative bg-white rounded-2xl shadow-md p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl overflow-hidden"
//               onClick={() => scrollToSection(service.targetId)} // 👈 smooth scroll trigger
//             >
//               <div className="relative z-10 flex flex-col items-center text-center">
//                 <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 transition-colors duration-500 group-hover:shadow-lg">
//                   <service.icon
//                     size={32}
//                     className="text-blue-600 transition-all duration-500"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-500">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-500 mt-3 text-sm leading-relaxed transition-colors duration-500">
//                   {service.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Megaphone,
  ShoppingCart,
  Settings,
} from "lucide-react";
import { useEffect } from "react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  targetId: string;
}

const services: Service[] = [
  {
    title: "Website Design & Development",
    description:
      "We build modern, responsive, and high-performing websites that elevate your brand presence.",
    icon: Laptop,
    targetId: "webdesign",
  },
  {
    title: "Software & SaaS Development",
    description:
      "Custom-built software and SaaS solutions designed for scalability, security, and growth.",
    icon: Laptop,
    targetId: "software",
  },
  {
    title: "Data and Analytics Solution",
    description:
      "Transform your data into insights with powerful analytics and visualization tools.",
    icon: Megaphone,
    targetId: "data",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent AI models that automate, predict, and optimize business performance.",
    icon: Smartphone,
    targetId: "ai",
  },
  {
    title: "Research & Reporting",
    description:
      "Actionable research and reports that guide strategic, data-driven decisions.",
    icon: ShoppingCart,
    targetId: "research",
  },
  {
    title: "Digital Marketing",
    description:
      "Creative, data-backed marketing strategies that boost reach and engagement.",
    icon: Settings,
    targetId: "marketing",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection({ id }: { id?: string }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 py-20" id={id}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We deliver creative, high-quality, and reliable technology services
            for your business success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white rounded-2xl shadow-md p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl overflow-hidden"
              onClick={() => scrollToSection(service.targetId)}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#47919F] to-[#3C7E8A] group-hover:shadow-lg transition-all duration-500">
                  <service.icon
                    size={32}
                    className="text-white transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Decorative floating circles */}
              <motion.div
                className="absolute w-24 h-24 bg-[#47919F]/10 rounded-full -top-6 -left-6 z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-16 h-16 bg-[#3C7E8A]/10 rounded-full -bottom-6 -right-6 z-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
