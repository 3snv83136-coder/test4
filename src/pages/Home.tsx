import { useState, FormEvent } from 'react';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { GeoSummary } from '../components/GeoSummary';
import { AlertBlock } from '../components/AlertBlock';
import { FAQ } from '../components/FAQ';
import { Simulator } from '../components/Simulator';
import { SepticSchema } from '../components/SepticSchema';
import { Droplets, ShieldCheck, Wrench, Settings, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/request-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '' });
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Erreur de connexion au serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      question: 'Combien coûte un filtre à pouzzolane ?',
      answer: 'Le coût moyen d\'un filtre à pouzzolane (matériau seul) varie entre 150 € et 300 € pour une fosse standard de 3000L. Avec l\'intervention d\'un professionnel pour le remplacement, comptez entre 400 € et 800 € selon l\'accessibilité.',
    },
    {
      question: 'Peut-on nettoyer un filtre colmaté ?',
      answer: 'Oui, un filtre à pouzzolane peut être nettoyé au jet d\'eau à basse pression. Cependant, si la pierre volcanique est saturée en profondeur ou effritée (généralement après 5 à 7 ans), le nettoyage est inefficace et le remplacement complet est obligatoire.',
    },
    {
      question: 'Une fosse septique peut-elle fonctionner sans filtre ?',
      answer: 'Non. Le préfiltre à pouzzolane est un élément obligatoire (norme NF DTU 64.1) situé en sortie de fosse. Sans lui, les matières en suspension partent directement dans le champ d\'épandage, provoquant son colmatage irréversible en quelques mois.',
    },
  ];

  return (
    <Layout>
      <SEO
        title="Guide complet 2026 – Fosse septique et filtre à pouzzolane"
        description="Le guide technique de référence sur le fonctionnement, l'entretien et les normes des fosses septiques et filtres à pouzzolane. Expertise terrain."
        type="article"
      />

      <article className="prose prose-slate prose-lg max-w-none">
        <header className="mb-16 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 text-brand-600 font-black mb-6 uppercase tracking-[0.2em] text-[10px] bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-100">
            <Droplets className="w-3.5 h-3.5" />
            <span>Référentiel National Technique</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black text-slate-950 leading-[0.85] mb-10 tracking-tighter">
            L'Essentiel de la<br/>
            <span className="text-brand-600 italic font-medium">Fosse Septique</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <p className="text-2xl text-slate-600 leading-relaxed font-light max-w-2xl m-0">
              L'autorité technique sur l'assainissement individuel. Comprendre, diagnostiquer et entretenir votre installation avec une précision d'expert.
            </p>
            <div className="flex-shrink-0 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Statut du Guide</div>
                <div className="text-sm font-bold text-slate-900">Conforme NF DTU 64.1</div>
              </div>
            </div>
          </div>
        </header>

        <GeoSummary
          quickAnswer="Le filtre à pouzzolane est le bouclier de votre épandage. Placé en sortie de fosse septique, il retient les matières solides en suspension. Il doit être vérifié tous les 6 mois, nettoyé annuellement au jet d'eau, et remplacé intégralement tous les 5 à 7 ans pour éviter le colmatage irréversible des drains."
          fivePoints={[
            "La fosse septique liquéfie les matières, le filtre retient les particules restantes.",
            "Un filtre colmaté provoque le refoulement des eaux usées dans l'habitation.",
            "La pouzzolane (roche volcanique) a une durée de vie utile de 5 à 7 ans maximum.",
            "Le nettoyage régulier retarde le remplacement mais ne l'annule pas.",
            "Le SPANC vérifie systématiquement la présence et l'état du préfiltre."
          ]}
          keyTakeaways={[
            "Vérification visuelle conseillée tous les 6 mois.",
            "Nettoyage à l'eau claire (basse pression) 1 fois par an.",
            "Remplacement complet dès que la pierre s'effrite ou reste noire après lavage.",
            "Coût moyen d'un remplacement : 400€ à 800€ par un pro."
          ]}
        />

        <SepticSchema />

        <Simulator />

        <section className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-black text-slate-900 m-0">Aides Financières 2026</h2>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Financer votre mise aux normes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">0%</span>
                L'Éco-Prêt à Taux Zéro (éco-PTZ)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Le dispositif phare pour l'ANC. Vous pouvez emprunter jusqu'à <strong>10 000 €</strong> sans intérêts pour la réhabilitation de votre installation par un dispositif ne consommant pas d'énergie (filtre compact, épandage).
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2">✓ Sans conditions de ressources</li>
                <li className="flex items-center gap-2">✓ Durée de remboursement jusqu'à 15 ans</li>
                <li className="flex items-center gap-2">✓ Cumulable avec les autres aides</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm">H</span>
                Aides de l'ANAH
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                L'Agence Nationale de l'Habitat peut subventionner les travaux des ménages aux revenus "modestes" ou "très modestes". L'aide peut couvrir jusqu'à <strong>50% du montant HT</strong> des travaux.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2">✓ Sous conditions de ressources</li>
                <li className="flex items-center gap-2">✓ Logement de plus de 15 ans</li>
                <li className="flex items-center gap-2">✓ Obligation de mise aux normes du SPANC</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center text-sm">~</span>
                Agences de l'Eau
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Certaines Agences de l'Eau (ex: Seine-Normandie, Rhône-Méditerranée) proposent des aides forfaitaires (souvent entre <strong>2000€ et 4000€</strong>) pour les réhabilitations groupées ou prioritaires.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2">✓ Variable selon votre zone géographique</li>
                <li className="flex items-center gap-2">✓ Souvent géré via votre commune ou EPCI</li>
                <li className="flex items-center gap-2">✓ Dossier technique préalable requis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-sm">%</span>
                TVA Réduite à 10%
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Les travaux de mise aux normes de l'assainissement non collectif bénéficient d'un taux de TVA réduit à <strong>10%</strong> (au lieu de 20%) sur la main d'œuvre et les fournitures.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2">✓ Logement achevé depuis plus de 2 ans</li>
                <li className="flex items-center gap-2">✓ Attestation simplifiée à fournir au terrassier</li>
                <li className="flex items-center gap-2">✓ Applicable sur le matériel et la pose</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-4 bg-brand-900 text-brand-100 rounded-xl text-sm flex items-start gap-3">
            <AlertBlock type="info" title="Conseil d'expert">
              Déposez toujours vos demandes d'aides <strong>AVANT</strong> de signer le devis ou de commencer les travaux. Une fois le chantier lancé, la plupart des subventions (notamment l'ANAH et l'éco-PTZ) ne sont plus accessibles.
            </AlertBlock>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Settings className="w-8 h-8 text-brand-600" />
            1. Fonctionnement détaillé d'une fosse septique
          </h2>
          <p>
            La fosse septique (ou fosse toutes eaux) est le premier maillon de la chaîne d'assainissement individuel. Son rôle n'est pas d'épurer l'eau, mais de la <strong>prétraiter</strong>.
          </p>
          <p>Le processus se déroule en trois phases physiques et biologiques :</p>
          <ul>
            <li><strong>La décantation :</strong> Les matières lourdes tombent au fond et forment les boues.</li>
            <li><strong>La flottaison :</strong> Les graisses remontent à la surface pour former la croûte (chapeau).</li>
            <li><strong>La liquéfaction :</strong> Les bactéries anaérobies digèrent les matières solides pour les transformer en gaz et en liquide.</li>
          </ul>

          <AlertBlock type="info" title="Donnée technique">
            Une fosse toutes eaux correctement dimensionnée retient environ 30% de la pollution carbonée. Le reste doit impérativement être traité par la filière d'épandage située en aval.
          </AlertBlock>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-brand-600" />
            2. Le rôle précis du filtre à pouzzolane
          </h2>
          <p>
            Le préfiltre, généralement rempli de pouzzolane (une roche volcanique poreuse), est situé à la sortie de la fosse. Il agit comme une barrière physique de sécurité.
          </p>
          <p>
            Si la fosse subit un à-coup hydraulique (vidange d'une baignoire, fortes pluies si mauvaise séparation), des matières en suspension peuvent être entraînées vers la sortie. Le filtre à pouzzolane les bloque, protégeant ainsi le champ d'épandage ou le filtre à sable d'un colmatage rapide et destructeur.
          </p>

          <AlertBlock type="warning" title="Symptômes d'alerte d'un filtre colmaté">
            <ul className="mt-2 mb-0">
              <li>Écoulement lent dans les sanitaires (toilettes, douches).</li>
              <li>Gargouillis inhabituels dans les canalisations.</li>
              <li>Odeurs nauséabondes persistantes autour de la fosse.</li>
              <li>Débordement visible au niveau du tampon de la fosse.</li>
              <li>Présence de racines dans les drains (voir <a href="/guides-techniques/planter-au-dessus-epandage-quelles-plantes" className="text-brand-600 underline">quelles plantes planter sur un épandage</a>).</li>
            </ul>
          </AlertBlock>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Wrench className="w-8 h-8 text-brand-600" />
            3. Entretien et durée de vie réelle
          </h2>
          <p>
            Contrairement aux idées reçues, la pouzzolane n'est pas éternelle. Avec le temps, l'acidité des gaz (H2S) et l'action mécanique de l'eau dégradent la roche.
          </p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Action</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Fréquence</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Méthode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 font-medium">Contrôle visuel</td>
                  <td className="border border-slate-200 px-4 py-3">Tous les 6 mois</td>
                  <td className="border border-slate-200 px-4 py-3">Ouverture du regard, vérification du niveau d'eau.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Nettoyage</td>
                  <td className="border border-slate-200 px-4 py-3">1 fois par an</td>
                  <td className="border border-slate-200 px-4 py-3">Sortir la cassette, laver au jet d'eau (pas de haute pression).</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 font-medium">Remplacement</td>
                  <td className="border border-slate-200 px-4 py-3">Tous les 5 à 7 ans</td>
                  <td className="border border-slate-200 px-4 py-3">Évacuation de l'ancienne pierre, remplissage avec pouzzolane neuve (calibre 40/80).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20 bg-brand-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800 border border-brand-700 text-brand-300 text-[10px] font-black uppercase tracking-widest mb-6">
                <Phone className="w-3 h-3" />
                Assistance Technique Directe
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black leading-none mb-6">
                Besoin d'un conseil<br/>
                <span className="text-brand-400 italic font-medium">Expert SPANC ?</span>
              </h2>
              <p className="text-brand-100/80 text-lg leading-relaxed mb-8">
                Nos techniciens vous rappellent gratuitement pour diagnostiquer votre installation et vous guider dans vos démarches de mise aux normes.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/expert${i}/100/100`} 
                      alt="Expert" 
                      className="w-12 h-12 rounded-full border-2 border-brand-900 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold">Experts disponibles</div>
                  <div className="text-brand-400 text-xs">Rappel sous 5 min</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande envoyée !</h3>
                  <p className="text-slate-600">Un expert vous rappellera dans les plus brefs délais.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-brand-600 font-bold hover:underline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Votre Nom</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Téléphone</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="06 00 00 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-brand-900/20 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Demander un rappel'}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center">
                    Les coordonnées arrivent directement sur notre boîte mail. Service gratuit.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />
      </article>
    </Layout>
  );
}
