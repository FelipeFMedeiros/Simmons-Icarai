import Travesseiro1 from '@/assets/Acessorios/travesseiro-simmons-natural-latex-simmons-natural-latex-embalado.jpg';
import Travesseiro2 from '@/assets/Acessorios/Travesseiro_Simmons_Care_Touch.jpg';

import Protetor1 from '@/assets/Acessorios/protetor-de-colchao-simmons-luxury-protetor-simmons-ambientada.jpg';
import Protetor2 from '@/assets/Acessorios/accessory-3.webp';

import CapaPillow1 from '@/assets/Acessorios/capa-pillow-simmons-2_2.jpeg';


export interface Accessory {
    id: number;
    name: string;
    category: string;
    categoryId: string;
    tag?: string;
    image: string;
}

export const accessories: Accessory[] = [
    // Travesseiros
    {
        id: 10,
        name: 'Travesseiro Simmons Natural Latex',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: 'Mais vendido',
        image: Travesseiro1
    },
    {
        id: 11,
        name: 'Travesseiro Simmons Care Touch',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '8% OFF',
        image: Travesseiro2
    },

    // Protetores de Colchão
    {
        id: 40,
        name: 'Protetor de Colchão Simmons Luxury',
        category: 'Protetor de Colchão',
        categoryId: 'protetor-de-colchao',
        tag: '30% OFF',
        image: Protetor1
    },
    {
        id: 41,
        name: 'Protetor de Colchão Simmons Bamboo',
        category: 'Protetor de Colchão',
        categoryId: 'protetor-de-colchao',
        tag: '30% OFF',
        image: Protetor2
    },

    // Capa Pillow
    {
        id: 80,
        name: 'Capa Pillow Plush Simmons',
        category: 'Capa Pillow',
        categoryId: 'capa-pillow',
        tag: 'Exclusivo',
        image: CapaPillow1
    },
];

// Helper to group accessories by category
export const groupedAccessories = accessories.reduce((acc, current) => {
    if (!acc[current.category]) {
        acc[current.category] = {
            id: current.categoryId,
            items: []
        };
    }
    acc[current.category].items.push(current);
    return acc;
}, {} as Record<string, { id: string, items: Accessory[] }>);
