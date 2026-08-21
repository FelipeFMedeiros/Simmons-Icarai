import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

import imgBlack1 from '@/assets/AboutSection/linha_black-1.webp';
import imgBlack2 from '@/assets/AboutSection/linha_black-2.webp';
import imgDetalhes2 from '@/assets/AboutSection/detalhes-2.jpg';
import imgDetalhes3 from '@/assets/AboutSection/detalhes-3.jpg';

const aboutImages = [imgBlack1, imgBlack2, imgDetalhes2, imgDetalhes3];

export function AboutSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on('select', () => setCurrent(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              Excelência em cada detalhe
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Tradição que transforma noites em experiências.
            </h2>
            <div className="text-muted-foreground space-y-4 mb-8 text-lg">
              <p>
                Desde 1870, a Simmons combina inovação, excelência premium e conforto incomparável para transformar cada noite de sono em um verdadeiro refúgio.
              </p>
              <p>
                Não vendemos apenas colchões; entregamos suporte, qualidade e tecnologia que redefinem o que significa descansar.
              </p>
            </div>
            {/* Botão CTA com texto chamativo */}
            <a 
                href="https://api.whatsapp.com/send/?phone=5521977030033" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-md transition-all hover:scale-105 duration-300 bg-primary text-white hover:bg-primary/90"
            >
                QUERO CONVERSAR COM UM CONSULTOR
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden shadow-2xl rounded-2xl">
              <div ref={emblaRef} className="w-full h-full overflow-hidden">
                <div className="flex h-full">
                  {aboutImages.map((img, idx) => (
                    <div key={idx} className="flex-[0_0_100%] min-w-0 h-full relative">
                      <img
                        src={img}
                        alt={`Detalhes Simmons ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/10 ring-1 ring-inset ring-white/10 pointer-events-none" />

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => scrollTo(index)}
                    aria-label={`Ir para imagem ${index + 1}`}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-500 cursor-pointer shadow-sm',
                      current === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70',
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
