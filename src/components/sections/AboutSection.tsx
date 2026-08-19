import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import imgDarkBedroom from '@/assets/bedroom-dark.jpg';

export function AboutSection() {
  return (
    <section className="w-full py-24 bg-background" id="sobre">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              Excelência em cada detalhe
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Tradição que transforma noites em experiências.
            </h2>
            <div className="text-muted-foreground space-y-4 mb-8 text-lg">
              <p>
                Desde 1870, a Simmons combina inovação, excelência premium e conforto incomparável para transformar cada noite de sono em um verdadeiro refúgio.
              </p>
              <p>
                Não vendemos apenas colchões; entregamos suporte, qualidade e tecnologia que redefinem o que significa descansar.
              </p>
            </div>
            <Button className="px-8 py-6 rounded-full font-semibold shadow-md transition-transform hover:scale-105 duration-300">
              CONHEÇA NOSSA HISTÓRIA
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden shadow-2xl">
              <img
                src={imgDarkBedroom}
                alt="Quarto luxuoso e aconchegante"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
