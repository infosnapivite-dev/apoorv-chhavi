
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynthesizer';
import openAnimationBg from '../assets/open animation.webp';

export function EnvelopeGate({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger golden celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFE8A3', '#D4AF37', '#997E24', '#FFFFFF', '#831227'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFE8A3', '#D4AF37', '#C5A059'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFE8A3', '#D4AF37', '#C5A059'],
      });
    }, 250);

    // Play romantic acoustic chimes if not muted
    if (!isMuted) {
      romanticAudio.start();
    }

    // Delay callback to smoothly transition to main invitation
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (!isMuted) {
      romanticAudio.stop();
    } else {
      romanticAudio.start();
    }
  };

  return (
    <motion.div
      onClick={handleOpenClick}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none touch-none bg-[#2E050B]"
      initial={{ opacity: 1 }}
      animate={isOpening ? { opacity: 0, scale: 1.05, filter: "blur(8px)" } : { opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Projector Image */}
      <img
        src={openAnimationBg}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/open animation.webp';
        }}
        alt="Wedding Story Opening"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-transform duration-700 hover:scale-[1.01]"
      />

      {/* Cinematic Text & UI Overlay Container */}
      <div className="absolute inset-0 flex flex-col justify-between pt-12 sm:pt-14 pb-8 sm:pb-10 px-6 sm:px-8 z-10 pointer-events-auto">
        {/* Top Bar: "01 THE HOOK" and Audio Speaker Icon */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-2">
            <span className="font-cormorant text-3xl sm:text-4xl text-[#EBD1A5] font-normal tracking-normal leading-none">
              01
            </span>
            <span className="font-cormorant text-[11px] sm:text-xs tracking-[0.25em] text-[#EBD1A5]/90 font-normal uppercase ml-1">
              THE HOOK
            </span>
          </div>

          <button
            onClick={toggleSound}
            className="p-1.5 text-[#EBD1A5]/80 hover:text-[#EBD1A5] transition-colors focus:outline-none"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </motion.div>

        {/* Center Cinematic Story Texts (Positioned in open upper-half above projector beam) */}
        <div className="w-full flex flex-col items-center justify-center text-center -mt-8 sm:-mt-12">
          {/* First Stanza: "EVERY GREAT LOVE STORY HAS A BEGINNING." */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="font-cormorant text-[#EBD1A5] text-[16px] sm:text-[18px] tracking-[0.22em] leading-[1.75] uppercase font-normal"
          >
            <div>EVERY GREAT</div>
            <div>LOVE STORY</div>
            <div>HAS A BEGINNING.</div>
          </motion.div>

          {/* Second Stanza: "THIS ONE HAS TWO." */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.9, ease: [0.25, 1, 0.5, 1] }}
            className="font-cormorant text-[#EBD1A5] text-[16px] sm:text-[18px] tracking-[0.22em] leading-[1.75] uppercase font-normal mt-7 sm:mt-9"
          >
            <div>THIS ONE</div>
            <div>HAS TWO.</div>
          </motion.div>
        </div>

        {/* Bottom CTA Actions */}
        <div className="w-full text-center flex flex-col items-center">
          {/* "BEGIN THE STORY" with Elegant Golden Underline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 2.9, ease: "easeOut" }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenClick();
              }}
              className="group flex flex-col items-center focus:outline-none cursor-pointer"
            >
              <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.26em] text-[#EBD1A5] font-normal uppercase group-hover:text-[#FFF2DC] transition-colors">
                BEGIN THE STORY
              </span>
              <span className="w-20 h-[1px] bg-[#EBD1A5]/70 mt-1.5 group-hover:w-28 group-hover:bg-[#EBD1A5] transition-all duration-300" />
            </button>
          </motion.div>

          {/* "SKIP INTRO" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.9, delay: 3.5 }}
            className="mt-6 sm:mt-7"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenClick();
              }}
              className="font-sans text-[10px] tracking-[0.2em] text-[#EBD1A5]/75 uppercase hover:text-[#EBD1A5] hover:opacity-100 transition-all focus:outline-none"
            >
              SKIP INTRO
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
