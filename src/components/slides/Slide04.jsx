import React, { useState } from "react";
import { motion } from "framer-motion";

/* ─── Light Theme Tokens ─── */
const LT = {
  bg:          "#f5f3ee",
  surface:     "#ffffff",
  surface2:    "#faf9f6",
  border:      "rgba(0,0,0,0.07)",
  text:        "#1a1814",
  textMuted:   "#6b6860",
  textFaint:   "#b0ada8",
  amber:       "#d97706",
  amberLight:  "#fef3c7",
  shadow:      "0 2px 10px rgba(0,0,0,0.07)",
  shadowMd:    "0 8px 28px rgba(0,0,0,0.10)",
  shadowHover: "0 16px 44px rgba(0,0,0,0.14)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const bookings = [
  {
    title: "One Way\nTrip",
    subtitle: "Point A → Point B",
    tag: "MOST POPULAR",
    tagColor: "#d97706",
    tagText: "#fff",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c1fe5034aba7978946f9bfdc2e10c121b1a8ee2f.jpg",
    accent: "#d97706",
  },
  {
    title: "Round\nTrip",
    subtitle: "Go & Return",
    tag: "BEST VALUE",
    tagColor: "#16a34a",
    tagText: "#fff",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/4e4aa4d85f6256cb7cfb4d2b40fb5ff1ec0348fa.jpg",
    accent: "#16a34a",
  },
  {
    title: "Hourly\nRental",
    subtitle: "Pay Per Hour",
    tag: "FLEXIBLE",
    tagColor: "#2563eb",
    tagText: "#fff",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e3a473923651b5ec2910540b2d914a768b1b2c02.jpg",
    accent: "#2563eb",
  },
  {
    title: "Bulk\nBooking",
    subtitle: "Groups & Fleets",
    tag: "CORPORATE",
    tagColor: "#7c3aed",
    tagText: "#fff",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5f160111c41e3308e5d08020d1425e829ef57c39.jpg",
    accent: "#7c3aed",
  },
  {
    title: "Airport\nTaxi",
    subtitle: "24 / 7 Pickup & Drop",
    tag: "24 / 7",
    tagColor: "#dc2626",
    tagText: "#fff",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8a708215343c31d22848e72b2f5b189562e85e7d.jpg",
    accent: "#dc2626",
  },
];

