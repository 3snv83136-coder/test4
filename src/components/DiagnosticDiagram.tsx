import { motion } from 'motion/react';
import { AlertTriangle, Volume2, Droplets, Wind } from 'lucide-react';

export function DiagnosticDiagram() {
  const symptoms = [
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Gargouillis",
      desc: "Bruits d'air dans les canalisations lors de l'évacuation."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Écoulement lent",
      desc: "L'eau met du temps à s'évacuer des éviers ou douches."
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Odeurs H2S",
      desc: "Odeurs d'œuf pourri persistantes à l'intérieur ou extérieur."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Niveau haut",
      desc: "Eau stagnante au-dessus du filtre dans le regard de sortie."
    }
  ];

  return (
    <div className="my-12 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
      
      <div className="text-center mb-10 relative z-10">
        <h3 className="text-2xl font-display font-black mb-2">Signes de Dysfonctionnement</h3>
        <p className="text-brand-400 text-[10px] font-black uppercase tracking-[0.2em]">Diagnostic visuel et sonore</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {symptoms.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-600/20 text-brand-400 flex items-center justify-center mb-4 border border-brand-500/30">
              {s.icon}
            </div>
            <h4 className="font-bold mb-2">{s.title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
