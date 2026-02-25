import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, any>[];
}

export function SEO({ title, description, canonical, type = 'website', jsonLd = [] }: SEOProps) {
  const siteName = 'Centre National de la Fosse Septique';
  const fullTitle = `${title} | ${siteName}`;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: 'https://www.centrenational-assainissement.fr',
    logo: 'https://www.centrenational-assainissement.fr/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-0-00-00-00-00',
      contactType: 'technical support',
      areaServed: 'FR',
      availableLanguage: 'French'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR'
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      <script type="application/ld+json">
        {JSON.stringify([defaultJsonLd, ...jsonLd])}
      </script>
    </Helmet>
  );
}
