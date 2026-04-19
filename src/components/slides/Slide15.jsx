import React from "react";
import { motion } from "framer-motion";
import {
  MdPhoneAndroid, MdBusiness, MdPeople,
  MdCampaign, MdSecurity, MdHandshake,
} from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import useCountUp from "../../hooks/useCountUp";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.52 } },
};

const fundUsage = [
  {
    icon: <MdPhoneAndroid size={22} />,
    label: "App Development",
    amount: "₹3,20,000",
    pct: 40,
    note: "Android + iOS (Customer, Driver, Admin)",
    accent: "#d97706",
    accentBg: "#fef3c7",
  },
  {
    icon: <MdBusiness size={22} />,
    label: "Cloud Infrastructure",
    amount: "₹96,000",
    pct: 12,
    note: "AWS / Firebase servers, GPS API, SMS gateway",
    accent: "#2563eb",
    accentBg: "#dbeafe",
  },
  {
    icon: <MdPeople size={22} />,
    label: "Driver Onboarding",
    amount: "₹80,000",
    pct: 10,
    note: "Training, verification, app setup for 100 drivers",
    accent: "#16a34a",
    accentBg: "#dcfce7",
  },
  {
    icon: <MdCampaign size={22} />,
    label: "Marketing & Launch",
    amount: "₹1,60,000",
    pct: 20,
    note: "Digital ads, local print, referral bonuses",
    accent: "#dc2626",
    accentBg: "#fee2e2",
  },
  {
    icon: <MdSecurity size={22} />,
    label: "Working Capital",
    amount: "₹1,44,000",
    pct: 18,
    note: "Operations, salaries & contingency for 6 months",
    accent: "#7c3aed",
    accentBg: "#ede9fe",
  },
];

const loanDetails = [
  { k: "Tenure",     v: "36 Months",                accent: "#2563eb" },
  { k: "Purpose",    v: "Mobile App + Marketing",   accent: "#d97706" },
  { k: "Repayment",  v: "EMI from Month 4",         accent: "#16a34a" },
  { k: "Collateral", v: "Business Assets + Guarantor", accent: "#7c3aed" },
];

