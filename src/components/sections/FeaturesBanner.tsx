import React from 'react';
import { ShieldCheck, Globe, Cpu, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShieldCheck,
    title: '150+ anos de tradição',
    desc: 'Excelência em conforto desde 1870.',
  },
  {
    icon: Globe,
    title: 'Presença internacional',
    desc: 'Qualidade reconhecida em todo o mundo.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia avançada',
    desc: 'Sistemas inteligentes que elevam sua experiência.',
  },
  {
    icon: Award,
    title: 'Certificação internacional',
    desc: 'Compromisso com os mais altos padrões de qualidade.',
  },
];

export function FeaturesBanner() {
  return (
    <section className="w-full border-y border-border bg-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 first:pt-0"
              >
                <div className="mb-4 text-primary">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
