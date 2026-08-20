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
        <HeroSection />
        <FeaturesBanner />
        <CollectionCards />
        <BestSellers />
        <ValueProps />
        <AboutSection />
        <HotelLine />
        <StoreLocation />
        <GoogleReviews />
      </main>
      <TrustFooterBanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
