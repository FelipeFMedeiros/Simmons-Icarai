import React from 'react';
import { Link } from 'wouter';
import { FaInstagram, FaFacebook, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL =
    'https://api.whatsapp.com/send/?phone=5521977030033&text=Ol%C3%A1%2C+vi+seu+site%21+Quero+saber+mais+sobre+a+Simmons.&type=phone_number&app_absent=0';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background border-t border-border/60">
            <div className="container mx-auto px-4 py-14 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    {/* Marca */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block">
                            <div className="mb-4 font-serif text-2xl font-bold tracking-tight text-primary">
                                SIMMONS
                                <span className="ml-2 font-sans text-sm font-medium tracking-normal text-foreground">
                                    ICARAÍ
                                </span>
                            </div>
                        </Link>

                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            Excelência em conforto para noites de sono incomparáveis. Encontre o colchão ideal para você
                            em nossa loja em Icaraí, Niterói.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/grupoicarai.simmons"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram Simmons Icaraí"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </a>

                            <a
                                href="https://www.facebook.com/colchoessimmonsicarai"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook Simmons Icaraí"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                <FaFacebook className="h-5 w-5" />
                            </a>

                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp Simmons Icaraí"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                <FaWhatsapp className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Loja */}
                    <div className="lg:col-span-2">
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">Loja</h4>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/loja"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Todos os produtos
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/loja?categoria=colchoes"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Colchões
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/loja?categoria=travesseiros"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Travesseiros
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/loja?categoria=protetores"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Protetores de colchão
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Institucional */}
                    <div className="lg:col-span-2">
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                            Institucional
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/loja-fisica"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Nossa loja
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="https://maps.app.goo.gl/AUVd4GpNV5GopSrq7"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Como chegar
                                </a>
                            </li>

                            <li>
                                <Link
                                    href="/loja-fisica#horario-funcionamento"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Horário de atendimento
                                </Link>
                            </li>

                            <li>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Fale conosco
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="lg:col-span-4">
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                            Visite a Simmons Icaraí
                        </h4>

                        <div className="space-y-4 text-sm text-muted-foreground">
                            <address className="not-italic leading-relaxed">
                                R. Dr. Tavares de Macedo, 71
                                <br />
                                Icaraí, Niterói - RJ
                                <br />
                                CEP 24.220-215
                            </address>

                            <div className="space-y-3">
                                <div className="flex flex-col items-start gap-2 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-5">
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                                    >
                                        <FaWhatsapp className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <span>(21) 97703-0033</span>
                                    </a>

                                    <a
                                        href="tel:2127046396"
                                        className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                                    >
                                        <FaPhoneAlt className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                                        <span>(21) 2704-6396</span>
                                    </a>
                                </div>

                                <p>
                                    <a
                                        href="mailto:icarai@gruposimmons.com"
                                        className="transition-colors hover:text-primary"
                                    >
                                        icarai@gruposimmons.com
                                    </a>
                                </p>
                            </div>

                            <p className="pt-1 text-xs">CNPJ: 25.264.327/0001-00</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-5 border-t border-border pt-7 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Simmons Icaraí. Todos os direitos reservados.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <Link
                            href="/politica-de-privacidade"
                            className="text-xs text-muted-foreground transition-colors hover:text-primary"
                        >
                            Política de Privacidade
                        </Link>

                        <Link
                            href="/termos-de-uso"
                            className="text-xs text-muted-foreground transition-colors hover:text-primary"
                        >
                            Termos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
