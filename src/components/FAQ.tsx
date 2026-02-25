import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="my-12">
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Foire Aux Questions (FAQ)</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-slate-800">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-slate-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
