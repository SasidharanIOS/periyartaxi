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

/* ── Car image data ── */
const suvList = [
  { name: "Innova",  count: 12, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg", tag: "7-Seater MPV", accent: "#d97706" },
  { name: "Ertiga",  count: 7,  img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/69058e1a5606b5cb853028ce61bbc0e9d185eca5.jpg", tag: "7-Seater MUV", accent: "#ea580c" },
  { name: "Xylo",   count: 5,  img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/23c63a31fa0c12b7374f7da29062928ceb2cdb50.jpg", tag: "8-Seater SUV", accent: "#16a34a" },
  { name: "Eco",    count: 5,  img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/39746d43e92ac537fa1c9d13c29751282f8816b4.jpg", tag: "Van / Cargo",  accent: "#2563eb" },
  { name: "Tavera", count: 3,  img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/1d05f5a0f4c4ba22ecb10fdb26f7282ecd0b4441.jpg", tag: "8-Seater MUV", accent: "#7c3aed" },
];

const sedanList = [
  { name: "Swift Dzire",  count: 7, img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e33d3b5af3b1ce55593ec7a8694139181aee2d7b.jpg", tag: "Compact Sedan", accent: "#dc2626" },
  { name: "Honda Amaze",  count: 2, img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Honda_Amaze_front_view_%28cropped%29.jpg",                 tag: "Sub-Compact",  accent: "#0d9488" },
  { name: "Hyundai Aura", count: 3, img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8b4934768f7799b490538790c6b7320acb805344.jpg", tag: "Compact Sedan", accent: "#7c3aed" },
];

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
      {/* Image fills whole card */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        style={{ objectPosition: "center" }}
      />

      {/* ✅ Only thin dark scrim at bottom — full color image */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "55%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.60) 100%)",
        }}
      />

      {/* Count badge — top right, white pill */}
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

      {/* Accent top bar on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
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

/* ── Section Header ── */
function SectionHeader({ title, subtitle, count, accent, accentBg }) {
  return (
    <motion.div
      variants={item}
      className="flex items-center justify-between flex-shrink-0"
    >
      <div>
        {/* Accent rule + title */}
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-5 h-[2.5px] rounded-full" style={{ background: accent }} />
          <h3
            className="font-display leading-none"
            style={{ color: LT.text, fontSize: "clamp(15px, 2vw, 26px)" }}
          >
            {title}
          </h3>
        </div>
        <p
          className="font-body"
          style={{ fontSize: "clamp(8px, 0.8vw, 11px)", color: LT.textMuted }}
        >
          {subtitle}
        </p>
      </div>

      {/* Count pill */}
      <div
        className="rounded-xl px-2.5 py-1 flex items-center gap-1"
        style={{
          background: accentBg,
          border: `1.5px solid ${accent}30`,
          boxShadow: `0 2px 10px ${accent}18`,
        }}
      >
        <span
          className="font-display leading-none"
          style={{ color: accent, fontSize: "clamp(17px, 2.2vw, 30px)" }}
        >
          {count}
        </span>
        <span
          className="font-body font-semibold"
          style={{ fontSize: "clamp(8px, 0.8vw, 10px)", color: LT.textMuted }}
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
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(217,119,6,0.09)" }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.07)" }}
      />
      <div className="absolute top-[40%] left-[38%] w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.05)" }}
      />

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

          {/* Grand total pill — white card */}
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

        {/* ── TWO COLUMNS ── */}
        <div className="flex-1 grid grid-cols-2 gap-4 min-h-0 overflow-hidden">

          {/* LEFT: SUV / MUV */}
          <div className="flex flex-col gap-2 min-h-0">
            <SectionHeader
              title="SUV / MUV"
              subtitle="Premium comfort — 5 to 8 seaters"
              count={suv}
              accent="#d97706"
              accentBg="#fef3c7"
            />
            <div className="flex-shrink-0 w-full h-px" style={{ background: "rgba(217,119,6,0.15)" }} />
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
                <VehicleCard key={i} {...v} />
              ))}
              <div />
            </div>
          </div>

          {/* RIGHT: Sedan */}
          <div className="flex flex-col gap-2 min-h-0">
            <SectionHeader
              title="SEDAN"
              subtitle="Economy & comfort rides"
              count={sedan}
              accent="#2563eb"
              accentBg="#dbeafe"
            />
            <div className="flex-shrink-0 w-full h-px" style={{ background: "rgba(37,99,235,0.15)" }} />
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
                <VehicleCard key={i} {...v} />
              ))}

              {/* Equation card — 4th slot, light style */}
              <motion.div
                variants={item}
                className="relative rounded-xl overflow-hidden w-full h-full"
                style={{
                  background: LT.surface,
                  border: `1.5px solid ${LT.amber}22`,
                  boxShadow: LT.shadowMd,
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-0.5 px-2 text-center">
                  {[
                    { val: "32", label: "SUV/MUV", color: "#d97706"  },
                    { val: "+",  label: "",         color: LT.textFaint },
                    { val: "12", label: "Sedan",    color: "#2563eb"  },
                    { val: "=",  label: "",         color: LT.textFaint },
                    { val: "44", label: "Total",    color: LT.text    },
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col items-center leading-tight">
                      <span
                        className="font-display leading-none"
                        style={{
                          color: s.color,
                          fontSize:
                            s.label === "Total"
                              ? "clamp(19px, 2.6vw, 32px)"
                              : s.val === "+" || s.val === "="
                              ? "clamp(10px, 1.2vw, 15px)"
                              : "clamp(15px, 1.9vw, 24px)",
                        }}
                      >
                        {s.val}
                      </span>
                      {s.label && (
                        <span
                          className="font-body font-semibold"
                          style={{ fontSize: "clamp(7px, 0.7vw, 9px)", color: LT.textMuted }}
                        >
                          {s.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Decorative accent corner */}
                <div
                  className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl opacity-20"
                  style={{ background: `linear-gradient(135deg, ${LT.amber}, transparent)` }}
                />
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}