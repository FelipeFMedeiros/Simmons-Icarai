import React from 'react';
import { HeartHandshake, Zap, ThumbsUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const points = [
  {
    icon: HeartHandshake,
    text: 'Atendimento exclusivo para você'
  },
  {
    icon: Zap,
    text: 'Tecnologia e precisão'
  },
  {
    icon: ThumbsUp,
    text: 'Testados e aprovados'
  },
  {
    icon: Star,
    text: 'Referência em conforto'
  }
];

export function TrustFooterBanner() {
  return (
    <section className="w-full bg-background py-16 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h3 className="text-sm font-semibold tracking-widest text-primary uppercase mb-10 block">
          A confiança de quem entende de descanso
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 justify-center text-left"
              >
                <div className="text-primary shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground max-w-35">
                  {point.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
