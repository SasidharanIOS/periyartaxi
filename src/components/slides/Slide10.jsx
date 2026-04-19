import React from "react";
import { motion } from "framer-motion";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaTaxi } from "react-icons/fa";

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
    icon: <MdPhone size={26} />,
    label: "Phone",
    value: "80123 57078",
    link: "tel:8012357078",
    bg: "#1a1a1a",
    iconColor: "#F5B800",
  },
  {
    icon: <FaWhatsapp size={26} />,
    label: "WhatsApp",
    value: "80123 57078",
    link: "https://wa.me/918012357078",
    bg: "#1a1a1a",
    iconColor: "#25D366",
  },
  {
    icon: <MdEmail size={26} />,
    label: "Email",
    value: "periyaselvaraj@gmail.com",
    link: "mailto:periyaselvaraj@gmail.com",
    bg: "#1a1a1a",
    iconColor: "#EA4335",
  },
  {
    icon: <MdLocationOn size={26} />,
    label: "Address",
    value: "6, Nengaiyar Thottam, Kolumpalayam,\nPoolpannai Road, Erode – 638002",
    link: "https://maps.google.com/?q=Erode,Tamil+Nadu",
    bg: "#1a1a1a",
    iconColor: "#4285F4",
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
    <div className="w-full h-full bg-taxi-yellow relative overflow-hidden flex items-stretch">

      {/* ── Decorative blobs ── */}
      <div className="absolute top-[-12%] right-[-8%] w-72 h-72 bg-taxi-yellow-dark rounded-full opacity-35 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-12%] left-[-6%] w-80 h-80 bg-taxi-yellow-dark rounded-full opacity-25 animate-float pointer-events-none" />
      <div className="absolute top-[35%] left-[2%] w-44 h-44 bg-white rounded-full opacity-10 animate-float-slow pointer-events-none" />

      {/* ── Dot pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full flex flex-col px-5 md:px-8 py-4 md:py-5 gap-4"
      >

        {/* ── HEADER ── */}
        <motion.div variants={item} className="flex items-center justify-center gap-3">
          <FaTaxi
            className="text-taxi-black animate-bounce-gentle flex-shrink-0"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          />
          <div>
            <h2
              className="font-display text-taxi-black leading-none"
              style={{ fontSize: "clamp(48px, 9vw, 108px)" }}
            >
              CONTACT US
            </h2>
            <p
              className="font-body text-taxi-black/65 font-semibold leading-tight"
              style={{ fontSize: "clamp(11px, 1.6vw, 17px)" }}
            >
              Corporate • Events • Airport Trips • Bulk Bookings
            </p>
          </div>
        </motion.div>

        {/* ── DIVIDER ── */}
        <motion.div variants={item} className="w-full h-[2px] bg-taxi-black/15 rounded-full" />

        {/* ── GRID: Left contacts | Right CTA ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 min-h-0">

          {/* ── LEFT: Contact Cards ── */}
          <motion.div variants={item} className="flex flex-col gap-2.5">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.link || undefined}
                target={c.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={c.link ? { x: 5, scale: 1.015 } : {}}
                whileTap={c.link ? { scale: 0.98 } : {}}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200"
                style={{
                  background: "rgba(0,0,0,0.10)",
                  border: "1.5px solid rgba(0,0,0,0.13)",
                  backdropFilter: "blur(6px)",
                  cursor: c.link ? "pointer" : "default",
                }}
              >
                {/* Icon badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ background: c.bg }}
                >
                  <span style={{ color: c.iconColor }}>{c.icon}</span>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div
                    className="font-accent text-taxi-black/55 uppercase tracking-widest"
                    style={{ fontSize: "clamp(9px, 1vw, 11px)" }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="font-body font-bold text-taxi-black leading-snug whitespace-pre-line"
                    style={{ fontSize: "clamp(13px, 1.8vw, 18px)" }}
                  >
                    {c.value}
                  </div>
                </div>

                {/* Arrow indicator for links */}
                {c.link && (
                  <div className="ml-auto text-taxi-black/30 flex-shrink-0 text-lg">›</div>
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* ── RIGHT: CTA Panel ── */}
          <motion.div variants={item} className="flex flex-col gap-3">

            {/* Big number CTA */}
            <div
              className="flex-1 rounded-2xl flex flex-col items-center justify-center text-center px-5 py-5 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #111111 0%, #1c1c1c 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              {/* Subtle yellow glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-taxi-yellow/8 rounded-full blur-3xl pointer-events-none" />

              <p
                className="font-accent text-taxi-yellow/60 uppercase tracking-[5px] relative z-10"
                style={{ fontSize: "clamp(9px, 1vw, 12px)" }}
              >
                Available 24 / 7
              </p>

              <div
                className="font-display text-taxi-yellow leading-none my-2 relative z-10 animate-glow"
                style={{ fontSize: "clamp(38px, 7vw, 80px)" }}
              >
                80123 57078
              </div>

              <p
                className="font-body text-white/40 relative z-10"
                style={{ fontSize: "clamp(10px, 1.2vw, 13px)" }}
              >
                Call or WhatsApp anytime
              </p>

              {/* Call Now button */}
              <motion.a
                href="tel:8012357078"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-full font-body font-black text-taxi-black"
                style={{
                  background: "linear-gradient(135deg, #F5B800 0%, #FFD84D 100%)",
                  padding: "clamp(10px,1.5vw,14px) clamp(24px,3vw,40px)",
                  fontSize: "clamp(13px, 1.6vw, 18px)",
                  boxShadow: "0 4px 20px rgba(245,184,0,0.45)",
                }}
              >
                <MdPhone size={20} />
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
                  background: "#25D366",
                  padding: "clamp(8px,1.2vw,12px) clamp(20px,2.5vw,34px)",
                  fontSize: "clamp(12px, 1.4vw, 16px)",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                }}
              >
                <FaWhatsapp size={18} />
                WHATSAPP US
              </motion.a>
            </div>

            {/* Services tags */}
            <div
              className="rounded-2xl px-4 py-3"
              style={{
                background: "rgba(0,0,0,0.10)",
                border: "1.5px solid rgba(0,0,0,0.13)",
              }}
            >
              <p
                className="font-accent text-taxi-black/55 uppercase tracking-[4px] mb-2"
                style={{ fontSize: "clamp(9px, 1vw, 11px)" }}
              >
                We Handle
              </p>
              <div className="flex flex-wrap gap-1.5">
                {services.map((s) => (
                  <span
                    key={s}
                    className="font-body font-semibold text-taxi-black rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.12)",
                      border: "1px solid rgba(0,0,0,0.18)",
                      padding: "clamp(4px,0.6vw,6px) clamp(10px,1.4vw,16px)",
                      fontSize: "clamp(10px, 1.2vw, 13px)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── FOOTER STRIP ── */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-2 py-1"
        >
          <div className="flex-1 h-[1px] bg-taxi-black/15 rounded" />
          <span
            className="font-body text-taxi-black/50 font-semibold px-3"
            style={{ fontSize: "clamp(9px, 1.1vw, 12px)" }}
          >
            PERIYAR TAXI — THE ECONOMIC CLASS — ERODE, TN
          </span>
          <div className="flex-1 h-[1px] bg-taxi-black/15 rounded" />
        </motion.div>

      </motion.div>
    </div>
  );
}