import React from "react";
import { motion } from "framer-motion";

export default function Navigation({ current, total, onNext, onPrev, onGoTo }) {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex items-center justify-center gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        disabled={current === 0}
        aria-label="Previous slide"
        className="w-11 h-11 rounded-full bg-taxi-card border border-taxi-border flex items-center justify-center text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => onGoTo(i)}
            aria-label={`Slide ${i + 1}`}
            animate={{
              width: i === current ? 24 : 8,
              backgroundColor: i === current ? "#F5B800" : "#2E2E2E",
            }}
            transition={{ duration: 0.3 }}
            className="h-2 rounded-full"
            whileHover={{ scale: 1.3, backgroundColor: "#F5B800" }}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        disabled={current === total - 1}
        aria-label="Next slide"
        className="w-11 h-11 rounded-full bg-taxi-card border border-taxi-border flex items-center justify-center text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>

      <div className="absolute right-5 bottom-0 text-taxi-muted font-body text-xs">
        {current + 1} / {total}
      </div>
    </div>
  );
}