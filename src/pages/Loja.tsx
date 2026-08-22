import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronRight, Home, ZoomIn, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { mattresses } from '@/data/mattresses';
import { accessories } from '@/data/accessories';
import { Footer } from '@/components/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { cn } from '@/lib/utils';
import heroImg from '@/assets/AboutSection/detalhes-4.webp';

const WA_HREF = 'https://api.whatsapp.com/send/?phone=5521977030033';

type Product = {
    id: string;
    name: string;
    category: string;
    tag?: string;
    image: string;
    type: 'mattress' | 'accessory';
};

const allProducts: Product[] = [
    ...mattresses.map((m) => ({ ...m, id: `m-${m.id}`, type: 'mattress' as const })),
    ...accessories.map((a) => ({ ...a, id: `a-${a.id}`, type: 'accessory' as const })),
];

const filterOptions = [
    { label: 'Todos', value: 'todos' },
    { label: 'Colchões', value: 'colchoes' },
    { label: 'Bases e Baús', value: 'bases' },
    { label: 'Travesseiros', value: 'travesseiros' },
    { label: 'Protetores', value: 'protetores' },
    { label: 'Outros Acessórios', value: 'outros' },
];

export default function Loja() {
    const [selectedFilter, setSelectedFilter] = useState<string>('todos');
    const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('categoria');
        if (cat) {
            setSelectedFilter(cat);
        }
    }, []);

    const filteredProducts = allProducts.filter((product) => {
        if (selectedFilter === 'todos') return true;
        if (selectedFilter === 'colchoes') return product.type === 'mattress' && product.category !== 'Box Bau';
        if (selectedFilter === 'bases') return product.category === 'Box Bau';
        if (selectedFilter === 'travesseiros') return product.category === 'Travesseiros';
        if (selectedFilter === 'protetores') return product.category === 'Protetor de Colchão';
        if (selectedFilter === 'outros')
            return (
                product.type === 'accessory' &&
                product.category !== 'Travesseiros' &&
                product.category !== 'Protetor de Colchão'
            );
        return true;
    });

    const handleWhatsAppClick = (productName: string) => {
        const text = encodeURIComponent(`Olá, vi o modelo *${productName}* no site e gostaria de mais informações!`);
        window.open(`${WA_HREF}&text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
            {/* ── Minimal sticky header ── */}
            <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto px-6 lg:px-12 h-16 flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                            SIMMONS
                            <span className="text-foreground text-sm tracking-normal font-sans font-medium ml-2">
                                ICARAÍ
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
                        <span className="text-foreground font-medium">Loja</span>
                    </nav>
                </div>
            </header>

            {/* ── Hero Banner ── */}
            <section className="relative h-[30vh] md:h-[40vh] min-h-62.5 flex items-center justify-center overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-black/60 z-10" />
                {heroImg && (
                    <img
                        src={heroImg}
                        alt="Catálogo Simmons"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                <div className="relative z-20 text-center px-6">
                    <span className="bg-white/80 py-2 px-2 rounded-md text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 block drop-shadow-md">
                        Catálogo Completo
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wide mb-6 drop-shadow-lg">
                        Nossos Produtos
                    </h1>
                    <div className="w-16 h-px bg-primary mx-auto" />
                </div>
            </section>

            {/* ── Catalog ── */}
            <main className="py-16 md:py-24 flex-1">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-16">
                        {filterOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setSelectedFilter(option.value)}
                                className={cn(
                                    'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer',
                                    selectedFilter === option.value
                                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                                        : 'bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground',
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20 text-muted-foreground">
                            Nenhum produto encontrado nesta categoria.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-card rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full"
                                >
                                    {product.tag && (
                                        <div className="absolute top-7 left-7 z-10 bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">
                                            {product.tag}
                                        </div>
                                    )}

                                    <div
                                        className="aspect-square sm:aspect-4/3 rounded-xl overflow-hidden mb-6 bg-stone-100 cursor-pointer relative"
                                        onClick={() => setLightbox({ image: product.image, title: product.name })}
                                        title="Clique para ampliar a imagem"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <ZoomIn className="w-10 h-10 text-white drop-shadow-md" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-1">
                                        <div className="mb-6">
                                            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                                                {product.category}
                                            </p>
                                            <h3 className="text-lg font-bold text-foreground leading-tight">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <Button
                                            onClick={() => handleWhatsAppClick(product.name)}
                                            className="w-full mt-auto bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 rounded-xl h-12 transition-all duration-300 font-semibold tracking-wide cursor-pointer flex items-center justify-center gap-2 group/btn"
                                        >
                                            <FaWhatsapp className="w-5 h-5 text-[#25D366] transition-colors" />
                                            Chamar no WhatsApp
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <WhatsAppButton />
            <Footer />

            {/* Lightbox / Zoom Imagem */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors cursor-pointer"
                            onClick={() => setLightbox(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <img
                            src={lightbox.image}
                            alt={lightbox.title}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        />
                        <p className="text-white mt-4 text-lg font-medium">{lightbox.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
