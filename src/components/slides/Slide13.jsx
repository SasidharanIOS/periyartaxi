import React from "react";
import { motion } from "framer-motion";
import { MdTrendingUp, MdClose, MdCheck, MdLocationOn } from "react-icons/md";
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

const comparison = [
  { feature: "Mobile App (Android + iOS)", us: true,  red: true  },
  { feature: "All-India Service Coverage",  us: true,  red: false },
  { feature: "Fleet of 152 Vehicles",       us: true,  red: false },
  { feature: "Acting Drivers (60+)",         us: true,  red: false },
  { feature: "Valet & Event Services",       us: true,  red: false },
  { feature: "Monthly Contract Services",   us: true,  red: false },
  { feature: "Bulk / Group Bookings",        us: true,  red: false },
  { feature: "10+ Years Operations",         us: true,  red: false },
];

const marketStats = [
  { label: "Market Size (2024)", val: "₹1.2 Lakh Cr", accent: "#d97706" },
  { label: "App-based Share",    val: "68%",           accent: "#2563eb" },
  { label: "CAGR Growth",        val: "14.3%",         accent: "#16a34a" },
  { label: "Tamil Nadu Users",   val: "2.8 Cr+",       accent: "#7c3aed" },
];

const reachTags = ["Erode", "Coimbatore", "Chennai", "Salem", "Bangalore", "All India"];
const tagColors = ["#d97706","#2563eb","#dc2626","#16a34a","#7c3aed","#0d9488"];
const tagBgs    = ["#fef3c7","#dbeafe","#fee2e2","#dcfce7","#ede9fe","#ccfbf1"];

