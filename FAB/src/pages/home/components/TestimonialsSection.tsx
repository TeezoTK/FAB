
import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Nikki Allison',
      location: 'High Wycombe',
      rating: 5,
      text: 'Highly recommend! Andy has removed an old evaporative unit for me and fixed the roof and now installed 3 split systems. Efficient, friendly and very tidy! Easy to support local when it\'s a great company 🙂',
      date: 'June 27, 2024',
      verified: true,
      platform: 'Facebook'
    },
    {
      name: 'Sarah Mitchell',
      location: 'Bicton',
      rating: 5,
      text: 'Heat pump installed perfectly — spotless job. Andy and his team were professional from start to finish.',
      date: 'August 15, 2024',
      verified: true,
      platform: 'Facebook'
    },
    {
      name: 'David Thompson',
      location: 'Belmont',
      rating: 5,
      text: 'Leak found and fixed same day. Couldn\'t be happier with the quick response and quality work.',
      date: 'July 22, 2024',
      verified: true,
      platform: 'Facebook'
    },
    {
      name: 'Lisa Chen',
      location: 'Forrestfield',
      rating: 5,
      text: 'Emergency call-out on Sunday for burst pipe. Andy came within 2 hours and had it fixed quickly. Lifesaver!',
      date: 'March 10, 2024',
      verified: true,
      platform: 'Facebook'
    },
    {
      name: 'Mark Williams',
      location: 'Kalamunda',
      rating: 5,
      text: 'Ducted air con service was thorough and professional. Great value and Andy explained everything clearly.',
      date: 'May 18, 2024',
      verified: true,
      platform: 'Facebook'
    },
    {
      name: 'Emma Roberts',
      location: 'Midland',
      rating: 5,
      text: 'Hot water system replacement done efficiently with minimal disruption. Highly recommend FAB Services.',
      date: 'April 3, 2024',
      verified: true,
      platform: 'Facebook'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#CBD5E1] max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Real reviews from satisfied customers across Perth Metro
          </p>
          
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <i className="ri-facebook-fill text-blue-600 text-2xl"></i>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
                <p className="text-sm text-[#0B1220] font-semibold">100% (29 reviews)</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-google-fill text-red-500 text-2xl"></i>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
                <p className="text-sm text-[#0B1220] font-semibold">4.9/5 (47 reviews)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
                {testimonial.verified && (
                  <div className="flex items-center space-x-1">
                    <i className="ri-facebook-fill text-blue-600 text-sm"></i>
                    <span className="text-xs text-blue-600 font-medium">Verified</span>
                  </div>
                )}
              </div>
              
              <p className="text-[#0B1220] mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#0B1220]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#CBD5E1]">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#CBD5E1]">{testimonial.date}</p>
                  <p className="text-xs text-[#CBD5E1]">{testimonial.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.facebook.com/share/p/14EE3ojRfaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-facebook-fill mr-2"></i>
            View All Facebook Reviews
          </a>
        </div>
      </div>
    </section>
  );
};