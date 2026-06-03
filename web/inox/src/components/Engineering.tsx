import { motion } from 'framer-motion';

const tools = ['AutoCAD', 'SolidWorks', 'Traçabilité', 'Analyse de risque', 'Contrôle rugosité', 'DAO 3D'];

export default function Engineering() {
  return (
    <section id="ingenierie" className="py-24 md:py-32 bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top label */}
        <p className="text-brand-steel font-mono text-xs tracking-widest uppercase mb-16">Ingénierie Numérique</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual — abstract engineering / wireframe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="relative  overflow-hidden border border-white/10"
              style={{ aspectRatio: '4/3', background: '#0f0f0f' }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(142,149,156,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(142,149,156,0.3) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />

              {/* Rotating ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  <div className="absolute inset-0  border border-brand-steel/20 animate-[spin_18s_linear_infinite]" />
                  <div className="absolute inset-6  border border-white/10 animate-[spin_12s_linear_infinite_reverse]" />
                  <div className="absolute inset-12  border border-brand-steel/40 animate-[spin_8s_linear_infinite]" />
                  {/* Cross hairs */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-steel/30 -translate-y-1/2" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-steel/30 -translate-x-1/2" />
                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2  bg-brand-steel" />
                </div>
              </div>

              {/* Corner labels */}
              <span className="absolute top-4 left-4 font-mono text-xs text-white/30">ISO_DIN_ASME</span>
              <span className="absolute top-4 right-4 font-mono text-xs text-white/30">DAO.400</span>
              <span className="absolute bottom-4 left-4 font-mono text-xs text-white/30">DN8-DN600</span>
              <span className="absolute bottom-4 right-4 font-mono text-xs text-brand-steel">● PRÉCISION</span>
            </div>

            {/* Floating metric card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-dark-800 border border-white/10  p-5 shadow-2xl backdrop-blur-sm">
              <p className="font-mono text-white/50 text-xs mb-1 uppercase tracking-wider">Tolérance</p>
              <p className="text-3xl font-light text-white">
                0.05<span className="text-lg text-brand-steel ml-1">mm</span>
              </p>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white mb-6 leading-tight">
              Pensé pour être<br />
              <span className="text-brand-silver">infaillible.</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
              Notre bureau d'étude intégré traduit vos processus complexes en solutions
              techniques pérennes. De l'élaboration du cahier des charges à la 
              modélisation DAO avancée, chaque détail est anticipé.
            </p>

            <p className="text-white/60 leading-relaxed mb-10 font-light">
              Nous gérons <strong className="text-white font-normal">l'analyse de risque</strong>, 
              le dimensionnement et préparons l'ensemble des protocoles de contrôle 
              avant la première coupe en atelier.
            </p>

            {/* Tool badges */}
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-dark-800 border border-white/10  text-sm text-white/70 font-mono hover:border-brand-steel/50 hover:text-white transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
