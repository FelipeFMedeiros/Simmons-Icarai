import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel';
import { cn } from '@/lib/utils';

const PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

const WHATSAPP_URL =
    'https://api.whatsapp.com/send/?phone=5521977030033&text=Ol%C3%A1%2C+vi+seu+site%21+Quero+saber+mais+sobre+a+Simmons.&type=phone_number&app_absent=0';

const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true });

// Desktop images
import hero from '@/assets/HeroSection/hero.webp';
import hero2 from '@/assets/HeroSection/hero-2.webp';
import hero3 from '@/assets/HeroSection/hero-3.webp';
import hero4 from '@/assets/HeroSection/hero-4.webp';
import hero5 from '@/assets/HeroSection/hero-5.webp';
import hero6 from '@/assets/HeroSection/hero-6.webp';

// Mobile images
import heroMobile from '@/assets/HeroSection/hero-mobile.webp';
import heroMobile2 from '@/assets/HeroSection/hero-mobile-2.webp';
import heroMobile3 from '@/assets/HeroSection/hero-mobile-3.webp';
import heroMobile4 from '@/assets/HeroSection/hero-mobile-4.webp';
import heroMobile5 from '@/assets/HeroSection/hero-mobile-5.webp';
import heroMobile6 from '@/assets/HeroSection/hero-mobile-6.webp';

const slides = [
    { desktop: hero, mobile: heroMobile }, 
    { desktop: hero2, mobile: heroMobile2 },
    { desktop: hero3, mobile: heroMobile3 },
    { desktop: hero4, mobile: heroMobile4 },
    { desktop: hero5, mobile: heroMobile5 },
    { desktop: hero6, mobile: heroMobile6 },
];

export function HeroSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [autoplayPlugin],
    );

    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    // Pre-seed slide 0 so the hero image loads immediately without a placeholder flash
    const [loaded, setLoaded] = useState<number[]>([0]);

    const updateLoaded = useCallback((api: EmblaCarouselType) => {
        const inView = api.slidesInView();
        setLoaded((prev) => {
            const unseen = inView.filter((i) => !prev.includes(i));
            return unseen.length ? [...prev, ...unseen] : prev;
        });
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setCount(emblaApi.scrollSnapList().length);
        setCurrent(emblaApi.selectedScrollSnap());

        emblaApi.on('select', () => setCurrent(emblaApi.selectedScrollSnap()));
        updateLoaded(emblaApi);
        emblaApi.on('slidesInView', updateLoaded);
        emblaApi.on('reInit', updateLoaded);
    }, [emblaApi, updateLoaded]);

    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="w-full bg-background pt-4 pb-8 px-4 md:px-6 lg:px-8">
            <div className="relative w-full max-w-[1920px] mx-auto aspect-941/1672 md:aspect-1920/555 rounded-2xl md:rounded-4xl overflow-hidden shadow-2xl">
                <div ref={emblaRef} className="w-full h-full overflow-hidden">
                    <div className="flex h-full" style={{ touchAction: 'pan-y pinch-zoom' }}>
                        {slides.map(({ desktop, mobile }, index) => {
                            const isLoaded = loaded.includes(index);
                            return (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 h-full"
                                    style={{ transform: 'translate3d(0,0,0)' }}
                                >
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full h-full"
                                        tabIndex={current === index ? 0 : -1}
                                        aria-hidden={current !== index}
                                    >
                                        {/* Mobile image */}
                                        <img
                                            src={isLoaded ? mobile : PLACEHOLDER}
                                            alt={`Slide ${index + 1}`}
                                            className="block md:hidden w-full h-full object-cover object-center"
                                            loading={index === 0 ? 'eager' : undefined}
                                            fetchPriority={index === 0 ? 'high' : 'auto'}
                                            decoding={index === 0 ? 'sync' : 'async'}
                                        />
                                        {/* Desktop image */}
                                        <img
                                            src={isLoaded ? desktop : PLACEHOLDER}
                                            alt={`Slide ${index + 1}`}
                                            className="hidden md:block w-full h-full object-cover object-center"
                                            loading={index === 0 ? 'eager' : undefined}
                                            fetchPriority={index === 0 ? 'high' : 'auto'}
                                            decoding={index === 0 ? 'sync' : 'async'}
                                        />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Prev arrow */}
                <button
                    type="button"
                    onClick={scrollPrev}
                    aria-label="Slide anterior"
                    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/80 hover:bg-primary shadow-lg border border-white/20 text-white transition-all cursor-pointer backdrop-blur-sm"
                >
                    <svg viewBox="0 0 532 532" className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" focusable="false">
                        <path
                            fill="currentColor"
                            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                        />
                    </svg>
                </button>

                {/* Next arrow */}
                <button
                    type="button"
                    onClick={scrollNext}
                    aria-label="Próximo slide"
                    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/80 hover:bg-primary shadow-lg border border-white/20 text-white transition-all cursor-pointer backdrop-blur-sm"
                >
                    <svg viewBox="0 0 532 532" className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" focusable="false">
                        <path
                            fill="currentColor"
                            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                        />
                    </svg>
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => scrollTo(index)}
                            aria-label={`Ir para slide ${index + 1}`}
                            className={cn(
                                'h-1.5 rounded-full transition-all duration-500 cursor-pointer shadow-sm',
                                current === index ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70',
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
