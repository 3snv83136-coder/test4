import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { guides } from '../data/guides';

const routeNames: Record<string, string> = {
  '': 'Accueil',
  'diagnostic': 'Diagnostic',
  'normes-spanc': 'Normes SPANC',
  'maintenance': 'Maintenance',
  'cas-pratiques': 'Cas Pratiques',
  'a-propos': 'À Propos',
  'mentions-legales': 'Mentions Légales',
  'guides-techniques': 'Guides Techniques',
};

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getRouteName = (value: string, index: number) => {
    if (index === 1 && pathnames[0] === 'guides-techniques') {
      const guide = guides.find(g => g.slug === value);
      return guide ? guide.title : value;
    }
    return routeNames[value] || value;
  };

  const breadcrumbListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.centrenational-fosseseptique.fr/',
      },
      ...pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return {
          '@type': 'ListItem',
          position: index + 2,
          name: getRouteName(value, index),
          item: `https://www.centrenational-fosseseptique.fr${to}`,
        };
      }),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4 text-sm text-slate-500">
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbListJsonLd)}
      </script>
      <ol className="flex items-center space-x-2 flex-wrap gap-y-2">
        <li>
          <Link to="/" className="hover:text-slate-900 flex items-center transition-colors">
            <Home className="w-4 h-4" />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              {last ? (
                <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-md md:max-w-lg" aria-current="page" title={getRouteName(value, index)}>
                  {getRouteName(value, index)}
                </span>
              ) : (
                <Link to={to} className="hover:text-slate-900 transition-colors whitespace-nowrap">
                  {getRouteName(value, index)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
