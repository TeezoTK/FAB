
import React from 'react';
import { Button } from '../../components/base/Button';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: 'Air Conditioning Services',
      icon: 'ri-temp-cold-fill',
      description: 'Complete air conditioning solutions for residential and commercial properties.',
      services: [
        'AC Installation & Setup',
        'Regular Maintenance & Servicing',
        'Emergency AC Repairs',
        'Energy Efficiency Upgrades',
        'Duct Cleaning & Inspection',
        'Thermostat Installation'
      ],
      image: 'https://readdy.ai/api/search-image?query=professional%20air%20conditioning%20technician%20installing%20modern%20AC%20unit%20in%20contemporary%20home%2C%20clean%20white%20interior%2C%20high-quality%20equipment%20and%20tools%2C%20professional%20service%20atmosphere&width=600&height=400&seq=ac-services&orientation=landscape'
    },
    {
      category: 'Heating Systems',
      icon: 'ri-fire-fill',
      description: 'Expert heating solutions to keep your property warm and comfortable year-round.',
      services: [
        'Boiler Installation & Replacement',
        'Central Heating Systems',
        'Radiator Installation & Repair',
        'Heat Pump Installation',
        'Emergency Heating Repairs',
        'Annual Boiler Servicing'
      ],
      image: 'https://readdy.ai/api/search-image?query=professional%20heating%20engineer%20working%20on%20modern%20boiler%20system%20in%20clean%20utility%20room%2C%20contemporary%20home%20interior%2C%20professional%20tools%20and%20equipment%20visible&width=600&height=400&seq=heating-services&orientation=landscape'
    },
    {
      category: 'Ventilation Systems',
      icon: 'ri-wind-fill',
      description: 'Professional ventilation solutions for optimal indoor air quality and circulation.',
      services: [
        'Ventilation System Design',
        'Exhaust Fan Installation',
        'Air Quality Testing',
        'Ductwork Installation',
        'Ventilation Maintenance',
        'Commercial Ventilation'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20ventilation%20system%20installation%20in%20contemporary%20building%2C%20professional%20technician%20working%20on%20air%20ducts%2C%20clean%20industrial%20setting%2C%20high-quality%20equipment&width=600&height=400&seq=ventilation-services&orientation=landscape'
    },
    {
      category: 'Plumbing Services',
      icon: 'ri-drop-fill',
      description: 'Comprehensive plumbing solutions from installations to emergency repairs.',
      services: [
        'Pipe Installation & Repair',
        'Leak Detection & Repair',
        'Drain Cleaning & Unblocking',
        'Water Heater Installation',
        'Bathroom & Kitchen Plumbing',
        'Emergency Plumbing Service'
      ],
      image: 'https://readdy.ai/api/search-image?query=professional%20plumber%20working%20on%20modern%20bathroom%20plumbing%20installation%2C%20clean%20contemporary%20bathroom%20setting%2C%20high-quality%20tools%20and%20fixtures%20visible&width=600&height=400&seq=plumbing-services&orientation=landscape'
    }
  ];

  const emergencyServices = [
    {
      title: 'Emergency Heating Repair',
      description: 'No heat? We provide 24/7 emergency heating repairs to get your system running quickly.',
      icon: 'ri-fire-fill'
    },
    {
      title: 'Emergency Plumbing',
      description: 'Burst pipes, major leaks, or blocked drains? Our emergency plumbers are available 24/7.',
      icon: 'ri-drop-fill'
    },
    {
      title: 'AC Emergency Service',
      description: 'Air conditioning breakdown during hot weather? We offer rapid emergency AC repairs.',
      icon: 'ri-temp-cold-fill'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional HVAC & Plumbing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive heating, ventilation, air conditioning, and plumbing solutions 
            for homes and businesses in High Wycombe and surrounding areas.
          </p>
          <Button variant="secondary" size="lg">
            <i className="ri-phone-fill mr-2"></i>
            Call for Free Quote
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of HVAC and plumbing services with professional installation, 
              maintenance, and repair solutions.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.category}
                    className="w-full h-96 object-cover object-top rounded-2xl shadow-xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.category}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className="ri-check-fill text-teal-600 mr-3"></i>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">24/7 Emergency Services</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              When you have an emergency, we're here to help. Our experienced technicians 
              are available around the clock for urgent repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-red-100">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <i className="ri-phone-fill text-3xl mr-4"></i>
              <div className="text-left">
                <div className="text-sm text-red-100">Emergency Hotline</div>
                <a href="tel:+441494000000" className="text-2xl font-bold hover:text-red-100">
                  +44 1494 XXX XXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve High Wycombe and surrounding areas throughout Buckinghamshire.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'High Wycombe', 'Beaconsfield', 'Marlow', 'Amersham',
              'Chesham', 'Princes Risborough', 'Great Missenden', 'Wendover',
              'Chalfont St Giles', 'Gerrards Cross', 'Burnham', 'Bourne End'
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <i className="ri-map-pin-fill text-blue-600 text-xl mb-2"></i>
                <div className="font-medium text-gray-900">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote. Our expert team is ready 
            to help with all your HVAC and plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <i className="ri-phone-fill mr-2"></i>
              Call Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <i className="ri-mail-fill mr-2"></i>
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