export default function Slide13() {
  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-10%] left-[15%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div className="absolute bottom-[-5%] right-[-5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 70%)", filter: "blur(65px)" }}
      />
      <div className="absolute top-[50%] left-[55%] w-64 h-64 rounded-full pointer-events-none"
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
        className="relative z-10 flex flex-col w-full h-full p-4 md:p-5 gap-3"
      >
        {/* ── HEADER ── */}
        <motion.div variants={item} className="flex-shrink-0">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            <p
              className="font-accent uppercase font-semibold tracking-[5px]"
              style={{ fontSize: "clamp(10px, 1.2vw, 14px)", color: LT.amber }}
            >
              🏦 Bank Loan Proposal — Slide 3 of 5
            </p>
          </div>
          <h2
            className="font-display leading-none mt-0.5"
            style={{ fontSize: "clamp(34px, 6vw, 78px)", color: LT.text }}
          >
            MARKET &amp;{" "}
            <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
              COMPETITION
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

          {/* ── LEFT COLUMN (2/5) ── */}
          <div className="col-span-2 flex flex-col gap-3 min-h-0">

            {/* Market stats card */}
            <motion.div
              variants={item}
              className="rounded-xl p-3 md:p-4 flex-1 flex flex-col relative overflow-hidden"
              style={{
                background: LT.surface,
                border: `1.5px solid ${LT.amber}22`,
                boxShadow: LT.shadowMd,
              }}
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: LT.amber }} />

              <div className="flex items-center gap-2 mb-3 flex-shrink-0 mt-1">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: LT.amberBg, color: LT.amber }}
                >
                  <MdTrendingUp size={20} />
                </div>
                <span
                  className="font-body font-bold leading-tight"
                  style={{ fontSize: "clamp(13px, 1.5vw, 19px)", color: LT.text }}
                >
                  Indian Taxi Market
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                {marketStats.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2"
                    style={{
                      borderBottom: i < marketStats.length - 1 ? `1px solid ${LT.divider}` : "none",
                    }}
                  >
                    <span
                      className="font-body leading-tight"
                      style={{ fontSize: "clamp(11px, 1.2vw, 15px)", color: LT.textMuted }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="font-body font-bold leading-none px-2.5 py-0.5 rounded-full"
                      style={{
                        fontSize: "clamp(12px, 1.4vw, 18px)",
                        color: s.accent,
                        background: s.accent + "12",
                        border: `1px solid ${s.accent}28`,
                      }}
                    >
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Reach card */}
            <motion.div
              variants={item}
              className="rounded-xl p-3 md:p-4 flex-1 flex flex-col relative overflow-hidden"
              style={{
                background: LT.surface,
                border: `1.5px solid rgba(37,99,235,0.18)`,
                boxShadow: LT.shadowMd,
              }}
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#2563eb" }} />

              <div className="flex items-center gap-2 mb-2 flex-shrink-0 mt-1">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#dbeafe", color: "#2563eb" }}
                >
                  <MdLocationOn size={20} />
                </div>
                <span
                  className="font-body font-bold leading-tight"
                  style={{ fontSize: "clamp(13px, 1.5vw, 19px)", color: LT.text }}
                >
                  Our Reach
                </span>
              </div>

              <p
                className="font-body leading-snug mb-3"
                style={{ fontSize: "clamp(11px, 1.2vw, 15px)", color: LT.textMuted }}
              >
                Origin:{" "}
                <span style={{ color: LT.amber, fontWeight: 700 }}>Erode, Tamil Nadu</span>
                <br />
                Service Area:{" "}
                <span style={{ color: "#2563eb", fontWeight: 700 }}>All India</span>{" "}
                — outstation, corporate, airport, pilgrimages.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {reachTags.map((c, i) => (
                  <span
                    key={c}
                    className="px-2.5 py-0.5 rounded-full font-body font-semibold"
                    style={{
                      fontSize: "clamp(9px, 1vw, 13px)",
                      background: tagBgs[i % tagBgs.length],
                      border: `1px solid ${tagColors[i % tagColors.length]}28`,
                      color: tagColors[i % tagColors.length],
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN – Comparison Table (3/5) ── */}
          <motion.div
            variants={item}
            className="col-span-3 rounded-2xl overflow-hidden flex flex-col min-h-0"
            style={{
              background: LT.surface,
              border: `1.5px solid ${LT.amber}22`,
              boxShadow: LT.shadowLg,
            }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-3 px-4 py-3 flex-shrink-0"
              style={{
                background: `linear-gradient(90deg, ${LT.amber}12, transparent)`,
                borderBottom: `1.5px solid ${LT.divider}`,
              }}
            >
              <div
                className="font-body font-bold uppercase tracking-wider"
                style={{ fontSize: "clamp(10px, 1.1vw, 14px)", color: LT.textFaint }}
              >
                Feature
              </div>
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: LT.amberBg, color: LT.amber }}
                >
                  <FaTaxi size={13} />
                </div>
                <span
                  className="font-body font-bold"
                  style={{ fontSize: "clamp(12px, 1.3vw, 17px)", color: LT.amber }}
                >
                  Periyar Taxi
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: "#dc2626" }} />
                <span
                  className="font-body font-bold"
                  style={{ fontSize: "clamp(12px, 1.3vw, 17px)", color: "#dc2626" }}
                >
                  Red Taxi
                </span>
              </div>
            </div>

            {/* Rows */}
            <div
              className="flex-1 flex flex-col min-h-0 overflow-hidden"
              style={{ divideColor: LT.divider }}
            >
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.38 }}
                  className="grid grid-cols-3 px-4 items-center flex-1 transition-colors duration-150"
                  style={{
                    minHeight: 0,
                    borderBottom: i < comparison.length - 1 ? `1px solid ${LT.divider}` : "none",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = `${LT.amber}07`}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <span
                    className="font-body leading-tight"
                    style={{ fontSize: "clamp(11px, 1.2vw, 15px)", color: LT.text }}
                  >
                    {row.feature}
                  </span>

                  {/* Us */}
                  <div className="flex justify-center">
                    {row.us ? (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{
                          background: "#dcfce7",
                          border: "1.5px solid #16a34a40",
                          boxShadow: "0 2px 6px rgba(22,163,74,0.12)",
                        }}
                      >
                        <MdCheck style={{ color: "#16a34a" }} size={16} />
                      </div>
                    ) : (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: "#fee2e2", border: "1.5px solid #dc262640" }}
                      >
                        <MdClose style={{ color: "#dc2626" }} size={16} />
                      </div>
                    )}
                  </div>

                  {/* Red Taxi */}
                  <div className="flex justify-center">
                    {row.red ? (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: "#dcfce7", border: "1.5px solid #16a34a40" }}
                      >
                        <MdCheck style={{ color: "#16a34a" }} size={16} />
                      </div>
                    ) : (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: "#fee2e2", border: "1.5px solid #dc262640" }}
                      >
                        <MdClose style={{ color: "#dc2626" }} size={16} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Winner strip */}
            <div
              className="px-4 py-2.5 text-center flex-shrink-0 flex items-center justify-center gap-2"
              style={{
                background: `linear-gradient(90deg, transparent, ${LT.amber}14, transparent)`,
                borderTop: `1.5px solid ${LT.amber}25`,
              }}
            >
              <span
                className="font-body font-bold"
                style={{ fontSize: "clamp(12px, 1.3vw, 17px)", color: LT.amber }}
              >
                🏆 Periyar Taxi wins 7 / 8 feature categories vs Red Taxi
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}