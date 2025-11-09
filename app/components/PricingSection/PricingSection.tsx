// "use client";

// import { motion } from "framer-motion";
// import { CheckCircle, XCircle } from "lucide-react";

// const plans = [
//   {
//     name: "Starter Plan",
//     price: "45000+ LKR ",
//     features: [
//       { name: "5 Pages", included: true },
//       { name: " Responsive Design", included: true },
//       { name: "Domain + Hosting", included: true },
//       { name: "Basic SEO ", included: true },
//       { name: "1 year free hosting ", included: true },
//     ],
//   },
//   {
//     name: "Business Plan",
//     price: "80000+ LKR ",
//     features: [
//       { name: "Max 10 Pages ", included: true },
//       { name: "Responsive Design ", included: true },
//       { name: "1 year hosting + maintenance free", included: true },
//       { name: "Standard SEO optimization ", included: true },
//       { name: "Basic Social Media ", included: true },
//     ],
//   },
//   {
//     name: "Premium Plan",
//     price: "110000+ LKR ",
//     features: [
//       { name: "Max 25 Pages ", included: true },
//       { name: "CMS support ", included: true },
//       { name: "Custom design ", included: true },
//       { name: "SEO advance setup ", included: true },
//       { name: "2 Years free maintenance", included: true },
//     ],
//   },
// ];

// export default function PricingSection({id}: {id?: string}) {
//   return (
//     <section className="bg-white py-20" id={id}>
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
//         >
//           Choose The Pricing Plan
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-gray-500 max-w-2xl mx-auto mb-12"
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </motion.p>

//         {/* Plans Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-500"
//             >
//               {/* Plan Header */}
//               <div className="mb-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {plan.name}
//                 </h3>
//                 <p className="text-2xl font-bold text-blue-600">{plan.price}</p>
//               </div>

//               {/* Features */}
//               <ul className="mb-6 space-y-2 text-left">
//                 {plan.features.map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-2 text-gray-600"
//                   >
//                     {feature.included ? (
//                       <CheckCircle className="w-5 h-5 text-blue-500" />
//                     ) : (
//                       <XCircle className="w-5 h-5 text-blue-500" />
//                     )}
//                     <span>{feature.name}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Select Button */}
//               <button className="mt-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
//                 Select the Plan
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "45,000+ LKR",
    features: [
      { name: "5 Pages", included: true },
      { name: "Responsive Design", included: true },
      { name: "Domain + Hosting", included: true },
      { name: "Basic SEO", included: true },
      { name: "1 Year Free Hosting", included: true },
    ],
  },
  {
    name: "Business Plan",
    price: "80,000+ LKR",
    features: [
      { name: "Max 10 Pages", included: true },
      { name: "Responsive Design", included: true },
      { name: "1 Year Hosting + Maintenance Free", included: true },
      { name: "Standard SEO Optimization", included: true },
      { name: "Basic Social Media", included: true },
    ],
  },
  {
    name: "Premium Plan",
    price: "110,000+ LKR",
    features: [
      { name: "Max 25 Pages", included: true },
      { name: "CMS Support", included: true },
      { name: "Custom Design", included: true },
      { name: "Advanced SEO Setup", included: true },
      { name: "2 Years Free Maintenance", included: true },
    ],
  },
];

export default function PricingSection({ id }: { id?: string }) {
  return (
    <section className="bg-[#fafaff] py-20" id={id}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Choose The Pricing Plan
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Select a plan that fits your business needs. All plans come with our professional support and quality guarantee.
        </motion.p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold text-[#47919F]">{plan.price}</p>
              </div>

              {/* Features */}
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    {feature.included ? (
                      <CheckCircle className="w-5 h-5 text-[#47919F]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#47919F]" />
                    )}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>

              {/* Select Button */}
              <button className="mt-auto px-6 py-3 bg-[#47919F] text-white font-semibold rounded-md hover:bg-[#2f6570] transition-colors duration-300">
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
