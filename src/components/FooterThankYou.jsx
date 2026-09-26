import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Copy, Check } from 'lucide-react';

// Minimalist Instagram Icon SVG
function InstagramIcon({ className = "w-2.5 h-2.5 text-current" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Hand-Drawn Minimalist Gold Heart SVG matching PDF reference
function HandDrawnHeart({ className = "w-6 h-6 text-[#EBD1A5]" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M50 82 C45 78 18 55 18 35 C18 22 28 14 40 16 C46 17 49 22 50 25 C51 22 54 17 60 16 C72 14 82 22 82 35 C82 55 55 78 50 82 Z"
        stroke="currentColor"
        strokeOpacity="0.9"
      />
    </svg>
  );
}

// Hyper-Realistic Animated Theatrical Spotlight Lamp & Volumetric Light Beam
function RealisticTheatricalSpotlight() {
  const particles = [
    { id: 1, x: 46, y: 35, size: 2, delay: 0.2, duration: 4.5 },
    { id: 2, x: 54, y: 55, size: 2.2, delay: 1.1, duration: 5.2 },
    { id: 3, x: 40, y: 70, size: 1.8, delay: 2.0, duration: 4.8 },
    { id: 4, x: 60, y: 40, size: 2.0, delay: 0.8, duration: 5.6 },
    { id: 5, x: 48, y: 85, size: 1.5, delay: 1.7, duration: 4.2 },
    { id: 6, x: 44, y: 60, size: 1.8, delay: 2.5, duration: 5.0 },
  ];

  return (
    <div className="relative w-full flex flex-col items-center pointer-events-none select-none overflow-visible">
      {/* Gentle Pendulum Swaying Lamp Assembly */}
      <motion.div
        animate={{ rotate: [-0.9, 0.9, -0.9] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
        className="relative z-30 flex flex-col items-center"
      >
        {/* Top Ceiling Mount Cord */}
        <div className="w-[3.5px] h-3.5 bg-gradient-to-b from-[#1C1208] via-[#5A3F1F] to-[#2B1B0A]" />
        
        {/* Realistic SVG Vintage Industrial Lamp */}
        <svg
          viewBox="0 0 140 85"
          className="w-[124px] sm:w-[106px] h-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.95)] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="metalHousing" x1="20" y1="10" x2="120" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1B120A" />
              <stop offset="25%" stopColor="#4A341A" />
              <stop offset="50%" stopColor="#8C6734" />
              <stop offset="75%" stopColor="#D4A757" />
              <stop offset="100%" stopColor="#1C1106" />
            </linearGradient>

            <linearGradient id="bracketMetal" x1="10" y1="20" x2="130" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#302010" />
              <stop offset="50%" stopColor="#A88145" />
              <stop offset="100%" stopColor="#251608" />
            </linearGradient>

            <linearGradient id="bezelRing" x1="30" y1="58" x2="110" y2="68" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4E3314" />
              <stop offset="30%" stopColor="#DFBA6E" />
              <stop offset="70%" stopColor="#FFE4A0" />
              <stop offset="100%" stopColor="#2D1A08" />
            </linearGradient>

            <radialGradient id="bulbCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#FFF2B8" />
              <stop offset="70%" stopColor="#FFB834" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E07A00" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="reflectorDish" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#FFE7A3" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#C9943B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#331E0A" stopOpacity="0.9" />
            </radialGradient>
          </defs>

          {/* Top Swivel Bracket */}
          <path d="M56 2 H84 V8 H56 Z" fill="url(#bracketMetal)" stroke="#1B1006" strokeWidth="0.8" />
          <path d="M32 30 C32 10 50 6 70 6 C90 6 108 10 108 30" stroke="url(#bracketMetal)" strokeWidth="3.5" strokeLinecap="round" />

          {/* Side Adjustment Knobs */}
          <circle cx="30" cy="30" r="4.5" fill="#C99846" stroke="#2B1806" strokeWidth="1" />
          <circle cx="110" cy="30" r="4.5" fill="#C99846" stroke="#2B1806" strokeWidth="1" />
          <line x1="28" y1="30" x2="32" y2="30" stroke="#1F1104" strokeWidth="1" />
          <line x1="108" y1="30" x2="112" y2="30" stroke="#1F1104" strokeWidth="1" />

          {/* Cooling Heat Sink Fins */}
          <rect x="58" y="10" width="24" height="4" rx="1" fill="#2E1C0A" stroke="#7A5626" strokeWidth="0.6" />
          <rect x="62" y="7" width="16" height="3" rx="1" fill="#3D270E" stroke="#8C652D" strokeWidth="0.6" />

          {/* Main Lampshade Body */}
          <path d="M40 56 C38 28 52 14 70 14 C88 14 102 28 100 56 Z" fill="url(#metalHousing)" stroke="#261708" strokeWidth="1.2" />

          {/* Metallic Highlights */}
          <path d="M46 54 C46 32 56 20 70 20" stroke="#FFEBB5" strokeWidth="0.9" strokeOpacity="0.45" />
          <path d="M94 54 C94 32 84 20 70 20" stroke="#1A0D03" strokeWidth="1.2" strokeOpacity="0.7" />

          {/* Inner Reflector Dish */}
          <ellipse cx="70" cy="56" rx="30" ry="9" fill="url(#reflectorDish)" stroke="#523512" strokeWidth="1" />

          {/* Outer Bezel Rim */}
          <ellipse cx="70" cy="56" rx="31" ry="8" fill="none" stroke="url(#bezelRing)" strokeWidth="2.4" />

          {/* Bulb Socket */}
          <rect x="66" y="47" width="8" height="5" fill="#422910" rx="1" />

          {/* Incandescent Glass Bulb with Glowing Core */}
          <circle cx="70" cy="55" r="9" fill="url(#bulbCore)" />
          
          {/* Tungsten Filament */}
          <path d="M67 52 Q70 48 73 52" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="68" y1="52" x2="68" y2="55" stroke="#FFE9A3" strokeWidth="0.8" />
          <line x1="72" y1="52" x2="72" y2="55" stroke="#FFE9A3" strokeWidth="0.8" />
        </svg>

        {/* Dynamic Filament Lens Flare */}
        <motion.div
          animate={{
            scale: [0.95, 1.08, 0.97, 1.05, 0.95],
            opacity: [0.85, 1, 0.9, 1, 0.85]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[48px] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,215,115,0.7) 35%, rgba(255,160,30,0.3) 65%, rgba(0,0,0,0) 100%)',
            filter: 'blur(3px)'
          }}
        />
      </motion.div>

      {/* Downward Volumetric Light Beam */}
      <motion.div
        animate={{
          opacity: [0.85, 1, 0.88, 1, 0.85]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[56px] sm:top-[50px] left-1/2 -translate-x-1/2 w-[310px] sm:w-[300px] h-[300px] sm:h-[280px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 222, 150, 0.38) 0%, rgba(255, 185, 75, 0.18) 42%, rgba(26, 3, 7, 0) 78%)',
          clipPath: 'polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%)',
          filter: 'blur(3px)'
        }}
      >
        {/* Floating Ambient Dust Motes */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [-10, 35, -10],
              x: [-5, 5, -5],
              opacity: [0.2, 0.85, 0.2]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-[#FFE8A3] shadow-[0_0_6px_#FFD56B]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function FooterThankYou({ couple }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReplayStory = () => {
    const container = document.querySelector('.inner-app-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const topElement = document.getElementById('couple') || document.querySelector('main') || document.body;
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = `💍 You're warmly invited to the Wedding Premiere of Apoorv & Chhavi in Goa! 9.10.11 December 2026. View our official invitation here: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <footer
      id="premiere"
      className="relative min-h-[110vh] sm:min-h-full w-full flex flex-col justify-between pt-10 sm:pt-10 pb-8 sm:pb-5 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "7 THE PREMIERE" */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-2 sm:pb-3 mb-1"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-3xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            7
          </span>
          <span className="font-cormorant text-[14px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE PREMIERE
          </span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="w-full max-w-sm mx-auto relative my-auto flex flex-col items-center justify-center text-center">
        
        {/* Theatrical Spotlight Lamp */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center"
        >
          <RealisticTheatricalSpotlight />
        </motion.div>

        {/* Spotlighted Quote Typography (Exact text matching client reference) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-7 relative z-10 w-full text-center flex flex-col items-center justify-center"
        >
          <p className="font-cormorant text-[14px] sm:text-[9px] tracking-[0.16em] text-[#EBD1A5]/90 uppercase font-light leading-[1.6] text-center">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="block whitespace-nowrap"
            >
              SOME STORIES ARE BETTER
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.52 }}
              className="block whitespace-nowrap"
            >
              EXPERIENCED TOGETHER.
            </motion.span>
          </p>
        </motion.div>

        {/* Main Grand Headline: "SEE YOU AT THE PREMIERE." */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-4 mb-0.5 relative z-10 w-full text-center flex flex-col items-center justify-center"
        >
          <h2 className="font-cormorant text-[22px] sm:text-[15px] md:text-[16px] tracking-[0.18em] text-[#EBD1A5] font-normal uppercase leading-[1.3] text-center">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.65 }}
              className="block whitespace-nowrap"
            >
              SEE YOU AT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.73 }}
              className="block whitespace-nowrap"
            >
              THE PREMIERE.
            </motion.span>
          </h2>
        </motion.div>

        {/* Hand-Drawn Heart Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.82, type: "spring", stiffness: 220 }}
          className="my-3.5 sm:my-3 flex items-center justify-center mx-auto relative z-10"
        >
          <HandDrawnHeart className="w-5 h-5 sm:w-4 sm:h-4 text-[#EBD1A5]" />
        </motion.div>

        {/* Couple & Date & GOA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.92, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-1.5 relative z-10 w-full text-center flex flex-col items-center justify-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="font-cormorant text-[17px] sm:text-[11px] tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-none text-center whitespace-nowrap"
          >
            APOORV &amp; CHHAVI
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.02 }}
            className="font-cormorant text-[13.5px] sm:text-[9px] tracking-[0.20em] text-[#EBD1A5]/85 font-light uppercase leading-none text-center pt-0.5 whitespace-nowrap"
          >
            9 • 10 • 11 DECEMBER 2026
          </motion.p>

          <motion.h4
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 1.08 }}
            className="font-cormorant text-[21px] sm:text-sm tracking-[0.28em] text-[#EBD1A5] font-light uppercase leading-tight text-center pt-0.5 whitespace-nowrap"
          >
            GOA
          </motion.h4>
        </motion.div>

        {/* 2 Underlined Action Links: "SHARE INVITATION" & "REPLAY THE STORY" */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-2.5 w-full mx-auto mt-5 sm:mt-5 text-[13.5px] sm:text-[8.5px] font-cormorant tracking-[0.20em] uppercase relative z-20"
        >
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="pb-0.5 border-b border-[#EBD1A5]/50 hover:border-gold-300 text-[#EBD1A5] hover:text-gold-300 font-medium transition-all cursor-pointer whitespace-nowrap active:scale-95 text-center"
          >
            SHARE INVITATION
          </button>

          <button
            onClick={handleReplayStory}
            className="pb-0.5 border-b border-[#EBD1A5]/50 hover:border-gold-300 text-[#EBD1A5] hover:text-gold-300 font-medium transition-all cursor-pointer whitespace-nowrap active:scale-95 text-center"
          >
            REPLAY THE STORY
          </button>
        </motion.div>

      </div>

      {/* Footer Branding: "SNAPIVITE" (Clickable Instagram Link with Minimal Logo) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 1.28, ease: [0.22, 1, 0.36, 1] }}
        className="text-center pt-7 sm:pt-7 pb-2 relative z-20 w-full flex items-center justify-center"
      >
        <a
          href="https://www.instagram.com/snapivite/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-1.5 font-cormorant text-[11px] sm:text-[8px] tracking-[0.32em] pl-[0.32em] text-[#EBD1A5]/50 hover:text-[#EBD1A5] uppercase font-light text-center transition-colors cursor-pointer active:scale-95"
          title="Visit Snapivite on Instagram"
        >
          <InstagramIcon className="w-3.5 h-3.5 sm:w-2.5 sm:h-2.5 text-[#EBD1A5]/60 group-hover:text-[#EBD1A5] transition-colors" />
          <span>SNAPIVITE</span>
        </a>
      </motion.div>

      {/* Share Modal Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isShareModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 select-none cursor-pointer"
              onClick={() => setIsShareModalOpen(false)}
            >
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="absolute top-6 right-6 z-[10000] p-3 rounded-full bg-white/15 hover:bg-gold-500 hover:text-black text-white transition-all cursor-pointer shadow-xl border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 320, damping: 25 }}
                className="relative max-w-sm w-full bg-[#1C0408] border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl p-5 cursor-default text-center space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest text-gold-400 uppercase font-sans font-semibold">
                    Wedding Invitation
                  </span>
                  <h3 className="font-playfair text-2xl text-gold-100 font-semibold">
                    Share The Joy
                  </h3>
                  <p className="font-sans text-xs text-slate-300">
                    Invite your friends and loved ones to celebrate with Apoorv & Chhavi.
                  </p>
                </div>

                <div className="space-y-2.5 border-t border-b border-gold-500/20 py-3">
                  <button
                    onClick={handleWhatsAppShare}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-white font-cormorant text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 transition border border-emerald-500/30 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Share on WhatsApp</span>
                  </button>

                  <button
                    onClick={handleCopyLink}
                    className="w-full py-2.5 px-4 rounded-xl bg-black/40 hover:bg-gold-500/20 text-[#EBD1A5] font-cormorant text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition border border-gold-500/30 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#EBD1A5]" />
                        <span>Copy Invitation Link</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="font-cormorant text-xs text-[#EBD1A5]/70 italic">
                  #ApoorvedByChhavi • 9.10.11 December 2026 Goa
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </footer>
  );
}
