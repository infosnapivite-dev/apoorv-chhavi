import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import momentBg from '../assets/the movement.webp';

export function TheMomentSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsPopupOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="moment"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-8 px-0 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "05 THE MOMENT" - Left Aligned with Bottom Padding */}
      <div className="px-4 sm:px-6 w-full max-w-sm mx-auto pb-3 sm:pb-4 mb-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="flex items-center justify-start w-full"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
              05
            </span>
            <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
              THE MOMENT
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="w-full relative my-auto flex flex-col items-center">
        
        {/* Full-Width Edge-to-Edge Hero Image - Touching Left & Right Borders with Smooth Top & Bottom Blend */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          onClick={() => setIsPopupOpen(true)}
          className="relative w-full aspect-[4/4.3] sm:aspect-[4/4.5] max-h-[360px] overflow-hidden cursor-pointer group bg-black/60 shadow-2xl"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 14%, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 14%, black 82%, transparent 100%)'
          }}
        >
          <img
            src={momentBg}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/the movement.webp';
            }}
            alt="The Sacred Moment - Riya and Sahil"
            className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.96] group-hover:scale-105 transition-transform duration-700"
          />

          {/* Top Smooth Gradient Overlay */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1C0408]/90 via-[#1C0408]/40 to-transparent pointer-events-none" />

          {/* Bottom Warm Fire Glow & Dark Velvet Fade */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1A0307] via-[#1A0307]/75 to-transparent pointer-events-none" />

          {/* Subtle Warm Fire Ember Vignette */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 bg-amber-500/20 blur-xl rounded-full pointer-events-none" />
        </motion.div>

        {/* Center Typography & Details */}
        <div className="w-full max-w-sm mx-auto px-4 sm:px-6 text-center mt-5 sm:mt-6 space-y-1 flex flex-col items-center">
          {/* Subtitle: "AND THEN..." */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.32em] text-[#EBD1A5]/75 font-light uppercase"
          >
            AND THEN...
          </motion.p>

          {/* Big Headline: "THE MOMENT" */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.65, ease: "easeOut" }}
            className="font-cormorant text-3xl sm:text-4xl tracking-[0.24em] text-[#EBD1A5] font-normal uppercase leading-tight my-0.5"
          >
            THE MOMENT
          </motion.h2>

          {/* Ceremony Subtitle: "THE WEDDING" */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="font-cormorant text-xs sm:text-sm tracking-[0.26em] text-[#EBD1A5]/90 font-light uppercase pt-1"
          >
            THE WEDDING
          </motion.p>

          {/* Date & Time: "28 NOVEMBER • 11 AM" */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="font-sans text-[10px] sm:text-[11px] tracking-[0.16em] text-[#EBD1A5]/70 font-medium uppercase"
          >
            28 NOVEMBER • 11 AM
          </motion.p>
        </div>

      </div>

      {/* Bottom Animated Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1.15, ease: "easeOut" }}
        className="text-center mt-3 w-full flex justify-center px-4"
      >
        <motion.div
          animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#EBD1A5]/80"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

      {/* Interactive Portal High-Res Image Popup Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 select-none cursor-pointer"
              onClick={() => setIsPopupOpen(false)}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 z-[10000] p-3 rounded-full bg-white/15 hover:bg-gold-500 hover:text-black text-white transition-all cursor-pointer shadow-xl border border-white/20"
                title="Close (ESC)"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Popup Card */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 320, damping: 25 }}
                className="relative max-w-sm w-full bg-[#1C0408] border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl p-3.5 cursor-default text-center space-y-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-xl overflow-hidden border border-gold-500/30 bg-black">
                  <img
                    src={momentBg}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/the movement.webp';
                    }}
                    alt="The Wedding Moment"
                    className="w-full h-auto max-h-[60vh] object-cover object-center"
                  />
                </div>

                <div className="p-2 space-y-1">
                  <h4 className="font-playfair text-xl text-[#EBD1A5] font-semibold">
                    The Wedding Ceremony
                  </h4>
                  <p className="font-sans text-xs text-gold-400 font-medium tracking-wider uppercase">
                    28 November 2026 • 11:00 AM
                  </p>
                  <p className="font-sans text-xs text-slate-300 pt-1 leading-relaxed">
                    The auspicious moment when two souls unite under the sacred mandap.
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
