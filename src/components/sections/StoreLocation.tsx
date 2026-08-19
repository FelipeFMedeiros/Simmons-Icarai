import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import imgStore from '@/assets/store-facade.jpg';

export function StoreLocation() {
  return (
    <section className="w-full bg-white py-0 border-y border-border" id="atendimento">
      <div className="grid lg:grid-cols-2">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] lg:h-auto overflow-hidden"
        >
          <img
            src={imgStore}
            alt="Fachada Simmons Niterói"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col justify-center px-4 py-16 lg:px-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              Visite nossa loja
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Viva a experiência Simmons de perto.
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Nossa equipe especializada está pronta para ajudar você a encontrar o colchão ideal, em um ambiente projetado para testar e sentir o verdadeiro conforto premium.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Visconde de Sepetiba, 123<br />
                    Centro, Niterói – RJ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Contato</h4>
                  <p className="text-muted-foreground">
                    <a href="#" className="hover:text-primary transition-colors">
                      (21) 5622-2228
                    </a>
                    <br />
                    <span className="text-sm">Fale no WhatsApp</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
