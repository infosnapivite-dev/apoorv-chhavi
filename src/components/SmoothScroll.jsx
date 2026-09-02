import React, { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll({ isInvitationOpen }) {
  useEffect(() => {
    if (!isInvitationOpen) return;

    let lenisInstance = null;
    let animationFrameId = null;

    // Wait a frame for DOM elements to render properly
    const timer = setTimeout(() => {
      const isMobile = window.innerWidth <= 600;
      const container = document.querySelector('.inner-app-container');

      const wrapper = (!isMobile && container) ? container : window;
      const content = (!isMobile && container) ? (container.firstElementChild || container) : document.documentElement;

      lenisInstance = new Lenis({
        wrapper: wrapper,
        content: content,
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.8,
        infinite: false,
      });

      function raf(time) {
        if (lenisInstance) {
          lenisInstance.raf(time);
        }
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      // Expose globally for programmatic smooth scrolling if needed
      window.__lenis = lenisInstance;
    }, 150);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisInstance) {
        lenisInstance.destroy();
        window.__lenis = null;
      }
    };
  }, [isInvitationOpen]);

  return null;
}
