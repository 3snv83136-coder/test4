import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { Shield, Award, BookOpen, Users, Droplets } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <SEO
        title="À propos du Centre National de la Fosse Septique"
        description="Découvrez notre expertise, notre méthodologie d'analyse et notre engagement pour une information technique fiable sur l'assainissement individuel."
        type="article"
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-600 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <Droplets className="w-3.5 h-3.5" />
            <span>Notre Mission</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
            À Propos du<br/>
            <span className="text-brand-600 italic font-medium">Centre National</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-3xl m-0">
            Le Centre National de l'Assainissement Individuel est un organisme indépendant dédié à l'information technique et à la pédagogie environnementale.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <Shield className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Indépendance totale</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Nous ne vendons ni matériel, ni prestations de vidange. Notre neutralité garantit une information objective, non biaisée par des intérêts commerciaux.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <Award className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Expertise terrain</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Nos articles sont rédigés et validés par des experts ayant une expérience réelle des interventions sur le terrain et des contrôles SPANC.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <BookOpen className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Rigueur normative</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Toutes nos recommandations s'appuient sur les textes officiels (Code de la santé publique, NF DTU 64.1) sans interprétation hasardeuse.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <Users className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pédagogie technique</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Nous traduisons la complexité technique et réglementaire en conseils clairs, actionnables et précis pour les propriétaires.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-12">
          <h2>Notre politique éditoriale (E-E-A-T)</h2>
          <p>
            Pour garantir le plus haut niveau de fiabilité (Expertise, Expérience, Autorité, Fiabilité), notre processus éditorial suit des règles strictes :
          </p>
          <ul>
            <li><strong>Transparence des sources :</strong> Chaque donnée chiffrée ou obligation légale est sourcée.</li>
            <li><strong>Mise à jour continue :</strong> Nos guides sont révisés annuellement pour intégrer les évolutions réglementaires.</li>
            <li><strong>Validation technique :</strong> Les études de cas sont basées sur des situations réelles documentées.</li>
          </ul>
          
          <div className="bg-slate-50 p-6 rounded-xl mt-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">Auteur & Responsabilité éditoriale</h3>
            <p className="text-sm text-slate-600 m-0">
              Comité de rédaction technique du Centre National de la Fosse Septique.<br/>
              Dernière révision globale du contenu : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
