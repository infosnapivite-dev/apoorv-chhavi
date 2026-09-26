import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, X } from 'lucide-react';
import { weddingData } from '../data/weddingData';

// Official Marriott "M" Circular Emblem Badge
function MarriottLogoBadge({ className = "w-6 h-6 sm:w-7 sm:h-7" }) {
  return (
    <div className={`rounded-full bg-[#EBD1A5] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-[68%] h-[68%]"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Curved Tail & Main Pillar 1 */}
        <path d="M 6.5 90.5 C 11.5 90.5 17 87.5 23 80.5 C 30 73 35.5 62.5 39.5 50.5 L 26.5 14.5 L 42.5 8.5 L 68.5 87.5 L 51 87.5 L 37.5 48 C 33.5 59 28 68.5 21.5 76 C 16 82.5 11 85.5 6 85.5 L 6.5 90.5 Z" />
        {/* Main Pillar 2 & Connector Branch */}
        <path d="M 52.5 17.5 L 68.5 10.5 L 94.5 87.5 L 77 87.5 L 60.5 40.5 L 57.5 48.5 L 67 75 L 60 75 L 52.5 17.5 Z" />
      </svg>
    </div>
  );
}

// Event Modal Detail Icons (Calendar, Clock, MapPin)
function CalendarEventIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <circle cx="7.5" cy="13.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="13.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="17.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="17.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ClockEventIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 6.5 12 12 15 14" />
    </svg>
  );
}

function MapPinEventIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.8" stroke="none" fill="currentColor" />
    </svg>
  );
}

// Haldi Radiant Sun Emblem matching client reference image
function SunEmblem({ className = "w-10 h-10 text-[#EBD1A5]" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="50" cy="50" r="10.5" fill="#EBD1A5" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.2" />
      <polygon points="50,14 45.5,30 54.5,30" fill="currentColor" />
      <polygon points="50,86 45.5,70 54.5,70" fill="currentColor" />
      <polygon points="14,50 30,45.5 30,54.5" fill="currentColor" />
      <polygon points="86,50 70,45.5 70,54.5" fill="currentColor" />
      <polygon points="75.5,24.5 59.5,34.5 65.5,40.5" fill="currentColor" />
      <polygon points="24.5,24.5 40.5,34.5 34.5,40.5" fill="currentColor" />
      <polygon points="75.5,75.5 65.5,59.5 59.5,65.5" fill="currentColor" />
      <polygon points="24.5,75.5 34.5,59.5 40.5,65.5" fill="currentColor" />
    </svg>
  );
}

// Sangeet Disco Mirror Ball Emblem with Sparkles matching client reference image
function DiscoBallEmblem({ className = "w-11 h-11 text-[#EBD1A5]" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Top hanger & mount */}
      <line x1="50" y1="10" x2="50" y2="24" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="47" y="10" width="6" height="5" rx="1" fill="currentColor" stroke="none" />
      
      {/* Main Disco Ball Circle */}
      <circle cx="50" cy="54" r="27" strokeWidth="2" />
      
      {/* Longitude curved lines */}
      <ellipse cx="50" cy="54" rx="17.5" ry="27" strokeWidth="1.4" />
      <ellipse cx="50" cy="54" rx="8.5" ry="27" strokeWidth="1.4" />
      <line x1="50" y1="27" x2="50" y2="81" strokeWidth="1.4" />
      
      {/* Latitude curved lines */}
      <ellipse cx="50" cy="54" rx="27" ry="17.5" strokeWidth="1.4" />
      <ellipse cx="50" cy="54" rx="27" ry="8.5" strokeWidth="1.4" />
      <line x1="23" y1="54" x2="77" y2="54" strokeWidth="1.4" />
      
      {/* Center circle facet */}
      <circle cx="50" cy="54" r="3.2" strokeWidth="1.5" fill="#180306" />

      {/* Top-Right Sparkle */}
      <path d="M 72 20 L 73.5 24.5 L 78 26 L 73.5 27.5 L 72 32 L 70.5 27.5 L 66 26 L 70.5 24.5 Z" fill="currentColor" stroke="none" />
      
      {/* Top-Left Sparkle */}
      <path d="M 28 32 L 29 35.5 L 32.5 36.5 L 29 37.5 L 28 41 L 27 37.5 L 23.5 36.5 L 27 35.5 Z" fill="currentColor" stroke="none" />

      {/* Bottom-Right Sparkle */}
      <path d="M 75 70 L 76 72.5 L 78.5 73.5 L 76 74.5 L 75 77 L 74 74.5 L 71.5 73.5 L 74 72.5 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Bollywood Social Clapperboard Emblem matching client reference image
function ClapperboardEmblem({ className = "w-11 h-11 text-[#EBD1A5]" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Upper angled clapper stick */}
      <g transform="rotate(-14 20 40)">
        <rect x="20" y="24" width="58" height="12" rx="1.5" strokeWidth="2" />
        {/* Slanted stripes on arm */}
        <line x1="30" y1="24" x2="25" y2="36" strokeWidth="2" />
        <line x1="42" y1="24" x2="37" y2="36" strokeWidth="2" />
        <line x1="54" y1="24" x2="49" y2="36" strokeWidth="2" />
        <line x1="66" y1="24" x2="61" y2="36" strokeWidth="2" />
      </g>
      
      {/* Lower clapperboard body */}
      <rect x="24" y="44" width="54" height="40" rx="2" strokeWidth="2" />
      
      {/* Top bar of lower body with stripes */}
      <line x1="24" y1="53" x2="78" y2="53" strokeWidth="1.8" />
      <line x1="34" y1="44" x2="30" y2="53" strokeWidth="1.8" />
      <line x1="46" y1="44" x2="42" y2="53" strokeWidth="1.8" />
      <line x1="58" y1="44" x2="54" y2="53" strokeWidth="1.8" />
      <line x1="70" y1="44" x2="66" y2="53" strokeWidth="1.8" />

      {/* Production Slate Grid Lines */}
      <line x1="28" y1="63" x2="74" y2="63" strokeWidth="1.5" />
      <line x1="44" y1="57" x2="44" y2="69" strokeWidth="1.5" />
      <line x1="28" y1="74" x2="74" y2="74" strokeWidth="1.5" />
      <line x1="58" y1="68" x2="58" y2="80" strokeWidth="1.5" />
    </svg>
  );
}

// Mayra Rajasthani Jharokha / Palace Arch Emblem matching client reference image
function JharokhaEmblem({ className = "w-11 h-12 text-[#EBD1A5]" }) {
  return (
    <svg viewBox="0 0 100 110" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Top Finial / Kalash */}
      <path d="M 50 6 L 50 14" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="8" r="2" fill="currentColor" stroke="none" />
      <path d="M 46 14 C 46 11 54 11 54 14 C 54 18 50 20 50 20 C 50 20 46 18 46 14 Z" strokeWidth="1.4" fill="currentColor" fillOpacity="0.2" />
      
      {/* Top Ornate Crown / Torana Pediment */}
      <path d="M 50 18 C 42 16 35 22 28 28 L 72 28 C 65 22 58 16 50 18 Z" strokeWidth="1.6" fill="currentColor" fillOpacity="0.15" />
      {/* Filigree dots on pediment */}
      <path d="M 38 23 C 44 20 56 20 62 23" strokeWidth="1.2" />
      <circle cx="43" cy="22" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="50" cy="21" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="57" cy="22" r="1.2" fill="currentColor" stroke="none" />
      
      {/* Top horizontal cornice */}
      <line x1="24" y1="28" x2="76" y2="28" strokeWidth="2" />
      <line x1="26" y1="32" x2="74" y2="32" strokeWidth="1.5" />
      
      {/* Left Pillar */}
      <rect x="26" y="32" width="10" height="66" strokeWidth="1.6" />
      <line x1="24" y1="37" x2="38" y2="37" strokeWidth="1.5" />
      <line x1="24" y1="91" x2="38" y2="91" strokeWidth="1.5" />
      <line x1="31" y1="37" x2="31" y2="91" strokeWidth="1.2" strokeDasharray="2,2" />
      <rect x="28.5" y="48" width="5" height="12" strokeWidth="1.2" />
      <rect x="28.5" y="68" width="5" height="12" strokeWidth="1.2" />

      {/* Right Pillar */}
      <rect x="64" y="32" width="10" height="66" strokeWidth="1.6" />
      <line x1="62" y1="37" x2="76" y2="37" strokeWidth="1.5" />
      <line x1="62" y1="91" x2="76" y2="91" strokeWidth="1.5" />
      <line x1="69" y1="37" x2="69" y2="91" strokeWidth="1.2" strokeDasharray="2,2" />
      <rect x="66.5" y="48" width="5" height="12" strokeWidth="1.2" />
      <rect x="66.5" y="68" width="5" height="12" strokeWidth="1.2" />

      {/* Scalloped Rajput Multi-foil Central Arch */}
      <path
        d="M 36 98 L 36 60 C 36 52 40 45 44 42 C 46 39 48 37 50 35 C 52 37 54 39 56 42 C 60 45 64 52 64 60 L 64 98"
        strokeWidth="1.8"
      />
      <path
        d="M 39 98 L 39 62 C 39 56 41 52 43 49 C 45 46 47 42 50 39 C 53 42 55 46 57 49 C 59 52 61 56 61 62 L 61 98"
        strokeWidth="1.4"
      />
      <circle cx="50" cy="34" r="2" fill="currentColor" stroke="none" />
      <path d="M 43 49 C 47 47 53 47 57 49" strokeWidth="1.2" />

      {/* Spandrel Decorative Filigree */}
      <circle cx="41" cy="39" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="59" cy="39" r="1.5" fill="currentColor" stroke="none" />

      {/* Stepped Bottom Plinth */}
      <line x1="22" y1="98" x2="78" y2="98" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="20" y1="102" x2="80" y2="102" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

// The Wedding Beach Sunset & Palm Trees Emblem matching client reference image
function BeachSunsetEmblem({ className = "w-14 h-11 text-[#EBD1A5]" }) {
  return (
    <svg viewBox="0 0 120 90" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Setting Sun Semi-Circle on the left */}
      <path
        d="M 28 62 A 16 16 0 0 1 60 62"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Sweeping Ocean Wave Ribbons below sun */}
      <path
        d="M 18 66 C 30 63 46 63 60 66 C 70 68 85 68 95 66"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 20 72 C 34 69 50 69 66 73 C 78 75 92 74 100 71"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 25 78 C 38 75 56 75 72 80 C 82 82 96 80 102 76"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 32 84 C 44 82 60 82 76 86 C 86 87 96 85 101 82"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Main Tall Palm Tree (Right) */}
      <path
        d="M 86 76 C 85 58 84 42 82 28"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Trunk notches */}
      <line x1="84.5" y1="64" x2="87.5" y2="64" strokeWidth="1.5" />
      <line x1="84" y1="52" x2="86.5" y2="52" strokeWidth="1.5" />
      <line x1="83" y1="40" x2="85" y2="40" strokeWidth="1.5" />

      {/* Tall Palm Fronds */}
      <path d="M 82 28 C 81 18 80 12 76 8 C 78 14 80 22 82 28" fill="currentColor" stroke="none" />
      <path d="M 82 28 C 84 18 88 12 92 9 C 88 15 85 22 82 28" fill="currentColor" stroke="none" />
      <path d="M 82 28 C 74 24 64 24 56 28 C 66 29 76 29 82 28" fill="currentColor" stroke="none" />
      <path d="M 82 28 C 72 29 65 34 58 40 C 67 36 76 33 82 28" fill="currentColor" stroke="none" />
      <path d="M 82 28 C 90 24 99 25 106 30 C 97 30 89 29 82 28" fill="currentColor" stroke="none" />
      <path d="M 82 28 C 91 30 98 36 104 43 C 96 38 88 34 82 28" fill="currentColor" stroke="none" />

      {/* Smaller Palm Tree (Far Right) */}
      <path
        d="M 98 74 C 97 62 96 52 95 40"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M 95 40 C 91 33 86 30 80 32 C 86 34 91 37 95 40" fill="currentColor" stroke="none" />
      <path d="M 95 40 C 95 32 97 26 101 24 C 99 30 97 35 95 40" fill="currentColor" stroke="none" />
      <path d="M 95 40 C 101 34 107 34 113 37 C 107 38 101 39 95 40" fill="currentColor" stroke="none" />
      <path d="M 95 40 C 102 42 108 47 112 52 C 106 48 100 44 95 40" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EventSymbol({ symbolType, className = "w-10 h-10 text-[#EBD1A5]" }) {
  switch (symbolType) {
    case 'sun':
      return <SunEmblem className={className} />;
    case 'discoball':
    case 'music':
      return <DiscoBallEmblem className={className} />;
    case 'clapperboard':
    case 'stars':
      return <ClapperboardEmblem className={className} />;
    case 'jharokha':
    case 'lotus':
      return <JharokhaEmblem className={className} />;
    case 'beachsunset':
    case 'heart':
      return <BeachSunsetEmblem className="w-14 h-11 text-[#EBD1A5]" />;
    default:
      return <SunEmblem className={className} />;
  }
}

// Helper to get banner image matching the event title from /images/ folder
function getEventBannerSrc(event) {
  if (!event) return '/images/event page top image.webp';
  const title = (event.title || '').toUpperCase();
  if (title.includes('BOLLYWOOD')) return '/images/bollywood social banner.webp';
  if (title.includes('HALDI')) return '/images/haldi banner.webp';
  if (title.includes('SANGEET')) return '/images/sangeet banner.webp';
  if (title.includes('MAYRA')) return '/images/mayra banner.webp';
  if (title.includes('WEDDING')) return '/images/the wedding banner.webp';
  return event.bannerImage || event.modalImage || '/images/event page top image.webp';
}

export function EventsSection({ events = weddingData.events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="events"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-7 px-0 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "04 THE WEDDING WORLD" */}
      <div className="px-4 sm:px-6 w-full max-w-sm mx-auto pb-3 sm:pb-4 mb-2">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-start w-full"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-cormorant text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-normal leading-none whitespace-nowrap">
              04
            </span>
            <span className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.24em] text-[#EBD1A5]/90 font-normal uppercase ml-1 whitespace-nowrap">
              THE WEDDING WORLD
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-sm mx-auto relative my-auto">
        
        {/* "WELCOME TO OUR WORLD. GOA 9.10.11 DECEMBER 2026" Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-4 mb-2 space-y-0.5"
        >
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-cormorant text-[15px] sm:text-[17px] tracking-[0.24em] text-[#EBD1A5] uppercase font-normal leading-tight"
          >
            WELCOME TO
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="font-cormorant text-[15px] sm:text-[17px] tracking-[0.24em] text-[#EBD1A5] uppercase font-normal leading-tight"
          >
            OUR WORLD,
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="font-cormorant text-2xl sm:text-3xl tracking-[0.28em] text-[#EBD1A5] font-light uppercase pt-0.5"
          >
            GOA
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.26em] text-[#EBD1A5]/80 font-light uppercase"
          >
            9 • 10 • 11 DECEMBER 2026
          </motion.p>
        </motion.div>

        {/* Panoramic Goa Marriott Resort Hero Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/9] overflow-hidden bg-black"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 12%, black 35%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 12%, black 35%)'
          }}
        >
          <img
            src="/images/event page top image.webp"
            alt="Goa Marriott Resort & Spa"
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.94]"
          />
          {/* Top blend overlay */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#200408] via-[#200408]/40 to-transparent pointer-events-none" />
          
          {/* Marriott Resort Branding Badge matching Reference Image */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-2.5 right-3 z-10 flex items-center gap-2 bg-black/70 backdrop-blur-xs px-2.5 py-1.5 rounded-sm border border-gold-500/35 shadow-lg"
          >
            <MarriottLogoBadge className="w-6 h-6 sm:w-7 sm:h-7" />
            <div className="text-left font-cormorant text-[#EBD1A5] uppercase leading-[1.25]">
              <div className="text-[8px] sm:text-[9px] font-medium tracking-[0.20em] whitespace-nowrap">
                GOA MARRIOTT
              </div>
              <div className="text-[7.5px] sm:text-[8px] font-normal tracking-[0.22em] text-[#EBD1A5]/95 whitespace-nowrap">
                RESORT &amp; SPA
              </div>
              <div className="text-[7px] sm:text-[7.5px] font-light tracking-[0.24em] text-[#EBD1A5]/90 whitespace-nowrap">
                PANAJI, GOA
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 5 Full-Bleed Horizontal Event Rows with Left-to-Right Image Blending */}
        <div className="w-full divide-y divide-[#541B24]/70 border-t border-b border-[#541B24]/70 bg-[#1A0307]/50">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "-15px" }}
              transition={{ duration: 0.75, delay: 0.45 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedEvent(evt)}
              className="relative flex items-center justify-between min-h-[72px] sm:min-h-[76px] px-4 sm:px-5 overflow-hidden hover:bg-gold-500/10 active:bg-gold-500/20 transition-all duration-300 cursor-pointer group"
            >
              {/* Right Background Banner Image with Left Fade */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[58%] sm:w-[62%] h-full pointer-events-none overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 28%, black 65%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 28%, black 65%)'
                }}
              >
                <img
                  src={getEventBannerSrc(evt)}
                  alt={evt.title}
                  className="w-full h-full object-cover object-right filter contrast-[1.06] brightness-[0.94] group-hover:scale-105 transition-transform duration-500"
                />
                {/* Warm blend overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#200408]/90 via-[#200408]/30 to-transparent mix-blend-multiply pointer-events-none" />
              </div>

              {/* Left Details: Tag, Title, Date/Time */}
              <div className="relative z-10 py-2 space-y-0.5 max-w-[62%] pr-2">
                <p className="font-cormorant text-[9px] sm:text-[10px] tracking-[0.24em] text-[#EBD1A5]/75 uppercase font-light leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                  {evt.tag}
                </p>
                <h3 className="font-cormorant text-[13px] sm:text-[14.5px] tracking-[0.14em] text-[#EBD1A5] font-normal uppercase leading-tight pt-0.5 group-hover:text-gold-300 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  {evt.title}
                </h3>
                <p className="font-sans text-[8px] sm:text-[9px] tracking-[0.11em] text-[#EBD1A5]/65 uppercase font-medium pt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                  {evt.displayDate}
                </p>
              </div>

              {/* Far Right Arrow Indicator */}
              <div className="relative z-10 pr-0.5 text-[#EBD1A5]/70 group-hover:text-gold-300 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-3.5 h-3.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Animated Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mt-2.5 w-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#EBD1A5]/80"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

      {/* Interactive Portal Event Detail Popup Modal (Matching Client Reference Image) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 select-none cursor-pointer"
              onClick={() => setSelectedEvent(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 z-[10000] p-3 rounded-full bg-white/15 hover:bg-gold-500 hover:text-black text-white transition-all cursor-pointer shadow-xl border border-white/20"
                title="Close (ESC)"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Event Card Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 25 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-sm w-full bg-[#180306] border border-gold-500/40 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-default text-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Event Photo - Top Banner Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border-b border-[#3E1119]">
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    src={getEventBannerSrc(selectedEvent)}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.04]"
                  />
                  {/* Subtle Gradient Blend at Bottom of Photo */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#180306] to-transparent pointer-events-none" />
                  
                  {/* Tag badge top-left */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-gold-500/40 text-gold-300 text-[8.5px] tracking-widest uppercase font-sans font-semibold"
                  >
                    {selectedEvent.tag}
                  </motion.div>
                </div>

                {/* Bottom Details Section (Exact match to Reference Images) */}
                <div className="p-4 sm:p-5 pt-3.5 text-center flex flex-col items-center bg-[#180306]">
                  {/* 1. Main Heading */}
                  {selectedEvent.isTwoLineTitle ? (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col items-center"
                    >
                      <h2 className="font-cormorant text-2xl sm:text-3xl tracking-[0.20em] text-[#EBD1A5] font-normal uppercase leading-[1.05]">
                        {selectedEvent.titleLines ? selectedEvent.titleLines[0] : 'BOLLYWOOD'}
                      </h2>
                      <h2 className="font-cormorant text-2xl sm:text-3xl tracking-[0.20em] text-[#EBD1A5] font-normal uppercase leading-[1.05] mt-0.5">
                        {selectedEvent.titleLines ? selectedEvent.titleLines[1] : 'SOCIAL'}
                      </h2>
                    </motion.div>
                  ) : (
                    <motion.h2
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="font-cormorant text-2xl sm:text-3xl tracking-[0.20em] text-[#EBD1A5] font-normal uppercase leading-tight"
                    >
                      {selectedEvent.title}
                    </motion.h2>
                  )}

                  {/* 2. Subtitle / Quote */}
                  {selectedEvent.isQuoteSubtitle ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-1.5 mb-1.5 text-center"
                    >
                      {(selectedEvent.quoteLines || [selectedEvent.subtitle]).map((qLine, qIdx) => (
                        <p
                          key={qIdx}
                          className="font-cormorant italic text-[15px] sm:text-[17px] text-[#EBD1A5] font-normal tracking-wide leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                        >
                          {qLine}
                        </p>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ fontFamily: '"Great Vibes", "Pinyon Script", cursive' }}
                      className="text-2xl sm:text-3xl text-[#EBD1A5] font-normal tracking-wide mt-0.5 mb-1 leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                      {selectedEvent.scriptSubtitle || selectedEvent.subtitle}
                    </motion.p>
                  )}

                  {/* 3. Top Diamond Divider (Hidden for Bollywood Social as per reference) */}
                  {!selectedEvent.hideTopDivider && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0.5 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-center w-48 sm:w-56 mx-auto my-2.5"
                    >
                      <div className="h-[1px] w-full bg-[#EBD1A5]/35" />
                      <span className="px-2 text-[7px] text-[#EBD1A5]/75 leading-none">◆</span>
                      <div className="h-[1px] w-full bg-[#EBD1A5]/35" />
                    </motion.div>
                  )}

                  {/* 4. Detail Rows (Date, Time, Location / Wedding multi-stage schedule) */}
                  {selectedEvent.isWeddingSchedule ? (
                    <div className="flex flex-col items-start w-fit mx-auto space-y-2.5 text-[#EBD1A5] py-1 my-0.5">
                      {/* Date */}
                      <motion.div
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 text-left"
                      >
                        <CalendarEventIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EBD1A5]/90 shrink-0" />
                        <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-normal leading-none">
                          {selectedEvent.fullFormattedDate || selectedEvent.displayDate}
                        </span>
                      </motion.div>

                      {/* Baarat & Pheras */}
                      <motion.div
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.50, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start gap-3 text-left"
                      >
                        <MapPinEventIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EBD1A5]/90 shrink-0 mt-0.5" />
                        <div className="space-y-2 text-left">
                          <div>
                            <div className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-normal leading-tight">
                              BAARAT – ARRIVAL LOUNGE
                            </div>
                            <div className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-normal leading-tight text-[#EBD1A5]/90">
                              2:00 PM
                            </div>
                          </div>
                          <div>
                            <div className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-normal leading-tight">
                              PHERAS – BY THE BEACH
                            </div>
                            <div className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-normal leading-tight text-[#EBD1A5]/90">
                              5:00 PM
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start w-fit mx-auto space-y-2.5 text-[#EBD1A5] py-1 my-0.5">
                      {/* Date */}
                      <motion.div
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 text-left"
                      >
                        <CalendarEventIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EBD1A5]/90 shrink-0" />
                        <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-normal leading-none">
                          {selectedEvent.fullFormattedDate || selectedEvent.displayDate}
                        </span>
                      </motion.div>

                      {/* Time */}
                      <motion.div
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.49, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 text-left"
                      >
                        <ClockEventIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EBD1A5]/90 shrink-0" />
                        <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-normal leading-none">
                          {selectedEvent.formattedTime || selectedEvent.time}
                        </span>
                      </motion.div>

                      {/* Location */}
                      <motion.div
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 text-left"
                      >
                        <MapPinEventIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EBD1A5]/90 shrink-0" />
                        <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-normal leading-none">
                          {selectedEvent.locationShort || selectedEvent.venue}
                        </span>
                      </motion.div>
                    </div>
                  )}

                  {/* 5. Bottom Diamond Divider */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0.5 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.63, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center w-48 sm:w-56 mx-auto my-2.5"
                  >
                    <div className="h-[1px] w-full bg-[#EBD1A5]/35" />
                    <span className="px-2 text-[7px] text-[#EBD1A5]/75 leading-none">◆</span>
                    <div className="h-[1px] w-full bg-[#EBD1A5]/35" />
                  </motion.div>

                  {/* 6. Tagline Lines */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.70, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center space-y-0.5 py-1"
                  >
                    {(selectedEvent.taglineLines || [selectedEvent.tag || ""]).map((line, lIdx) => (
                      <p
                        key={lIdx}
                        className="font-cormorant text-[11px] sm:text-[12px] tracking-[0.22em] text-[#EBD1A5]/90 uppercase font-normal leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </motion.div>

                  {/* 7. Bottom Custom Theme Emblem */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.72, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center pt-1.5 pb-0.5"
                  >
                    <EventSymbol symbolType={selectedEvent.symbolType} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
