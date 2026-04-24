import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdVerified,
  MdLocationOn,
  MdFlashOn,
  MdStar,
  MdShield,
  MdGroups,
} from "react-icons/md";
import { FaTaxi } from "react-icons/fa";

/* ─── Framer variants ─── */
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

/* ─── Data ─── */
const pillars = [
  {
    icon: <MdFlashOn size={22} />,
    title: "Mission",
    desc: "Safe, punctual & professional transport — customer-first, always.",
    color: "#d97706",
  },
  {
    icon: <MdStar size={22} />,
    title: "Vision",
    desc: "Trusted leader in travel, transport & driver services across Tamil Nadu.",
    color: "#2563eb",
  },
  {
    icon: <MdShield size={22} />,
    title: "Since 2015",
    desc: "10+ years — corporate, event & personal travel from Erode, TN.",
    color: "#16a34a",
  },
];

const stats = [
  { icon: <MdVerified size={20} />,   value: "10+", label: "Years",      color: "#d97706" },
  { icon: <MdLocationOn size={20} />, value: "TN",  label: "Tamil Nadu", color: "#16a34a" },
  { icon: <FaTaxi size={18} />,       value: "152", label: "Vehicles",   color: "#2563eb" },
  { icon: <MdGroups size={20} />,     value: "88",  label: "Team",       color: "#db2777" },
];

const CAR_IMGS = {
  innova: `/innova.jpg`,
  swift:  `/dezire.png`,
  aura:  `/aura.jpg`,
  creta:  `/ertiga.png`,
};

const carData = [
  { key: "innova", name: "Toyota Innova Crysta", color: "#1e40af", accent: "#3b82f6" },
  { key: "swift",  name: "Maruti Swift Dzire",   color: "#991b1b", accent: "#ef4444" },
  { key: "aura",  name: "Hyundai Aura",        color: "#1d4ed8", accent: "#6366f1" },
  { key: "creta",  name: "Maruti Ertiga",        color: "#166534", accent: "#22c55e" },
];

/* ─── Light theme tokens ─── */
const LT = {
  bg:          "#f5f3ee",
  surface:     "#ffffff",
  border:      "rgba(0,0,0,0.08)",
  text:        "#1a1814",
  textMuted:   "#6b6860",
  textFaint:   "#a8a49e",
  yellow:      "#d97706",
  yellowLight: "#fef3c7",
  shadow:      "0 4px 20px rgba(0,0,0,0.08)",
  shadowMd:    "0 8px 32px rgba(0,0,0,0.12)",
};

/* ─── Square Car Card — aspect-ratio 1/1, image fills, name at bottom ─── */
function CarCard({ car, isActive, onClick }) {
  return (
    <motion.div
      variants={scaleIn}
      onClick={onClick}
      whileHover={{ scale: 1.04, boxShadow: `0 12px 32px ${car.accent}40` }}
      whileTap={{ scale: 0.97 }}
      animate={isActive ? { scale: 1.04 } : { scale: 1 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer w-full"
      style={{
        aspectRatio: "1 / 1",           // ✅ enforces square shape
        border: `2.5px solid ${isActive ? car.accent : LT.border}`,
        boxShadow: isActive
          ? `0 8px 28px ${car.accent}35`
          : LT.shadow,
      }}
    >
      {/* Active top accent bar */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 h-[3px] z-10"
            style={{ background: `linear-gradient(90deg, ${car.accent}, ${car.color})` }}
          />
        )}
      </AnimatePresence>

      {/* Image fills the square */}
      <img
        src={CAR_IMGS[car.key]}
        alt={car.name}
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          filter: isActive
            ? "brightness(1.06) saturate(1.12) contrast(1.05)"
            : "brightness(0.9) saturate(0.85)",
          transition: "filter 0.35s ease",
        }}
      />

      {/* Bottom dark gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)",
        }}
      />

      {/* Car name at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 z-[2]">
        <div
          className="font-body font-bold text-white leading-tight"
          style={{
            fontSize: "clamp(10px, 1.1vw, 15px)",
            textShadow: "0 1px 8px rgba(0,0,0,0.7)",
          }}
        >
          {car.name}
        </div>
      </div>

      {/* Active glow ring */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 rounded-2xl pointer-events-none z-[3]"
          style={{ boxShadow: `inset 0 0 0 2px ${car.accent}80` }}
        />
      )}
    </motion.div>
  );
}

