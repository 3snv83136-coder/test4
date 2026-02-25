import { motion } from 'motion/react';
import { Droplets, ArrowDown, Waves, Filter, ShieldCheck } from 'lucide-react';

export function SepticSchema() {
  return (
    <div className="my-16 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-display font-black text-slate-900 mb-2">Schéma Technique : Cycle de Prétraitement</h3>
        <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Comprendre le flux des eaux usées</p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* Entrée */}
        <div className="flex flex-col items-center text-center w-full md:w-1/4">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center mb-4 shadow-inner">
            <Droplets className="w-8 h-8 text-blue-500" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">1. Entrée des Eaux</h4>
          <p className="text-[10px] text-slate-500 leading-tight">Eaux vannes (WC) et eaux ménagères (cuisine, bain).</p>
        </div>

        <div className="hidden md:block">
          <ArrowDown className="w-6 h-6 text-slate-300 rotate-[-90deg]" />
        </div>

        {/* Décantation */}
        <div className="flex flex-col items-center text-center w-full md:w-1/4 relative">
          <div className="w-24 h-32 bg-slate-100 border-2 border-slate-300 rounded-xl relative overflow-hidden mb-4 shadow-lg">
            {/* Chapeau de graisses */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-amber-100/80 border-b border-amber-200 flex items-center justify-center">
              <span className="text-[8px] font-black text-amber-600 uppercase">Graisses</span>
            </div>
            {/* Eau */}
            <div className="absolute top-4 bottom-8 left-0 right-0 bg-blue-400/20 flex items-center justify-center">
              <Waves className="w-6 h-6 text-blue-400/30 animate-pulse" />
            </div>
            {/* Boues */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-800/90 flex items-center justify-center">
              <span className="text-[8px] font-black text-slate-300 uppercase">Boues</span>
            </div>
          </div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">2. Décantation</h4>
          <p className="text-[10px] text-slate-500 leading-tight">Séparation physique : les boues coulent, les graisses flottent.</p>
        </div>

        <div className="hidden md:block">
          <ArrowDown className="w-6 h-6 text-slate-300 rotate-[-90deg]" />
        </div>

        {/* Préfiltre */}
        <div className="flex flex-col items-center text-center w-full md:w-1/4">
          <div className="w-16 h-16 rounded-2xl bg-brand-50 border-2 border-brand-200 flex items-center justify-center mb-4 shadow-inner relative">
            <Filter className="w-8 h-8 text-brand-600" />
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-brand-400/10 rounded-2xl"
            />
          </div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">3. Préfiltre</h4>
          <p className="text-[10px] text-slate-500 leading-tight">La pouzzolane bloque les dernières particules solides.</p>
        </div>

        <div className="hidden md:block">
          <ArrowDown className="w-6 h-6 text-slate-300 rotate-[-90deg]" />
        </div>

        {/* Sortie */}
        <div className="flex flex-col items-center text-center w-full md:w-1/4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-4 shadow-inner">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">4. Vers Traitement</h4>
          <p className="text-[10px] text-slate-500 leading-tight">Eaux prétraitées dirigées vers l'épandage ou le filtre compact.</p>
        </div>
      </div>

      <div className="mt-12 p-4 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-600 leading-relaxed italic">
        <strong>Note technique :</strong> Ce cycle de prétraitement est passif et repose sur la gravité et l'action bactérienne anaérobie. Le préfiltre (étape 3) est l'ultime rempart avant le rejet vers le sol.
      </div>
    </div>
  );
}
