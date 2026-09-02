import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Maximize2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Colchao1 from '@/assets/Colchoes/colchao_simmons_madison_queen.jpg';
import Colchao2 from '@/assets/Colchoes/colchao_simmons_heritage.jpg';
import Colchao4 from '@/assets/Colchoes/co_b_bothanic_essence.jpg';
import Bau1 from '@/assets/Colchoes/box-bau-simmons-brook-cinza-box-bau-brook-cinza-ambientada.jpg';

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
    image: Colchao1,
  },
  {
    id: 2,
    name: 'Colchão Simmons Heritage',
    tag: '12% OFF',
    description: 'Firmeza equilibrada e acabamento em tecido damasco.',
    image: Colchao2,
  },
  {
    id: 3,
    name: 'Colchão Simmons Bamboo Bothanical Essence',
    tag: 'Conforto',
    description: 'Fibra de bambu naturalmente fresca e respirável.',
    image: Colchao4,
  },
  {
    id: 4,
    name: 'Box Baú Simmons Brook',
    tag: '17% OFF',
    description: 'Base com amplo compartimento interno de armazenamento.',
    image: Bau1,
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {products.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col overflow-hidden border border-stone-200 bg-[#fcfbf8] shadow-[0_8px_26px_rgba(28,25,23,0.06)] transition-all duration-500 md:hover:-translate-y-1.5 md:hover:border-primary/20 md:hover:shadow-[0_18px_42px_rgba(28,25,23,0.12)]"
            >
              <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-md">
                {product.tag}
              </span>

              <button
                type="button"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setLightbox(product);
                }}
                aria-label={`Ampliar foto do ${product.name}`}
                className="relative aspect-4/3 cursor-zoom-in overflow-hidden bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.05]"
                />
                <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-stone-800 opacity-100 shadow-md backdrop-blur-sm transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>

              <div className="flex grow flex-col p-6">
                <h3 className="line-clamp-2 min-h-13 font-serif text-xl font-medium leading-tight tracking-[-0.01em] text-stone-900">
                  {product.name}
                </h3>
                <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <Button
                  onClick={() => handleWhatsAppClick(product.name)}
                  className="group/btn mt-6 h-12 w-full rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:cursor-pointer hover:bg-[#128C4A] hover:shadow-md no-default-hover-elevate no-default-active-elevate"
                >
                  <FaWhatsapp className="h-5 w-5 text-white" />
                  <span>Falar sobre este modelo</span>
                </Button>
              </div>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 md:group-hover:scale-x-100"
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/loja"
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
