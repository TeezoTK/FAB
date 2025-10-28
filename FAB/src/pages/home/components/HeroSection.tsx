
import React from 'react';
import { Button } from '../../../components/base/Button';

export const HeroSection: React.FC = () => {
  const handleGetQuote = () => {
    const quoteSection = document.getElementById('quote-form');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleService = () => {
    // Trigger the Readdy Agent widget
    const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widget) {
      widget.click();
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 18, 32, 0.7), rgba(11, 18, 32, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20installing%20modern%20split%20system%20air%20conditioner%20in%20contemporary%20Australian%20home%20interior%2C%20clean%20white%20walls%2C%20modern%20tools%2C%20Perth%20Western%20Australia%20residential%20setting%2C%20bright%20natural%20lighting%2C%20professional%20workmanship%2C%20tidy%20installation%20process%2C%20ensure%20text%20area%20background%20color%20perfectly%20blends%20with%20image%20left%20background%20color%2C%20text%20must%20be%20clearly%20readable%20with%20sufficient%20contrast%20against%20background%2C%20overall%20visual%20effect%20should%20be%20modern%20minimalist%20and%20design%20rich&width=1920&height=1080&seq=fab-hero-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/90 to-[#0B1220]/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Air Conditioning & Plumbing in High Wycombe, WA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Installs, repairs & 24/7 emergencies — fast, tidy, fairly priced.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleGetQuote}
                className="min-w-48 whitespace-nowrap"
              >
                <i className="ri-file-text-fill mr-2"></i>
                Get a Quote
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleScheduleService}
                className="min-w-48 border-white text-white hover:bg-white hover:text-blue-600 whitespace-nowrap"
              >
                <i className="ri-calendar-check-fill mr-2"></i>
                Schedule Service
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-fill text-[#F97316] text-xl"></i>
                <div>
                  <p className="text-sm opacity-75">Call Now</p>
                  <a href="tel:+61449197163" className="text-lg font-semibold hover:text-[#F97316] transition-colors cursor-pointer">
                    +61 449 197 163
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-fill text-[#F97316] text-xl"></i>
                <div>
                  <p className="text-sm opacity-75">Emergency Service</p>
                  <p className="text-lg font-semibold">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};