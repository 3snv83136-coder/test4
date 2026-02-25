import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { guides, longTailKeywords } from '../data/guides';
import { BookOpen, Clock, User, ArrowRight, Droplets, ExternalLink } from 'lucide-react';

export default function GuideList() {
  return (
    <Layout darkBackground>
      <SEO
        title="Guides Techniques & Expertise ANC | Centre National"
        description="Découvrez nos dossiers techniques approfondis sur l'assainissement individuel. Des cas concrets, des solutions vérifiées et une expertise terrain."
        type="website"
      />

      <div className="max-w-4xl mx-auto">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-900 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-400 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-950/50 w-fit px-3 py-1 rounded-full border border-brand-800">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Base de Connaissance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter">
            Dossiers<br/>
            <span className="text-brand-400 italic font-medium">Techniques</span>
          </h1>
          <p className="text-2xl text-slate-400 leading-relaxed font-light max-w-3xl mb-10">
            Analyses approfondies, cas concrets et solutions d'experts pour maîtriser votre installation d'assainissement non collectif.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#guides" 
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-brand-900/20 hover:scale-105"
            >
              Explorer nos Guides <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              to="/diagnostic" 
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl transition-all border border-slate-700"
            >
              Faire un diagnostic
            </Link>
          </div>
        </header>

        <div id="guides" className="space-y-8">
          {guides.map((guide) => (
            <article key={guide.id} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-sm hover:border-brand-500/50 transition-colors group">
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                <span className="text-brand-300 bg-brand-900/50 px-3 py-1 rounded-full border border-brand-800/50">{guide.category}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {guide.readTime}</span>
              </div>
              <Link to={`/guides-techniques/${guide.slug}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors leading-tight">
                  {guide.title}
                </h2>
              </Link>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {guide.description}
              </p>
              <div className="flex items-center justify-between border-t border-slate-700 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{guide.author}</div>
                    <div className="text-xs text-slate-400">{new Date(guide.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  </div>
                </div>
                <Link 
                  to={`/guides-techniques/${guide.slug}`}
                  className="flex items-center gap-2 text-brand-400 font-bold text-sm uppercase tracking-wider hover:text-brand-300 transition-colors"
                >
                  Lire le dossier <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <ExternalLink className="w-6 h-6 text-brand-400" />
            Ressources Officielles & Institutionnelles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <a href="https://www.assainissement-non-collectif.developpement-durable.gouv.fr/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 transition-colors flex flex-col gap-2 group">
              <span className="font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between">
                Portail Interministériel de l'ANC <ExternalLink className="w-4 h-4 opacity-50" />
              </span>
              <span className="text-sm text-slate-400">Le site officiel du gouvernement sur l'assainissement non collectif.</span>
            </a>
            <a href="https://www.eaufrance.fr/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 transition-colors flex flex-col gap-2 group">
              <span className="font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between">
                Eaufrance <ExternalLink className="w-4 h-4 opacity-50" />
              </span>
              <span className="text-sm text-slate-400">Le service public d'information sur l'eau et les milieux aquatiques.</span>
            </a>
            <a href="https://www.boutique.afnor.org/fr-fr/norme/nf-dtu-641/travaux-de-batiment-mise-en-oeuvre-des-dispositifs-dassainissement-non-coll/fa143644/1569" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 transition-colors flex flex-col gap-2 group">
              <span className="font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between">
                Norme NF DTU 64.1 (AFNOR) <ExternalLink className="w-4 h-4 opacity-50" />
              </span>
              <span className="text-sm text-slate-400">Référentiel technique pour la mise en œuvre des dispositifs d'ANC.</span>
            </a>
            <a href="https://www.ademe.fr/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 transition-colors flex flex-col gap-2 group">
              <span className="font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between">
                ADEME <ExternalLink className="w-4 h-4 opacity-50" />
              </span>
              <span className="text-sm text-slate-400">Agence de la transition écologique - aides et conseils.</span>
            </a>
            <a href="https://www.lesagencesdeleau.fr/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 transition-colors flex flex-col gap-2 group">
              <span className="font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between">
                Les Agences de l'Eau <ExternalLink className="w-4 h-4 opacity-50" />
              </span>
              <span className="text-sm text-slate-400">Financement et préservation des ressources en eau.</span>
            </a>
            <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 transition-colors flex flex-col gap-2 group">
              <span className="font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between">
                ANAH <ExternalLink className="w-4 h-4 opacity-50" />
              </span>
              <span className="text-sm text-slate-400">Agence Nationale de l'Habitat - Aides financières pour la mise aux normes.</span>
            </a>
            <a href="https://www.cerema.fr/fr" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 transition-colors flex flex-col gap-2 group">
              <span className="font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between">
                CEREMA <ExternalLink className="w-4 h-4 opacity-50" />
              </span>
              <span className="text-sm text-slate-400">Expertise publique pour la transition écologique et la cohésion des territoires.</span>
            </a>
            <a href="https://www.faneau.fr/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 transition-colors flex flex-col gap-2 group">
              <span className="font-bold text-white group-hover:text-brand-400 transition-colors flex items-center justify-between">
                FANEAU <ExternalLink className="w-4 h-4 opacity-50" />
              </span>
              <span className="text-sm text-slate-400">Fédération des Acteurs Nationaux de l'Eau.</span>
            </a>
          </div>

          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Droplets className="w-6 h-6 text-brand-400" />
            Sujets en cours d'investigation
          </h3>
          <p className="text-slate-400 mb-8">
            Nos experts travaillent actuellement sur les dossiers suivants. Ils seront publiés prochainement après validation par notre comité technique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {longTailKeywords.slice(0, 10).map((keyword, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-brand-500 mt-1">→</span>
                <span className="capitalize-first">{keyword}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-700">
              + 40 autres sujets en préparation
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
