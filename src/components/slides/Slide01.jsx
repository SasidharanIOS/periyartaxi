import React from "react";
import { motion } from "framer-motion";

/* ─── LOCAL CARS (from /public folder) ─── */
const CARS = [
  {
    key: "tavera",
    name: "Chevrolet Tavera",
    emoji: "🚐",
    tag: "Premium MPV",
    color: "#3b82f6",
    img: `${import.meta.env.BASE_URL}chevorlet1.png`,
  },
  {
    key: "swift",
    name: "Maruti Swift Dzire",
    emoji: "🚗",
    tag: "Sedan",
    color: "#ef4444",
    img: `${import.meta.env.BASE_URL}dezire.png`,
  },
  {
    key: "aura",
    name: "Hyundai Aura",
    emoji: "🚘",
    tag: "Sedan",
    color: "#a3a3a3",
    img: `${import.meta.env.BASE_URL}aura.jpg`,
  },
  {
    key: "innova",
    name: "Innova Crysta",
    emoji: "🚙",
    tag: "SUV",
    color: "#60a5fa",
    img: `${import.meta.env.BASE_URL}innova.jpg`,
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
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVar = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Single Car Card ─── */
function CarCard({ car, index }) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-xl"
      style={{
        border: `1.5px solid ${car.color}40`,
        boxShadow: `0 4px 20px ${car.color}22`,
        minHeight: "clamp(120px, 18vw, 200px)",
      }}
    >
      {imgError ? (
        <div
          className="w-full h-full flex flex-col items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${car.color}22, ${car.color}44)`,
            minHeight: "80px",
          }}
        >
          <span style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>{car.emoji}</span>
        </div>
      ) : (
        <img
          src={car.img}
          alt={car.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 55%", display: "block" }}
        />
      )}

      {/* Bottom overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Badge */}
      <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 flex items-end justify-between">
        <div
          className="font-body font-bold text-white leading-tight"
          style={{ fontSize: "clamp(10px, 1.3vw, 15px)" }}
        >
          {car.emoji} {car.name}
        </div>
        <span
          className="px-2 py-0.5 rounded-full text-white font-body font-semibold flex-shrink-0 ml-1"
          style={{ background: car.color, fontSize: "clamp(8px, 1vw, 12px)" }}
        >
          {car.tag}
        </span>
      </div>
    </motion.div>
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
        className="relative z-10 flex flex-col w-full h-full pt-3 px-3 pb-10 gap-2"
      >
        {/* ── TOP: Periyar Taxi Logo ── */}
        <motion.div
          variants={itemVar}
          className="flex-shrink-0 flex justify-center items-center"
        >
          <div
            style={{
              mixBlendMode: "multiply",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}periyartaxi.png`}
              alt="Periyar Taxi – The Economic Class"
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              }}
              style={{
                height: "clamp(48px, 9vw, 88px)",
                maxWidth: "clamp(200px, 52vw, 480px)",
                objectFit: "contain",
                display: "block",
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.22))",
              }}
            />
          </div>
        </motion.div>

        {/* ── MIDDLE: 2×2 Car Grid ── */}
        <motion.div
          variants={itemVar}
          className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-2"
          style={{
            borderTop: "1.5px solid rgba(0,0,0,0.10)",
            borderBottom: "1.5px solid rgba(0,0,0,0.10)",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          {CARS.map((car, i) => (
            <CarCard key={car.key} car={car} index={i} />
          ))}
        </motion.div>

        {/* ── BOTTOM: Stats + Tags ── */}
        <motion.div
          variants={itemVar}
          className="flex-shrink-0 flex flex-col items-center gap-1.5"
        >
          {/* Stats row */}
          <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap px-2">
            {STATS.map((s, i) => (
              <React.Fragment key={s.value}>
                <div className="text-center">
                  <div
                    className="font-display text-taxi-black leading-none"
                    style={{ fontSize: "clamp(22px, 4.5vw, 52px)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="font-body text-taxi-black/60 font-semibold uppercase tracking-wider"
                    style={{ fontSize: "clamp(8px, 1.2vw, 13px)" }}
                  >
                    {s.label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div
                    className="w-px bg-taxi-black/20"
                    style={{ height: "clamp(24px, 4vw, 40px)" }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Divider */}
          <div className="w-20 h-px bg-taxi-black/25" />

          {/* Service tags */}
          <div className="flex flex-wrap justify-center gap-1.5 px-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-taxi-black/10 text-taxi-black/75 font-body font-semibold border border-taxi-black/20"
                style={{ fontSize: "clamp(9px, 1.4vw, 13px)" }}
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