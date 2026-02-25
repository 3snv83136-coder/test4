import { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';

type Step = 1 | 2 | 3 | 4;

export function Simulator() {
  const [step, setStep] = useState<Step>(1);
  const [terrain, setTerrain] = useState<string>('');
  const [rooms, setRooms] = useState<number>(4);
  const [currentSystem, setCurrentSystem] = useState<string>('');

  const calculateResults = () => {
    let eh = Math.max(3, rooms);
    
    const solutions = [];
    
    // Base costs for 4 EH
    let microStationCost = 6500 + ((eh - 4) * 500);
    let filtreCompactCost = 7500 + ((eh - 4) * 600);
    let epandageCost = 5500 + ((eh - 4) * 400);

    let durationModifier = 0;
    let costModifier = 1;

    if (terrain === 'difficult') {
      costModifier = 1.2;
      durationModifier = 1;
    }

    if (terrain === 'small') {
      solutions.push({
        name: 'Micro-station d\'épuration',
        desc: 'Idéal pour les petits terrains. Ultra-compacte, traitement complet sur une très petite surface.',
        cost: [Math.round(microStationCost * costModifier * 0.9 / 100) * 100, Math.round(microStationCost * costModifier * 1.1 / 100) * 100],
        duration: `${2 + durationModifier} à ${3 + durationModifier} jours`,
        pros: ['Emprise au sol minimale', 'Pas de massif de sable à changer'],
        cons: ['Consommation électrique (faible)', 'Entretien annuel recommandé']
      });
      solutions.push({
        name: 'Filtre compact (Coco, Noisette, Laine de roche)',
        desc: 'Excellente alternative écologique sans électricité, adaptée aux petits espaces.',
        cost: [Math.round(filtreCompactCost * costModifier * 0.9 / 100) * 100, Math.round(filtreCompactCost * costModifier * 1.1 / 100) * 100],
        duration: `${2 + durationModifier} à ${3 + durationModifier} jours`,
        pros: ['Fonctionne sans électricité', 'Éligible à l\'éco-PTZ'],
        cons: ['Média filtrant à renouveler (10-15 ans)', 'Coût initial un peu plus élevé']
      });
    } else {
      solutions.push({
        name: 'Fosse toutes eaux + Épandage traditionnel',
        desc: 'La solution classique et robuste si vous avez suffisamment de surface perméable.',
        cost: [Math.round(epandageCost * costModifier * 0.9 / 100) * 100, Math.round(epandageCost * costModifier * 1.1 / 100) * 100],
        duration: `${3 + durationModifier} à ${5 + durationModifier} jours`,
        pros: ['Solution la plus économique', 'Aucune consommation électrique', 'Entretien très espacé'],
        cons: ['Nécessite une grande surface (min 150m²)', 'Impossible en terrain argileux']
      });
      solutions.push({
        name: 'Filtre compact',
        desc: 'Solution moderne prenant moins de place que l\'épandage.',
        cost: [Math.round(filtreCompactCost * costModifier * 0.9 / 100) * 100, Math.round(filtreCompactCost * costModifier * 1.1 / 100) * 100],
        duration: `${2 + durationModifier} à ${3 + durationModifier} jours`,
        pros: ['Gain de place sur le terrain', 'Fonctionne sans électricité'],
        cons: ['Média filtrant à renouveler']
      });
    }

    return solutions;
  };

  const reset = () => {
    setStep(1);
    setTerrain('');
    setRooms(4);
    setCurrentSystem('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden my-12">
      <div className="bg-brand-900 px-5 py-6 sm:px-6 sm:py-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
          <h2 className="text-xl sm:text-2xl font-display font-bold">Simulateur de Mise aux Normes</h2>
        </div>
        <p className="text-brand-100/80 text-xs sm:text-sm">Estimez le coût et la durée de vos travaux d'assainissement en 3 questions.</p>
      </div>

      <div className="p-5 sm:p-6 md:p-8">
        {/* Progress Bar */}
        <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-1 sm:h-1.5 flex-1 rounded-full ${step >= i ? 'bg-brand-500' : 'bg-slate-100'}`} />
          ))}
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 sm:mb-6">1. Quel est votre système actuel ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {[
                { id: 'septic_only', label: 'Ancienne fosse septique seule', desc: 'Les eaux usées (douche/cuisine) partent ailleurs.' },
                { id: 'failing_trench', label: 'Fosse toutes eaux avec épandage bouché', desc: 'L\'eau stagne ou remonte.' },
                { id: 'direct_discharge', label: 'Rejet direct', desc: 'Aucun traitement, rejet au fossé ou rivière.' },
                { id: 'unknown', label: 'Je ne sais pas', desc: 'L\'installation est très ancienne ou inconnue.' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setCurrentSystem(opt.id); setStep(2); }}
                  className="text-left p-4 rounded-xl border-2 border-slate-100 hover:border-brand-500 hover:bg-brand-50 transition-all group active:scale-[0.98]"
                >
                  <div className="font-bold text-slate-900 group-hover:text-brand-700 mb-1 text-sm sm:text-base">{opt.label}</div>
                  <div className="text-xs sm:text-sm text-slate-500">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 sm:mb-6">2. Comment est votre terrain ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                { id: 'large_flat', label: 'Grand et plat', desc: '+ de 500m² disponibles et accessibles.' },
                { id: 'small', label: 'Petit espace', desc: 'Moins de 200m² ou peu d\'espace libre.' },
                { id: 'difficult', label: 'Difficile', desc: 'En pente, rocheux ou accès très compliqué pour les engins.' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setTerrain(opt.id); setStep(3); }}
                  className="text-left p-4 rounded-xl border-2 border-slate-100 hover:border-brand-500 hover:bg-brand-50 transition-all group active:scale-[0.98]"
                >
                  <div className="font-bold text-slate-900 group-hover:text-brand-700 mb-1 text-sm sm:text-base">{opt.label}</div>
                  <div className="text-xs sm:text-sm text-slate-500">{opt.desc}</div>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="mt-6 text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1.5 py-2">
              <RotateCcw className="w-4 h-4" /> Retour
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">3. Combien de pièces principales comporte la maison ?</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
              Une pièce principale (PP) est une pièce de séjour ou de sommeil d'au moins 7m² (salon, salle à manger, chambres, bureau). Cuisine et salles de bain ne comptent pas.
            </p>
            
            <div className="flex items-center justify-center gap-6 sm:gap-8 mb-8">
              <button 
                onClick={() => setRooms(Math.max(1, rooms - 1))}
                className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-2xl font-bold text-slate-600 hover:border-brand-500 hover:text-brand-600 transition-colors active:bg-slate-50"
                aria-label="Diminuer le nombre de pièces"
              >
                -
              </button>
              <div className="text-5xl font-black text-slate-900 w-16 text-center">{rooms}</div>
              <button 
                onClick={() => setRooms(rooms + 1)}
                className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-2xl font-bold text-slate-600 hover:border-brand-500 hover:text-brand-600 transition-colors active:bg-slate-50"
                aria-label="Augmenter le nombre de pièces"
              >
                +
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <button onClick={() => setStep(2)} className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1.5 py-2 order-2 sm:order-1">
                <RotateCcw className="w-4 h-4" /> Retour
              </button>
              <button 
                onClick={() => setStep(4)}
                className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 order-1 sm:order-2 active:scale-[0.98]"
              >
                Voir l'estimation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">Solutions recommandées</h3>
              <button onClick={reset} className="text-sm text-brand-600 hover:text-brand-800 flex items-center gap-1.5 font-medium py-1">
                <RotateCcw className="w-4 h-4" /> Refaire une simulation
              </button>
            </div>

            <div className="space-y-6">
              {calculateResults().map((solution, idx) => (
                <div key={idx} className="border-2 border-slate-100 rounded-2xl p-5 sm:p-6 relative overflow-hidden">
                  {idx === 0 && (
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                      Le plus adapté
                    </div>
                  )}
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 pr-20">{solution.name}</h4>
                  <p className="text-sm sm:text-base text-slate-600 mb-6">{solution.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mb-1">Budget estimé (fourni posé)</div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900">
                        {solution.cost[0].toLocaleString('fr-FR')}€ - {solution.cost[1].toLocaleString('fr-FR')}€
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mb-1">Durée des travaux</div>
                      <div className="text-lg sm:text-xl font-bold text-slate-900">{solution.duration}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
                    <div>
                      <div className="text-[10px] sm:text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Avantages</div>
                      <ul className="space-y-2">
                        {solution.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs font-bold text-amber-600 uppercase tracking-wider mb-3">Inconvénients</div>
                      <ul className="space-y-2">
                        {solution.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand-50 border border-brand-100 rounded-xl p-4 text-xs sm:text-sm text-brand-800 leading-relaxed">
              <strong>Note :</strong> Ces estimations sont données à titre indicatif. Le coût final dépendra de l'étude de sol (obligatoire, environ 400-600€) et des devis des terrassiers locaux. N'oubliez pas que des aides financières (éco-PTZ, aides de l'ANAH) peuvent réduire la facture.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