/* ─── MAIN SLIDE ─── */
export default function Slide02() {
  const [activeCard, setActiveCard] = useState(0);
  const active = carData[activeCard];

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Warm gradient blobs */}
      <div
        className="absolute top-[-10%] left-[-6%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-[-8%] right-[-6%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${active.accent}12 0%, transparent 70%)`, filter: "blur(60px)", transition: "background 0.5s ease" }}
      />
      <div
        className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)", filter: "blur(50px)" }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
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
        <div className="flex flex-col justify-center px-10 md:px-14 py-7 gap-4">

          {/* Label */}
          <motion.p
            variants={fadeLeft}
            className="font-accent uppercase tracking-[8px] font-semibold"
            style={{ color: LT.yellow, fontSize: "clamp(10px, 1.1vw, 14px)" }}
          >
            About Us
          </motion.p>

          {/* Heading */}
          <motion.div variants={fadeLeft}>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(52px, 9vw, 108px)", color: LT.text }}
            >
              WHO WE
            </h2>
            <h2
              className="font-display leading-none"
              style={{
                fontSize: "clamp(52px, 9vw, 108px)",
                WebkitTextStroke: `2px ${LT.yellow}`,
                color: "transparent",
              }}
            >
              ARE
            </h2>
            <motion.div
              className="h-[4px] rounded-full mt-3"
              style={{ background: `linear-gradient(90deg, ${LT.yellow}, transparent)` }}
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Pillars */}
          <div className="flex flex-col gap-2">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeLeft}
                whileHover={{ x: 6, backgroundColor: `${p.color}0c` }}
                className="rounded-xl px-4 py-3 flex items-start gap-3 cursor-default transition-all duration-200"
                style={{
                  background: LT.surface,
                  border: `1px solid ${LT.border}`,
                  borderLeft: `3px solid ${p.color}`,
                  boxShadow: LT.shadow,
                }}
              >
                <div className="mt-0.5 flex-shrink-0" style={{ color: p.color }}>{p.icon}</div>
                <div>
                  <span
                    className="font-body font-bold"
                    style={{ color: p.color, fontSize: "clamp(12px, 1.3vw, 16px)" }}
                  >
                    {p.title}{" — "}
                  </span>
                  <span
                    className="font-body leading-relaxed"
                    style={{ color: LT.textMuted, fontSize: "clamp(11px, 1.15vw, 15px)" }}
                  >
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
                whileHover={{ y: -4, boxShadow: `0 8px 24px ${s.color}25` }}
                className="flex flex-col items-center text-center rounded-xl py-3 px-2 transition-all duration-200"
                style={{
                  background: LT.surface,
                  border: `1px solid ${s.color}30`,
                  boxShadow: LT.shadow,
                }}
              >
                <div className="mb-1" style={{ color: s.color }}>{s.icon}</div>
                <div
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(22px, 3vw, 38px)", color: s.color }}
                >
                  {s.value}
                </div>
                <div
                  className="font-body mt-0.5 font-medium"
                  style={{ color: LT.textMuted, fontSize: "clamp(9px, 0.9vw, 12px)" }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Ticker */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-xl"
            style={{
              background: LT.yellowLight,
              border: `1px solid rgba(217,119,6,0.25)`,
              boxShadow: LT.shadow,
            }}
          >
            <div className="py-2.5 px-4 flex items-center gap-3 overflow-hidden">
              <FaTaxi className="flex-shrink-0" style={{ color: LT.yellow }} size={16} />
              <div className="overflow-hidden flex-1">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="whitespace-nowrap font-body font-medium"
                  style={{ display: "inline-block", color: LT.yellow, fontSize: "clamp(10px, 1.1vw, 14px)" }}
                >
                  {"✅ Erode, Tamil Nadu \u00a0•\u00a0 Innova Crysta \u00a0•\u00a0 Swift Dzire \u00a0•\u00a0 Verna \u00a0•\u00a0 Creta \u00a0•\u00a0 Tempo Traveller \u00a0•\u00a0 Mini Bus \u00a0•\u00a0 Coach Van \u00a0•\u00a0 152 Vehicles \u00a0•\u00a0 10+ Years \u00a0•\u00a0 Airport Taxi \u00a0•\u00a0 Corporate Travel \u00a0•\u00a0 TN Registered Fleet \u00a0\u00a0 ✅ Erode, Tamil Nadu \u00a0•\u00a0 Innova Crysta \u00a0•\u00a0 Swift Dzire \u00a0•\u00a0 Verna \u00a0•\u00a0 Creta \u00a0•\u00a0 Tempo Traveller \u00a0•\u00a0 Mini Bus \u00a0•\u00a0 Coach Van \u00a0•\u00a0 152 Vehicles \u00a0•\u00a0 10+ Years \u00a0•\u00a0 Airport Taxi \u00a0•\u00a0 Corporate Travel \u00a0•\u00a0 TN Registered Fleet \u00a0\u00a0"}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══ RIGHT — 2×2 Square Grid, ALL 4 cars visible ═══ */}
        <motion.div
          variants={fadeRight}
          className="flex flex-col justify-center p-5 md:p-6 gap-4"
        >
          {/* Top label */}
          <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: LT.yellow }}
              />
              <span
                className="font-accent uppercase tracking-[5px] font-semibold"
                style={{ color: LT.yellow, fontSize: "clamp(9px, 1vw, 13px)" }}
              >
                Our Fleet
              </span>
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ border: `2px dashed rgba(217,119,6,0.35)` }}
            >
              <FaTaxi style={{ color: LT.yellow, opacity: 0.6 }} size={12} />
            </motion.div>
          </motion.div>

          {/* ── 2×2 Square Grid — all 4 cars always visible ── */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-3"
          >
            {carData.map((car, i) => (
              <CarCard
                key={car.key}
                car={car}
                index={i}
                isActive={activeCard === i}
                onClick={() => setActiveCard(i)}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}