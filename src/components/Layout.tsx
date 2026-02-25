import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { FloatingCTA } from './FloatingCTA';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
  darkBackground?: boolean;
}

export function Layout({ children, showBreadcrumbs = true, darkBackground = false }: LayoutProps) {
  const location = useLocation();

  return (
    <div className={`min-h-screen flex flex-col font-sans subtle-grid ${darkBackground ? 'bg-slate-950 text-slate-100' : 'bg-slate-700 text-slate-900'}`}>
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showBreadcrumbs && <Breadcrumbs />}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`${darkBackground ? 'bg-slate-900 border-slate-800 shadow-slate-900/50' : 'bg-slate-100 border-slate-300 shadow-xl shadow-slate-900/10'} rounded-2xl border p-6 md:p-10 lg:p-12 my-6 relative overflow-hidden`}
          >
            <div className={`absolute inset-0 pointer-events-none ${darkBackground ? 'opacity-[0.05]' : 'opacity-[0.03]'}`} style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230f172a\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', filter: darkBackground ? 'invert(1)' : 'none' }}></div>
            <div className="relative z-10">
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
