import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import imageBothanical from '@/assets/CollectionCards/bothanical.webp'
import imageHeritage from '@/assets/CollectionCards/heritage.webp'
import imageMadison from '@/assets/CollectionCards/madison.webp'


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
    <section className="w-full py-24 bg-background" id="colchoes">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col bg-white border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-serif text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-8 grow">{item.desc}</p>
                <Button variant="outline" className="w-full justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300 hover:cursor-pointer">
                  QUERO SABER MAIS
                  <MessageCircle className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="px-8 py-6 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            VER TODOS OS COLCHÕES
          </Button>
        </div>
      </div>
    </section>
  );
}
