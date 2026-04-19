import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdVerified,
  MdLocationOn,
  MdFlashOn,
  MdStar,
  MdShield,
  MdGroups,
  MdCheck,
} from "react-icons/md";
import { FaTaxi } from "react-icons/fa";

/* ─── Framer variants ─────────────────────────────────────── */
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Data ─────────────────────────────────────────────────── */
const pillars = [
  {
    icon: <MdFlashOn size={22} />,
    title: "Mission",
    desc: "Safe, punctual & professional transport — customer-first, always.",
    color: "#F5B800",
  },
  {
    icon: <MdStar size={22} />,
    title: "Vision",
    desc: "Trusted leader in travel, transport & driver services across Tamil Nadu.",
    color: "#60A5FA",
  },
  {
    icon: <MdShield size={22} />,
    title: "Since 2015",
    desc: "10+ years — corporate, event & personal travel from Erode, TN.",
    color: "#4ADE80",
  },
];

const stats = [
  { icon: <MdVerified size={20} />,   value: "10+", label: "Years",      color: "#F5B800" },
  { icon: <MdLocationOn size={20} />, value: "TN",  label: "Tamil Nadu", color: "#4ADE80" },
  { icon: <FaTaxi size={18} />,       value: "152", label: "Vehicles",   color: "#60A5FA" },
  { icon: <MdGroups size={20} />,     value: "88",  label: "Team",       color: "#F472B6" },
];

/* ─── LOCAL car images from /public folder ──────────────────
   Files: creta.jpg | dzire.png | innova.jpg | verna.jpg      */
const CAR_IMGS = {
  innova: `innova.jpg`,
  swift:  `dzire.png`,
  verna:  `verna.jpg`,
  creta:  `creta.jpg`,
};

const carData = [
  {
    key: "innova",
    name: "Toyota Innova Crysta",
    short: "Innova",
    segment: "Premium MUV",
    seats: "7 Seats",
    color: "#e0e0e0",
    accent: "#5b9bd5",
    features: ["AC", "GPS", "Luggage Space"],
  },
  {
    key: "swift",
    name: "Maruti Swift Dzire",
    short: "Swift Dzire",
    segment: "Economy Sedan",
    seats: "4 Seats",
    color: "#E53935",
    accent: "#ef5350",
    features: ["AC", "Fuel Efficient", "City Rides"],
  },
  {
    key: "verna",
    name: "Hyundai Verna",
    short: "Verna",
    segment: "Premium Sedan",
    seats: "5 Seats",
    color: "#1976D2",
    accent: "#42a5f5",
    features: ["AC", "Sunroof", "Corporate"],
  },
  {
    key: "creta",
    name: "Hyundai Creta",
    short: "Creta",
    segment: "Premium SUV",
    seats: "5 Seats",
    color: "#388E3C",
    accent: "#66bb6a",
    features: ["AC", "SUV Comfort", "Outstation"],
  },
];

