import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Each card: slides up from below + fades in */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.82,
    rotateX: 18,
    filter: "blur(6px)",
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.11,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 0.5 },
      filter: { duration: 0.4 },
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -20,
    transition: { duration: 0.3 },
  },
};

/* Emoji pops in after card */
const emojiVariants = {
  hidden: { scale: 0, rotate: -30, opacity: 0 },
  show: (i) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: i * 0.11 + 0.3,
      type: "spring",
      stiffness: 350,
      damping: 16,
    },
  }),
};

/* Accent underline sweeps in */
const underlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  show: (i) => ({
    scaleX: 1,
    transition: {
      delay: i * 0.11 + 0.45,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

/* Spotlight shimmer sweep over card */
const shimmerVariants = {
  hidden: { x: "-100%", opacity: 0 },
  show: (i) => ({
    x: "200%",
    opacity: [0, 0.35, 0],
    transition: {
      delay: i * 0.11 + 0.2,
      duration: 0.7,
      ease: "easeInOut",
    },
  }),
};

/* Label text reveal character by character (word by word) */
const labelContainerVariants = {
  hidden: {},
  show: (i) => ({
    transition: { staggerChildren: 0.07, delayChildren: i * 0.11 + 0.35 },
  }),
};
const wordVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const services = [
  {
    image: "/corporatetravel.png",
    label: "Corporate & Business Travel",
    accent: "#F5B800",
    emoji: "🏢",
  },
  {
    image: "/wedding.png",
    label: "Wedding & Event Transport",
    accent: "#F472B6",
    emoji: "💒",
  },
  {
    image: "/localtrips.png",
    label: "Local Trips",
    accent: "#4ADE80",
    emoji: "📍",
  },
  {
    image: "/outstationtrips.png",
    label: "Outstation Trips",
    accent: "#60A5FA",
    emoji: "✈️",
  },
  {
    image: "/monthlycontractservices.png",
    label: "Monthly Contract Services",
    accent: "#FB923C",
    emoji: "📅",
  },
  {
    image: "/valetparking.png",
    label: "Valet Parking Services",
    accent: "#A78BFA",
    emoji: "🅿️",
  },
  {
    image: "/actingdriverservices.png",
    label: "Acting Driver Services",
    accent: "#2DD4BF",
    emoji: "👨‍✈️",
  },
  {
    image: "/tempocoachbusservices.png",
    label: "Tempo / Coach / Bus Services",
    accent: "#F5B800",
    emoji: "🚌",
  },
];

/* ─────────────────────────────────────────────
   3D TILT CARD (mouse-follow)
───────────────────────────────────────────── */
function TiltCard({ children, accent, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-80, 80], [-10, 10]);

  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const svc = services[index];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      style={{ perspective: 800 }}
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
          border: hovered
            ? `1px solid ${accent}65`
            : "1px solid rgba(255,255,255,0.07)",
          background: `linear-gradient(135deg, ${accent}18 0%, rgba(22,22,22,0.97) 60%)`,
          boxShadow: hovered
            ? `0 0 32px ${accent}28, 0 8px 32px rgba(0,0,0,0.5)`
            : "0 4px 20px rgba(0,0,0,0.4)",
        }}
        animate={{
          scale: hovered ? 1.04 : 1,
          transition: { type: "spring", stiffness: 260, damping: 20 },
        }}
        className="relative rounded-2xl overflow-hidden flex flex-col h-full cursor-default transition-colors duration-200"
      >
        {children}

        {/* Shimmer sweep on entrance */}
        <motion.div
          custom={index}
          variants={shimmerVariants}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${accent}55 50%, transparent 60%)`,
            zIndex: 10,
          }}
        />

        {/* Hover inner glow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${accent}14 0%, transparent 70%)`,
            zIndex: 3,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ACTIVE CARD SPOTLIGHT INDICATOR
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
          style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
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

  /* After all cards finish animating, mark complete */
  useEffect(() => {
    const timer = setTimeout(
      () => setAllVisible(true),
      200 + services.length * 130 + 650
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-taxi-black relative overflow-hidden flex flex-col">
      {/* ── Ambient glows ────────────────────────────── */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-8%] right-[-5%] w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,184,0,0.08) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,184,0,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,184,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,0,1) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col h-full px-8 md:px-14 pt-7 pb-16"
      >
        {/* ── HEADER ──────────────────────────────────── */}
        <motion.div variants={headerVariants} className="mb-5 flex-shrink-0">
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              className="h-[2px] w-8 bg-taxi-yellow/50 rounded origin-left"
            />
            <p className="font-accent uppercase tracking-[8px] text-taxi-yellow/55 text-xs md:text-sm">
              What We Offer
            </p>
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              className="h-[2px] w-8 bg-taxi-yellow/50 rounded origin-left"
            />
          </motion.div>

          {/* Heading letter-by-letter */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-taxi-yellow leading-none"
              style={{ fontSize: "clamp(48px, 9vw, 100px)" }}
            >
              OUR SERVICES
            </motion.h2>
          </div>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="w-20 h-[3px] bg-taxi-yellow rounded mt-2 origin-left"
          />
        </motion.div>

        {/* ── 4×2 SERVICE GRID ─────────────────────────── */}
        <div
          className="flex-1 grid grid-cols-4 grid-rows-2 gap-3 min-h-0"
          style={{ perspective: "1200px" }}
        >
          {services.map((svc, i) => (
            <TiltCard key={i} accent={svc.accent} index={i}>
              {/* Active dot */}
              <ActiveDot accent={svc.accent} visible={activeCard === i} />

              {/* Image fills top portion */}
              <div className="relative w-full flex-1 overflow-hidden min-h-0">
                <motion.img
                  src={svc.image}
                  alt={svc.label}
                  loading="lazy"
                  initial={{ scale: 1.15, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: i * 0.11 + 0.25,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
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
                  style={{ display: "none", background: `${svc.accent}12` }}
                >
                  {svc.emoji}
                </div>

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(
                      to bottom,
                      transparent 30%,
                      rgba(17,17,17,0.5) 62%,
                      rgba(17,17,17,0.95) 100%
                    )`,
                  }}
                />

                {/* Emoji badge — top right with spring pop */}
                <motion.div
                  custom={i}
                  variants={emojiVariants}
                  className="absolute top-2 right-2 w-8 h-8 rounded-lg flex items-center justify-center text-base z-10"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(5px)",
                    border: `1px solid ${svc.accent}35`,
                  }}
                >
                  {svc.emoji}
                </motion.div>

                {/* Number badge — bottom left */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.11 + 0.55, duration: 0.3 }}
                  className="absolute bottom-8 left-2 font-display text-2xl leading-none z-10"
                  style={{ color: `${svc.accent}55` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
              </div>

              {/* Label + accent bar */}
              <div
                className="flex-shrink-0 px-3 pb-3 pt-2 relative z-10"
                style={{
                  background: `linear-gradient(to bottom, transparent, rgba(15,15,15,0.99))`,
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Word-by-word label reveal */}
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
                        fontSize: "clamp(10px, 1.2vw, 14px)",
                        color: activeCard === i ? svc.accent : "#F0F0F0",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Animated accent underline */}
                <motion.div
                  custom={i}
                  variants={underlineVariants}
                  className="mt-1.5 h-[2px] w-7 rounded-full"
                  style={{
                    backgroundColor: svc.accent,
                    transformOrigin: "left",
                  }}
                />
              </div>

              {/* Corner glow */}
              <motion.div
                animate={{
                  opacity: activeCard === i ? 0.25 : 0.1,
                  scale: activeCard === i ? 1.15 : 1,
                }}
                transition={{ duration: 0.35 }}
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                style={{ background: svc.accent }}
              />
            </TiltCard>
          ))}
        </div>

        {/* ── FOOTER NOTE ──────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: services.length * 0.11 + 0.8, duration: 0.5 }}
          className="flex-shrink-0 mt-3 font-body text-taxi-muted text-xs md:text-sm text-center"
        >
          End-to-end travel solutions for personal, corporate & event
          transportation needs
        </motion.p>
      </motion.div>

      {/* ── ALL-VISIBLE PULSE: subtle flash when all cards loaded ── */}
      <AnimatePresence>
        {allVisible && (
          <motion.div
            key="flash"
            initial={{ opacity: 0.18 }}
            animate={{ opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(245,184,0,0.14) 0%, transparent 65%)",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}