"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello! I want to contact you.",
}: WhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Outer pulse */}
      <span className="absolute inline-flex h-12 w-12 rounded-full bg-green-500 opacity-30 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center h-12 w-12 bg-green-500 rounded-full shadow-lg text-white text-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <FaWhatsapp />
      </div>
    </motion.a>
  );
}
