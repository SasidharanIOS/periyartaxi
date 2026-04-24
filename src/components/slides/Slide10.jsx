import React from "react";
import { motion } from "framer-motion";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaTaxi } from "react-icons/fa";

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
  shadowLg:  "0 16px 44px rgba(0,0,0,0.13)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const contacts = [
  {
    icon: <MdPhone size={24} />,
    label: "Phone",
    value: "80123 57078",
    link: "tel:8012357078",
    iconColor: "#d97706",
    iconBg:    "#fef3c7",
    accent:    "#d97706",
  },
  {
    icon: <FaWhatsapp size={24} />,
    label: "WhatsApp",
    value: "80123 57078, 94440 22287",
    link: "https://wa.me/918012357078 , https://wa.me/919444022287",
    iconColor: "#16a34a",
    iconBg:    "#dcfce7",
    accent:    "#16a34a",
  },
  {
    icon: <MdEmail size={24} />,
    label: "Email",
    value: "periyarcalltaxi@gmail.com",
    link: "mailto:periyarcalltaxi@gmail.com",
    iconColor: "#dc2626",
    iconBg:    "#fee2e2",
    accent:    "#dc2626",
  },
  {
    icon: <MdLocationOn size={24} />,
    label: "Address",
    value: "No.6, Vengaiyar Thottam, Near Amirtha Paal Pannai,\nKolampalayam, Erode – 638002",
    link: "https://maps.google.com/?q=Erode,Tamil+Nadu",
    iconColor: "#2563eb",
    iconBg:    "#dbeafe",
    accent:    "#2563eb",
  },
];

const services = [
  "Corporate Contracts",
  "Event Transportation",
  "Airport Trips",
  "Bulk Bookings",
  "Monthly Services",
  "Acting Drivers",
];

