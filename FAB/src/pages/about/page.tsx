
import React from 'react';
import { Button } from '../../components/base/Button';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Andy Burman',
      role: 'Founder & Lead Technician',
      experience: '8+ years WA experience',
      specialties: ['HVAC Systems', 'Plumbing', 'Gas Services'],
      image: 'https://readdy.ai/api/search-image?query=professional%20HVAC%20technician%20in%20uniform%2C%20middle-aged%20man%20with%20friendly%20smile%2C%20clean%20workshop%20background%2C%20professional%20portrait%20style%2C%20high%20quality&width=300&height=400&seq=team-frank&orientation=portrait'
    },
    {
      name: 'Senior Plumber',
      role: 'Plumbing Specialist',
      experience: '10+ years',
      specialties: ['Emergency Repairs', 'Bathroom Installations', 'Leak Detection'],
      image: 'https://readdy.ai/api/search-image?query=professional%20plumber%20in%20uniform%2C%20experienced%20technician%20with%20tools%2C%20clean%20workshop%20background%2C%20professional%20portrait%20style%2C%20high%20quality&width=300&height=400&seq=team-ben&orientation=portrait'
    },
    {
      name: 'HVAC Technician',
      role: 'Air Conditioning Specialist',
      experience: '6+ years',
      specialties: ['Air Conditioning', 'Ventilation Systems', 'Maintenance'],
      image: 'https://readdy.ai/api/search-image?query=young%20professional%20HVAC%20technician%20in%20uniform%2C%20confident%20pose%20with%20equipment%2C%20clean%20workshop%20background%2C%20professional%20portrait%20style&width=300&height=400&seq=team-alex&orientation=portrait'
    }
  ];

  const certifications = [
    { name: 'Fully Licensed WA', icon: 'ri-shield-check-fill' },
    { name: 'PL8520 Plumbing', icon: 'ri-award-fill' },
    { name: 'ARCV L134518', icon: 'ri-medal-fill' },
    { name: 'GF 020343 Gas', icon: 'ri-graduation-cap-fill' },
    { name: 'EW193996 Electrical', icon: 'ri-shield-star-fill' },
    { name: 'Fully Insured', icon: 'ri-user-star-fill' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.6)), url('https://readdy.ai/api/search-image?query=professional%20HVAC%20and%20plumbing%20workshop%20with%20modern%20tools%20and%20equipment%2C%20clean%20organized%20workspace%2C%20team%20of%20technicians%20working%2C%20bright%20professional%20atmosphere&width=1920&height=800&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About FAB Air Conditioning & Plumbing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted local experts for professional HVAC and plumbing services 
            in High Wycombe and throughout Western Australia.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  FAB Air Conditioning & Plumbing Services has been proudly serving 
                  the High Wycombe community and surrounding areas in Western Australia. 
                  Founded by Andy Burman, our company brings over 8 years of WA experience 
                  and extensive knowledge to every project.
                </p>
                <p>
                  As a local air conditioning, plumbing and gas engineer, Andy recognized 
                  the need for reliable, professional heating, cooling, and plumbing services 
                  in the Perth metropolitan area. With his commitment to quality workmanship 
                  and customer satisfaction, FAB Services has built a reputation for excellence.
                </p>
                <p>
                  We are fully licensed professionals who understand the unique challenges 
                  of Western Australia's climate and building requirements. Our team is 
                  dedicated to providing energy-efficient solutions that work perfectly 
                  in the Australian environment.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20HVAC%20company%20building%20exterior%2C%20modern%20service%20vehicles%20parked%20outside%2C%20clean%20professional%20appearance%2C%20High%20Wycombe%20business%20district&width=600&height=500&seq=company-building&orientation=landscape"
                alt="FAB Services Building"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional service while building lasting 
              relationships with our customers throughout Western Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our customers. 
                Your satisfaction is our top priority.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-star-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We use only the highest quality materials and follow Australian industry 
                standards to ensure lasting results.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Efficiency</h3>
              <p className="text-gray-600">
                We promote energy-efficient solutions perfect for Australia's climate 
                that reduce environmental impact and save you money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our fully licensed professionals bring years of Western Australian experience 
              and expertise to every project, ensuring quality results you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.experience}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Specialties:</h4>
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-fill text-teal-600 mr-2"></i>
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Licenses & Certifications</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We maintain the highest Australian industry standards through proper 
              licensing and professional certifications in Western Australia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${cert.icon} text-xl`}></i>
                </div>
                <h3 className="font-medium text-sm">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FAB Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">8+ Years WA Experience</h3>
              <p className="text-gray-600">Local knowledge and expertise</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Recommend</h3>
              <p className="text-gray-600">29 reviews from satisfied customers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-24-hours-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Service</h3>
              <p className="text-gray-600">Available when you need us most</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Licensed</h3>
              <p className="text-gray-600">All work meets Australian standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the FAB Services difference. Contact us today for professional 
            HVAC and plumbing services you can trust throughout Western Australia.
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

export default AboutPage;
