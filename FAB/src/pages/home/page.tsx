
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { TrustBarSection } from './components/TrustBarSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FAQsSection } from './components/FAQsSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { ContactSection } from './components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBarSection />
      <ServicesSection />
      <WhyChooseSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FAQsSection />
      <QuoteFormSection />
      <ContactSection />
    </div>
  );
}
