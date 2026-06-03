import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-dark-900 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-5">
              <span className="text-white font-bold tracking-widest uppercase">INOX</span>
              <span className="text-brand-steel font-light tracking-widest uppercase">PROCESS</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Construction inoxydable sur mesure.<br />Lausanne, Suisse.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 text-xs uppercase tracking-widest font-medium mb-5">Expertise</h4>
          <ul className="space-y-3 text-sm text-white/40">
              <li><Link to="/expertise" className="hover:text-white transition-colors">Fabrication atelier</Link></li>
              <li><Link to="/expertise" className="hover:text-white transition-colors">Pose & tuyauterie</Link></li>
              <li><Link to="/ingenierie" className="hover:text-white transition-colors">Modélisation DAO 3D</Link></li>
              <li><Link to="/ingenierie" className="hover:text-white transition-colors">Plans ISO/DIN/ASME</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 text-xs uppercase tracking-widest font-medium mb-5">Société</h4>
          <ul className="space-y-3 text-sm text-white/40">
              <li><Link to="/" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/realisations" className="hover:text-white transition-colors">Nos réalisations</Link></li>
              <li><Link to="/expertise" className="hover:text-white transition-colors">Notre processus</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 text-xs uppercase tracking-widest font-medium mb-5">Adresse</h4>
            <address className="not-italic text-sm text-white/40 leading-relaxed">
              Route de l&apos;Atelier 12<br />
              1000 Lausanne<br />
              Suisse
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {year} Inox Process SNC. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
