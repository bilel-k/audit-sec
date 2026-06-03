import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form — show confirmation state
    setSent(true);
  };

  return (
    <main>
      {/* Page hero — plein écran vidéo */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-dark-900">

        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.50) saturate(0.4)' }}
        >
          <source src="https://videos.pexels.com/video-files/6046358/6046358-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(160deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.2) 100%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10"
          style={{ background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)' }}
        />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-steel font-mono text-[10px] tracking-[0.2em] uppercase mb-6 flex items-center gap-4"
            >
              <span className="text-white/40">[ CT-05 ]</span>
              <span className="w-6 h-[1px] bg-brand-steel/30"></span>
              <span>Nous contacter</span>
            </motion.p>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-thin tracking-tighter text-white leading-[0.9] mb-8">
              Un projet<br />
              <span style={{ WebkitTextStroke: '1px #c0c5ce', color: 'transparent' } as React.CSSProperties}>
                en tête ?
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light"
            >
              Décrivez-nous votre vision. Nous vous répondons sous 24h
              avec une première analyse technique.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="pb-28 md:pb-40 bg-dark-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:pr-10"
            >
              <div className="space-y-12 mb-20">
                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12  border border-white/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/[0.02] backdrop-blur-md">
                    <MapPin size={18} strokeWidth={1} className="text-white" />
                  </div>
                  <div className="pt-2">
                    <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-2">Atelier & bureaux</p>
                    <p className="text-white/80 font-light text-base leading-relaxed">
                      Route de l'Atelier 12<br />
                      1000 Lausanne<br />
                      Suisse
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12  border border-white/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/[0.02] backdrop-blur-md">
                    <Mail size={18} strokeWidth={1} className="text-white" />
                  </div>
                  <div className="pt-2">
                    <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-2">Email</p>
                    <a href="mailto:info@inox-process.ch" className="text-white/80 font-light text-base hover:text-white transition-colors">
                      info@inox-process.ch
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12  border border-white/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/[0.02] backdrop-blur-md">
                    <Phone size={18} strokeWidth={1} className="text-white" />
                  </div>
                  <div className="pt-2">
                    <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-2">Téléphone</p>
                    <a href="tel:+410000000000" className="text-white/80 font-light text-base hover:text-white transition-colors">
                      +41 (0) 00 000 00 00
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 pt-12">
                <p className="text-white/30 text-[10px] font-mono tracking-widest uppercase mb-8">Horaires atelier</p>
                <div className="space-y-4 text-sm font-light">
                  {[
                    { day: 'Lundi — Vendredi', hours: '07:30 — 17:30' },
                    { day: 'Samedi', hours: 'Sur rendez-vous' },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between text-white/50 items-center border-b border-white/5 pb-4">
                      <span>{h.day}</span>
                      <span className="text-white/80">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16  bg-dark-800 border border-brand-steel/40 flex items-center justify-center mb-6">
                    <ArrowRight size={24} className="text-brand-steel" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">Message envoyé</h3>
                  <p className="text-white/50 max-w-sm">
                    Merci pour votre message. Notre équipe vous contacte sous 24h avec une première analyse.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Project type */}
                  <div>
                    <label className="text-white/40 font-mono text-[10px] tracking-widest uppercase block mb-4">
                      Type de projet
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Architectural', 'Industriel', 'Autre'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, type: t }))}
                          className={`px-5 py-2.5  text-xs tracking-wider transition-all duration-300 border ${
                            form.type === t
                              ? 'bg-white text-dark-900 border-white'
                              : 'bg-white/[0.02] border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label htmlFor="name" className="text-white/40 font-mono text-[10px] tracking-widest uppercase block mb-2">
                        Nom & prénom *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="relative group">
                      <label htmlFor="phone" className="text-white/40 font-mono text-[10px] tracking-widest uppercase block mb-2">
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white transition-colors"
                        placeholder="+41 00 000 00 00"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="email" className="text-white/40 font-mono text-[10px] tracking-widest uppercase block mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white transition-colors"
                      placeholder="jean@exemple.ch"
                    />
                  </div>

                  <div className="relative group">
                    <label htmlFor="message" className="text-white/40 font-mono text-[10px] tracking-widest uppercase block mb-2">
                      Description du projet *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="Décrivez votre vision, le lieu, les contraintes éventuelles..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 relative group overflow-hidden border border-white/20  bg-white/[0.02] backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    <div className="relative z-10 flex items-center justify-center gap-3 text-white group-hover:text-dark-900 transition-colors duration-500">
                      <span className="text-xs uppercase tracking-[0.2em] font-medium">Envoyer la demande</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  <p className="text-white/30 text-[10px] font-mono tracking-widest uppercase text-center mt-6">
                    Réponse garantie sous 24h // Données confidentielles
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
