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
  Router as WouterRouter,
} from 'wouter';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import LojaFisica from './pages/LojaFisica';
import Loja from './pages/Loja';

const queryClient = new QueryClient();

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
