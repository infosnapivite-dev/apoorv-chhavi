// Web Audio API Ambient Romantic Chime & Harp Synthesizer
// Provides ethereal, royalty-free acoustic background sound without external network dependency

class RomanticAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.gainNode = null;
    this.notes = [
      // Pentatonic romantic notes in Hz (C major / A minor ambient harp)
      261.63, // C4
      293.66, // D4
      329.63, // E4
      392.00, // G4
      440.00, // A4
      523.25, // C5
      587.33, // D5
      659.25, // E5
      783.99, // G5
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.setValueAtTime(0.18, this.ctx.currentTime);
        this.gainNode.connect(this.ctx.destination);
      }
    }
  }

  playNote(freq, duration = 2.8, delay = 0) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime + delay;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Warm sine + soft harmonic triangle wave for acoustic harp tone
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Envelope: Quick attack, long singing decay
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.2, now + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  playChordArpeggio() {
    if (!this.isPlaying || !this.ctx) return;
    
    // Choose ambient chord progressions (I - V - vi - IV)
    const chords = [
      [261.63, 329.63, 392.00, 523.25], // C Major
      [392.00, 493.88, 587.33, 783.99], // G Major
      [440.00, 523.25, 659.25, 880.00], // A Minor
      [349.23, 440.00, 523.25, 698.46], // F Major
    ];

    const chord = chords[Math.floor(Math.random() * chords.length)];
    chord.forEach((freq, idx) => {
      this.playNote(freq, 3.5, idx * 0.45);
    });
  }

  start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.playChordArpeggio();

    // Recurring gentle arpeggio every 3.2 seconds
    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        this.playChordArpeggio();
      }
    }, 3200);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const romanticAudio = new RomanticAudioSynthesizer();
