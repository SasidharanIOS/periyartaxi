import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";
import { MdTrendingUp, MdCurrencyRupee, MdBarChart } from "react-icons/md";

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
  divider:   "rgba(0,0,0,0.07)",
  shadowMd:  "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg:  "0 16px 44px rgba(0,0,0,0.13)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48 } },
};

const revenues = [
  { label: "Commission per ride",   val: "₹30–80",   note: "12–15% of fare",      accent: "#d97706", accentBg: "#fef3c7" },
  { label: "Monthly Subscriptions", val: "₹499/mo",  note: "Corporate accounts",   accent: "#2563eb", accentBg: "#dbeafe" },
  { label: "Vehicle Listing Fee",    val: "₹3000/yr",  note: "App onboarding",       accent: "#7c3aed", accentBg: "#ede9fe" },
  { label: "Valet/Event Packages",  val: "₹5K–50K",  note: "Per event",            accent: "#16a34a", accentBg: "#dcfce7" },
  { label: "In-app Advertisement",  val: "₹10K+/mo", note: "Local businesses",     accent: "#0d9488", accentBg: "#ccfbf1" },
];

const projections = [
  { year: "Year 1", rides: 36000,  rev: "₹32L",    drivers: 80,  accent: "#d97706", accentBg: "#fef3c7",  barPct: 20  },
  { year: "Year 2", rides: 90000,  rev: "₹78L",    drivers: 160, accent: "#2563eb", accentBg: "#dbeafe",  barPct: 50  },
  { year: "Year 3", rides: 180000, rev: "₹1.6 Cr", drivers: 300, accent: "#16a34a", accentBg: "#dcfce7",  barPct: 100 },
];

