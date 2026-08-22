import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import imgStore from '@/assets/AboutSection/fachada.webp';
import imgInterior from '@/assets/AboutSection/interior_loja.webp';

const interiorImages = [
  imgInterior
];

export function StoreLocation() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  return (
    <section className="w-full bg-white py-0 border-y border-border flex flex-col">
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
            alt="Fachada Simmons Icaraí"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </motion.div>

        <div className="flex flex-col justify-center px-4 py-16 lg:px-24 lg:py-24">
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
              Nossa equipe especializada está pronta para ajudar você a encontrar o colchão ideal, em um ambiente projetado para testar e sentir o verdadeiro conforto premium. Siga-nos nas redes sociais para ficar por dentro das novidades!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Dr. Tavares de Macedo, 71<br />
                    Icaraí, Niterói – RJ, 24220-215
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Contato</h4>
                  <p className="text-muted-foreground flex flex-col gap-2">
                    <a href="https://api.whatsapp.com/send/?phone=5521977030033" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                      <FaWhatsapp className="w-4 h-4" />
                      (21) 97703-0033
                    </a>
                    <a href="tel:+5521985556378" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (21) 98555-6378
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-muted-foreground flex flex-col">
                    <span>Segunda a Sexta: 09hrs até 19hrs</span>
                    <span>Sábado: 09hrs até 15hrs</span>
                    <span>Domingo: Fechado</span>
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-border flex items-center gap-4">
                <a href="https://www.instagram.com/grupoicarai.simmons" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/colchoessimmonsicarai" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5521977030033" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[60vh] border-t border-border">
        {/* Map */}
        <div className="relative w-full h-[45vh] lg:h-full bg-muted">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2974959144415!2d-43.1118182!3d-22.9023605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981643c7b6059%3A0xc3b6e760c418b76c!2sR.%20Dr.%20Tavares%20de%20Macedo%2C%2071%20-%20Icara%C3%AD%2C%20Niter%C3%B3i%20-%20RJ%2C%2024220-215!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Simmons Icaraí"
          ></iframe>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-[45vh] lg:h-full overflow-hidden bg-stone-100" ref={emblaRef}>
           <div className="flex h-full">
            {interiorImages.map((img, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 h-full relative">
                <img 
                  src={img} 
                  alt={`Interior da loja ${idx + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
}
