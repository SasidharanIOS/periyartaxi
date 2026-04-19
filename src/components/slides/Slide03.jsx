import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   LIGHT THEME TOKENS
───────────────────────────────────────────── */
const LT = {
  bg:          "#f5f3ee",
  surface:     "#ffffff",
  border:      "rgba(0,0,0,0.07)",
  text:        "#1a1814",
  textMuted:   "#6b6860",
  amber:       "#d97706",
  shadow:      "0 2px 12px rgba(0,0,0,0.07)",
  shadowMd:    "0 8px 28px rgba(0,0,0,0.10)",
};

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const headerVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.86, filter: "blur(5px)" },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: {
      delay: i * 0.09,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 0.45 },
      filter: { duration: 0.35 },
    },
  }),
  exit: { opacity: 0, scale: 0.92, y: -16, transition: { duration: 0.25 } },
};

const emojiVariants = {
  hidden: { scale: 0, rotate: -25, opacity: 0 },
  show: (i) => ({
    scale: 1, rotate: 0, opacity: 1,
    transition: { delay: i * 0.09 + 0.28, type: "spring", stiffness: 360, damping: 16 },
  }),
};

const underlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  show: (i) => ({
    scaleX: 1,
    transition: { delay: i * 0.09 + 0.42, duration: 0.38, ease: "easeOut" },
  }),
};

const shimmerVariants = {
  hidden: { x: "-100%", opacity: 0 },
  show: (i) => ({
    x: "220%",
    opacity: [0, 0.5, 0],
    transition: { delay: i * 0.09 + 0.18, duration: 0.65, ease: "easeInOut" },
  }),
};

