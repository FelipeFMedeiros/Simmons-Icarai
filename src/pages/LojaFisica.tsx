import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'wouter';
import { Footer } from '@/components/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ChevronRight, Home, MapPin, Clock, ExternalLink, ChevronLeft } from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

import imgBlack1 from '@/assets/AboutSection/linha_black-1.webp';
import imgBlack2 from '@/assets/AboutSection/linha_black-2.webp';
import imgDetalhes2 from '@/assets/AboutSection/detalhes-2.jpg';
import imgDetalhes3 from '@/assets/AboutSection/detalhes-3.jpg';
import imgInterior from '@/assets/AboutSection/interior_loja.webp';
import imgFachada from '@/assets/AboutSection/fachada.webp';

const images = [imgFachada, imgInterior, imgBlack1, imgBlack2, imgDetalhes2, imgDetalhes3];

const WA_HREF = 'https://api.whatsapp.com/send/?phone=5521977030033&text=Ol%C3%A1%2C+vi+seu+site%21+Quero+saber+mais+sobre+a+Simmons.&type=phone_number&app_absent=0';

const hours = [
    { days: 'Segunda a Sexta', time: '09:00h – 19:00h', closed: false },
    { days: 'Sábado', time: '09:00h – 15:00h', closed: false },
    { days: 'Domingo', time: 'Fechado', closed: true },
];

const socials = [
    {
        icon: FaInstagram,
        label: 'Instagram',
        handle: '@grupoicarai.simmons',
        href: 'https://www.instagram.com/grupoicarai.simmons',
    },
    {
        icon: FaFacebook,
        label: 'Facebook',
        handle: 'colchoessimmonsicarai',
        href: 'https://www.facebook.com/colchoessimmonsicarai',
    },
    {
        icon: FaWhatsapp,
        label: 'WhatsApp',
        handle: '(21) 97703-0033',
        href: WA_HREF,
    },
];

const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2974959144415!2d-43.1118182!3d-22.9023605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981643c7b6059%3A0xc3b6e760c418b76c!2sR.%20Dr.%20Tavares%20de%20Macedo%2C%2071%20-%20Icara%C3%AD%2C%20Niter%C3%B3i%20-%20RJ%2C%2024220-215!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr';
const MAPS_URL = 'https://www.google.com/maps/search/Rua+Dr.+Tavares+de+Macedo,+71+-+Icara%C3%AD,+Niter%C3%B3i';

export default function LojaFisica() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
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
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* ── Minimal sticky header ── */}
            <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto px-6 lg:px-12 h-16 flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                            SIMMONS
                            <span className="text-foreground text-sm tracking-normal font-sans font-medium ml-2">
                                NITERÓI
                            </span>
                        </span>
                    </Link>
                    <span className="text-muted-foreground select-none">|</span>
                    <nav className="flex items-center gap-1.5 text-sm" aria-label="Breadcrumb">
                        <Link
                            href="/"
                            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            <Home className="w-3.5 h-3.5" />
                            <span>Home</span>
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        <span className="text-foreground font-medium">Loja Física</span>
                    </nav>
                </div>
            </header>

            <main className="grow">
                {/* ── Hero banner ── */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

                            {/* Left: text */}
                            <div>
                                <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">
                                    Icaraí · Niterói
                                </span>
                                <h1 className="text-4xl md:text-5xl font-serif text-foreground mt-4 leading-tight">
                                    Showroom<br />Simmons Niterói
                                </h1>
                                <div className="w-10 h-px bg-primary mt-6 mb-8" />
                                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                                    Venha conhecer pessoalmente o nosso showroom de colchões Simmons em Icaraí.
                                    Experimente o conforto de cada modelo e deixe nossos especialistas encontrarem a
                                    solução ideal para o seu sono.
                                </p>

                                <div className="flex items-start gap-3 mb-10">
                                    <MapPin className="w-6 h-6 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        R. Dr. Tavares de Macedo, 71<br />
                                        Icaraí, Niterói - RJ
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={MAPS_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm uppercase tracking-widest transition-all duration-300 shadow-md hover:scale-105"
                                    >
                                        <MapPin className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                        Ver no Maps
                                    </a>
                                    <a
                                        href={WA_HREF}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
                                    >
                                        <FaWhatsapp className="w-4 h-4" />
                                        Falar pelo WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Right: portrait carousel */}
                            <div className="relative">
                                <div className="w-full aspect-4/5 rounded-2xl overflow-hidden shadow-2xl relative" ref={emblaRef}>
                                    <div className="flex h-full">
                                        {images.map((src, index) => (
                                            <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                                                <img
                                                    src={src}
                                                    alt={`Showroom ${index + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                    loading={index === 0 ? 'eager' : 'lazy'}
                                                />
                                                <div className="absolute inset-0 bg-black/10 ring-1 ring-inset ring-white/10 pointer-events-none" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrows */}
                                <button
                                    onClick={scrollPrev}
                                    aria-label="Slide anterior"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-border flex items-center justify-center text-foreground shadow-md transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={scrollNext}
                                    aria-label="Próximo slide"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-border flex items-center justify-center text-foreground shadow-md transition-colors cursor-pointer"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>

                                {/* Dots */}
                                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
                                    {Array.from({ length: count }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => scrollTo(index)}
                                            aria-label={`Foto ${index + 1}`}
                                            className={cn(
                                                'h-1.5 rounded-full transition-all duration-500 cursor-pointer shadow-sm',
                                                current === index ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white',
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Store info + map ── */}
                <section className="py-16 md:py-20 border-t border-border bg-stone-50">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 xl:gap-12 items-stretch">

                            {/* Left: info */}
                            <div className="flex flex-col gap-6">

                                {/* Hours */}
                                <div className="p-6 rounded-2xl bg-white border border-border shadow-sm">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-foreground font-semibold text-lg">Horário de funcionamento</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {hours.map(({ days, time, closed }) => (
                                            <div key={days} className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                                                <span className="text-muted-foreground">{days}</span>
                                                <span className={`font-medium ${closed ? 'text-destructive' : 'text-foreground'}`}>
                                                    {time}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Socials */}
                                <div className="flex flex-col gap-3">
                                    {socials.map(({ icon: Icon, label, handle, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200"
                                        >
                                            <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0" />
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 truncate">{handle}</p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0" />
                                        </a>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={MAPS_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group mt-auto flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm uppercase tracking-widest transition-all duration-300 shadow-md"
                                >
                                    <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                    Como Chegar
                                    <ExternalLink className="w-4 h-4 opacity-70" />
                                </a>
                            </div>

                            {/* Right: map */}
                            <div className="rounded-2xl overflow-hidden border border-border shadow-lg min-h-100 lg:min-h-0 bg-muted">
                                <iframe
                                    src={MAPS_EMBED}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, display: 'block', minHeight: '400px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização Simmons Niterói"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
