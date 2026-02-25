import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { GeoSummary } from '../components/GeoSummary';
import { AlertBlock } from '../components/AlertBlock';
import { Droplets } from 'lucide-react';

export default function NormesSpanc() {
  return (
    <Layout>
      <SEO
        title="Normes SPANC et obligations légales pour fosse septique"
        description="Tout savoir sur le contrôle SPANC, la mise en conformité obligatoire et les normes de l'assainissement non collectif lors d'une vente immobilière."
        type="article"
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-600 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <Droplets className="w-3.5 h-3.5" />
            <span>Réglementation & Normes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
            Obligations SPANC<br/>
            <span className="text-brand-600 italic font-medium">Cadre Réglementaire</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-3xl m-0">
            Tout savoir sur le contrôle SPANC, la mise en conformité obligatoire et les normes de l'assainissement non collectif lors d'une vente immobilière.
          </p>
        </header>

        <GeoSummary
          quickAnswer="Le SPANC (Service Public d'Assainissement Non Collectif) est l'organisme officiel chargé de contrôler les installations autonomes. Un contrôle périodique (tous les 4 à 10 ans) est obligatoire. En cas de vente immobilière, un diagnostic datant de moins de 3 ans doit être fourni à l'acheteur."
          fivePoints={[
            "Le diagnostic SPANC est obligatoire pour toute vente d'un bien non relié au tout-à-l'égout.",
            "Si l'installation est non conforme, l'acheteur a 1 an après la vente pour faire les travaux.",
            "Le préfiltre à pouzzolane est un point de contrôle systématique (présence et état).",
            "Une absence d'entretien caractérisée entraîne un avis de non-conformité.",
            "Les normes s'appuient sur l'arrêté du 7 septembre 2009 modifié et le DTU 64.1."
          ]}
          keyTakeaways={[
            "Conservez tous vos bons de vidange (preuve d'entretien).",
            "Assurez-vous que tous les regards sont accessibles avant le passage du technicien.",
            "Un filtre colmaté le jour du contrôle entraîne une contre-visite payante."
          ]}
        />

        <section className="mt-12">
          <h2>Contrôle SPANC : comment ça se passe ?</h2>
          <p>
            Le technicien du SPANC évalue les risques pour la santé et l'environnement. Son inspection est strictement visuelle et documentaire. Il ne fait pas de travaux ni de démontage complexe.
          </p>
          <p>Les points vérifiés incluent :</p>
          <ul>
            <li>L'accessibilité des regards (fosse, préfiltre, bac à graisses, regard de répartition).</li>
            <li>Le niveau des boues dans la fosse (ne doit pas dépasser 50% du volume).</li>
            <li>L'état du <strong>filtre à pouzzolane</strong> (nettoyé, non colmaté).</li>
            <li>Le bon écoulement des eaux en sortie de traitement.</li>
            <li>La présence de la ventilation primaire et secondaire (extracteur éolien).</li>
            <li>Le respect des <a href="/guides-techniques/distance-fosse-septique-limit-propriete" className="text-brand-600 underline">distances de limite de propriété</a>.</li>
          </ul>

          <AlertBlock type="info" title="Vente immobilière et conformité">
            Contrairement à une idée reçue, une installation "non conforme" n'empêche pas la vente de la maison. Elle informe l'acheteur de l'état du système. C'est ensuite une question de négociation financière, l'acheteur s'engageant légalement à réaliser les travaux de mise aux normes dans l'année suivant l'acte authentique. Pour en savoir plus, consultez notre guide sur la <a href="/guides-techniques/contre-visite-spanc-prix-deroulement" className="text-brand-600 underline">contre-visite SPANC</a>.
          </AlertBlock>
        </section>
      </article>
    </Layout>
  );
}