/* ─── Single Car Card ───────────────────────────────────────── */
function CarCard({ car, index, isActive, onClick }) {
  return (
    <motion.div
      variants={scaleIn}
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      animate={isActive ? { y: -6, scale: 1.03 } : { y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300"
      style={{
        background: isActive
          ? `linear-gradient(145deg, ${car.accent}18, rgba(255,255,255,0.04))`
          : "rgba(255,255,255,0.025)",
        border: `1.5px solid ${isActive ? car.accent + "70" : "rgba(255,255,255,0.07)"}`,
        boxShadow: isActive
          ? `0 12px 40px ${car.accent}25, 0 0 0 1px ${car.accent}20`
          : "0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* Active indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 h-[2.5px] rounded-t-xl"
            style={{ background: `linear-gradient(90deg, ${car.accent}, ${car.color})` }}
          />
        )}
      </AnimatePresence>

      {/* Image area */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          height: "clamp(80px, 10vw, 130px)",
          background: `radial-gradient(ellipse at center bottom, ${car.accent}20 0%, rgba(0,0,0,0.5) 100%)`,
        }}
      >
        <img
          src={CAR_IMGS[car.key]}
          alt={car.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: isActive
              ? "brightness(1.05) contrast(1.08) saturate(1.1)"
              : "brightness(0.85) contrast(1.0) saturate(0.9)",
            transition: "filter 0.35s ease",
          }}
        />

        {/* Image overlay gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${isActive ? car.accent + "28" : "rgba(0,0,0,0.35)"} 0%, transparent 60%)`,
          }}
        />

        {/* Segment badge */}
        <div
          className="absolute top-2 left-2 px-2 py-0.5 rounded-full font-body font-semibold"
          style={{
            background: isActive ? car.accent + "cc" : "rgba(0,0,0,0.65)",
            color: isActive ? "#fff" : "rgba(255,255,255,0.75)",
            fontSize: "clamp(7px, 0.75vw, 10px)",
            border: isActive ? `1px solid ${car.color}40` : "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
          }}
        >
          {car.segment}
        </div>

        {/* Seats badge */}
        <div
          className="absolute top-2 right-2 px-2 py-0.5 rounded-full font-body font-semibold"
          style={{
            background: "rgba(0,0,0,0.65)",
            color: car.accent,
            fontSize: "clamp(7px, 0.75vw, 10px)",
            border: `1px solid ${car.accent}30`,
            backdropFilter: "blur(4px)",
          }}
        >
          {car.seats}
        </div>
      </div>

      {/* Info area */}
      <div className="flex flex-col gap-1.5 px-3 py-2.5 flex-1">
        {/* Name */}
        <div>
          <h3
            className="font-body font-bold leading-tight"
            style={{
              color: isActive ? car.accent : "rgba(255,255,255,0.88)",
              fontSize: "clamp(9px, 1.05vw, 13px)",
            }}
          >
            {car.name}
          </h3>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1">
          {car.features.map((f) => (
            <span
              key={f}
              className="flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-body"
              style={{
                background: isActive ? `${car.accent}18` : "rgba(255,255,255,0.04)",
                border: `1px solid ${isActive ? car.accent + "35" : "rgba(255,255,255,0.07)"}`,
                color: isActive ? car.accent : "rgba(255,255,255,0.5)",
                fontSize: "clamp(6px, 0.7vw, 9px)",
              }}
            >
              <MdCheck size={8} />
              {f}
            </span>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="flex items-center justify-between mt-auto pt-1.5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: car.accent }}
            />
            <span
              className="font-body font-medium"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(6px, 0.7vw, 9px)" }}
            >
              Available in fleet
            </span>
          </div>
          <FaTaxi
            style={{ color: isActive ? car.accent : "rgba(255,255,255,0.15)", flexShrink: 0 }}
            size={11}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN SLIDE ─────────────────────────────────────────── */
export default function Slide02() {
  const [activeCard, setActiveCard] = useState(0);
  const active = carData[activeCard];

  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex flex-col">

      {/* Ambient blobs */}
      <motion.div
        className="absolute top-[-8%] left-[-5%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,184,0,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ background: `radial-gradient(circle, ${active.accent}14 0%, transparent 70%)`, transition: "background 0.5s ease" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,184,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,0,1) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ── 2-col layout ── */}
      <motion.div
        variants={containerV}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 grid grid-cols-2 min-h-0"
      >
        {/* ═══ LEFT ═══ */}
        <div className="flex flex-col justify-center px-10 md:px-14 py-7 gap-5">

          {/* Label */}
          <motion.p
            variants={fadeLeft}
            className="font-accent uppercase tracking-[8px] text-taxi-yellow/55 text-sm md:text-base"
          >
            About Us
          </motion.p>

          {/* Heading */}
          <motion.div variants={fadeLeft}>
            <h2
              className="font-display text-taxi-yellow leading-none"
              style={{ fontSize: "clamp(60px, 10vw, 118px)" }}
            >
              WHO WE
            </h2>
            <h2
              className="font-display leading-none"
              style={{
                fontSize: "clamp(60px, 10vw, 118px)",
                WebkitTextStroke: "2px #F5B800",
                color: "transparent",
              }}
            >
              ARE
            </h2>
            <motion.div
              className="h-[4px] bg-taxi-yellow rounded-full mt-3"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Pillars */}
          <div className="flex flex-col gap-2.5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeLeft}
                whileHover={{ x: 8, borderLeftColor: p.color, backgroundColor: `${p.color}10` }}
                className="rounded-xl px-4 py-3.5 flex items-start gap-3 cursor-default transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.055)",
                  borderLeft: `3px solid ${p.color}60`,
                }}
              >
                <div className="mt-0.5 flex-shrink-0" style={{ color: p.color }}>{p.icon}</div>
                <div>
                  <span className="font-body font-bold text-base md:text-lg" style={{ color: p.color }}>
                    {p.title}{" — "}
                  </span>
                  <span className="font-body text-taxi-muted text-sm md:text-base leading-relaxed">
                    {p.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-4 gap-2">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: `0 8px 24px ${s.color}30` }}
                className="flex flex-col items-center text-center rounded-xl py-3 px-2 transition-all duration-200"
                style={{ background: `${s.color}0F`, border: `1px solid ${s.color}28` }}
              >
                <div className="mb-1" style={{ color: s.color }}>{s.icon}</div>
                <div
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: s.color }}
                >
                  {s.value}
                </div>
                <div className="font-body text-taxi-muted text-xs md:text-sm mt-0.5 font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Ticker */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-xl"
            style={{ background: "rgba(245,184,0,0.07)", border: "1px solid rgba(245,184,0,0.15)" }}
          >
            <div className="py-2.5 px-4 flex items-center gap-3 overflow-hidden">
              <FaTaxi className="text-taxi-yellow flex-shrink-0" size={16} />
              <div className="overflow-hidden flex-1">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="whitespace-nowrap font-body text-taxi-yellow/70 text-sm md:text-base font-medium"
                  style={{ display: "inline-block" }}
                >
                  {"✅ Erode, Tamil Nadu \u00a0•\u00a0 Innova Crysta \u00a0•\u00a0 Swift Dzire \u00a0•\u00a0 Verna \u00a0•\u00a0 Creta \u00a0•\u00a0 Tempo Traveller \u00a0•\u00a0 Mini Bus \u00a0•\u00a0 Coach Van \u00a0•\u00a0 152 Vehicles \u00a0•\u00a0 10+ Years \u00a0•\u00a0 Airport Taxi \u00a0•\u00a0 Corporate Travel \u00a0•\u00a0 TN Registered Fleet \u00a0\u00a0 ✅ Erode, Tamil Nadu \u00a0•\u00a0 Innova Crysta \u00a0•\u00a0 Swift Dzire \u00a0•\u00a0 Verna \u00a0•\u00a0 Creta \u00a0•\u00a0 Tempo Traveller \u00a0•\u00a0 Mini Bus \u00a0•\u00a0 Coach Van \u00a0•\u00a0 152 Vehicles \u00a0•\u00a0 10+ Years \u00a0•\u00a0 Airport Taxi \u00a0•\u00a0 Corporate Travel \u00a0•\u00a0 TN Registered Fleet \u00a0\u00a0"}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══ RIGHT — Car Showcase ═══ */}
        <motion.div
          variants={fadeRight}
          className="flex flex-col justify-center p-5 md:p-6 gap-4"
        >
          {/* Top label */}
          <motion.div variants={fadeUp} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-taxi-yellow animate-pulse" />
              <span className="font-accent uppercase tracking-[5px] text-taxi-yellow/70 text-sm md:text-base">
                Our Fleet · Tap to Explore
              </span>
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ border: "2px dashed rgba(245,184,0,0.3)" }}
            >
              <FaTaxi className="text-taxi-yellow/50" size={12} />
            </motion.div>
          </motion.div>

          {/* ── FEATURED CAR (large preview) ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                height: "clamp(120px, 16vw, 200px)",
                background: `linear-gradient(135deg, ${active.accent}20, rgba(0,0,0,0.7))`,
                border: `1.5px solid ${active.accent}45`,
                boxShadow: `0 16px 48px ${active.accent}22`,
              }}
            >
              <img
                src={CAR_IMGS[active.key]}
                alt={active.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "brightness(1.05) contrast(1.08) saturate(1.1)",
                }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to right, ${active.accent}30 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.6) 100%)`,
                }}
              />

              {/* Car name overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}
              >
                <div className="flex items-end justify-between">
                  <div>
                    <div
                      className="font-display leading-none"
                      style={{ color: active.accent, fontSize: "clamp(18px, 2.5vw, 30px)" }}
                    >
                      {active.name}
                    </div>
                    <div
                      className="font-body text-white/60 font-medium mt-0.5"
                      style={{ fontSize: "clamp(8px, 0.9vw, 11px)" }}
                    >
                      {active.segment} · {active.seats}
                    </div>
                  </div>
                  {/* Feature tags */}
                  <div className="flex flex-col gap-1 items-end">
                    {active.features.map(f => (
                      <span
                        key={f}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full font-body font-semibold"
                        style={{
                          background: `${active.accent}25`,
                          border: `1px solid ${active.accent}40`,
                          color: active.accent,
                          fontSize: "clamp(6px, 0.7vw, 9px)",
                        }}
                      >
                        <MdCheck size={8} /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Accent top bar */}
              <motion.div
                layoutId="activeBar"
                className="absolute top-0 left-0 h-[3px] w-full"
                style={{ background: `linear-gradient(90deg, ${active.accent}, ${active.color})` }}
              />
            </motion.div>
          </AnimatePresence>

          {/* ── 4 Car Thumbnail Cards (2×2 grid) ── */}
          <div className="grid grid-cols-2 gap-2.5">
            {carData.map((car, i) => (
              <CarCard
                key={car.key}
                car={car}
                index={i}
                isActive={activeCard === i}
                onClick={() => setActiveCard(i)}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}