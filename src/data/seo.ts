export const siteUrl = 'https://simmonsicarai.com.br';
export const socialImageUrl = `${siteUrl}/Logo_Icarai_fundopreto.webp`;

export interface SeoPage {
    path: string;
    file: string;
    title: string;
    description: string;
    localBusiness?: boolean;
}

const catalog: Array<[string, string, string]> = [
    ['colchoes', 'Colchões Simmons em Icaraí | Simmons Icaraí', 'Conheça os colchões Simmons disponíveis para atendimento em Icaraí, Niterói, e encontre o conforto ideal para você.'],
    ['cama-box-colchao', 'Cama Box com Colchão Simmons | Simmons Icaraí', 'Explore conjuntos de cama box e colchão Simmons na loja de Icaraí, Niterói.'],
    ['baus', 'Box Baú Simmons em Icaraí | Simmons Icaraí', 'Conheça o box baú Simmons e aproveite mais espaço para organizar seu quarto.'],
    ['travesseiros', 'Travesseiros Simmons em Icaraí | Simmons Icaraí', 'Encontre travesseiros e capas protetoras Simmons para complementar seu descanso.'],
    ['roupa-de-cama', 'Roupa de Cama Simmons | Simmons Icaraí', 'Conheça lençóis, capas duvet, peseiras e protetores de colchão Simmons.'],
    ['protetores', 'Protetores de Colchão Simmons | Simmons Icaraí', 'Confira os protetores de colchão Simmons disponíveis para atendimento em Icaraí.'],
    ['acessorios', 'Acessórios Simmons para Cama | Simmons Icaraí', 'Explore capas pillow e acessórios Simmons para completar sua cama.'],
];

export const seoPages: SeoPage[] = [
    {
        path: '/',
        file: 'index.html',
        title: 'Colchões Simmons em Icaraí, Niterói | Simmons Icaraí',
        description: 'Conheça colchões, camas box e acessórios Simmons em Icaraí, Niterói. Visite nossa loja e encontre o conforto ideal para você.',
        localBusiness: true,
    },
    {
        path: '/loja',
        file: '_prerender/loja.html',
        title: 'Catálogo de Colchões e Cama Box | Simmons Icaraí',
        description: 'Explore o catálogo Simmons Icaraí com colchões, camas box, travesseiros, roupa de cama e acessórios.',
    },
    ...catalog.map(([slug, title, description]) => ({
        path: `/loja?categoria=${slug}`,
        file: `_prerender/loja-${slug}.html`,
        title,
        description,
    })),
    {
        path: '/loja-fisica',
        file: '_prerender/loja-fisica.html',
        title: 'Loja Simmons em Icaraí, Niterói | Visite-nos',
        description: 'Visite a Simmons Icaraí na Rua Dr. Tavares de Macedo, 71, Niterói. Conheça colchões e camas box com atendimento especializado.',
        localBusiness: true,
    },
    {
        path: '/politica-de-privacidade',
        file: '_prerender/politica-de-privacidade.html',
        title: 'Política de Privacidade | Simmons Icaraí',
        description: 'Consulte a política de privacidade do site Simmons Icaraí.',
    },
    {
        path: '/termos-de-uso',
        file: '_prerender/termos-de-uso.html',
        title: 'Termos de Uso | Simmons Icaraí',
        description: 'Consulte os termos de uso do site Simmons Icaraí.',
    },
];

export const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': `${siteUrl}/#loja`,
    name: 'Simmons Icaraí',
    url: `${siteUrl}/`,
    telephone: '+55-21-97703-0033',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Dr. Tavares de Macedo, 71',
        addressLocality: 'Niterói',
        addressRegion: 'RJ',
        postalCode: '24220-215',
        addressCountry: 'BR',
    },
    sameAs: [
        'https://www.instagram.com/grupoicarai.simmons',
        'https://www.facebook.com/colchoessimmonsicarai',
    ],
};
