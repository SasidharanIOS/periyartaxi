import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const vehicles = [
  { label: "Bus",              count: 15, img: "/touristbus.png"      },
  { label: "Mini Bus",         count: 4,  img: "/minibus.png"         },
  { label: "Tempo Traveller",  count: 12, img: "/tempotraveller.png"  },
  { label: "Coach Van",        count: 12, img: "/coachvan.png"        },
  { label: "Mahindra Tourist", count: 6,  img: "/mahindratourist.png" },
  { label: "Urbania",          count: 8,  img: "/urbania.png"         },
];

function VehicleCard({ label, count, img }) {
  const n = useCountUp(count, 1400);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl group cursor-default w-full h-full"
    >
      {/* Vehicle image — fills the full grid cell height */}
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      {/* Top yellow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-taxi-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Bottom label + count */}
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex justify-between items-end gap-2">
        <span
          className="font-body text-white font-bold leading-tight"
          style={{ fontSize: "clamp(12px, 1.5vw, 17px)", maxWidth: "62%" }}
        >
          {label}
        </span>
        <span
          className="font-display text-taxi-yellow leading-none flex-shrink-0"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          {n}
        </span>
      </div>
    </motion.div>
  );
}

export default function Slide07() {
  const total = useCountUp(87, 1800);
  const cars  = useCountUp(30, 1500);
  const large = useCountUp(57, 1500);

  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex items-stretch">
      {/* BG blobs */}
      <div className="absolute top-[-10%] left-[20%] w-80 h-80 bg-taxi-yellow/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-72 h-72 bg-taxi-yellow/4 rounded-full blur-3xl animate-float pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full h-full flex flex-col px-5 md:px-8 pt-4 pb-3"
        style={{ gap: "clamp(6px, 1.2vh, 12px)" }}
      >
        {/* ── Header ── */}
        <motion.div variants={item} className="flex-shrink-0">
          <p
            className="font-accent uppercase tracking-[6px] text-taxi-yellow/60"
            style={{ fontSize: "clamp(10px, 1.1vw, 13px)" }}
          >
            Tie-Up Network
          </p>
          <h2
            className="font-display text-taxi-yellow leading-none mt-0.5"
            style={{ fontSize: "clamp(36px, 7.5vw, 84px)" }}
          >
            TIE-UP VEHICLES
          </h2>
          <div className="w-14 h-[3px] bg-taxi-yellow rounded mt-1.5" />
        </motion.div>

        {/* ── Summary Stats ── */}
        <motion.div variants={item} className="grid grid-cols-3 gap-2.5 flex-shrink-0">
          {[
            { val: total, label: "Total Tie-Up"  },
            { val: cars,  label: "Cars (Tie-up)" },
            { val: large, label: "14–52 Seaters" },
          ].map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-xl flex flex-col items-center justify-center py-2.5"
            >
              <div
                className="font-display text-taxi-yellow leading-none"
                style={{ fontSize: "clamp(28px, 5vw, 58px)" }}
              >
                {s.val}
              </div>
              <div
                className="font-body text-taxi-muted font-medium mt-0.5 text-center"
                style={{ fontSize: "clamp(10px, 1.2vw, 13px)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Vehicle Image Grid — flex-1 so it takes ALL remaining height ── */}
        <div
          className="grid grid-cols-3 flex-1 min-h-0"
          style={{ gap: "clamp(6px, 1vh, 10px)" }}
        >
          {vehicles.map((v, i) => (
            <VehicleCard key={i} {...v} />
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          variants={item}
          className="flex-shrink-0 font-body text-taxi-muted text-center"
          style={{ fontSize: "clamp(10px, 1.1vw, 12px)" }}
        >
          ✅ 30 Cars + 57 Large Vehicles (14 to 52 seaters) ={" "}
          <span className="text-taxi-yellow font-bold">87 Total</span>
        </motion.p>
      </motion.div>
    </div>
  );
}