import { motion } from 'framer-motion';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';

// Free industrial/welding video from Pexels (no account required)
const VIDEO_URL = 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4';

export default function Expertise() {
  return (
    <main>
      {/* Page hero — full viewport, video background */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-dark-900">

        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.65) saturate(0.6)' }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.1) 100%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10"
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
              <span className="text-white/40">[ EX-02 ]</span>
              <span className="w-6 h-[1px] bg-brand-steel/30"></span>
              <span>Compétences</span>
            </motion.p>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-thin tracking-tighter text-white leading-[0.9] mb-8">
              Quatre métiers.<br />
              <span style={{ WebkitTextStroke: '1px #c0c5ce', color: 'transparent' } as React.CSSProperties}>
                Une chaîne complète.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light"
            >
              De la modélisation DAO à la réception sur site — conception,
              fabrication inoxydable, pose et contrôle qualité intégrés.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Services />
      <Process />
      <CTA />
    </main>
  );
}
