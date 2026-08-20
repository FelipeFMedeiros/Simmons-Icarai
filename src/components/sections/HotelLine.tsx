import React from 'react';
import { motion } from 'framer-motion';
import hotel1 from '@/assets/Hotel/hostel-1.jpg';
import hotel2 from '@/assets/Hotel/hotel-2.jpg';
import hotel3 from '@/assets/Hotel/hotel-3.jpg';

export function HotelLine() {
  return (
    <section className="w-full bg-stone-50 py-24 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              Linha Hotel
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              O conforto de um hotel 5 estrelas todas as noites.
            </h2>
            <div className="text-muted-foreground space-y-4 mb-8 text-lg">
              <p>
                Os colchões Simmons são a escolha das redes de hotéis mais luxuosas e prestigiadas do mundo. Com a nossa <strong>Linha Hotel</strong>, você pode levar esse mesmo nível de descanso premium para a sua casa.
              </p>
              <p>
                Desfrute da durabilidade excepcional, suporte ideal e tecidos sofisticados desenvolvidos especificamente para proporcionar a experiência definitiva em conforto hoteleiro.
              </p>
            </div>
            <a 
                href="https://api.whatsapp.com/send/?phone=5521977030033" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-md transition-all hover:scale-105 duration-300 bg-primary text-white hover:bg-primary/90"
            >
                CONHEÇA A LINHA HOTEL
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-100 md:h-125 lg:h-150"
          >
            <div className="relative col-span-1 h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 group">
              <img src={hotel1} alt="Simmons Hotel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 group">
                <img src={hotel2} alt="Simmons Hotel Quarto" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 group">
                <img src={hotel3} alt="Simmons Hotel Detalhes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
