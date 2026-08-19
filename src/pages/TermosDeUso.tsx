import React from 'react';
import { Footer } from '@/components/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

export default function TermosDeUso() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* ── Minimal sticky header ── */}
            <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 lg:px-12 h-16 flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                            SIMMONS
                            <span className="text-foreground text-sm tracking-normal font-sans font-medium ml-2">
                                NITERÓI
                            </span>
                        </span>
                    </Link>
                    <span className="text-white/20 select-none">|</span>
                    <nav className="flex items-center gap-1.5 text-sm" aria-label="Breadcrumb">
                        <Link
                            href="/"
                            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            <Home className="w-3.5 h-3.5" />
                            <span>Home</span>
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
                        <span className="text-foreground font-medium">Termos de Uso</span>
                    </nav>
                </div>
            </header>

            {/* ── Content ── */}
            <main className="grow py-16 md:py-24">
                <div className="container mx-auto px-6 lg:px-12 max-w-4xl">

                    <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Simmons Icaraí</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight mb-4">
                        Termos de Uso
                    </h1>
                    <p className="text-muted-foreground text-sm mb-12">Última atualização: agosto de 2026</p>

                    <div className="space-y-10 text-foreground leading-relaxed text-[15px] md:text-base">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
                            <p>
                                Ao acessar e navegar no site da Simmons Icaraí — seja por meio de anúncios veiculados no
                                Google Ads, Meta Ads (Facebook e Instagram) ou qualquer outro canal —, você declara ter
                                lido, compreendido e aceito integralmente estes Termos de Uso. Caso não concorde com
                                qualquer disposição aqui contida, recomendamos que não utilize este site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Sobre o Site</h2>
                            <p>
                                Este site é uma landing page da Simmons Icaraí, destinada a apresentar produtos,
                                serviços e informações institucionais, e a receber contatos e solicitações de visitantes
                                interessados. O acesso é público e gratuito, podendo ocorrer por meio de links em
                                anúncios pagos do Google Ads e Meta Ads (Facebook/Instagram).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                3. Uso de Cookies e Tecnologias de Rastreamento
                            </h2>
                            <p className="mb-6">
                                Este site utiliza cookies e tecnologias de rastreamento para fins de funcionamento,
                                mensuração de resultados e publicidade. Ao acessar este site, você consente com o uso
                                dos cookies descritos abaixo.
                            </p>

                            <div className="overflow-x-auto mb-6 border border-border rounded-xl">
                                <table className="w-full text-left text-sm text-foreground">
                                    <thead className="bg-muted text-foreground">
                                        <tr>
                                            <th className="p-4 font-medium border-b border-border">Tipo</th>
                                            <th className="p-4 font-medium border-b border-border">Finalidade</th>
                                            <th className="p-4 font-medium border-b border-border">
                                                Pode ser desativado?
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        <tr>
                                            <td className="p-4 font-medium text-foreground">Marketing e Remarketing</td>
                                            <td className="p-4 text-muted-foreground">
                                                Meta Pixel (Facebook/Instagram): rastreamento de conversões e exibição
                                                de anúncios personalizados.
                                            </td>
                                            <td className="p-4">Não — essencial para o funcionamento do site.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-foreground">Marketing e Remarketing</td>
                                            <td className="p-4 text-muted-foreground">
                                                Google Tag (Google Ads / Analytics): mensuração de conversões e análise
                                                de comportamento no site.
                                            </td>
                                            <td className="p-4">Não — essencial para o funcionamento do site.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-muted border border-border p-5 rounded-xl text-sm mb-4">
                                <strong className="text-foreground">Aviso importante:</strong> como este site é uma
                                landing page cujo principal objetivo é receber visitantes provenientes de anúncios pagos
                                no Google Ads e Meta Ads, os cookies de marketing e remarketing são indispensáveis para
                                o funcionamento correto das campanhas publicitárias. Por essa razão, esses cookies não
                                podem ser desativados. Ao continuar navegando neste site, você consente expressamente
                                com o uso dessas tecnologias.
                            </div>
                            <p>
                                Para gerenciar as preferências de cookies diretamente nas plataformas de publicidade,
                                você pode acessar as configurações de privacidade do Facebook/Instagram (
                                <a
                                    href="https://www.facebook.com/privacy/policy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary hover:underline break-all"
                                >
                                    https://www.facebook.com/privacy/policy
                                </a>
                                ) e do Google (
                                <a
                                    href="https://myaccount.google.com/data-and-privacy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary hover:underline break-all"
                                >
                                    https://myaccount.google.com/data-and-privacy
                                </a>
                                ).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Uso Adequado do Site</h2>
                            <p className="mb-4">
                                O visitante compromete-se a utilizar este site de forma lícita e em conformidade com
                                estes Termos. É expressamente proibido:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li>Utilizar o site para fins ilícitos ou que violem direitos de terceiros;</li>
                                <li>
                                    Tentar acessar sistemas, servidores ou dados além do que é disponibilizado
                                    publicamente;
                                </li>
                                <li>
                                    Reproduzir, copiar ou distribuir conteúdos do site sem autorização expressa da
                                    Simmons Icaraí;
                                </li>
                                <li>Enviar informações falsas por meio dos formulários de contato.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Propriedade Intelectual</h2>
                            <p>
                                Todos os conteúdos disponibilizados neste site — incluindo textos, imagens, logotipos,
                                layout e identidade visual — são de propriedade da Simmons Icaraí ou de seus
                                licenciadores, e estão protegidos pela legislação de direitos autorais e propriedade
                                intelectual vigente no Brasil. O acesso ao site não confere ao visitante qualquer
                                direito sobre esses conteúdos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                6. Limitação de Responsabilidade
                            </h2>
                            <p className="mb-4">A Simmons Icaraí não se responsabiliza por:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li>Interrupções ou indisponibilidades temporárias do site;</li>
                                <li>Danos decorrentes do uso indevido do site pelo visitante;</li>
                                <li>
                                    Conteúdo de sites de terceiros eventualmente acessados por meio de links externos;
                                </li>
                                <li>Falhas de dispositivo, conexão ou software do próprio visitante.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Links Externos</h2>
                            <p>
                                Este site pode conter links para páginas externas, como perfis em redes sociais e
                                plataformas parceiras. A Simmons Icaraí não tem controle sobre o conteúdo dessas páginas
                                e não se responsabiliza por suas práticas de privacidade ou termos de uso.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Alterações nestes Termos</h2>
                            <p>
                                A Simmons Icaraí reserva-se o direito de atualizar estes Termos de Uso a qualquer
                                momento, sem aviso prévio. As alterações entram em vigor a partir de sua publicação no
                                site. O uso continuado do site após eventuais alterações implica a aceitação dos novos
                                termos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Lei Aplicável e Foro</h2>
                            <p>
                                Estes Termos de Uso são regidos pela legislação brasileira, em especial pelo Código de
                                Defesa do Consumidor (Lei nº 8.078/1990), pelo Marco Civil da Internet (Lei nº
                                12.965/2014) e pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Fica eleito o
                                foro da Comarca de Niterói/RJ para dirimir quaisquer controvérsias decorrentes deste
                                instrumento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                10. Contato e Dados da Empresa
                            </h2>
                            <p className="mb-4">
                                Dúvidas, solicitações ou reclamações relacionadas a estes Termos de Uso podem ser
                                encaminhadas pelos seguintes canais de atendimento:
                            </p>
                            <ul className="list-none space-y-2 text-foreground">
                                <li>
                                    <strong>Razão Social:</strong> L S R Comércio de Colchões Ltda.
                                </li>
                                <li>
                                    <strong>CNPJ:</strong> 25.264.327/0001-00
                                </li>
                                <li>
                                    <strong>Inscrição Municipal:</strong> 87185605
                                </li>
                                <li>
                                    <strong>Responsável:</strong> Lucimeire de Souza Rangel (CPF: 088.123.407-92)
                                </li>
                                <li>
                                    <strong>Endereço:</strong> R Dr. Tavares de Macedo, 71, Icaraí, Niterói - CEP:
                                    24.220-215
                                </li>
                                <li>
                                    <strong>Email:</strong> icarai@gruposimmons.com
                                </li>
                                <li>
                                    <strong>Telefone:</strong> 21 98555-6378
                                </li>
                                <li>
                                    <strong>WhatsApp Business:</strong> 21 97703-0033
                                </li>
                            </ul>
                        </section>

                        <div className="w-10 h-px bg-border my-10" />

                        <p className="text-sm text-muted-foreground">
                            Simmons Icaraí | Este documento é parte integrante do site da Simmons Icaraí.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
