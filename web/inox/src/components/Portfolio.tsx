import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IMG = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=85&auto=format&fit=crop`;

const projects = [
  {
    id: 1,
    img: IMG('1594818897200-2f5535262e08', 1200, 800),  // spiral staircase ✓
    type: 'Architectural',
    title: 'Escalier Hélicoïdal',
    size: 'large',
  },
  {
    id: 2,
    img: IMG('1504328345606-18bbc8c9d7d1', 700, 900),  // man using welding machine ✓
    type: 'Atelier',
    title: 'Soudure sur mesure',
    size: 'small',
  },
  {
    id: 3,
    img: IMG('1523789248610-bb592e870951', 700, 900),  // gray metal stair ✓
    type: 'Architectural',
    title: 'Structure Verrière',
    size: 'small',
  },
  {
    id: 4,
    img: IMG('1455165814004-1126a7199f9b', 1200, 800),  // man holding steel frame ✓
    type: 'Industriel',
    title: 'Plateforme Technique',
    size: 'large',
  },
];

export default function Portfolio() {
  return (
    <section id="realisations" className="py-24 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-brand-steel font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="text-white/40">PF-04</span> Réalisations
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white leading-tight">
              Quelques-unes<br />de nos interventions.
            </h2>
          </div>
          <Link to="/realisations" className="group flex items-center gap-2 text-white/60 hover:text-white text-sm border-b border-white/20 hover:border-white pb-1 transition-colors shrink-0">
            <span>Voir tout le portfolio</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`group relative  overflow-hidden cursor-pointer
                ${p.size === 'large' ? 'md:col-span-2' : ''}
                ${p.size === 'large' ? 'aspect-video' : 'aspect-[3/4]'}
              `}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-brand-steel text-xs font-mono tracking-widest uppercase mb-2">{p.type}</p>
                <h3 className="text-xl md:text-2xl font-medium text-white">{p.title}</h3>
              </div>

              {/* Arrow icon on hover */}
              <div className="absolute top-5 right-5 w-9 h-9  border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 duration-300">
                <ArrowRight size={14} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
