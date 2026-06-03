import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const IMG = (id: string, w = 900, h = 700) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=85&auto=format&fit=crop`;

const services = [
  {
    num: '01',
    title: 'Conception',
    subtitle: 'Bureau d\'étude',
    desc: 'Accompagnement complet dans la conception de vos projets. Solutions sur mesure pour travaux neufs, modernisation et remise en conformité.',
    items: ['Modélisation DAO', 'Cahier des charges', 'Analyse de risque', 'Planification'],
    img: IMG('1507497806295-753c4108560c'),
  },
  {
    num: '02',
    title: 'Fabrication',
    subtitle: 'Atelier inoxydable',
    desc: 'Notre équipe spécialisée dans les assemblages en acier inoxydable met en forme vos projets avec des moyens de production performants.',
    items: ['Découpage & pliage', 'Roulage', 'Soudage TIG', 'Finition'],
    img: IMG('1714504904786-b6732390b206'),
  },
  {
    num: '03',
    title: 'Pose',
    subtitle: 'Installation sur site',
    desc: 'Nos équipes d\'installation spécialisées interviennent sur vos chantiers dans le respect des normes d\'hygiène et de sécurité.',
    items: ['Tuyauterie DN8–DN600', 'ISO / DIN / ASME', 'Remise en conformité', 'Maintenance'],
    img: IMG('1485881922961-fbe39329af2a'),
  },
  {
    num: '04',
    title: 'Contrôle',
    subtitle: 'Qualité & traçabilité',
    desc: 'Chaque projet fait l\'objet d\'inspections rigoureuses en atelier et sur site pour garantir une qualité irréprochable.',
    items: ['Contrôle dimensionnel', 'Relevé de rugosité', 'Test de pression', 'Dossier qualité'],
    img: IMG('1564182998523-6923112e7d6b'),
  },
];

export default function Services() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-brand-steel font-mono text-[10px] tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
              <span className="text-white/40">[ SV-02 ]</span>
              <span className="w-6 h-[1px] bg-brand-steel/30"></span>
              <span>Nos Compétences</span>
            </p>
            <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white max-w-2xl leading-tight">
              Quatre métiers.<br />Une seule exigence.
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed font-light">
            De la conception à la réception, nous maîtrisons l'intégralité de la chaîne de valeur de la construction inoxydable.
          </p>
        </div>

        {/* Cards grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden bg-dark-900 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-dark-900/20" />

              {/* Top badge */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-widest text-white/30">{svc.num}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono border border-white/10 px-2 py-0.5">{svc.subtitle}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl font-thin tracking-tight text-white mb-3">{svc.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-sm font-light">{svc.desc}</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {svc.items.map((item) => (
                    <li key={item} className="text-[10px] text-white/40 border border-white/10 px-3 py-1 font-mono tracking-wider">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest font-mono group-hover:text-white group-hover:gap-4 transition-all duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
