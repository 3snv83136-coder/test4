import { useState, FormEvent } from 'react';
import { Phone, X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/request-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
          setFormData({ name: '', phone: '' });
        }, 3000);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 mb-4 overflow-hidden"
          >
            <div className="bg-brand-600 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider">Conseil Expert SPANC</h3>
                <p className="text-[10px] text-brand-100 uppercase font-black">Rappel immédiat & gratuit</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5">
              {isSubmitted ? (
                <div className="py-8 text-center animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-900 mb-1">Demande envoyée !</h4>
                  <p className="text-xs text-slate-500">Votre demande a bien été reçue. Un expert vous rappellera rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="cta-name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Votre Nom</label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Téléphone</label>
                    <input
                      id="cta-phone"
                      type="tel"
                      required
                      placeholder="06 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-200 active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    Être rappelé
                  </button>
                  <p className="text-[9px] text-slate-400 text-center leading-tight">
                    En validant, vous acceptez d'être rappelé par un technicien conseil en assainissement.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95 group ${
          isOpen ? 'bg-slate-900 text-white' : 'bg-brand-600 text-white hover:bg-brand-700'
        }`}
      >
        <div className="relative">
          <Phone className={`w-6 h-6 ${!isOpen && 'animate-bounce'}`} />
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          )}
        </div>
        <div className="text-left">
          <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">Besoin d'aide ?</div>
          <div className="text-sm font-bold leading-none">Conseil Expert SPANC</div>
        </div>
      </button>
    </div>
  );
}