function BarVis({ pct, accent, accentBg, delay }) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: `${pct}%` }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-t-lg relative overflow-hidden"
      style={{ background: accentBg, border: `1.5px solid ${accent}30`, minHeight: 4 }}
    >
      {/* Solid fill strip at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-t-md"
        style={{ height: "30%", background: accent, opacity: 0.5 }}
      />
      {/* Top accent glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-lg"
        style={{ background: accent }}
      />
    </motion.div>
  );
}

export default function Slide14() {
  const totalRev = useCountUp(166, 2000);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-10%] right-[-8%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div className="absolute bottom-[-10%] left-[-8%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%)", filter: "blur(65px)" }}
      />
      <div className="absolute top-[45%] left-[40%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
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
        className="relative z-10 flex flex-col w-full h-full pt-4 px-4 pb-4 md:pt-5 md:px-5 md:pb-5 gap-3"
      >
        {/* ── HEADER ── */}
        <motion.div variants={item} className="flex-shrink-0">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            <p
              className="font-accent uppercase font-semibold tracking-[5px]"
              style={{ fontSize: "clamp(10px, 1.2vw, 14px)", color: LT.amber }}
            >
              🏦 Bank Loan Proposal — Slide 4 of 5
            </p>
          </div>
          <h2
            className="font-display leading-none mt-0.5"
            style={{ fontSize: "clamp(34px, 6vw, 78px)", color: LT.text }}
          >
            REVENUE{" "}
            <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
              MODEL
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="rounded-full mt-2 origin-left"
            style={{
              width: "clamp(48px, 5vw, 64px)",
              height: "3.5px",
              background: `linear-gradient(90deg, ${LT.amber}, transparent)`,
            }}
          />
        </motion.div>

        {/* ── BODY GRID ── */}
        <div className="flex-1 grid grid-cols-5 gap-3 min-h-0">

          {/* ── LEFT: Revenue Streams (2/5) ── */}
          <motion.div
            variants={item}
            className="col-span-2 rounded-2xl overflow-hidden flex flex-col min-h-0"
            style={{
              background: LT.surface,
              border: `1.5px solid ${LT.amber}22`,
              boxShadow: LT.shadowMd,
            }}
          >
            {/* Card header */}
            <div
              className="px-4 py-2.5 flex-shrink-0 flex items-center gap-2 relative"
              style={{
                background: `linear-gradient(90deg, ${LT.amber}12, transparent)`,
                borderBottom: `1.5px solid ${LT.divider}`,
              }}
            >
              {/* Amber top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: LT.amber }} />
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: LT.amberBg, color: LT.amber }}
              >
                <MdCurrencyRupee size={18} />
              </div>
              <span
                className="font-body font-bold"
                style={{ fontSize: "clamp(13px, 1.5vw, 19px)", color: LT.text }}
              >
                Revenue Streams
              </span>
            </div>

            {/* Rows */}
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              {revenues.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.08 }}
                  className="flex items-center justify-between px-4 flex-1 relative"
                  style={{
                    minHeight: 0,
                    borderBottom: i < revenues.length - 1 ? `1px solid ${LT.divider}` : "none",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = `${r.accent}06`}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  {/* Left accent dot */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ background: r.accent, opacity: 0 }}
                    ref={el => {
                      if (el) {
                        el.parentElement.addEventListener("mouseenter", () => el.style.opacity = "1");
                        el.parentElement.addEventListener("mouseleave", () => el.style.opacity = "0");
                      }
                    }}
                  />
                  <div>
                    <div
                      className="font-body leading-tight font-semibold"
                      style={{ fontSize: "clamp(11px, 1.25vw, 16px)", color: LT.text }}
                    >
                      {r.label}
                    </div>
                    <div
                      className="font-body leading-tight"
                      style={{ fontSize: "clamp(10px, 1vw, 13px)", color: LT.textFaint }}
                    >
                      {r.note}
                    </div>
                  </div>
                  <span
                    className="font-body font-bold text-right flex-shrink-0 ml-2 px-2.5 py-0.5 rounded-full"
                    style={{
                      fontSize: "clamp(12px, 1.35vw, 18px)",
                      color: r.accent,
                      background: r.accentBg,
                      border: `1px solid ${r.accent}28`,
                    }}
                  >
                    {r.val}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Projections (3/5) ── */}
          <div className="col-span-3 flex flex-col gap-3 min-h-0">

            {/* Bar chart card */}
            <motion.div
              variants={item}
              className="rounded-2xl px-4 pt-3 pb-4 flex flex-col flex-shrink-0 relative overflow-hidden"
              style={{
                background: LT.surface,
                border: `1.5px solid ${LT.amber}22`,
                boxShadow: LT.shadowMd,
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: LT.amber }} />

              <div className="flex items-center gap-2 mb-3 mt-1">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: LT.amberBg, color: LT.amber }}
                >
                  <MdBarChart size={18} />
                </div>
                <span
                  className="font-body font-bold"
                  style={{ fontSize: "clamp(13px, 1.5vw, 19px)", color: LT.text }}
                >
                  3-Year Revenue Projection
                </span>
              </div>

              <div className="flex items-end justify-around gap-4" style={{ height: 120 }}>
                {projections.map((p, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span
                      className="font-body font-bold"
                      style={{ fontSize: "clamp(11px, 1.2vw, 16px)", color: p.accent }}
                    >
                      {p.rev}
                    </span>
                    <div className="w-full flex flex-col justify-end" style={{ height: 80 }}>
                      <BarVis accent={p.accent} accentBg={p.accentBg} pct={p.barPct} delay={0.4 + i * 0.15} />
                    </div>
                    <span
                      className="font-body font-semibold"
                      style={{ fontSize: "clamp(10px, 1.1vw, 14px)", color: LT.textMuted }}
                    >
                      {p.year}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projection table */}
            <motion.div
              variants={item}
              className="rounded-2xl overflow-hidden flex flex-col flex-1 min-h-0"
              style={{
                background: LT.surface,
                border: `1.5px solid ${LT.divider}`,
                boxShadow: LT.shadowMd,
              }}
            >
              {/* Table header */}
              <div
                className="grid grid-cols-4 px-4 py-2.5 flex-shrink-0 text-center"
                style={{
                  background: `linear-gradient(90deg, ${LT.amber}10, transparent)`,
                  borderBottom: `1.5px solid ${LT.divider}`,
                }}
              >
                {["Year", "Rides/Yr", "Revenue", "Drivers"].map((h, i) => (
                  <span
                    key={h}
                    className="font-body font-bold uppercase tracking-wide"
                    style={{
                      fontSize: "clamp(10px, 1.2vw, 15px)",
                      color: i === 0 ? LT.amber : LT.textMuted,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Table rows */}
              <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                {projections.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="grid grid-cols-4 px-4 text-center items-center flex-1 transition-colors duration-150"
                    style={{
                      minHeight: 0,
                      borderBottom: i < projections.length - 1 ? `1px solid ${LT.divider}` : "none",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = `${p.accent}07`}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    {/* Year */}
                    <span
                      className="font-body font-bold px-2 py-0.5 rounded-full inline-block"
                      style={{
                        fontSize: "clamp(12px, 1.3vw, 17px)",
                        color: p.accent,
                        background: p.accentBg,
                      }}
                    >
                      {p.year}
                    </span>

                    {/* Rides */}
                    <span
                      className="font-body tabular-nums"
                      style={{ fontSize: "clamp(11px, 1.2vw, 15px)", color: LT.textMuted }}
                    >
                      {p.rides.toLocaleString()}
                    </span>

                    {/* Revenue */}
                    <span
                      className="font-body font-bold"
                      style={{ fontSize: "clamp(12px, 1.3vw, 17px)", color: "#16a34a" }}
                    >
                      {p.rev}
                    </span>

                    {/* Drivers */}
                    <span
                      className="font-body tabular-nums"
                      style={{ fontSize: "clamp(11px, 1.2vw, 15px)", color: LT.textMuted }}
                    >
                      {p.drivers}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 3-yr total callout */}
            <motion.div
              variants={item}
              className="rounded-xl px-5 py-3 flex items-center justify-between flex-shrink-0 relative overflow-hidden"
              style={{
                background: LT.surface,
                border: `1.5px solid ${LT.amber}35`,
                boxShadow: `0 4px 20px ${LT.amber}18`,
              }}
            >
              {/* Amber left bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[4px] rounded-r-full"
                style={{ background: `linear-gradient(to bottom, ${LT.amber}, ${LT.amberLight})` }}
              />

              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 0% 50%, ${LT.amber}0c 0%, transparent 60%)`,
                }}
              />

              <div className="flex items-center gap-2 relative z-10">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  <MdTrendingUp size={20} />
                </div>
                <span
                  className="font-body font-semibold"
                  style={{ fontSize: "clamp(13px, 1.4vw, 18px)", color: LT.textMuted }}
                >
                  Cumulative 3-Year Revenue
                </span>
              </div>

              <div
                className="font-display leading-none relative z-10"
                style={{
                  fontSize: "clamp(26px, 4vw, 54px)",
                  color: LT.amber,
                  filter: `drop-shadow(0 2px 8px ${LT.amber}30)`,
                }}
              >
                ₹{totalRev}L+
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}