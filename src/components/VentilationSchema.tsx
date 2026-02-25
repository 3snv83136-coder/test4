import { Wind, ArrowUp, XCircle } from 'lucide-react';

export function VentilationSchema() {
  return (
    <div className="my-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Wind className="w-6 h-6 text-brand-600" />
        Schéma de Ventilation Primaire et Secondaire
      </h3>
      
      <div className="relative h-80 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-end justify-center pb-8">
        
        {/* Maison */}
        <div className="w-48 h-48 border-4 border-slate-300 rounded-t-xl relative flex flex-col items-center justify-end pb-4">
          <span className="text-xs font-bold text-slate-500 mb-8">Maison</span>
          
          {/* WC */}
          <div className="w-12 h-16 border-2 border-slate-400 rounded-lg flex items-center justify-center bg-slate-50">
            <span className="text-[10px] font-bold text-slate-600">WC</span>
          </div>

          {/* Tuyau Chute (Primaire) */}
          <div className="absolute top-0 bottom-4 left-1/2 -translate-x-1/2 w-4 bg-blue-100 border-x-2 border-blue-300">
            {/* Flèche Air Entrant */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="text-[8px] font-bold text-blue-600 uppercase">Air Frais</span>
              <ArrowUp className="w-4 h-4 text-blue-500 rotate-180" />
            </div>
            <span className="absolute top-1/2 -left-24 text-[10px] font-bold text-blue-600 bg-white px-1">Ventilation<br/>Primaire</span>
          </div>
        </div>

        {/* Tuyau de liaison */}
        <div className="w-24 h-4 bg-slate-200 border-y-2 border-slate-400 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-bold text-slate-500">
            Eaux <ArrowUp className="w-3 h-3 rotate-90" />
          </div>
        </div>

        {/* Fosse */}
        <div className="w-32 h-24 border-4 border-slate-400 rounded-xl relative bg-slate-100 flex items-center justify-center">
          <span className="text-[10px] font-bold text-slate-600">Fosse<br/>Septique</span>
          
          {/* Tuyau Secondaire */}
          <div className="absolute bottom-full right-4 w-4 h-40 bg-red-50 border-x-2 border-red-300">
            {/* Extracteur */}
            <div className="absolute -top-4 -left-2 w-8 h-4 bg-slate-600 rounded-t-full"></div>
            {/* Flèche Gaz Sortant */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <ArrowUp className="w-4 h-4 text-red-500" />
              <span className="text-[8px] font-bold text-red-600 uppercase">Gaz H2S</span>
            </div>
            <span className="absolute top-1/2 left-6 text-[10px] font-bold text-red-600 bg-white px-1 w-24">Ventilation<br/>Secondaire<br/>(Extracteur)</span>
          </div>
        </div>

        {/* Problème: Siphon vide */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-white p-2 rounded-lg border border-red-200 shadow-sm">
          <XCircle className="w-6 h-6 text-red-500 mb-1" />
          <span className="text-[10px] font-bold text-red-700 text-center leading-tight">Sans primaire,<br/>le siphon se vide<br/>(désiphonnage)</span>
        </div>

      </div>
      <p className="text-xs text-slate-500 mt-4 text-center">
        La ventilation primaire amène l'air frais. La ventilation secondaire extrait les gaz toxiques (H2S) au-dessus du toit.
      </p>
    </div>
  );
}
