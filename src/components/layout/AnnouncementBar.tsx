"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ANNOUNCEMENTS = [
  "Sign Up & Get Flat 10% off + Redeem 10,000 credits on First Purchase",
  "Flat ₹1,000 Off on Purchases Above ₹4,999 • Use Code: FREEDOM1K",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="bg-[#0B5B4C] text-white font-semibold text-center text-xs py-2 px-4 relative min-h-[38px] flex items-center justify-center overflow-hidden tracking-wide shadow-xs"
      role="status"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center px-4 text-white text-[11px] sm:text-xs tracking-wide"
        >
          {ANNOUNCEMENTS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}


