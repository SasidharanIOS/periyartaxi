import React from "react";
import { motion } from "framer-motion";
import {
  MdMap, MdNotifications, MdTimer, MdSecurity,
  MdPayment, MdStar, MdPhoneAndroid,
} from "react-icons/md";
import { FaApple, FaAndroid } from "react-icons/fa";

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
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const features = [
  {
    icon: <MdMap size={28} />,
    title: "Live Map Tracking",
    desc: "Customer sees driver in real-time. Driver navigates to exact customer pin.",
    user: "Both",
    accent: "#d97706",
    accentBg: "#fef3c7",
  },
  {
    icon: <MdNotifications size={28} />,
    title: "Smart Booking Alerts",
    desc: "Nearest driver auto-assigned. Push notifications for booking status.",
    user: "Both",
    accent: "#d97706",
    accentBg: "#fef3c7",
  },
  {
    icon: <MdTimer size={28} />,
    title: "Time Management",
    desc: "ETA displayed live. SLA tracking ensures on-time arrivals.",
    user: "Admin",
    accent: "#2563eb",
    accentBg: "#dbeafe",
  },
  {
    icon: <MdSecurity size={28} />,
    title: "Safety Features",
    desc: "Driver verification, trip sharing, emergency SOS for customers.",
    user: "Customer",
    accent: "#16a34a",
    accentBg: "#dcfce7",
  },
  {
    icon: <MdPayment size={28} />,
    title: "Digital Payments",
    desc: "UPI, card, wallet & cash — all payment modes fully supported.",
    user: "Customer",
    accent: "#16a34a",
    accentBg: "#dcfce7",
  },
  {
    icon: <MdStar size={28} />,
    title: "Ratings & Reviews",
    desc: "Post-trip feedback loop. Top drivers earn bonus incentives.",
    user: "Both",
    accent: "#d97706",
    accentBg: "#fef3c7",
  },
];

/* User badge colors — light-mode friendly */
const userBadge = {
  Both:     { color: "#d97706", bg: "#fef3c7", border: "#d9770640" },
  Admin:    { color: "#2563eb", bg: "#dbeafe", border: "#2563eb40" },
  Customer: { color: "#16a34a", bg: "#dcfce7", border: "#16a34a40" },
  Driver:   { color: "#dc2626", bg: "#fee2e2", border: "#dc262640" },
};

const techStack = [
  { label: "React Native", color: "#2563eb", bg: "#dbeafe" },
  { label: "Node.js",      color: "#16a34a", bg: "#dcfce7" },
  { label: "Google Maps",  color: "#dc2626", bg: "#fee2e2" },
  { label: "Firebase",     color: "#d97706", bg: "#fef3c7" },
  { label: "Razorpay",     color: "#7c3aed", bg: "#ede9fe" },
  { label: "MySQL",        color: "#0d9488", bg: "#ccfbf1" },
  { label: "AWS",          color: "#d97706", bg: "#fff7ed" },
];

