import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

// Hand-Drawn Sketch Heart matching reference image
function SketchHeart({ className = "w-4 h-4 text-[#1A0A02]" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 26.5 C14.2 24.8 5.5 17.5 5.5 11 C5.5 7.2 8.2 4.5 12 5.2 C14.3 5.6 15.4 7.4 16 8.8 C16.6 7.4 17.7 5.6 20 5.2 C23.8 4.5 26.5 7.2 26.5 11 C26.5 17.5 17.8 24.8 16 26.5 Z"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const StoryTimeline = React.memo(function StoryTimeline() {
  const [activePopup, setActivePopup] = useState(null);

  // Keyboard navigation for popup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePopup(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openImage = (item) => {
    setActivePopup(item);
  };

  return (
    <section
      id="story"
      className="relative min-h-full w-full flex flex-col justify-between pt-8 sm:pt-10 pb-7 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* SVG Definitions for Realistic Deckled / Torn Paper Borders */}
      <svg
        width="0"
        height="0"
        className="absolute w-0 h-0 pointer-events-none opacity-0"
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0 }}
      >
        <defs>
          <filter id="torn-deckled-edge" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.065" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Top Bar Header: "03 THE STORY" */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-start w-full max-w-[340px] sm:max-w-[360px] mx-auto pb-2 sm:pb-3 mb-1"
      >
        <div className="flex items-center gap-2">
          <span className="font-cormorant text-3xl sm:text-4xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            03
          </span>
          <span className="font-cormorant text-[11px] sm:text-xs tracking-[0.26em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE STORY
          </span>
        </div>
      </motion.div>

      {/* Main Vintage Scrapbook / Polaroid Collage Grid */}
      <div className="w-full max-w-[340px] sm:max-w-[360px] mx-auto relative my-auto py-1">
        
        {/* ROW 1: Top Left Polaroid + Top Right Polaroid */}
        <div className="flex items-start justify-between relative z-10 w-full">
          
          {/* 1. Top Left: "The first hello / Somewhere in time" Polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -7, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4.5, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => openImage({
              image: "/images/first hello.webp",
              title: "The first hello",
              subtitle: "Somewhere in time",
              caption: "The first hello. Somewhere in time."
            })}
            style={{
              background: 'linear-gradient(145deg, #F5E8D2 0%, #ECD7B7 40%, #DFCA9F 100%)',
              boxShadow: '0 10px 24px -3px rgba(0,0,0,0.65), 0 3px 8px rgba(0,0,0,0.35), inset 0 0 16px rgba(110, 75, 20, 0.18)',
            }}
            className="w-[50%] p-2 pb-3 rounded-[2px] border border-[#BFA882]/60 cursor-pointer transform hover:rotate-0 hover:scale-105 transition-all duration-300 group select-none shrink-0"
          >
            {/* Photo Container */}
            <div className="aspect-[4/3.4] w-full overflow-hidden bg-black/60 shadow-inner border border-[#9A7D58]/30">
              <img
                src="/images/first hello.webp"
                alt="The first hello"
                className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Handwritten Text - Razor-Sharp Vector Font Rendering */}
            <div className="text-center pt-2 pb-0.5 leading-tight space-y-0.5">
              <p className="font-caveat text-[15.5px] sm:text-[16.5px] font-bold leading-none tracking-tight text-[#1A0A02]">
                The first hello
              </p>
              <p className="font-caveat text-[13.5px] sm:text-[14.5px] font-bold text-[#2A1408] leading-none">
                Somewhere in time
              </p>
            </div>
          </motion.div>

          {/* 2. Top Right: "First Movie" Polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 7, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3.5, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => openImage({
              image: "/images/first movie.webp",
              title: "First Movie",
              subtitle: "",
              caption: "First movie together and unforgettable smiles."
            })}
            style={{
              background: 'linear-gradient(145deg, #F5E8D2 0%, #ECD7B7 40%, #DFCA9F 100%)',
              boxShadow: '0 10px 24px -3px rgba(0,0,0,0.65), 0 3px 8px rgba(0,0,0,0.35), inset 0 0 16px rgba(110, 75, 20, 0.18)',
            }}
            className="w-[47%] p-2 pb-3.5 rounded-[2px] border border-[#BFA882]/60 cursor-pointer transform hover:rotate-0 hover:scale-105 transition-all duration-300 group select-none shrink-0 -ml-1 mt-1"
          >
            {/* Photo Container */}
            <div className="aspect-[4/3.3] w-full overflow-hidden bg-black/60 shadow-inner border border-[#9A7D58]/30">
              <img
                src="/images/first movie.webp"
                alt="First Movie"
                className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Handwritten Text - Razor-Sharp Vector Font Rendering */}
            <div className="text-center pt-2.5 pb-0.5">
              <p className="font-caveat text-[16.5px] sm:text-[17.5px] font-bold leading-none tracking-tight text-[#1A0A02]">
                First Movie
              </p>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: Middle Section (Wide Landscape Polaroid + Torn Deckled Parchment Note on Right) */}
        <div className="relative w-full -mt-[7px] z-20 flex items-center">
          
          {/* 3. Middle Wide Polaroid: The First Trip Lake View */}
          <motion.div
            initial={{ opacity: 0, x: -24, rotate: -8, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5.8, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.95, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => openImage({
              image: "/images/first trip.webp",
              title: "The first trip",
              subtitle: "Exploring new horizons",
              caption: "The first trip. Exploring new horizons."
            })}
            style={{
              background: 'linear-gradient(145deg, #F5E8D2 0%, #ECD7B7 40%, #DFCA9F 100%)',
              boxShadow: '0 12px 28px -4px rgba(0,0,0,0.7), 0 4px 10px rgba(0,0,0,0.4), inset 0 0 16px rgba(110, 75, 20, 0.18)',
            }}
            className="w-[calc(68%-9px)] p-2 pb-2 rounded-[2px] border border-[#BFA882]/60 cursor-pointer transform hover:rotate-0 hover:scale-105 transition-all duration-300 group select-none relative z-20"
          >
            <div className="aspect-[16/11.5] w-full overflow-hidden bg-black/60 shadow-inner border border-[#9A7D58]/30">
              <img
                src="/images/first trip.webp"
                alt="The first trip"
                className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* 4. Middle Right Hand-Torn Deckled Parchment Note: "The first trip / Exploring / new horizons / ♡" */}
          <motion.div
            initial={{ opacity: 0, x: 24, rotate: 6, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.95, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => openImage({
              image: "/images/first trip.webp",
              title: "The first trip",
              subtitle: "Exploring new horizons",
              caption: "The first trip. Exploring new horizons."
            })}
            style={{
              filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.65)) drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
            }}
            className="w-[41%] p-3 py-4 text-center flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 absolute right-0 top-[5%] z-10 select-none relative"
          >
            {/* Background layer with torn deckled edge filter (separated from text for 100% crisp sharpness) */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[1px]"
              style={{
                filter: 'url(#torn-deckled-edge)',
                background: 'linear-gradient(135deg, #F5E9D2 0%, #E8D3B0 45%, #D6BB90 100%)',
              }}
            />

            {/* Inner edge burn shading */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_14px_rgba(105,68,18,0.22)]" />
            
            {/* 100% Crisp & Sharp Handwritten Text */}
            <p className="font-caveat text-[15.5px] sm:text-[17px] font-bold leading-tight tracking-tight text-[#1A0A02] relative z-10">
              The first trip
            </p>
            <p className="font-caveat text-[14.5px] sm:text-[15.5px] font-bold leading-tight text-[#2A1408] relative z-10">
              Exploring
            </p>
            <p className="font-caveat text-[14.5px] sm:text-[15.5px] font-bold leading-tight text-[#2A1408] relative z-10">
              new horizons
            </p>
            <div className="mt-1 flex justify-center relative z-10">
              <SketchHeart className="w-4 h-4 text-[#1A0A02]" />
            </div>
          </motion.div>

        </div>

        {/* ROW 3: Bottom Section (Bottom Left "She said yes!" Polaroid + Torn Deckled Parchment Note) */}
        <div className="relative w-full -mt-[17px] z-30 flex items-start">
          
          {/* 5. Bottom Left: "She said yes!" Mountain Proposal Polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 28, rotate: -6, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3.8, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.95, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => openImage({
              image: "/images/she said yes.webp",
              title: "She said yes!",
              subtitle: "A new chapter begins",
              caption: "She said yes! With mountain peaks as our witness."
            })}
            style={{
              background: 'linear-gradient(145deg, #F5E8D2 0%, #ECD7B7 40%, #DFCA9F 100%)',
              boxShadow: '0 14px 32px -4px rgba(0,0,0,0.75), 0 4px 12px rgba(0,0,0,0.45), inset 0 0 16px rgba(110, 75, 20, 0.18)',
            }}
            className="w-[52%] p-2 pb-3.5 rounded-[2px] border border-[#BFA882]/60 cursor-pointer transform hover:rotate-0 hover:scale-105 transition-all duration-300 group select-none relative z-30 shrink-0"
          >
            {/* Photo Container */}
            <div className="aspect-[4/3.4] w-full overflow-hidden bg-black/60 shadow-inner border border-[#9A7D58]/30">
              <img
                src="/images/she said yes.webp"
                alt="She said yes!"
                className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Handwritten Text - High Contrast & Crystal Clear */}
            <div className="text-center pt-2.5 pb-0.5">
              <p className="font-caveat text-[17px] sm:text-[18px] font-bold leading-none tracking-tight text-[#1A0A02]">
                She said yes!
              </p>
            </div>
          </motion.div>

          {/* 6. Bottom Right Hand-Torn Deckled Parchment Note: "A new chapter / begins / ♡" */}
          <motion.div
            initial={{ opacity: 0, y: 28, rotate: 6, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2.5, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.95, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => openImage({
              image: "/images/she said yes.webp",
              title: "A new chapter begins",
              subtitle: "Forever together",
              caption: "A new chapter begins."
            })}
            style={{
              filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.65)) drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
            }}
            className="w-[calc(49%-4px)] p-2.5 sm:p-3 py-4 sm:py-4.5 text-center flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 absolute right-0 bottom-[-14px] z-20 select-none relative"
          >
            {/* Background layer with torn deckled edge filter (separated from text for 100% crisp sharpness) */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[1px]"
              style={{
                filter: 'url(#torn-deckled-edge)',
                background: 'linear-gradient(135deg, #F5E9D2 0%, #E8D3B0 45%, #D6BB90 100%)',
              }}
            />

            {/* Inner edge burn shading */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_14px_rgba(105,68,18,0.22)]" />

            {/* 100% Crisp & Sharp Handwritten Text */}
            <p className="font-caveat text-[17px] sm:text-[18.5px] font-bold leading-tight tracking-tight text-[#1A0A02] relative z-10">
              A new chapter
            </p>
            <p className="font-caveat text-[17px] sm:text-[18.5px] font-bold leading-tight tracking-tight mt-0.5 text-[#2A1408] relative z-10">
              begins
            </p>
            <div className="mt-1.5 flex justify-center relative z-10">
              <SketchHeart className="w-4 h-4 text-[#1A0A02]" />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Subtitle & Animated Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mt-2.5 w-full flex flex-col items-center space-y-0.5"
      >
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="font-cormorant text-[13px] sm:text-sm tracking-[0.26em] text-[#EBD1A5] uppercase font-normal leading-relaxed"
        >
          A FEW CHAPTERS
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.08 }}
          className="font-cormorant text-[13px] sm:text-sm tracking-[0.26em] text-[#EBD1A5] uppercase font-normal leading-relaxed"
        >
          BEFORE THE BIG ONE.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.18 }}
          className="font-cormorant text-[10.5px] sm:text-[11px] tracking-[0.28em] text-[#EBD1A5]/80 uppercase font-light pt-0.5"
        >
          AND NOW...
        </motion.p>

        {/* Pulsing Down Chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.28 }}
          className="pt-1 text-[#EBD1A5]/80"
        >
          <motion.div
            animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive Portal Image Popup Modal */}
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
              {/* Close Button */}
              <button
                onClick={() => setActivePopup(null)}
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
                className="relative max-w-sm w-full bg-[#1C0408] border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl p-3.5 cursor-default text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-xl overflow-hidden border border-gold-500/30 bg-black">
                  <img
                    src={activePopup.image}
                    alt={activePopup.title}
                    className="w-full h-auto max-h-[60vh] object-cover object-center"
                  />
                </div>

                {/* Caption & Details */}
                <div className="p-3 space-y-1">
                  <h4 className="font-playfair text-xl text-[#EBD1A5] font-semibold">
                    {activePopup.title}
                  </h4>
                  {activePopup.subtitle && (
                    <p className="font-caveat text-lg text-gold-400 font-bold">
                      {activePopup.subtitle}
                    </p>
                  )}
                  {activePopup.caption && (
                    <p className="font-sans text-xs text-slate-300 pt-1 leading-relaxed">
                      "{activePopup.caption}"
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
});
