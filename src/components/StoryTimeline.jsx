import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

// Realistic Washi / Scotch Tape Component
function WashiTape({ className = "", style = {} }) {
  return (
    <div
      className={`absolute z-20 pointer-events-none bg-[#f3e6c8]/65 backdrop-blur-[1px] border-t border-b border-white/40 shadow-xs ${className}`}
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.18)',
        ...style
      }}
    />
  );
}

export function StoryTimeline() {
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
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-7 px-3.5 sm:px-5 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "03 THE STORY" - Left Aligned with Bottom Padding */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-3 sm:pb-4 mb-2"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            03
          </span>
          <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE STORY
          </span>
        </div>
      </motion.div>

      {/* Main Vintage Scrapbook / Polaroid Collage Grid */}
      <div className="w-full max-w-sm mx-auto relative my-auto py-2 space-y-3.5">
        
        {/* ROW 1: Top Left Beach Polaroid + Top Right Coffee Photo & Movie Ticket */}
        <div className="grid grid-cols-12 gap-2.5 items-start">
          
          {/* 1. Top Left: Beach Trip Polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            onClick={() => openImage({
              image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
              title: "The first trip",
              date: "July '18",
              caption: "Our unforgettable first getaway listening to the waves."
            })}
            className="col-span-6 relative bg-[#E9DAC1] p-2 pb-3 rounded-xs shadow-xl border border-[#CBB89B] transform hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <WashiTape className="w-10 h-3.5 -top-2 -left-2 rotate-[-35deg]" />

            <div className="aspect-[4/3.5] w-full overflow-hidden bg-black/40 border border-[#bfa98b]/40 relative">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                alt="The first trip"
                className="w-full h-full object-cover filter sepia-[0.35] contrast-[1.05] brightness-[0.92] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="text-center pt-2 pb-0.5 text-[#2C1810]">
              <p className="font-caveat text-sm sm:text-base font-bold leading-tight">
                The first trip
              </p>
              <p className="font-caveat text-xs sm:text-sm text-[#4A2E20] leading-none mt-0.5">
                July '18
              </p>
            </div>
          </motion.div>

          {/* Top Right Column: Coffee Cup Photo + Movie Ticket */}
          <div className="col-span-6 space-y-2.5">
            
            {/* 2. Coffee Photo Frame */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              onClick={() => openImage({
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
                title: "First Coffee Date",
                date: "Winter 2016",
                caption: "Two warm cups, infinite conversations, and the beginning of us."
              })}
              className="relative bg-[#E9DAC1] p-1.5 pb-2 rounded-xs shadow-lg border border-[#CBB89B] hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <WashiTape className="w-8 h-3 -top-1.5 -right-1 rotate-[25deg]" />

              <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 border border-[#bfa98b]/40 relative">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                  alt="First Coffee"
                  className="w-full h-full object-cover filter sepia-[0.4] contrast-[1.1] brightness-[0.9] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* 3. Vintage Movie Ticket */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              onClick={() => openImage({
                image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=85",
                title: "First Movie Night",
                date: "24.11.16",
                caption: "Late night show, shared popcorn, and endless smiles."
              })}
              className="relative bg-[#D9C4A2] text-[#2C1810] p-2 rounded-xs shadow-md border-2 border-dashed border-[#8A6D4B]/50 flex items-center justify-between cursor-pointer hover:scale-105 transition-transform"
            >
              <WashiTape className="w-6 h-3 -top-1.5 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
              <WashiTape className="w-4 h-3.5 -bottom-1.5 right-1 rotate-[45deg]" />

              <div className="text-[7px] font-mono tracking-tighter text-[#4A2E20]/80 rotate-[-90deg] -ml-2">
                *823356
              </div>

              <div className="text-center flex-1 py-0.5">
                <p className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#3D2518]">
                  ADMIT ONE
                </p>
                <p className="font-playfair text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#24120A] mt-0.5">
                  FIRST MOVIE
                </p>
                <p className="font-mono text-[8px] tracking-[0.18em] text-[#4A2E20] mt-0.5 font-semibold">
                  24 . . 11 . . 16
                </p>
              </div>

              <div className="text-[7px] font-mono tracking-tighter text-[#4A2E20]/80 rotate-90 -mr-2">
                *823356
              </div>
            </motion.div>

          </div>
        </div>

        {/* ROW 2: Middle Left Wide Polaroid + Middle Right Note */}
        <div className="grid grid-cols-12 gap-2.5 items-center">
          
          {/* 4. Wide Landscape Polaroid */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -1.5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.75, ease: "easeOut" }}
            onClick={() => openImage({
              image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
              title: "The First Picture",
              date: "02.06.17",
              caption: "The moment our story silently began."
            })}
            className="col-span-7 relative bg-[#E9DAC1] p-2 rounded-xs shadow-xl border border-[#CBB89B] hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <WashiTape className="w-12 h-3.5 -top-1.5 left-1/3 rotate-[-3deg]" />
            <WashiTape className="w-9 h-3.5 -bottom-2 -left-1 rotate-[20deg]" />

            <div className="aspect-[16/11] w-full overflow-hidden bg-black/40 border border-[#bfa98b]/40 relative">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
                alt="Riya & Sahil together"
                className="w-full h-full object-cover filter sepia-[0.35] contrast-[1.08] brightness-[0.93] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 5. Kraft Paper Note: "The first picture 02.06.17 ♡" */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.9, ease: "easeOut" }}
            onClick={() => openImage({
              image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
              title: "The First Picture",
              date: "June 2, 2017",
              caption: "A quiet moment that started our journey."
            })}
            className="col-span-5 relative bg-[#DEC7A6] p-3 py-4 rounded-xs shadow-md border border-[#BFA785] text-[#2C1810] text-center flex flex-col justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            <WashiTape className="w-8 h-3.5 -bottom-2 right-1 rotate-[45deg]" />

            <p className="font-caveat text-base sm:text-lg font-bold leading-tight">
              The first
            </p>
            <p className="font-caveat text-base sm:text-lg font-bold leading-tight">
              picture
            </p>
            <p className="font-caveat text-xs sm:text-sm font-semibold tracking-wider text-[#4A2E20] mt-1">
              02 . 06 . 17
            </p>
            <p className="text-sm text-[#3A1E14] mt-0.5">
              ♡
            </p>
          </motion.div>

        </div>

        {/* ROW 3: Bottom Left "She said yes!" Polaroid + Bottom Right Couple Embrace Polaroid */}
        <div className="grid grid-cols-12 gap-2.5 items-start">
          
          {/* 6. Ring Polaroid: "She said yes! 12.02.23" */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 1.05, ease: "easeOut" }}
            onClick={() => openImage({
              image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
              title: "She Said Yes!",
              date: "12 . 02 . 23",
              caption: "Under the stars, through happy tears, she said yes."
            })}
            className="col-span-6 relative bg-[#E9DAC1] p-2 pb-3 rounded-xs shadow-xl border border-[#CBB89B] hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <WashiTape className="w-9 h-3.5 -top-1.5 left-2 rotate-[-5deg]" />

            <div className="aspect-[4/3.5] w-full overflow-hidden bg-black/40 border border-[#bfa98b]/40 relative">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
                alt="Engagement Ring"
                className="w-full h-full object-cover filter sepia-[0.35] contrast-[1.1] brightness-[0.88] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="text-center pt-2 pb-0.5 text-[#2C1810]">
              <p className="font-caveat text-sm sm:text-base font-bold leading-tight">
                She said yes!
              </p>
              <p className="font-caveat text-xs sm:text-sm text-[#4A2E20] leading-none mt-0.5">
                12 . 02 . 23
              </p>
            </div>
          </motion.div>

          {/* 7. Romantic Embrace Polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 1.2, ease: "easeOut" }}
            onClick={() => openImage({
              image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
              title: "Before The Big One",
              date: "Forever Bound",
              caption: "Ready for our greatest chapter together."
            })}
            className="col-span-6 relative bg-[#E9DAC1] p-2 pb-3 rounded-xs shadow-xl border border-[#CBB89B] hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <WashiTape className="w-9 h-3.5 -top-1.5 right-2 rotate-[12deg]" />

            <div className="aspect-[4/3.8] w-full overflow-hidden bg-black/40 border border-[#bfa98b]/40 relative">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80"
                alt="Romantic couple embrace"
                className="w-full h-full object-cover filter sepia-[0.35] contrast-[1.08] brightness-[0.9] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Subtitle & Animated Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1.45, ease: "easeOut" }}
        className="text-center mt-3 w-full flex flex-col items-center space-y-1"
      >
        <p className="font-cormorant text-xs sm:text-sm tracking-[0.24em] text-[#EBD1A5] uppercase font-normal leading-relaxed">
          A FEW CHAPTERS
        </p>
        <p className="font-cormorant text-xs sm:text-sm tracking-[0.24em] text-[#EBD1A5] uppercase font-normal leading-relaxed">
          BEFORE THE BIG ONE.
        </p>

        <p className="font-cormorant text-[10px] tracking-[0.28em] text-[#EBD1A5]/75 uppercase font-light pt-1">
          AND NOW...
        </p>

        {/* Pulsing Down Chevron */}
        <motion.div
          animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="pt-1 text-[#EBD1A5]/80"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

      {/* Interactive Portal Image Popup Modal (Rendered Directly in Document Body) */}
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

                {/* Caption & Date Details */}
                <div className="p-3 space-y-1">
                  <h4 className="font-playfair text-xl text-[#EBD1A5] font-semibold">
                    {activePopup.title}
                  </h4>
                  {activePopup.date && (
                    <p className="font-caveat text-lg text-gold-400 font-bold">
                      {activePopup.date}
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
}