export default function Slide04() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-15%] right-[-8%] w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.09) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div className="absolute bottom-[-12%] left-[-6%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", filter: "blur(65px)" }}
      />
      <div className="absolute top-[30%] left-[35%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)", filter: "blur(55px)" }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── HEADER ── */}
      <div
        className="flex-shrink-0 px-6 md:px-10 pt-5 pb-3"
        style={{
          background: "linear-gradient(180deg, rgba(217,119,6,0.05) 0%, transparent 100%)",
          borderBottom: `1px solid rgba(217,119,6,0.12)`,
        }}
      >
        <p
          className="font-accent uppercase tracking-[7px] font-semibold mb-1"
          style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.amber }}
        >
          Book Your Ride
        </p>
        <div className="flex items-end justify-between">
          <h2
            className="font-display leading-none"
            style={{ fontSize: "clamp(38px, 6vw, 72px)", color: LT.text }}
          >
            FLEXIBLE{" "}
            <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
              BOOKING
            </span>
          </h2>
          <span
            className="hidden md:block font-body font-medium mb-1"
            style={{ fontSize: "clamp(11px, 1vw, 13px)", color: LT.textMuted }}
          >
            5 Options Available
          </span>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="w-16 h-[3px] rounded-full mt-2 origin-left"
          style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }}
        />
      </div>

      {/* ── CARDS ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 grid grid-cols-5 gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 overflow-hidden"
      >
        {bookings.map((b, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            className="relative rounded-2xl overflow-hidden flex flex-col cursor-default"
            style={{
              background: LT.surface,
              border: `1.5px solid ${hovered === i ? b.accent + "55" : LT.border}`,
              boxShadow: hovered === i
                ? `0 16px 44px ${b.accent}20, 0 4px 16px rgba(0,0,0,0.08)`
                : LT.shadowMd,
              transition: "border 0.3s, box-shadow 0.35s",
              transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {/* ── IMAGE (75% of card) ── */}
            <div className="relative overflow-hidden flex-shrink-0" style={{ height: "75%" }}>
              <img
                src={b.image}
                alt={b.title.replace("\n", " ")}
                className="w-full h-full object-cover"
                style={{
                  transform: hovered === i ? "scale(1.08)" : "scale(1.0)",
                  filter: hovered === i
                    ? "brightness(0.95) saturate(1.1)"
                    : "brightness(0.88) saturate(1.0)",
                  transition: "transform 0.7s ease, filter 0.35s ease",
                  objectPosition: i === 3 ? "center 60%" : "center center",
                }}
                loading="eager"
              />

              {/* ✅ Only a thin dark scrim at the very bottom for title readability */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "55%",
                  background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.58) 100%)",
                }}
              />

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span
                  className="font-body font-black rounded-full px-2.5 py-0.5 leading-tight"
                  style={{
                    fontSize: "clamp(8px, 0.7vw, 11px)",
                    backgroundColor: b.tagColor,
                    color: b.tagText,
                    letterSpacing: "0.06em",
                    boxShadow: `0 2px 8px ${b.tagColor}50`,
                  }}
                >
                  {b.tag}
                </span>
              </div>

              {/* Number watermark */}
              <div
                className="absolute top-2 right-3 font-display leading-none select-none"
                style={{
                  fontSize: "clamp(34px, 3.8vw, 60px)",
                  color: "rgba(255,255,255,0.15)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Fleet badge — Bulk Booking only */}
              {i === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute bottom-12 right-3"
                >
                  <div
                    className="rounded-xl px-2.5 py-1.5 text-center"
                    style={{
                      background: "rgba(255,255,255,0.88)",
                      backdropFilter: "blur(6px)",
                      border: `1px solid ${b.accent}35`,
                      boxShadow: `0 4px 12px ${b.accent}20`,
                    }}
                  >
                    <div
                      className="font-display leading-none"
                      style={{ fontSize: "clamp(18px, 1.8vw, 26px)", color: b.accent }}
                    >
                      87
                    </div>
                    <div
                      className="font-body uppercase tracking-wider"
                      style={{ fontSize: "clamp(6px, 0.55vw, 9px)", color: LT.textMuted }}
                    >
                      Vehicles
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Title over image */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
                <h3
                  className="font-display leading-tight whitespace-pre-line"
                  style={{
                    fontSize: "clamp(20px, 2.1vw, 32px)",
                    color: "#ffffff",
                    textShadow: "0 2px 14px rgba(0,0,0,0.7)",
                  }}
                >
                  {b.title}
                </h3>
              </div>
            </div>

            {/* ── CONTENT (25%) ── solid white, clean ── */}
            <div
              className="flex flex-col flex-1 px-4 pt-2.5 pb-3 justify-between"
              style={{ borderTop: `2px solid ${b.accent}22` }}
            >
              {/* Subtitle */}
              <p
                className="font-accent uppercase tracking-widest font-semibold"
                style={{
                  fontSize: "clamp(8px, 0.72vw, 11px)",
                  color: LT.textMuted,
                  letterSpacing: "0.12em",
                }}
              >
                {b.subtitle}
              </p>

              {/* Bulk extra line */}
              {i === 3 && (
                <p
                  className="font-body font-medium"
                  style={{
                    fontSize: "clamp(7px, 0.65vw, 10px)",
                    color: b.accent,
                    marginTop: "2px",
                  }}
                >
                  SUV · Coach · Bus · Tempo
                </p>
              )}

              {/* Animated accent line */}
              <motion.div
                className="rounded-full flex-shrink-0"
                animate={{
                  width: hovered === i ? "88%" : "24%",
                  opacity: hovered === i ? 1 : 0.4,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ height: "2.5px", backgroundColor: b.accent, marginTop: "6px" }}
              />

              {/* CTA — appears on hover */}
              <motion.div
                animate={{
                  opacity: hovered === i ? 1 : 0,
                  y: hovered === i ? 0 : 6,
                }}
                transition={{ duration: 0.22 }}
              >
                <span
                  className="font-body font-bold rounded-lg px-3 py-1.5 inline-block"
                  style={{
                    fontSize: "clamp(9px, 0.82vw, 12px)",
                    backgroundColor: b.accent,
                    color: "#fff",
                    boxShadow: `0 4px 14px ${b.accent}40`,
                  }}
                >
                  Book Now →
                </span>
              </motion.div>
            </div>

            {/* Left accent bar on hover */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
              animate={{
                opacity: hovered === i ? 1 : 0,
                scaleY: hovered === i ? 1 : 0.2,
              }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: b.accent, transformOrigin: "top" }}
            />

            {/* Hover inner top glow */}
            <motion.div
              animate={{ opacity: hovered === i ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${b.accent}0d 0%, transparent 65%)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ── BOTTOM STRIP ── */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-6 md:px-10 py-2.5"
        style={{
          background: "rgba(217,119,6,0.04)",
          borderTop: `1px solid rgba(217,119,6,0.12)`,
        }}
      >
        <div className="flex items-center gap-4 md:gap-7 flex-wrap">
          {bookings.map((b, i) => (
            <button
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="font-body font-medium transition-all duration-200"
              style={{
                fontSize: "clamp(10px, 0.9vw, 13px)",
                color: hovered === i ? b.accent : LT.textFaint,
              }}
            >
              {b.title.replace("\n", " ")}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: LT.amber }}
          />
          <span
            className="font-body font-medium"
            style={{ fontSize: "clamp(9px, 0.8vw, 11px)", color: LT.amber + "99" }}
          >
            8012357078 — 24/7
          </span>
        </div>
      </div>
    </div>
  );
}