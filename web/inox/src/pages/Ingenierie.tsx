import { motion } from 'framer-motion';
import Engineering from '../components/Engineering';
import Workshop from '../components/Workshop';
import CTA from '../components/CTA';

const VIDEO_URL = 'https://videos.pexels.com/video-files/4941457/4941457-hd_1920_1080_25fps.mp4';

export default function Ingenierie() {
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
          style={{ filter: 'brightness(0.60) saturate(0.5) hue-rotate(200deg)' }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.80) 0%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.1) 100%)' }}
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
              <span className="text-white/40">[ IN-03 ]</span>
              <span className="w-6 h-[1px] bg-brand-steel/30"></span>
              <span>Bureau d'étude & Atelier</span>
            </motion.p>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-thin tracking-tighter text-white leading-[0.9] mb-8">
              Pensé pour<br />
              <span style={{ WebkitTextStroke: '1px #c0c5ce', color: 'transparent' } as React.CSSProperties}>
                être infaillible.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light"
            >
              Modélisation DAO avancée, analyse de risque et atelier
              de fabrication inoxydable — tout sous un même toit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Engineering />
      <Workshop />
      <CTA />
    </main>
  );
}
