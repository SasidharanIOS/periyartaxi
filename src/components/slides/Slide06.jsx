import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ── LOCAL IMAGES from /public folder ── */
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
    color: "#F5B800",
    colorDim: "rgba(245,184,0,0.18)",
    borderColor: "rgba(245,184,0,0.55)",
    img: VEHICLE_IMAGES.direct,
    imgAlt: "Direct Control Vehicles",
    badge: "INNOVA / SUV",
    vehicles: ["Innova ×12", "Ertiga ×7", "Xylo ×5"],
  },
  {
    key: "attachment",
    label: "Attachment",
    sublabel: "Partner-affiliated fleet",
    value: 44,
    color: "#FFD84D",
    colorDim: "rgba(255,216,77,0.15)",
    borderColor: "rgba(255,216,77,0.45)",
    img: VEHICLE_IMAGES.attachment,
    imgAlt: "Attachment Vehicles",
    badge: "CRETA / SEDAN",
    vehicles: ["Creta", "Swift Dzire ×7", "Amaze ×2", "Aura ×3"],
  },
  {
    key: "tieup",
    label: "Tie-Up",
    sublabel: "Network tie-up vehicles",
    value: 87,
    color: "#E0A800",
    colorDim: "rgba(224,168,0,0.15)",
    borderColor: "rgba(224,168,0,0.45)",
    img: VEHICLE_IMAGES.tieup,
    imgAlt: "Tie-Up Vehicles – Bus / Traveller",
    badge: "BUS / TRAVELLER",
    vehicles: ["Bus ×15", "Tempo ×12", "Coach ×12", "Urbania ×8"],
  },
];

function FleetCard({ data, total }) {
  const count = useCountUp(data.value, 1600);
  const pct = Math.round((data.value / total) * 100);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, borderColor: data.color }}
      className="relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300 h-full"
      style={{
        background: `linear-gradient(160deg, ${data.colorDim} 0%, rgba(20,20,20,0.97) 55%)`,
        border: `1.5px solid ${data.borderColor}`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)`,
      }}
    >
      {/* ── Vehicle Image ── */}
      <div className="relative w-full overflow-hidden flex-1 min-h-0">
        <img
          src={data.img}
          alt={data.imgAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 55%", minHeight: "160px" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background =
              "linear-gradient(135deg,#1c1c1c,#2a2a2a)";
          }}
        />

        {/* Bottom gradient fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.15) 50%, rgba(14,14,14,0.98) 100%)",
          }}
        />

        {/* Top badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full font-accent font-bold tracking-widest"
          style={{
            fontSize: "clamp(10px, 1.1vw, 13px)",
            background: `rgba(0,0,0,0.65)`,
            border: `1px solid ${data.color}99`,
            color: data.color,
            backdropFilter: "blur(8px)",
          }}
        >
          {data.badge}
        </div>
      </div>

      {/* ── Bottom Content Block ── */}
      <div
        className="flex flex-col gap-3 flex-shrink-0"
        style={{ padding: "clamp(14px, 2vw, 22px)" }}
      >
        {/* Label + Big Number */}
        <div className="flex items-end justify-between gap-2">
          <div>
            <div
              className="font-display leading-none"
              style={{
                fontSize: "clamp(18px, 2.5vw, 28px)",
                color: "#f0f0f0",
                letterSpacing: "0.05em",
              }}
            >
              {data.label.toUpperCase()}
            </div>
            <div
              className="font-body mt-1"
              style={{
                fontSize: "clamp(11px, 1.2vw, 14px)",
                color: "#888",
              }}
            >
              {data.sublabel}
            </div>
          </div>

          {/* Big Count Number */}
          <div
            className="font-display leading-none flex-shrink-0"
            style={{
              fontSize: "clamp(56px, 8vw, 100px)",
              color: data.color,
              textShadow: `0 0 40px ${data.color}70`,
              lineHeight: 0.9,
            }}
          >
            {count}
          </div>
        </div>

        {/* Vehicle tags */}
        <div className="flex flex-wrap gap-1.5">
          {data.vehicles.map((v) => (
            <span
              key={v}
              className="font-body font-medium rounded-full px-2.5 py-0.5"
              style={{
                fontSize: "clamp(9px, 0.95vw, 11px)",
                background: `${data.color}14`,
                border: `1px solid ${data.color}30`,
                color: `${data.color}cc`,
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
            style={{ height: "7px", background: "rgba(255,255,255,0.07)" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${data.color}99, ${data.color})`,
                boxShadow: `0 0 10px ${data.color}80`,
              }}
            />
          </div>
          <div
            className="mt-1.5 text-right font-body"
            style={{ fontSize: "clamp(9px, 1vw, 12px)", color: "#555" }}
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
      style={{ background: "#0d0d0d" }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute top-[-8%] right-[-6%] rounded-full blur-3xl pointer-events-none"
        style={{ width: "38vw", height: "38vw", background: "rgba(245,184,0,0.06)" }}
      />
      <div
        className="absolute bottom-[-6%] left-[-5%] rounded-full blur-3xl pointer-events-none"
        style={{ width: "32vw", height: "32vw", background: "rgba(245,184,0,0.04)" }}
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
            <p
              className="font-accent uppercase tracking-[6px] mb-1"
              style={{
                fontSize: "clamp(10px, 1.2vw, 13px)",
                color: "rgba(245,184,0,0.55)",
              }}
            >
              Vehicle Network
            </p>
            <h2
              className="font-display text-taxi-yellow leading-none"
              style={{
                fontSize: "clamp(40px, 8vw, 90px)",
                letterSpacing: "-0.01em",
              }}
            >
              FLEET STRENGTH
            </h2>
          </div>

          {/* Total badge */}
          <div
            className="rounded-2xl px-5 py-3 text-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,184,0,0.14) 0%, rgba(245,184,0,0.05) 100%)",
              border: "1.5px solid rgba(245,184,0,0.38)",
              boxShadow: "0 0 40px rgba(245,184,0,0.08)",
            }}
          >
            <p
              className="font-accent uppercase tracking-[4px]"
              style={{
                fontSize: "clamp(9px, 1vw, 11px)",
                color: "rgba(245,184,0,0.65)",
              }}
            >
              Total Network
            </p>
            <div
              className="font-display leading-none text-gradient-yellow"
              style={{
                fontSize: "clamp(48px, 7vw, 100px)",
                lineHeight: 1,
                filter: "drop-shadow(0 0 20px rgba(245,184,0,0.4))",
              }}
            >
              {total}
            </div>
            <p
              className="font-body mt-1"
              style={{
                fontSize: "clamp(9px, 0.9vw, 11px)",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              21 + 44 + 87 Vehicles
            </p>
          </div>
        </motion.div>

        {/* Accent line */}
        <motion.div
          variants={item}
          className="w-full rounded-full flex-shrink-0"
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #F5B800, rgba(245,184,0,0.08))",
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