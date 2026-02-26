import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll en haut de page à chaque changement de route.
 * S'applique à tous les liens internes (Header, Footer, Breadcrumbs, etc.).
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll immédiat
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Au cas où le contenu se charge après (async), on rescroll au prochain frame
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
