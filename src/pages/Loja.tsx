import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronRight, Home, Maximize2, X } from 'lucide-react';
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
        window.open(`${WA_HREF}&text=${text}`, '_blank', 'noopener,noreferrer');
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
                    <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
                        {filterOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setSelectedFilter(option.value)}
                                aria-pressed={selectedFilter === option.value}
                                className={cn(
                                    'shrink-0 cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                                    selectedFilter === option.value
                                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                                        : 'bg-white text-muted-foreground border-stone-200 hover:border-primary/40 hover:text-foreground hover:shadow-sm',
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>

                    <div className="mb-8 flex items-end justify-between border-b border-stone-200 pb-4">
                        <div>
                            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                Catálogo Simmons
                            </span>
                            <p className="font-serif text-2xl text-foreground">
                                {filterOptions.find((option) => option.value === selectedFilter)?.label ?? 'Todos'}
                            </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
                        </span>
                    </div>

                    {/* Products Grid */}
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20 text-muted-foreground">
                            Nenhum produto encontrado nesta categoria.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                            {filteredProducts.map((product, index) => (
                                <article
                                    key={product.id}
                                    className="group relative flex h-full flex-col overflow-hidden border border-stone-200 bg-white shadow-[0_8px_26px_rgba(28,25,23,0.06)] transition-all duration-500 md:hover:-translate-y-1.5 md:hover:border-primary/20 md:hover:shadow-[0_18px_42px_rgba(28,25,23,0.12)]"
                                >
                                    {product.tag && (
                                        <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-md">
                                            {product.tag}
                                        </span>
                                    )}

                                    <button
                                        type="button"
                                        className="relative aspect-4/3 cursor-zoom-in overflow-hidden bg-[#f4f1ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                                        onClick={() => setLightbox({ image: product.image, title: product.name })}
                                        title="Clique para ampliar a imagem"
                                        aria-label={`Ampliar foto do ${product.name}`}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.05]"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-stone-800 opacity-100 shadow-md backdrop-blur-sm transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                                            <Maximize2 className="h-4 w-4" />
                                        </span>
                                    </button>

                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-6 flex-1">
                                            <div className="mb-3 flex items-center justify-between gap-3">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                                                    {product.category}
                                                </p>
                                                <span className="text-[10px] font-semibold tracking-[0.16em] text-stone-400">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <h3 className="font-serif text-xl font-medium leading-tight tracking-[-0.01em] text-foreground lg:text-2xl">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <Button
                                            onClick={() => handleWhatsAppClick(product.name)}
                                            className="group/btn mt-auto h-12 w-full rounded-sm bg-stone-900 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:cursor-pointer hover:bg-primary hover:shadow-md no-default-hover-elevate no-default-active-elevate"
                                        >
                                            <FaWhatsapp className="h-5 w-5 text-[#25D366] transition-colors duration-300 group-hover/btn:text-white" />
                                            <span>Solicitar atendimento</span>
                                        </Button>
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 md:group-hover:scale-x-100"
                                    />
                                </article>
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
                            type="button"
                            aria-label="Fechar visualização da imagem"
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