export default function Slide12() {
  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-center justify-center"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", filter: "blur(65px)" }}
      />
      <div className="absolute top-[45%] right-[40%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full h-full flex flex-col justify-between px-8 md:px-12 py-6 md:py-8"
      >
        {/* ── HEADER ROW ── */}
        <motion.div variants={item} className="flex-shrink-0">
          <div className="inline-flex items-center gap-2 mb-1.5">
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            <p
              className="font-accent uppercase font-semibold tracking-[5px]"
              style={{ fontSize: "clamp(10px, 1vw, 13px)", color: LT.amber }}
            >
              🏦 Bank Loan Proposal — Slide 2 of 5
            </p>
          </div>

          <div className="flex items-end gap-4 flex-wrap">
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(40px, 7.5vw, 92px)", color: LT.text }}
            >
              APP FEATURES{" "}
              <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
                & TECH
              </span>
            </h2>

            {/* Platform badges */}
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <div
                className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5"
                style={{
                  background: "#dcfce7",
                  border: "1.5px solid #16a34a30",
                  boxShadow: "0 2px 8px rgba(22,163,74,0.12)",
                }}
              >
                <FaAndroid style={{ color: "#16a34a" }} size={16} />
                <span className="font-body font-semibold" style={{ fontSize: "clamp(11px,1.1vw,14px)", color: "#16a34a" }}>Android</span>
              </div>

              <div
                className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5"
                style={{
                  background: LT.surface,
                  border: `1.5px solid ${LT.border}`,
                  boxShadow: LT.shadowMd,
                }}
              >
                <FaApple style={{ color: LT.text }} size={16} />
                <span className="font-body font-semibold" style={{ fontSize: "clamp(11px,1.1vw,14px)", color: LT.text }}>iOS</span>
              </div>

              <div
                className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5"
                style={{
                  background: LT.amberBg,
                  border: `1.5px solid ${LT.amber}35`,
                  boxShadow: `0 2px 8px ${LT.amber}18`,
                }}
              >
                <MdPhoneAndroid style={{ color: LT.amber }} size={17} />
                <span className="font-body font-semibold" style={{ fontSize: "clamp(11px,1.1vw,14px)", color: LT.amber }}>
                  3 Apps — Customer · Driver · Admin
                </span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="rounded-full mt-2 origin-left"
            style={{
              width: "clamp(48px, 5vw, 64px)",
              height: "4px",
              background: `linear-gradient(90deg, ${LT.amber}, transparent)`,
            }}
          />
        </motion.div>

        {/* ── FEATURES GRID ── */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-4">
          {features.map((f, i) => {
            const badge = userBadge[f.user];
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-xl flex flex-col gap-2.5 relative overflow-hidden"
                style={{
                  background: LT.surface,
                  border: `1.5px solid ${f.accent}22`,
                  boxShadow: LT.shadowMd,
                  padding: "clamp(14px, 1.8vw, 22px)",
                }}
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-b-sm"
                  style={{ background: f.accent }}
                />

                {/* Subtle corner glow */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${f.accent}0d 0%, transparent 65%)`,
                  }}
                />

                {/* Icon + badge row */}
                <div className="flex items-center justify-between relative z-10 mt-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: f.accentBg,
                      border: `1.5px solid ${f.accent}30`,
                      color: f.accent,
                      boxShadow: `0 3px 10px ${f.accent}18`,
                    }}
                  >
                    {f.icon}
                  </div>
                  <span
                    className="font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      fontSize: "clamp(8px, 0.8vw, 10px)",
                      background: badge.bg,
                      color: badge.color,
                      border: `1px solid ${badge.border}`,
                    }}
                  >
                    {f.user}
                  </span>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3
                    className="font-body font-bold leading-tight mb-1"
                    style={{ fontSize: "clamp(12px, 1.4vw, 17px)", color: LT.text }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="font-body leading-relaxed"
                    style={{ fontSize: "clamp(10px, 1.1vw, 14px)", color: LT.textMuted }}
                  >
                    {f.desc}
                  </p>
                </div>

                {/* Corner decoration */}
                <div
                  className="absolute bottom-0 left-0 w-10 h-10 rounded-tr-2xl opacity-[0.07] pointer-events-none"
                  style={{ background: f.accent }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── TECH STACK STRIP ── */}
        <motion.div
          variants={item}
          className="flex-shrink-0 rounded-xl px-5 py-3 flex flex-wrap items-center gap-2"
          style={{
            background: LT.surface,
            border: `1.5px solid ${LT.amber}22`,
            boxShadow: LT.shadowMd,
          }}
        >
          <div className="flex items-center gap-2 mr-1 flex-shrink-0">
            <div className="w-4 h-[2px] rounded" style={{ background: LT.amber + "80" }} />
            <span
              className="font-body font-bold uppercase tracking-widest"
              style={{ fontSize: "clamp(10px, 1vw, 13px)", color: LT.textMuted }}
            >
              Tech Stack:
            </span>
          </div>
          {techStack.map((t) => (
            <span
              key={t.label}
              className="px-3 py-1.5 rounded-full font-body font-semibold"
              style={{
                fontSize: "clamp(10px, 1.1vw, 13px)",
                background: t.bg,
                border: `1px solid ${t.color}30`,
                color: t.color,
                boxShadow: `0 2px 6px ${t.color}12`,
              }}
            >
              {t.label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}