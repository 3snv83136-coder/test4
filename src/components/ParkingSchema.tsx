import { Car, AlertTriangle, ShieldCheck } from 'lucide-react';

export function ParkingSchema() {
  return (
    <div className="my-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Car className="w-6 h-6 text-brand-600" />
        Dalle de Répartition (Parking sur Fosse)
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* INTERDIT */}
        <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-6 relative">
          <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
            Interdit
          </div>
          <div className="w-full h-48 border-4 border-slate-300 rounded-xl relative overflow-hidden mt-6 flex flex-col items-center justify-end pb-4">
            {/* Voiture */}
            <div className="absolute top-4 flex flex-col items-center">
              <Car className="w-12 h-12 text-slate-700 mb-2" />
              <div className="flex gap-2">
                <ArrowDown className="w-4 h-4 text-red-500" />
                <ArrowDown className="w-4 h-4 text-red-500" />
              </div>
            </div>
            
            {/* Fosse */}
            <div className="w-32 h-20 border-4 border-slate-400 rounded-xl bg-slate-100 flex items-center justify-center relative">
              <span className="text-[10px] font-bold text-slate-600">Fosse<br/>Septique</span>
              <AlertTriangle className="w-6 h-6 text-red-500 absolute -top-3 -right-3 bg-white rounded-full" />
            </div>
            {/* Fissures */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-2 border-t-2 border-red-500 transform rotate-[-10deg]"></div>
          </div>
          <p className="text-xs text-red-600 mt-4 text-center font-bold">
            Le poids écrase ou fissure la cuve.
          </p>
        </div>

        {/* AUTORISÉ */}
        <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6 relative">
          <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
            Autorisé
          </div>
          <div className="w-full h-48 border-4 border-slate-300 rounded-xl relative overflow-hidden mt-6 flex flex-col items-center justify-end pb-4">
            {/* Voiture */}
            <div className="absolute top-2 flex flex-col items-center z-20">
              <Car className="w-12 h-12 text-slate-700 mb-1" />
            </div>
            
            {/* Dalle Béton */}
            <div className="absolute top-16 left-4 right-4 h-4 bg-slate-400 border-y-2 border-slate-500 z-10 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white uppercase tracking-widest">Dalle Béton Armé</span>
            </div>
            
            {/* Piliers / Appuis */}
            <div className="absolute top-20 left-4 w-4 h-28 bg-slate-300 border-x-2 border-slate-400"></div>
            <div className="absolute top-20 right-4 w-4 h-28 bg-slate-300 border-x-2 border-slate-400"></div>

            {/* Fosse */}
            <div className="w-24 h-16 border-4 border-slate-400 rounded-xl bg-slate-100 flex items-center justify-center mt-8">
              <span className="text-[10px] font-bold text-slate-600">Fosse</span>
            </div>
            
            <ShieldCheck className="w-6 h-6 text-emerald-500 absolute bottom-10 right-10 bg-white rounded-full z-20" />
          </div>
          <p className="text-xs text-emerald-700 mt-4 text-center font-bold">
            La dalle repose sur le terrain naturel.
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper ArrowDown component since it's used inside
function ArrowDown(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
