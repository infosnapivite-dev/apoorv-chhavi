import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { weddingData } from './data/weddingData';
import IPhoneFrame from './components/IPhoneFrame';
import { EnvelopeGate } from './components/EnvelopeGate';
import { HeroCouple } from './components/HeroCouple';
import { StoryTimeline } from './components/StoryTimeline';
import { EventsSection } from './components/EventsSection';
import { TheMomentSection } from './components/TheMomentSection';
import { CountdownSection } from './components/CountdownSection';
import { MomentsSlider } from './components/MomentsSlider';
import { VenueSection } from './components/VenueSection';
import { FooterThankYou } from './components/FooterThankYou';
import { FloatingControls } from './components/FloatingControls';
import { CreamButterflies } from './components/CreamButterflies';

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <div className="desktop-viewport-container">
      {/* Realistic iPhone 15 Pro Chassis on Desktop */}
      <IPhoneFrame>
        {/* 1. Gated Royal Envelope Opening Screen */}
        <AnimatePresence>
          {!isInvitationOpen && (
            <EnvelopeGate
              onOpen={() => setIsInvitationOpen(true)}
              couple={weddingData.couple}
            />
          )}
        </AnimatePresence>

        {/* Main Single Page Application Content */}
        <div
          className={`min-h-full bg-transparent text-slate-100 font-sans transition-opacity duration-1000 ${
            isInvitationOpen ? "opacity-100" : "opacity-0 h-full overflow-hidden"
          }`}
        >
          {/* Floating Navigation & Audio Controls */}
          <FloatingControls isInvitationOpen={isInvitationOpen} />

          <main style={{ position: 'relative', width: '100%', height: '100%', scrollBehavior: 'smooth' }}>
            {/* GSAP Scroll-Triggered Cream Butterflies */}
            <CreamButterflies isInvitationOpen={isInvitationOpen} />

            {/* 2. The Couple Hero Section (02 THE CAST) */}
            <HeroCouple couple={weddingData.couple} />

            {/* 3. Our Story Section (03 THE STORY) */}
            <StoryTimeline milestones={weddingData.storyMilestones} />

            {/* 4. Events & Ceremonies Section (04 THE WEDDING WORLD) */}
            <EventsSection events={weddingData.events} />

            {/* 5. The Moment (05 THE MOMENT) */}
            <TheMomentSection weddingEvent={weddingData.events?.find(e => e.id === 'wedding')} />

            {/* 6. Premium Live Countdown Section */}
            <CountdownSection
              targetDateISO={weddingData.couple.weddingDateISO}
              coupleNames={weddingData.couple.monogram}
            />

            {/* 7. The Moments (Cinematic Ken Burns Reel) */}
            <MomentsSlider moments={weddingData.moments} />

            {/* 8. Venue & Destination Section (07 THE FINAL CREDITS) */}
            <VenueSection venue={weddingData.venue} />

            {/* 9. Thank You Footer Section */}
            <FooterThankYou couple={weddingData.couple} />
          </main>
        </div>
      </IPhoneFrame>
    </div>
  );
}
