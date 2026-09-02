import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynthesizer';
import openAnimationBg from '../assets/open animation.webp';

// Realistic 35mm Cinematic Film Projector Light Beam & Dust Motes
function CinematicProjectorLight() {
  // Dust particles floating through the illuminated light cone
  const dustMotes = [
    { id: 1, left: '46%', bottom: '28%', size: 2.2, duration: 4.8, delay: 0.2, xRange: [-12, 16] },
    { id: 2, left: '52%', bottom: '34%', size: 1.8, duration: 5.4, delay: 0.9, xRange: [8, -14] },
    { id: 3, left: '42%', bottom: '42%', size: 2.5, duration: 4.2, delay: 1.5, xRange: [-18, 10] },
    { id: 4, left: '58%', bottom: '48%', size: 1.5, duration: 6.0, delay: 0.6, xRange: [14, -12] },
    { id: 5, left: '48%', bottom: '55%', size: 2.0, duration: 5.1, delay: 2.1, xRange: [-10, 18] },
    { id: 6, left: '38%', bottom: '62%', size: 1.6, duration: 4.6, delay: 1.2, xRange: [-15, 8] },
    { id: 7, left: '60%', bottom: '68%', size: 2.4, duration: 5.8, delay: 2.7, xRange: [12, -16] },
    { id: 8, left: '50%', bottom: '75%', size: 1.7, duration: 4.9, delay: 0.4, xRange: [-8, 14] },
    { id: 9, left: '44%', bottom: '82%', size: 2.1, duration: 5.5, delay: 1.8, xRange: [-14, 12] },
    { id: 10, left: '54%', bottom: '88%', size: 1.4, duration: 6.2, delay: 3.1, xRange: [10, -10] },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-5">
      {/* 1. Volumetric Conical Projector Beam (Shooting Upwards from bottom center) */}
      <motion.div
        animate={{
          opacity: [0.82, 0.98, 0.88, 1, 0.85, 0.96, 0.9],
          scaleY: [0.99, 1.01, 1, 1.01, 0.99],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-x-0 bottom-0 top-0 pointer-events-none"
        style={{
          background: 'conic-gradient(from 180deg at 50% 100%, rgba(0,0,0,0) 148deg, rgba(255, 235, 180, 0.28) 166deg, rgba(255, 248, 220, 0.42) 180deg, rgba(255, 235, 180, 0.28) 194deg, rgba(0,0,0,0) 212deg)',
          filter: 'blur(2px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 2. Film Gate Celluloid Flicker / Shimmer Layer (Simulating 24fps film shutter) */}
      <motion.div
        animate={{
          opacity: [0.35, 0.55, 0.4, 0.65, 0.38, 0.58, 0.42],
        }}
        transition={{
          duration: 0.24,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 60%, rgba(255, 225, 150, 0.18) 0%, rgba(255, 200, 100, 0.08) 50%, transparent 80%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 3. Projector Lens Flare Core (At the base where the light originates) */}
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Hot Glowing Lens Core */}
        <motion.div
          animate={{
            scale: [0.94, 1.08, 0.98, 1.06, 0.94],
            opacity: [0.88, 1, 0.92, 1, 0.88],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,238,180,0.85) 30%, rgba(255,185,70,0.4) 60%, transparent 100%)',
            filter: 'blur(4px)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Anamorphic Horizontal Lens Flare Streak */}
        <motion.div
          animate={{
            scaleX: [0.85, 1.15, 0.92, 1.1, 0.85],
            opacity: [0.6, 0.95, 0.7, 0.9, 0.6],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-48 sm:w-64 h-[2px] -mt-8 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,240,190,0.3) 25%, rgba(255,255,255,0.95) 50%, rgba(255,240,190,0.3) 75%, transparent 100%)',
            filter: 'blur(1px)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* 4. Floating Illuminated Microscopic Dust Motes */}
      {dustMotes.map((mote) => (
        <motion.div
          key={mote.id}
          animate={{
            y: [-15, -60, -15],
            x: mote.xRange,
            opacity: [0, 0.85, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: mote.duration,
            repeat: Infinity,
            delay: mote.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-[#FFFBEA]"
          style={{
            left: mote.left,
            bottom: mote.bottom,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
            boxShadow: '0 0 6px 1px rgba(255, 230, 150, 0.8)',
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </div>
  );
}

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

      {/* Realistic Animated Volumetric Light Beam & Dust Motes */}
      <CinematicProjectorLight />

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

        {/* Center Cinematic Story Texts */}
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
