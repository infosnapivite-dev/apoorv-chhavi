import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { weddingData } from './data/weddingData';
import IPhoneFrame from './components/IPhoneFrame';
import { EnvelopeGate } from './components/EnvelopeGate';
import { HeroCouple } from './components/HeroCouple';
import { StoryTimeline } from './components/StoryTimeline';
import { EventsSection } from './components/EventsSection';
import { CountdownSection } from './components/CountdownSection';
import { GallerySection } from './components/GallerySection';
import { VenueSection } from './components/VenueSection';
import { FooterThankYou } from './components/FooterThankYou';
import { FloatingControls } from './components/FloatingControls';
import { CreamButterflies } from './components/CreamButterflies';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <div className="desktop-viewport-container">
      {/* Lenis Buttery Smooth Scroll Engine */}
      <SmoothScroll isInvitationOpen={isInvitationOpen} />

      {/* Realistic iPhone 15 Pro Chassis on Desktop */}
      <IPhoneFrame>
        {/* 1. Opening Animation & The Hook (01 THE HOOK) */}
        <AnimatePresence>
          {!isInvitationOpen && (
            <EnvelopeGate
              onOpen={() => setIsInvitationOpen(true)}
            />
          )}
        </AnimatePresence>

        {/* Main Single Page Application Content */}
        <div
          className={`min-h-full bg-transparent text-slate-100 font-sans transition-opacity duration-1000 ${
            isInvitationOpen ? "opacity-100" : "opacity-0 h-full overflow-hidden"
          }`}
        >
          {/* Floating Audio & Scroll Controls */}
          <FloatingControls isInvitationOpen={isInvitationOpen} />

          <main className="relative w-full min-h-full overflow-x-hidden">
            {/* GSAP Scroll-Triggered Cream Butterflies */}
            <CreamButterflies isInvitationOpen={isInvitationOpen} />

            {/* 2. The Cast (02 THE CAST) */}
            <HeroCouple couple={weddingData.couple} />

            {/* 3. The Story (03 THE STORY) */}
            <StoryTimeline />

            {/* 4. The Wedding World (04 THE WEDDING WORLD) */}
            <EventsSection events={weddingData.events} />

            {/* 5. The Countdown (05 THE COUNTDOWN) */}
            <CountdownSection
              targetDateISO={weddingData.couple.weddingDateISO}
            />

            {/* 6. The Gallery (07 THE GALLERY) */}
            <GallerySection items={weddingData.gallery} />

            {/* 7. The Final Credits & Families (06 THE FINAL CREDITS) */}
            <VenueSection />

            {/* 8. The Premiere (7 THE PREMIERE) */}
            <FooterThankYou couple={weddingData.couple} />
          </main>
        </div>
      </IPhoneFrame>
    </div>
  );
}
