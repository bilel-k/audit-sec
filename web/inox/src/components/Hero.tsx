import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// V2: Split screen layout. Video on the right, typography on the left.
const VIDEO_URL = "https://videos.pexels.com/video-files/5846458/5846458-hd_1920_1080_25fps.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col lg:flex-row bg-dark-900 overflow-hidden border-b border-white/10">
      
      {/* ── Left Content (Text) ── */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-24 pt-32 lg:pt-0 relative z-10 bg-dark-900 border-r border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-brand-steel"></span>
            <p className="text-brand-steel font-mono text-xs tracking-[0.3em] uppercase">SC-01 — Suisse · Lausanne · Depuis 2008</p>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-thin tracking-tighter text-white leading-[0.9] mb-8">
            <span className="block">Maîtrise</span>
            <span className="block text-brand-steel">Absolue</span>
            <span className="block" style={{ WebkitTextStroke: "1px rgba(142,149,156,0.6)", color: "transparent" }}>De L&apos;Acier.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-lg leading-relaxed">
            Ingénierie de précision, soudure TIG certifiée et fabrication sur-mesure pour les industries les plus exigeantes (pharma, chimie, alimentaire).
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/realisations"
              className="group flex items-center justify-between px-8 py-5 bg-white text-dark-900 font-medium tracking-widest text-[10px] uppercase hover:bg-brand-silver transition-all duration-300 w-full sm:w-auto"
            >
              Découvrir nos réalisations
              <ArrowRight size={14} className="ml-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact"
              className="group flex items-center justify-between px-8 py-5 border border-white/20 text-white font-medium tracking-widest text-[10px] uppercase hover:bg-white/[0.05] transition-all duration-300 w-full sm:w-auto"
            >
              Demander un devis
              <ArrowRight size={14} className="ml-4 text-white/40 group-hover:translate-x-1 group-hover:text-white transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Technical Data decor */}
        <div className="absolute bottom-8 left-6 lg:left-24 font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] grid grid-cols-2 gap-x-12 gap-y-3">
          <p>ISO 9001 · EN 1090</p>
          <p>TIG Orbital · Manuel</p>
          <p>Suisse · Est. 2008</p>
          <p>Ra &lt; 0.4µm</p>
        </div>
      </div>

      {/* ── Right Content (Video) ── */}
      <div className="flex-1 relative hidden lg:block h-full bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          style={{ filter: "contrast(1.2) brightness(0.6)" }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        
        {/* Overlays / scanlines */}
        <div className="absolute inset-0 bg-dark-900/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark-900 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-dark-900 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-dark-900 to-transparent" />

        {/* Framing marks */}
        <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/30" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/30" />
      </div>

    </section>
  );
}
