import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CTA from '../components/CTA';

const IMG = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=85&auto=format&fit=crop`;

const projects = [
  {
    id: 1,
    img: IMG('1485881922961-fbe39329af2a', 1200, 800), // welding with mask
    type: 'Pose & Tuyauterie',
    title: 'Installation DN600',
    location: 'Canton de Vaud',
    size: 'large',
  },
  {
    id: 2,
    img: IMG('1504328345606-18bbc8c9d7d1', 700, 900), // welding machine
    type: 'Fabrication',
    title: 'Process Inoxydable',
    location: 'Atelier',
    size: 'small',
  },
  {
    id: 3,
    img: IMG('1564182998523-6923112e7d6b', 700, 900), // grinder sparks
    type: 'Finition',
    title: 'Contrôle & Meulage',
    location: 'Lausanne',
    size: 'small',
  },
  {
    id: 4,
    img: IMG('1714504904786-b6732390b206', 1200, 800), // welder in factory
    type: 'Fabrication',
    title: 'Ouvrage Structurel',
    location: 'Atelier de fabrication',
    size: 'large',
  },
  {
    id: 5,
    img: IMG('1507497806295-753c4108560c', 700, 900), // man welding helmet
    type: 'Expertise',
    title: 'Contrôle TIG',
    location: 'Suisse Romande',
    size: 'small',
  },
  {
    id: 6,
    img: IMG('1526634140919-468dc3ae3870', 700, 900), // welding
    type: 'Sur Mesure',
    title: 'Remise en Conformité',
    location: 'Genève',
    size: 'small',
  },
];

export default function Realisations() {
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
          style={{ filter: 'brightness(0.60) saturate(0.75)' }}
        >
          <source src="https://videos.pexels.com/video-files/6579400/6579400-hd_1920_1080_25fps.mp4" type="video/mp4" />
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
              <span className="text-white/40">[ RE-04 ]</span>
              <span className="w-6 h-[1px] bg-brand-steel/30"></span>
              <span>Portfolio</span>
            </motion.p>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-thin tracking-tighter text-white leading-[0.9] mb-8">
              Galerie<br />
              <span style={{ WebkitTextStroke: '1px #c0c5ce', color: 'transparent' } as React.CSSProperties}>
                technique.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light"
            >
              Des assemblages TIG complexes aux installations de tuyauterie sur site.
              Chaque projet démontre notre exigence envers la matière.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="pb-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {projects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className={`group relative  overflow-hidden cursor-pointer
                  ${p.size === 'large' ? 'md:col-span-2 aspect-video' : 'aspect-[3/4]'}
                `}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading={idx < 2 ? 'eager' : 'lazy'}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-brand-steel text-xs font-mono tracking-widest uppercase mb-1">{p.type}</p>
                  <h3 className="text-xl md:text-2xl font-medium text-white">{p.title}</h3>
                  <p className="text-white/40 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {p.location}
                  </p>
                </div>

                <div className="absolute top-5 right-5 w-9 h-9  border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 duration-300">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
