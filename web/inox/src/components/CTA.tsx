import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 md:py-48 bg-dark-900 border-t border-white/5 overflow-hidden">
      {/* Ambient glow & texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] "
          style={{ background: 'radial-gradient(ellipse, rgba(142,149,156,0.06) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', 
            backgroundSize: '64px 64px' 
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">

          {/* Left: big title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <p className="text-brand-steel font-mono text-[10px] tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
              <span className="text-white/40">[ CT-05 ]</span>
              <span className="w-6 h-[1px] bg-brand-steel/30"></span>
              <span>Démarrer un projet</span>
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tighter text-white leading-[0.92]">
              Un projet<br />
              <span className="text-brand-silver">en tête ?</span><br />
              <span style={{ WebkitTextStroke: '1px rgba(142,149,156,0.6)', color: 'transparent' } as React.CSSProperties}>
                Parlons-en.
              </span>
            </h2>
          </motion.div>

          {/* Right: details + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10 lg:max-w-sm"
          >
            <p className="text-white/50 text-lg leading-relaxed font-light">
              Réponse sous <strong className="text-white font-normal">24h</strong>.
            </p>

            {/* Contact info pills */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@inox-process.ch"
                className="group flex items-center justify-between px-5 py-4 border border-white/10  hover:border-white/30 transition-colors duration-300 bg-white/[0.02] hover:bg-white/[0.05]"
              >
                <span className="text-white/60 font-light text-sm group-hover:text-white transition-colors">info@inox-process.ch</span>
                <ArrowUpRight size={14} className="text-white/30 group-hover:text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Main CTA */}
            <Link
              to="/contact"
              className="group relative overflow-hidden flex items-center justify-between px-8 py-5 bg-white text-dark-900  font-light text-sm tracking-wide hover:bg-brand-silver transition-colors duration-300"
            >
              <span className="font-medium tracking-widest uppercase text-xs">Demander un devis</span>
              <span className="w-8 h-8  bg-dark-900/10 flex items-center justify-center group-hover:bg-dark-900/20 transition-colors group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
