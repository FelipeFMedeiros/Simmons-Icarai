import React from 'react';
import { motion } from 'framer-motion';
import { 
  ActivitySquare, 
  MoonStar, 
  Leaf, 
  ThermometerSnowflake, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

const props = [
  {
    icon: ActivitySquare,
    title: 'Suporte inteligente',
    desc: 'Alinhamento perfeito para o seu corpo.',
  },
  {
    icon: MoonStar,
    title: 'Conforto que se adapta a você',
    desc: 'Tecnologia que se molda aos seus movimentos.',
  },
  {
    icon: Leaf,
    title: 'Materiais premium',
    desc: 'Seleção rigorosa para durabilidade e qualidade.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Regulação de temperatura',
    desc: 'Noites frescas e aconchegantes em todas as estações.',
  },
  {
    icon: ShieldCheck,
    title: 'Durabilidade comprovada',
    desc: 'Desempenho de alto nível por anos de uso.',
  },
  {
    icon: CheckCircle2,
    title: 'Testado e certificado',
    desc: 'Certificações internacionais de qualidade e segurança.',
  },
];

export function ValueProps() {
  return (
    <section className="w-full py-24 bg-white border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Mais que um colchão, um compromisso com o seu bem-estar.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {props.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
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
