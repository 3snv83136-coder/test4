import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { getVillesByDepartment } from '../data/villesGeo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [varOpen, setVarOpen] = useState(false);
  const [valDoiseOpen, setValDoiseOpen] = useState(false);
  const villesVar = getVillesByDepartment('var');
  const villesValDoise = getVillesByDepartment('val-doise');

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <div className="flex flex-col border-l-4 border-brand-500 pl-4 py-1">
                <span className="font-display font-black text-2xl text-white leading-none tracking-tighter uppercase">Centre National</span>
                <span className="text-[11px] text-brand-400 font-bold uppercase tracking-[0.2em] leading-tight mt-1">Assainissement Individuel</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              Le Centre National de l'Assainissement Individuel est l'organisme de référence pour l'information technique sur les fosses septiques et filtres à pouzzolane. Nous œuvrons pour la protection de l'environnement par la pédagogie technique.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-6">Ressources Techniques</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/diagnostic" className="hover:text-brand-400 transition-colors flex items-center gap-2">Diagnostic technique</Link></li>
              <li><Link to="/normes-spanc" className="hover:text-brand-400 transition-colors flex items-center gap-2">Réglementation SPANC</Link></li>
              <li><Link to="/maintenance" className="hover:text-brand-400 transition-colors flex items-center gap-2">Guide de maintenance</Link></li>
              <li><Link to="/cas-pratiques" className="hover:text-brand-400 transition-colors flex items-center gap-2">Études de cas réels</Link></li>
              <li><Link to="/guides-techniques" className="hover:text-brand-400 transition-colors flex items-center gap-2">Dossiers Techniques</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-6">Liens Institutionnels</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.assainissement-non-collectif.developpement-durable.gouv.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Portail Interministériel ANC</a></li>
              <li><a href="https://www.eaufrance.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Eaufrance</a></li>
              <li><a href="https://www.ademe.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">ADEME</a></li>
              <li><a href="https://www.boutique.afnor.org/fr-fr/norme/nf-dtu-641/travaux-de-batiment-mise-en-oeuvre-des-dispositifs-dassainissement-non-coll/fa143644/1569" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Norme NF DTU 64.1</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-6">L'Institution</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/a-propos" className="hover:text-brand-400 transition-colors">Notre mission</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-brand-400 transition-colors">Mentions Légales</Link></li>
              <li><a href="mailto:contact@centrenational-assainissement.fr" className="hover:text-brand-400 transition-colors">Contact Expert</a></li>
            </ul>
          </div>
        </div>

        {/* Index géographique Var & Val-d'Oise – listes repliables */}
        <div className="mt-16 pt-12 border-t border-slate-900">
          <h3 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-6">Index géographique – Cas pratiques par ville</h3>
          <p className="text-slate-500 text-xs mb-4 max-w-2xl">
            Pages dédiées assainissement et cas pratiques pour chaque commune du Var (83) et du Val-d'Oise (95). Cliquez sur un département pour afficher les villes.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-slate-800 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setVarOpen((o) => !o)}
                className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left text-brand-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-800/50 transition-colors"
                aria-expanded={varOpen}
              >
                <span>Var (83) – {villesVar.length} communes</span>
                {varOpen ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
              </button>
              {varOpen && (
                <div className="px-4 pb-4 pt-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1.5 max-h-64 overflow-y-auto border-t border-slate-800">
                  {villesVar.map((v) => (
                    <Link key={v.slug} to={`/assainissement/var/${v.slug}`} className="text-xs hover:text-brand-400 transition-colors truncate py-0.5" title={`Cas pratiques assainissement ${v.name}`}>
                      {v.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="border border-slate-800 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setValDoiseOpen((o) => !o)}
                className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left text-brand-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-800/50 transition-colors"
                aria-expanded={valDoiseOpen}
              >
                <span>Val-d'Oise (95) – {villesValDoise.length} communes</span>
                {valDoiseOpen ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
              </button>
              {valDoiseOpen && (
                <div className="px-4 pb-4 pt-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1.5 max-h-64 overflow-y-auto border-t border-slate-800">
                  {villesValDoise.map((v) => (
                    <Link key={v.slug} to={`/assainissement/val-doise/${v.slug}`} className="text-xs hover:text-brand-400 transition-colors truncate py-0.5" title={`Cas pratiques assainissement ${v.name}`}>
                      {v.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Index Thématique (Long Tail) */}
        <div className="mt-16 pt-12 border-t border-slate-900">
          <h3 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-8">Index Thématique & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-4">
            <Link to="/guides-techniques/comment-deboucher-epandage-fosse-septique" className="text-xs hover:text-brand-400 transition-colors">Déboucher un épandage</Link>
            <Link to="/guides-techniques/prix-changement-filtre-pouzzolane" className="text-xs hover:text-brand-400 transition-colors">Prix filtre pouzzolane</Link>
            <Link to="/guides-techniques/fosse-septique-pleine-un-mois-pourquoi" className="text-xs hover:text-brand-400 transition-colors">Fosse pleine en 1 mois</Link>
            <Link to="/guides-techniques/eau-javel-fosse-septique-danger" className="text-xs hover:text-brand-400 transition-colors">Eau de javel & Fosse</Link>
            <Link to="/guides-techniques/distance-fosse-septique-limite-propriete" className="text-xs hover:text-brand-400 transition-colors">Distances légales</Link>
            <Link to="/guides-techniques/comment-nettoyer-bac-a-graisse" className="text-xs hover:text-brand-400 transition-colors">Nettoyer bac à graisse</Link>
            <Link to="/guides-techniques/fosse-septique-beton-plastique-avis" className="text-xs hover:text-brand-400 transition-colors">Béton vs Plastique</Link>
            <Link to="/guides-techniques/gaz-toxique-fosse-septique-h2s-danger" className="text-xs hover:text-brand-400 transition-colors">Danger gaz H2S</Link>
            <Link to="/guides-techniques/planter-au-dessus-epandage-quelles-plantes" className="text-xs hover:text-brand-400 transition-colors">Plantes sur épandage</Link>
            <Link to="/guides-techniques/contre-visite-spanc-prix-deroulement" className="text-xs hover:text-brand-400 transition-colors">Contre-visite SPANC</Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 text-[11px] uppercase tracking-widest font-bold text-slate-600 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Centre National de l'Assainissement. Document d'intérêt public.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span>ISO 14001 Compliant</span>
            <span>Norme NF DTU 64.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
