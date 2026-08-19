import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImg1 from '@/assets/hero-mattress-1.jpg';
import heroImg2 from '@/assets/hero-mattress-2.jpg';

const slides = [
  { image: heroImg1 },
  { image: heroImg2 },
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Carousel */}
          <div className="relative order-2 lg:order-1 rounded-2xl overflow-hidden bg-white shadow-xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, index) => (
                  <div className="flex-[0_0_100%] min-w-0 relative aspect-4/3 lg:aspect-4/3" key={index}>
                    <img
                      src={slide.image}
                      alt={`Simmons Colchões Slide ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === selectedIndex ? 'bg-primary' : 'bg-primary/20'}`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                />
              ))}
            </div>

            <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md text-primary transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md text-primary transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col justify-center max-w-lg mx-auto lg:ml-auto lg:mr-0 text-center lg:text-left"
          >
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Ofertas por Tempo Limitado
            </span>
            
            <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl leading-none text-foreground mb-6">
              <span className="block text-xl lg:text-2xl mb-2 font-medium">Até</span>
              <span className="text-primary font-bold">56%</span>
              <span className="text-3xl lg:text-4xl ml-2 font-normal">OFF</span>
              <span className="block text-2xl lg:text-4xl mt-2 font-medium">em Colchões</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-md mx-auto lg:mx-0">
              Conforto e tecnologia que transformam suas noites em momentos de descanso real.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 duration-300 cursor-pointer">
                FALE CONOSCO <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
