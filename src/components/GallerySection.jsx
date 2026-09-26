import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';

// Default gallery frames (11 portrait photos from /gallery/)
const DEFAULT_GALLERY_ITEMS = [
  { id: 1, title: "Frame 01", image: "/gallery/1.webp" },
  { id: 2, title: "Frame 02", image: "/gallery/2.webp" },
  { id: 3, title: "Frame 03", image: "/gallery/3.webp" },
  { id: 4, title: "Frame 04", image: "/gallery/4.webp" },
  { id: 5, title: "Frame 05", image: "/gallery/5.webp" },
  { id: 6, title: "Frame 06", image: "/gallery/6.webp" },
  { id: 7, title: "Frame 07", image: "/gallery/7.webp" },
  { id: 8, title: "Frame 08", image: "/gallery/8.webp" },
  { id: 9, title: "Frame 09", image: "/gallery/9.webp" },
  { id: 10, title: "Frame 10", image: "/gallery/10.webp" },
  { id: 11, title: "Frame 11", image: "/gallery/11.webp" },
];

export function GallerySection({ items = DEFAULT_GALLERY_ITEMS }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef(null);

  const galleryItems = items && items.length > 0 ? items : DEFAULT_GALLERY_ITEMS;
  const currentItem = galleryItems[activeIndex] || galleryItems[0];

  // Self-contained container scrolling (strictly scoped to thumbnails track, prevents any page/card shifting)
  useEffect(() => {
    const container = thumbnailsRef.current;
    if (!container) return;
    const activeThumb = container.children[activeIndex];
    if (activeThumb) {
      const targetScroll = activeThumb.offsetLeft - (container.clientWidth / 2) + (activeThumb.offsetWidth / 2);
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="gallery"
      className="relative min-h-full w-full flex flex-col justify-between pt-8 sm:pt-10 pb-6 sm:pb-7 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "07 THE GALLERY" */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-2 sm:pb-3"
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
      <div className="w-full max-w-sm mx-auto relative my-auto flex flex-col items-center text-center overflow-hidden">
        
        {/* Title Block: Heading in ONE single row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mb-2.5 sm:mb-3.5"
        >
          {/* CINEMATIC FRAMES */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-cormorant text-[12px] sm:text-[11px] tracking-[0.28em] text-[#EBD1A5]/80 uppercase font-light leading-none"
          >
            CINEMATIC FRAMES
          </motion.p>

          {/* MOMENTS IN TIME (Single Row) */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="font-cormorant text-[22px] min-[360px]:text-[24px] sm:text-[23px] tracking-[0.18em] sm:tracking-[0.2em] text-[#F5EAD4] font-normal uppercase leading-tight whitespace-nowrap mt-1 text-center"
          >
            MOMENTS IN TIME
          </motion.h2>
        </motion.div>

        {/* Carousel Card Container (Fixed Position Portrait Frame) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 14 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full flex justify-center"
        >
          {/* Main Portrait Card Viewport */}
          <div className="relative w-full max-w-[280px] min-[380px]:max-w-[305px] sm:max-w-[325px] aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden border border-[#EBD1A5]/25 shadow-[0_18px_45px_rgba(0,0,0,0.85)] bg-[#130707]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full relative flex items-center justify-center bg-black"
              >
                {currentItem.image ? (
                  <img
                    src={currentItem.image}
                    alt={currentItem.title || `Gallery moment ${activeIndex + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  /* Fallback if photo is loading */
                  <div className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#240C0C] via-[#160707] to-[#0A0303]">
                    <div className="w-14 h-14 rounded-full border border-[#EBD1A5]/30 bg-black/40 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(235,209,165,0.15)]">
                      <Sparkles className="w-6 h-6 text-[#EBD1A5]/80 animate-pulse" />
                    </div>
                    <p className="font-cormorant text-[11px] tracking-[0.22em] text-[#EBD1A5]/70 uppercase font-light">
                      FRAME 0{activeIndex + 1}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Left Nav Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 active:scale-95 backdrop-blur-md flex items-center justify-center border border-[#EBD1A5]/30 text-[#EBD1A5] shadow-lg transition-all duration-300 z-20 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 active:scale-95 backdrop-blur-md flex items-center justify-center border border-[#EBD1A5]/30 text-[#EBD1A5] shadow-lg transition-all duration-300 z-20 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Thumbnails Track (Self-contained scrollable container) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          ref={thumbnailsRef}
          className="flex items-center gap-2 sm:gap-2.5 mt-3 sm:mt-3.5 w-full max-w-sm mx-auto overflow-x-auto overflow-y-hidden py-1.5 px-1 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: activeIndex === idx ? 1 : 0.4, scale: activeIndex === idx ? 1.05 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 + idx * 0.03 }}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Select frame ${idx + 1}`}
              className={`relative shrink-0 w-11 sm:w-12 aspect-[3/4] rounded-[5px] overflow-hidden transition-all duration-300 cursor-pointer bg-black/50 ${
                activeIndex === idx
                  ? 'ring-2 ring-[#EBD1A5] shadow-[0_0_12px_rgba(235,209,165,0.45)] scale-105 opacity-100'
                  : 'opacity-40 hover:opacity-80 border border-[#EBD1A5]/25'
              }`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-[#180808] flex items-center justify-center border border-[#EBD1A5]/10">
                  <span className="font-cormorant text-[10px] text-[#EBD1A5]/60 font-light">
                    0{idx + 1}
                  </span>
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Bottom Chevron Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex justify-center mt-2 sm:mt-2.5"
        >
          <ChevronDown className="w-4 h-4 text-[#EBD1A5]/60 animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
}
