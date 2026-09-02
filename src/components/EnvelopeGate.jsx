import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynthesizer';
import openAnimationBg from '../assets/open animation.webp';

// Realistic 35mm Film Projector Beam Originating from Left Projector Lens
function ProjectorLensBeam() {
  // Dust motes floating along the rightward diagonal beam
  const dustParticles = [
    { id: 1, left: '24%', top: '51%', size: 2.2, duration: 4.2, delay: 0.2, xRange: [0, 25], yRange: [-4, 6] },
    { id: 2, left: '35%', top: '48%', size: 1.8, duration: 5.1, delay: 0.9, xRange: [0, 30], yRange: [-6, 8] },
    { id: 3, left: '46%', top: '45%', size: 2.4, duration: 4.6, delay: 1.6, xRange: [0, 35], yRange: [-8, 10] },
    { id: 4, left: '58%', top: '42%', size: 1.6, duration: 5.6, delay: 0.5, xRange: [0, 40], yRange: [-10, 12] },
    { id: 5, left: '70%', top: '39%', size: 2.0, duration: 4.9, delay: 2.1, xRange: [0, 45], yRange: [-12, 14] },
    { id: 6, left: '30%', top: '54%', size: 1.7, duration: 4.8, delay: 1.2, xRange: [0, 28], yRange: [2, -6] },
    { id: 7, left: '52%', top: '53%', size: 2.1, duration: 5.3, delay: 2.7, xRange: [0, 38], yRange: [4, -8] },
    { id: 8, left: '68%', top: '56%', size: 1.5, duration: 6.0, delay: 0.8, xRange: [0, 42], yRange: [6, -10] },
    { id: 9, left: '82%', top: '46%', size: 1.9, duration: 5.2, delay: 1.9, xRange: [0, 35], yRange: [-6, 8] },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-5">
      {/* 1. Volumetric Light Cone projecting from left projector lens (x: 16.5%, y: 53.5%) to the right screen */}
      <motion.div
        animate={{
          opacity: [0.85, 0.98, 0.88, 1, 0.86, 0.96, 0.9],
          scaleY: [0.99, 1.015, 0.995, 1.02, 0.99],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 pointer-events-none origin-[16.5%_53.5%]"
        style={{
          clipPath: 'polygon(16.5% 52%, 100% 28%, 100% 72%, 16.5% 55.5%)',
          background: 'linear-gradient(90deg, rgba(255, 248, 225, 0.85) 0%, rgba(255, 235, 185, 0.55) 15%, rgba(255, 215, 145, 0.32) 45%, rgba(255, 195, 110, 0.14) 75%, rgba(255, 180, 90, 0.02) 100%)',
          filter: 'blur(3px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 2. Secondary Soft Ambient Glow Beam */}
      <motion.div
        animate={{
          opacity: [0.45, 0.7, 0.5, 0.75, 0.48],
        }}
        transition={{
          duration: 0.28,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: 'polygon(16.5% 50.5%, 100% 20%, 100% 80%, 16.5% 57%)',
          background: 'linear-gradient(90deg, rgba(255, 240, 190, 0.6) 0%, rgba(255, 220, 150, 0.25) 30%, rgba(255, 190, 100, 0.08) 70%, transparent 100%)',
          filter: 'blur(10px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 3. Hot Glowing Projector Lens Core (At x: 16.5%, y: 53.5%) */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
        style={{ left: '16.5%', top: '53.5%' }}
      >
        {/* Hot Incandescent Core */}
        <motion.div
          animate={{
            scale: [0.92, 1.12, 0.96, 1.1, 0.92],
            opacity: [0.9, 1, 0.92, 1, 0.9],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFFFFF 0%, #FFF5D6 35%, #FFAA3B 70%, transparent 100%)',
            boxShadow: '0 0 16px 6px rgba(255, 230, 150, 0.95), 0 0 32px 12px rgba(255, 170, 50, 0.6)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Diagonal Lens Flare Glare */}
        <motion.div
          animate={{
            scaleX: [0.9, 1.2, 0.95, 1.15, 0.9],
            opacity: [0.7, 1, 0.75, 0.95, 0.7],
          }}
          transition={{
            duration: 3.0,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-24 sm:w-32 h-[2.5px] rounded-full rotate-[-8deg]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,245,210,0.4) 20%, #FFFFFF 50%, rgba(255,245,210,0.4) 80%, transparent 100%)',
            filter: 'blur(0.5px)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* 4. Illuminated Dust Particles Dancing in the Rightward Light Path */}
      {dustParticles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            x: p.xRange,
            y: p.yRange,
            opacity: [0.1, 0.9, 0.1],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-[#FFFBE8]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: '0 0 6px 1px rgba(255, 235, 160, 0.9)',
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

      {/* Realistic Animated Light Beam Coming from Left Projector Lens */}
      <ProjectorLensBeam />

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
        <div className="w-full flex flex-col items-center justify-center text-center -mt-6 sm:-mt-10 space-y-3">
          {/* First Stanza: "EVERY GREAT LOVE STORY HAS A BEGINNING." */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="font-cormorant text-[#EBD1A5] text-[15px] sm:text-[17px] tracking-[0.22em] leading-[1.7] uppercase font-normal"
          >
            <div>EVERY GREAT</div>
            <div>LOVE STORY</div>
            <div>HAS A BEGINNING.</div>
          </motion.div>

          {/* Second Stanza: "THIS ONE HAS TWO." */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.8, ease: [0.25, 1, 0.5, 1] }}
            className="font-cormorant text-[#EBD1A5] text-[15px] sm:text-[17px] tracking-[0.22em] leading-[1.7] uppercase font-normal pt-2"
          >
            <div>THIS ONE</div>
            <div>HAS TWO.</div>
          </motion.div>

          {/* Gold Diamond Line Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.0, delay: 2.4 }}
            className="relative flex items-center justify-center w-28 mx-auto my-1"
          >
            <div className="h-[1px] w-full bg-[#EBD1A5]/35" />
            <span className="px-2 text-[7px] text-[#EBD1A5]/70 leading-none">◆</span>
            <div className="h-[1px] w-full bg-[#EBD1A5]/35" />
          </motion.div>

          {/* Projector Click Sound Cue: "CLICK. CLICK. CLICK." */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1.2, delay: 2.8, ease: "easeOut" }}
            className="font-cormorant text-[#EBD1A5] text-[12px] sm:text-[13px] tracking-[0.3em] leading-relaxed uppercase font-light"
          >
            <div>CLICK.</div>
            <div>CLICK.</div>
            <div>CLICK.</div>
          </motion.div>
        </div>

        {/* Bottom CTA Actions */}
        <div className="w-full text-center flex flex-col items-center">
          {/* "BEGIN THE STORY" with Elegant Golden Underline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 3.3, ease: "easeOut" }}
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
            transition={{ duration: 0.9, delay: 3.8 }}
            className="mt-4 sm:mt-5"
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
