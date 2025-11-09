"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    { from: "agent", text: "Hello! How can we help you today?" },
    { from: "user", text: "Hi, I want to know more about your services." },
    { from: "agent", text: "Sure! We provide web design, development, and IT consulting." },
  ];

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end">
      {/* Chat Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-72 sm:w-80 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
            Chat with us
            <button onClick={() => setIsOpen(false)} className="text-white font-bold text-lg">
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 flex flex-col gap-3 max-h-64 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.from === "agent" ? "bg-gray-100 self-start" : "bg-blue-600 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input placeholder */}
          <div className="px-4 py-2 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>
        </motion.div>
      )}

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="mb-4 relative flex items-center justify-center h-12 w-12 bg-[#47919F] rounded-full shadow-lg text-white text-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
      >
        <FaComments />
      </motion.button>
    </div>
  );
}
