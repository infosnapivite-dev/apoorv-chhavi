import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import brideImg from '../assets/bride.webp';
import groomImg from '../assets/groom.webp';

export function HeroCouple({ couple }) {
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePopup(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="couple"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-6 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "02 THE CAST" - Strictly Left Aligned with Bottom Padding */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
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
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="w-full max-w-sm mx-auto relative flex flex-col items-center my-auto"
      >
        {/* Filmstrip Frame with Side Edge Sprocket Markings */}
        <div className="relative w-full rounded-sm bg-[#180306] border border-[#3E1119] shadow-2xl p-2.5 sm:p-3 overflow-hidden">
          {/* Left Film Strip Markings */}
          <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-between py-3 text-[8px] font-mono text-[#EBD1A5]/40 select-none pointer-events-none tracking-tighter">
            <span>400</span>
            <span className="rotate-90 origin-center text-[7px]">C000</span>
            <span>12</span>
            <span className="rotate-90 origin-center text-[7px]">020</span>
          </div>

          {/* Right Film Strip Markings */}
          <div className="absolute right-1 top-0 bottom-0 flex flex-col justify-between py-3 text-[8px] font-mono text-[#EBD1A5]/40 select-none pointer-events-none tracking-tighter text-right">
            <span>644</span>
            <span className="text-[7px]">▷▷</span>
            <span className="text-[7px]">44</span>
            <span className="rotate-90 origin-center text-[7px]">C34</span>
            <span className="text-[6px]">K</span>
          </div>

          {/* Inner Content Stack (Bride Photo + Starring Card + Groom Photo) */}
          <div className="mx-3 flex flex-col gap-1.5">
            {/* 1. Top Photo: Riya (The Bride) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              onClick={() => setActivePopup({
                image: brideImg,
                fallback: '/bride.webp',
                name: 'Riya Kapoor',
                role: 'The Bride',
                bio: couple?.bride?.bio || "A classical dancer and creative storyteller, Riya found her steady anchor in Sahil."
              })}
              className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-[#2B080E] cursor-pointer group"
            >
              <img
                src={brideImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/bride.webp';
                }}
                alt="Riya - The Bride"
                className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* 2. Middle Center Title Card: "STARRING RIYA & SAHIL" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.95, ease: [0.25, 1, 0.5, 1] }}
              className="relative py-3.5 sm:py-4 px-3 bg-[#24050A] border-t border-b border-[#3E1119] text-center flex flex-col items-center justify-center shadow-inner"
            >
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="font-cormorant text-[9.5px] sm:text-[10.5px] tracking-[0.32em] text-[#EBD1A5]/75 font-light uppercase leading-none"
              >
                STARRING
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.25 }}
                className="font-cormorant text-2xl sm:text-3xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase mt-1 leading-tight"
              >
                RIYA
              </motion.h2>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="font-cormorant text-base sm:text-lg text-[#EBD1A5]/85 italic my-0.5 leading-none"
              >
                &
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="font-cormorant text-2xl sm:text-3xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-tight"
              >
                SAHIL
              </motion.h2>
            </motion.div>

            {/* 3. Bottom Photo: Sahil (The Groom) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
              onClick={() => setActivePopup({
                image: groomImg,
                fallback: '/groom.webp',
                name: 'Sahil Mehta',
                role: 'The Groom',
                bio: couple?.groom?.bio || "An architect who designs grand spaces with soul, Sahil fell in love with Riya's infectious warmth."
              })}
              className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-[#2B080E] cursor-pointer group"
            >
              <img
                src={groomImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/groom.webp';
                }}
                alt="Sahil - The Groom"
                className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Tagline: "A STORY OF THEIR OWN" with Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.7, ease: "easeOut" }}
        className="text-center mt-3 w-full flex flex-col items-center"
      >
        <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.28em] text-[#EBD1A5]/90 uppercase font-normal leading-none">
          A STORY OF THEIR OWN
        </span>

        {/* Pulsing Down Chevron to prompt scroll */}
        <motion.div
          animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1.5 text-[#EBD1A5]/80"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

      {/* Interactive Portal Cast Portrait Popup Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activePopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 select-none cursor-pointer"
              onClick={() => setActivePopup(null)}
            >
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-6 right-6 z-[10000] p-3 rounded-full bg-white/15 hover:bg-gold-500 hover:text-black text-white transition-all cursor-pointer shadow-xl border border-white/20"
                title="Close (ESC)"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 320, damping: 25 }}
                className="relative max-w-sm w-full bg-[#1C0408] border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl p-3.5 cursor-default text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-xl overflow-hidden border border-gold-500/30 bg-black">
                  <img
                    src={activePopup.image}
                    onError={(e) => {
                      if (activePopup.fallback) {
                        e.target.onerror = null;
                        e.target.src = activePopup.fallback;
                      }
                    }}
                    alt={activePopup.name}
                    className="w-full h-auto max-h-[60vh] object-cover object-center"
                  />
                </div>

                <div className="p-3 space-y-1">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px] tracking-widest uppercase font-sans border border-gold-500/30">
                    {activePopup.role}
                  </span>
                  <h4 className="font-playfair text-2xl text-[#EBD1A5] font-semibold pt-1">
                    {activePopup.name}
                  </h4>
                  <p className="font-sans text-xs text-slate-300 pt-1 leading-relaxed">
                    {activePopup.bio}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
