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
  border:    "rgba(0,0,0,0.07)",
  shadowMd:  "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg:  "0 16px 44px rgba(0,0,0,0.12)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const VEHICLE_IMAGES = {
  direct:     "/directcontrol.png",
  attachment: "/attachment.png",
  tieup:      "/tieupimage.png",
};

const FLEET_DATA = [
  {
    key: "direct",
    label: "Direct Control",
    sublabel: "Company-owned & operated",
    value: 21,
    accent:    "#d97706",
    accentBg:  "#fef3c7",
    accentDim: "rgba(217,119,6,0.08)",
    img: VEHICLE_IMAGES.direct,
    imgAlt: "Direct Control Vehicles",
    badge: "SEDAN / MINI",
    vehicles: ["Innova ×12", "Ertiga ×7", "Xylo ×5"],
  },
  {
    key: "attachment",
    label: "Attachment",
    sublabel: "Partner-affiliated fleet",
    value: 44,
    accent:    "#2563eb",
    accentBg:  "#dbeafe",
    accentDim: "rgba(37,99,235,0.07)",
    img: VEHICLE_IMAGES.attachment,
    imgAlt: "Attachment Vehicles",
    badge: "SUV / INNOVA",
    vehicles: ["Creta", "Swift Dzire ×7", "Amaze ×2", "Aura ×3"],
  },
  {
    key: "tieup",
    label: "Tie-Up",
    sublabel: "Network tie-up vehicles",
    value: 87,
    accent:    "#7c3aed",
    accentBg:  "#ede9fe",
    accentDim: "rgba(124,58,237,0.07)",
    img: VEHICLE_IMAGES.tieup,
    imgAlt: "Tie-Up Vehicles – Bus / Traveller",
    badge: "URBANIA / TRAVELLER",
    vehicles: ["Bus ×15", "Tempo ×12", "Coach ×12", "Urbania ×8"],
  },
];

