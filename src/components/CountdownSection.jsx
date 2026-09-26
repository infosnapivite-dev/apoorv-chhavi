import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Diamond Divider Component
function DiamondDivider({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center w-full max-w-[190px] sm:max-w-[210px] mx-auto my-1.5 ${className}`}>
      <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
      <span className="px-2 text-[7px] text-[#EBD1A5]/60 leading-none">◆</span>
      <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
    </div>
  );
}

// Minimalist Palm Tree SVG matching the PDF reference
function PalmTreeIcon({ className = "w-5 h-5 text-[#EBD1A5]/70" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22v-9" />
      <path d="M12 13c-1.5-2-3-3-6-3 0 0 1-2 4-1" />
      <path d="M12 13c1.5-2 3-3 6-3 0 0-1-2-4-1" />
      <path d="M12 11c-1-3-3-4-5-5 0 0 1.5-.5 3.5 1.5" />
      <path d="M12 11c1-3 3-4 5-5 0 0-1.5-.5-3.5 1.5" />
      <path d="M12 9c0-3-.5-5-2-6 0 0 1.5-.2 2.5 2.5" />
      <path d="M12 9c0-3 .5-5 2-6 0 0-1.5-.2-2.5 2.5" />
    </svg>
  );
}

export function CountdownSection({ targetDateISO = '2026-12-09T19:00:00' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDateISO).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const twoDigitDays = String(days > 99 ? days % 100 : days).padStart(2, '0');

      setTimeLeft({
        days: twoDigitDays,
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateISO]);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-7 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "05 THE COUNTDOWN" */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-3 sm:pb-4 mb-2"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            05
          </span>
          <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE COUNTDOWN
          </span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="w-full max-w-sm mx-auto relative my-auto flex flex-col items-center text-center">
        
        {/* Top Emblem & Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.32em] text-[#EBD1A5]/80 font-light uppercase leading-none"
          >
            SAVING THE DATE
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="w-full"
          >
            <DiamondDivider className="my-2" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="font-cormorant text-3xl sm:text-4xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-tight my-0.5"
          >
            UNTIL
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.48 }}
            className="font-cormorant text-3xl sm:text-4xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-tight my-0.5"
          >
            FOREVER
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.56 }}
            className="w-full"
          >
            <DiamondDivider className="my-2" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="font-cormorant text-[11px] sm:text-xs tracking-[0.24em] text-[#EBD1A5]/80 font-light uppercase leading-none"
          >
            9 • 10 • 11 DECEMBER 2026
          </motion.p>
        </motion.div>

        {/* Quiet Luxury Countdown Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 14 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[340px] min-[380px]:max-w-[355px] sm:max-w-[370px] mx-auto my-4 sm:my-5"
        >
          <div className="relative w-full rounded-[18px] border border-[#EBD1A5]/35 bg-gradient-to-b from-[#1C0408]/95 via-[#140205]/95 to-[#0D0103]/95 shadow-[0_12px_32px_rgba(0,0,0,0.7)] backdrop-blur-md px-1.5 sm:px-3 pt-3 pb-3.5 sm:pt-3.5 sm:pb-4">
            
            {/* Top Palm Tree Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex justify-center mb-2 sm:mb-2.5"
            >
              <PalmTreeIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#EBD1A5]/90" />
            </motion.div>

            {/* 4 Clean Columns Separated by Hairline Vertical Dividers */}
            <div className="grid grid-cols-4 divide-x divide-[#EBD1A5]/25 w-full items-center">
              {timeUnits.map((unit, idx) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.65 + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center px-0.5"
                >
                  <span className="font-cormorant text-[25px] min-[360px]:text-[27px] sm:text-[30px] text-[#F5EAD4] font-normal leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                    {unit.value}
                  </span>

                  <span className="font-sans text-[6.5px] min-[360px]:text-[7px] sm:text-[7.5px] tracking-[0.14em] pl-[0.14em] text-[#EBD1A5]/90 uppercase font-semibold leading-none mt-2 whitespace-nowrap">
                    {unit.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* GOA IS CALLING Headline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-0.5 mt-1 sm:mt-2 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.8 }}
            className="font-cormorant text-2xl sm:text-3xl tracking-[0.26em] pl-[0.26em] text-[#EBD1A5] uppercase font-light leading-tight text-center"
          >
            GOA
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.88 }}
            className="font-cormorant text-xs sm:text-sm tracking-[0.28em] pl-[0.28em] text-[#EBD1A5]/85 uppercase font-light leading-tight text-center"
          >
            IS CALLING.
          </motion.p>
        </motion.div>

        {/* Romantic Tagline (Matching 3-line Reference) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 sm:mt-4 text-center"
        >
          <p className="font-cormorant italic text-xs sm:text-[13px] tracking-[0.06em] text-[#EBD1A5]/80 font-light leading-relaxed text-center">
            “Every passing second<br />
            brings us closer<br />
            to forever.”
          </p>
        </motion.div>

      </div>

      {/* Bottom Animated Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
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
}