const labelContainerVariants = {
  hidden: {},
  show: (i) => ({ transition: { staggerChildren: 0.06, delayChildren: i * 0.09 + 0.32 } }),
};
const wordVariants = {
  hidden: { opacity: 0, y: 7 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  { image: "/corporatetravel.png",         label: "Corporate & Business Travel",  accent: "#0ea5e9", emoji: "🏢" },
  { image: "/wedding.png",                 label: "Wedding & Event Transport",    accent: "#ec4899", emoji: "💒" },
  { image: "/localtrips.png",              label: "Local Trips",                  accent: "#16a34a", emoji: "📍" },
  { image: "/outstationtrips.png",         label: "Outstation Trips",             accent: "#7c3aed", emoji: "✈️" },
  { image: "/monthlycontractservices.png", label: "Monthly Contract Services",    accent: "#ea580c", emoji: "📅" },
  { image: "/valetparking.png",            label: "Valet Parking Services",       accent: "#d97706", emoji: "🅿️" },
  { image: "/actingdriverservices.png",    label: "Acting Driver Services",       accent: "#0d9488", emoji: "👨‍✈️" },
  { image: "/tempocoachbusservices.png",   label: "Tempo / Coach / Bus Services", accent: "#dc2626", emoji: "🚌" },
];

/* ─────────────────────────────────────────────
   3D TILT CARD
───────────────────────────────────────────── */
function TiltCard({ children, accent, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [8, -8]);
  const rotateY = useTransform(x, [-80, 80], [-8, 8]);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    x.set(0); y.set(0); setHovered(false);
  };

  return (
    <motion.div
      style={{ perspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      className="w-full h-full"
    >
      <motion.div
        custom={index}
        variants={cardVariants}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          border: `1.5px solid ${hovered ? accent + "55" : LT.border}`,
          background: LT.surface,
          boxShadow: hovered
            ? `0 16px 40px ${accent}28, 0 4px 16px rgba(0,0,0,0.09)`
            : LT.shadowMd,
        }}
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative rounded-2xl overflow-hidden flex flex-col h-full cursor-default"
      >
        {children}

        {/* Shimmer sweep on entrance */}
        <motion.div
          custom={index}
          variants={shimmerVariants}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 38%, ${accent}40 50%, transparent 62%)`,
            zIndex: 10,
          }}
        />

        {/* Hover top glow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${accent}12 0%, transparent 65%)`,
            zIndex: 3,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ACTIVE DOT
───────────────────────────────────────────── */
function ActiveDot({ accent, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute top-2 left-2 w-2 h-2 rounded-full z-20"
          style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}90` }}
        />
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   MAIN SLIDE
───────────────────────────────────────────── */
export default function Slide03() {
  const [activeCard, setActiveCard] = useState(null);
  const [allVisible, setAllVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setAllVisible(true),
      200 + services.length * 100 + 650
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-12%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div className="absolute bottom-[-10%] left-[-6%] w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.09) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div className="absolute top-[35%] left-[38%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", filter: "blur(55px)" }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* MAIN CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col h-full px-8 md:px-14 pt-6 pb-14"
      >
        {/* HEADER */}
        <motion.div variants={headerVariants} className="mb-4 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              className="h-[2px] w-8 rounded origin-left"
              style={{ background: LT.amber + "88" }}
            />
            <p
              className="font-accent uppercase tracking-[8px] font-semibold"
              style={{ color: LT.amber, fontSize: "clamp(9px, 1vw, 13px)" }}
            >
              What We Offer
            </p>
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              className="h-[2px] w-8 rounded origin-left"
              style={{ background: LT.amber + "88" }}
            />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.12, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-none"
              style={{ fontSize: "clamp(44px, 8vw, 96px)", color: LT.text }}
            >
              OUR{" "}
              <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
                SERVICES
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.38, duration: 0.5, ease: "easeOut" }}
            className="w-20 h-[4px] rounded-full mt-2 origin-left"
            style={{ background: `linear-gradient(90deg, ${LT.amber}, transparent)` }}
          />
        </motion.div>

        {/* 4×2 SERVICE GRID */}
        <div
          className="flex-1 grid grid-cols-4 grid-rows-2 gap-3 min-h-0"
          style={{ perspective: "1200px" }}
        >
          {services.map((svc, i) => (
            <TiltCard key={i} accent={svc.accent} index={i}>
              <ActiveDot accent={svc.accent} visible={activeCard === i} />

              {/* Image — fills full card top, NO cream overlay */}
              <div className="relative w-full flex-1 overflow-hidden min-h-0">
                <motion.img
                  src={svc.image}
                  alt={svc.label}
                  loading="lazy"
                  initial={{ scale: 1.14, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.09 + 0.22, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fb = e.currentTarget.nextElementSibling;
                    if (fb) fb.style.display = "flex";
                  }}
                />

                {/* Emoji fallback */}
                <div
                  className="absolute inset-0 items-center justify-center text-5xl"
                  style={{ display: "none", background: `${svc.accent}15` }}
                >
                  {svc.emoji}
                </div>

                {/* ✅ Thin dark scrim ONLY at very bottom — just enough for text legibility */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.52) 100%)",
                  }}
                />

                {/* Emoji badge — top right */}
                <motion.div
                  custom={i}
                  variants={emojiVariants}
                  className="absolute top-2 right-2 w-8 h-8 rounded-lg flex items-center justify-center text-base z-10"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(6px)",
                    border: `1px solid ${svc.accent}30`,
                    boxShadow: `0 2px 8px ${svc.accent}22`,
                  }}
                >
                  {svc.emoji}
                </motion.div>

                {/* Number badge — bottom left, white on the dark scrim */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.09 + 0.52, duration: 0.3 }}
                  className="absolute bottom-7 left-2 font-display leading-none z-10"
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 28px)",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
              </div>

              {/* Label + underline — white card strip below image */}
              <div
                className="flex-shrink-0 px-3 pb-3 pt-2 relative z-10"
                style={{
                  background: LT.surface,                        // ✅ solid white strip
                  borderTop: `1px solid ${svc.accent}18`,
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <motion.div
                  custom={i}
                  variants={labelContainerVariants}
                  className="flex flex-wrap gap-x-1"
                >
                  {svc.label.split(" ").map((word, wi) => (
                    <motion.span
                      key={wi}
                      variants={wordVariants}
                      className="font-body font-bold leading-snug"
                      style={{
                        fontSize: "clamp(10px, 1.1vw, 13px)",
                        color: activeCard === i ? svc.accent : LT.text,
                        transition: "color 0.22s ease",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  custom={i}
                  variants={underlineVariants}
                  className="mt-1.5 h-[2.5px] w-7 rounded-full"
                  style={{ backgroundColor: svc.accent, transformOrigin: "left" }}
                />
              </div>

              {/* Corner glow */}
              <motion.div
                animate={{
                  opacity: activeCard === i ? 0.18 : 0.07,
                  scale: activeCard === i ? 1.2 : 1,
                }}
                transition={{ duration: 0.35 }}
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                style={{ background: svc.accent }}
              />
            </TiltCard>
          ))}
        </div>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: services.length * 0.09 + 0.75, duration: 0.5 }}
          className="flex-shrink-0 mt-3 font-body text-center font-medium"
          style={{ color: LT.textMuted, fontSize: "clamp(10px, 1.1vw, 13px)" }}
        >
          End-to-end travel solutions for personal, corporate & event transportation needs
        </motion.p>
      </motion.div>

      {/* Flash on load complete */}
      <AnimatePresence>
        {allVisible && (
          <motion.div
            key="flash"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(217,119,6,0.10) 0%, transparent 65%)",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}