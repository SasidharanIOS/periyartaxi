import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";
import { FaUserTie, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdSupport, MdVerified } from "react-icons/md";

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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const team = [
  {
    icon: <FaUserCheck size={38} />,
    value: 25,
    label: "Permanent Drivers",
    desc: "Full-time professionals. Trained, verified & on payroll.",
    accent: "#d97706",
    accentBg: "#fef3c7",
  },
  {
    icon: <FaUserTie size={38} />,
    value: 60,
    label: "Acting Drivers",
    desc: "On-demand drivers for events, bulk bookings & peak loads.",
    accent: "#2563eb",
    accentBg: "#dbeafe",
  },
  {
    icon: <FaUsers size={38} />,
    value: 3,
    label: "Office Team",
    desc: "Dedicated operations & customer support staff.",
    accent: "#7c3aed",
    accentBg: "#ede9fe",
  },
];

function TeamCard({ icon, value, label, desc, accent, accentBg }) {
  const count = useCountUp(value, 1600);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-2xl flex flex-col items-center text-center h-full relative overflow-hidden"
      style={{
        background: LT.surface,
        border: `1.5px solid ${accent}22`,
        boxShadow: LT.shadowMd,
        padding: "clamp(16px, 2.5vw, 28px)",
      }}
    >
      {/* Soft accent radial glow — top center */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "55%",
          background: `radial-gradient(ellipse at 50% 0%, ${accent}0d 0%, transparent 70%)`,
        }}
      />

      {/* Accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3.5px] rounded-b-sm"
        style={{ background: accent }}
      />

      {/* Icon circle */}
      <div
        className="rounded-2xl flex items-center justify-center mb-3 flex-shrink-0 relative z-10"
        style={{
          width: "clamp(52px, 6.5vw, 76px)",
          height: "clamp(52px, 6.5vw, 76px)",
          backgroundColor: accentBg,
          border: `1.5px solid ${accent}30`,
          color: accent,
          boxShadow: `0 4px 16px ${accent}18`,
        }}
      >
        {icon}
      </div>

      {/* Big number */}
      <div
        className="font-display leading-none mb-2 relative z-10"
        style={{
          fontSize: "clamp(58px, 9.5vw, 104px)",
          color: accent,
          filter: `drop-shadow(0 2px 12px ${accent}30)`,
        }}
      >
        {count}
      </div>

      {/* Label */}
      <div
        className="font-body font-bold leading-tight mb-2 relative z-10"
        style={{ fontSize: "clamp(14px, 1.7vw, 21px)", color: LT.text }}
      >
        {label}
      </div>

      {/* Accent divider */}
      <div
        className="w-8 h-[2.5px] rounded-full mb-2 flex-shrink-0"
        style={{ background: accent, opacity: 0.5 }}
      />

      {/* Desc */}
      <div
        className="font-body leading-snug relative z-10"
        style={{ fontSize: "clamp(11px, 1.15vw, 14px)", color: LT.textMuted }}
      >
        {desc}
      </div>

      {/* Corner decoration */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl opacity-[0.07] pointer-events-none"
        style={{ background: accent }}
      />
    </motion.div>
  );
}

export default function Slide09() {
  const total = useCountUp(88, 1800);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(217,119,6,0.09)" }}
      />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.07)" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.05)" }}
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
        className="relative z-10 flex flex-col h-full"
        style={{ padding: "clamp(14px, 2vw, 28px)" }}
      >
        {/* ── HEADER ── */}
        <motion.div variants={item} className="flex-shrink-0 mb-3">
          <div className="inline-flex items-center gap-2 mb-1.5">
            <div className="h-[2px] w-6 rounded" style={{ background: LT.amber + "80" }} />
            <p
              className="font-accent uppercase font-semibold tracking-[5px]"
              style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: LT.amber }}
            >
              Behind the Wheel
            </p>
            <div className="h-[2px] w-6 rounded" style={{ background: LT.amber + "80" }} />
          </div>

          <h2
            className="font-display leading-none"
            style={{ fontSize: "clamp(42px, 7.5vw, 92px)", color: LT.text }}
          >
            TEAM{" "}
            <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
              STRENGTH
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="rounded-full mt-2 origin-left"
            style={{
              width: "clamp(40px, 5vw, 64px)",
              height: "4px",
              background: `linear-gradient(90deg, ${LT.amber}, transparent)`,
            }}
          />
        </motion.div>

        {/* ── TEAM CARDS ── */}
        <div className="grid grid-cols-3 gap-3 flex-1 min-h-0 mb-3">
          {team.map((t, i) => (
            <TeamCard key={i} {...t} />
          ))}
        </div>

        {/* ── SUMMARY ROW ── */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 gap-3 flex-shrink-0"
        >
          {/* Total Workforce */}
          <div
            className="rounded-xl flex items-center gap-4 relative overflow-hidden"
            style={{
              background: LT.surface,
              border: `1.5px solid ${LT.amber}28`,
              boxShadow: LT.shadowMd,
              padding: "clamp(12px, 1.5vw, 20px)",
            }}
          >
            {/* Accent left bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3.5px] rounded-r-full"
              style={{ background: LT.amber }}
            />

            <div
              className="rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                width: "clamp(44px, 5vw, 60px)",
                height: "clamp(44px, 5vw, 60px)",
                backgroundColor: LT.amberBg,
                border: `1.5px solid ${LT.amber}30`,
                color: LT.amber,
                boxShadow: `0 3px 12px ${LT.amber}18`,
              }}
            >
              <MdSupport size={26} />
            </div>

            <div>
              <div
                className="font-body font-bold leading-tight"
                style={{ fontSize: "clamp(13px, 1.5vw, 19px)", color: LT.text }}
              >
                Total Workforce
              </div>
              <div
                className="font-body mt-0.5 flex items-baseline gap-1.5 flex-wrap"
                style={{ fontSize: "clamp(11px, 1.1vw, 15px)", color: LT.textMuted }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: "clamp(20px, 2.8vw, 36px)", color: LT.amber }}
                >
                  {total}
                </span>
                team members ready to serve
              </div>
            </div>
          </div>

          {/* Experienced & Verified */}
          <div
            className="rounded-xl flex items-center gap-4 relative overflow-hidden"
            style={{
              background: LT.surface,
              border: `1.5px solid rgba(37,99,235,0.20)`,
              boxShadow: LT.shadowMd,
              padding: "clamp(12px, 1.5vw, 20px)",
            }}
          >
            {/* Accent left bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3.5px] rounded-r-full"
              style={{ background: "#2563eb" }}
            />

            <div
              className="rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                width: "clamp(44px, 5vw, 60px)",
                height: "clamp(44px, 5vw, 60px)",
                backgroundColor: "#dbeafe",
                border: "1.5px solid rgba(37,99,235,0.25)",
                color: "#2563eb",
                boxShadow: "0 3px 12px rgba(37,99,235,0.12)",
              }}
            >
              <MdVerified size={26} />
            </div>

            <div>
              <div
                className="font-body font-bold leading-tight"
                style={{ fontSize: "clamp(13px, 1.5vw, 19px)", color: LT.text }}
              >
                Experienced & Verified
              </div>
              <div
                className="font-body mt-0.5"
                style={{ fontSize: "clamp(11px, 1.1vw, 15px)", color: LT.textMuted }}
              >
                All drivers background-checked & trained professionals
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}