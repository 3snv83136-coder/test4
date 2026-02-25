import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { getVilleBySlug, getDepartmentLabel, type DeptSlug } from '../data/villesGeo';
import { MapPin, FileText, Droplets, Wrench, Stethoscope } from 'lucide-react';

export default function VilleCasPratiques() {
  const { dep, villeSlug } = useParams<{ dep: string; villeSlug: string }>();
  const department = dep as DeptSlug | undefined;
  const ville = department && villeSlug ? getVilleBySlug(department, villeSlug) : null;

  if (!department || department !== 'var' && department !== 'val-doise' || !ville) {
    return <Navigate to="/cas-pratiques" replace />;
  }

  const deptLabel = getDepartmentLabel(department);
  const title = `Assainissement & Cas pratiques à ${ville.name} | SPANC ${deptLabel}`;
  const description = `Cas pratiques fosse septique et assainissement non collectif à ${ville.name} (${deptLabel}). Études de cas réels, diagnostic, maintenance et normes SPANC pour les particuliers.`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    mainEntity: {
      '@type': 'Place',
      name: ville.name,
      address: {
        '@type': 'PostalAddress',
        addressRegion: deptLabel,
        addressCountry: 'FR',
      },
    },
  };

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        canonical={`https://www.centrenational-assainissement.fr/assainissement/${department}/${ville.slug}`}
        type="article"
        jsonLd={[jsonLd]}
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-12 relative">
          <div className="flex items-center gap-2 text-brand-600 font-black mb-4 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>{deptLabel}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-slate-950 leading-[0.95] mb-6 tracking-tighter">
            Cas pratiques assainissement<br />
            <span className="text-brand-600 italic font-medium">à {ville.name}</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl m-0">
            Retrouvez nos études de cas réels et guides techniques pour l'assainissement non collectif à {ville.name} et dans le {deptLabel}. Fosse septique, filtre à pouzzolane, diagnostic et contrôle SPANC.
          </p>
        </header>

        <section className="not-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <Link
            to="/cas-pratiques"
            className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-300 hover:shadow-lg transition-all group"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center group-hover:bg-brand-200 transition-colors">
              <FileText className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Études de cas réels</span>
              <span className="text-sm text-slate-500">Filtre colmaté, absence d'entretien…</span>
            </div>
          </Link>
          <Link
            to="/diagnostic"
            className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-300 hover:shadow-lg transition-all group"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center group-hover:bg-brand-200 transition-colors">
              <Stethoscope className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Diagnostic technique</span>
              <span className="text-sm text-slate-500">Identifier les pannes</span>
            </div>
          </Link>
          <Link
            to="/maintenance"
            className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-300 hover:shadow-lg transition-all group"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center group-hover:bg-brand-200 transition-colors">
              <Wrench className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Maintenance</span>
              <span className="text-sm text-slate-500">Vidange, entretien filtre</span>
            </div>
          </Link>
          <Link
            to="/normes-spanc"
            className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-300 hover:shadow-lg transition-all group"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center group-hover:bg-brand-200 transition-colors">
              <Droplets className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Normes SPANC</span>
              <span className="text-sm text-slate-500">Réglementation {deptLabel}</span>
            </div>
          </Link>
        </section>

        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
            Pourquoi une page dédiée à {ville.name} ?
          </h2>
          <p className="text-slate-700 leading-relaxed m-0">
            Les règles d'assainissement non collectif (ANC) et les contrôles SPANC s'appliquent à l'échelle du département. 
            À {ville.name}, comme partout dans le {deptLabel}, les propriétaires de fosse septique ou de micro-station doivent faire contrôler leur installation 
            et respecter les normes en vigueur. Cette page centralise nos cas pratiques et guides utiles pour les habitants de {ville.name} et des communes voisines.
          </p>
        </div>
      </article>
    </Layout>
  );
}
