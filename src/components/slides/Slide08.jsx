import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

/* ── Car image data ── */
const suvList = [
  {
    name: "Innova",
    count: 12,
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg",
    tag: "7-Seater MPV",
  },
  {
    name: "Ertiga",
    count: 7,
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/69058e1a5606b5cb853028ce61bbc0e9d185eca5.jpg",
    tag: "7-Seater MUV",
  },
  {
    name: "Xylo",
    count: 5,
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/23c63a31fa0c12b7374f7da29062928ceb2cdb50.jpg",
    tag: "8-Seater SUV",
  },
  {
    name: "Eco",
    count: 5,
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/39746d43e92ac537fa1c9d13c29751282f8816b4.jpg",
    tag: "Van / Cargo",
  },
  {
    name: "Tavera",
    count: 3,
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/1d05f5a0f4c4ba22ecb10fdb26f7282ecd0b4441.jpg",
    tag: "8-Seater MUV",
  },
];

const sedanList = [
  {
    name: "Swift Dzire",
    count: 7,
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e33d3b5af3b1ce55593ec7a8694139181aee2d7b.jpg",
    tag: "Compact Sedan",
  },
  {
    name: "Honda Amaze",
    count: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Honda_Amaze_front_view_%28cropped%29.jpg",
    tag: "Sub-Compact",
  },
  {
    name: "Hyundai Aura",
    count: 3,
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8b4934768f7799b490538790c6b7320acb805344.jpg",
    tag: "Compact Sedan",
  },
];

