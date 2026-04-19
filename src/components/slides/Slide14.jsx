import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";
import { MdTrendingUp, MdCurrencyRupee, MdBarChart } from "react-icons/md";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48 } },
};

const revenues = [
  { label: "Commission per ride",   val: "₹30–80",   note: "12–15% of fare" },
  { label: "Monthly Subscriptions", val: "₹499/mo",  note: "Corporate accounts" },
  { label: "Driver Listing Fee",    val: "₹999/yr",  note: "App onboarding" },
  { label: "Valet/Event Packages",  val: "₹5K–50K",  note: "Per event" },
  { label: "In-app Advertisement",  val: "₹10K+/mo", note: "Local businesses" },
];

const projections = [
  { year: "Year 1", rides: 36000,  rev: "₹32L",    drivers: 80,  color: "#F5B800" },
  { year: "Year 2", rides: 90000,  rev: "₹78L",    drivers: 160, color: "#FFD84D" },
  { year: "Year 3", rides: 180000, rev: "₹1.6 Cr", drivers: 300, color: "#E0A800" },
];

function BarVis({ pct, color, delay }) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: `${pct}%` }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-t-md"
      style={{ background: color, minHeight: 4 }}
    />
  );
}

export default function Slide14() {
  const totalRev = useCountUp(166, 2000);

  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex flex-col">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-8%] w-96 h-96 bg-taxi-yellow/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-8%] w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col w-full h-full p-4 md:p-5 gap-3"
      >
        {/* ── HEADER ── */}
        <motion.div variants={item} className="flex-shrink-0">
          <p
            className="font-accent uppercase tracking-[5px] text-taxi-yellow/65 leading-tight"
            style={{ fontSize: "clamp(11px, 1.4vw, 18px)" }}
          >
            🏦 Bank Loan Proposal — Slide 4 of 5
          </p>
          <h2
            className="font-display text-taxi-yellow leading-none mt-1"
            style={{ fontSize: "clamp(36px, 6.5vw, 82px)" }}
          >
            REVENUE MODEL
          </h2>
          <div className="w-16 h-[3px] bg-taxi-yellow rounded mt-2" />
        </motion.div>

        {/* ── BODY GRID ── */}
        <div className="flex-1 grid grid-cols-5 gap-3 min-h-0">

          {/* ── LEFT: Revenue Streams (2/5) ── */}
          <motion.div
            variants={item}
            className="col-span-2 glass-card rounded-2xl overflow-hidden flex flex-col min-h-0"
          >
            {/* Card header */}
            <div
              className="px-4 py-2.5 flex-shrink-0 border-b border-taxi-border flex items-center gap-2"
              style={{ background: "rgba(245,184,0,0.09)" }}
            >
              <MdCurrencyRupee className="text-taxi-yellow flex-shrink-0" size={22} />
              <span
                className="font-body font-bold text-taxi-yellow"
                style={{ fontSize: "clamp(13px, 1.6vw, 20px)" }}
              >
                Revenue Streams
              </span>
            </div>

            {/* Rows — fill evenly */}
            <div className="flex-1 flex flex-col divide-y divide-taxi-border min-h-0 overflow-hidden">
              {revenues.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.08 }}
                  className="flex items-center justify-between px-4 flex-1"
                  style={{ minHeight: 0 }}
                >
                  <div>
                    <div
                      className="font-body text-taxi-light/90 leading-tight"
                      style={{ fontSize: "clamp(12px, 1.35vw, 18px)" }}
                    >
                      {r.label}
                    </div>
                    <div
                      className="font-body text-taxi-muted leading-tight"
                      style={{ fontSize: "clamp(10px, 1.1vw, 15px)" }}
                    >
                      {r.note}
                    </div>
                  </div>
                  <div
                    className="font-body font-bold text-taxi-yellow text-right flex-shrink-0 ml-2"
                    style={{ fontSize: "clamp(13px, 1.5vw, 20px)" }}
                  >
                    {r.val}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Projections (3/5) ── */}
          <div className="col-span-3 flex flex-col gap-3 min-h-0">

            {/* Bar chart card */}
            <motion.div
              variants={item}
              className="glass-card rounded-2xl px-4 pt-3 pb-4 flex flex-col flex-shrink-0"
            >
              <div className="flex items-center gap-2 mb-3">
                <MdBarChart className="text-taxi-yellow flex-shrink-0" size={22} />
                <span
                  className="font-body font-bold text-taxi-yellow"
                  style={{ fontSize: "clamp(13px, 1.6vw, 20px)" }}
                >
                  3-Year Revenue Projection
                </span>
              </div>
              <div className="flex items-end justify-around gap-4" style={{ height: 120 }}>
                {projections.map((p, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span
                      className="font-body font-bold text-taxi-yellow"
                      style={{ fontSize: "clamp(12px, 1.3vw, 17px)" }}
                    >
                      {p.rev}
                    </span>
                    <div className="w-full flex flex-col justify-end" style={{ height: 80 }}>
                      <BarVis
                        pct={i === 0 ? 20 : i === 1 ? 50 : 100}
                        color={p.color}
                        delay={0.4 + i * 0.15}
                      />
                    </div>
                    <span
                      className="font-body text-taxi-muted"
                      style={{ fontSize: "clamp(11px, 1.2vw, 16px)" }}
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
              className="glass-card rounded-2xl overflow-hidden flex flex-col flex-1 min-h-0"
            >
              {/* Table header */}
              <div
                className="grid grid-cols-4 px-4 py-2 flex-shrink-0 border-b border-taxi-border text-center"
                style={{ background: "rgba(245,184,0,0.09)" }}
              >
                {["Year", "Rides/Yr", "Revenue", "Drivers"].map((h) => (
                  <span
                    key={h}
                    className="font-body text-taxi-yellow font-bold"
                    style={{ fontSize: "clamp(12px, 1.35vw, 18px)" }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Table rows */}
              <div className="flex-1 flex flex-col divide-y divide-taxi-border min-h-0 overflow-hidden">
                {projections.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="grid grid-cols-4 px-4 text-center items-center flex-1 hover:bg-taxi-yellow/[0.04] transition-colors"
                    style={{ minHeight: 0 }}
                  >
                    <span
                      className="font-body font-bold"
                      style={{ color: p.color, fontSize: "clamp(13px, 1.45vw, 19px)" }}
                    >
                      {p.year}
                    </span>
                    <span
                      className="font-body text-taxi-light/80"
                      style={{ fontSize: "clamp(12px, 1.3vw, 17px)" }}
                    >
                      {p.rides.toLocaleString()}
                    </span>
                    <span
                      className="font-body text-green-400 font-bold"
                      style={{ fontSize: "clamp(12px, 1.3vw, 17px)" }}
                    >
                      {p.rev}
                    </span>
                    <span
                      className="font-body text-taxi-light/80"
                      style={{ fontSize: "clamp(12px, 1.3vw, 17px)" }}
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
              className="rounded-xl px-5 py-3 flex items-center justify-between flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,rgba(245,184,0,0.18),rgba(245,184,0,0.06))",
                border: "1px solid rgba(245,184,0,0.35)",
              }}
            >
              <div className="flex items-center gap-2">
                <MdTrendingUp className="text-green-400 flex-shrink-0" size={24} />
                <span
                  className="font-body text-taxi-light/85 font-medium"
                  style={{ fontSize: "clamp(13px, 1.5vw, 20px)" }}
                >
                  Cumulative 3-Year Revenue
                </span>
              </div>
              <div
                className="font-display text-taxi-yellow leading-none"
                style={{ fontSize: "clamp(28px, 4.5vw, 58px)" }}
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