import { motion } from 'framer-motion';

const IMG = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&h=900&q=85&auto=format&fit=crop`;

const cards = [
  {
    id: '1485881922961-fbe39329af2a',  // man welding with mask ✓
    title: 'Soudure TIG experte',
    desc: 'Assemblages structurels certifiés, cordons parfaits sur acier inoxydable.',
  },
  {
    id: '1564182998523-6923112e7d6b',  // angle grinder sparks ✓
    title: 'Rugosité & Finition',
    desc: "Traitement de surface et respect absolu des contraintes de rugosité.",
  },
  {
    id: '1507497806295-753c4108560c',  // man in welding helmet ✓
    title: 'Tuyauterie industrielle',
    desc: "Maîtrise complète DN8–DN600 pour les fluides critiques et les réseaux complexes.",
  },
];

export default function Workshop() {
  return (
    <section className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-brand-steel font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="text-white/40">// WK-03</span> L'Atelier Inoxydable
            </p>
            <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white leading-tight">
              Façonné pour<br />durer.
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed font-light">
            Nos tuyauteurs et soudeurs TIG transforment l'acier inoxydable de haute pureté 
            avec précision. Aucun compromis sur la finition ni sur la pérennité de l'ouvrage.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`group relative  overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${idx === 1 ? 'md:mt-10' : ''}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={IMG(card.id)}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-medium text-white mb-2">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.desc}
                </p>
              </div>

              {/* Index */}
              <span className="absolute top-4 right-4 font-mono text-xs text-white/30">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