export default function Slide10() {
  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-stretch"
      style={{ background: LT.bg }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-12%] right-[-8%] w-72 h-72 rounded-full opacity-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div className="absolute bottom-[-12%] left-[-6%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%)", filter: "blur(65px)" }}
      />
      <div className="absolute top-[35%] left-[2%] w-44 h-44 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", filter: "blur(50px)" }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* MAIN CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full flex flex-col px-5 md:px-8 py-4 md:py-5 gap-4"
      >
        {/* ── HEADER ── */}
        <motion.div variants={item} className="flex items-center justify-center gap-3">
          <FaTaxi
            className="flex-shrink-0"
            style={{ fontSize: "clamp(30px, 5vw, 50px)", color: LT.amber }}
          />
          <div>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(44px, 8.5vw, 104px)", color: LT.text }}
            >
              CONTACT{" "}
              <span style={{ WebkitTextStroke: `2.5px ${LT.amber}`, color: "transparent" }}>
                US
              </span>
            </h2>
            <p
              className="font-body font-semibold leading-tight"
              style={{ fontSize: "clamp(11px, 1.5vw, 16px)", color: LT.textMuted }}
            >
              Corporate • Events • Airport Trips • Bulk Bookings
            </p>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          variants={item}
          className="w-full rounded-full"
          style={{ height: "1.5px", background: `linear-gradient(90deg, transparent, ${LT.amber}50, transparent)` }}
        />

        {/* GRID: Left contacts | Right CTA */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 min-h-0">

          {/* LEFT: Contact Cards */}
          <motion.div variants={item} className="flex flex-col gap-2.5">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.link || undefined}
                target={c.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={c.link ? { x: 4, scale: 1.012 } : {}}
                whileTap={c.link ? { scale: 0.98 } : {}}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200"
                style={{
                  background: LT.surface,
                  border: `1.5px solid ${c.accent}22`,
                  boxShadow: LT.shadowMd,
                  cursor: c.link ? "pointer" : "default",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent left bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
                  style={{ background: c.accent }}
                />

                {/* Icon badge */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: c.iconBg,
                    border: `1.5px solid ${c.accent}30`,
                    color: c.iconColor,
                    boxShadow: `0 3px 10px ${c.accent}18`,
                  }}
                >
                  {c.icon}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div
                    className="font-accent uppercase tracking-widest font-semibold"
                    style={{ fontSize: "clamp(8px, 0.9vw, 10px)", color: LT.textFaint }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="font-body font-bold leading-snug whitespace-pre-line"
                    style={{ fontSize: "clamp(12px, 1.6vw, 17px)", color: LT.text }}
                  >
                    {c.value}
                  </div>
                </div>

                {/* Arrow */}
                {c.link && (
                  <div
                    className="ml-auto flex-shrink-0 text-lg font-bold"
                    style={{ color: c.accent + "80" }}
                  >
                    ›
                  </div>
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* RIGHT: CTA Panel */}
          <motion.div variants={item} className="flex flex-col gap-3">

            {/* Big number CTA card */}
            <div
              className="flex-1 rounded-2xl flex flex-col items-center justify-center text-center px-5 py-5 relative overflow-hidden"
              style={{
                background: LT.text,
                boxShadow: LT.shadowLg,
              }}
            >
              {/* Subtle amber glow behind number */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 rounded-full pointer-events-none"
                style={{ background: `${LT.amber}12`, filter: "blur(40px)" }}
              />

              {/* Dot pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              <p
                className="font-accent uppercase tracking-[5px] relative z-10"
                style={{ fontSize: "clamp(9px, 1vw, 12px)", color: `${LT.amber}99` }}
              >
                Available 24 / 7
              </p>

              <div
                className="font-display leading-none my-2 relative z-10"
                style={{
                  fontSize: "clamp(34px, 6.5vw, 76px)",
                  color: LT.amber,
                  filter: `drop-shadow(0 0 20px ${LT.amber}50)`,
                }}
              >
                80123 57078
              </div>

              <p
                className="font-body relative z-10"
                style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: "rgba(255,255,255,0.35)" }}
              >
                Call or WhatsApp anytime
              </p>

              {/* Call Now button */}
              <motion.a
                href="tel:8012357078"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-full font-body font-black"
                style={{
                  background: `linear-gradient(135deg, ${LT.amber} 0%, #f59e0b 100%)`,
                  color: "#fff",
                  padding: "clamp(10px,1.4vw,14px) clamp(24px,3vw,40px)",
                  fontSize: "clamp(12px, 1.5vw, 17px)",
                  boxShadow: `0 4px 20px ${LT.amber}50`,
                  textDecoration: "none",
                }}
              >
                <MdPhone size={19} />
                CALL NOW
              </motion.a>

              {/* WhatsApp button */}
              <motion.a
                href="https://wa.me/918012357078"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 mt-2.5 inline-flex items-center gap-2 rounded-full font-body font-bold text-white"
                style={{
                  background: "#16a34a",
                  padding: "clamp(8px,1.1vw,12px) clamp(20px,2.5vw,34px)",
                  fontSize: "clamp(11px, 1.3vw, 15px)",
                  boxShadow: "0 4px 16px rgba(22,163,74,0.35)",
                  textDecoration: "none",
                }}
              >
                <FaWhatsapp size={17} />
                WHATSAPP US
              </motion.a>
            </div>

            {/* Services tags */}
            <div
              className="rounded-2xl px-4 py-3"
              style={{
                background: LT.surface,
                border: `1.5px solid ${LT.amber}22`,
                boxShadow: LT.shadowMd,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-[2px] rounded" style={{ background: LT.amber + "80" }} />
                <p
                  className="font-accent uppercase tracking-[4px] font-semibold"
                  style={{ fontSize: "clamp(8px, 0.9vw, 11px)", color: LT.amber }}
                >
                  We Handle
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {services.map((s, i) => {
                  const tagAccents = ["#d97706","#16a34a","#2563eb","#dc2626","#7c3aed","#0d9488"];
                  const tagBgs     = ["#fef3c7","#dcfce7","#dbeafe","#fee2e2","#ede9fe","#ccfbf1"];
                  return (
                    <span
                      key={s}
                      className="font-body font-semibold rounded-full"
                      style={{
                        background: tagBgs[i % tagBgs.length],
                        border: `1px solid ${tagAccents[i % tagAccents.length]}28`,
                        color: tagAccents[i % tagAccents.length],
                        padding: "clamp(3px,0.5vw,6px) clamp(10px,1.3vw,15px)",
                        fontSize: "clamp(9px, 1.1vw, 12px)",
                      }}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER STRIP */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-2 py-1"
        >
          <div className="flex-1 h-px rounded" style={{ background: `${LT.amber}30` }} />
          <span
            className="font-body font-semibold px-3"
            style={{ fontSize: "clamp(9px, 1vw, 12px)", color: LT.textFaint }}
          >
            PERIYAR TAXI — THE ECONOMIC CLASS — ERODE, TN
          </span>
          <div className="flex-1 h-px rounded" style={{ background: `${LT.amber}30` }} />
        </motion.div>
      </motion.div>
    </div>
  );
}