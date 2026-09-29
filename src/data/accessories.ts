import ProductImage1 from '@/assets/Acessorios/baus-01.jpg';
import ProductImage2 from '@/assets/Acessorios/travesseiros-01.jpg';
import ProductImage3 from '@/assets/Acessorios/travesseiros-02.jpg';
import ProductImage4 from '@/assets/Acessorios/travesseiros-03.jpg';
import ProductImage5 from '@/assets/Acessorios/travesseiros-04.jpg';
import ProductImage6 from '@/assets/Acessorios/travesseiros-05.png';
import ProductImage7 from '@/assets/Acessorios/travesseiros-06.png';
import ProductImage8 from '@/assets/Acessorios/travesseiros-07.png';
import ProductImage9 from '@/assets/Acessorios/travesseiros-08.png';
import ProductImage10 from '@/assets/Acessorios/roupa-de-cama-01.jpg';
import ProductImage11 from '@/assets/Acessorios/roupa-de-cama-02.jpg';
import ProductImage12 from '@/assets/Acessorios/roupa-de-cama-03.jpg';
import ProductImage13 from '@/assets/Acessorios/roupa-de-cama-04.jpg';
import ProductImage14 from '@/assets/Acessorios/roupa-de-cama-05.png';
import ProductImage15 from '@/assets/Acessorios/acessorios-01.png';
import ProductImage16 from '@/assets/Acessorios/acessorios-02.png';
import ProductImage17 from '@/assets/Acessorios/acessorios-03.png';

export interface Accessory {
    id: number;
    name: string;
    category: string;
    categoryId: string;
    tag?: string;
    image: string;
}

export const accessories: Accessory[] = [
    {
        id: 1,
        name: 'Box Baú Simmons Brook Cinza',
        category: 'Baús',
        categoryId: 'baus',
        tag: '17% OFF',
        image: ProductImage1,
    },
    {
        id: 2,
        name: 'Travesseiro Simmons Natural Latex',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '9% OFF',
        image: ProductImage2,
    },
    {
        id: 3,
        name: 'Travesseiro Simmons Pillow 50x70',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '9% OFF',
        image: ProductImage3,
    },
    {
        id: 4,
        name: 'Travesseiro Simmons Ergo Prime',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '9% OFF',
        image: ProductImage4,
    },
    {
        id: 5,
        name: 'Travesseiro Simmons Care Touch',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '9% OFF',
        image: ProductImage5,
    },
    {
        id: 6,
        name: 'Travesseiro 100% Pluma Ganso',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '3% OFF',
        image: ProductImage6,
    },
    {
        id: 7,
        name: 'Travesseiro Cervical Simmons',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '3% OFF',
        image: ProductImage7,
    },
    {
        id: 8,
        name: 'Capa Protetora para Travesseiro Bamboo 50 x 70cm',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '3% OFF',
        image: ProductImage8,
    },
    {
        id: 9,
        name: 'Capa Protetora para Travesseiro 100% Algodão 50 x 70cm',
        category: 'Travesseiros',
        categoryId: 'travesseiros',
        tag: '5% OFF',
        image: ProductImage9,
    },
    {
        id: 10,
        name: 'Protetor de Colchão Simmons Bamboo',
        category: 'Roupa de Cama',
        categoryId: 'roupa-de-cama',
        tag: '9% OFF',
        image: ProductImage10,
    },
    {
        id: 11,
        name: 'Protetor de Colchão Simmons Luxury',
        category: 'Roupa de Cama',
        categoryId: 'roupa-de-cama',
        tag: '9% OFF',
        image: ProductImage11,
    },
    {
        id: 12,
        name: 'Jogo de Lençol Simmons 300 Fios',
        category: 'Roupa de Cama',
        categoryId: 'roupa-de-cama',
        tag: '3% OFF',
        image: ProductImage12,
    },
    {
        id: 13,
        name: 'Peseira de Tricot Simmons',
        category: 'Roupa de Cama',
        categoryId: 'roupa-de-cama',
        image: ProductImage13,
    },
    {
        id: 14,
        name: 'Capa Duvet 300 Fios',
        category: 'Roupa de Cama',
        categoryId: 'roupa-de-cama',
        tag: '3% OFF',
        image: ProductImage14,
    },
    {
        id: 15,
        name: 'Capa Pillow Plush Simmons',
        category: 'Acessórios',
        categoryId: 'acessorios',
        tag: '9% OFF',
        image: ProductImage15,
    },
    {
        id: 16,
        name: 'Capa Pillow Top Simmons 250 Fios 100% Algodão',
        category: 'Acessórios',
        categoryId: 'acessorios',
        tag: '3% OFF',
        image: ProductImage16,
    },
    {
        id: 17,
        name: 'Edredom Simmons Soft Touch Microfibra',
        category: 'Acessórios',
        categoryId: 'acessorios',
        tag: '3% OFF',
        image: ProductImage17,
    },
];

export const groupedAccessories = accessories.reduce((acc, current) => {
    if (!acc[current.category]) {
        acc[current.category] = {
            id: current.categoryId,
            items: [],
        };
    }
    acc[current.category].items.push(current);
    return acc;
}, {} as Record<string, { id: string; items: Accessory[] }>);
