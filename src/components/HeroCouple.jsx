import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroCouple = React.memo(function HeroCouple({ couple }) {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section
      id="couple"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-6 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "02 THE CAST" */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, delay: 0.1, ease: smoothEase }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-3 sm:pb-4 mb-2"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            02
          </span>
          <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE CAST
          </span>
        </div>
      </motion.div>

      {/* Main Vintage 35mm Filmstrip Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.0, delay: 0.2, ease: smoothEase }}
        className="w-full max-w-sm mx-auto relative flex flex-col items-center my-auto"
      >
        {/* Filmstrip Frame with Side Edge Sprocket Markings */}
        <div className="relative w-full rounded-sm bg-[#180306] border border-[#3E1119] shadow-2xl p-2.5 sm:p-3 overflow-hidden">
          {/* Left Film Strip Markings */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-1 top-0 bottom-0 flex flex-col justify-between py-3 text-[8px] font-mono text-[#EBD1A5]/40 select-none pointer-events-none tracking-tighter"
          >
            <span>KODAK</span>
            <span className="rotate-90 origin-center text-[7px]">400</span>
            <span>40</span>
            <span className="text-[7px]">▶▶</span>
            <span>41</span>
          </motion.div>

          {/* Right Film Strip Markings */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-1 top-0 bottom-0 flex flex-col justify-between py-3 text-[8px] font-mono text-[#EBD1A5]/40 select-none pointer-events-none tracking-tighter text-right"
          >
            <span>PORTRA 400</span>
            <span className="text-[7px]">▲</span>
            <span>42</span>
            <span className="rotate-90 origin-center text-[7px]">200</span>
            <span className="text-[6px]">PORTRA 400</span>
          </motion.div>

          {/* Inner Content Stack (Apoorv Photo + Starring Card + Chhavi Photo) */}
          <div className="mx-3 flex flex-col gap-1.5">
            {/* 1. Top Photo: Apoorv (The Groom) */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease: smoothEase }}
              className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-[#2B080E]"
            >
              <img
                src="/images/apoorv.webp"
                alt="Apoorv - The Groom"
                className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98]"
              />
            </motion.div>

            {/* 2. Middle Center Title Card: "STARRING APOORV & CHHAVI" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, delay: 0.5, ease: smoothEase }}
              className="relative py-3.5 sm:py-4 px-3 bg-[#24050A] border-t border-b border-[#3E1119] text-center flex flex-col items-center justify-center shadow-inner"
            >
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.65, ease: smoothEase }}
                className="font-cormorant text-[9.5px] sm:text-[10.5px] tracking-[0.32em] text-[#EBD1A5]/75 font-light uppercase leading-none"
              >
                STARRING
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.75, ease: smoothEase }}
                className="font-cormorant text-2xl sm:text-3xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase mt-1 leading-tight"
              >
                APOORV
              </motion.h2>

              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.85, ease: smoothEase }}
                className="font-cormorant text-base sm:text-lg text-[#EBD1A5]/85 italic my-0.5 leading-none"
              >
                &
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.95, ease: smoothEase }}
                className="font-cormorant text-2xl sm:text-3xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-tight"
              >
                CHHAVI
              </motion.h2>
            </motion.div>

            {/* 3. Bottom Photo: Chhavi (The Bride) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.8, ease: smoothEase }}
              className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-[#2B080E]"
            >
              <img
                src="/images/chhavi.webp"
                alt="Chhavi - The Bride"
                className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Tagline: "A STORY OF THEIR OWN" and "#ApoorvedByChhavi" */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 0.95, ease: smoothEase }}
        className="text-center mt-4 sm:mt-5 pb-1 w-full flex flex-col items-center space-y-1.5"
      >
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.05, ease: smoothEase }}
          className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.28em] text-[#EBD1A5]/90 uppercase font-normal leading-none"
        >
          A STORY OF THEIR OWN
        </motion.span>

        {/* Thin Gold Diamond Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.15, ease: smoothEase }}
          className="flex items-center justify-center w-28 mx-auto my-1"
        >
          <div className="h-[1px] w-full bg-[#EBD1A5]/30" />
          <span className="px-1.5 text-[6px] text-[#EBD1A5]/60 leading-none">◆</span>
          <div className="h-[1px] w-full bg-[#EBD1A5]/30" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.25, ease: smoothEase }}
          className="font-cormorant italic text-sm sm:text-base tracking-[0.18em] text-[#EBD1A5] font-normal leading-none pt-1"
        >
          #ApoorvedByChhavi
        </motion.span>

        {/* Pulsing Down Chevron to prompt scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="mt-2 text-[#EBD1A5]/80"
        >
          <motion.div
            animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
});
