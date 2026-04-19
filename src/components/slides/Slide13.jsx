import React from "react";
import { motion } from "framer-motion";
import { MdTrendingUp, MdClose, MdCheck, MdLocationOn } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";

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

export default function Slide13() {
  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex flex-col">

      {/* ── Background blobs ── */}
      <div className="absolute top-[-10%] left-[15%] w-96 h-96 bg-taxi-yellow/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float pointer-events-none" />

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
            🏦 Bank Loan Proposal — Slide 3 of 5
          </p>
          <h2
            className="font-display text-taxi-yellow leading-none mt-1"
            style={{ fontSize: "clamp(36px, 6.5vw, 82px)" }}
          >
            MARKET &amp; COMPETITION
          </h2>
          <div className="w-16 h-[3px] bg-taxi-yellow rounded mt-2" />
        </motion.div>

        {/* ── BODY GRID ── */}
        <div className="flex-1 grid grid-cols-5 gap-3 min-h-0">

          {/* ── LEFT COLUMN (2/5) ── */}
          <div className="col-span-2 flex flex-col gap-3 min-h-0">

            {/* Market stats card */}
            <motion.div variants={item} className="glass-card rounded-xl p-3 md:p-4 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2 flex-shrink-0">
                <MdTrendingUp className="text-taxi-yellow flex-shrink-0" size={22} />
                <span
                  className="font-body font-bold text-taxi-yellow leading-tight"
                  style={{ fontSize: "clamp(13px, 1.6vw, 20px)" }}
                >
                  Indian Taxi Market
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                {[
                  { label: "Market Size (2024)",  val: "₹1.2 Lakh Cr" },
                  { label: "App-based Share",     val: "68%" },
                  { label: "CAGR Growth",         val: "14.3%" },
                  { label: "Tamil Nadu Users",    val: "2.8 Cr+" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-1.5 border-b border-taxi-border last:border-0"
                  >
                    <span
                      className="font-body text-taxi-muted leading-tight"
                      style={{ fontSize: "clamp(11px, 1.3vw, 17px)" }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="font-body text-taxi-yellow font-bold leading-tight"
                      style={{ fontSize: "clamp(13px, 1.5vw, 20px)" }}
                    >
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Reach card */}
            <motion.div variants={item} className="glass-card rounded-xl p-3 md:p-4 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2 flex-shrink-0">
                <MdLocationOn className="text-taxi-yellow flex-shrink-0" size={20} />
                <span
                  className="font-body font-bold text-taxi-yellow leading-tight"
                  style={{ fontSize: "clamp(13px, 1.6vw, 20px)" }}
                >
                  Our Reach
                </span>
              </div>
              <p
                className="font-body text-taxi-muted leading-snug mb-2"
                style={{ fontSize: "clamp(11px, 1.3vw, 17px)" }}
              >
                Origin:{" "}
                <span className="text-taxi-yellow font-semibold">Erode, Tamil Nadu</span>
                <br />
                Service Area:{" "}
                <span className="text-taxi-yellow font-semibold">All India</span>{" "}
                — outstation, corporate, airport, pilgrimages.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Erode", "Coimbatore", "Chennai", "Salem", "Bangalore", "All India"].map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-0.5 rounded-full bg-taxi-yellow/10 border border-taxi-yellow/20 text-taxi-yellow font-body font-medium"
                    style={{ fontSize: "clamp(10px, 1.1vw, 15px)" }}
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
            className="col-span-3 glass-card rounded-2xl overflow-hidden flex flex-col min-h-0"
          >
            {/* Table header */}
            <div
              className="grid grid-cols-3 px-4 py-2.5 flex-shrink-0 border-b border-taxi-border"
              style={{ background: "rgba(245,184,0,0.10)" }}
            >
              <div
                className="font-body text-taxi-muted font-semibold uppercase tracking-wider"
                style={{ fontSize: "clamp(11px, 1.2vw, 16px)" }}
              >
                Feature
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaTaxi className="text-taxi-yellow flex-shrink-0" size={16} />
                <span
                  className="font-body text-taxi-yellow font-bold"
                  style={{ fontSize: "clamp(12px, 1.4vw, 18px)" }}
                >
                  Periyar Taxi
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 flex-shrink-0" />
                <span
                  className="font-body text-red-400 font-bold"
                  style={{ fontSize: "clamp(12px, 1.4vw, 18px)" }}
                >
                  Red Taxi
                </span>
              </div>
            </div>

            {/* Rows — fill remaining height evenly */}
            <div className="flex-1 flex flex-col min-h-0 divide-y divide-taxi-border overflow-hidden">
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.38 }}
                  className="grid grid-cols-3 px-4 items-center hover:bg-taxi-yellow/[0.04] transition-colors flex-1"
                  style={{ minHeight: 0 }}
                >
                  <span
                    className="font-body text-taxi-light/90 leading-tight"
                    style={{ fontSize: "clamp(11px, 1.25vw, 17px)" }}
                  >
                    {row.feature}
                  </span>

                  {/* Us */}
                  <div className="flex justify-center">
                    {row.us ? (
                      <div className="w-7 h-7 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center">
                        <MdCheck className="text-green-400" size={16} />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-red-500/15 border border-red-500/40 flex items-center justify-center">
                        <MdClose className="text-red-400" size={16} />
                      </div>
                    )}
                  </div>

                  {/* Red Taxi */}
                  <div className="flex justify-center">
                    {row.red ? (
                      <div className="w-7 h-7 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center">
                        <MdCheck className="text-green-400" size={16} />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-red-500/15 border border-red-500/40 flex items-center justify-center">
                        <MdClose className="text-red-400" size={16} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Winner strip */}
            <div
              className="px-4 py-2 text-center flex-shrink-0"
              style={{ background: "rgba(245,184,0,0.13)" }}
            >
              <span
                className="font-body text-taxi-yellow font-bold"
                style={{ fontSize: "clamp(12px, 1.35vw, 18px)" }}
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