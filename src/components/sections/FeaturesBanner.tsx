import React, { useEffect, useState, useCallback } from 'react';
import { ShieldCheck, Globe, Cpu, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: ShieldCheck,
    title: '150+ anos de tradição',
    desc: 'Excelência em conforto desde 1870.',
  },
  {
    icon: Globe,
    title: 'Presença internacional',
    desc: 'Qualidade reconhecida em todo o mundo.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia avançada',
    desc: 'Sistemas inteligentes que elevam sua experiência.',
  },
  {
    icon: Award,
    title: 'Certificação internacional',
    desc: 'Compromisso com os mais altos padrões de qualidade.',
  },
];

export function FeaturesBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
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
    <section className="w-full border-y border-border bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 md:divide-x divide-border">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 first:pt-0"
              >
                <div className="mb-4 text-primary">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden -mx-4 relative">
          <div ref={emblaRef} className="overflow-hidden px-4">
            <div className="flex touch-pan-y">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex-[0_0_80%] min-w-0 px-4">
                    <div className="flex flex-col items-center text-center h-full pt-4">
                      <div className="mb-4 text-primary">
                        <Icon className="w-8 h-8 stroke-[1.5]" />
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                  <button
                      key={index}
                      type="button"
                      onClick={() => scrollTo(index)}
                      aria-label={`Ir para item ${index + 1}`}
                      className={cn(
                          'h-1.5 rounded-full transition-all duration-300',
                          current === index ? 'w-6 bg-primary' : 'w-1.5 bg-primary/30',
                      )}
                  />
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
