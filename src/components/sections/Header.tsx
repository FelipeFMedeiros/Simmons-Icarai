import React from 'react';
import { Link } from 'wouter';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: 'Colchões', href: '#colchoes' },
    { label: 'Camas e Bases', href: '#camas' },
    { label: 'Acessórios', href: '#acessorios' },
    { label: 'Linha Hotel', href: '#hotel' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Atendimento', href: '#atendimento' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-primary">
            SIMMONS<span className="text-foreground text-sm tracking-normal font-sans font-medium ml-2">NITERÓI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button className="rounded-full px-6 py-5 font-semibold text-sm transition-transform hover:scale-105 active:scale-95 duration-300 cursor-pointer">
            <MessageCircle className="w-4 h-4 mr-2" />
            FALE CONOSCO
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-border/40 bg-background overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-foreground py-2 border-b border-border/20"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full mt-4 rounded-full py-6 font-semibold" onClick={() => setIsOpen(false)}>
                <MessageCircle className="w-5 h-5 mr-2" />
                FALE CONOSCO
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
