import { motion } from 'motion/react';
import { Wrench, Droplets, Trash2, RefreshCcw } from 'lucide-react';

export function MaintenanceSteps() {
  const steps = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "1. Extraction",
      desc: "Sortez délicatement la cassette ou le panier du préfiltre."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "2. Lavage",
      desc: "Nettoyez au jet d'eau basse pression au-dessus de la fosse."
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "3. Inspection",
      desc: "Vérifiez si la roche s'effrite ou reste noire après lavage."
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "4. Remise en place",
      desc: "Réinstallez le filtre propre ou remplacez la pouzzolane."
    }
  ];

  return (
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
            {step.icon}
          </div>
          <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
          <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
