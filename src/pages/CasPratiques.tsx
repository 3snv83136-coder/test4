import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { AlertBlock } from '../components/AlertBlock';
import { FileText, AlertCircle, Search, CheckCircle2, Lightbulb, Droplets, Share2 } from 'lucide-react';

export default function CasPratiques() {
  const handleShare = (title: string) => {
    const shareData = {
      title: title,
      text: `Découvrez ce cas pratique sur l'assainissement : ${title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {
        // Fallback if share is cancelled or fails
      });
    } else {
      navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert("Lien du cas pratique copié dans le presse-papier !");
    }
  };

  const cases = [
    {
      title: "Cas #1 : Filtre colmaté par des lingettes",
      context: "Maison individuelle (4 personnes), fosse de 3000L vidangée il y a 2 ans. Refoulement des eaux usées dans le bac à douche du rez-de-chaussée.",
      diagnostic: "Ouverture du regard de la fosse : niveau d'eau anormalement haut. Le préfiltre à pouzzolane est invisible, recouvert d'une épaisse couche de lingettes agglomérées.",
      analysis: "Les lingettes, même vendues comme 'biodégradables' ou 'jetables dans les toilettes', ne se décomposent pas dans le milieu anaérobie d'une fosse septique. Elles ont formé un bouchon hermétique sur le dessus du filtre, empêchant tout écoulement vers l'épandage.",
      solution: "Extraction manuelle du bouchon de lingettes. Sortie et nettoyage complet de la cassette de pouzzolane. L'eau s'est immédiatement évacuée vers l'épandage, faisant baisser le niveau de la fosse.",
      lesson: "Ne jamais jeter de lingettes dans les toilettes reliées à un ANC. Le préfiltre a joué son rôle : s'il n'avait pas été là, les lingettes auraient colmaté les drains d'épandage, nécessitant des travaux de terrassement majeurs (> 5000€)."
    },
    {
      title: "Cas #2 : Absence d'entretien pendant 10 ans",
      context: "Achat récent d'une maison ancienne. L'ancien propriétaire affirmait que 'la fosse fonctionnait toute seule'. Odeurs nauséabondes dans le jardin, sol spongieux au-dessus de l'épandage.",
      diagnostic: "Fosse remplie à 90% de boues solides. Le préfiltre à pouzzolane est complètement désagrégé, transformé en une boue noire compacte. L'épandage est saturé de matières organiques.",
      analysis: "L'absence de vidange a fait remonter le niveau des boues jusqu'à la sortie. Le filtre à pouzzolane, non entretenu et saturé depuis des années, s'est décomposé sous l'action des gaz (H2S) et de l'acidité. Les boues sont passées directement dans les drains d'épandage, les colmatant irrémédiablement.",
      solution: "Vidange d'urgence de la fosse. Remplacement complet de la pouzzolane. Malheureusement, l'épandage étant mort, un remplacement complet de la filière de traitement a été nécessaire (installation d'une micro-station).",
      lesson: "Un filtre à pouzzolane non entretenu finit par se détruire et laisse passer les boues. L'économie d'une vidange (300€) et d'un sac de pouzzolane (20€) a coûté plus de 8000€ de réfection totale."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Études de cas pratiques : Pannes de fosse septique et filtre bouché"
        description="Analyses techniques de pannes réelles sur le terrain : filtre colmaté par lingettes, absence d'entretien, mauvaise installation. Diagnostics et solutions."
        type="article"
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-600 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <Droplets className="w-3.5 h-3.5" />
            <span>Études de Terrain</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
            Cas Pratiques<br/>
            <span className="text-brand-600 italic font-medium">Analyses Réelles</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-3xl m-0">
            L'assainissement non collectif ne tolère pas l'approximation. Découvrez nos analyses techniques de dysfonctionnements réels rencontrés sur le terrain.
          </p>
        </header>

        <AlertBlock type="info" title="Méthodologie d'analyse">
          Chaque cas présenté ci-dessous est issu d'interventions réelles. Notre objectif est purement éducatif : comprendre la cause racine d'une panne permet d'éviter sa reproduction.
        </AlertBlock>

        <div className="space-y-12 mt-12">
          {cases.map((study, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white m-0 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-400" />
                  {study.title}
                </h2>
                <button 
                  onClick={() => handleShare(study.title)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white rounded-lg transition-all text-xs font-bold uppercase tracking-wider border border-slate-600"
                  title="Partager ce cas"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Partager
                </button>
              </div>
              <div className="p-6 space-y-6">
                
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><AlertCircle className="w-5 h-5 text-slate-400" /></div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1 mt-0">Contexte</h3>
                    <p className="text-slate-700 m-0 leading-relaxed">{study.context}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><Search className="w-5 h-5 text-brand-600" /></div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-900 uppercase tracking-wider mb-1 mt-0">Diagnostic & Analyse</h3>
                    <p className="text-slate-700 m-0 leading-relaxed mb-2"><strong>Constat :</strong> {study.diagnostic}</p>
                    <p className="text-slate-700 m-0 leading-relaxed"><strong>Analyse :</strong> {study.analysis}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                  <div>
                    <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-1 mt-0">Solution apportée</h3>
                    <p className="text-slate-700 m-0 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="bg-brand-50 rounded-xl p-5 mt-4 flex gap-4 border border-brand-100">
                  <div className="shrink-0 mt-0.5"><Lightbulb className="w-5 h-5 text-brand-700" /></div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-900 uppercase tracking-wider mb-1 mt-0">Enseignement technique</h3>
                    <p className="text-brand-900 m-0 leading-relaxed font-medium">{study.lesson}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </article>
    </Layout>
  );
}
