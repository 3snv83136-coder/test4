import { ReactNode } from 'react';
import { Check, Zap, Target } from 'lucide-react';

interface GeoSummaryProps {
  quickAnswer: string;
  fivePoints: string[];
  keyTakeaways: string[];
}

export function GeoSummary({ quickAnswer, fivePoints, keyTakeaways }: GeoSummaryProps) {
  return (
    <div className="my-8 space-y-6">
      {/* Réponse Rapide (Optimized for Featured Snippet) */}
      <div className="bg-slate-50 border-l-4 border-brand-600 p-6 rounded-r-xl shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-brand-800 font-semibold">
          <Zap className="w-5 h-5" />
          <span>Réponse Rapide</span>
        </div>
        <p className="text-slate-800 leading-relaxed font-medium text-lg">
          {quickAnswer}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Résumé technique en 5 points */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold border-b pb-2">
            <Target className="w-5 h-5 text-brand-600" />
            <span>Résumé technique en 5 points</span>
          </div>
          <ul className="space-y-3">
            {fivePoints.map((point, index) => (
              <li key={index} className="flex gap-3 text-slate-600 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-semibold text-xs">
                  {index + 1}
                </span>
                <span className="leading-tight pt-0.5">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Points clés à retenir */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-sm text-white">
          <div className="flex items-center gap-2 mb-4 font-semibold border-b border-slate-700 pb-2">
            <Check className="w-5 h-5 text-emerald-400" />
            <span>Points clés à retenir</span>
          </div>
          <ul className="space-y-3">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex gap-3 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-tight">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
