import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ isInvitationOpen }) {
  useEffect(() => {
    if (!isInvitationOpen) return;

    let lenisInstance = null;
    let tickerCallback = null;

    const timer = setTimeout(() => {
      const isMobile = window.innerWidth <= 600;
      const container = document.querySelector('.inner-app-container');

      const wrapper = (!isMobile && container) ? container : window;
      const content = (!isMobile && container) ? (container.firstElementChild || container) : document.documentElement;

      lenisInstance = new Lenis({
        wrapper: wrapper,
        content: content,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.2,
        infinite: false,
        syncTouch: false,
      });

      // Sync Lenis scroll with GSAP ScrollTrigger
      lenisInstance.on('scroll', () => {
        ScrollTrigger.update();
      });

      // Drive Lenis RAF via GSAP ticker
      tickerCallback = (time) => {
        lenisInstance.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.refresh();
      window.__lenis = lenisInstance;
    }, 100);

    return () => {
      clearTimeout(timer);
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
      }
      if (lenisInstance) {
        lenisInstance.destroy();
        window.__lenis = null;
      }
      ScrollTrigger.refresh();
    };
  }, [isInvitationOpen]);

  return null;
}

