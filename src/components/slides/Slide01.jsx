import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── LOCAL CARS (from /public folder) ─── */
const CARS = [
  {
    key: "innova",
    name: "Toyota Innova Crysta",
    emoji: "🚐",
    tag: "Premium MPV",
    color: "#3b82f6",
    img: "/innova.jpg",
  },
  {
    key: "swift",
    name: "Maruti Swift",
    emoji: "🚗",
    tag: "Hatchback",
    color: "#ef4444",
    img: "/dzire.png",
  },
  {
    key: "verna",
    name: "Hyundai Verna",
    emoji: "🚘",
    tag: "Sedan",
    color: "#a3a3a3",
    img: "/verna.jpg",
  },
  {
    key: "creta",
    name: "Hyundai Creta",
    emoji: "🚙",
    tag: "SUV",
    color: "#60a5fa",
    img: "/creta.jpg",
  },
];

/* ─── Stats row ─── */
const STATS = [
  { value: "10+",   label: "Years Experience" },
  { value: "2015",  label: "Est. Since" },
  { value: "152",   label: "Vehicles" },
  { value: "ERODE", label: "Tamil Nadu" },
];

/* ─── Service tags ─── */
const TAGS = [
  "Corporate",
  "Events",
  "Outstation",
  "Airport",
  "Valet Parking",
  "Acting Driver",
];

/* ─── Animation variants ─── */
const containerVar = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const itemVar = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Car Carousel ─── */
function CarCarousel() {
  const [active, setActive] = useState(0);
  const [imgError, setImgError] = useState({});
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % CARS.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (idx) => {
    setActive(idx);
    resetTimer();
  };

  const car = CARS[active];

  return (
    <div className="w-full flex flex-col" style={{ flex: "1 1 0", minHeight: 0 }}>
      {/* Image area */}
      <div
        className="relative w-full overflow-hidden"
        style={{ flex: "1 1 0", minHeight: 0 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.04, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.97, x: -30 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {/* Car image or emoji fallback */}
            {imgError[car.key] ? (
              <div
                className="w-full h-full flex flex-col items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${car.color}22, ${car.color}44)`,
                }}
              >
                <div style={{ fontSize: "clamp(64px, 15vw, 130px)" }}>
                  {car.emoji}
                </div>
                <div
                  className="font-display text-taxi-black mt-2 tracking-wide"
                  style={{ fontSize: "clamp(18px, 3.5vw, 36px)" }}
                >
                  {car.name}
                </div>
              </div>
            ) : (
              <img
                src={car.img}
                alt={car.name}
                onError={() =>
                  setImgError((e) => ({ ...e, [car.key]: true }))
                }
                className="w-full h-full"
                style={{ objectFit: "cover", objectPosition: "center 60%" }}
              />
            )}

            {/* Bottom gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(245,184,0,0.06) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)",
              }}
            />

            {/* Car name badge — bottom left */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body font-bold text-white"
                style={{
                  background: "rgba(0,0,0,0.72)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${car.color}66`,
                  fontSize: "clamp(11px, 1.8vw, 15px)",
                }}
              >
                <span>{car.emoji}</span>
                <span>{car.name}</span>
                <span
                  className="ml-1 px-2 py-0.5 rounded-full text-white font-semibold"
                  style={{
                    background: car.color,
                    fontSize: "clamp(9px, 1.2vw, 11px)",
                  }}
                >
                  {car.tag}
                </span>
              </div>
            </div>

            {/* Slide counter — top right */}
            <div
              className="absolute top-3 right-3 font-body text-white/80 text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(0,0,0,0.52)",
                backdropFilter: "blur(4px)",
              }}
            >
              {active + 1} / {CARS.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 py-2 flex-shrink-0">
        {CARS.map((c, i) => (
          <motion.button
            key={c.key}
            onClick={() => go(i)}
            aria-label={`View ${c.name}`}
            animate={{
              width: i === active ? 28 : 8,
              backgroundColor:
                i === active ? "#111111" : "rgba(0,0,0,0.25)",
            }}
            transition={{ duration: 0.28 }}
            className="h-2 rounded-full"
            style={{
              border: `1.5px solid ${
                i === active ? c.color : "rgba(0,0,0,0.15)"
              }`,
            }}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN SLIDE ─── */
export default function Slide01() {
  return (
    <div className="w-full h-full bg-taxi-yellow relative overflow-hidden flex flex-col">

      {/* Background blobs */}
      <div className="absolute top-[-12%] right-[-10%] w-72 h-72 bg-taxi-yellow-dark rounded-full opacity-30 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-12%] left-[-8%] w-80 h-80 bg-taxi-yellow-dark rounded-full opacity-25 animate-float pointer-events-none" />
      <div className="absolute top-[18%] left-[2%] w-36 h-36 bg-white rounded-full opacity-10 animate-float-slow pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        variants={containerVar}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col w-full h-full"
      >

        {/* ── TOP: Periyar Taxi Logo ── */}
        <motion.div
          variants={itemVar}
          className="flex-shrink-0 flex justify-center items-center pt-3 pb-1"
        >
          <motion.img
            src="/periyartaxi.png"
            alt="Periyar Taxi – The Economic Class"
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
            }}
            style={{
              height: "clamp(52px, 10vw, 96px)",
              maxWidth: "clamp(220px, 55vw, 520px)",
              objectFit: "contain",
              filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.28))",
            }}
          />
        </motion.div>

        {/* ── MIDDLE: Car Carousel ── */}
        <motion.div
          variants={itemVar}
          className="flex-1 min-h-0 w-full relative overflow-hidden"
          style={{
            borderTop: "2px solid rgba(0,0,0,0.10)",
            borderBottom: "2px solid rgba(0,0,0,0.10)",
          }}
        >
          <CarCarousel />
        </motion.div>

        {/* ── BOTTOM: Stats + Tags ── */}
        <motion.div
          variants={itemVar}
          className="flex-shrink-0 flex flex-col items-center pb-10"
          style={{ paddingTop: "6px" }}
        >
          {/* Stats row */}
          <div className="flex items-center justify-center gap-3 md:gap-8 flex-wrap px-4">
            {STATS.map((s, i) => (
              <React.Fragment key={s.value}>
                <div className="text-center">
                  <div
                    className="font-display text-taxi-black leading-none"
                    style={{ fontSize: "clamp(26px, 5.5vw, 56px)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="font-body text-taxi-black/60 font-semibold uppercase tracking-wider"
                    style={{ fontSize: "clamp(9px, 1.4vw, 13px)" }}
                  >
                    {s.label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div
                    className="w-px bg-taxi-black/20"
                    style={{ height: "clamp(28px, 5vw, 44px)" }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-taxi-black/25 my-2" />

          {/* Service tags */}
          <div className="flex flex-wrap justify-center gap-1.5 px-4">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-taxi-black/10 text-taxi-black/75 font-body font-semibold border border-taxi-black/20"
                style={{ fontSize: "clamp(10px, 1.6vw, 14px)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}