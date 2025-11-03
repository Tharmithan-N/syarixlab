"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const plans = [
  {
    name: "Daily Plan",
    price: "$120 / Day",
    features: [
      { name: "Web Design", included: true },
      { name: "IT Consultancy", included: true },
      { name: "Web Development", included: true },
      { name: "Email Integration", included: true },
      { name: "Mobile Apps Development", included: false },
      { name: "Quick Responses", included: false },
      { name: "24/7 Support", included: false },
    ],
  },
  {
    name: "Weekly Plan",
    price: "$840 / Week",
    features: [
      { name: "Web Design", included: true },
      { name: "IT Consultancy", included: true },
      { name: "Web Development", included: true },
      { name: "Email Integration", included: true },
      { name: "Mobile Apps Development", included: true },
      { name: "Quick Responses", included: true },
      { name: "24/7 Support", included: false },
    ],
  },
  {
    name: "Monthly Plan",
    price: "$3,600 / Month",
    features: [
      { name: "Web Design", included: true },
      { name: "IT Consultancy", included: true },
      { name: "Web Development", included: true },
      { name: "Email Integration", included: true },
      { name: "Mobile Apps Development", included: true },
      { name: "Quick Responses", included: true },
      { name: "24/7 Support", included: true },
    ],
  },
];

export default function PricingSection() {
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
          Choose The Pricing Plan
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <p className="text-2xl font-bold text-blue-600">{plan.price}</p>
              </div>

              {/* Features */}
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    {feature.included ? (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-blue-500" />
                    )}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>

              {/* Select Button */}
              <button className="mt-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
                Select the Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
