import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { guides } from '../data/guides';
import { getVilleBySlug, getDepartmentLabel, type DeptSlug } from '../data/villesGeo';

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

const SITE_URL = 'https://www.centrenational-assainissement.fr';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Page ville assainissement : /assainissement/var/bargemon ou /assainissement/val-doise/xxx
  const isVilleAssainissement = pathnames[0] === 'assainissement' && pathnames.length === 3;
  const dep = pathnames[1] as DeptSlug | undefined;
  const villeSlug = pathnames[2];
  const ville = isVilleAssainissement && (dep === 'var' || dep === 'val-doise') ? getVilleBySlug(dep, villeSlug) : null;

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
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
      ...(ville
        ? [
            { '@type': 'ListItem', position: 2, name: 'Cas Pratiques', item: `${SITE_URL}/cas-pratiques` },
            { '@type': 'ListItem', position: 3, name: getDepartmentLabel(dep!), item: `${SITE_URL}/assainissement/${dep}` },
            { '@type': 'ListItem', position: 4, name: ville.name, item: `${SITE_URL}${location.pathname}` },
          ]
        : pathnames.map((value, index) => ({
            '@type': 'ListItem' as const,
            position: index + 2,
            name: getRouteName(value, index),
            item: `${SITE_URL}/${pathnames.slice(0, index + 1).join('/')}`,
          })),
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
        {ville ? (
          <>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              <Link to="/cas-pratiques" className="hover:text-slate-900 transition-colors whitespace-nowrap">
                Cas pratiques
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-slate-500 whitespace-nowrap">{getDepartmentLabel(dep!)}</span>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-md md:max-w-lg" aria-current="page" title={ville.name}>
                {ville.name}
              </span>
            </li>
          </>
        ) : (
          pathnames.map((value, index) => {
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
          })
        )}
      </ol>
    </nav>
  );
}
