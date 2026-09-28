import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Download, ExternalLink, Check, Copy } from 'lucide-react';
import {
  generateGoogleCalendarUrl,
  generateOutlookUrl,
  generateYahooUrl,
  downloadIcsFile,
  weddingFullEvent
} from '../utils/calendarHelper';

export function AddToCalendarModal({
  isOpen,
  onClose,
  event = weddingFullEvent
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentEvent = event || weddingFullEvent;

  const handleGoogle = () => {
    const url = generateGoogleCalendarUrl(currentEvent);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOutlook = () => {
    const url = generateOutlookUrl(currentEvent);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleYahoo = () => {
    const url = generateYahooUrl(currentEvent);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAppleIcs = () => {
    const filename = `${(currentEvent.title || 'Wedding').replace(/[^a-zA-Z0-9]/g, '_')}.ics`;
    downloadIcsFile(currentEvent, filename);
  };

  const handleCopyDetails = () => {
    const textToCopy = `${currentEvent.title}\n\nDates: 9, 10, 11 December 2026\nVenue: ${currentEvent.location || currentEvent.venue || 'Goa Marriott Resort & Spa'}\n\n${currentEvent.details || currentEvent.description || ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10001] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none cursor-pointer"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-sm w-full bg-[#180306] border border-[#EBD1A5]/45 rounded-2xl p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] cursor-default text-center text-[#EBD1A5]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#EBD1A5] hover:text-black text-[#EBD1A5] transition-all cursor-pointer border border-[#EBD1A5]/30"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Icon */}
          <div className="w-11 h-11 mx-auto mb-3 rounded-full bg-[#EBD1A5]/10 border border-[#EBD1A5]/30 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-[#EBD1A5]" />
          </div>

          <p className="font-cormorant text-[10px] sm:text-[11px] tracking-[0.26em] text-[#EBD1A5]/75 uppercase font-light leading-none">
            SAVE THE DATE
          </p>

          <h3 className="font-cormorant text-xl sm:text-2xl tracking-[0.16em] text-[#EBD1A5] font-normal uppercase mt-1 mb-1 leading-tight">
            {currentEvent.title || "Wedding Celebrations"}
          </h3>

          <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.12em] text-[#EBD1A5]/80 uppercase font-medium">
            9 • 10 • 11 DECEMBER 2026
          </p>
          <p className="font-cormorant text-[11px] sm:text-[12px] tracking-[0.1em] text-[#EBD1A5]/70 italic mt-0.5 mb-4">
            Goa Marriott Resort &amp; Spa
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center w-full max-w-[180px] mx-auto my-3">
            <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
            <span className="px-2 text-[7px] text-[#EBD1A5]/60 leading-none">◆</span>
            <div className="h-[1px] w-full bg-[#EBD1A5]/25" />
          </div>

          {/* Calendar Options List */}
          <div className="space-y-2.5 w-full">
            {/* Google Calendar */}
            <button
              onClick={handleGoogle}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2A080E] to-[#1F0408] border border-[#EBD1A5]/30 hover:border-[#EBD1A5] hover:bg-[#EBD1A5]/15 text-[#EBD1A5] transition-all cursor-pointer group shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#EBD1A5]/15 flex items-center justify-center text-xs font-semibold text-[#EBD1A5]">
                  G
                </div>
                <div className="text-left">
                  <div className="font-cormorant text-[14px] tracking-[0.12em] uppercase font-medium text-[#EBD1A5] leading-tight">
                    Google Calendar
                  </div>
                  <div className="font-sans text-[8px] tracking-[0.08em] text-[#EBD1A5]/60 uppercase">
                    Sync directly to your Google account
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#EBD1A5]/60 group-hover:text-[#EBD1A5] group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Apple Calendar / iCal */}
            <button
              onClick={handleAppleIcs}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2A080E] to-[#1F0408] border border-[#EBD1A5]/30 hover:border-[#EBD1A5] hover:bg-[#EBD1A5]/15 text-[#EBD1A5] transition-all cursor-pointer group shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#EBD1A5]/15 flex items-center justify-center text-xs font-semibold text-[#EBD1A5]">
                  
                </div>
                <div className="text-left">
                  <div className="font-cormorant text-[14px] tracking-[0.12em] uppercase font-medium text-[#EBD1A5] leading-tight">
                    Apple Calendar / iCal
                  </div>
                  <div className="font-sans text-[8px] tracking-[0.08em] text-[#EBD1A5]/60 uppercase">
                    iPhone, iPad, Mac &amp; Outlook (.ics)
                  </div>
                </div>
              </div>
              <Download className="w-3.5 h-3.5 text-[#EBD1A5]/60 group-hover:text-[#EBD1A5] group-hover:translate-y-0.5 transition-all" />
            </button>

            {/* Outlook */}
            <button
              onClick={handleOutlook}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2A080E] to-[#1F0408] border border-[#EBD1A5]/30 hover:border-[#EBD1A5] hover:bg-[#EBD1A5]/15 text-[#EBD1A5] transition-all cursor-pointer group shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#EBD1A5]/15 flex items-center justify-center text-xs font-semibold text-[#EBD1A5]">
                  O
                </div>
                <div className="text-left">
                  <div className="font-cormorant text-[14px] tracking-[0.12em] uppercase font-medium text-[#EBD1A5] leading-tight">
                    Outlook / Office 365
                  </div>
                  <div className="font-sans text-[8px] tracking-[0.08em] text-[#EBD1A5]/60 uppercase">
                    Add to Outlook.com or Office
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#EBD1A5]/60 group-hover:text-[#EBD1A5] group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Yahoo */}
            <button
              onClick={handleYahoo}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2A080E] to-[#1F0408] border border-[#EBD1A5]/30 hover:border-[#EBD1A5] hover:bg-[#EBD1A5]/15 text-[#EBD1A5] transition-all cursor-pointer group shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#EBD1A5]/15 flex items-center justify-center text-xs font-semibold text-[#EBD1A5]">
                  Y
                </div>
                <div className="text-left">
                  <div className="font-cormorant text-[14px] tracking-[0.12em] uppercase font-medium text-[#EBD1A5] leading-tight">
                    Yahoo Calendar
                  </div>
                  <div className="font-sans text-[8px] tracking-[0.08em] text-[#EBD1A5]/60 uppercase">
                    Add to Yahoo calendar online
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#EBD1A5]/60 group-hover:text-[#EBD1A5] group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>

          {/* Copy Details Action */}
          <div className="mt-4 pt-3 border-t border-[#EBD1A5]/20 flex items-center justify-center">
            <button
              onClick={handleCopyDetails}
              className="flex items-center gap-1.5 text-[11px] font-sans tracking-wider uppercase text-[#EBD1A5]/75 hover:text-[#EBD1A5] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Wedding details copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Wedding Schedule</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
