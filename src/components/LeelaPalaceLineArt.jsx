import React from 'react';

export function LeelaPalaceLineArt({ className = "w-full max-w-xs h-auto", color = "#EBD1A5" }) {
  return (
    <svg
      viewBox="0 0 500 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ground Base Line */}
      <line x1="20" y1="225" x2="480" y2="225" strokeWidth="1.5" />
      <line x1="40" y1="230" x2="460" y2="230" strokeWidth="0.8" opacity="0.6" />

      {/* Main Base Pillars & Arches */}
      <path d="M50 225 V140 H110 V225" />
      <path d="M110 225 V125 H180 V225" />
      <path d="M180 225 V110 H220 V225" />
      
      {/* Center Grand Arch Portal */}
      <path d="M220 225 V90 H280 V225" />
      <path d="M235 225 V160 Q250 140 265 160 V225" strokeWidth="1.4" />
      <path d="M240 170 Q250 152 260 170" />
      <circle cx="250" cy="120" r="10" strokeWidth="1" />
      <path d="M250 100 V110 M250 130 V140 M240 120 H230 M260 120 H270" strokeWidth="0.8" />

      {/* Right Wings */}
      <path d="M280 225 V110 H320 V225" />
      <path d="M320 225 V125 H390 V225" />
      <path d="M390 225 V140 H450 V225" />

      {/* Ground Floor Arched Openings */}
      {/* Left wing arches */}
      <path d="M65 225 V180 Q80 165 95 180 V225" />
      <path d="M125 225 V170 Q145 155 165 170 V225" />
      <path d="M190 225 V165 Q200 155 210 165 V225" />

      {/* Right wing arches */}
      <path d="M290 225 V165 Q300 155 310 165 V225" />
      <path d="M335 225 V170 Q355 155 375 170 V225" />
      <path d="M405 225 V180 Q420 165 435 180 V225" />

      {/* Second Tier Cornices & Jharokhas */}
      <line x1="45" y1="140" x2="455" y2="140" strokeWidth="1.5" />
      <line x1="45" y1="135" x2="455" y2="135" strokeWidth="0.8" opacity="0.7" />

      {/* Upper Floor Windows & Jharokha Balconies */}
      {/* Left Jharokhas */}
      <rect x="60" y="90" width="40" height="45" />
      <path d="M70 135 V105 Q80 95 90 105 V135" />
      <rect x="125" y="75" width="40" height="60" />
      <path d="M135 135 V95 Q145 85 155 95 V135" />

      {/* Center Grand Dome & Chhatri Pavilion */}
      <rect x="225" y="55" width="50" height="35" />
      <path d="M232 90 V68 Q250 58 268 68 V90" />
      
      {/* Center Dome Roof */}
      <path d="M220 55 Q250 15 280 55 Z" fill="#EBD1A5" fillOpacity="0.08" strokeWidth="1.4" />
      <line x1="250" y1="15" x2="250" y2="5" strokeWidth="1.5" />
      <circle cx="250" cy="4" r="2.5" fill="#EBD1A5" />

      {/* Flanking Domes Left & Right */}
      {/* Left Mid Dome */}
      <path d="M120 75 Q145 42 170 75 Z" strokeWidth="1.3" />
      <line x1="145" y1="42" x2="145" y2="34" strokeWidth="1.2" />
      <circle cx="145" cy="33" r="2" fill="#EBD1A5" />

      {/* Left Outer Dome */}
      <path d="M55 90 Q80 62 105 90 Z" strokeWidth="1.2" />
      <line x1="80" y1="62" x2="80" y2="54" strokeWidth="1.2" />
      <circle cx="80" cy="53" r="1.8" fill="#EBD1A5" />

      {/* Right Mid Dome */}
      <path d="M330 75 Q355 42 380 75 Z" strokeWidth="1.3" />
      <line x1="355" y1="42" x2="355" y2="34" strokeWidth="1.2" />
      <circle cx="355" cy="33" r="2" fill="#EBD1A5" />

      {/* Right Jharokhas */}
      <rect x="335" y="75" width="40" height="60" />
      <path d="M345 135 V95 Q355 85 365 95 V135" />
      <rect x="400" y="90" width="40" height="45" />
      <path d="M410 135 V105 Q420 95 430 105 V135" />

      {/* Right Outer Dome */}
      <path d="M395 90 Q420 62 445 90 Z" strokeWidth="1.2" />
      <line x1="420" y1="62" x2="420" y2="54" strokeWidth="1.2" />
      <circle cx="420" cy="53" r="1.8" fill="#EBD1A5" />

      {/* Decorative Finials & Ornamental Jali Grilles */}
      {/* Decorative vertical linework */}
      <line x1="80" y1="140" x2="80" y2="165" strokeDasharray="2 3" strokeWidth="0.8" />
      <line x1="145" y1="140" x2="145" y2="155" strokeDasharray="2 3" strokeWidth="0.8" />
      <line x1="355" y1="140" x2="355" y2="155" strokeDasharray="2 3" strokeWidth="0.8" />
      <line x1="420" y1="140" x2="420" y2="165" strokeDasharray="2 3" strokeWidth="0.8" />

      {/* Miniature Corner Chhatris */}
      <path d="M185 110 Q195 85 205 110 Z" strokeWidth="1" />
      <line x1="195" y1="85" x2="195" y2="78" strokeWidth="1" />
      <path d="M295 110 Q305 85 315 110 Z" strokeWidth="1" />
      <line x1="305" y1="85" x2="305" y2="78" strokeWidth="1" />

      {/* Intricate Jali Dots & Star Accents */}
      <circle cx="80" cy="115" r="1" fill="#EBD1A5" />
      <circle cx="145" cy="110" r="1.2" fill="#EBD1A5" />
      <circle cx="355" cy="110" r="1.2" fill="#EBD1A5" />
      <circle cx="420" cy="115" r="1" fill="#EBD1A5" />
    </svg>
  );
}
