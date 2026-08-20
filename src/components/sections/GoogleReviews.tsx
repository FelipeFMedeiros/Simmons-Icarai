import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function GoogleReviews() {
  useEffect(() => {
    // Carrega o script do Elfsight dinamicamente quando o componente for montado
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full bg-stone-50 py-24 border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação de quem dorme com Simmons é o nosso maior orgulho. Confira as avaliações reais de clientes que já transformaram suas noites de sono conosco.
          </p>
        </div>
        
        {/* Container do Elfsight widget */}
        <div className="max-w-7xl mx-auto min-h-100">
          <div className="elfsight-app-60a0f78c-2c11-4440-9a9c-e9ce6ce5b632" data-elfsight-app-lazy></div>
        </div>
      </div>

                      {/* ── CTA ── */}
                <div className="mt-8 md:mt-16 flex flex-col items-center gap-4 px-6 md:px-0">
                    <p className="text-gray-500 text-sm tracking-widest uppercase text-center">
                        Junte-se a quem já dorme melhor
                    </p>
                    <a
                        href='https://api.whatsapp.com/send/?phone=5521977030033'
                        target="_blank"
                        rel="noreferrer"
                        className="group relative overflow-hidden flex items-center gap-3 px-10 py-4 rounded-full border border-[#25D366] text-foreground font-semibold text-sm uppercase tracking-widest"
                    >
                        {/* Fill from center */}
                        <span className="absolute inset-0 bg-[#25D366] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
                        {/* Content */}
                        <span className="relative z-10 flex items-center gap-3">
                            <FaWhatsapp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                            Torne-se um cliente também
                        </span>
                    </a>
                </div>
    </section>
  );
}
