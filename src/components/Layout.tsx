import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Companies', path: '/companies' },
    { name: 'Gaming Sector', path: '/sectors/gaming' },
    { name: 'Data', path: '/data' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream font-body text-moss">
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-forest text-cream p-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm group-hover:bg-sunrise transition-colors">
                <Leaf size={24} strokeWidth={2.5} />
              </div>
              <span className="font-headline font-bold text-xl tracking-tight text-forest group-hover:text-sunrise transition-colors">
                GREEN SCENE MY
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-semibold tracking-wide uppercase transition-colors relative",
                    location.pathname === link.path ? "text-forest" : "text-moss/70 hover:text-forest"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-sunrise"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-forest"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-cream border-b border-forest/10"
            >
              <nav className="flex flex-col px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-lg font-bold tracking-tight",
                      location.pathname === link.path ? "text-sunrise" : "text-moss"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-forest text-cream py-12 mt-20 rounded-tr-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf size={24} className="text-sunrise" />
                <span className="font-headline font-bold text-2xl tracking-tight text-white">
                  GREEN SCENE MY
                </span>
              </div>
              <p className="text-cream/80 font-quote italic text-lg max-w-sm">
                "News for a better tomorrow."
              </p>
              <div className="pt-4">
                <div className="bg-moss/30 p-4 rounded-xl border border-cream/10 inline-block">
                  <p className="text-xs uppercase tracking-wider text-cream/60 mb-1">Malaysia Carbon Counter Tracker (Mock)</p>
                  <p className="font-metric text-2xl text-mint font-bold">-12,450 tCO2e</p>
                  <p className="text-xs text-cream/70 mt-1">Offset this week</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-white tracking-wide uppercase">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-cream/80 hover:text-sunrise transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white tracking-wide uppercase">Partners</h4>
              <ul className="space-y-2 text-cream/80">
                <li>Bursa Malaysia</li>
                <li>Sustainable MY</li>
                <li><Link to="/sectors/gaming" className="hover:text-sunrise">Platinum Casino ESG</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cream/10 text-center text-cream/60 text-sm">
            &copy; {new Date().getFullYear()} Green Scene MY. All rights reserved. Made for a sustainable future.
          </div>
        </div>
      </footer>
    </div>
  );
}
