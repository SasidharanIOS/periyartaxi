import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

/* ─── Light Theme Tokens ─── */
const LT = {
  bg:        "#f5f3ee",
  surface:   "#ffffff",
  text:      "#1a1814",
  textMuted: "#6b6860",
  textFaint: "#b0ada8",
  amber:     "#d97706",
  amberBg:   "#fef3c7",
  border:    "rgba(0,0,0,0.07)",
  shadowMd:  "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg:  "0 16px 44px rgba(0,0,0,0.12)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const vehicles = [
  { label: "Bus",              count: 15, img: "/touristbus.png",     accent: "#dc2626", accentBg: "#fee2e2" },
  { label: "Mini Bus",         count: 4,  img: "/minibus.png",        accent: "#d97706", accentBg: "#fef3c7" },
  { label: "Tempo Traveller",  count: 12, img: "/tempotraveller.png", accent: "#2563eb", accentBg: "#dbeafe" },
  { label: "Coach Van",        count: 12, img: "/coachvan.png",       accent: "#16a34a", accentBg: "#dcfce7" },
  { label: "Mahindra Tourist", count: 6,  img: "/mahindratourist.png",accent: "#7c3aed", accentBg: "#ede9fe" },
  { label: "Urbania",          count: 8,  img: "/urbania.png",        accent: "#0d9488", accentBg: "#ccfbf1" },
];

function VehicleCard({ label, count, img, accent, accentBg }) {
  const n = useCountUp(count, 1400);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl group cursor-default w-full h-full"
      style={{
        background: LT.surface,
        border: `1.5px solid ${accent}25`,
        boxShadow: LT.shadowMd,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* ── Image — full card, original color ── */}
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        loading="lazy"
        style={{ display: "block" }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fb = e.currentTarget.nextElementSibling;
          if (fb) fb.style.display = "flex";
        }}
      />

      {/* Emoji fallback */}
      <div
        className="hidden absolute inset-0 items-center justify-center text-5xl"
        style={{ background: `${accent}10` }}
      >
        🚌
      </div>

      {/* ✅ Only thin dark scrim at the bottom — image color shows fully */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "52%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.62) 100%)",
        }}
      />

      {/* Accent top bar — shows on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3.5px] rounded-b-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: accent }}
      />

      {/* Count badge — top right, white pill */}
      <div
        className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full font-display leading-none z-10"
        style={{
          fontSize: "clamp(22px, 3.2vw, 44px)",
          background: "rgba(255,255,255,0.90)",
          backdropFilter: "blur(6px)",
          color: accent,
          border: `1.5px solid ${accent}35`,
          boxShadow: `0 3px 12px ${accent}25`,
        }}
      >
        {n}
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 z-10">
        <span
          className="font-body text-white font-bold leading-tight block"
          style={{
            fontSize: "clamp(11px, 1.4vw, 16px)",
            textShadow: "0 1px 8px rgba(0,0,0,0.6)",
          }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function Slide07() {
  const total = useCountUp(87, 1800);
  const cars  = useCountUp(30, 1500);
  const large = useCountUp(57, 1500);

  const stats = [
    { val: total, label: "Total Tie-Up",  accent: "#d97706", accentBg: "#fef3c7" },
    { val: cars,  label: "Cars (Tie-up)", accent: "#2563eb", accentBg: "#dbeafe" },
    { val: large, label: "14–52 Seaters", accent: "#7c3aed", accentBg: "#ede9fe" },
  ];

  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-stretch"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-10%] left-[18%] w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(217,119,6,0.09)" }}
      />
      <div className="absolute bottom-[-6%] right-[-5%] w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.07)" }}
      />
      <div className="absolute top-[40%] left-[-4%] w-60 h-60 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.06)" }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full h-full flex flex-col px-5 md:px-8 pt-4 pb-3"
        style={{ gap: "clamp(6px, 1.2vh, 12px)" }}
      >
        {/* ── Header ── */}
        <motion.div variants={item} className="flex-shrink-0">
          {/* Pill label */}
          <div className="inline-flex items-center gap-2 mb-1.5">
            <div className="h-[2px] w-6 rounded" style={{ background: LT.amber + "80" }} />
            <p
              className="font-accent uppercase font-semibold tracking-[5px]"
              style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.amber }}
            >
              Tie-Up Network
            </p>
            <div className="h-[2px] w-6 rounded" style={{ background: LT.amber + "80" }} />
          </div>

          <h2
            className="font-display leading-none mt-0.5"
            style={{ fontSize: "clamp(34px, 7vw, 80px)", color: LT.text }}
          >
            TIE-UP{" "}
            <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
              VEHICLES
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="w-14 h-[3px] rounded-full mt-2 origin-left"
            style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }}
          />
        </motion.div>

        {/* ── Summary Stats ── */}
        <motion.div variants={item} className="grid grid-cols-3 gap-2.5 flex-shrink-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl flex flex-col items-center justify-center py-2.5"
              style={{
                background: LT.surface,
                border: `1.5px solid ${s.accent}25`,
                boxShadow: LT.shadowMd,
              }}
            >
              <div
                className="font-display leading-none"
                style={{ fontSize: "clamp(26px, 4.5vw, 54px)", color: s.accent }}
              >
                {s.val}
              </div>
              <div
                className="font-body font-semibold mt-0.5 text-center px-2"
                style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.textMuted }}
              >
                {s.label}
              </div>

              {/* Accent pill under label */}
              <div
                className="mt-1.5 h-[3px] w-8 rounded-full"
                style={{ background: s.accent }}
              />
            </div>
          ))}
        </motion.div>

        {/* ── Vehicle Image Grid ── */}
        <div
          className="grid grid-cols-3 flex-1 min-h-0"
          style={{ gap: "clamp(6px, 1vh, 10px)" }}
        >
          {vehicles.map((v, i) => (
            <VehicleCard key={i} {...v} />
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.div
          variants={item}
          className="flex-shrink-0 flex items-center justify-center gap-2"
        >
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
            style={{ backgroundColor: LT.amber }}
          />
          <p
            className="font-body text-center font-medium"
            style={{ fontSize: "clamp(10px, 1.1vw, 12px)", color: LT.textMuted }}
          >
            30 Cars + 57 Large Vehicles (14 to 52 seaters) ={" "}
            <span style={{ color: LT.amber, fontWeight: 700 }}>87 Total</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}