import { type ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import {
  Route,
  Switch,
  useLocation,
  useSearch,
  Router as WouterRouter,
} from 'wouter';
import { localBusinessData, seoPages, siteUrl, socialImageUrl } from '@/data/seo';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import LojaFisica from './pages/LojaFisica';
import Loja from './pages/Loja';

const queryClient = new QueryClient();

function SeoSync() {
  const [pathname] = useLocation();
  const search = useSearch();

  useEffect(() => {
    const category = pathname === '/loja' ? new URLSearchParams(search).get('categoria') : null;
    const slug = category === 'colhoes' ? 'colchoes' : category;
    const pagePath = slug ? `${pathname}?categoria=${slug}` : pathname;
    const page = seoPages.find((item) => item.path === pagePath)
      ?? seoPages.find((item) => item.path === pathname);

    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    document.title = page?.title ?? 'Página não encontrada | Simmons Icaraí';
    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!page) {
      setMeta('name', 'robots', 'noindex');
      setMeta('name', 'description', 'A página solicitada não foi encontrada.');
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.getElementById('local-business')?.remove();
      return;
    }
    robots?.remove();

    const canonical = siteUrl + page.path;
    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    setMeta('name', 'description', page.description);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', socialImageUrl);
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', socialImageUrl);

    let structuredData = document.getElementById('local-business');
    if (page.localBusiness && !structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'local-business';
      structuredData.setAttribute('type', 'application/ld+json');
      structuredData.textContent = JSON.stringify(localBusinessData);
      document.head.appendChild(structuredData);
    } else if (!page.localBusiness) {
      structuredData?.remove();
    }
  }, [pathname, search]);

  return null;
}

function ScrollToLocation() {
  useEffect(() => {
    const scrollToLocation = () => {
      window.requestAnimationFrame(() => {
        const hash = window.location.hash.slice(1);

        if (hash) {
          const target = document.getElementById(decodeURIComponent(hash));

          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    };

    scrollToLocation();

    window.addEventListener('hashchange', scrollToLocation);
    window.addEventListener('popstate', scrollToLocation);
    window.addEventListener('pushState', scrollToLocation);
    window.addEventListener('replaceState', scrollToLocation);

    return () => {
      window.removeEventListener('hashchange', scrollToLocation);
      window.removeEventListener('popstate', scrollToLocation);
      window.removeEventListener('pushState', scrollToLocation);
      window.removeEventListener('replaceState', scrollToLocation);
    };
  }, []);

  return null;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <ScrollToLocation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/termos-de-uso" component={TermosDeUso} />
        <Route path="/politica-de-privacidade" component={PoliticaPrivacidade} />
        <Route path="/loja-fisica" component={LojaFisica} />
        <Route path="/loja" component={Loja} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')} ssrPath={ssrPath}>
          <SeoSync />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
