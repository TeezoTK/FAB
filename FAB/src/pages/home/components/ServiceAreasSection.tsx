
import React from 'react';

export const ServiceAreasSection: React.FC = () => {
  const serviceAreas = [
    'High Wycombe', 'Forrestfield', 'Kalamunda', 'Maida Vale',
    'Redcliffe', 'Belmont', 'Rivervale', 'Victoria Park',
    'Bayswater', 'Midland', 'Cannington', 'Cloverdale',
    'Ascot', 'Bicton', 'Perth CBD', 'Subiaco'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Service Areas
            </h2>
            <p className="text-xl text-[#CBD5E1] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              We proudly serve homes and businesses across Perth Metro. Based in High Wycombe, 
              we provide fast, reliable service to the following areas:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <i className="ri-map-pin-fill text-[#F97316] text-sm"></i>
                  <span className="text-[#0B1220] font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#F97316]">
              <p className="text-[#0B1220] font-medium mb-2">
                <i className="ri-question-fill text-[#F97316] mr-2"></i>
                Don't see your area listed?
              </p>
              <p className="text-[#CBD5E1]">
                Near Perth? We likely cover your area — just ask! Call us on{' '}
                <a href="tel:+61449197163" className="text-[#F97316] font-semibold hover:underline">
                  +61 449 197 163
                </a>{' '}
                to confirm service availability.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.8!2d115.9!3d-31.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sHigh%20Wycombe%20WA%206057!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="FAB Services Coverage Area - Perth Metro"
              ></iframe>
              <div className="mt-4 text-center">
                <p className="text-sm text-[#CBD5E1]">
                  <i className="ri-map-pin-fill text-[#F97316] mr-1"></i>
                  Service coverage across Perth Metro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
