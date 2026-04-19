import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Slide01 from "./components/slides/Slide01";
import Slide02 from "./components/slides/Slide02";
import Slide03 from "./components/slides/Slide03";
import Slide04 from "./components/slides/Slide04";
import Slide05 from "./components/slides/Slide05";
import Slide06 from "./components/slides/Slide06";
import Slide07 from "./components/slides/Slide07";
import Slide08 from "./components/slides/Slide08";
import Slide09 from "./components/slides/Slide09";
import Slide10 from "./components/slides/Slide10";
import Slide11 from "./components/slides/Slide11";
import Slide12 from "./components/slides/Slide12";
import Slide13 from "./components/slides/Slide13";
import Slide14 from "./components/slides/Slide14";
import Slide15 from "./components/slides/Slide15";

const slides = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide10,
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.3 },
    },
  },
  exit: (dir) => ({
    x: dir < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.2 },
    },
  }),
};

export default function App() {
  const [[current, direction], setSlide] = useState([0, 0]);
  const [touchStartX, setTouchStartX] = useState(null);

  const goTo = useCallback(
    (index) => {
      if (index === current) return;
      setSlide([index, index > current ? 1 : -1]);
    },
    [current]
  );

  const next = useCallback(() => {
    if (current < slides.length - 1) setSlide([current + 1, 1]);
  }, [current]);

  const prev = useCallback(() => {
    if (current > 0) setSlide([current - 1, -1]);
  }, [current]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 60) next();
    else if (diff < -60) prev();
    setTouchStartX(null);
  };

  const Slide = slides[current];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-taxi-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      <Navigation
        current={current}
        total={slides.length}
        onNext={next}
        onPrev={prev}
        onGoTo={goTo}
      />
    </div>
  );
}