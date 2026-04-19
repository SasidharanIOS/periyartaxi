import React from "react";
import { motion } from "framer-motion";
import { MdSmartphone, MdTrendingUp, MdLocationOn, MdVerified } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";

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
  },
  {
    icon: <FaTaxi size={24} />,
    title: "Driver App",
    desc: "Real-time bookings, map navigation, earnings & schedule management.",
  },
  {
    icon: <MdVerified size={26} />,
    title: "Admin Dashboard",
    desc: "Fleet, bookings, billing, driver performance & full analytics control.",
  },
  {
    icon: <MdTrendingUp size={26} />,
    title: "Revenue Growth",
    desc: "App model drives 3–5× more bookings vs manual call-taxi operations.",
  },
];

export default function Slide11() {
  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex flex-col">
      {/* BG glows */}
      <div className="absolute top-[-10%] right-[-8%] w-[420px] h-[420px] bg-taxi-yellow/6 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-8%] left-[-6%] w-[360px] h-[360px] bg-taxi-yellow/4 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,184,0,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(245,184,0,0.5) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col flex-1 px-8 md:px-12 pt-6 pb-16"
      >
        {/* ── TOP BADGE ── */}
        <motion.div variants={item} className="mb-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-taxi-yellow/40 bg-taxi-yellow/10 font-body text-taxi-yellow font-bold uppercase tracking-widest text-sm md:text-base">
            🏦 Bank Loan Proposal — Slide 1 of 5
          </span>
        </motion.div>

        {/* ── HEADING ── */}
        <motion.div variants={item} className="mb-4">
          <h2
            className="font-display text-taxi-yellow leading-none tracking-wide"
            style={{ fontSize: "clamp(52px, 9vw, 108px)" }}
          >
            MOBILE APP VISION
          </h2>
          <p
            className="font-body text-taxi-light/70 mt-2 max-w-2xl leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.6vw, 20px)" }}
          >
            Transforming Periyar Taxi from a regional call-taxi operator into a{" "}
            <span className="text-taxi-yellow font-bold">
              technology-driven ride-hailing platform
            </span>{" "}
            serving all of India.
          </p>
          <div className="w-16 h-1.5 bg-taxi-yellow rounded mt-3" />
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 min-h-0">

          {/* LEFT — feature cards */}
          <motion.div variants={item} className="flex flex-col gap-3">
            {features.map((pt, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5, borderColor: "rgba(245,184,0,0.45)" }}
                className="flex items-start gap-4 glass-card rounded-2xl px-5 py-4 transition-all duration-200 flex-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-taxi-yellow/12 border border-taxi-yellow/25 flex items-center justify-center text-taxi-yellow flex-shrink-0">
                  {pt.icon}
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div
                    className="font-body font-extrabold text-taxi-yellow leading-tight"
                    style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}
                  >
                    {pt.title}
                  </div>
                  <div
                    className="font-body text-taxi-light/65 mt-1 leading-relaxed"
                    style={{ fontSize: "clamp(13px, 1.2vw, 17px)" }}
                  >
                    {pt.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — phone mockup */}
          <motion.div
            variants={item}
            className="flex items-center justify-center"
          >
            <div className="relative" style={{ width: 240, height: 430 }}>
              {/* Phone frame */}
              <div
                className="relative rounded-[36px] overflow-hidden h-full w-full"
                style={{
                  background: "#161616",
                  border: "3.5px solid #F5B800",
                  boxShadow:
                    "0 0 50px rgba(245,184,0,0.3), 0 0 100px rgba(245,184,0,0.1)",
                }}
              >
                {/* Status bar */}
                <div className="w-full h-8 bg-taxi-yellow flex items-center justify-between px-4">
                  <span className="font-body text-taxi-black text-[11px] font-extrabold">
                    9:41
                  </span>
                  <div className="w-16 h-3 bg-taxi-black/20 rounded-full" />
                </div>

                {/* App screen */}
                <div className="px-4 pt-3 pb-3 flex flex-col gap-2.5 h-full">
                  {/* App name */}
                  <div
                    className="font-body text-taxi-yellow font-extrabold"
                    style={{ fontSize: 15 }}
                  >
                    Periyar Taxi
                  </div>

                  {/* Map area */}
                  <div
                    className="rounded-2xl overflow-hidden relative flex-shrink-0"
                    style={{
                      height: 148,
                      background: "linear-gradient(135deg,#162016,#1e2e12)",
                    }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      className="absolute inset-0 opacity-35"
                    >
                      {/* Horizontal roads */}
                      <rect x="0" y="34%" width="100%" height="10%" fill="#2a2a2a" />
                      <rect x="0" y="66%" width="100%" height="8%" fill="#2a2a2a" />
                      {/* Vertical roads */}
                      <rect x="28%" y="0" width="10%" height="100%" fill="#2a2a2a" />
                      <rect x="62%" y="0" width="8%" height="100%" fill="#2a2a2a" />
                      {/* Road yellow lines */}
                      <line x1="0" y1="39%" x2="100%" y2="39%" stroke="#F5B800" strokeWidth="1" strokeDasharray="10,8" />
                      <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#F5B800" strokeWidth="1" strokeDasharray="8,8" />
                      {/* Grid */}
                      <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#F5B800" strokeWidth="0.4" opacity="0.4" />
                      <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#F5B800" strokeWidth="0.4" opacity="0.4" />
                      <line x1="55%" y1="0" x2="55%" y2="100%" stroke="#F5B800" strokeWidth="0.4" opacity="0.4" />
                      <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#F5B800" strokeWidth="0.4" opacity="0.4" />
                    </svg>
                    {/* Location pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full drop-shadow-lg">
                      <MdLocationOn className="text-taxi-yellow" size={30} />
                    </div>
                    {/* Label */}
                    <div className="absolute bottom-2.5 left-2.5 bg-black/75 rounded-lg px-2 py-1">
                      <span className="font-body text-white font-semibold" style={{ fontSize: 10 }}>
                        📍 Erode, TN
                      </span>
                    </div>
                  </div>

                  {/* Input fields */}
                  <div
                    className="rounded-xl p-2.5 flex flex-col gap-2"
                    style={{ background: "#1e1e1e" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" />
                      <div
                        className="flex-1 h-6 rounded-lg px-2 flex items-center font-body text-taxi-muted"
                        style={{ background: "#2a2a2a", fontSize: 10 }}
                      >
                        Pickup Location
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-taxi-yellow flex-shrink-0" />
                      <div
                        className="flex-1 h-6 rounded-lg px-2 flex items-center font-body text-taxi-muted"
                        style={{ background: "#2a2a2a", fontSize: 10 }}
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
                        className="px-2.5 py-1 rounded-full border border-taxi-yellow/35 font-body font-semibold text-taxi-yellow"
                        style={{
                          background: "rgba(245,184,0,0.1)",
                          fontSize: 10,
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>

                  {/* BOOK NOW */}
                  <div
                    className="w-full rounded-xl text-center font-body font-extrabold text-taxi-black py-2.5 tracking-wide"
                    style={{
                      background: "linear-gradient(90deg,#F5B800,#FFD84D)",
                      fontSize: 12,
                      boxShadow: "0 4px 16px rgba(245,184,0,0.35)",
                    }}
                  >
                    🚕 BOOK NOW
                  </div>
                </div>
              </div>

              {/* Pulsing glow ring */}
              <div
                className="absolute inset-0 rounded-[36px] animate-pulse-yellow pointer-events-none"
                style={{ border: "1px solid rgba(245,184,0,0.18)" }}
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-3 -right-10 px-3 py-1.5 rounded-full font-body font-bold text-taxi-black text-xs shadow-yellow"
                style={{ background: "linear-gradient(90deg,#F5B800,#FFD84D)", whiteSpace: "nowrap" }}
              >
                🤖 AI Powered
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-10 px-3 py-1.5 rounded-full font-body font-bold text-taxi-yellow text-xs border border-taxi-yellow/40"
                style={{ background: "rgba(245,184,0,0.1)", whiteSpace: "nowrap" }}
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