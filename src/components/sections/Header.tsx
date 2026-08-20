import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'wouter';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Colchões', id: 'colchoes' },
  { label: 'Mais Vendidos', id: 'mais-vendidos' },
  { label: 'Linha Hotel', id: 'hotel' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Atendimento', id: 'atendimento' },
];

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5521977030033&text=Ol%C3%A1%2C+vi+seu+site%21+Quero+saber+mais+sobre+a+Simmons.&type=phone_number&app_absent=0';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    function onScroll() {
      let current = '';
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= window.scrollY + 130) {
          current = id;
        }
      }
      setActiveSection(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function handleNavClick(id: string) {
    scrollToSection(id);
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
              SIMMONS<span className="text-foreground text-sm tracking-normal font-sans font-medium ml-2">NITERÓI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={cn(
                  'group relative pb-1 text-sm font-medium transition-colors duration-200 cursor-pointer',
                  activeSection === id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {label}
                <span
                  className={cn(
                    'absolute bottom-0 left-1/2 h-px -translate-x-1/2 transition-all duration-300 ease-out',
                    activeSection === id
                      ? 'w-full bg-primary'
                      : 'w-0 bg-primary group-hover:w-full',
                  )}
                />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full px-6 py-3 font-semibold text-sm transition-transform hover:scale-105 active:scale-95 duration-300 cursor-pointer">
                <MessageCircle className="w-4 h-4 mr-2" />
                FALE CONOSCO
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full-screen Menu via Portal */}
      {menuOpen &&
        createPortal(
          <div className="fixed inset-0 z-100 flex flex-col bg-background">
            {/* Header do menu mobile */}
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-border/40 px-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                  SIMMONS<span className="text-foreground text-sm tracking-normal font-sans font-medium ml-2">NITERÓI</span>
                </span>
              </Link>
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links do menu mobile */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={cn(
                    'text-2xl font-serif font-medium transition-colors duration-200 cursor-pointer',
                    activeSection === id ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {label}
                </button>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full max-w-xs"
                onClick={() => setMenuOpen(false)}
              >
                <Button className="w-full rounded-full py-6 font-semibold text-base">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  FALE CONOSCO
                </Button>
              </a>
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
