import { Link, useLocation } from 'react-router-dom';
import { Droplets, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Guide Complet', path: '/' },
    { name: 'Fonctionnement', path: '/fonctionnement-fosse-septique' },
    { name: 'Diagnostic', path: '/diagnostic' },
    { name: 'Normes SPANC', path: '/normes-spanc' },
    { name: 'Maintenance', path: '/maintenance' },
    { name: 'Cas Pratiques', path: '/cas-pratiques' },
    { name: 'Dossiers', path: '/guides-techniques' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top Bar - Institutional Feel */}
      <div className="bg-slate-900 text-white py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Site Officiel d'Information Technique
            </span>
          </div>
          <div className="hidden sm:block">
            Mise à jour : Février 2026
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <div className="flex flex-col border-l-4 border-brand-600 pl-4 py-1">
                  <span className="font-display font-black text-2xl text-slate-900 leading-none tracking-tighter uppercase">Centre National</span>
                  <span className="text-[11px] text-brand-600 font-bold uppercase tracking-[0.2em] leading-tight mt-1">Assainissement Individuel</span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs font-black uppercase tracking-widest transition-all duration-200 relative py-2 group ${
                    isActive(item.path)
                      ? 'text-brand-600'
                      : 'text-slate-500 hover:text-brand-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 rounded-full"></span>
                  )}
                  {!isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
              ))}
            </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                  isActive(item.path)
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
