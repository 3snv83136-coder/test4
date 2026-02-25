import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Home, ArrowRight, ArrowDown, Droplets, Filter, Waves, 
  Wind, AlertTriangle, ShieldAlert, Wrench, Search, BookOpen, Settings
} from 'lucide-react';

export default function Fonctionnement() {
  return (
    <Layout>
      <SEO
        title="Fonctionnement et Dysfonctionnements d'une Fosse Septique"
        description="Schémas et croquis explicatifs pour tout comprendre sur le fonctionnement normal et les pannes fréquentes d'une fosse septique."
        type="article"
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-600 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <Settings className="w-3.5 h-3.5" />
            <span>Synthèse Visuelle</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
            Fonctionnement &<br/>
            <span className="text-brand-600 italic font-medium">Dysfonctionnements</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-3xl m-0">
            Comprenez en un coup d'œil le cycle de l'eau dans votre installation et identifiez rapidement l'origine des pannes grâce à nos croquis explicatifs.
          </p>
        </header>

        {/* SECTION 1: FONCTIONNEMENT NORMAL */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Droplets className="w-8 h-8 text-emerald-500" />
            1. Le Cycle Normal (Schéma de Principe)
          </h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative z-10">
              
              {/* Étape 1: Maison */}
              <div className="flex flex-col items-center text-center w-full lg:w-1/4">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                  <Home className="w-10 h-10 text-slate-700" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">1. Collecte</h4>
                <p className="text-[11px] text-slate-500 leading-tight m-0">Eaux usées de la maison (WC, douches, cuisine).</p>
              </div>

              <div className="hidden lg:block"><ArrowRight className="w-8 h-8 text-slate-300" /></div>
              <div className="block lg:hidden"><ArrowDown className="w-8 h-8 text-slate-300" /></div>

              {/* Étape 2: Fosse */}
              <div className="flex flex-col items-center text-center w-full lg:w-1/4">
                <div className="w-24 h-28 bg-white border-2 border-brand-300 rounded-xl relative overflow-hidden mb-4 shadow-md">
                  <div className="absolute top-0 left-0 right-0 h-4 bg-amber-100 border-b border-amber-200 flex items-center justify-center">
                    <span className="text-[8px] font-black text-amber-600 uppercase">Graisses</span>
                  </div>
                  <div className="absolute top-4 bottom-8 left-0 right-0 bg-blue-50 flex items-center justify-center">
                    <Waves className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-700 flex items-center justify-center">
                    <span className="text-[8px] font-black text-slate-300 uppercase">Boues</span>
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">2. Fosse Toutes Eaux</h4>
                <p className="text-[11px] text-slate-500 leading-tight m-0">Décantation physique et digestion bactérienne anaérobie.</p>
              </div>

              <div className="hidden lg:block"><ArrowRight className="w-8 h-8 text-slate-300" /></div>
              <div className="block lg:hidden"><ArrowDown className="w-8 h-8 text-slate-300" /></div>

              {/* Étape 3: Préfiltre */}
              <div className="flex flex-col items-center text-center w-full lg:w-1/4">
                <div className="w-20 h-20 rounded-2xl bg-brand-50 border-2 border-brand-400 flex items-center justify-center mb-4 shadow-inner">
                  <Filter className="w-10 h-10 text-brand-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">3. Préfiltre</h4>
                <p className="text-[11px] text-slate-500 leading-tight m-0">La pouzzolane bloque les particules solides restantes.</p>
              </div>

              <div className="hidden lg:block"><ArrowRight className="w-8 h-8 text-slate-300" /></div>
              <div className="block lg:hidden"><ArrowDown className="w-8 h-8 text-slate-300" /></div>

              {/* Étape 4: Épandage */}
              <div className="flex flex-col items-center text-center w-full lg:w-1/4">
                <div className="w-20 h-20 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-center mb-4 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-8 bg-emerald-400 rounded-full"></div>
                    <div className="w-1.5 h-10 bg-emerald-500 rounded-full"></div>
                    <div className="w-1.5 h-8 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">4. Épandage</h4>
                <p className="text-[11px] text-slate-500 leading-tight m-0">Traitement final par le sol et dispersion de l'eau épurée.</p>
              </div>

            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/normes-spanc" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors uppercase tracking-wider">
              Voir les normes d'installation détaillées <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SECTION 2: DYSFONCTIONNEMENTS */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-red-500" />
            2. Les 4 Pannes Majeures (Croquis & Solutions)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Panne 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 m-0 leading-tight">Odeurs d'Œuf Pourri (H2S)</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Problème de ventilation</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed m-0 mb-6">
                Le gaz stagne dans la fosse et remonte par les siphons de la maison, souvent lors de baisses de pression atmosphérique (pluie).
              </p>
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <Link to="/guides-techniques/odeur-fosse-septique-maison-pluie" className="text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Lire le guide
                </Link>
                <Link to="/diagnostic" className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1">
                  <Search className="w-3.5 h-3.5" /> Faire un diagnostic
                </Link>
              </div>
            </div>

            {/* Panne 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                  <Filter className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 m-0 leading-tight">Filtre Colmaté</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Bouchon physique</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed m-0 mb-6">
                La pouzzolane est saturée de boues ou recouverte de lingettes. L'eau ne passe plus et le niveau monte dans la fosse.
              </p>
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <Link to="/cas-pratiques" className="text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Voir le cas pratique #1
                </Link>
                <Link to="/maintenance" className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5" /> Guide d'entretien
                </Link>
              </div>
            </div>

            {/* Panne 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                  <Waves className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 m-0 leading-tight">Débordement / Saturation</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Excès de boues</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed m-0 mb-6">
                Les boues dépassent 50% du volume de la fosse. Elles s'échappent vers l'épandage et risquent de le détruire définitivement.
              </p>
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <Link to="/maintenance" className="text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5" /> Quand vidanger ?
                </Link>
                <Link to="/guides-techniques/fosse-septique-pleine-un-mois-pourquoi" className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Fosse pleine : normal ?
                </Link>
              </div>
            </div>

            {/* Panne 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 m-0 leading-tight">Épandage Mort</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Colmatage terre/racines</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed m-0 mb-6">
                L'eau stagne dans le regard de répartition. Les drains sont bouchés par des racines ou un biofilm imperméable.
              </p>
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <Link to="/guides-techniques/comment-deboucher-epandage-fosse-septique" className="text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Comment déboucher ?
                </Link>
                <Link to="/guides-techniques/planter-au-dessus-epandage-quelles-plantes" className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Erreurs de plantation
                </Link>
              </div>
            </div>

          </div>
        </section>

      </article>
    </Layout>
  );
}
