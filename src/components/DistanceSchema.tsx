import { Home, Trees, Droplets, MapPin } from 'lucide-react';

export function DistanceSchema() {
  return (
    <div className="my-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-brand-600" />
        Distances Réglementaires (NF DTU 64.1)
      </h3>
      
      <div className="relative h-64 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-4">
        {/* Fosse Septique (Center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-brand-100 border-2 border-brand-400 rounded-lg flex items-center justify-center z-10 shadow-sm">
          <span className="text-xs font-bold text-brand-800 text-center leading-tight">Fosse<br/>Septique</span>
        </div>

        {/* Maison (Left) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <Home className="w-10 h-10 text-slate-700 mb-2" />
          <span className="text-xs font-bold text-slate-600">Habitation</span>
        </div>
        
        {/* Distance Maison - Fosse */}
        <div className="absolute left-16 right-1/2 top-1/2 -translate-y-1/2 mr-14 border-t-2 border-dashed border-slate-400 flex items-center justify-center">
          <span className="bg-white px-2 text-xs font-bold text-slate-600 -mt-6">Min. 5m</span>
        </div>

        {/* Limite de propriété (Top) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full border-t-4 border-red-200 flex justify-center">
          <span className="bg-white px-2 text-xs font-bold text-red-600 mt-2">Limite de propriété (Voisin)</span>
        </div>

        {/* Distance Fosse - Limite */}
        <div className="absolute top-8 bottom-1/2 left-1/2 -translate-x-1/2 mb-10 border-l-2 border-dashed border-slate-400 flex items-center justify-center">
          <span className="bg-white px-2 text-xs font-bold text-slate-600 ml-12">Min. 3m</span>
        </div>

        {/* Arbres (Right) */}
        <div className="absolute right-12 top-1/4 flex flex-col items-center">
          <Trees className="w-10 h-10 text-emerald-600 mb-2" />
          <span className="text-xs font-bold text-slate-600">Arbres</span>
        </div>

        {/* Distance Fosse - Arbres */}
        <div className="absolute right-24 left-1/2 top-1/3 ml-14 border-t-2 border-dashed border-slate-400 flex items-center justify-center transform rotate-[-15deg]">
          <span className="bg-white px-2 text-xs font-bold text-slate-600 -mt-6">Min. 3m</span>
        </div>

        {/* Puits (Bottom Right) */}
        <div className="absolute right-4 bottom-4 flex flex-col items-center">
          <Droplets className="w-8 h-8 text-blue-500 mb-1" />
          <span className="text-xs font-bold text-slate-600">Puits / Captage</span>
        </div>

        {/* Distance Fosse - Puits */}
        <div className="absolute right-16 left-1/2 bottom-1/4 ml-14 border-t-2 border-dashed border-slate-400 flex items-center justify-center transform rotate-[20deg]">
          <span className="bg-white px-2 text-xs font-bold text-slate-600 -mt-6">Min. 35m</span>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-4 text-center">
        Schéma simplifié des distances minimales d'implantation d'un assainissement non collectif.
      </p>
    </div>
  );
}
