import React from "react";
import { motion } from "framer-motion";
import { MdPhoneAndroid, MdBusiness, MdPeople, MdCampaign, MdSecurity, MdHandshake } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import useCountUp from "../../hooks/useCountUp";

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
    icon: <MdPhoneAndroid size={24} />,
    label: "App Development",
    amount: "₹3,20,000",       // 40% of ₹8L
    pct: 40,
    note: "Android + iOS (Customer, Driver, Admin)",
    color: "#F5B800",
  },
  {
    icon: <MdBusiness size={24} />,
    label: "Cloud Infrastructure",
    amount: "₹96,000",         // 12% of ₹8L
    pct: 12,
    note: "AWS / Firebase servers, GPS API, SMS gateway",
    color: "#60a5fa",
  },
  {
    icon: <MdPeople size={24} />,
    label: "Driver Onboarding",
    amount: "₹80,000",         // 10% of ₹8L
    pct: 10,
    note: "Training, verification, app setup for 100 drivers",
    color: "#34d399",
  },
  {
    icon: <MdCampaign size={24} />,
    label: "Marketing & Launch",
    amount: "₹1,60,000",       // 20% of ₹8L
    pct: 20,
    note: "Digital ads, local print, referral bonuses",
    color: "#f87171",
  },
  {
    icon: <MdSecurity size={24} />,
    label: "Working Capital",
    amount: "₹1,44,000",       // 18% of ₹8L
    pct: 18,
    note: "Operations, salaries & contingency for 6 months",
    color: "#a78bfa",
  },
];

