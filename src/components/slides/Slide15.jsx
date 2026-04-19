import React from "react";
import { motion } from "framer-motion";
import { MdPhoneAndroid, MdBusiness, MdPeople, MdCampaign, MdSecurity, MdHandshake } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import useCountUp from "../../hooks/useCountUp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const fundUsage = [
  {
    icon: <MdPhoneAndroid size={22} />,
    label: "App Development",
    amount: "₹8,00,000",
    pct: 40,
    note: "Android + iOS (Customer, Driver, Admin)",
    color: "#F5B800",
  },
  {
    icon: <MdBusiness size={22} />,
    label: "Cloud Infrastructure",
    amount: "₹2,50,000",
    pct: 12,
    note: "AWS / Firebase servers, GPS API, SMS gateway",
    color: "#60a5fa",
  },
  {
    icon: <MdPeople size={22} />,
    label: "Driver Onboarding",
    amount: "₹2,00,000",
    pct: 10,
    note: "Training, verification, app setup for 100 drivers",
    color: "#34d399",
  },
  {
    icon: <MdCampaign size={22} />,
    label: "Marketing & Launch",
    amount: "₹4,00,000",
    pct: 20,
    note: "Digital ads, local print, referral bonuses",
    color: "#f87171",
  },
  {
    icon: <MdSecurity size={22} />,
    label: "Working Capital",
    amount: "₹3,50,000",
    pct: 18,
    note: "Operations, salaries & contingency for 6 months",
    color: "#a78bfa",
  },
];

const totalLoan = 2000000; // ₹20L

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
  const loanAmt = useCountUp(20, 1800);

  // Compute SVG arc offsets
  const arcs = [];
  let cumulative = 0;
  const r = 38, circ = 2 * Math.PI * r;
  fundUsage.forEach((f) => {
    arcs.push({ ...f, offset: -(cumulative / 100) * circ });
    cumulative += f.pct;
  });

  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex items-center justify-center">
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-taxi-yellow/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/4 rounded-full blur-3xl animate-float" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl px-6 md:px-10"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-4">
          <p className="font-accent uppercase tracking-[6px] text-taxi-yellow/60 text-sm mb-2">
            🏦 Bank Loan Proposal — Slide 5 of 5
          </p>
          <h2
            className="font-display text-taxi-yellow leading-none"
            style={{ fontSize: "clamp(28px, 6.5vw, 74px)" }}
          >
            LOAN REQUEST
          </h2>
          <div className="w-14 h-1 bg-taxi-yellow rounded mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Left – Donut + loan amount */}
          <motion.div variants={item} className="md:col-span-2 flex flex-col gap-3">
            {/* Loan card */}
            <div
              className="rounded-2xl p-5 text-center"
              style={{
                background: "linear-gradient(135deg,rgba(245,184,0,0.16),rgba(245,184,0,0.06))",
                border: "1px solid rgba(245,184,0,0.4)",
                boxShadow: "0 0 30px rgba(245,184,0,0.1)",
              }}
            >
              <p className="font-body text-taxi-muted text-xs uppercase tracking-widest mb-1">
                Loan Amount Requested
              </p>
              <div
                className="font-display text-gradient-yellow leading-none animate-glow"
                style={{ fontSize: "clamp(48px,9vw,80px)" }}
              >
                ₹{loanAmt}L
              </div>
              <p className="font-body text-taxi-light/50 text-xs mt-1">
                (₹20,00,000 — Twenty Lakhs Only)
              </p>

              <div className="mt-3 flex flex-col gap-1.5 text-left">
                {[
                  { k: "Tenure", v: "36 Months" },
                  { k: "Purpose", v: "Mobile App + Marketing" },
                  { k: "Repayment", v: "EMI from Month 4" },
                  { k: "Collateral", v: "Business Assets + Guarantor" },
                ].map((d) => (
                  <div key={d.k} className="flex justify-between">
                    <span className="font-body text-taxi-muted text-xs">{d.k}</span>
                    <span className="font-body text-taxi-yellow text-xs font-semibold">{d.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut chart */}
            <div className="glass-card rounded-2xl p-4">
              <p className="font-body text-taxi-yellow text-xs font-bold mb-3">Fund Allocation</p>
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 100 100" width="90" height="90" className="flex-shrink-0" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1C1C1C" strokeWidth="10" />
                  {arcs.map((a, i) => (
                    <DonutArc key={i} pct={a.pct} color={a.color} offset={a.offset} />
                  ))}
                </svg>
                <div className="flex flex-col gap-1">
                  {fundUsage.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: f.color }} />
                      <span className="font-body text-taxi-muted text-[10px]">{f.label} ({f.pct}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Fund breakdown */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <motion.div variants={item} className="glass-card rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-taxi-border"
                style={{ background: "rgba(245,184,0,0.08)" }}>
                <span className="font-body font-bold text-taxi-yellow text-sm">Fund Utilisation Breakdown</span>
              </div>
              <div className="divide-y divide-taxi-border">
                {fundUsage.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.09 }}
                    className="px-4 py-3"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: `${f.color}15`, border: `1px solid ${f.color}30`, color: f.color }}
                        >
                          {f.icon}
                        </div>
                        <div>
                          <div className="font-body font-bold text-taxi-light text-sm">{f.label}</div>
                          <div className="font-body text-taxi-muted text-xs">{f.note}</div>
                        </div>
                      </div>
                      <span className="font-body font-bold text-sm flex-shrink-0 ml-2" style={{ color: f.color }}>
                        {f.amount}
                      </span>
                    </div>
                    {/* Progress bar */}
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
            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-3"
            >
              <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                <FaTaxi className="text-taxi-yellow flex-shrink-0" size={20} />
                <div>
                  <div className="font-body font-bold text-taxi-yellow text-xs">Since 2015</div>
                  <div className="font-body text-taxi-muted text-xs">10+ yrs operations — Zero default history</div>
                </div>
              </div>
              <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                <MdHandshake className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <div className="font-body font-bold text-green-400 text-xs">Strong Repayment Capacity</div>
                  <div className="font-body text-taxi-muted text-xs">152 vehicles + 88 staff = stable cashflow</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}