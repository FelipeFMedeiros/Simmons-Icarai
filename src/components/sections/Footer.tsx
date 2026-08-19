import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="font-serif text-2xl font-bold tracking-tight text-primary mb-4">
              SIMMONS<span className="text-foreground text-sm tracking-normal font-sans font-medium ml-2">NITERÓI</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Excelência em conforto para noites de sono incomparáveis.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/grupoicarai.simmons" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/colchoessimmonsicarai" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5521977030033" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Colchões</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Todos os Colchões</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Linha Black</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bamboo Botanical</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">New Hospitality</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Acessórios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Travesseiros</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Protetores</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Roupa de Cama</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Sobre a Simmons</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nossa História</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tecnologia</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sustentabilidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Loja Física</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Como Chegar</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Estacionamento</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Horário de Funcionamento</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Simmons do Brasil. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="/politica-de-privacidade" className="text-xs text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="text-xs text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
