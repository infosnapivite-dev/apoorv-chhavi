import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Realistic Cream & Soft Gold Butterfly SVG
function ButterflySvg({ className = "w-8 h-8", style = {} }) {
  return (
    <div className={`relative ${className}`} style={style}>
      {/* 3D Wing Flutter Container */}
      <div className="w-full h-full relative flex items-center justify-center">
        {/* Left Wing (3D flapping) */}
        <div
          className="butterfly-wing-left absolute right-1/2 w-1/2 h-full origin-right"
          style={{
            animation: 'wingFlapLeft 0.3s ease-in-out infinite alternate',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg viewBox="0 0 50 60" className="w-full h-full overflow-visible drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" fill="none">
            <defs>
              <linearGradient id="creamWingL" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#F9EFCF" stopOpacity="0.88" />
                <stop offset="85%" stopColor="#E6C887" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#8A6326" stopOpacity="0.6" />
              </linearGradient>
              <radialGradient id="wingGlowL" cx="80%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#FCEBBF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#C49B4B" stopOpacity="0.1" />
              </radialGradient>
            </defs>

            {/* Forewing */}
            <path
              d="M48 28 C45 10 32 2 12 4 C4 18 10 36 48 30 Z"
              fill="url(#creamWingL)"
              stroke="#A88242"
              strokeWidth="0.75"
            />
            <path d="M48 28 C45 10 32 2 12 4 C4 18 10 36 48 30 Z" fill="url(#wingGlowL)" />

            {/* Forewing Veins */}
            <path d="M48 28 Q32 18 16 10" stroke="#7A5623" strokeWidth="0.6" strokeOpacity="0.65" />
            <path d="M48 28 Q30 25 15 22" stroke="#7A5623" strokeWidth="0.5" strokeOpacity="0.6" />
            <path d="M35 19 Q25 28 16 32" stroke="#7A5623" strokeWidth="0.45" strokeOpacity="0.5" />

            {/* Hindwing */}
            <path
              d="M48 29 C40 38 25 56 16 48 C10 40 22 28 48 29 Z"
              fill="url(#creamWingL)"
              stroke="#A88242"
              strokeWidth="0.75"
            />
            {/* Hindwing Veins */}
            <path d="M48 29 Q30 42 19 46" stroke="#7A5623" strokeWidth="0.5" strokeOpacity="0.6" />
            <path d="M36 36 Q28 45 22 47" stroke="#7A5623" strokeWidth="0.4" strokeOpacity="0.5" />

            {/* Wing Edge Golden Dust Pearls */}
            <circle cx="14" cy="7" r="0.9" fill="#FFFDE8" />
            <circle cx="8" cy="18" r="0.8" fill="#FFFDE8" />
            <circle cx="12" cy="28" r="0.8" fill="#FFFDE8" />
            <circle cx="18" cy="46" r="0.8" fill="#FFFDE8" />
          </svg>
        </div>

        {/* Right Wing (3D flapping) */}
        <div
          className="butterfly-wing-right absolute left-1/2 w-1/2 h-full origin-left"
          style={{
            animation: 'wingFlapRight 0.3s ease-in-out infinite alternate',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg viewBox="0 0 50 60" className="w-full h-full overflow-visible drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" fill="none">
            <defs>
              <linearGradient id="creamWingR" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#F9EFCF" stopOpacity="0.88" />
                <stop offset="85%" stopColor="#E6C887" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#8A6326" stopOpacity="0.6" />
              </linearGradient>
              <radialGradient id="wingGlowR" cx="20%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#FCEBBF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#C49B4B" stopOpacity="0.1" />
              </radialGradient>
            </defs>

            {/* Forewing */}
            <path
              d="M2 28 C5 10 18 2 38 4 C46 18 40 36 2 30 Z"
              fill="url(#creamWingR)"
              stroke="#A88242"
              strokeWidth="0.75"
            />
            <path d="M2 28 C5 10 18 2 38 4 C46 18 40 36 2 30 Z" fill="url(#wingGlowR)" />

            {/* Forewing Veins */}
            <path d="M2 28 Q18 18 34 10" stroke="#7A5623" strokeWidth="0.6" strokeOpacity="0.65" />
            <path d="M2 28 Q20 25 35 22" stroke="#7A5623" strokeWidth="0.5" strokeOpacity="0.6" />
            <path d="M15 19 Q25 28 34 32" stroke="#7A5623" strokeWidth="0.45" strokeOpacity="0.5" />

            {/* Hindwing */}
            <path
              d="M2 29 C10 38 25 56 34 48 C40 40 28 28 2 29 Z"
              fill="url(#creamWingR)"
              stroke="#A88242"
              strokeWidth="0.75"
            />
            {/* Hindwing Veins */}
            <path d="M2 29 Q20 42 31 46" stroke="#7A5623" strokeWidth="0.5" strokeOpacity="0.6" />
            <path d="M14 36 Q22 45 28 47" stroke="#7A5623" strokeWidth="0.4" strokeOpacity="0.5" />

            {/* Wing Edge Golden Dust Pearls */}
            <circle cx="36" cy="7" r="0.9" fill="#FFFDE8" />
            <circle cx="42" cy="18" r="0.8" fill="#FFFDE8" />
            <circle cx="38" cy="28" r="0.8" fill="#FFFDE8" />
            <circle cx="32" cy="46" r="0.8" fill="#FFFDE8" />
          </svg>
        </div>

        {/* Slender Butterfly Body & Antennae */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <svg viewBox="0 0 16 60" className="w-3 h-full overflow-visible" fill="none">
            {/* Antennae */}
            <path d="M7 16 Q3 8 1 4 Q4 3 6 7" stroke="#664614" strokeWidth="0.75" fill="none" strokeLinecap="round" />
            <path d="M9 16 Q13 8 15 4 Q12 3 10 7" stroke="#664614" strokeWidth="0.75" fill="none" strokeLinecap="round" />
            <circle cx="1" cy="4" r="0.75" fill="#D4AF37" />
            <circle cx="15" cy="4" r="0.75" fill="#D4AF37" />

            {/* Head, Thorax & Abdomen */}
            <ellipse cx="8" cy="18" rx="1.8" ry="2.2" fill="#42290B" stroke="#8A6023" strokeWidth="0.4" />
            <ellipse cx="8" cy="25" rx="2.2" ry="4.5" fill="#52340F" stroke="#9E702D" strokeWidth="0.5" />
            <ellipse cx="8" cy="36" rx="1.6" ry="6.5" fill="#3D250A" stroke="#7D551E" strokeWidth="0.4" />
            {/* Abdomen Stripes */}
            <line x1="6.8" y1="33" x2="9.2" y2="33" stroke="#D4AF37" strokeWidth="0.4" strokeOpacity="0.8" />
            <line x1="6.6" y1="36" x2="9.4" y2="36" stroke="#D4AF37" strokeWidth="0.4" strokeOpacity="0.8" />
            <line x1="6.8" y1="39" x2="9.2" y2="39" stroke="#D4AF37" strokeWidth="0.4" strokeOpacity="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function CreamButterflies({ isInvitationOpen }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isInvitationOpen) return;

    // Inject 3D keyframe wing flutter styles
    let styleEl = document.getElementById('butterfly-keyframes');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'butterfly-keyframes';
      styleEl.textContent = `
        @keyframes wingFlapLeft {
          0% { transform: rotateY(0deg) rotateZ(0deg); }
          50% { transform: rotateY(55deg) rotateZ(-6deg); }
          100% { transform: rotateY(-20deg) rotateZ(4deg); }
        }
        @keyframes wingFlapRight {
          0% { transform: rotateY(0deg) rotateZ(0deg); }
          50% { transform: rotateY(-55deg) rotateZ(6deg); }
          100% { transform: rotateY(20deg) rotateZ(-4deg); }
        }
      `;
      document.head.appendChild(styleEl);
    }

    const timer = setTimeout(() => {
      const isMobile = window.innerWidth <= 600;
      const scrollTarget = (!isMobile && document.querySelector('.inner-app-container'))
        ? document.querySelector('.inner-app-container')
        : window;

      const triggerElement = (!isMobile && document.querySelector('.inner-app-container'))
        ? document.querySelector('.inner-app-container')
        : document.body;

      // Butterfly 1: Large Leading Butterfly (Left Top Hero -> S-curve flight down)
      const b1 = document.getElementById('bf-1');
      if (b1) {
        gsap.to(b1, {
          y: '320px',
          x: '75px',
          rotation: 40,
          scale: 1.15,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: 'top top',
            end: '25% top',
            scrub: 1.2,
          },
        });
      }

      // Butterfly 2: Medium Butterfly (Right Top Hero -> sweeping arc inwards)
      const b2 = document.getElementById('bf-2');
      if (b2) {
        gsap.to(b2, {
          y: '380px',
          x: '-70px',
          rotation: -35,
          scale: 0.9,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: 'top top',
            end: '30% top',
            scrub: 1.4,
          },
        });
      }

      // Butterfly 3: Story Section Left (Flies in wave down into Events)
      const b3 = document.getElementById('bf-3');
      if (b3) {
        gsap.to(b3, {
          y: '420px',
          x: '60px',
          rotation: 28,
          scale: 1.2,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: '10% top',
            end: '45% top',
            scrub: 1.5,
          },
        });
      }

      // Butterfly 4: Story Section Right (Flutters across)
      const b4 = document.getElementById('bf-4');
      if (b4) {
        gsap.to(b4, {
          y: '360px',
          x: '-55px',
          rotation: -45,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: '15% top',
            end: '50% top',
            scrub: 1.3,
          },
        });
      }

      // Butterfly 5: Events Section Left (Glides down along ceremony bars)
      const b5 = document.getElementById('bf-5');
      if (b5) {
        gsap.to(b5, {
          y: '450px',
          x: '65px',
          rotation: 32,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: '28% top',
            end: '65% top',
            scrub: 1.2,
          },
        });
      }

      // Butterfly 6: The Moment Section Right (Drifts across mandap picture)
      const b6 = document.getElementById('bf-6');
      if (b6) {
        gsap.to(b6, {
          y: '400px',
          x: '-80px',
          rotation: -30,
          scale: 1.1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: '42% top',
            end: '78% top',
            scrub: 1.4,
          },
        });
      }

      // Butterfly 7: Countdown Section Left (Arcs towards timers)
      const b7 = document.getElementById('bf-7');
      if (b7) {
        gsap.to(b7, {
          y: '340px',
          x: '50px',
          rotation: 22,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: '55% top',
            end: '85% top',
            scrub: 1.3,
          },
        });
      }

      // Butterfly 8: Gallery Section Right (Glides along photo reel)
      const b8 = document.getElementById('bf-8');
      if (b8) {
        gsap.to(b8, {
          y: '380px',
          x: '-60px',
          rotation: -25,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: '65% top',
            end: '95% top',
            scrub: 1.5,
          },
        });
      }

      // Butterfly 9: Venue Section Left (Descends near palace line-art)
      const b9 = document.getElementById('bf-9');
      if (b9) {
        gsap.to(b9, {
          y: '320px',
          x: '55px',
          rotation: 26,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: '75% top',
            end: 'bottom bottom',
            scrub: 1.2,
          },
        });
      }

      // Butterfly 10: Premiere Finale Right (Ascends towards theatrical spotlight)
      const b10 = document.getElementById('bf-10');
      if (b10) {
        gsap.to(b10, {
          y: '-180px',
          x: '-45px',
          rotation: -40,
          scale: 1.12,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scrollTarget === window ? undefined : scrollTarget,
            start: '82% top',
            end: 'bottom bottom',
            scrub: 1.4,
          },
        });
      }

      // Add gentle organic hovering to all butterflies
      document.querySelectorAll('.butterfly-item').forEach((item, index) => {
        gsap.to(item, {
          x: `+=${(index % 2 === 0 ? 1 : -1) * (10 + (index % 4) * 3)}`,
          y: `+=${(index % 3 === 0 ? 1 : -1) * (8 + (index % 3) * 3)}`,
          rotation: `+=${(index % 2 === 0 ? 1 : -1) * 12}`,
          duration: 2.4 + (index % 3) * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: (index * 0.25) % 1.5,
        });
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isInvitationOpen]);

  if (!isInvitationOpen) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-25 select-none"
    >
      {/* 1. Large Cream Butterfly - Top Hero Left */}
      <div
        id="bf-1"
        className="butterfly-item absolute top-[4%] left-[3%] will-change-transform opacity-95 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      >
        <ButterflySvg className="w-10 sm:w-12 h-10 sm:h-12 -rotate-12" />
      </div>

      {/* 2. Medium Cream Butterfly - Top Hero Right */}
      <div
        id="bf-2"
        className="butterfly-item absolute top-[11%] right-[4%] will-change-transform opacity-90 filter drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]"
      >
        <ButterflySvg className="w-7 sm:w-8 h-7 sm:h-8 rotate-[25deg]" />
      </div>

      {/* 3. Small Cream Butterfly - Story Left */}
      <div
        id="bf-3"
        className="butterfly-item absolute top-[21%] left-[5%] will-change-transform opacity-85 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
      >
        <ButterflySvg className="w-5 sm:w-6 h-5 sm:h-6 -rotate-[35deg]" />
      </div>

      {/* 4. Medium Cream Butterfly - Story Right */}
      <div
        id="bf-4"
        className="butterfly-item absolute top-[29%] right-[3%] will-change-transform opacity-90 filter drop-shadow-[0_3px_9px_rgba(0,0,0,0.5)]"
      >
        <ButterflySvg className="w-7 sm:w-8 h-7 sm:h-8 rotate-[15deg]" />
      </div>

      {/* 5. Small Cream Butterfly - Events Left */}
      <div
        id="bf-5"
        className="butterfly-item absolute top-[41%] left-[4%] will-change-transform opacity-85 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
      >
        <ButterflySvg className="w-6 sm:w-7 h-6 sm:h-7 -rotate-[20deg]" />
      </div>

      {/* 6. Large Cream Butterfly - The Moment Right */}
      <div
        id="bf-6"
        className="butterfly-item absolute top-[52%] right-[3%] will-change-transform opacity-95 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      >
        <ButterflySvg className="w-10 sm:w-11 h-10 sm:h-11 rotate-[28deg]" />
      </div>

      {/* 7. Small Cream Butterfly - Countdown Left */}
      <div
        id="bf-7"
        className="butterfly-item absolute top-[64%] left-[6%] will-change-transform opacity-85 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
      >
        <ButterflySvg className="w-5 sm:w-6 h-5 sm:h-6 -rotate-[18deg]" />
      </div>

      {/* 8. Medium Cream Butterfly - Gallery Right */}
      <div
        id="bf-8"
        className="butterfly-item absolute top-[75%] right-[5%] will-change-transform opacity-90 filter drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]"
      >
        <ButterflySvg className="w-7 sm:w-8 h-7 sm:h-8 rotate-[22deg]" />
      </div>

      {/* 9. Small Cream Butterfly - Venue Left */}
      <div
        id="bf-9"
        className="butterfly-item absolute top-[86%] left-[4%] will-change-transform opacity-85 filter drop-shadow-[0_3px_8px_rgba(0,0,0,0.4)]"
      >
        <ButterflySvg className="w-6 sm:w-7 h-6 sm:h-7 -rotate-[30deg]" />
      </div>

      {/* 10. Medium Cream Butterfly - Finale Right */}
      <div
        id="bf-10"
        className="butterfly-item absolute top-[94%] right-[5%] will-change-transform opacity-90 filter drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]"
      >
        <ButterflySvg className="w-8 sm:w-9 h-8 sm:h-9 rotate-[14deg]" />
      </div>
    </div>
  );
}
