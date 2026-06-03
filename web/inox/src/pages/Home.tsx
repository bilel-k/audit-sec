import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

const IMG = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=85&auto=format&fit=crop`;

const domains = [
  {
    tag: '01',
    title: 'Conception & Fabrication',
    desc: "Bureau d'étude intégré, modélisation DAO et atelier de fabrication inoxydable : découpage, pliage, roulage, soudage TIG et finition.",
    img: IMG('1714504904786-b6732390b206'),
    to: '/expertise',
  },
  {
    tag: '02',
    title: 'Pose & Contrôle qualité',
    desc: "Installation sur site par nos équipes certifiées — tuyauterie DN8 à DN600 (ISO/DIN/ASME), remise en conformité, dossier qualité et traçabilité complète.",
    img: IMG('1485881922961-fbe39329af2a'),
    to: '/expertise',
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Domain teaser cards */}
      <section className="pb-20 md:pb-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {domains.map((d, idx) => (
              <motion.div
                key={d.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative  overflow-hidden cursor-pointer ${idx === 1 ? 'md:mt-16' : ''}`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.title}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                <div className="absolute top-6 left-6 w-9 h-9  border border-white/20 flex items-center justify-center">
                  <span className="text-white/60 text-xs font-mono">{d.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">{d.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">{d.desc}</p>
                  <Link
                    to={d.to}
                    className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-4 transition-all"
                  >
                    <span>Explorer</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Contact CTA Segment */}
      <CTA />
    </main>
  );
}
