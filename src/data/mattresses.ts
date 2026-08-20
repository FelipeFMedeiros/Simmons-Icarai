import Colchao1 from '@/assets/Colchoes/colchao_simmons_madison_queen.jpg';
import Colchao2 from '@/assets/Colchoes/colchao_simmons_heritage.jpg';
import Colchao3 from '@/assets/Colchoes/colchao__simmons_soho_ultra_plush_1.jpg';
import Colchao4 from '@/assets/Colchoes/co_b_bothanic_essence.jpg';
import Colchao5 from '@/assets/Colchoes/colchao_simmons__bamboo_bothanic_moderate.jpg';
import Colchao6 from '@/assets/Colchoes/colchao_simmons_saint_louis_plush.jpg';
import Colchao7 from '@/assets/Colchoes/colchao_simmons_baltimore_queen_1.jpg';
import Colchao8 from '@/assets/Colchoes/co_breeze-6tabr_eptin32_-_colch_o.jpg';
import Colchao9 from '@/assets/Colchoes/colchao__simmons_tenerife_neo.jpg';
import Colchao10 from '@/assets/Colchoes/Col_New_Geocities_28_alt.png';
import Colchao11 from '@/assets/Colchoes/colchao-simmons-first-plush-colchao-simmons-first-moderate.jpg';
import Bau1 from '@/assets/Colchoes/box-bau-simmons-brook-cinza-box-bau-brook-cinza-ambientada.jpg';


export interface Mattress {
    id: number;
    name: string;
    category: string;
    tag?: string;
    image: string;
}

export const mattresses: Mattress[] = [
    {
        id: 1,
        name: 'Colchão Simmons Madison',
        category: 'Molas Ensacadas',
        tag: '12% OFF',
        image: Colchao1
    },
    {
        id: 2,
        name: 'Colchão Simmons Heritage',
        category: 'Molas Ensacadas',
        tag: '15% OFF',
        image: Colchao2
    },
    {
        id: 3,
        name: 'Colchão Simmons Soho',
        category: 'Molas Ensacadas',
        tag: '15% OFF',
        image: Colchao3
    },
    {
        id: 4,
        name: 'Colchão Simmons Bamboo Bothanical Essence',
        category: 'Molas Ensacadas',
        tag: '20% OFF',
        image: Colchao4
    },
    {
        id: 5,
        name: 'Colchão Simmons Bamboo Bothanical Moderate',
        category: 'Molas Ensacadas',
        tag: '15% OFF',
        image: Colchao5
    },
    {
        id: 6,
        name: 'Colchão Simmons Saint Louis Plush',
        category: 'Molas Ensacadas',
        tag: '15% OFF',
        image: Colchao6
    },
    {
        id: 7,
        name: 'Colchão Simmons Baltimore',
        category: 'Molas Ensacadas',
        tag: '15% OFF',
        image: Colchao7
    },
    {
        id: 8,
        name: 'Colchão Simmons Breeze',
        category: 'Molas Ensacadas',
        tag: '15% OFF',
        image: Colchao8
    },
    {
        id: 9,
        name: 'Colchão Simmons Tenerife Neo',
        category: 'Malha Touch',
        tag: '20% OFF',
        image: Colchao9
    },
    {
        id: 10,
        name: 'Colchão Simmons New Geocities',
        category: 'Molas Ensacadas',
        tag: '20% OFF',
        image: Colchao10
    },
    {
        id: 11,
        name: 'Colchão Simmons First Plush',
        category: 'Molas Ensacadas',
        tag: '20% OFF',
        image: Colchao11
    },
    {
        id: 12,
        name: 'Box Baú Simmons Brook',
        category: 'Box Bau',
        tag: '15% OFF',
        image: Bau1
    }
];

export const categories = Array.from(new Set(mattresses.map(m => m.category)));
