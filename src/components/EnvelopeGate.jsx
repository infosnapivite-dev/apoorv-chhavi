import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX } from 'lucide-react';
import { backgroundMusic } from '../utils/audioManager';

export function EnvelopeGate({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(backgroundMusic.isPlaying);

  useEffect(() => {
    const unsubscribe = backgroundMusic.subscribe(({ isPlaying }) => {
      setIsPlaying(isPlaying);
    });
    return unsubscribe;
  }, []);

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

    // Ensure music is playing when invitation is opened
    backgroundMusic.play();

    // Delay callback to smoothly transition to main invitation
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    backgroundMusic.toggle();
  };

  return (
    <motion.div
      onClick={handleOpenClick}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none touch-none bg-[#2E050B]"
      initial={{ opacity: 1 }}
      animate={isOpening ? { opacity: 0, scale: 1.04, filter: "blur(6px)" } : { opacity: 1 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Fixed Background Projector Video in Continuous Loop */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          willChange: 'transform',
          zIndex: -1,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/images/open animation.webm" type="video/webm" />
          <source src="/images/opening animation.webm" type="video/webm" />
        </video>
      </div>

      {/* Cinematic Text & UI Overlay Container */}
      <div className="absolute inset-0 flex flex-col justify-between pt-12 sm:pt-14 pb-10 sm:pb-12 px-6 sm:px-8 z-10 pointer-events-auto">
        {/* Top Bar: "01 THE HOOK" and Audio Speaker Icon */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
            className="p-1.5 text-[#EBD1A5]/80 hover:text-[#EBD1A5] transition-colors focus:outline-none cursor-pointer"
            title={isPlaying ? "Mute Background Music" : "Play Background Music"}
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5 text-gold-400" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-400" />
            )}
          </button>
        </motion.div>

        {/* Center Cinematic Story Texts */}
        <div className="w-full flex flex-col items-center justify-center text-center -mt-6 sm:-mt-10">
          {/* First Stanza: "EVERY GREAT LOVE STORY HAS A BEGINNING." */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-[#EBD1A5] text-[16px] sm:text-[18px] tracking-[0.22em] leading-[1.75] uppercase font-normal"
          >
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              EVERY GREAT
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}>
              LOVE STORY
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
              HAS A BEGINNING.
            </motion.div>
          </motion.div>

          {/* Second Stanza: "THIS ONE HAS TWO." */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-[#EBD1A5] text-[16px] sm:text-[18px] tracking-[0.22em] leading-[1.75] uppercase font-normal mt-7 sm:mt-9"
          >
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}>
              THIS ONE
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.25 }}>
              HAS TWO.
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Action: "CLICK. CLICK. CLICK." */}
        <div className="w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.4, 0.95, 0.4], y: 0 }}
            transition={{
              opacity: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              y: { duration: 0.8, delay: 1.4, ease: "easeOut" }
            }}
            className="font-cormorant text-[#EBD1A5] text-[12px] sm:text-[13px] tracking-[0.3em] leading-[1.8] uppercase font-light"
          >
            <div>CLICK.</div>
            <div>CLICK.</div>
            <div>CLICK.</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
