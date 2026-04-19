import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";
import { FaUserTie, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdSupport, MdVerified } from "react-icons/md";

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
    color: "#F5B800",
  },
  {
    icon: <FaUserTie size={38} />,
    value: 60,
    label: "Acting Drivers",
    desc: "On-demand drivers for events, bulk bookings & peak loads.",
    color: "#FFD84D",
  },
  {
    icon: <FaUsers size={38} />,
    value: 3,
    label: "Office Team",
    desc: "Dedicated operations & customer support staff.",
    color: "#E0A800",
  },
];

function TeamCard({ icon, value, label, desc, color }) {
  const count = useCountUp(value, 1600);
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6, borderColor: `${color}70` }}
      className="glass-card rounded-2xl flex flex-col items-center text-center transition-all duration-200 h-full"
      style={{ padding: "clamp(16px, 2.5vw, 28px)" }}
    >
      {/* Icon circle */}
      <div
        className="rounded-2xl flex items-center justify-center mb-3 flex-shrink-0"
        style={{
          width: "clamp(56px, 7vw, 80px)",
          height: "clamp(56px, 7vw, 80px)",
          backgroundColor: `${color}18`,
          border: `1.5px solid ${color}30`,
          color,
        }}
      >
        {icon}
      </div>

      {/* Big number */}
      <div
        className="font-display leading-none mb-2"
        style={{
          fontSize: "clamp(64px, 10vw, 110px)",
          color,
          textShadow: `0 0 30px ${color}50`,
        }}
      >
        {count}
      </div>

      {/* Label */}
      <div
        className="font-body font-bold text-taxi-light mb-2 leading-tight"
        style={{ fontSize: "clamp(15px, 1.8vw, 22px)" }}
      >
        {label}
      </div>

      {/* Desc */}
      <div
        className="font-body text-taxi-muted leading-snug"
        style={{ fontSize: "clamp(12px, 1.2vw, 15px)" }}
      >
        {desc}
      </div>
    </motion.div>
  );
}

export default function Slide09() {
  const total = useCountUp(88, 1800);

  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex flex-col">
      {/* BG blobs */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-taxi-yellow/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-taxi-yellow/4 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] bg-taxi-yellow/3 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col h-full"
        style={{ padding: "clamp(14px, 2vw, 28px)" }}
      >
        {/* ── HEADER ── */}
        <motion.div variants={item} className="flex-shrink-0 mb-3">
          <p
            className="font-accent uppercase text-taxi-yellow/60 tracking-[5px] mb-1"
            style={{ fontSize: "clamp(11px, 1.2vw, 15px)" }}
          >
            Behind the Wheel
          </p>
          <h2
            className="font-display text-taxi-yellow leading-none"
            style={{ fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            TEAM STRENGTH
          </h2>
          <div
            className="bg-taxi-yellow rounded mt-2"
            style={{ width: "clamp(40px, 5vw, 64px)", height: "4px" }}
          />
        </motion.div>

        {/* ── TEAM CARDS (fills remaining space) ── */}
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
            className="glass-card rounded-xl flex items-center gap-4"
            style={{ padding: "clamp(12px, 1.5vw, 20px)" }}
          >
            <div
              className="rounded-xl bg-taxi-yellow/10 border border-taxi-yellow/20 flex items-center justify-center text-taxi-yellow flex-shrink-0"
              style={{
                width: "clamp(44px, 5vw, 60px)",
                height: "clamp(44px, 5vw, 60px)",
              }}
            >
              <MdSupport size={26} />
            </div>
            <div>
              <div
                className="font-body font-bold text-taxi-yellow leading-tight"
                style={{ fontSize: "clamp(14px, 1.6vw, 20px)" }}
              >
                Total Workforce
              </div>
              <div
                className="font-body text-taxi-muted mt-0.5"
                style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}
              >
                <span
                  className="font-display text-taxi-yellow"
                  style={{ fontSize: "clamp(22px, 3vw, 38px)" }}
                >
                  {total}
                </span>{" "}
                team members ready to serve
              </div>
            </div>
          </div>

          {/* Experienced & Verified */}
          <div
            className="glass-card rounded-xl flex items-center gap-4"
            style={{ padding: "clamp(12px, 1.5vw, 20px)" }}
          >
            <div
              className="rounded-xl bg-taxi-yellow/10 border border-taxi-yellow/20 flex items-center justify-center text-taxi-yellow flex-shrink-0"
              style={{
                width: "clamp(44px, 5vw, 60px)",
                height: "clamp(44px, 5vw, 60px)",
              }}
            >
              <MdVerified size={26} />
            </div>
            <div>
              <div
                className="font-body font-bold text-taxi-yellow leading-tight"
                style={{ fontSize: "clamp(14px, 1.6vw, 20px)" }}
              >
                Experienced & Verified
              </div>
              <div
                className="font-body text-taxi-muted mt-0.5"
                style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}
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