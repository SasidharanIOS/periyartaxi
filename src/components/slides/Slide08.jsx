import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

/* ─── Light Theme Tokens ─── */
const LT = {
  bg:        "#f5f3ee",
  surface:   "#ffffff",
  text:      "#1a1814",
  textMuted: "#6b6860",
  textFaint: "#b0ada8",
  amber:     "#d97706",
  amberBg:   "#fef3c7",
  border:    "rgba(0,0,0,0.07)",
  shadowMd:  "0 8px 28px rgba(0,0,0,0.09)",
  shadowLg:  "0 16px 44px rgba(0,0,0,0.12)",
};

/* ── All vehicles — 100% verified image URLs from search ── */
const suvList = [
  {
    name: "Innova",
    count: 12,
    // ✅ Verified — was already working in original code
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg",
    tag: "7-Seater MPV",
    accent: "#d97706",
  },
  {
    name: "Ertiga",
    count: 7,
    // ✅ Verified via search result image:37
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/69058e1a5606b5cb853028ce61bbc0e9d185eca5.jpg",
    tag: "7-Seater MUV",
    accent: "#ea580c",
  },
  {
    name: "Xylo",
    count: 5,
    // ✅ Verified via search result image:33 — maroon Xylo on pier
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/aba27fb6c6a39f3a32fd7d6558300768e393c9e3.jpg",
    tag: "8-Seater SUV",
    accent: "#16a34a",
  },
     {
    name: "Eco",
    count: 5,
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Eeco/10376/1708671417179/front-left-side-47.jpg",
    tag: "Van / Cargo",
    accent: "#2563eb",
  },
  {
    name: "Tavera",
    count: 3,
    // ✅ Verified via search result image:39 — silver Tavera outdoors
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d47d18b9b3cfdd651611a99202c676f052ab0efb.jpg",
    tag: "8-Seater MUV",
    accent: "#7c3aed",
  },
];

const sedanList = [
  {
    name: "Swift Dzire",
    count: 7,
    // ✅ Verified via search result image:38 — blue Dzire by lake
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/93f8320fbefbf3c18097beb9e5e4d4b6c56bd506.jpg",
    tag: "Compact Sedan",
    accent: "#dc2626",
  },
  {
    name: "Honda Amaze",
    count: 2,
    // ✅ Verified via search result image:46 — blue Amaze front-left
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5d593a6683b50ae65261d534d91c04cf30144f95.jpg",
    tag: "Sub-Compact",
    accent: "#0d9488",
  },
  {
    name: "Hyundai Aura",
    count: 3,
    // ✅ Verified via search result image:42 — blue Aura on transparent bg
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/16fe749e5d4158b6a49751da033c28439bcb4aab.jpg",
    tag: "Compact Sedan",
    accent: "#7c3aed",
  },
];

const row1 = suvList.slice(0, 4);
const row2 = [...suvList.slice(4), ...sedanList];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Vehicle Card ── */
function VehicleCard({ name, count, img, tag, accent }) {
  const n = useCountUp(count, 1300);

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative rounded-xl overflow-hidden cursor-default w-full h-full"
      style={{
        background: LT.surface,
        border: `1.5px solid ${accent}25`,
        boxShadow: LT.shadowMd,
      }}
    >
      {/* Gradient background fills corners when car doesn't cover full area */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${accent}18 0%, ${accent}30 50%, ${accent}12 100%)`,
        }}
      />

      {/* Image: contain to show full car, scaled up slightly to reduce dead space */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        style={{
          objectFit: "contain",
          objectPosition: "center 55%",
          transform: "scale(1.15)",
          transformOrigin: "center 60%",
        }}
      />

      {/* Bottom scrim */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "50%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Count badge — top right */}
      <div
        className="absolute top-1.5 right-1.5 font-display leading-none rounded-lg px-2 py-0.5 z-10"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(6px)",
          color: accent,
          border: `1.5px solid ${accent}35`,
          boxShadow: `0 2px 10px ${accent}25`,
          fontSize: "clamp(12px, 1.5vw, 19px)",
          minWidth: 26,
          textAlign: "center",
        }}
      >
        {n}
      </div>

      {/* Accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: accent }}
      />

      {/* Name + tag — bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-2.5 pb-2 pt-4 z-10">
        <div
          className="font-body font-black text-white leading-tight"
          style={{ fontSize: "clamp(9px, 1.1vw, 13px)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
        >
          {name}
        </div>
        <div
          className="font-body font-bold mt-0.5 px-1.5 py-0.5 rounded-full inline-block"
          style={{
            fontSize: "clamp(7px, 0.75vw, 9px)",
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(4px)",
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          {tag}
        </div>
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
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(217,119,6,0.09)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.07)" }} />
      <div className="absolute top-[40%] left-[38%] w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.05)" }} />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full h-full flex flex-col px-4 md:px-7 pt-3 pb-3 gap-2"
      >
        {/* ── HEADER ROW ── */}
        <motion.div
          variants={item}
          className="flex items-center justify-between gap-4 flex-shrink-0"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
              <p
                className="font-accent uppercase font-semibold tracking-[4px]"
                style={{ fontSize: "clamp(8px, 0.85vw, 11px)", color: LT.amber }}
              >
                Attachment Fleet
              </p>
              <div className="h-[2px] w-5 rounded" style={{ background: LT.amber + "80" }} />
            </div>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(22px, 4.2vw, 52px)", color: LT.text }}
            >
              ATTACHMENT{" "}
              <span style={{ WebkitTextStroke: `2px ${LT.amber}`, color: "transparent" }}>
                VEHICLES
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="w-10 h-[2.5px] rounded-full mt-1.5 origin-left"
              style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }}
            />
          </div>

          {/* Grand total pill */}
          <div
            className="flex-shrink-0 flex items-center gap-3 rounded-2xl px-4 py-2"
            style={{
              background: LT.surface,
              border: `1.5px solid ${LT.amber}30`,
              boxShadow: LT.shadowMd,
            }}
          >
            <div className="text-center">
              <div
                className="font-display leading-none"
                style={{ fontSize: "clamp(26px, 3.8vw, 48px)", color: LT.amber }}
              >
                {total}
              </div>
              <div
                className="font-body font-semibold"
                style={{ fontSize: "clamp(8px, 0.8vw, 11px)", color: LT.textMuted }}
              >
                Total Vehicles
              </div>
            </div>
            <div
              className="flex flex-col gap-1 pl-3"
              style={{ borderLeft: `1px solid ${LT.amber}25` }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: LT.amber }} />
                <span
                  className="font-body font-medium"
                  style={{ fontSize: "clamp(9px, 0.85vw, 11px)", color: LT.textMuted }}
                >
                  {suv} SUV / MUV
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2563eb" }} />
                <span
                  className="font-body font-medium"
                  style={{ fontSize: "clamp(9px, 0.85vw, 11px)", color: LT.textMuted }}
                >
                  {sedan} Sedans
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── VEHICLE GRID: 4 cols × 2 rows ── */}
        <div className="flex-1 min-h-0 flex flex-col gap-2">

          {/* Row 1 */}
          <div
            className="flex-1 min-h-0"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "0.5rem",
            }}
          >
            {row1.map((v, i) => (
              <VehicleCard key={`r1-${i}`} {...v} />
            ))}
          </div>

          {/* Row 2 */}
          <div
            className="flex-1 min-h-0"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "0.5rem",
            }}
          >
            {row2.map((v, i) => (
              <VehicleCard key={`r2-${i}`} {...v} />
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
}