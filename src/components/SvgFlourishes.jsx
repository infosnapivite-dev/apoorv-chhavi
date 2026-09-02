import React from 'react';

// Animated Royal Monogram SVG
export function GoldMonogramSvg({ className = "w-40 h-40", animated = true }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} overflow-visible`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="monogramGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE8A3" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#997E24" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Decorative Outer Wreath */}
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="url(#monogramGold)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        className={animated ? "animate-spin-slow origin-center opacity-80" : "opacity-80"}
      />
      
      {/* Inner Crest Ring */}
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="url(#monogramGold)"
        strokeWidth="2"
        className={animated ? "stroke-dash-draw" : ""}
      />

      {/* Ornate Flourishes */}
      <path
        d="M60 45 C75 30, 125 30, 140 45 C130 55, 110 50, 100 65 C90 50, 70 55, 60 45 Z"
        fill="url(#monogramGold)"
        opacity="0.9"
      />
      <path
        d="M60 155 C75 170, 125 170, 140 155 C130 145, 110 150, 100 135 C90 150, 70 145, 60 155 Z"
        fill="url(#monogramGold)"
        opacity="0.9"
      />

      {/* Monogram Letters 'A & M' */}
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="44"
        fontWeight="600"
        fill="url(#monogramGold)"
        filter="url(#goldGlow)"
        className={animated ? "stroke-dash-draw" : ""}
        letterSpacing="2"
      >
        A&M
      </text>

      {/* Decorative Subtext */}
      <text
        x="100"
        y="134"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="6"
        fill="#D4AF37"
        opacity="0.9"
      >
        DEC 2026
      </text>
    </svg>
  );
}

// 3D Wax Seal SVG
export function WaxSealSvg({ size = 84, initials = "A&M" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="drop-shadow-2xl cursor-pointer select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="waxGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#871A28" />
          <stop offset="60%" stopColor="#4A0E17" />
          <stop offset="100%" stopColor="#250409" />
        </radialGradient>
        <linearGradient id="sealGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7A5B1B" />
        </linearGradient>
      </defs>

      {/* Organic Wax Edge Blob */}
      <path
        d="M50 5 C68 4, 85 12, 92 28 C98 42, 95 62, 88 76 C80 90, 62 96, 48 95 C32 94, 15 88, 8 74 C1 58, 4 38, 12 24 C22 8, 36 6, 50 5 Z"
        fill="url(#waxGrad)"
        filter="drop-shadow(0 6px 12px rgba(0,0,0,0.4))"
      />

      {/* Inner Pressed Ring */}
      <circle
        cx="50"
        cy="50"
        r="34"
        stroke="url(#sealGoldRim)"
        strokeWidth="1.8"
        strokeDasharray="4 2"
        fill="#3D0B12"
      />

      {/* Inner Stamped Crest */}
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="url(#sealGoldRim)"
        strokeWidth="1"
        fill="#4A0E17"
      />

      {/* Stamped Initials */}
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="20"
        fontWeight="700"
        fill="url(#sealGoldRim)"
        letterSpacing="1"
      >
        {initials}
      </text>
    </svg>
  );
}

// Ornate Divider Flourish
export function FloralDividerSvg({ className = "w-48 h-6 my-4 mx-auto text-gold-500" }) {
  return (
    <svg
      viewBox="0 0 300 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M150 12 C135 4, 115 4, 90 12 C65 20, 35 12, 0 12 L0 13 C35 13, 65 21, 90 13 C115 5, 135 5, 150 13 C165 5, 185 5, 210 13 C235 21, 265 13, 300 13 L300 12 C265 12, 235 20, 210 12 C185 4, 165 4, 150 12 Z" />
      <circle cx="150" cy="12" r="3.5" />
      <circle cx="138" cy="12" r="2" />
      <circle cx="162" cy="12" r="2" />
      <path d="M150 6 C152 9, 155 10, 158 10 C155 11, 152 12, 150 15 C148 12, 145 11, 142 10 C145 10, 148 9, 150 6 Z" />
    </svg>
  );
}

// Corner Ornamental Filigree
export function CornerFlourishSvg({ className = "w-12 h-12 text-gold-500/50" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 10 L80 10 C80 15, 60 20, 50 30 C40 40, 35 60, 30 80 L10 80 L10 10 Z" opacity="0.15" />
      <path d="M5 5 L90 5 C70 12, 50 25, 40 45 C30 65, 15 80, 5 95 L5 5 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="20" r="4" />
      <circle cx="35" cy="14" r="2.5" />
      <circle cx="14" cy="35" r="2.5" />
    </svg>
  );
}

// Thematic Ceremony Icons
export function MandapIconSvg({ className = "w-8 h-8 text-gold-500" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4 21V9M20 21V9M8 21V12M16 21V12" strokeLinecap="round" />
      <path d="M2 9C7 5 17 5 22 9" strokeLinecap="round" />
      <path d="M12 3V6" strokeLinecap="round" />
      <path d="M9 21H15" strokeLinecap="round" />
      {/* Holy Fire */}
      <path d="M12 17C13 16 14 17 14 18.5C14 19.8 13.1 21 12 21C10.9 21 10 19.8 10 18.5C10 17 11 16 12 17Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function LotusIconSvg({ className = "w-8 h-8 text-gold-500" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 4C13 8 16 12 20 14C17 16 13 16 12 20C11 16 7 16 4 14C8 12 11 8 12 4Z" strokeLinejoin="round" />
      <path d="M12 9C13.5 12 16 14 19 15C16.5 17.5 13.5 17.5 12 20C10.5 17.5 7.5 17.5 5 15C8 14 10.5 12 12 9Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M2 20C7 19 17 19 22 20" strokeLinecap="round" />
    </svg>
  );
}

export function DrumIconSvg({ className = "w-8 h-8 text-gold-500" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <ellipse cx="6" cy="12" rx="3" ry="7" />
      <path d="M6 5L18 7V17L6 19" />
      <ellipse cx="18" cy="12" rx="3" ry="5" />
      <path d="M6 9L18 11M6 15L18 13" strokeDasharray="2 2" />
      <path d="M3 4L8 7M3 20L8 17" strokeLinecap="round" />
    </svg>
  );
}

export function RingsIconSvg({ className = "w-8 h-8 text-gold-500" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="9" cy="14" r="6" />
      <circle cx="15" cy="14" r="6" />
      <path d="M9 8L10 6L9 4L8 6L9 8Z" fill="currentColor" />
      <path d="M15 8L16 6L15 4L14 6L15 8Z" fill="currentColor" />
    </svg>
  );
}
