"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type ImagePanelProps = {
  src: string;
  alt: string;
  caption?: string;
  isOpen: boolean;
  onClose: () => void;
};

export function ImagePanel({ src, alt, caption, isOpen, onClose }: ImagePanelProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const panel = (
    <AnimatePresence>
      {isOpen && src ? (
        <motion.div
          key="image-panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100]"
        >
          {/* Backdrop: full screen, clicking closes */}
          <div
            className="absolute inset-0 bg-black/95"
            onClick={onClose}
            aria-hidden
          />
          {/* Content: only as big as image so backdrop is visible around it */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex max-h-[90vh] max-w-[95vw] flex-col items-center pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[85vh] max-w-[95vw] shrink-0">
                <img
                  src={src}
                  alt={alt}
                  className="max-h-[85vh] max-w-full rounded-lg object-contain"
                />
              </div>
              {caption ? (
                <p className="mt-4 shrink-0 text-center text-sm text-white/90">{caption}</p>
              ) : null}
            </motion.div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 pointer-events-auto"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  if (!mounted || typeof document === "undefined") return null;
  return createPortal(panel, document.body);
}
