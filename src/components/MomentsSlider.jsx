import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Play, Pause, X } from 'lucide-react';

export function MomentsSlider({ moments }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    if (!isAutoPlaying || popupImage) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % moments.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, popupImage, moments.length]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + moments.length) % moments.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % moments.length);
  };

  const currentMoment = moments[currentIndex] || moments[0];

  return (
    <section
      id="moments"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-7 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "07 THE GALLERY" - Left Aligned with Bottom Padding */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-3 sm:pb-4 mb-2"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            07
          </span>
          <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE GALLERY
          </span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="w-full max-w-sm mx-auto relative my-auto flex flex-col items-center text-center">
        
        {/* Subtitle & Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="w-full space-y-1 mb-3"
        >
          <p className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.32em] text-[#EBD1A5]/80 font-light uppercase leading-none">
            CINEMATIC FRAMES
          </p>

          <h2 className="font-cormorant text-2xl sm:text-3xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-tight my-0.5">
            MOMENTS IN TIME
          </h2>
        </motion.div>

        {/* Cinematic Reel Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="relative w-full aspect-[4/3.2] sm:aspect-[4/3.4] rounded-sm overflow-hidden shadow-2xl border border-[#3E1119] bg-black cursor-pointer group"
          onClick={() => setPopupImage(currentMoment)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMoment.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={currentMoment.image}
                alt={currentMoment.caption}
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
              />

              {/* Dark Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0307]/90 via-transparent to-[#1A0307]/30 pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none space-y-0.5">
                <span className="font-cormorant text-[9px] sm:text-[10px] tracking-[0.24em] text-[#EBD1A5]/90 uppercase font-medium">
                  {currentMoment.caption}
                </span>
                <p className="font-cormorant italic text-[11px] sm:text-xs text-[#EBD1A5]/75 line-clamp-1">
                  "{currentMoment.quote}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/50 text-[#EBD1A5] hover:bg-gold-500 hover:text-black transition"
            title="Previous"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/50 text-[#EBD1A5] hover:bg-gold-500 hover:text-black transition"
            title="Next"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Thumbnail Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-1.5 mt-3 w-full max-w-[280px]"
        >
          {moments.map((m, idx) => (
            <div
              key={m.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative aspect-[4/3] w-12 rounded-xs overflow-hidden border cursor-pointer transition-all duration-300 ${
                idx === currentIndex
                  ? "border-gold-400 scale-105 shadow-md brightness-100"
                  : "border-[#4A161E]/80 opacity-50 hover:opacity-80 brightness-75"
              }`}
            >
              <img
                src={m.image}
                alt={m.caption}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
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

      {/* Interactive Portal Popup Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {popupImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 select-none cursor-pointer"
              onClick={() => setPopupImage(null)}
            >
              <button
                onClick={() => setPopupImage(null)}
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
                className="relative max-w-sm w-full bg-[#1C0408] border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl p-3.5 cursor-default text-center space-y-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-xl overflow-hidden border border-gold-500/30 bg-black">
                  <img
                    src={popupImage.image}
                    alt={popupImage.caption}
                    className="w-full h-auto max-h-[60vh] object-cover object-center"
                  />
                </div>

                <div className="p-2 space-y-1">
                  <h4 className="font-playfair text-xl text-[#EBD1A5] font-semibold">
                    {popupImage.caption}
                  </h4>
                  <p className="font-sans text-xs text-slate-300 pt-1 leading-relaxed">
                    "{popupImage.quote}"
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
