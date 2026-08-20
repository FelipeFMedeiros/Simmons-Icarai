import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import imgMadison from '@/assets/best-madison.jpg';
import imgHeritage from '@/assets/best-heritage.jpg';
import imgBamboo from '@/assets/best-bamboo.jpg';
import imgBrook from '@/assets/best-brook.jpg';

const WHATSAPP_PHONE = '552156222228';

type Product = {
  id: number;
  name: string;
  tag: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Colchão Simmons Madison',
    tag: 'Top 1',
    description: 'Molejo ensacado individual com pillow top acolchoado.',
    image: imgMadison,
  },
  {
    id: 2,
    name: 'Colchão Simmons Heritage',
    tag: '12% OFF',
    description: 'Firmeza equilibrada e acabamento em tecido damasco.',
    image: imgHeritage,
  },
  {
    id: 3,
    name: 'Colchão Simmons Bamboo Bothanical Essence',
    tag: 'Conforto',
    description: 'Fibra de bambu naturalmente fresca e respirável.',
    image: imgBamboo,
  },
  {
    id: 4,
    name: 'Box Baú Simmons Brook',
    tag: '17% OFF',
    description: 'Base com amplo compartimento interno de armazenamento.',
    image: imgBrook,
  },
];

export function BestSellers() {
  const [lightbox, setLightbox] = useState<Product | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const closeLightbox = () => {
    setLightbox(null);
    // Radix cannot restore focus without a DialogTrigger, so do it manually.
    lastTriggerRef.current?.focus();
  };

  const handleWhatsAppClick = (productName: string) => {
    const text = encodeURIComponent(
      `Olá, vi o modelo *${productName}* no site e gostaria de mais informações!`,
    );
    window.open(
      `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${text}&type=phone_number&app_absent=0`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <section className="w-full py-24 bg-white border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-3 block">
            Preferidos da loja
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
            Colchões mais vendidos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
                {product.tag}
              </span>

              <button
                type="button"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setLightbox(product);
                }}
                aria-label={`Ampliar foto do ${product.name}`}
                className="aspect-4/3 overflow-hidden bg-stone-50 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>

              <div className="flex flex-col grow p-6">
                <h3 className="text-base font-semibold text-stone-900 leading-snug line-clamp-2">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground grow">
                  {product.description}
                </p>

                <Button
                  variant="ghost"
                  onClick={() => handleWhatsAppClick(product.name)}
                  className="group/btn w-full mt-6 h-12 bg-white text-stone-900 border-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300 font-medium no-default-hover-elevate no-default-active-elevate hover:cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#25D366] transition-colors duration-300 group-hover/btn:text-white" />
                  <span>Quero saber mais</span>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#colchoes"
            className="group inline-flex items-center gap-2.5 px-8 py-3 rounded-full border border-stone-900 text-sm font-semibold uppercase tracking-wide text-stone-900 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Ver mais colchões
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <Dialog
        open={lightbox !== null}
        onOpenChange={(open) => {
          if (!open) closeLightbox();
        }}
      >
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white border-stone-200">
          <DialogHeader className="px-6 pt-6 text-left">
            <DialogTitle className="font-serif text-2xl text-stone-900">
              {lightbox?.name}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {lightbox?.description}
            </DialogDescription>
          </DialogHeader>
          {lightbox && (
            <div className="px-6 pb-6">
              <img
                src={lightbox.image}
                alt={lightbox.name}
                className="w-full h-auto object-contain bg-stone-50"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
