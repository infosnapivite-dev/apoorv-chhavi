import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Copy, Check } from 'lucide-react';

// Hand-Drawn Minimalist Gold Heart SVG
function HandDrawnHeart({ className = "w-5 h-5 text-[#EBD1A5]" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M50 82 C45 78 18 55 18 35 C18 22 28 14 40 16 C46 17 49 22 50 25 C51 22 54 17 60 16 C72 14 82 22 82 35 C82 55 55 78 50 82 Z"
        stroke="currentColor"
        strokeOpacity="0.85"
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
        <div className="w-[3px] h-2.5 bg-gradient-to-b from-[#1C1208] via-[#5A3F1F] to-[#2B1B0A]" />
        
        {/* Realistic SVG Vintage Industrial Lamp */}
        <svg
          viewBox="0 0 140 85"
          className="w-20 sm:w-24 h-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.95)] overflow-visible"
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

          {/* Metallic Highlights & Shadow Ribs */}
          <path d="M46 54 C46 32 56 20 70 20" stroke="#FFEBB5" strokeWidth="0.9" strokeOpacity="0.45" />
          <path d="M94 54 C94 32 84 20 70 20" stroke="#1A0D03" strokeWidth="1.2" strokeOpacity="0.7" />

          {/* Inner Reflector Parabolic Dish */}
          <ellipse cx="70" cy="56" rx="30" ry="9" fill="url(#reflectorDish)" stroke="#523512" strokeWidth="1" />

          {/* Outer Bezel Rim */}
          <ellipse cx="70" cy="56" rx="31" ry="8" fill="none" stroke="url(#bezelRing)" strokeWidth="2.4" />

          {/* Tungsten Bulb Socket */}
          <rect x="66" y="47" width="8" height="5" fill="#422910" rx="1" />

          {/* Incandescent Glass Bulb with Glowing Core */}
          <circle cx="70" cy="55" r="9" fill="url(#bulbCore)" />
          
          {/* Tungsten Filament Hot Wire */}
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
          className="absolute top-[38px] w-10 h-10 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,215,115,0.7) 35%, rgba(255,160,30,0.3) 65%, rgba(0,0,0,0) 100%)',
            filter: 'blur(3px)'
          }}
        />
      </motion.div>

      {/* Downward Volumetric Atmospheric Light Beam */}
      <motion.div
        animate={{
          opacity: [0.85, 1, 0.88, 1, 0.85]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 w-[260px] sm:w-[300px] h-[260px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 222, 150, 0.35) 0%, rgba(255, 185, 75, 0.16) 38%, rgba(26, 3, 7, 0) 75%)',
          clipPath: 'polygon(37% 0%, 63% 0%, 100% 100%, 0% 100%)',
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
    const text = `💍 You're warmly invited to the Wedding Premiere of ${couple?.groom?.shortName || 'Sahil'} & ${couple?.bride?.shortName || 'Riya'}! View our official invitation here: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <footer
      id="premiere"
      className="relative min-h-full w-full flex flex-col justify-between pt-8 sm:pt-10 pb-12 sm:pb-14 px-4 sm:px-6 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "08 THE PREMIERE" - Left Aligned with Bottom Padding */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="flex items-center justify-start w-full max-w-sm mx-auto pb-2 sm:pb-3"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
            08
          </span>
          <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
            THE PREMIERE
          </span>
        </div>
      </motion.div>

      {/* Main Container - Centered and Vertically Optimized */}
      <div className="w-full max-w-sm mx-auto relative my-auto flex flex-col items-center text-center">
        
        {/* Realistic Animated Theatrical Spotlight Lamp */}
        <RealisticTheatricalSpotlight />

        {/* Spotlighted Quote Typography */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
          className="space-y-0.5 mt-1 sm:mt-1.5 relative z-10"
        >
          <p className="font-cormorant text-[10.5px] sm:text-[11.5px] tracking-[0.28em] text-[#EBD1A5]/90 uppercase font-light leading-relaxed">
            SOME STORIES
          </p>
          <p className="font-cormorant text-[10.5px] sm:text-[11.5px] tracking-[0.28em] text-[#EBD1A5]/90 uppercase font-light leading-relaxed">
            ARE BETTER
          </p>
          <p className="font-cormorant text-[10.5px] sm:text-[11.5px] tracking-[0.28em] text-[#EBD1A5]/90 uppercase font-light leading-relaxed">
            EXPERIENCED
          </p>
          <p className="font-cormorant text-[10.5px] sm:text-[11.5px] tracking-[0.28em] text-[#EBD1A5]/90 uppercase font-light leading-relaxed">
            TOGETHER.
          </p>
        </motion.div>

        {/* Thin Gold Line Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="w-12 h-[1px] bg-[#EBD1A5]/40 mx-auto my-2 sm:my-2.5 relative z-10"
        />

        {/* Main Grand Headline: "SEE YOU AT THE PREMIERE." */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
          className="space-y-0.5 relative z-10 my-0.5"
        >
          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-[32px] tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-[1.2]">
            SEE YOU AT
          </h2>
          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-[32px] tracking-[0.22em] text-[#EBD1A5] font-normal uppercase leading-[1.2]">
            THE PREMIERE.
          </h2>
        </motion.div>

        {/* Hand-Drawn Heart Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85, type: "spring", stiffness: 200 }}
          className="my-2 sm:my-2.5 flex justify-center relative z-10"
        >
          <HandDrawnHeart className="w-5 h-5 text-[#EBD1A5]" />
        </motion.div>

        {/* Couple Monogram & Wedding Date */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 1, ease: "easeOut" }}
          className="space-y-0.5 relative z-10"
        >
          <h3 className="font-cormorant text-sm sm:text-base tracking-[0.28em] text-[#EBD1A5] font-normal uppercase leading-none">
            RIYA &nbsp;×&nbsp; SAHIL
          </h3>

          <p className="font-cormorant text-xs sm:text-[12.5px] tracking-[0.26em] text-[#EBD1A5]/80 font-light uppercase leading-none pt-0.5">
            28.11.2026
          </p>
        </motion.div>

        {/* 2 Underlined Action Links: "SHARE INVITATION" & "REPLAY THE STORY" - Stacked in 2 Centered Rows */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 1.15, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-2.5 w-full mx-auto pt-4 sm:pt-5 text-[10px] sm:text-[11px] font-cormorant tracking-[0.2em] uppercase relative z-20"
        >
          {/* Row 1: SHARE INVITATION */}
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="pb-0.5 border-b border-[#EBD1A5]/60 hover:border-gold-300 text-[#EBD1A5] hover:text-gold-300 font-medium transition-all cursor-pointer whitespace-nowrap active:scale-95 text-center"
          >
            SHARE INVITATION
          </button>

          {/* Row 2: REPLAY THE STORY */}
          <button
            onClick={handleReplayStory}
            className="pb-0.5 border-b border-[#EBD1A5]/60 hover:border-gold-300 text-[#EBD1A5] hover:text-gold-300 font-medium transition-all cursor-pointer whitespace-nowrap active:scale-95 text-center"
          >
            REPLAY THE STORY
          </button>
        </motion.div>

      </div>

      {/* Footer Branding: "SNAPIVITE" - Fixed with clearance */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1.3 }}
        className="text-center pt-2 pb-1 relative z-10"
      >
        <p className="font-cormorant text-[8.5px] sm:text-[9.5px] tracking-[0.32em] text-[#EBD1A5]/50 uppercase font-light">
          SNAPIVITE
        </p>
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
                    Invite your friends and loved ones to celebrate with Riya & Sahil.
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
                  #RiyaSahilWedding • 28 November 2026
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
