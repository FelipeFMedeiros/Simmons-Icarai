import React from 'react';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesBanner } from '@/components/sections/FeaturesBanner';
import { CollectionCards } from '@/components/sections/CollectionCards';
import { BestSellers } from '@/components/sections/BestSellers';
import { ValueProps } from '@/components/sections/ValueProps';
import { AboutSection } from '@/components/sections/AboutSection';
import { StoreLocation } from '@/components/sections/StoreLocation';
import { GoogleReviews } from '@/components/sections/GoogleReviews';
import { HotelLine } from '@/components/sections/HotelLine';
import { TrustFooterBanner } from '@/components/sections/TrustFooterBanner';
import { Footer } from '@/components/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <div id="inicio">
                    <HeroSection />
                    <div className="container mx-auto px-6 py-8 text-center">
                        <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                            Colchões Simmons em Icaraí, Niterói
                        </h1>
                        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                            Conheça colchões, camas box e acessórios para transformar suas noites de sono. Visite nossa loja em Icaraí e encontre o conforto ideal com atendimento especializado.
                        </p>
                    </div>
                    <FeaturesBanner />
                </div>
                <div id="colchoes">
                <CollectionCards />
                </div>
                <div id="mais-vendidos">
                <BestSellers />
                </div>
                <ValueProps />
                <div id="hotel">
                <HotelLine />
                </div>
                <div id="sobre">
                <AboutSection />
                </div>
                <div id="atendimento">
                <StoreLocation />
                </div>
                <GoogleReviews />
            </main>
            <TrustFooterBanner />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
