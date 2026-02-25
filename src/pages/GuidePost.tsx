import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { guides } from '../data/guides';
import { Clock, User, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { DistanceSchema } from '../components/DistanceSchema';
import { WaterLevelSchema } from '../components/WaterLevelSchema';
import { VentilationSchema } from '../components/VentilationSchema';
import { ParkingSchema } from '../components/ParkingSchema';

export default function GuidePost() {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return <Navigate to="/guides-techniques" replace />;
  }

  const renderDiagram = (slug: string, sectionIndex: number) => {
    if (slug === 'distance-fosse-septique-limite-propriete' && sectionIndex === 0) {
      return <DistanceSchema />;
    }
    if (slug === 'fosse-septique-pleine-un-mois-pourquoi' && sectionIndex === 0) {
      return <WaterLevelSchema />;
    }
    if (slug === 'odeur-fosse-septique-maison-pluie' && sectionIndex === 0) {
      return <VentilationSchema />;
    }
    if (slug === 'rouler-garer-voiture-sur-fosse-septique' && sectionIndex === 1) {
      return <ParkingSchema />;
    }
    return null;
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: guide.title,
    description: guide.description,
    author: {
      '@type': 'Person',
      name: guide.author,
    },
    datePublished: guide.date,
    publisher: {
      '@type': 'Organization',
      name: 'Centre National de l\'Assainissement',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.centrenational-assainissement.fr/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.centrenational-assainissement.fr/guides-techniques/${guide.slug}`
    }
  };

  return (
    <Layout>
      <SEO
        title={`${guide.title} | Centre National`}
        description={guide.description}
        type="article"
        jsonLd={[articleJsonLd]}
      />

      <article className="max-w-4xl mx-auto">
        <Link to="/guides-techniques" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-600 transition-colors uppercase tracking-wider mb-12">
          <ArrowLeft className="w-4 h-4" /> Retour aux dossiers
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
            <span className="text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{guide.category}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {guide.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-slate-950 leading-[1.1] mb-8 tracking-tight">
            {guide.title}
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-light mb-10">
            {guide.description}
          </p>
          
          <div className="flex items-center gap-4 border-t border-b border-slate-100 py-6">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900">{guide.author}</div>
              <div className="text-sm text-slate-500">Publié le {new Date(guide.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>
          </div>
        </header>

        {/* E-E-A-T / GEO Summary Block */}
        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 mb-16 shadow-sm">
          <h2 className="text-lg font-black uppercase tracking-widest text-brand-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-600" />
            L'essentiel à retenir
          </h2>
          <ul className="space-y-4">
            {guide.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start gap-3 text-brand-900 font-medium">
                <span className="text-brand-500 mt-1">→</span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Sections */}
        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-16 prose-p:leading-relaxed prose-a:text-brand-600 prose-li:marker:text-brand-600">
          {guide.sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="flex items-center gap-3">
                <span className="text-brand-200 font-black text-4xl">{index + 1}.</span>
                {section.title}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
              {renderDiagram(guide.slug, index)}
            </section>
          ))}
        </div>

        {/* FAQ Section */}
        {guide.faq && guide.faq.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-brand-600" />
              Questions fréquentes (FAQ)
            </h2>
            <FAQ items={guide.faq} />
          </div>
        )}

        {/* Author Bio / E-E-A-T Footer */}
        <div className="mt-24 bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
            <User className="w-10 h-10 text-slate-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">À propos de l'auteur : {guide.author}</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Expert technique au sein du Centre National de l'Assainissement Individuel. Nos rédacteurs sont des professionnels de terrain (techniciens SPANC, terrassiers, bureaux d'études) garantissant une information fiable, neutre et conforme à la réglementation en vigueur (NF DTU 64.1).
            </p>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Contenu vérifié et validé techniquement
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
