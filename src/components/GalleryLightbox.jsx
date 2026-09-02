import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { FloralDividerSvg } from './SvgFlourishes';

export function GalleryLightbox({ items }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'pre-wedding', label: 'Shoot' },
    { id: 'proposal', label: 'Proposal' },
    { id: 'candid', label: 'Candid' }
  ];

  const filteredItems = activeTab === 'all'
    ? items
    : items.filter(item => item.category === activeTab);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const handleLightboxPrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleLightboxNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="relative py-16 px-4 w-full bg-transparent overflow-hidden">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-2 text-[#EBD1A5] text-[11px] tracking-[0.28em] uppercase font-sans font-semibold mb-2"
          >
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Captured Memories</span>
            <Sparkles className="w-3 h-3 text-gold-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-3xl text-gold-100 font-semibold"
          >
            Photo Gallery
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <FloralDividerSvg className="w-36 h-5 my-2 mx-auto text-gold-400" />
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-sans uppercase tracking-wider font-semibold transition-all ${
                activeTab === cat.id
                  ? "bg-gold-500 text-burgundy-950 shadow-md border border-gold-400"
                  : "bg-black/40 text-gold-200 border border-gold-500/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Mobile Photo Grid */}
        <motion.div layout className="grid grid-cols-2 gap-2.5">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedImageIndex(idx)}
              className="relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer border border-gold-500/30 shadow-md group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <p className="font-playfair text-xs text-gold-200 truncate">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 select-none"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxPrev();
              }}
              className="absolute left-3 z-50 p-2.5 rounded-full bg-white/10 text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-sm max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-w-full max-h-[65vh] object-contain rounded-xl border border-gold-500/40"
              />
              <p className="font-playfair text-base text-gold-200 mt-3 text-center">
                {filteredItems[selectedImageIndex].title}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxNext();
              }}
              className="absolute right-3 z-50 p-2.5 rounded-full bg-white/10 text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
