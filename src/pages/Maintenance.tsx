import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { GeoSummary } from '../components/GeoSummary';
import { AlertBlock } from '../components/AlertBlock';
import { FAQ } from '../components/FAQ';
import { MaintenanceSteps } from '../components/MaintenanceSteps';
import { Droplets } from 'lucide-react';

export default function Maintenance() {
  const faqItems = [
    {
      question: 'Quand faut-il vidanger sa fosse septique ?',
      answer: 'La vidange d\'une fosse septique est obligatoire lorsque le volume des boues atteint 50 % du volume total de la fosse (généralement tous les 3 à 5 ans pour une famille de 4 personnes).',
    },
    {
      question: 'Quels produits sont interdits dans une fosse septique ?',
      answer: 'L\'eau de Javel (voir notre dossier sur le <a href="/guides-techniques/eau-javel-fosse-septique-danger" className="text-brand-600 underline">danger de la javel</a>), les solvants, les peintures, les huiles de friture, les médicaments, les lingettes (même dites "biodégradables"), et les produits chimiques agressifs détruisent la flore bactérienne de la fosse.',
    }
  ];

  return (
    <Layout>
      <SEO
        title="Maintenance fosse septique : Quand vidanger et nettoyer le filtre"
        description="Guide d'entretien pour fosse septique et filtre à pouzzolane. Durée de vie, nettoyage, produits interdits et erreurs fréquentes des propriétaires."
        type="article"
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-600 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <Droplets className="w-3.5 h-3.5" />
            <span>Entretien & Maintenance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
            Guide d'Entretien<br/>
            <span className="text-brand-600 italic font-medium">Maintenance Préventive</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-3xl m-0">
            Guide d'entretien pour fosse septique et filtre à pouzzolane. Durée de vie, nettoyage, produits interdits et erreurs fréquentes des propriétaires.
          </p>
        </header>

        <GeoSummary
          quickAnswer="L'entretien régulier d'une fosse septique repose sur trois piliers : surveiller le niveau des boues (vidange à 50%), nettoyer le préfiltre à pouzzolane annuellement au jet d'eau, et proscrire tout produit chimique (Javel, solvants) qui détruit les bactéries épuratrices."
          fivePoints={[
            "La vidange s'effectue tous les 3 à 5 ans, selon le volume de la fosse et le nombre d'habitants.",
            "Le filtre à pouzzolane se nettoie 1 fois par an à l'eau claire, sans haute pression.",
            "La pouzzolane doit être intégralement remplacée tous les 5 à 7 ans.",
            "Les lingettes sont la cause numéro 1 des colmatages précoces.",
            "L'ajout d'activateurs biologiques (yaourt périmé, produits spécifiques) aide après une vidange."
          ]}
          keyTakeaways={[
            "Ne jamais vider complètement une fosse : laisser un fond de boue pour relancer la flore bactérienne.",
            "Ne jamais nettoyer la pouzzolane au nettoyeur haute pression (effritement de la roche).",
            "Tenir un carnet d'entretien avec les dates de vidange et de nettoyage du filtre."
          ]}
        />

        <MaintenanceSteps />

        <section className="mt-12">
          <h2>Nettoyer ou remplacer un filtre à pouzzolane ?</h2>
          <p>
            C'est la question la plus fréquente. La pouzzolane est une roche volcanique poreuse. Sa porosité est sa force (elle retient les particules) mais aussi sa faiblesse (elle finit par se boucher de l'intérieur).
          </p>
          <ul>
            <li><strong>Nettoyage annuel :</strong> Sortez le panier, lavez les pierres au jet d'eau au-dessus de la fosse (pour que les boues retombent dedans). Si l'eau claire ressort rapidement et que les pierres retrouvent une couleur rougeâtre/marron, le filtre est encore bon. N'oubliez pas de consulter notre guide sur le <a href="/guides-techniques/comment-nettoyer-bac-a-graisse" className="text-brand-600 underline">nettoyage du bac à graisse</a> si vous en possédez un.</li>
            <li><strong>Remplacement (5-7 ans) :</strong> Si après lavage, les pierres restent noires, gluantes, ou s'effritent sous la pression des doigts, la roche est saturée et morte. Le nettoyage ne sert plus à rien, l'eau passera par-dessus le filtre et ira colmater l'épandage. Il faut remplacer les 40 à 50 kg de pouzzolane (voir les <a href="/guides-techniques/prix-changement-filter-pouzzolane" className="text-brand-600 underline">prix du changement de filtre</a>).</li>
          </ul>

          <AlertBlock type="warning" title="Erreurs fréquentes des propriétaires">
            <ul className="mt-2 mb-0">
              <li>Attendre que la fosse déborde pour appeler le vidangeur.</li>
              <li>Jeter des lingettes "biodégradables" (elles ne se dégradent pas assez vite dans une fosse).</li>
              <li>Oublier de nettoyer le préfiltre pendant des années.</li>
              <li>Planter des arbres à moins de 3 mètres de l'installation (les racines perforent les drains).</li>
            </ul>
          </AlertBlock>
        </section>

        <FAQ items={faqItems} />
      </article>
    </Layout>
  );
}
