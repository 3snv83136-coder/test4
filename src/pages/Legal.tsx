import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { Droplets } from 'lucide-react';

export default function Legal() {
  return (
    <Layout>
      <SEO
        title="Mentions Légales - Centre National de la Fosse Septique"
        description="Mentions légales, politique de confidentialité et conditions d'utilisation du site."
        type="article"
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-600 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <Droplets className="w-3.5 h-3.5" />
            <span>Cadre Juridique</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
            Mentions<br/>
            <span className="text-brand-600 italic font-medium">Légales</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-3xl m-0">
            Informations réglementaires, politique de confidentialité et conditions d'utilisation du Centre National de l'Assainissement.
          </p>
        </header>

        <section className="mt-12">
          <h2>1. Éditeur du site</h2>
          <p>
            Le site "Centre National de la Fosse Septique" est un média d'information technique indépendant.
          </p>
          <p>
            <strong>Directeur de la publication :</strong> Comité de rédaction technique<br />
            <strong>Contact :</strong> contact@centrenational-fosseseptique.fr
          </p>
        </section>

        <section className="mt-12">
          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur].
          </p>
        </section>

        <section className="mt-12">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </section>

        <section className="mt-12">
          <h2>4. Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre indicatif et éducatif. Bien que nous nous efforcions de maintenir les informations à jour et exactes, nous ne pouvons garantir l'exhaustivité ou l'exactitude des informations publiées.
          </p>
          <p>
            Le Centre National de la Fosse Septique décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et contenus présents sur ce site. Pour toute intervention sur une installation d'assainissement, il est impératif de faire appel à un professionnel qualifié.
          </p>
        </section>

        <section className="mt-12">
          <h2>5. Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle à l'insu de l'utilisateur. Les seules données collectées sont celles fournies volontairement via d'éventuels formulaires de contact, et ne sont utilisées que pour répondre aux demandes.
          </p>
        </section>
      </article>
    </Layout>
  );
}
