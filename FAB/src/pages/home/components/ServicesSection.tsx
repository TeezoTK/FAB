
import React from 'react';
import { Button } from '../../../components/base/Button';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: 'ri-temp-cold-fill',
      title: 'AC Install & Repair',
      description: 'Efficient, quiet systems. Clean, compliant installs.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20split%20system%20air%20conditioner%20being%20installed%20by%20professional%20technician%20in%20clean%20Australian%20home%2C%20white%20walls%2C%20contemporary%20interior%20design%2C%20Perth%20Western%20Australia%20residential%20setting%2C%20professional%20installation%20tools%2C%20clean%20workspace%2C%20energy%20efficient%20system&width=400&height=300&seq=ac-install&orientation=landscape',
      features: ['Split system installation', 'Ducted air conditioning', 'Repairs & maintenance', 'Energy efficiency upgrades']
    },
    {
      icon: 'ri-fire-fill',
      title: 'Hot Water & Heating',
      description: 'Service, repairs, replacements; lower running costs.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20plumber%20installing%20modern%20hot%20water%20system%20in%20Australian%20home%20utility%20room%2C%20clean%20installation%2C%20contemporary%20water%20heater%2C%20Perth%20Western%20Australia%20residential%20setting%2C%20professional%20tools%2C%20tidy%20workspace%2C%20energy%20efficient%20hot%20water%20unit&width=400&height=300&seq=hot-water&orientation=landscape',
      features: ['Hot water system installation', 'Gas heating repairs', 'Heat pump systems', 'Energy efficient upgrades']
    },
    {
      icon: 'ri-drop-fill',
      title: 'Plumbing & Leaks',
      description: 'Fast fixes to protect your home.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20plumber%20fixing%20pipe%20leak%20in%20modern%20Australian%20home%2C%20clean%20workspace%2C%20professional%20plumbing%20tools%2C%20Perth%20Western%20Australia%20residential%20setting%2C%20tidy%20repair%20work%2C%20contemporary%20bathroom%20or%20kitchen%20setting&width=400&height=300&seq=plumbing-repair&orientation=landscape',
      features: ['Leak detection & repair', 'Blocked drain clearing', 'Tap & toilet repairs', 'Pipe replacements']
    },
    {
      icon: 'ri-alarm-warning-fill',
      title: 'Emergencies 24/7',
      description: 'Burst pipes or no-cool/no-hot water.',
      image: 'https://readdy.ai/api/search-image?query=Emergency%20plumber%20responding%20to%20urgent%20call%20at%20night%2C%20professional%20service%20van%2C%20emergency%20lighting%2C%20Perth%20Western%20Australia%20residential%20area%2C%20professional%20technician%20with%20tools%2C%20urgent%20repair%20situation%2C%20reliable%20emergency%20service&width=400&height=300&seq=emergency-service&orientation=landscape',
      features: ['24/7 emergency response', 'Burst pipe repairs', 'No hot water fixes', 'AC breakdown service']
    },
    {
      icon: 'ri-settings-3-fill',
      title: 'Maintenance Contracts',
      description: 'Regular servicing to prevent costly breakdowns.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20technician%20performing%20routine%20maintenance%20on%20air%20conditioning%20system%2C%20clean%20modern%20Australian%20home%20interior%2C%20preventive%20maintenance%20checklist%2C%20Perth%20Western%20Australia%20residential%20setting%2C%20professional%20service%2C%20quality%20workmanship&width=400&height=300&seq=maintenance&orientation=landscape',
      features: ['Annual AC servicing', 'Plumbing inspections', 'Preventive maintenance', 'Priority booking']
    },
    {
      icon: 'ri-gas-station-fill',
      title: 'Gas Fitting Services',
      description: 'Licensed gas work for safety and compliance.',
      image: 'https://readdy.ai/api/search-image?query=Licensed%20gas%20fitter%20installing%20gas%20appliance%20in%20modern%20Australian%20kitchen%2C%20safety%20equipment%2C%20professional%20gas%20fitting%20tools%2C%20Perth%20Western%20Australia%20residential%20setting%2C%20compliance%20certification%2C%20safe%20installation%20practices&width=400&height=300&seq=gas-fitting&orientation=landscape',
      features: ['Gas appliance installation', 'Gas leak detection', 'Safety inspections', 'Compliance certificates']
    }
  ];

  const handleGetQuote = () => {
    const quoteSection = document.getElementById('quote-form');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Services
          </h2>
          <p className="text-xl text-[#CBD5E1] max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Comprehensive HVAC and plumbing solutions for homes and businesses across Perth Metro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} service in Perth WA`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#F97316] rounded-lg flex items-center justify-center">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1220] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-[#CBD5E1] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <i className="ri-check-fill text-[#F97316] text-sm"></i>
                      <span className="text-sm text-[#0B1220]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full whitespace-nowrap"
                  onClick={handleGetQuote}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleGetQuote}
            className="whitespace-nowrap"
          >
            <i className="ri-file-text-fill mr-2"></i>
            Get Free Quote for All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
