// Centralized Background Audio Manager
// Manages MP3 background music playback, seamless looping, autoplay fallback, and reactive state

class BackgroundAudioManager {
  constructor() {
    this.audio = null;
    this.isPlaying = true;
    this.isMuted = false;
    this.wasPlayingBeforeHidden = false;
    this.subscribers = new Set();
    this.hasUserInteracted = false;
    this.init();
  }

  init() {
    if (typeof window === 'undefined') return;

    if (!this.audio) {
      this.audio = new Audio();
      this.audio.src = '/background-music.mp3';
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = 0.75;
      this.audio.muted = false;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('volumechange', () => {
        this.isMuted = this.audio.muted || this.audio.volume === 0;
        this.notify();
      });

      this.audio.addEventListener('error', (e) => {
        console.warn('Primary audio failed, trying fallback path...', e);
        if (this.audio.src.indexOf('background-music.mp3') !== -1) {
          this.audio.src = '/freecompress-Nadaaniyan%20Akshath%20128%20Kbps.mp3';
          this.audio.load();
          if (this.isPlaying) {
            this.play();
          }
        }
      });
    }

    // Try starting playback immediately
    this.attemptAutoplay();

    // Attach first-interaction listener to handle browser autoplay policies
    this.setupInteractionListeners();

    // Attach Page Visibility API listener to auto-pause when tab/app is minimized or in background
    this.setupVisibilityListener();
  }

  setupVisibilityListener() {
    if (typeof document === 'undefined') return;

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Tab/app is hidden or minimized: pause if currently playing and remember state
        if (this.audio && !this.audio.paused && this.isPlaying) {
          this.wasPlayingBeforeHidden = true;
          this.pause();
        } else {
          this.wasPlayingBeforeHidden = false;
        }
      } else {
        // Tab/app is visible again: resume only if it was playing before leaving
        if (this.wasPlayingBeforeHidden) {
          this.play();
          this.wasPlayingBeforeHidden = false;
        }
      }
    });
  }

  setupInteractionListeners() {
    if (typeof window === 'undefined') return;

    const onFirstInteraction = () => {
      this.hasUserInteracted = true;
      if (!this.isMuted) {
        this.play();
      }
      window.removeEventListener('pointerdown', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };

    window.addEventListener('pointerdown', onFirstInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', onFirstInteraction, { passive: true, once: true });
    window.addEventListener('click', onFirstInteraction, { passive: true, once: true });
    window.addEventListener('keydown', onFirstInteraction, { passive: true, once: true });
  }

  attemptAutoplay() {
    if (!this.audio) return;
    this.audio.muted = false;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.notify();
        })
        .catch(() => {
          // Browser requires user gesture before audible playback;
          // UI stays in unmuted target state and will start audibly on first user touch.
          this.notify();
        });
    }
  }

  play() {
    if (!this.audio) this.init();
    if (!this.audio) return;

    this.audio.muted = false;
    this.isMuted = false;

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.notify();
        })
        .catch((err) => {
          console.warn('Audio play request interrupted:', err);
        });
    }
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    // Send immediate initial state
    callback({ isPlaying: this.isPlaying, isMuted: this.isMuted });
    return () => {
      this.subscribers.delete(callback);
    };
  }

  notify() {
    const state = { isPlaying: this.isPlaying, isMuted: this.isMuted };
    this.subscribers.forEach((cb) => {
      try {
        cb(state);
      } catch (err) {
        console.error('Audio subscriber error:', err);
      }
    });
  }
}

export const backgroundMusic = new BackgroundAudioManager();
