import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Diamond Divider Component matching reference
function DiamondDivider({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center w-full max-w-[190px] sm:max-w-[210px] mx-auto my-1.5 ${className}`}>
      <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
      <span className="px-2 text-[7px] text-[#EBD1A5]/60 leading-none">◆</span>
      <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
    </div>
  );
}

// Top Star/Floral Emblem Divider
function TopFloralDivider({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center w-full max-w-[120px] mx-auto my-1 ${className}`}>
      <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
      <span className="px-2 text-[9px] text-[#EBD1A5]/75 leading-none">✻</span>
      <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
    </div>
  );
}

export const VenueSection = React.memo(function VenueSection() {
  return (
    <section
      id="credits"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-7 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "06 THE FINAL CREDITS" */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-2 sm:pb-3 mb-1"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            06
          </span>
          <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE FINAL CREDITS
          </span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="w-full max-w-sm mx-auto relative my-auto flex flex-col items-center text-center space-y-2">

        {/* Invitee Message & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full space-y-1 text-center flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-cormorant text-[13.5px] sm:text-xs tracking-[0.2em] text-[#EBD1A5]/90 uppercase font-light leading-none text-center"
          >
            || Jai Shree Shyam ||
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="font-cormorant italic text-[15px] sm:text-[13px] text-[#EBD1A5]/85 font-light pt-1 leading-tight text-center"
          >
            We Cordially Invite You To Celebrate
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-cormorant text-[12px] sm:text-[10.5px] tracking-[0.26em] text-[#EBD1A5]/80 uppercase font-light pt-0.5 leading-none text-center"
          >
            THE WEDDING OF
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.48 }}
            style={{
              textAlign: 'center',
              width: '100%',
              margin: '0 auto',
              display: 'block',
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
            }}
            className="font-cormorant text-[20px] sm:text-[16.5px] text-[#EBD1A5] font-normal uppercase leading-tight pt-0.5"
          >
            APOORV & CHHAVI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-cormorant text-[13.5px] sm:text-[11px] tracking-[0.26em] text-[#EBD1A5]/85 font-light uppercase leading-none pt-0.5 text-center"
          >
            9 • 10 • 11 DECEMBER 2026
          </motion.p>
        </motion.div>

        {/* Resort Line Art Image from venue png.webp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full my-1 flex flex-col items-center text-center"
        >
          <img
            src="/images/venue png.webp"
            alt="Goa Marriott Resort & Spa"
            className="w-full max-w-[210px] sm:max-w-[230px] h-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] opacity-90 mx-auto"
          />

          <div className="mt-1 space-y-0.5 text-center w-full flex flex-col items-center">
            <h3 className="font-cormorant text-[13.5px] sm:text-[11.5px] tracking-[0.2em] pl-[0.2em] text-[#EBD1A5] font-normal uppercase leading-tight whitespace-nowrap text-center">
              GOA MARRIOTT RESORT &amp; SPA
            </h3>
            <p className="font-cormorant text-[12px] sm:text-[10px] tracking-[0.24em] pl-[0.24em] text-[#EBD1A5]/80 font-light uppercase leading-none text-center">
              PANAJI, GOA
            </p>
          </div>
        </motion.div>

        {/* Family Credits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[290px] sm:max-w-[310px] mx-auto space-y-2 text-center"
        >
          {/* Groom's Grandparents */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.65 }}
            className="space-y-0.5"
          >
            <p className="font-cormorant text-[11px] sm:text-[9.5px] tracking-[0.24em] text-[#EBD1A5]/70 uppercase font-light leading-none">
              GROOM'S GRANDPARENTS
            </p>
            <p className="font-cormorant text-[13.5px] sm:text-xs tracking-[0.12em] text-[#EBD1A5] uppercase font-normal leading-tight">
              Shri Khem Goel
            </p>
            <p className="font-cormorant text-[13.5px] sm:text-xs tracking-[0.12em] text-[#EBD1A5] uppercase font-normal leading-tight">
              Smt. Kalpana Goel
            </p>
          </motion.div>

          {/* Bride's Grandparents */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.73 }}
            className="space-y-0.5"
          >
            <p className="font-cormorant text-[11px] sm:text-[9.5px] tracking-[0.24em] text-[#EBD1A5]/70 uppercase font-light leading-none">
              BRIDE'S GRANDPARENTS
            </p>
            <p className="font-cormorant text-[13.5px] sm:text-xs tracking-[0.12em] text-[#EBD1A5] uppercase font-normal leading-tight">
              Shri Kunjbihari Falod
            </p>
            <p className="font-cormorant text-[13.5px] sm:text-xs tracking-[0.12em] text-[#EBD1A5] uppercase font-normal leading-tight">
              Smt. Beena Falod
            </p>
          </motion.div>

          {/* Groom's Parents */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.81 }}
            className="space-y-0.5"
          >
            <p className="font-cormorant text-[11px] sm:text-[9.5px] tracking-[0.24em] text-[#EBD1A5]/70 uppercase font-light leading-none">
              GROOM'S PARENTS
            </p>
            <p className="font-cormorant text-[13px] sm:text-[11.5px] tracking-[0.1em] text-[#EBD1A5] uppercase font-normal leading-tight whitespace-nowrap">
              Vikash Goel &amp; Sushma Goel
            </p>
          </motion.div>

          {/* Bride's Parents */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.89 }}
            className="space-y-0.5"
          >
            <p className="font-cormorant text-[11px] sm:text-[9.5px] tracking-[0.24em] text-[#EBD1A5]/70 uppercase font-light leading-none">
              BRIDE'S PARENTS
            </p>
            <p className="font-cormorant text-[13px] sm:text-[11.5px] tracking-[0.1em] text-[#EBD1A5] uppercase font-normal leading-tight whitespace-nowrap">
              Salil Falod &amp; Radhika Falod
            </p>
          </motion.div>
        </motion.div>

        {/* RSVP Section */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[260px] mx-auto pt-0.5 space-y-1"
        >
          <TopFloralDivider />
          <p className="font-cormorant text-[11.5px] sm:text-[10px] tracking-[0.28em] text-[#EBD1A5]/80 uppercase font-light leading-none">
            RSVP
          </p>

          <div className="space-y-0.5 text-[12.5px] sm:text-[10.5px] font-cormorant tracking-[0.12em] text-[#EBD1A5]/90 uppercase">
            <div className="flex justify-between items-center w-full">
              <span className="font-light">Vinay Goel</span>
              <a href="tel:+9779802022887" className="hover:text-gold-300 transition-colors font-sans text-[11px] sm:text-[9px] tracking-wider text-right">
                +977 9802022887
              </a>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="font-light">Vishal Goel</span>
              <a href="tel:+919799299320" className="hover:text-gold-300 transition-colors font-sans text-[11px] sm:text-[9px] tracking-wider text-right">
                +91 9799299320
              </a>
            </div>
          </div>
        </motion.div>

        {/* Sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="w-full pt-1 space-y-0.5"
        >
          <p className="font-cormorant text-[10.5px] sm:text-[9px] tracking-[0.26em] text-[#EBD1A5]/75 uppercase font-light leading-none">
            WITH WARM REGARDS
          </p>
          <p className="font-cormorant italic text-[17px] sm:text-base text-[#EBD1A5] font-normal leading-tight">
            The Goel & Falod Families
          </p>
          <TopFloralDivider className="mt-1" />
        </motion.div>

      </div>

      {/* Bottom Animated Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mt-2 w-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#EBD1A5]/80"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
});
