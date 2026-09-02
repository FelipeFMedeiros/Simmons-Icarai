import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import imageBothanical from '@/assets/CollectionCards/bothanical.webp';
import imageHeritage from '@/assets/CollectionCards/heritage.webp';
import imageMadison from '@/assets/CollectionCards/madison.webp';
import { Link } from 'wouter';

const collections = [
    {
        image: imageBothanical,
        title: 'Bothanical',
        desc: 'Design sofisticado e suporte excepcional para seu sono profundo.',
    },
    {
        image: imageHeritage,
        title: 'Heritage',
        desc: 'Tecnologia sustentável que oferece frescor e bem-estar todas as noites.',
    },
    {
        image: imageMadison,
        title: 'Madison',
        desc: 'Conforto de hotel 5 estrelas para transformar seu descanso.',
    },
];

export function CollectionCards() {
    return (
        <section className="w-full py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-16">
                    <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-3 block">
                        Coleção Simmons
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                        Descubra o novo padrão de conforto.
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Colchões desenvolvidos com tecnologia exclusiva para oferecer noites de sono incomparáveis.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                    {collections.map((item, index) => (
                        <article
                            key={item.title}
                            className="group relative flex flex-col overflow-hidden border border-stone-200 bg-white shadow-[0_8px_28px_rgba(28,25,23,0.06)] transition-all duration-500 md:hover:-translate-y-1.5 md:hover:border-primary/25 md:hover:shadow-[0_18px_45px_rgba(28,25,23,0.12)]"
                        >
                            <div className="relative aspect-4/3 overflow-hidden">
                                <span className="absolute left-4 top-4 z-10 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur-sm">
                                    Coleção {String(index + 1).padStart(2, '0')}
                                </span>
                                <picture className="block h-full w-full">
                                    <source media="(max-width: 767px)" srcSet={item.image} />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width={768}
                                        height={576}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.045]"
                                    />
                                </picture>
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/20 to-transparent opacity-60 transition-opacity duration-500 md:group-hover:opacity-100"
                                />
                            </div>
                            <div className="flex grow flex-col p-6 lg:p-7">
                                <div className="mb-4 flex items-center gap-3">
                                    <h3 className="text-2xl font-serif leading-none text-foreground">{item.title}</h3>
                                    <span className="h-px grow bg-stone-200 transition-colors duration-500 md:group-hover:bg-primary/35" aria-hidden="true" />
                                </div>
                                <p className="grow text-sm leading-relaxed text-muted-foreground lg:text-base">{item.desc}</p>
                                <Link
                                    href="/loja"
                                    aria-label={`Conhecer a coleção ${item.title}`}
                                    className="group/cta mt-7 inline-flex w-fit items-center gap-2 border-b border-primary/30 pb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors duration-300 hover:border-primary"
                                >
                                    Conhecer coleção
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                                </Link>
                            </div>
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 md:group-hover:scale-x-100"
                            />
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/loja"
                        className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold tracking-wide text-primary-foreground shadow-md transition-all duration-300 ease-out md:hover:-translate-y-1 md:hover:scale-[1.02] md:hover:shadow-xl md:hover:brightness-110 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                    >
                        VER TODOS OS COLCHÕES
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 md:group-hover:translate-x-1.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
