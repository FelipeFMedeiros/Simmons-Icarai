import React from 'react';
import { Footer } from '@/components/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

export default function PoliticaPrivacidade() {
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
                        <span className="text-foreground font-medium">Política de Privacidade</span>
                    </nav>
                </div>
            </header>

            {/* ── Content ── */}
            <main className="grow py-16 md:py-24">
                <div className="container mx-auto px-6 lg:px-12 max-w-4xl">

                    <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Simmons Icaraí</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight mb-4">
                        Política de Privacidade
                    </h1>
                    <p className="text-muted-foreground text-sm mb-12">Última atualização: agosto de 2026</p>

                    <div className="space-y-10 text-foreground leading-relaxed text-[15px] md:text-base">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
                            <p>
                                A Simmons Icaraí valoriza a privacidade dos seus visitantes e clientes. Esta Política de
                                Privacidade descreve de forma transparente como coletamos, utilizamos e protegemos as
                                informações obtidas por meio do nosso site. Ao navegar em nosso site, você concorda com
                                as práticas descritas neste documento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dados Coletados</h2>
                            <p className="mb-4">
                                O site da Simmons Icaraí coleta informações de forma limitada e apenas nas seguintes
                                situações:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 mb-6 marker:text-primary">
                                <li>
                                    <strong className="text-foreground">Contato direto por telefone:</strong> quando o
                                    visitante entra em contato conosco por ligação, o número de telefone pode ser
                                    registrado para fins de retorno de chamada e atendimento ao cliente.
                                </li>
                                <li>
                                    <strong className="text-foreground">Preenchimento de formulário:</strong> quando o
                                    visitante preenche e envia um formulário de contato disponível no site, as
                                    informações fornecidas — incluindo nome, e-mail e número de telefone — são coletadas
                                    exclusivamente para responder à solicitação.
                                </li>
                            </ul>
                            <div className="bg-muted border border-border p-5 rounded-xl text-sm">
                                <strong className="text-foreground">Importante:</strong> o número de telefone do
                                visitante somente será coletado e utilizado caso ele entre em contato conosco por
                                ligação ou envie um formulário de contato em nosso site. Não realizamos coleta passiva
                                de dados de telefone durante a navegação.
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                3. Tecnologias de Rastreamento
                            </h2>
                            <p className="mb-4">
                                Para melhorar a experiência do usuário e mensurar o desempenho de nossas campanhas de
                                marketing, utilizamos exclusivamente as seguintes tecnologias de rastreamento:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 mb-6 marker:text-primary">
                                <li>
                                    <strong className="text-foreground block mb-1">
                                        Meta Pixel (Facebook/Instagram Pixel)
                                    </strong>
                                    Utilizamos o Pixel da Meta para mensurar a eficácia de nossos anúncios veiculados
                                    nas plataformas Facebook e Instagram, identificar conversões e otimizar campanhas
                                    publicitárias. Esta tecnologia pode coletar informações sobre as páginas visitadas e
                                    ações realizadas no site. Para saber mais, acesse a Política de Privacidade da Meta:{' '}
                                    <a
                                        href="https://www.facebook.com/privacy/policy"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-primary hover:underline break-all"
                                    >
                                        https://www.facebook.com/privacy/policy
                                    </a>
                                </li>
                                <li>
                                    <strong className="text-foreground block mb-1">
                                        Google Tag (Google Tag Manager / Google Ads Tag)
                                    </strong>
                                    Utilizamos a tag do Google para mensurar conversões de campanhas veiculadas no
                                    Google Ads e acompanhar o comportamento dos visitantes em nosso site por meio do
                                    Google Analytics, permitindo análises de desempenho e melhorias contínuas na
                                    experiência de navegação. Para saber mais, acesse a Política de Privacidade do
                                    Google:{' '}
                                    <a
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-primary hover:underline break-all"
                                    >
                                        https://policies.google.com/privacy
                                    </a>
                                </li>
                            </ul>
                            <p>
                                O site da Simmons Icaraí não utiliza nenhuma outra ferramenta de rastreamento, cookie de
                                terceiros ou tecnologia de coleta de dados além do Meta Pixel e da tag do Google
                                descritos acima.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Uso das Informações</h2>
                            <p className="mb-4">
                                As informações coletadas são utilizadas somente para as seguintes finalidades:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li>Responder a contatos e solicitações enviadas pelo visitante;</li>
                                <li>
                                    Mensurar e otimizar o desempenho de campanhas publicitárias no Facebook, Instagram e
                                    Google;
                                </li>
                                <li>
                                    Analisar o desempenho do site para melhorias de navegação e experiência do usuário.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                5. Compartilhamento de Dados
                            </h2>
                            <p>
                                A Simmons Icaraí não vende, aluga nem compartilha seus dados pessoais com terceiros para
                                fins comerciais. As únicas exceções são as plataformas de publicidade mencionadas na
                                seção 3 (Meta e Google), conforme descrito em suas respectivas políticas de privacidade,
                                e quando exigido por lei ou ordem judicial.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
                            <p className="mb-4">
                                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), você
                                tem o direito de:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-primary">
                                <li>Confirmar a existência de tratamento dos seus dados;</li>
                                <li>Acessar os dados que possuímos sobre você;</li>
                                <li>Solicitar a correção de dados incompletos ou desatualizados;</li>
                                <li>Solicitar a exclusão dos seus dados pessoais;</li>
                                <li>Revogar o consentimento a qualquer momento.</li>
                            </ul>
                            <p>
                                Para exercer qualquer um desses direitos, entre em contato conosco pelos canais
                                disponíveis no site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                7. Segurança das Informações
                            </h2>
                            <p>
                                Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais
                                coletados contra acesso não autorizado, uso indevido, alteração ou divulgação. No
                                entanto, ressaltamos que nenhum sistema de segurança é completamente infalível.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                8. Alterações nesta Política
                            </h2>
                            <p>
                                Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças
                                nas práticas do site ou em exigências legais. Recomendamos que você a consulte
                                regularmente. A data da última atualização estará sempre indicada no topo deste
                                documento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                9. Contato e Dados da Empresa
                            </h2>
                            <p className="mb-4">
                                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus
                                dados, entre em contato com a Simmons Icaraí pelos seguintes canais:
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
