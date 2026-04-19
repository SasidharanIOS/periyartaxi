import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const CARDS = [
  {
    img: "/tempotraveller.png",
    fallbackImg: "https://images.unsplash.com/photo-1626202568600-b6f7fbc41042?w=800&q=80",
    value: 15,
    suffix: "",
    label: "Tempo Traveller",
    sub: "12–17 Seater",
    accent: "#F5B800",
    fallback: "Tempo Traveller",
    objectPosition: "center center",
  },
  {
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    value: 12,
    suffix: "",
    label: "Coach Van",
    sub: "Luxury AC Coach",
    accent: "#FFD84D",
    fallback: "Coach Van",
    objectPosition: "center center",
  },
  {
    img: "/minibus.png",
    fallbackImg: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    value: 4,
    suffix: "",
    label: "Mini Bus",
    sub: "20–35 Seater",
    accent: "#F5B800",
    fallback: "Mini Bus",
    objectPosition: "center center",
  },
  {
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    value: 12,
    suffix: "",
    label: "Bus Services",
    sub: "36–52 Seater",
    accent: "#FFD84D",
    fallback: "Tourist Bus",
    objectPosition: "center center",
  },
  {
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&q=80",
    value: 60,
    suffix: "+",
    label: "Acting Drivers",
    sub: "Verified Driver Support",
    accent: "#F5B800",
    fallback: "Driver Service",
    objectPosition: "center center",
  },
  {
    img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    value: 100,
    suffix: "+",
    label: "Valet Parking",
    sub: "Safe Vehicle Handover",
    accent: "#FFD84D",
    fallback: "Valet Parking",
    objectPosition: "center center",
  },
];

function StatCard({
  img,
  fallbackImg,
  value,
  suffix,
  label,
  sub,
  accent,
  fallback,
  objectPosition,
}) {
  const count = useCountUp(value, 1600);

  const handleError = (e) => {
    if (fallbackImg && e.currentTarget.src !== fallbackImg) {
      e.currentTarget.src = fallbackImg;
      return;
    }
    e.currentTarget.style.display = "none";
    const fallbackEl =
      e.currentTarget.parentElement.querySelector(".img-fallback");
    if (fallbackEl) fallbackEl.style.display = "flex";
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, scale: 1.015 }}
      className="relative rounded-[22px] overflow-hidden h-full"
      style={{
        border: "1px solid rgba(245,184,0,0.16)",
        boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
      }}
    >
      {/* ── Full-height image ── */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={img}
          alt={label}
          loading="lazy"
          decoding="async"
          onError={handleError}
          className="w-full h-full object-cover"
          style={{
            objectPosition: objectPosition || "center center",
            filter: "brightness(0.88) saturate(1.08)",
          }}
        />

        {/* Text fallback (shows only if ALL images fail) */}
        <div
          className="img-fallback hidden absolute inset-0 items-center justify-center px-4 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,184,0,0.12) 0%, rgba(245,184,0,0.03) 100%)",
            color: accent,
            fontFamily: "Bebas Neue, Impact, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(18px, 2vw, 28px)",
          }}
        >
          {fallback}
        </div>

        {/* Full dark gradient — heavy at bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.0) 100%)",
          }}
        />
      </div>

      {/* ── Count badge — top right ── */}
      <div
        className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full font-display leading-none z-10"
        style={{
          fontSize: "clamp(26px, 3.8vw, 46px)",
          background: "rgba(0,0,0,0.72)",
          backdropFilter: "blur(8px)",
          color: accent,
          border: `1px solid ${accent}66`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        {count}
        {suffix}
      </div>

      {/* ── Label + Sub — bottom of card (where desc was) ── */}
      <div className="absolute left-0 right-0 bottom-0 px-4 md:px-5 pb-4 md:pb-5 z-10">
        {/* Accent rule */}
        <div
          className="w-10 h-[3px] rounded-full mb-2.5"
          style={{ background: accent }}
        />

        {/* Label */}
        <div
          className="font-body font-black leading-[1.0]"
          style={{
            fontSize: "clamp(17px, 2.2vw, 28px)",
            color: "#f7f7f7",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
          }}
        >
          {label}
        </div>

        {/* Sub */}
        <div
          className="font-body font-semibold mt-1"
          style={{
            fontSize: "clamp(11px, 1.3vw, 16px)",
            color: accent,
            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
          }}
        >
          {sub}
        </div>
      </div>
    </motion.div>
  );
}

export default function Slide05() {
  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex flex-col">

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(245,184,0,0.055) 0%, transparent 58%)",
        }}
      />

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex-shrink-0 px-3 md:px-5 pt-3 md:pt-4 pb-2"
      >
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p
              className="font-accent uppercase tracking-[4px] text-taxi-yellow/60"
              style={{ fontSize: "clamp(11px, 1.25vw, 14px)" }}
            >
              Bread &amp; Butter
            </p>
            <h2
              className="font-display text-taxi-yellow leading-[0.9] whitespace-nowrap"
              style={{ fontSize: "clamp(38px, 6.5vw, 88px)" }}
            >
              CORE SERVICE CAPACITY
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 mb-2 flex-shrink-0">
            <div className="w-12 h-0.5 bg-taxi-yellow rounded" />
            <span
              className="font-body text-taxi-muted"
              style={{ fontSize: "clamp(12px, 1vw, 14px)" }}
            >
              Periyar Taxi Fleet
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── 3×2 Card Grid ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 min-h-0 px-3 md:px-5 pb-3 grid grid-cols-3 gap-3 md:gap-4"
        style={{ gridTemplateRows: "1fr 1fr" }}
      >
        {CARDS.map((card, i) => (
          <StatCard key={i} {...card} />
        ))}
      </motion.div>

      {/* ── Footer note ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.4 }}
        className="flex-shrink-0 px-3 md:px-5 pb-2"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-taxi-yellow flex-shrink-0" />
          <p
            className="font-body text-taxi-muted"
            style={{ fontSize: "clamp(11px, 1vw, 13px)" }}
          >
            Valet parking: owners hand over the car to trained staff in crowded
            areas for safe parking and smooth vehicle return.
          </p>
        </div>
      </motion.div>
    </div>
  );
}