function DonutArc({ pct, color, offset, r = 38 }) {
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const gap = circ - dash;
  return (
    <motion.circle
      cx="50" cy="50" r={r}
      fill="none"
      stroke={color}
      strokeWidth="10"
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
  const loanAmt = useCountUp(8, 1800);   // ✅ changed from 2 to 8

  const arcs = [];
  let cumulative = 0;
  const r = 38, circ = 2 * Math.PI * r;
  fundUsage.forEach((f) => {
    arcs.push({ ...f, offset: -(cumulative / 100) * circ });
    cumulative += f.pct;
  });

  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex flex-col">
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-taxi-yellow/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/4 rounded-full blur-3xl animate-float pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col w-full h-full pt-4 px-4 pb-12 md:pt-5 md:px-5 md:pb-14 gap-3"
      >
        {/* ── HEADER ── */}
        <motion.div variants={item} className="flex-shrink-0">
          <p
            className="font-accent uppercase tracking-[5px] text-taxi-yellow/65 leading-tight"
            style={{ fontSize: "clamp(11px, 1.4vw, 18px)" }}
          >
            🏦 Bank Loan Proposal — Slide 5 of 5
          </p>
          <h2
            className="font-display text-taxi-yellow leading-none mt-1"
            style={{ fontSize: "clamp(36px, 6.5vw, 82px)" }}
          >
            LOAN REQUEST
          </h2>
          <div className="w-16 h-[3px] bg-taxi-yellow rounded mt-2" />
        </motion.div>

        {/* ── BODY GRID ── */}
        <div className="flex-1 grid grid-cols-5 gap-3 min-h-0">

          {/* ── LEFT (2/5) ── */}
          <motion.div variants={item} className="col-span-2 flex flex-col gap-3 min-h-0">

            {/* Loan amount card */}
            <div
              className="rounded-2xl p-4 flex flex-col flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,rgba(245,184,0,0.16),rgba(245,184,0,0.06))",
                border: "1px solid rgba(245,184,0,0.4)",
                boxShadow: "0 0 30px rgba(245,184,0,0.1)",
              }}
            >
              <p
                className="font-body text-taxi-muted uppercase tracking-widest text-center mb-1"
                style={{ fontSize: "clamp(10px, 1.1vw, 14px)" }}
              >
                Loan Amount Requested
              </p>
              <div
                className="font-display text-gradient-yellow leading-none animate-glow text-center"
                style={{ fontSize: "clamp(44px, 8vw, 78px)" }}
              >
                ₹{loanAmt}L
              </div>
              <p
                className="font-body text-taxi-light/50 text-center mt-1"
                style={{ fontSize: "clamp(10px, 1.05vw, 14px)" }}
              >
                (₹8,00,000 — Eight Lakhs Only)
              </p>

              <div className="mt-3 flex flex-col gap-1.5">
                {[
                  { k: "Tenure",     v: "36 Months" },
                  { k: "Purpose",    v: "Mobile App + Marketing" },
                  { k: "Repayment",  v: "EMI from Month 4" },
                  { k: "Collateral", v: "Business Assets + Guarantor" },
                ].map((d) => (
                  <div key={d.k} className="flex justify-between items-center">
                    <span
                      className="font-body text-taxi-muted"
                      style={{ fontSize: "clamp(11px, 1.2vw, 16px)" }}
                    >
                      {d.k}
                    </span>
                    <span
                      className="font-body text-taxi-yellow font-semibold"
                      style={{ fontSize: "clamp(11px, 1.2vw, 16px)" }}
                    >
                      {d.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut chart card */}
            <div className="glass-card rounded-2xl p-4 flex-1 flex flex-col min-h-0">
              <p
                className="font-body text-taxi-yellow font-bold mb-3 flex-shrink-0"
                style={{ fontSize: "clamp(13px, 1.5vw, 19px)" }}
              >
                Fund Allocation
              </p>
              <div className="flex items-center gap-4 flex-1 min-h-0">
                <svg
                  viewBox="0 0 100 100"
                  className="flex-shrink-0"
                  style={{ width: "clamp(80px,10vw,110px)", height: "clamp(80px,10vw,110px)", transform: "rotate(-90deg)" }}
                >
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1C1C1C" strokeWidth="10" />
                  {arcs.map((a, i) => (
                    <DonutArc key={i} pct={a.pct} color={a.color} offset={a.offset} />
                  ))}
                </svg>
                <div className="flex flex-col gap-1.5 flex-1">
                  {fundUsage.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: f.color }} />
                      <span
                        className="font-body text-taxi-muted leading-tight"
                        style={{ fontSize: "clamp(10px, 1.1vw, 15px)" }}
                      >
                        {f.label}{" "}
                        <span className="text-taxi-light/60">({f.pct}%)</span>
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
              className="glass-card rounded-2xl overflow-hidden flex flex-col flex-1 min-h-0"
            >
              <div
                className="px-4 py-2.5 flex-shrink-0 border-b border-taxi-border"
                style={{ background: "rgba(245,184,0,0.09)" }}
              >
                <span
                  className="font-body font-bold text-taxi-yellow"
                  style={{ fontSize: "clamp(13px, 1.6vw, 20px)" }}
                >
                  Fund Utilisation Breakdown
                </span>
              </div>

              <div className="flex-1 flex flex-col divide-y divide-taxi-border min-h-0 overflow-hidden">
                {fundUsage.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.28 + i * 0.09 }}
                    className="px-4 flex flex-col justify-center flex-1"
                    style={{ minHeight: 0 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `${f.color}18`,
                            border: `1px solid ${f.color}35`,
                            color: f.color,
                          }}
                        >
                          {f.icon}
                        </div>
                        <div>
                          <div
                            className="font-body font-bold text-taxi-light leading-tight"
                            style={{ fontSize: "clamp(12px, 1.35vw, 18px)" }}
                          >
                            {f.label}
                          </div>
                          <div
                            className="font-body text-taxi-muted leading-tight"
                            style={{ fontSize: "clamp(10px, 1.05vw, 14px)" }}
                          >
                            {f.note}
                          </div>
                        </div>
                      </div>
                      <span
                        className="font-body font-bold flex-shrink-0 ml-2"
                        style={{ color: f.color, fontSize: "clamp(12px, 1.35vw, 18px)" }}
                      >
                        {f.amount}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-taxi-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${f.pct}%` }}
                        transition={{ duration: 0.9, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: f.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Credibility strip */}
            <motion.div variants={item} className="grid grid-cols-2 gap-3 flex-shrink-0">
              <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                <FaTaxi className="text-taxi-yellow flex-shrink-0" size={24} />
                <div>
                  <div
                    className="font-body font-bold text-taxi-yellow leading-tight"
                    style={{ fontSize: "clamp(12px, 1.35vw, 18px)" }}
                  >
                    Since 2015
                  </div>
                  <div
                    className="font-body text-taxi-muted leading-tight"
                    style={{ fontSize: "clamp(10px, 1.1vw, 15px)" }}
                  >
                    10+ yrs operations — Zero default history
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                <MdHandshake className="text-green-400 flex-shrink-0" size={24} />
                <div>
                  <div
                    className="font-body font-bold text-green-400 leading-tight"
                    style={{ fontSize: "clamp(12px, 1.35vw, 18px)" }}
                  >
                    Strong Repayment Capacity
                  </div>
                  <div
                    className="font-body text-taxi-muted leading-tight"
                    style={{ fontSize: "clamp(10px, 1.1vw, 15px)" }}
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