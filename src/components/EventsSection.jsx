import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, X, MapPin, Shirt, CalendarPlus } from 'lucide-react';
import palaceImg from '../assets/palace_world.webp';
import haldiImg from '../assets/event_haldi.webp';
import mehendiImg from '../assets/event_mehendi.webp';
import sangeetImg from '../assets/event_sangeet.webp';
import weddingImg from '../assets/event_wedding.webp';
import receptionImg from '../assets/event_reception.webp';

const eventDetails = [
  {
    id: 'haldi',
    tag: 'THE GLOW',
    title: 'HALDI',
    date: '26 NOVEMBER',
    time: '9 AM',
    displayDate: '26 NOVEMBER • 9 AM',
    image: haldiImg,
    fallbackImg: '/event_haldi.webp',
    venue: 'The Courtyard Gardens, Royal Palace, Jaipur',
    dressCode: 'Sunshine Yellow & Floral Pastels',
    description: 'A joyous morning of turmeric blessings, marigold showers, traditional folk rhythms, and pure laughter.',
    calendar: {
      title: 'Riya & Sahil - Haldi Ceremony',
      start: '20261126T033000Z',
      end: '20261126T070000Z',
      location: 'The Courtyard Gardens, Royal Palace, Jaipur',
      details: 'Join us for Haldi & Floral blessings. Dress Code: Sunshine Yellow.'
    }
  },
  {
    id: 'mehendi',
    tag: 'THE COLOUR',
    title: 'MEHENDI',
    date: '26 NOVEMBER',
    time: '11 AM',
    displayDate: '26 NOVEMBER • 11 AM',
    image: mehendiImg,
    fallbackImg: '/event_mehendi.webp',
    venue: 'The Poolside Pavilions, Royal Palace, Jaipur',
    dressCode: 'Boho Festive & Emerald Green',
    description: 'Intricate henna adornments, live dholak beats, festive drinks, and colorful festivities by the water.',
    calendar: {
      title: 'Riya & Sahil - Mehendi Soirée',
      start: '20261126T053000Z',
      end: '20261126T093000Z',
      location: 'The Poolside Pavilions, Royal Palace, Jaipur',
      details: 'Mehendi ceremony with music and festivities.'
    }
  },
  {
    id: 'sangeet',
    tag: 'THE NIGHT',
    title: 'SANGEET',
    date: '27 NOVEMBER',
    time: '7 PM',
    displayDate: '27 NOVEMBER • 7 PM',
    image: sangeetImg,
    fallbackImg: '/event_sangeet.webp',
    venue: 'The Crystal Grand Ballroom, Royal Palace, Jaipur',
    dressCode: 'Indo-Western Glamour & Shimmer',
    description: 'An electrifying night of choreographed performances, high-energy beats, cocktails, and non-stop dancing.',
    calendar: {
      title: 'Riya & Sahil - Sangeet Night',
      start: '20261127T133000Z',
      end: '20261127T183000Z',
      location: 'The Crystal Grand Ballroom, Royal Palace, Jaipur',
      details: 'An evening of celebration and dance.'
    }
  },
  {
    id: 'wedding',
    tag: 'THE MOMENT',
    title: 'THE WEDDING',
    date: '28 NOVEMBER',
    time: '11 AM',
    displayDate: '28 NOVEMBER • 11 AM',
    image: weddingImg,
    fallbackImg: '/event_wedding.webp',
    venue: 'The Heritage Mandap by the Lake, Royal Palace, Jaipur',
    dressCode: 'Traditional Royal Silks & Sherwanis',
    description: 'The auspicious Vedic ceremony, varmala exchange, and sacred pheras around the holy fire.',
    calendar: {
      title: 'Riya & Sahil - The Wedding Ceremony',
      start: '20261128T053000Z',
      end: '20261128T093000Z',
      location: 'The Heritage Mandap by the Lake, Royal Palace, Jaipur',
      details: 'The sacred wedding ceremony and pheras.'
    }
  },
  {
    id: 'reception',
    tag: 'THE AFTER',
    title: 'RECEPTION',
    date: '28 NOVEMBER',
    time: '8 PM',
    displayDate: '28 NOVEMBER • 8 PM',
    image: receptionImg,
    fallbackImg: '/event_reception.webp',
    venue: 'The Grand Royal Lawns, Royal Palace, Jaipur',
    dressCode: 'Black Tie & Elegant Ethnic Formals',
    description: 'A majestic gala banquet with live symphony orchestra, champagne toasts, and heartfelt celebrations.',
    calendar: {
      title: 'Riya & Sahil - Wedding Reception',
      start: '20261128T143000Z',
      end: '20261128T183000Z',
      location: 'The Grand Royal Lawns, Royal Palace, Jaipur',
      details: 'The Grand Reception Dinner and celebrations.'
    }
  }
];

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const generateGoogleCalendarUrl = (cal) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const text = encodeURIComponent(cal.title);
    const dates = `${cal.start}/${cal.end}`;
    const details = encodeURIComponent(cal.details);
    const location = encodeURIComponent(cal.location);
    return `${baseUrl}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section
      id="events"
      className="relative min-h-full w-full flex flex-col justify-between pt-9 sm:pt-11 pb-7 px-0 bg-transparent text-[#EBD1A5] select-none overflow-hidden"
    >
      {/* Top Bar Header: "04 THE WEDDING WORLD" */}
      <div className="px-4 sm:px-6 w-full max-w-sm mx-auto pb-3 sm:pb-4 mb-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
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
        
        {/* "WELCOME TO OUR WORLD." Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-center px-4 mb-2.5 space-y-0.5"
        >
          <h2 className="font-cormorant text-base sm:text-lg tracking-[0.22em] text-[#EBD1A5] uppercase font-normal leading-tight whitespace-nowrap">
            WELCOME TO
          </h2>
          <h2 className="font-cormorant text-base sm:text-lg tracking-[0.22em] text-[#EBD1A5] uppercase font-normal leading-tight whitespace-nowrap">
            OUR WORLD.
          </h2>
        </motion.div>

        {/* Panoramic Palace Hero Feature with Soft Top Gradient Blending */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="relative w-full aspect-[16/9] overflow-hidden bg-black"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 15%, black 40%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 15%, black 40%)'
          }}
        >
          <img
            src={palaceImg}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/palace_world.webp';
            }}
            alt="The Royal Palace at Night"
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.92]"
          />
          {/* Top subtle blend overlay */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#200408] via-[#200408]/40 to-transparent pointer-events-none" />
          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#200408]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* 5 Full-Bleed Horizontal Event Rows with Left-to-Right Image Blending */}
        <div className="w-full divide-y divide-[#541B24]/70 border-t border-b border-[#541B24]/70 bg-[#1A0307]/50">
          {eventDetails.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.7, delay: 0.55 + idx * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedEvent(evt)}
              className="relative flex items-center justify-between min-h-[76px] sm:min-h-[82px] px-4 sm:px-5 overflow-hidden hover:bg-gold-500/10 active:bg-gold-500/20 transition-all duration-300 cursor-pointer group"
            >
              {/* Right Background Image touching the right border & full height with left gradient fade */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[58%] sm:w-[62%] h-full pointer-events-none overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 28%, black 65%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 28%, black 65%)'
                }}
              >
                <img
                  src={evt.image}
                  onError={(e) => {
                    if (evt.fallbackImg) {
                      e.target.onerror = null;
                      e.target.src = evt.fallbackImg;
                    }
                  }}
                  alt={evt.title}
                  className="w-full h-full object-cover object-right filter contrast-[1.06] brightness-[0.94] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Extra warm blend overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#200408]/90 via-[#200408]/30 to-transparent mix-blend-multiply pointer-events-none" />
              </div>

              {/* Left Details: Tag, Title, Date/Time strictly in 1 single row per element without wrapping */}
              <div className="relative z-10 py-2.5 space-y-0.5 max-w-[62%] pr-2">
                <p className="font-cormorant text-[9px] sm:text-[10px] tracking-[0.24em] text-[#EBD1A5]/75 uppercase font-light leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                  {evt.tag}
                </p>
                <h3 className="font-cormorant text-[13px] sm:text-[15px] tracking-[0.15em] text-[#EBD1A5] font-normal uppercase leading-tight pt-0.5 group-hover:text-gold-300 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
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
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
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

      {/* Interactive Portal Event Detail Popup Modal */}
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

              {/* Event Card */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 320, damping: 25 }}
                className="relative max-w-sm w-full bg-[#1C0408] border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl p-4 cursor-default text-center space-y-3"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Event Banner Photo */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-gold-500/30 bg-black">
                  <img
                    src={selectedEvent.image}
                    onError={(e) => {
                      if (selectedEvent.fallbackImg) {
                        e.target.onerror = null;
                        e.target.src = selectedEvent.fallbackImg;
                      }
                    }}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-gold-500/40 text-gold-300 text-[8.5px] tracking-widest uppercase font-sans font-semibold">
                    {selectedEvent.tag}
                  </div>
                </div>

                {/* Event Info */}
                <div className="space-y-0.5">
                  <h3 className="font-playfair text-xl text-gold-100 font-semibold tracking-wide whitespace-nowrap">
                    {selectedEvent.title}
                  </h3>
                  <p className="font-sans text-[11px] text-gold-400 font-medium tracking-wider uppercase whitespace-nowrap">
                    {selectedEvent.displayDate}
                  </p>
                  <p className="font-sans text-xs text-slate-300 pt-1 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>

                {/* Logistics */}
                <div className="space-y-1.5 py-2.5 border-t border-b border-gold-500/20 text-xs font-sans text-left text-slate-200">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span><strong className="text-gold-300">Venue:</strong> {selectedEvent.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shirt className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span><strong className="text-gold-300">Dress Code:</strong> {selectedEvent.dressCode}</span>
                  </div>
                </div>

                {/* Single Add to Calendar Action Button */}
                <div className="pt-1">
                  <a
                    href={generateGoogleCalendarUrl(selectedEvent.calendar)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-gold-luxury py-2.5 px-4 rounded-xl text-center text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <CalendarPlus className="w-4 h-4" />
                    <span>Add to Calendar</span>
                  </a>
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
