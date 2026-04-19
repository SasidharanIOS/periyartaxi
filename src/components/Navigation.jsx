import React from "react";
import { motion } from "framer-motion";

export default function Navigation({ current, total, onNext, onPrev, onGoTo }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-4 px-4 py-2"
      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)" }}
    >
      {/* Prev button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        disabled={current === 0}
        aria-label="Previous slide"
        className="w-9 h-9 rounded-full bg-taxi-card border border-taxi-border flex items-center justify-center text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed flex-shrink-0"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      {/* Dot indicators */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => onGoTo(i)}
            aria-label={`Slide ${i + 1}`}
            animate={{
              width: i === current ? 22 : 7,
              backgroundColor: i === current ? "#F5B800" : "#2E2E2E",
            }}
            transition={{ duration: 0.3 }}
            className="h-[6px] rounded-full"
            whileHover={{ scale: 1.3, backgroundColor: "#F5B800" }}
          />
        ))}
      </div>

      {/* Next button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        disabled={current === total - 1}
        aria-label="Next slide"
        className="w-9 h-9 rounded-full bg-taxi-card border border-taxi-border flex items-center justify-center text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed flex-shrink-0"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>

      {/* Slide counter */}
      <div className="absolute right-4 bottom-2 text-taxi-muted font-body"
        style={{ fontSize: "clamp(10px, 1.1vw, 13px)" }}
      >
        {current + 1} / {total}
      </div>
    </div>
  );
}