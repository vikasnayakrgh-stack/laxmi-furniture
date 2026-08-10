"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  position?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export function Drawer({
  isOpen,
  onClose,
  title,
  position = "right",
  children,
  className,
}: DrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const slideVariants = {
    hidden: { x: position === "right" ? "100%" : "-100%" },
    visible: { x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Slide-out Drawer Panel (Pure White Light Theme) */}
          <motion.aside
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className={cn(
              "fixed inset-y-0 z-50 flex flex-col bg-white shadow-2xl border-[#E5E7EB]",
              position === "right"
                ? "right-0 border-l w-[min(430px,94vw)]"
                : "left-0 border-r w-[min(320px,85vw)]",
              className
            )}
          >
            {title && (
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-5 py-4 bg-[#FAF6F1]">
                <div className="font-head text-lg font-black text-[#111827]">
                  {title}
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111827] transition-colors cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
            <div className="flex-1 overflow-y-auto p-5 bg-white text-[#111827]">{children}</div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
