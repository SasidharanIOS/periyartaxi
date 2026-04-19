import React from "react";
import { motion } from "framer-motion";
import {
  MdMap, MdNotifications, MdTimer, MdSecurity,
  MdPayment, MdStar, MdPhoneAndroid,
} from "react-icons/md";
import { FaApple, FaAndroid } from "react-icons/fa";

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
    icon: <MdMap size={30} />,
    title: "Live Map Tracking",
    desc: "Customer sees driver in real-time. Driver navigates to exact customer pin.",
    user: "Both",
  },
  {
    icon: <MdNotifications size={30} />,
    title: "Smart Booking Alerts",
    desc: "Nearest driver auto-assigned. Push notifications for booking status.",
    user: "Both",
  },
  {
    icon: <MdTimer size={30} />,
    title: "Time Management",
    desc: "ETA displayed live. SLA tracking ensures on-time arrivals.",
    user: "Admin",
  },
  {
    icon: <MdSecurity size={30} />,
    title: "Safety Features",
    desc: "Driver verification, trip sharing, emergency SOS for customers.",
    user: "Customer",
  },
  {
    icon: <MdPayment size={30} />,
    title: "Digital Payments",
    desc: "UPI, card, wallet & cash — all payment modes fully supported.",
    user: "Customer",
  },
  {
    icon: <MdStar size={30} />,
    title: "Ratings & Reviews",
    desc: "Post-trip feedback loop. Top drivers earn bonus incentives.",
    user: "Both",
  },
];

const userColor = {
  Both:     "#F5B800",
  Admin:    "#60a5fa",
  Customer: "#34d399",
  Driver:   "#f87171",
};

const techStack = [
  "React Native", "Node.js", "Google Maps API",
  "Firebase", "Razorpay", "MySQL", "AWS",
];

export default function Slide12() {
  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex items-center justify-center">

      {/* BG glows */}
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 bg-taxi-yellow/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full h-full flex flex-col justify-between px-8 md:px-12 py-6 md:py-8"
      >

        {/* ── HEADER ROW ── */}
        <motion.div variants={item} className="flex-shrink-0">
          <p className="font-accent uppercase tracking-[5px] text-taxi-yellow/60 text-sm md:text-base mb-1">
            🏦 Bank Loan Proposal — Slide 2 of 5
          </p>

          <div className="flex items-end gap-4 flex-wrap">
            <h2
              className="font-display text-taxi-yellow leading-none"
              style={{ fontSize: "clamp(44px, 8vw, 96px)" }}
            >
              APP FEATURES & TECH
            </h2>

            {/* Platform badges inline with heading */}
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <div className="flex items-center gap-1.5 glass-card rounded-full px-3.5 py-1.5">
                <FaAndroid className="text-green-400" size={18} />
                <span className="font-body text-taxi-light text-sm md:text-base font-semibold">Android</span>
              </div>
              <div className="flex items-center gap-1.5 glass-card rounded-full px-3.5 py-1.5">
                <FaApple className="text-taxi-light" size={18} />
                <span className="font-body text-taxi-light text-sm md:text-base font-semibold">iOS</span>
              </div>
              <div className="flex items-center gap-1.5 glass-card rounded-full px-3.5 py-1.5">
                <MdPhoneAndroid className="text-taxi-yellow" size={18} />
                <span className="font-body text-taxi-light text-sm md:text-base font-semibold">
                  3 Apps — Customer · Driver · Admin
                </span>
              </div>
            </div>
          </div>

          <div className="w-16 h-1.5 bg-taxi-yellow rounded mt-2" />
        </motion.div>

        {/* ── FEATURES GRID ── */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4, borderColor: `${userColor[f.user]}55` }}
              className="glass-card rounded-xl p-4 md:p-5 flex flex-col gap-2.5 transition-all duration-200"
            >
              {/* Icon + badge row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${userColor[f.user]}18`,
                    border: `1px solid ${userColor[f.user]}35`,
                    color: userColor[f.user],
                  }}
                >
                  {f.icon}
                </div>
                <span
                  className="font-body text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    background: `${userColor[f.user]}18`,
                    color: userColor[f.user],
                    border: `1px solid ${userColor[f.user]}35`,
                  }}
                >
                  {f.user}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="font-body font-bold text-taxi-light leading-tight mb-1"
                  style={{ fontSize: "clamp(13px, 1.5vw, 18px)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="font-body text-taxi-muted leading-relaxed"
                  style={{ fontSize: "clamp(11px, 1.2vw, 15px)" }}
                >
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── TECH STACK STRIP ── */}
        <motion.div
          variants={item}
          className="flex-shrink-0 glass-card rounded-xl px-5 py-3 flex flex-wrap items-center gap-2"
        >
          <span
            className="font-body font-bold text-taxi-muted uppercase tracking-widest mr-2 flex-shrink-0"
            style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
          >
            Tech Stack:
          </span>
          {techStack.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full font-body font-semibold bg-taxi-yellow/10 border border-taxi-yellow/25 text-taxi-yellow/90"
              style={{ fontSize: "clamp(11px, 1.2vw, 15px)" }}
            >
              {t}
            </span>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}