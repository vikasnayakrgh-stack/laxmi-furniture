"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/store";

export function Toast() {
  const { toastMessage } = useUIStore();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-24 left-1/2 z-50 bg-ink text-white text-xs font-semibold px-6 py-3 rounded-full shadow-2xl pointer-events-none whitespace-nowrap"
        >
          {toastMessage}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
