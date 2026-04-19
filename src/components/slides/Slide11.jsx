import React from "react";
import { motion } from "framer-motion";
import { MdSmartphone, MdTrendingUp, MdLocationOn, MdVerified } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";

/* ─── Light Theme Tokens ─── */
const LT = {
  bg:        "#f5f3ee",
  surface:   "#ffffff",
  text:      "#1a1814",
  textMuted: "#6b6860",
  textFaint: "#b0ada8",
  amber:     "#d97706",
  amberLight:"#f59e0b",
  amberBg:   "#fef3c7",
  border:    "rgba(0,0,0,0.07)",
  shadowMd:  "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg:  "0 16px 44px rgba(0,0,0,0.13)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  {
    icon: <MdSmartphone size={26} />,
    title: "Customer App",
    desc: "Book rides, choose service type, set pickup & drop via live map. Android & iOS.",
    accent: "#d97706",
    accentBg: "#fef3c7",
  },
  {
    icon: <FaTaxi size={24} />,
    title: "Driver App",
    desc: "Real-time bookings, map navigation, earnings & schedule management.",
    accent: "#2563eb",
    accentBg: "#dbeafe",
  },
  {
    icon: <MdVerified size={26} />,
    title: "Admin Dashboard",
    desc: "Fleet, bookings, billing, driver performance & full analytics control.",
    accent: "#7c3aed",
    accentBg: "#ede9fe",
  },
  {
    icon: <MdTrendingUp size={26} />,
    title: "Revenue Growth",
    desc: "App model drives 3–5× more bookings vs manual call-taxi operations.",
    accent: "#16a34a",
    accentBg: "#dcfce7",
  },
];

