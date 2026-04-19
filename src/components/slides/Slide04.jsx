import React, { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const bookings = [
  {
    title: "One Way\nTrip",
    subtitle: "Point A → Point B",
    tag: "MOST POPULAR",
    tagColor: "#F5B800",
    tagText: "#111",
    // Airport drop — car on highway, bright perspective
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c1fe5034aba7978946f9bfdc2e10c121b1a8ee2f.jpg",
    accent: "#F5B800",
  },
  {
    title: "Round\nTrip",
    subtitle: "Go & Return",
    tag: "BEST VALUE",
    tagColor: "#22c55e",
    tagText: "#fff",
    // Scenic road journey — open road, countryside
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/4e4aa4d85f6256cb7cfb4d2b40fb5ff1ec0348fa.jpg",
    accent: "#FFD84D",
  },
  {
    title: "Hourly\nRental",
    subtitle: "Pay Per Hour",
    tag: "FLEXIBLE",
    tagColor: "#3b82f6",
    tagText: "#fff",
    // City drive — car in urban setting, flexible feel
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e3a473923651b5ec2910540b2d914a768b1b2c02.jpg",
    accent: "#F5B800",
  },
  {
    title: "Bulk\nBooking",
    subtitle: "Groups & Fleets",
    tag: "CORPORATE",
    tagColor: "#a855f7",
    tagText: "#fff",
    // ✅ High-res luxury SUV fleet row at golden hour — cinematic, no taxi branding
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5f160111c41e3308e5d08020d1425e829ef57c39.jpg",
    accent: "#FFD84D",
  },
  {
    title: "Airport\nTaxi",
    subtitle: "24 / 7 Pickup & Drop",
    tag: "24 / 7",
    tagColor: "#ef4444",
    tagText: "#fff",
    // Airport terminal — professional pickup vibe
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8a708215343c31d22848e72b2f5b189562e85e7d.jpg",
    accent: "#F5B800",
  },
];

export default function Slide04() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full h-full bg-[#0d0d0d] relative overflow-hidden flex flex-col">

      {/* ── HEADER ── */}
      <div
        className="flex-shrink-0 px-6 md:px-10 pt-5 pb-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,184,0,0.07) 0%, transparent 100%)",
          borderBottom: "1px solid rgba(245,184,0,0.10)",
        }}
      >
        <p
          className="font-accent uppercase tracking-[7px] text-taxi-yellow/55 mb-1"
          style={{ fontSize: "clamp(10px, 1.1vw, 13px)" }}
        >
          Book Your Ride
        </p>
        <div className="flex items-end justify-between">
          <h2
            className="font-display text-taxi-yellow leading-none"
            style={{ fontSize: "clamp(40px, 6.5vw, 76px)" }}
          >
            FLEXIBLE BOOKING
          </h2>
          <span
            className="hidden md:block font-body text-taxi-muted mb-1"
            style={{ fontSize: "clamp(11px, 1vw, 13px)" }}
          >
            5 Options Available
          </span>
        </div>
        <div className="w-16 h-[3px] bg-taxi-yellow rounded mt-2" />
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
              border:
                hovered === i
                  ? `1.5px solid ${b.accent}80`
                  : "1.5px solid rgba(255,255,255,0.07)",
              boxShadow:
                hovered === i
                  ? `0 8px 40px ${b.accent}22`
                  : "0 4px 16px rgba(0,0,0,0.5)",
              transition: "border 0.3s, box-shadow 0.35s",
              background: "#161616",
            }}
          >
            {/* ── IMAGE (75% of card height) ── */}
            <div
              className="relative overflow-hidden flex-shrink-0"
              style={{ height: "75%" }}
            >
              <img
                src={b.image}
                alt={b.title.replace("\n", " ")}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: hovered === i ? "scale(1.08)" : "scale(1)",
                  filter:
                    hovered === i
                      ? "brightness(0.85) saturate(1.15)"
                      : "brightness(0.65) saturate(0.9)",
                  // Extra focus for the fleet image — show the golden-hour row
                  objectPosition:
                    i === 3 ? "center 60%" : "center center",
                }}
                loading="eager"
              />

              {/* Deep bottom fade into card bg */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "65%",
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(22,22,22,0.85) 70%, #161616 100%)",
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
                  }}
                >
                  {b.tag}
                </span>
              </div>

              {/* Number watermark */}
              <div
                className="absolute top-2 right-3 font-display text-white/10 leading-none select-none"
                style={{ fontSize: "clamp(34px, 3.8vw, 60px)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Fleet count badge — only on Bulk Booking card */}
              {i === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute bottom-12 right-3 flex flex-col items-center"
                >
                  <div
                    className="rounded-xl px-2.5 py-1.5 text-center"
                    style={{
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(168,85,247,0.35)",
                    }}
                  >
                    <div
                      className="font-display text-white leading-none"
                      style={{ fontSize: "clamp(18px, 1.8vw, 26px)" }}
                    >
                      87
                    </div>
                    <div
                      className="font-body text-white/55 uppercase tracking-wider"
                      style={{ fontSize: "clamp(6px, 0.55vw, 9px)" }}
                    >
                      Vehicles
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Title overlaid on image bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
                <h3
                  className="font-display leading-tight whitespace-pre-line"
                  style={{
                    fontSize: "clamp(22px, 2.2vw, 34px)",
                    color: b.accent,
                    textShadow: `0 2px 12px rgba(0,0,0,0.8)`,
                  }}
                >
                  {b.title}
                </h3>
              </div>
            </div>

            {/* ── CONTENT (25% of card height) ── */}
            <div className="flex flex-col flex-1 px-4 pt-2 pb-3 justify-between">

              {/* Subtitle */}
              <p
                className="font-accent uppercase tracking-widest"
                style={{
                  fontSize: "clamp(8px, 0.72vw, 11px)",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.13em",
                }}
              >
                {b.subtitle}
              </p>

              {/* Bulk booking extra detail line */}
              {i === 3 && (
                <p
                  className="font-body"
                  style={{
                    fontSize: "clamp(7px, 0.65vw, 10px)",
                    color: "rgba(168,85,247,0.75)",
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
                  opacity: hovered === i ? 1 : 0.35,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ height: "2px", backgroundColor: b.accent }}
              />

              {/* CTA */}
              <motion.div
                animate={{
                  opacity: hovered === i ? 1 : 0,
                  y: hovered === i ? 0 : 5,
                }}
                transition={{ duration: 0.25 }}
              >
                <span
                  className="font-body font-bold rounded-lg px-3 py-1.5 inline-block"
                  style={{
                    fontSize: "clamp(9px, 0.82vw, 12px)",
                    backgroundColor: b.accent,
                    color: "#111",
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
              style={{
                backgroundColor: b.accent,
                transformOrigin: "top",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ── BOTTOM STRIP ── */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-6 md:px-10 py-2.5"
        style={{
          background: "rgba(245,184,0,0.04)",
          borderTop: "1px solid rgba(245,184,0,0.10)",
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
                color:
                  hovered === i ? b.accent : "rgba(255,255,255,0.30)",
              }}
            >
              {b.title.replace("\n", " ")}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#F5B800" }}
          />
          <span
            className="font-body text-taxi-yellow/45"
            style={{ fontSize: "clamp(9px, 0.8vw, 11px)" }}
          >
            8012357078 — 24/7
          </span>
        </div>
      </div>
    </div>
  );
}