import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { backgroundMusic } from '../utils/audioManager';

export function FloatingControls({ isInvitationOpen }) {
  const [isPlaying, setIsPlaying] = useState(backgroundMusic.isPlaying);

  useEffect(() => {
    const unsubscribe = backgroundMusic.subscribe(({ isPlaying }) => {
      setIsPlaying(isPlaying);
    });
    return unsubscribe;
  }, []);

  const toggleAudio = (e) => {
    e?.stopPropagation();
    backgroundMusic.toggle();
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
          title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-gold-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </motion.button>
      </div>
    </>
  );
}
