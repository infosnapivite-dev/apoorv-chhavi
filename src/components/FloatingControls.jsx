import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Volume2, VolumeX } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynthesizer';

export function FloatingControls({ isInvitationOpen }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.inner-app-container') || window;
    const handleScroll = () => {
      const scrollY = container.scrollTop !== undefined ? container.scrollTop : window.scrollY;
      setShowScrollTop(scrollY > 350);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const status = romanticAudio.toggle();
    setIsPlaying(status);
  };

  const scrollToTop = () => {
    const container = document.querySelector('.inner-app-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isInvitationOpen) return null;

  return (
    <>
      {/* Persistent Sticky Top-Right Volume Toggle Button */}
      <div className="sticky top-4 z-40 float-right mr-4 pointer-events-auto h-0 overflow-visible">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={toggleAudio}
          className="p-2 rounded-full bg-black/40 backdrop-blur-md text-[#EBD1A5]/85 hover:text-[#EBD1A5] border border-gold-500/30 hover:border-gold-500/60 shadow-lg transition active:scale-90 cursor-pointer flex items-center justify-center"
          title={isPlaying ? "Mute Background Music" : "Play Romantic Music"}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-gold-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </motion.button>
      </div>

      {/* Floating Scroll To Top Button (Bottom Right) */}
      <div className="fixed bottom-5 right-4 z-40 pointer-events-auto">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-black/75 text-gold-300 border border-gold-500/40 shadow-2xl hover:bg-gold-500 hover:text-black transition active:scale-95 cursor-pointer backdrop-blur-md"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-gold-400" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