export default function Slide11() {
  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-10%] right-[-8%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div className="absolute bottom-[-8%] left-[-6%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", filter: "blur(65px)" }}
      />
      <div className="absolute top-[40%] right-[35%] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          opacity: 0.6,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col flex-1 px-8 md:px-12 pt-6 pb-6"
      >
        {/* TOP BADGE */}
        <motion.div variants={item} className="mb-3">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body font-bold uppercase tracking-widest"
            style={{
              fontSize: "clamp(10px, 1vw, 13px)",
              background: LT.amberBg,
              border: `1.5px solid ${LT.amber}40`,
              color: LT.amber,
              boxShadow: `0 2px 10px ${LT.amber}18`,
            }}
          >
            🏦 Bank Loan Proposal — Slide 1 of 5
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.div variants={item} className="mb-4">
          <h2
            className="font-display leading-none tracking-wide"
            style={{ fontSize: "clamp(48px, 8.5vw, 104px)", color: LT.text }}
          >
            MOBILE APP{" "}
            <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
              VISION
            </span>
          </h2>
          <p
            className="font-body mt-2 max-w-2xl leading-relaxed"
            style={{ fontSize: "clamp(14px, 1.5vw, 19px)", color: LT.textMuted }}
          >
            Transforming Periyar Taxi from a regional call-taxi operator into a{" "}
            <span style={{ color: LT.amber, fontWeight: 700 }}>
              technology-driven ride-hailing platform
            </span>{" "}
            serving all of India.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
            className="rounded-full mt-3 origin-left"
            style={{
              width: "clamp(48px, 5vw, 64px)",
              height: "5px",
              background: `linear-gradient(90deg, ${LT.amber}, transparent)`,
            }}
          />
        </motion.div>

        {/* MAIN GRID */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 min-h-0">

          {/* LEFT — feature cards */}
          <motion.div variants={item} className="flex flex-col gap-3">
            {features.map((pt, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5, scale: 1.012 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex items-start gap-4 rounded-2xl px-5 py-4 flex-1 relative overflow-hidden"
                style={{
                  background: LT.surface,
                  border: `1.5px solid ${pt.accent}22`,
                  boxShadow: LT.shadowMd,
                }}
              >
                {/* Accent left bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
                  style={{ background: pt.accent }}
                />

                {/* Subtle glow */}
                <div
                  className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 0% 0%, ${pt.accent}0d 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    background: pt.accentBg,
                    border: `1.5px solid ${pt.accent}30`,
                    color: pt.accent,
                    boxShadow: `0 3px 10px ${pt.accent}18`,
                  }}
                >
                  {pt.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 relative z-10">
                  <div
                    className="font-body font-extrabold leading-tight"
                    style={{ fontSize: "clamp(14px, 1.4vw, 20px)", color: LT.text }}
                  >
                    {pt.title}
                  </div>
                  <div
                    className="font-body mt-1 leading-relaxed"
                    style={{ fontSize: "clamp(12px, 1.1vw, 15px)", color: LT.textMuted }}
                  >
                    {pt.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — phone mockup */}
          <motion.div variants={item} className="flex items-center justify-center">
            <div className="relative" style={{ width: 240, height: 430 }}>

              {/* Phone frame */}
              <div
                className="relative rounded-[36px] overflow-hidden h-full w-full"
                style={{
                  background: LT.text,
                  border: `3.5px solid ${LT.amber}`,
                  boxShadow: `0 0 50px ${LT.amber}40, 0 20px 60px rgba(0,0,0,0.20)`,
                }}
              >
                {/* Status bar */}
                <div
                  className="w-full h-8 flex items-center justify-between px-4 flex-shrink-0"
                  style={{ background: LT.amber }}
                >
                  <span
                    className="font-body font-extrabold"
                    style={{ fontSize: 11, color: "#fff" }}
                  >
                    9:41
                  </span>
                  <div className="w-16 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
                </div>

                {/* App screen */}
                <div className="px-4 pt-3 pb-3 flex flex-col gap-2.5 h-full">
                  {/* App name */}
                  <div className="font-body font-extrabold" style={{ fontSize: 15, color: LT.amber }}>
                    Periyar Taxi
                  </div>

                  {/* Map area */}
                  <div
                    className="rounded-2xl overflow-hidden relative flex-shrink-0"
                    style={{
                      height: 148,
                      background: "linear-gradient(135deg, #1a2a1a, #0f1e2e)",
                    }}
                  >
                    <svg width="100%" height="100%" className="absolute inset-0 opacity-40">
                      <rect x="0" y="34%" width="100%" height="10%" fill="#2a2a2a" />
                      <rect x="0" y="66%" width="100%" height="8%" fill="#2a2a2a" />
                      <rect x="28%" y="0" width="10%" height="100%" fill="#2a2a2a" />
                      <rect x="62%" y="0" width="8%" height="100%" fill="#2a2a2a" />
                      <line x1="0" y1="39%" x2="100%" y2="39%" stroke={LT.amber} strokeWidth="1" strokeDasharray="10,8" />
                      <line x1="33%" y1="0" x2="33%" y2="100%" stroke={LT.amber} strokeWidth="1" strokeDasharray="8,8" />
                      <line x1="0" y1="20%" x2="100%" y2="20%" stroke={LT.amber} strokeWidth="0.4" opacity="0.35" />
                      <line x1="0" y1="75%" x2="100%" y2="75%" stroke={LT.amber} strokeWidth="0.4" opacity="0.35" />
                      <line x1="55%" y1="0" x2="55%" y2="100%" stroke={LT.amber} strokeWidth="0.4" opacity="0.35" />
                      <line x1="80%" y1="0" x2="80%" y2="100%" stroke={LT.amber} strokeWidth="0.4" opacity="0.35" />
                    </svg>
                    {/* Location pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full drop-shadow-lg">
                      <MdLocationOn style={{ color: LT.amber }} size={30} />
                    </div>
                    {/* Label */}
                    <div
                      className="absolute bottom-2.5 left-2.5 rounded-lg px-2 py-1"
                      style={{ background: "rgba(0,0,0,0.70)" }}
                    >
                      <span className="font-body text-white font-semibold" style={{ fontSize: 10 }}>
                        📍 Erode, TN
                      </span>
                    </div>
                  </div>

                  {/* Input fields */}
                  <div
                    className="rounded-xl p-2.5 flex flex-col gap-2"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: "#4ade80" }} />
                      <div
                        className="flex-1 h-6 rounded-lg px-2 flex items-center font-body"
                        style={{ background: "rgba(255,255,255,0.08)", fontSize: 10, color: LT.textFaint }}
                      >
                        Pickup Location
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: LT.amber }} />
                      <div
                        className="flex-1 h-6 rounded-lg px-2 flex items-center font-body"
                        style={{ background: "rgba(255,255,255,0.08)", fontSize: 10, color: LT.textFaint }}
                      >
                        Drop Location
                      </div>
                    </div>
                  </div>

                  {/* Service type pills */}
                  <div className="flex gap-1.5 flex-wrap">
                    {["Cab 🚗", "Innova 🚐", "Bus 🚌"].map((s) => (
                      <div
                        key={s}
                        className="px-2.5 py-1 rounded-full font-body font-semibold"
                        style={{
                          background: `${LT.amber}18`,
                          border: `1px solid ${LT.amber}40`,
                          color: LT.amber,
                          fontSize: 10,
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>

                  {/* BOOK NOW */}
                  <div
                    className="w-full rounded-xl text-center font-body font-extrabold py-2.5 tracking-wide"
                    style={{
                      background: `linear-gradient(90deg, ${LT.amber}, ${LT.amberLight})`,
                      color: "#fff",
                      fontSize: 12,
                      boxShadow: `0 4px 16px ${LT.amber}50`,
                    }}
                  >
                    🚕 BOOK NOW
                  </div>
                </div>
              </div>

              {/* Pulsing glow ring */}
              <div
                className="absolute inset-0 rounded-[36px] animate-pulse pointer-events-none"
                style={{ border: `1px solid ${LT.amber}28` }}
              />

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-3 -right-12 px-3 py-1.5 rounded-full font-body font-bold text-white text-xs"
                style={{
                  background: `linear-gradient(90deg, ${LT.amber}, ${LT.amberLight})`,
                  boxShadow: `0 4px 16px ${LT.amber}40`,
                  whiteSpace: "nowrap",
                  fontSize: "clamp(10px, 1vw, 12px)",
                }}
              >
                🤖 AI Powered
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-12 px-3 py-1.5 rounded-full font-body font-bold text-xs"
                style={{
                  background: LT.surface,
                  border: `1.5px solid ${LT.amber}40`,
                  color: LT.amber,
                  boxShadow: LT.shadowMd,
                  whiteSpace: "nowrap",
                  fontSize: "clamp(10px, 1vw, 12px)",
                }}
              >
                🌍 All India
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}