
import React from 'react';

export const TrustBarSection: React.FC = () => {
  const trustItems = [
    {
      icon: 'ri-award-fill',
      text: 'ARCtick-licensed'
    },
    {
      icon: 'ri-tools-fill',
      text: 'Gas fitting/plumbing licences'
    },
    {
      icon: 'ri-time-fill',
      text: '24/7 call-outs'
    },
    {
      icon: 'ri-shield-check-fill',
      text: 'Fully insured'
    },
    {
      icon: 'ri-star-fill',
      text: '★★★★★ reviews'
    }
  ];

  return (
    <section className="py-12 bg-[#0B1220] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 text-white/90 group">
              <i className={`${item.icon} text-[#F97316] text-xl group-hover:scale-110 transition-transform duration-200`}></i>
              <span className="text-sm md:text-base font-medium text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};