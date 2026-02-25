import { Waves, ArrowUp, ArrowDown } from 'lucide-react';

export function WaterLevelSchema() {
  return (
    <div className="my-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Waves className="w-6 h-6 text-blue-600" />
        Niveau d'Eau Normal vs Saturation
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Fosse Normale */}
        <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6 relative">
          <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
            Normal
          </div>
          <div className="w-full h-48 border-4 border-slate-300 rounded-xl relative overflow-hidden mt-6">
            {/* Entrée / Sortie */}
            <div className="absolute top-4 -left-2 w-6 h-4 bg-slate-400 rounded-r-sm"></div>
            <div className="absolute top-8 -right-2 w-6 h-4 bg-slate-400 rounded-l-sm"></div>
            
            {/* Croûte */}
            <div className="absolute top-8 left-0 right-0 h-6 bg-amber-100 border-b border-amber-200 flex items-center justify-center">
              <span className="text-[10px] font-bold text-amber-700">Croûte (Graisses)</span>
            </div>
            
            {/* Eau Claire */}
            <div className="absolute top-14 bottom-16 left-0 right-0 bg-blue-50 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-700">Eau (Liquéfaction)</span>
            </div>
            
            {/* Boues */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-700 flex items-center justify-center">
              <span className="text-[10px] font-bold text-slate-300">Boues (30% du volume)</span>
            </div>

            {/* Niveau d'eau line */}
            <div className="absolute top-8 left-0 right-0 border-t-2 border-dashed border-blue-500"></div>
            <div className="absolute top-2 right-8 flex items-center gap-1 text-[10px] font-bold text-blue-600">
              Niveau d'eau (Fil d'eau) <ArrowDown className="w-3 h-3" />
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center">
            L'eau atteint le tuyau de sortie. Les boues sont au fond.
          </p>
        </div>

        {/* Fosse Saturée */}
        <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-6 relative">
          <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
            À Vidanger
          </div>
          <div className="w-full h-48 border-4 border-slate-300 rounded-xl relative overflow-hidden mt-6">
            {/* Entrée / Sortie */}
            <div className="absolute top-4 -left-2 w-6 h-4 bg-slate-400 rounded-r-sm"></div>
            <div className="absolute top-8 -right-2 w-6 h-4 bg-slate-400 rounded-l-sm"></div>
            
            {/* Croûte */}
            <div className="absolute top-8 left-0 right-0 h-8 bg-amber-100 border-b border-amber-200 flex items-center justify-center">
              <span className="text-[10px] font-bold text-amber-700">Croûte épaisse</span>
            </div>
            
            {/* Eau Claire (réduite) */}
            <div className="absolute top-16 bottom-24 left-0 right-0 bg-blue-50 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-700">Eau</span>
            </div>
            
            {/* Boues (trop hautes) */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-slate-800 flex items-center justify-center">
              <span className="text-[10px] font-bold text-red-400">Boues (50%+ du volume)</span>
            </div>

            {/* Alerte Boues */}
            <div className="absolute bottom-24 left-0 right-0 border-t-2 border-dashed border-red-500"></div>
            <div className="absolute bottom-26 left-4 flex items-center gap-1 text-[10px] font-bold text-red-600">
              <ArrowUp className="w-3 h-3" /> Limite des 50% dépassée
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center">
            Les boues dépassent 50% du volume et menacent de boucher le filtre.
          </p>
        </div>
      </div>
    </div>
  );
}