/* ── Framer variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Vehicle card — fixed aspect ratio removed, uses flex fill ── */
function VehicleCard({ name, count, img, tag, color }) {
  const n = useCountUp(count, 1300);

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative rounded-xl overflow-hidden cursor-default w-full h-full"
      style={{
        border: "1px solid rgba(245,184,0,0.18)",
        boxShadow: "0 3px 18px rgba(0,0,0,0.45)",
      }}
    >
      {/* Image fills the whole card */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        style={{ objectPosition: "center" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.04) 20%, rgba(0,0,0,0.80) 100%)",
        }}
      />

      {/* Count badge — top right */}
      <div
        className="absolute top-1.5 right-1.5 font-display leading-none rounded-lg px-2 py-0.5 text-taxi-black shadow-lg z-10"
        style={{
          background: color,
          fontSize: "clamp(13px, 1.6vw, 20px)",
          minWidth: 26,
          textAlign: "center",
        }}
      >
        {n}
      </div>

      {/* Name + tag — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 px-2.5 pb-2 pt-4 z-10">
        <div
          className="font-body font-black text-white leading-tight"
          style={{ fontSize: "clamp(10px, 1.15vw, 14px)" }}
        >
          {name}
        </div>
        <div
          className="font-body mt-0.5 font-semibold"
          style={{
            color,
            fontSize: "clamp(8px, 0.8vw, 10px)",
            letterSpacing: "0.04em",
          }}
        >
          {tag}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section header ── */
function SectionHeader({ title, subtitle, count, color }) {
  return (
    <motion.div
      variants={item}
      className="flex items-center justify-between flex-shrink-0"
    >
      <div>
        <h3
          className="font-display leading-none"
          style={{ color, fontSize: "clamp(16px, 2.2vw, 28px)" }}
        >
          {title}
        </h3>
        <p
          className="font-body text-taxi-muted mt-0.5"
          style={{ fontSize: "clamp(8px, 0.8vw, 11px)" }}
        >
          {subtitle}
        </p>
      </div>
      <div
        className="rounded-xl px-2.5 py-1 flex items-center gap-1"
        style={{
          background: `rgba(${color === "#F5B800" ? "245,184,0" : "255,216,77"},0.1)`,
          border: `1px solid rgba(${color === "#F5B800" ? "245,184,0" : "255,216,77"},0.25)`,
        }}
      >
        <span
          className="font-display leading-none"
          style={{ color, fontSize: "clamp(18px, 2.4vw, 32px)" }}
        >
          {count}
        </span>
        <span
          className="font-body text-taxi-muted"
          style={{ fontSize: "clamp(8px, 0.8vw, 10px)" }}
        >
          vehicles
        </span>
      </div>
    </motion.div>
  );
}

/* ── MAIN SLIDE ── */
export default function Slide08() {
  const suv   = useCountUp(32, 1600);
  const sedan = useCountUp(12, 1600);
  const total = useCountUp(44, 1800);

  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden">

      {/* BG blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-taxi-yellow/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-taxi-yellow/4 rounded-full blur-3xl animate-float pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full h-full flex flex-col px-4 md:px-7 pt-3 pb-3 gap-2"
        style={{ boxSizing: "border-box" }}
      >

        {/* ── HEADER ROW ── */}
        <motion.div
          variants={item}
          className="flex items-center justify-between gap-4 flex-shrink-0"
        >
          <div>
            <p
              className="font-accent uppercase tracking-[4px] text-taxi-yellow/60"
              style={{ fontSize: "clamp(8px, 0.85vw, 11px)" }}
            >
              Attachment Fleet
            </p>
            <h2
              className="font-display text-taxi-yellow leading-none"
              style={{ fontSize: "clamp(24px, 4.5vw, 56px)" }}
            >
              ATTACHMENT VEHICLES
            </h2>
            <div className="w-10 h-0.5 bg-taxi-yellow rounded mt-1" />
          </div>

          {/* Grand total pill */}
          <div
            className="flex-shrink-0 flex items-center gap-3 rounded-2xl px-4 py-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,184,0,0.16) 0%, rgba(245,184,0,0.06) 100%)",
              border: "1px solid rgba(245,184,0,0.32)",
              boxShadow: "0 0 24px rgba(245,184,0,0.08)",
            }}
          >
            <div className="text-center">
              <div
                className="font-display text-gradient-yellow leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
              >
                {total}
              </div>
              <div
                className="font-body text-taxi-muted font-medium"
                style={{ fontSize: "clamp(8px, 0.8vw, 11px)" }}
              >
                Total Vehicles
              </div>
            </div>
            <div
              className="flex flex-col gap-1 pl-3"
              style={{ borderLeft: "1px solid rgba(245,184,0,0.2)" }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-taxi-yellow flex-shrink-0" />
                <span
                  className="font-body text-taxi-light/70"
                  style={{ fontSize: "clamp(9px, 0.85vw, 11px)" }}
                >
                  {suv} SUV / MUV
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-taxi-yellow-light flex-shrink-0" />
                <span
                  className="font-body text-taxi-light/70"
                  style={{ fontSize: "clamp(9px, 0.85vw, 11px)" }}
                >
                  {sedan} Sedans
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── TWO COLUMNS — grow to fill remaining height, never overflow ── */}
        <div
          className="flex-1 grid grid-cols-2 gap-4 min-h-0"
          style={{ overflow: "hidden" }}
        >

          {/* ── LEFT: SUV / MUV ── */}
          <div className="flex flex-col gap-2 min-h-0">

            <SectionHeader
              title="SUV / MUV"
              subtitle="Premium comfort — 5 to 8 seaters"
              count={suv}
              color="#F5B800"
            />

            <div
              className="flex-shrink-0 w-full"
              style={{ height: 1, background: "rgba(245,184,0,0.15)" }}
            />

            {/*
              SUV grid: 5 vehicles → 3 columns × 2 rows (last row has 2 + 1 gap)
              We use grid-rows to split the flex height equally.
              Each cell: position relative, height 100% fills the row.
            */}
            <div
              className="flex-1 min-h-0"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gridTemplateRows: "repeat(2, minmax(0, 1fr))",
                gap: "0.5rem",
              }}
            >
              {suvList.map((v, i) => (
                <VehicleCard key={i} {...v} color="#F5B800" />
              ))}
              {/* 6th empty placeholder to keep grid balanced */}
              <div />
            </div>
          </div>

          {/* ── RIGHT: Sedan ── */}
          <div className="flex flex-col gap-2 min-h-0">

            <SectionHeader
              title="SEDAN"
              subtitle="Economy & comfort rides"
              count={sedan}
              color="#FFD84D"
            />

            <div
              className="flex-shrink-0 w-full"
              style={{ height: 1, background: "rgba(255,216,77,0.15)" }}
            />

            {/*
              Sedan grid: 3 vehicles + 1 equation card = 4 cells → 2 cols × 2 rows
            */}
            <div
              className="flex-1 min-h-0"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridTemplateRows: "repeat(2, minmax(0, 1fr))",
                gap: "0.5rem",
              }}
            >
              {sedanList.map((v, i) => (
                <VehicleCard key={i} {...v} color="#FFD84D" />
              ))}

              {/* Equation card — 4th slot */}
              <motion.div
                variants={item}
                className="relative rounded-xl overflow-hidden w-full h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,184,0,0.12) 0%, rgba(245,184,0,0.04) 100%)",
                  border: "1px solid rgba(245,184,0,0.28)",
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-0.5 px-2 text-center">
                  {[
                    { val: "32", label: "SUV/MUV", color: "#F5B800"  },
                    { val: "+",  label: "",         color: "#555"      },
                    { val: "12", label: "Sedan",    color: "#FFD84D"  },
                    { val: "=",  label: "",         color: "#555"      },
                    { val: "44", label: "Total",    color: "#ffffff"  },
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col items-center leading-tight">
                      <span
                        className="font-display leading-none"
                        style={{
                          color: s.color,
                          fontSize:
                            s.label === "Total"
                              ? "clamp(20px, 2.8vw, 34px)"
                              : s.val === "+" || s.val === "="
                              ? "clamp(11px, 1.3vw, 16px)"
                              : "clamp(16px, 2vw, 26px)",
                        }}
                      >
                        {s.val}
                      </span>
                      {s.label ? (
                        <span
                          className="font-body text-taxi-muted"
                          style={{ fontSize: "clamp(7px, 0.7vw, 9px)" }}
                        >
                          {s.label}
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}