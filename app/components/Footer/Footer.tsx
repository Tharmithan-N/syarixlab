"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-white font-bold text-xl">SyarixLabs</span>
          </div>
          <p className="text-gray-400">
            We craft beautiful web experiences and help your business shine online.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-white transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">Home</li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">About</li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">Services</li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">Portfolio</li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">Contact</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">Web Design</li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">Web Development</li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">UI/UX Design</li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">SEO Optimization</li>
            <li className="hover:text-white transition-colors duration-300 cursor-pointer">IT Consulting</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p>Email: <a href="mailto:info@yourbrand.com" className="hover:text-white transition-colors duration-300">info@SyarixLabs.com</a></p>
          <p>Phone: <a href="tel:+94123456789" className="hover:text-white transition-colors duration-300">+94 123 456 789</a></p>
          <p>Address: 123, Main Street, City, Country</p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SyarixLabs. All rights reserved.
      </div>
    </footer>
  );
}
