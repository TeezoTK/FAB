
import React from 'react';

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      icon: 'ri-map-pin-fill',
      title: 'Local WA Team',
      description: 'Based in High Wycombe, we know Perth Metro like the back of our hand. Quick response times across all service areas.'
    },
    {
      icon: 'ri-award-fill',
      title: 'Qualified Trades',
      description: 'ARCtick licensed for air conditioning, fully qualified plumbing and gas fitting. All work meets Australian standards.'
    },
    {
      icon: 'ri-timer-flash-fill',
      title: 'Rapid Response',
      description: 'Same-day service available. 24/7 emergency call-outs for urgent plumbing and HVAC issues.'
    },
    {
      icon: 'ri-tools-fill',
      title: 'Tidy Workmanship',
      description: 'We respect your home. Clean installation, minimal disruption, and thorough cleanup after every job.'
    },
    {
      icon: 'ri-chat-3-fill',
      title: 'Clear Communication',
      description: 'Transparent quotes, no hidden fees. We explain the work needed and keep you informed throughout the process.'
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for your peace of mind. All work comes with our quality guarantee.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Choose FAB Services?
          </h2>
          <p className="text-xl text-[#CBD5E1] max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Local expertise, professional service, and customer satisfaction guaranteed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${reason.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {reason.title}
              </h3>
              <p className="text-[#CBD5E1] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