function DonutArc({ pct, accent, offset, r = 38 }) {
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const gap  = circ - dash;
  return (
    <motion.circle
      cx="50" cy="50" r={r}
      fill="none"
      stroke={accent}
      strokeWidth="11"
      strokeDasharray={`${dash} ${gap}`}
      strokeDashoffset={-offset}
      strokeLinecap="butt"
      initial={{ strokeDasharray: `0 ${circ}` }}
      animate={{ strokeDasharray: `${dash} ${gap}` }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export default function Slide15() {
  const loanAmt = useCountUp(8, 1800);

  const arcs = [];
  let cumulative = 0;
  const r = 38, circ = 2 * Math.PI * r;
  fundUsage.forEach((f) => {
    arcs.push({ ...f, offset: -(cumulative / 100) * circ });
    cumulative += f.pct;
  });

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.09) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(65px)" }}
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
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
              🏦 Bank Loan Proposal — Slide 5 of 5
            </p>
          </div>
          <h2
            className="font-display leading-none mt-0.5"
            style={{ fontSize: "clamp(34px, 6vw, 78px)", color: LT.text }}
          >
            LOAN{" "}
            <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
              REQUEST
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

          {/* ── LEFT (2/5) ── */}
          <motion.div variants={item} className="col-span-2 flex flex-col gap-3 min-h-0">

            {/* Loan amount card */}
            <div
              className="rounded-2xl p-4 flex flex-col flex-shrink-0 relative overflow-hidden"
              style={{
                background: LT.surface,
                border: `1.5px solid ${LT.amber}35`,
                boxShadow: `0 4px 24px ${LT.amber}18`,
              }}
            >
              {/* Amber top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3.5px]"
                style={{ background: `linear-gradient(90deg, ${LT.amber}, ${LT.amberLight})` }}
              />

              {/* Soft radial glow */}
              <div
                className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${LT.amber}0d 0%, transparent 70%)`,
                }}
              />

              <p
                className="font-body uppercase tracking-widest text-center mb-1 mt-1 relative z-10"
                style={{ fontSize: "clamp(9px, 1vw, 12px)", color: LT.textFaint }}
              >
                Loan Amount Requested
              </p>

              <div
                className="font-display leading-none text-center relative z-10"
                style={{
                  fontSize: "clamp(42px, 7.5vw, 74px)",
                  color: LT.amber,
                  filter: `drop-shadow(0 2px 12px ${LT.amber}35)`,
                }}
              >
                ₹{loanAmt}L
              </div>

              <p
                className="font-body text-center mt-1 relative z-10"
                style={{ fontSize: "clamp(10px, 1vw, 13px)", color: LT.textFaint }}
              >
                (₹8,00,000 — Eight Lakhs Only)
              </p>

              <div
                className="mt-3 flex flex-col gap-2 pt-3 relative z-10"
                style={{ borderTop: `1px solid ${LT.divider}` }}
              >
                {loanDetails.map((d) => (
                  <div key={d.k} className="flex justify-between items-center gap-2">
                    <span
                      className="font-body"
                      style={{ fontSize: "clamp(10px, 1.1vw, 14px)", color: LT.textMuted }}
                    >
                      {d.k}
                    </span>
                    <span
                      className="font-body font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        fontSize: "clamp(10px, 1.05vw, 13px)",
                        color: d.accent,
                        background: d.accent + "12",
                        border: `1px solid ${d.accent}28`,
                      }}
                    >
                      {d.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut chart card */}
            <div
              className="rounded-2xl p-4 flex-1 flex flex-col min-h-0 relative overflow-hidden"
              style={{
                background: LT.surface,
                border: `1.5px solid ${LT.divider}`,
                boxShadow: LT.shadowMd,
              }}
            >
              <p
                className="font-body font-bold mb-3 flex-shrink-0"
                style={{ fontSize: "clamp(13px, 1.4vw, 18px)", color: LT.text }}
              >
                Fund Allocation
              </p>
              <div className="flex items-center gap-4 flex-1 min-h-0">
                {/* Donut */}
                <svg
                  viewBox="0 0 100 100"
                  className="flex-shrink-0"
                  style={{
                    width: "clamp(78px, 9.5vw, 108px)",
                    height: "clamp(78px, 9.5vw, 108px)",
                    transform: "rotate(-90deg)",
                    filter: `drop-shadow(0 4px 12px rgba(0,0,0,0.10))`,
                  }}
                >
                  {/* Track */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke={LT.divider} strokeWidth="11" />
                  {arcs.map((a, i) => (
                    <DonutArc key={i} pct={a.pct} accent={a.accent} offset={a.offset} />
                  ))}
                </svg>

                {/* Legend */}
                <div className="flex flex-col gap-1.5 flex-1">
                  {fundUsage.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background: f.accent }}
                      />
                      <span
                        className="font-body leading-tight"
                        style={{ fontSize: "clamp(9px, 1vw, 13px)", color: LT.textMuted }}
                      >
                        {f.label}{" "}
                        <span style={{ color: f.accent, fontWeight: 700 }}>({f.pct}%)</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT (3/5) ── */}
          <div className="col-span-3 flex flex-col gap-3 min-h-0">

            {/* Fund Utilisation Breakdown */}
            <motion.div
              variants={item}
              className="rounded-2xl overflow-hidden flex flex-col flex-1 min-h-0"
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
                  background: `linear-gradient(90deg, ${LT.amber}10, transparent)`,
                  borderBottom: `1.5px solid ${LT.divider}`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: LT.amber }} />
                <span
                  className="font-body font-bold"
                  style={{ fontSize: "clamp(13px, 1.5vw, 19px)", color: LT.text }}
                >
                  Fund Utilisation Breakdown
                </span>
              </div>

              {/* Rows */}
              <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                {fundUsage.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.28 + i * 0.09 }}
                    className="px-4 flex flex-col justify-center flex-1 relative"
                    style={{
                      minHeight: 0,
                      borderBottom: i < fundUsage.length - 1 ? `1px solid ${LT.divider}` : "none",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = `${f.accent}06`}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    {/* Hover left accent bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full opacity-0 transition-opacity duration-150"
                      style={{ background: f.accent }}
                      ref={el => {
                        if (el) {
                          el.parentElement.addEventListener("mouseenter", () => el.style.opacity = "1");
                          el.parentElement.addEventListener("mouseleave", () => el.style.opacity = "0");
                        }
                      }}
                    />

                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        {/* Icon badge */}
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: f.accentBg,
                            border: `1.5px solid ${f.accent}30`,
                            color: f.accent,
                            boxShadow: `0 2px 8px ${f.accent}12`,
                          }}
                        >
                          {f.icon}
                        </div>
                        <div>
                          <div
                            className="font-body font-bold leading-tight"
                            style={{ fontSize: "clamp(11px, 1.25vw, 16px)", color: LT.text }}
                          >
                            {f.label}
                          </div>
                          <div
                            className="font-body leading-tight"
                            style={{ fontSize: "clamp(9px, 1vw, 13px)", color: LT.textFaint }}
                          >
                            {f.note}
                          </div>
                        </div>
                      </div>

                      {/* Amount pill */}
                      <span
                        className="font-body font-bold flex-shrink-0 ml-2 px-2.5 py-0.5 rounded-full"
                        style={{
                          fontSize: "clamp(11px, 1.2vw, 16px)",
                          color: f.accent,
                          background: f.accentBg,
                          border: `1px solid ${f.accent}28`,
                        }}
                      >
                        {f.amount}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div
                      className="w-full h-1.5 rounded-full overflow-hidden"
                      style={{ background: f.accent + "14" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${f.pct}%` }}
                        transition={{ duration: 0.9, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: f.accent }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Credibility strip */}
            <motion.div variants={item} className="grid grid-cols-2 gap-3 flex-shrink-0">
              {/* Since 2015 */}
              <div
                className="rounded-xl p-3 flex items-center gap-3 relative overflow-hidden"
                style={{
                  background: LT.surface,
                  border: `1.5px solid ${LT.amber}28`,
                  boxShadow: LT.shadowMd,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: LT.amber }} />
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: LT.amberBg, color: LT.amber }}
                >
                  <FaTaxi size={20} />
                </div>
                <div>
                  <div
                    className="font-body font-bold leading-tight"
                    style={{ fontSize: "clamp(12px, 1.3vw, 17px)", color: LT.amber }}
                  >
                    Since 2015
                  </div>
                  <div
                    className="font-body leading-tight"
                    style={{ fontSize: "clamp(9px, 1vw, 13px)", color: LT.textMuted }}
                  >
                    10+ yrs operations — Zero default history
                  </div>
                </div>
              </div>

              {/* Repayment capacity */}
              <div
                className="rounded-xl p-3 flex items-center gap-3 relative overflow-hidden"
                style={{
                  background: LT.surface,
                  border: "1.5px solid rgba(22,163,74,0.22)",
                  boxShadow: LT.shadowMd,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#16a34a" }} />
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  <MdHandshake size={22} />
                </div>
                <div>
                  <div
                    className="font-body font-bold leading-tight"
                    style={{ fontSize: "clamp(12px, 1.3vw, 17px)", color: "#16a34a" }}
                  >
                    Strong Repayment Capacity
                  </div>
                  <div
                    className="font-body leading-tight"
                    style={{ fontSize: "clamp(9px, 1vw, 13px)", color: LT.textMuted }}
                  >
                    152 vehicles + 88 staff = stable cashflow
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}