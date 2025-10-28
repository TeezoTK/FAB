
import React, { useState } from 'react';
import { Button } from '../../../components/base/Button';

export const QuoteFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suburb: '',
    postcode: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Air Conditioning Installation',
    'Air Conditioning Repair',
    'Hot Water System',
    'Plumbing Repair',
    'Emergency Service',
    'Maintenance Contract',
    'Gas Fitting',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4006feg28apfrolkoug', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          suburb: '',
          postcode: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get Your Free Quote
            </h2>
            <p className="text-xl text-[#CBD5E1] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Fast, transparent quotes for all your HVAC and plumbing needs. No hidden fees, no surprises.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center">
                  <i className="ri-time-fill text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Quick Response</h3>
                  <p className="text-[#CBD5E1]">We'll get back to you within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center">
                  <i className="ri-calculator-fill text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Transparent Pricing</h3>
                  <p className="text-[#CBD5E1]">Clear, upfront quotes with no hidden costs</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-fill text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Quality Guaranteed</h3>
                  <p className="text-[#CBD5E1]">All work backed by our satisfaction guarantee</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                <i className="ri-phone-fill text-[#F97316] mr-2"></i>
                Prefer to call?
              </h3>
              <a href="tel:+61449197163" className="text-2xl font-bold text-[#F97316] hover:text-white transition-colors">
                +61 449 197 163
              </a>
              <p className="text-[#CBD5E1] mt-2">Available 24/7 for emergencies</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} data-readdy-form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0B1220] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0B1220] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="suburb" className="block text-sm font-medium text-[#0B1220] mb-2">
                    Suburb *
                  </label>
                  <input
                    type="text"
                    id="suburb"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm"
                    placeholder="Your suburb"
                  />
                </div>
                
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-[#0B1220] mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm"
                    placeholder="Your postcode"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-[#0B1220] mb-2">
                  Service Needed *
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm pr-8 appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#0B1220] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm resize-none"
                  placeholder="Tell us about your project or any specific requirements..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <i className="ri-check-circle-fill text-green-600"></i>
                    <p className="text-green-800 font-medium">Quote request submitted successfully!</p>
                  </div>
                  <p className="text-green-700 text-sm mt-1">We'll contact you within 2 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <i className="ri-error-warning-fill text-red-600"></i>
                    <p className="text-red-800 font-medium">Something went wrong. Please try again.</p>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line mr-2 animate-spin"></i>
                    Sending Quote Request...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-fill mr-2"></i>
                    Get My Free Quote
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
