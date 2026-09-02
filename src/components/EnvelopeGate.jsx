import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynthesizer';
import openAnimationBg from '../assets/open animation.webp';

// Realistic 35mm Film Projector Light Originating from the Physical Projector Lens
function CinematicProjectorLight() {
  // Dust motes drifting upwards inside the light cone
  const dustMotes = [
    { id: 1, left: '48%', top: '76%', size: 2.0, duration: 4.5, delay: 0.2, xRange: [-8, 10] },
    { id: 2, left: '52%', top: '68%', size: 1.8, duration: 5.2, delay: 0.8, xRange: [10, -12] },
    { id: 3, left: '44%', top: '58%', size: 2.4, duration: 4.2, delay: 1.4, xRange: [-16, 12] },
    { id: 4, left: '56%', top: '50%', size: 1.6, duration: 5.8, delay: 0.5, xRange: [14, -10] },
    { id: 5, left: '40%', top: '42%', size: 2.2, duration: 4.8, delay: 2.0, xRange: [-18, 14] },
    { id: 6, left: '60%', top: '35%', size: 1.5, duration: 4.6, delay: 1.1, xRange: [16, -12] },
    { id: 7, left: '34%', top: '26%', size: 2.5, duration: 5.6, delay: 2.5, xRange: [-20, 16] },
    { id: 8, left: '66%', top: '20%', size: 1.9, duration: 5.0, delay: 0.3, xRange: [18, -14] },
    { id: 9, left: '46%', top: '14%', size: 2.1, duration: 5.4, delay: 1.7, xRange: [-15, 15] },
    { id: 10, left: '54%', top: '8%', size: 1.4, duration: 6.0, delay: 3.0, xRange: [12, -12] },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-5">
      {/* 1. Volumetric Optical Projection Beam - Originates precisely at Projector Lens (50% X, 81.5% Y) */}
      <motion.div
        animate={{
          opacity: [0.85, 1, 0.9, 0.98, 0.86, 0.95, 0.88],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 81.5%, rgba(255, 248, 225, 0.55) 0%, rgba(255, 230, 160, 0.32) 30%, rgba(255, 205, 100, 0.14) 65%, transparent 95%)',
          clipPath: 'polygon(0% 0%, 100% 0%, 53.5% 81.5%, 46.5% 81.5%)',
          filter: 'blur(2.5px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 2. Secondary Intense Center Core Light Ray */}
      <motion.div
        animate={{
          opacity: [0.6, 0.85, 0.65, 0.9, 0.58],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 0.85) 0%, rgba(255, 240, 190, 0.45) 45%, transparent 100%)',
          clipPath: 'polygon(20% 0%, 80% 0%, 51.5% 81.5%, 48.5% 81.5%)',
          filter: 'blur(3px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 3. 24fps Film Shutter Celluloid Jitter Flicker */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.28, 0.52, 0.22, 0.48, 0.3],
        }}
        transition={{
          duration: 0.18,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 55%, rgba(255, 235, 175, 0.22) 0%, transparent 70%)',
          clipPath: 'polygon(0% 0%, 100% 0%, 54% 81.5%, 46% 81.5%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 4. Projector Lens Aperture Flare & Hot Glow (Positioned at 50% X, 81.5% Y) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none"
        style={{ top: '81.5%' }}
      >
        {/* Hot Incandescent Lamp Core inside the Lens */}
        <motion.div
          animate={{
            scale: [0.92, 1.12, 0.96, 1.08, 0.92],
            opacity: [0.9, 1, 0.92, 1, 0.9],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-10 h-10 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,242,190,0.9) 35%, rgba(255,180,60,0.5) 65%, transparent 100%)',
            filter: 'blur(3px)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Anamorphic Horizontal Lens Flare Streak across the Lens */}
        <motion.div
          animate={{
            scaleX: [0.85, 1.2, 0.9, 1.15, 0.85],
            opacity: [0.65, 1, 0.75, 0.95, 0.65],
          }}
          transition={{
            duration: 3.0,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-40 sm:w-56 h-[2px] -mt-5 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,235,170,0.4) 25%, rgba(255,255,255,1) 50%, rgba(255,235,170,0.4) 75%, transparent 100%)',
            filter: 'blur(0.8px)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* 5. Floating Illuminated Dust Particles rising in the Light Beam */}
      {dustMotes.map((mote) => (
        <motion.div
          key={mote.id}
          animate={{
            y: [-10, -45, -10],
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
          className="absolute rounded-full bg-[#FFFCE8]"
          style={{
            left: mote.left,
            top: mote.top,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
            boxShadow: '0 0 6px 1px rgba(255, 235, 160, 0.85)',
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

      {/* Realistic Animated Volumetric Light Beam Originating from Projector Lens */}
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
