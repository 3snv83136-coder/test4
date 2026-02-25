import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { GeoSummary } from '../components/GeoSummary';
import { AlertBlock } from '../components/AlertBlock';
import { FAQ } from '../components/FAQ';
import { DiagnosticDiagram } from '../components/DiagnosticDiagram';
import { Droplets } from 'lucide-react';

export default function Diagnostic() {
  const faqItems = [
    {
      question: 'Pourquoi ma fosse septique déborde-t-elle juste après une vidange ?',
      answer: 'Un débordement post-vidange indique presque toujours un colmatage en aval (filtre à pouzzolane bouché ou épandage saturé). La fosse se remplit normalement en quelques jours, mais l\'eau ne pouvant plus s\'évacuer, elle refoule.',
    },
    {
      question: 'Comment différencier un bouchon dans la maison d\'un problème de fosse ?',
      answer: 'Si un seul équipement (ex: évier) s\'écoule mal, le bouchon est local. Si tous les équipements du rez-de-chaussée refoulent ou gargouillent simultanément, le problème se situe au niveau de la fosse ou du préfiltre.',
    }
  ];

  return (
    <Layout>
      <SEO
        title="Diagnostic : Comment savoir si un filtre à pouzzolane est colmaté ?"
        description="Apprenez à diagnostiquer une fosse septique qui déborde, des odeurs persistantes ou un écoulement lent. Guide de dépannage technique."
        type="article"
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-600 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <Droplets className="w-3.5 h-3.5" />
            <span>Diagnostic & Expertise</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
            Identifier les pannes<br/>
            <span className="text-brand-600 italic font-medium">Diagnostic Technique</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-3xl m-0">
            Apprenez à diagnostiquer une fosse septique qui déborde, des odeurs persistantes ou un écoulement lent. Guide de dépannage technique pour propriétaires.
          </p>
        </header>

        <GeoSummary
          quickAnswer="Un filtre à pouzzolane colmaté se repère par 4 signes majeurs : des gargouillis dans les canalisations, un écoulement lent des sanitaires, des odeurs d'œufs pourris (H2S) à l'extérieur, et un niveau d'eau anormalement haut au-dessus du filtre dans le regard de visite. Si votre fosse semble pleine trop vite, lisez notre dossier : <a href='/guides-techniques/fosse-septique-pleine-un-mois-pourquoi' className='text-brand-600 underline'>fosse pleine en 1 mois, pourquoi ?</a>"
          fivePoints={[
            "Le gargouillis est le premier signe d'alerte d'une mauvaise ventilation ou d'un blocage.",
            "L'eau au-dessus du filtre indique qu'il ne laisse plus passer les fluides.",
            "Les odeurs persistantes malgré une vidange récente signalent un dysfonctionnement bactérien ou un blocage.",
            "Un épandage saturé produit les mêmes symptômes qu'un filtre bouché.",
            "Ne jamais utiliser de déboucheur chimique acide si la fosse est pleine."
          ]}
          keyTakeaways={[
            "Ouvrez toujours le regard du filtre avant d'appeler un vidangeur.",
            "Si l'eau stagne sur le filtre, retirez-le temporairement : si l'eau s'évacue, le filtre est en cause.",
            "Si l'eau ne s'évacue pas sans le filtre, l'épandage est saturé."
          ]}
        />

        <DiagnosticDiagram />

        <section className="mt-12">
          <h2>Fosse septique qui déborde : causes réelles</h2>
          <p>
            Une fosse qui déborde est le symptôme final d'un problème souvent ignoré pendant des mois. Voici les causes techniques réelles, par ordre de fréquence :
          </p>
          <ol>
            <li><strong>Colmatage du préfiltre à pouzzolane :</strong> La cause n°1. Les matières ont saturé la roche.</li>
            <li><strong>Saturation de l'épandage :</strong> Les drains sont bouchés par les boues (souvent à cause de l'absence de filtre). Voir <a href="/guides-techniques/comment-deboucher-epandage-fosse-septique" className="text-brand-600 underline">comment déboucher un épandage</a>.</li>
            <li><strong>Écrasement d'une canalisation :</strong> Un passage de véhicule lourd a rompu le tuyau de sortie.</li>
            <li><strong>Défaut de pente :</strong> Affaissement de terrain modifiant la pente d'écoulement.</li>
          </ol>

          <AlertBlock type="error" title="Danger H2S">
            Lors de l'ouverture des regards d'une fosse bouchée, ne vous penchez jamais immédiatement au-dessus. Le gaz H2S (odeur d'œuf pourri) accumulé est hautement toxique et peut provoquer des pertes de connaissance. Laissez ventiler 15 minutes. Consultez notre dossier sur le <a href="/guides-techniques/gaz-toxique-fosse-septique-h2s-danger" className="text-brand-600 underline">danger du gaz H2S</a>.
          </AlertBlock>
        </section>

        <FAQ items={faqItems} />
      </article>
    </Layout>
  );
}
