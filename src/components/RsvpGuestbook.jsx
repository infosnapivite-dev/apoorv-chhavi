import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Send, CheckCircle2, UserCheck, MessageSquareHeart, Users, Utensils } from 'lucide-react';
import { FloralDividerSvg } from './SvgFlourishes';

export function RsvpGuestbook({ initialWishes, events }) {
  const [rsvpData, setRsvpData] = useState({
    name: '',
    phone: '',
    attendance: 'attending',
    guestsCount: 2,
    dietary: 'Vegetarian Royal Feast',
    eventsSelected: ['haldi', 'sangeet', 'wedding', 'reception'],
    specialNote: ''
  });

  const [isRsvpSubmitted, setIsRsvpSubmitted] = useState(false);

  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('wedding_wishes_list');
    return saved ? JSON.parse(saved) : initialWishes;
  });

  const [newWish, setNewWish] = useState({
    name: '',
    relation: 'Friend',
    message: ''
  });
  const [wishSentSuccess, setWishSentSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('wedding_wishes_list', JSON.stringify(wishes));
  }, [wishes]);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpData.name) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FFE8A3', '#D4AF37', '#FFFFFF', '#831227']
    });

    setIsRsvpSubmitted(true);
  };

  const handleEventCheckbox = (eventId) => {
    setRsvpData(prev => {
      const exists = prev.eventsSelected.includes(eventId);
      if (exists) {
        return { ...prev, eventsSelected: prev.eventsSelected.filter(id => id !== eventId) };
      } else {
        return { ...prev, eventsSelected: [...prev.eventsSelected, eventId] };
      }
    });
  };

  const handleWishSubmit = (e) => {
    e.preventDefault();
    if (!newWish.name.trim() || !newWish.message.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: newWish.name,
      relation: newWish.relation || 'Guest',
      message: newWish.message,
      date: 'Just now',
      likes: 1
    };

    setWishes([newEntry, ...wishes]);
    setNewWish({ name: '', relation: 'Friend', message: '' });
    setWishSentSuccess(true);
    setTimeout(() => setWishSentSuccess(false), 3500);
  };

  const handleLikeWish = (id) => {
    setWishes(prev =>
      prev.map(w => w.id === id ? { ...w, likes: w.likes + 1 } : w)
    );
  };

  return (
    <section id="rsvp" className="relative py-16 px-4 w-full bg-transparent overflow-hidden">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-2 text-[#EBD1A5] text-[11px] tracking-[0.28em] uppercase font-sans font-semibold mb-2"
          >
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Celebrate With Us</span>
            <Sparkles className="w-3 h-3 text-gold-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-3xl text-gold-100 font-semibold"
          >
            RSVP & Guest Wishes
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

        {/* Stacked Mobile RSVP Form + Wishes Feed */}
        <div className="space-y-8">
          {/* RSVP Form Card */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-gold-500/35 relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-xl bg-gold-500/15 border border-gold-500/30">
                <UserCheck className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-gold-100">
                  Confirm Attendance
                </h3>
                <p className="text-[11px] text-gold-400 font-sans">
                  Kindly respond by Nov 15, 2026
                </p>
              </div>
            </div>

            {isRsvpSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-playfair text-xl text-gold-100 font-semibold">
                  Thank You, {rsvpData.name}!
                </h4>
                <p className="font-sans text-xs text-slate-300">
                  {rsvpData.attendance === 'attending'
                    ? "Your RSVP has been joyfully recorded. We cannot wait to celebrate with you!"
                    : "We received your response. You will be dearly missed!"}
                </p>
                <button
                  onClick={() => setIsRsvpSubmitted(false)}
                  className="text-xs text-gold-300 underline uppercase pt-2 cursor-pointer"
                >
                  Edit response
                </button>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                {/* Attendance Toggle */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRsvpData({ ...rsvpData, attendance: 'attending' })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-sans font-semibold uppercase tracking-wider transition-all ${
                      rsvpData.attendance === 'attending'
                        ? "bg-gold-500 text-burgundy-950 shadow-md border border-gold-400"
                        : "bg-black/40 text-gold-200 border border-gold-500/25"
                    }`}
                  >
                    ✨ Joyfully Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setRsvpData({ ...rsvpData, attendance: 'declining' })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-sans font-semibold uppercase tracking-wider transition-all ${
                      rsvpData.attendance === 'declining'
                        ? "bg-gold-500 text-burgundy-950 shadow-md border border-gold-400"
                        : "bg-black/40 text-gold-200 border border-gold-500/25"
                    }`}
                  >
                    Decline
                  </button>
                </div>

                {/* Name & Phone */}
                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                    placeholder="Full Name *"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-gold-500/30 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400"
                  />
                  <input
                    type="tel"
                    value={rsvpData.phone}
                    onChange={(e) => setRsvpData({ ...rsvpData, phone: e.target.value })}
                    placeholder="Phone / WhatsApp"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-gold-500/30 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>

                {/* Guest Count & Preference */}
                {rsvpData.attendance === 'attending' && (
                  <div className="space-y-3 pt-1">
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={rsvpData.guestsCount}
                        onChange={(e) => setRsvpData({ ...rsvpData, guestsCount: Number(e.target.value) })}
                        className="w-full px-3 py-2 rounded-xl bg-black/70 border border-gold-500/30 text-white text-xs focus:outline-none focus:border-gold-400"
                      >
                        <option value={1} className="bg-neutral-900">1 Guest</option>
                        <option value={2} className="bg-neutral-900">2 Guests</option>
                        <option value={3} className="bg-neutral-900">3 Guests</option>
                        <option value={4} className="bg-neutral-900">4 Guests</option>
                        <option value={5} className="bg-neutral-900">5+ Guests</option>
                      </select>

                      <select
                        value={rsvpData.dietary}
                        onChange={(e) => setRsvpData({ ...rsvpData, dietary: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-black/70 border border-gold-500/30 text-white text-xs focus:outline-none focus:border-gold-400"
                      >
                        <option value="Vegetarian Royal Feast" className="bg-neutral-900">Vegetarian</option>
                        <option value="Jain Vegetarian" className="bg-neutral-900">Jain Veg</option>
                        <option value="Vegan" className="bg-neutral-900">Vegan</option>
                        <option value="Non-Vegetarian" className="bg-neutral-900">Non-Veg</option>
                      </select>
                    </div>

                    {/* Events list */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {events.map((evt) => (
                        <label
                          key={evt.id}
                          className={`flex items-center gap-2 p-2 rounded-xl border cursor-pointer text-[11px] font-sans transition-all ${
                            rsvpData.eventsSelected.includes(evt.id)
                              ? "bg-gold-500/20 border-gold-400 text-gold-200"
                              : "bg-black/30 border-white/10 text-slate-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={rsvpData.eventsSelected.includes(evt.id)}
                            onChange={() => handleEventCheckbox(evt.id)}
                            className="rounded text-gold-500 focus:ring-gold-500"
                          />
                          <span className="truncate">{evt.title.split('&')[0]}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-gold-luxury py-3 px-4 rounded-xl text-center text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit RSVP</span>
                </button>
              </form>
            )}
          </div>

          {/* Guest Wishes Box & Feed */}
          <div className="glass-card rounded-2xl p-5 border border-gold-500/35 relative space-y-4">
            <div className="flex items-center gap-2">
              <MessageSquareHeart className="w-4 h-4 text-gold-400" />
              <h4 className="font-playfair text-lg font-bold text-gold-100">
                Leave Your Blessing
              </h4>
            </div>

            {wishSentSuccess && (
              <div className="p-2 bg-emerald-950/60 text-emerald-400 text-[11px] rounded-lg flex items-center gap-2 border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Blessing added!</span>
              </div>
            )}

            <form onSubmit={handleWishSubmit} className="space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={newWish.name}
                  onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                  className="px-3 py-2 rounded-lg bg-black/40 border border-gold-500/30 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400"
                />
                <input
                  type="text"
                  placeholder="Relation"
                  value={newWish.relation}
                  onChange={(e) => setNewWish({ ...newWish, relation: e.target.value })}
                  className="px-3 py-2 rounded-lg bg-black/40 border border-gold-500/30 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400"
                />
              </div>
              <textarea
                required
                rows={2}
                placeholder="Write your sweet blessing..."
                value={newWish.message}
                onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-gold-500/30 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-burgundy-950 text-[11px] font-semibold uppercase tracking-wider transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Heart className="w-3 h-3 text-burgundy-950 fill-burgundy-950" />
                <span>Post Blessing</span>
              </button>
            </form>

            {/* Live Wishes Feed */}
            <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1 pt-2 border-t border-gold-500/20">
              <AnimatePresence>
                {wishes.map((w) => (
                  <motion.div
                    key={w.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-black/40 border border-gold-500/25 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-playfair font-semibold text-xs text-gold-100">
                          {w.name}
                        </span>
                        <span className="text-[9px] text-gold-400 ml-1.5 font-sans uppercase">
                          • {w.relation}
                        </span>
                      </div>
                      <button
                        onClick={() => handleLikeWish(w.id)}
                        className="flex items-center gap-1 text-[11px] text-gold-300 hover:text-red-400 transition cursor-pointer"
                      >
                        <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                        <span>{w.likes}</span>
                      </button>
                    </div>
                    <p className="font-sans text-[11px] text-slate-300 leading-snug">
                      "{w.message}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
