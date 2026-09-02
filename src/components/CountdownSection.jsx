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

// Top Star/Floral Emblem Divider
function TopFloralDivider() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[120px] mx-auto mb-1">
      <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
      <span className="px-2 text-[10px] text-[#EBD1A5]/75 leading-none">✻</span>
      <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
    </div>
  );
}

export function CountdownSection({ targetDateISO }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDateISO || '2026-11-28T11:00:00').getTime();
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
      {/* Top Bar Header: "06 THE COUNTDOWN" - Left Aligned with Bottom Padding */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-3 sm:pb-4 mb-2"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            06
          </span>
          <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE COUNTDOWN
          </span>
        </div>
      </motion.div>

      {/* Main Container - Centered and Vertically Balanced */}
      <div className="w-full max-w-sm mx-auto relative my-auto flex flex-col items-center text-center">
        
        {/* Top Emblem & Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <TopFloralDivider />
          
          <p className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.32em] text-[#EBD1A5]/80 font-light uppercase leading-none">
            SAVING THE DATE
          </p>

          <h2 className="font-cormorant text-3xl sm:text-4xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-tight my-0.5">
            UNTIL FOREVER
          </h2>

          <DiamondDivider className="my-1" />

          <p className="font-cormorant text-[11px] sm:text-xs tracking-[0.24em] text-[#EBD1A5]/80 font-light uppercase leading-none">
            28 NOVEMBER 2026
          </p>
        </motion.div>

        {/* Quiet Luxury Countdown Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="w-full max-w-[310px] sm:max-w-[330px] my-6 sm:my-7"
        >
          {/* Seamless Unified Dark Velvet Frame with Hairline Gold Border */}
          <div className="relative w-full rounded-2xl border border-[#EBD1A5]/25 bg-gradient-to-b from-[#1C0408]/90 via-[#140205]/95 to-[#0D0103]/90 shadow-[0_12px_32px_rgba(0,0,0,0.7)] backdrop-blur-md p-4 sm:p-5">
            
            {/* Top Micro-Flourish */}
            <div className="flex justify-center mb-3">
              <span className="text-[8px] text-[#EBD1A5]/50 leading-none">✦</span>
            </div>

            {/* 4 Clean Columns Separated by Hairline Vertical Dividers */}
            <div className="grid grid-cols-4 divide-x divide-[#EBD1A5]/15 items-center">
              {timeUnits.map((unit) => (
                <div key={unit.label} className="flex flex-col items-center justify-center px-1">
                  {/* Large Grand Serif Numeral - Subtle Refined Size */}
                  <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-light tracking-tight leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    {unit.value}
                  </span>

                  {/* Tiny Accent Line */}
                  <div className="w-4 h-[1px] bg-[#EBD1A5]/25 my-1.5" />

                  {/* Minimalist Unit Label */}
                  <span className="font-cormorant text-[7.5px] sm:text-[8.5px] tracking-[0.24em] text-[#EBD1A5]/70 uppercase font-light leading-none">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Subtle Coordinates / Location Note */}
            <div className="mt-4 pt-3 border-t border-[#EBD1A5]/15 flex items-center justify-center gap-2 text-[8px] sm:text-[9px] font-cormorant tracking-[0.24em] text-[#EBD1A5]/60 uppercase">
              <span>UDAIPUR</span>
              <span className="text-[6px] text-[#EBD1A5]/40">◆</span>
              <span>11:00 AM IST</span>
            </div>
          </div>
        </motion.div>

        {/* Romantic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.7, ease: "easeOut" }}
          className="space-y-1"
        >
          <DiamondDivider className="mb-2" />
          <p className="font-cormorant italic text-xs sm:text-[13px] text-[#EBD1A5]/80 font-light">
            "Every passing second brings us closer to eternity."
          </p>
        </motion.div>

      </div>

      {/* Bottom Animated Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1.15, ease: "easeOut" }}
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
