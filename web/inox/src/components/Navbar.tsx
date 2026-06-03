import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Expertise', to: '/expertise' },
  { label: 'Ingénierie', to: '/ingenierie' },
  { label: 'Réalisations', to: '/realisations' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Refined transitions for scroll
  const bg = useTransform(scrollY, [0, 80], ['rgba(10,10,10,0)', 'rgba(10,10,10,0.65)']);
  const blur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(30px)']);
  const borderOpacity = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.08)']);
  const height = useTransform(scrollY, [0, 80], ['6rem', '4.5rem']);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        style={{ backgroundColor: bg, backdropFilter: blur, WebkitBackdropFilter: blur, borderBottomColor: borderOpacity }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      >
        <motion.div style={{ height }} className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 shrink-0 group">
            <span className="text-white font-medium tracking-[0.25em] uppercase text-sm md:text-base transition-opacity group-hover:opacity-80">INOX</span>
            <span className="text-brand-steel font-light tracking-[0.25em] uppercase text-sm md:text-base transition-opacity group-hover:opacity-80">PROCESS</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.to} className="relative">
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `text-[13px] uppercase tracking-[0.15em] transition-colors py-2 ${isActive ? 'text-white font-medium' : 'text-white/50 hover:text-white'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="relative overflow-hidden group text-[13px] uppercase tracking-[0.15em] px-6 py-2.5 text-white/90 font-medium  border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white/70 hover:text-white transition-colors p-2 -mr-2"
            aria-label="Menu toggle"
          >
            <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </motion.div>
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-[4.5rem] left-0 right-0 z-40 bg-dark-900/95 backdrop-blur-2xl border-b border-white/10 px-6 py-10 flex flex-col items-center gap-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `text-lg uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`
                  }
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + links.length * 0.05 }}
              className="mt-4"
            >
              <Link
                to="/contact"
                className="text-sm uppercase tracking-[0.2em] px-8 py-4 border border-white/20 text-white "
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
