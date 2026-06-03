import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Étude & Conception',
    desc: "Analyse technique approfondie, cahier des charges, analyse de risque et planification. Nous vous proposons des solutions pour travaux neufs, modernisation et remise en conformité.",
  },
  {
    num: '02',
    title: 'Modélisation DAO',
    desc: 'Conception assistée par ordinateur avec respect de vos spécifications. Validation complète des plans et des détails d\'assemblage avant mise en fabrication.',
  },
  {
    num: '03',
    title: 'Fabrication atelier',
    desc: 'Découpage, pliage, roulage, assemblage et soudage TIG par nos spécialistes en acier inoxydable. Finition soignée selon vos exigences de rugosité.',
  },
  {
    num: '04',
    title: 'Pose & Installation',
    desc: 'Installation sur site par nos équipes certifiées. Tuyauterie DN8 à DN600 (ISO/DIN/ASME), soudage TIG sur chantier, remise en conformité et maintenance.',
  },
  {
    num: '05',
    title: 'Contrôle qualité',
    desc: 'Inspection rigoureuse en atelier et sur site : contrôle dimensionnel, relevé de rugosité, endoscopie, test de pression et remise du dossier qualité avec traçabilité complète.',
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: header + description */}
          <div className="lg:sticky lg:top-32">
            <p className="text-brand-steel font-mono text-xs tracking-widest uppercase mb-4">Notre Processus</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              De la conception<br />à l&apos;installation.
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 font-light">
              Chaque projet suit un protocole rigoureux alliant bureau d'étude intégré,
              fabrication inoxydable de précision et installation certifiée. Zéro approximation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-10">
              {[
                { val: '0.05mm', label: 'Tolérance d\'usinage' },
                { val: '100%', label: 'Dossier qualité' },
                { val: 'BIM', label: 'Workflow numérique' },
                { val: '15+', label: 'Années d\'expertise' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-light text-white mb-1">{s.val}</div>
                  <div className="text-white/40 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />

            <div className="space-y-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-8 h-8  bg-dark-800 border border-white/20 flex items-center justify-center">
                    <div className="w-2 h-2  bg-brand-steel" />
                  </div>

                  <div className="bg-dark-900/60 border border-white/8  p-6 hover:border-white/20 transition-colors">
                    <span className="text-brand-steel font-mono text-xs tracking-widest">{step.num}</span>
                    <h3 className="text-lg font-medium text-white mt-1 mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
