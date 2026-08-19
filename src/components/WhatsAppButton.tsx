import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WA_HREF =
    'https://api.whatsapp.com/send/?phone=5521977030033&text=Ol%C3%A1%2C+vi+seu+site%21+Quero+saber+mais+sobre+a+Simmons.&type=phone_number&app_absent=0';

// animate-ping dura 1s por ciclo — paramos após 2 ciclos (2s + pequeno buffer)
const PULSE_DURATION_MS = 2050;

function WhatsAppButton() {
    const [isPulsing, setIsPulsing] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsPulsing(false), PULSE_DURATION_MS);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="group fixed bottom-6 right-6 z-40">
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-[#075E54] text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                Fale conosco
            </span>

            {/* Button */}
            <a
                href={WA_HREF}
                target="_blank"
                rel="noreferrer"
                aria-label="Fale conosco pelo WhatsApp"
                className="relative block w-14 h-14"
            >
                {isPulsing && (
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
                )}
                <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] shadow-lg shadow-[#25D366]/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    <FaWhatsapp className="w-7 h-7 text-white" />
                </div>
            </a>
        </div>
    );
}

export default WhatsAppButton;
