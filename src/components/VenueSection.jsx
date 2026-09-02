import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LeelaPalaceLineArt } from './LeelaPalaceLineArt';

// Diamond Divider Component matching the reference
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

export function VenueSection() {
  return (
    <section
      id="venue"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-7 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "07 THE FINAL CREDITS" - Left Aligned with Bottom Padding */}
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
            THE FINAL CREDITS
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
            THE
          </p>

          <h2 className="font-cormorant text-3xl sm:text-4xl tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-tight my-0.5">
            WEDDING
          </h2>

          <DiamondDivider className="my-1" />

          <p className="font-cormorant text-[11px] sm:text-xs tracking-[0.24em] text-[#EBD1A5]/80 font-light uppercase leading-none">
            28 NOVEMBER 2026
          </p>
        </motion.div>

        {/* Golden Architectural Line-Art Sketch of Palace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, delay: 0.45, ease: "easeOut" }}
          className="w-full max-w-[230px] sm:max-w-[250px] my-2.5 sm:my-3 flex flex-col items-center"
        >
          <LeelaPalaceLineArt className="w-full h-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />

          <div className="mt-1.5 space-y-0.5">
            <h3 className="font-cormorant text-xs sm:text-[12.5px] tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-snug">
              THE LEELA PALACE
            </h3>
            <p className="font-cormorant text-[10.5px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/85 font-light uppercase leading-none">
              UDAIPUR
            </p>
          </div>
        </motion.div>

        {/* DRESS CODE Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <DiamondDivider />
          <p className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.26em] text-[#EBD1A5]/85 uppercase font-light leading-none">
            DRESS CODE
          </p>
          <p className="font-cormorant text-[9.5px] sm:text-[10px] tracking-[0.22em] text-[#EBD1A5]/70 uppercase font-light mt-1 leading-none">
            FESTIVE ELEGANCE
          </p>
        </motion.div>

        {/* HOSPITALITY Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <DiamondDivider />
          <p className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.26em] text-[#EBD1A5]/85 uppercase font-light mb-1 leading-none">
            HOSPITALITY
          </p>

          <div className="w-full max-w-[210px] sm:max-w-[220px] mx-auto space-y-0.5 text-[10px] sm:text-[10.5px] font-cormorant tracking-[0.14em] text-[#EBD1A5]/80 uppercase">
            <div className="flex justify-between items-center w-full">
              <span className="text-left font-light">ANANYA</span>
              <a href="tel:+919876543210" className="hover:text-gold-300 transition-colors font-sans text-[9px] sm:text-[9.5px] tracking-wider text-right">
                +91 98765 43210
              </a>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-left font-light">VIKRAM</span>
              <a href="tel:+919987654321" className="hover:text-gold-300 transition-colors font-sans text-[9px] sm:text-[9.5px] tracking-wider text-right">
                +91 99876 54321
              </a>
            </div>
          </div>

          <DiamondDivider className="mt-1.5" />
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