function FleetCard({ data, total }) {
  const count = useCountUp(data.value, 1600);
  const pct = Math.round((data.value / total) * 100);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, scale: 1.012 }}
      className="relative overflow-hidden rounded-2xl flex flex-col h-full transition-all duration-300"
      style={{
        background: LT.surface,
        border: `1.5px solid ${data.accent}28`,
        boxShadow: LT.shadowMd,
      }}
    >
      {/* ── Vehicle Image — top portion ── */}
      <div className="relative w-full overflow-hidden flex-1 min-h-0">
        <img
          src={data.img}
          alt={data.imgAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 55%", minHeight: "160px" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background =
              `linear-gradient(135deg, ${data.accentDim}, ${data.accentBg}44)`;
          }}
        />

        {/* ✅ Thin dark scrim only at bottom — image shows in full color */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "40%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.40) 100%)",
          }}
        />

        {/* Top badge — white glass */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full font-accent font-bold tracking-widest"
          style={{
            fontSize: "clamp(9px, 1vw, 12px)",
            background: "rgba(255,255,255,0.88)",
            border: `1px solid ${data.accent}35`,
            color: data.accent,
            backdropFilter: "blur(8px)",
            boxShadow: `0 2px 10px ${data.accent}20`,
          }}
        >
          {data.badge}
        </div>

        {/* Big count — bottom right on the scrim */}
        <div
          className="absolute bottom-3 right-4 font-display leading-none"
          style={{
            fontSize: "clamp(52px, 7.5vw, 96px)",
            color: "#ffffff",
            textShadow: `0 2px 20px rgba(0,0,0,0.55), 0 0 30px ${data.accent}50`,
            lineHeight: 0.9,
          }}
        >
          {count}
        </div>
      </div>

      {/* ── Bottom Content Block — solid white ── */}
      <div
        className="flex flex-col gap-2.5 flex-shrink-0"
        style={{
          padding: "clamp(12px, 1.8vw, 20px)",
          borderTop: `2.5px solid ${data.accent}20`,
        }}
      >
        {/* Label row */}
        <div>
          {/* Accent rule */}
          <div
            className="w-8 h-[3px] rounded-full mb-2"
            style={{ background: data.accent }}
          />
          <div
            className="font-display leading-none"
            style={{
              fontSize: "clamp(16px, 2.2vw, 26px)",
              color: LT.text,
              letterSpacing: "0.04em",
            }}
          >
            {data.label.toUpperCase()}
          </div>
          <div
            className="font-body mt-0.5"
            style={{
              fontSize: "clamp(10px, 1.1vw, 13px)",
              color: LT.textMuted,
            }}
          >
            {data.sublabel}
          </div>
        </div>

        {/* Vehicle tags */}
        <div className="flex flex-wrap gap-1.5">
          {data.vehicles.map((v) => (
            <span
              key={v}
              className="font-body font-semibold rounded-full px-2.5 py-0.5"
              style={{
                fontSize: "clamp(8px, 0.9vw, 11px)",
                background: data.accentBg,
                color: data.accent,
                border: `1px solid ${data.accent}30`,
              }}
            >
              {v}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div>
          <div
            className="w-full rounded-full overflow-hidden"
            style={{ height: "6px", background: "rgba(0,0,0,0.07)" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${data.accent}80, ${data.accent})`,
                boxShadow: `0 0 8px ${data.accent}50`,
              }}
            />
          </div>
          <div
            className="mt-1 text-right font-body font-semibold"
            style={{ fontSize: "clamp(9px, 0.9vw, 11px)", color: LT.textFaint }}
          >
            {pct}% of total fleet
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Slide06() {
  const total = useCountUp(152, 2000);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-10%] right-[-6%] rounded-full blur-3xl pointer-events-none"
        style={{ width: "40vw", height: "40vw", background: "rgba(217,119,6,0.09)" }}
      />
      <div className="absolute bottom-[-8%] left-[-5%] rounded-full blur-3xl pointer-events-none"
        style={{ width: "34vw", height: "34vw", background: "rgba(37,99,235,0.07)" }}
      />
      <div className="absolute top-[35%] left-[35%] rounded-full blur-3xl pointer-events-none"
        style={{ width: "28vw", height: "28vw", background: "rgba(124,58,237,0.05)" }}
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
        className="relative z-10 w-full flex flex-col flex-1 min-h-0 px-4 md:px-8 pt-5 pb-4 gap-3"
      >
        {/* ── TITLE ROW ── */}
        <motion.div
          variants={item}
          className="flex items-start justify-between gap-4 flex-wrap flex-shrink-0"
        >
          <div>
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 mb-1.5">
              <div className="h-[2px] w-6 rounded" style={{ background: LT.amber + "80" }} />
              <p
                className="font-accent uppercase font-semibold tracking-[5px]"
                style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.amber }}
              >
                Vehicle Network
              </p>
              <div className="h-[2px] w-6 rounded" style={{ background: LT.amber + "80" }} />
            </div>

            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(38px, 7.5vw, 86px)", color: LT.text, letterSpacing: "-0.01em" }}
            >
              FLEET{" "}
              <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
                STRENGTH
              </span>
            </h2>

            {/* Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="w-16 h-[3.5px] rounded-full mt-2 origin-left"
              style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }}
            />
          </div>

          {/* Total badge — light card style */}
          <motion.div
            variants={item}
            className="rounded-2xl px-5 py-3 text-center flex-shrink-0"
            style={{
              background: LT.surface,
              border: `1.5px solid ${LT.amber}35`,
              boxShadow: `${LT.shadowMd}, 0 0 0 4px ${LT.amber}08`,
            }}
          >
            <p
              className="font-accent uppercase tracking-[4px] font-semibold"
              style={{ fontSize: "clamp(9px, 0.9vw, 11px)", color: LT.amber }}
            >
              Total Network
            </p>
            <div
              className="font-display leading-none"
              style={{
                fontSize: "clamp(46px, 6.5vw, 96px)",
                lineHeight: 1,
                color: LT.text,
                WebkitTextStroke: `2px ${LT.amber}`,
              }}
            >
              {total}
            </div>
            <p
              className="font-body mt-1 font-medium"
              style={{ fontSize: "clamp(9px, 0.85vw, 11px)", color: LT.textMuted }}
            >
              21 + 44 + 87 Vehicles
            </p>
          </motion.div>
        </motion.div>

        {/* Accent divider */}
        <motion.div
          variants={item}
          className="w-full rounded-full flex-shrink-0"
          style={{
            height: "1.5px",
            background: `linear-gradient(90deg, ${LT.amber}, rgba(217,119,6,0.06))`,
          }}
        />

        {/* ── FLEET CARDS ── */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
          {FLEET_DATA.map((d) => (
            <FleetCard key={d.key} data={d} total={152} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}