
import React, { useState } from 'react';
import { Button } from '../../components/base/Button';

const ContactPage: React.FC = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    property_type: '',
    urgency: '',
    description: ''
  });

  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [quoteStatus, setQuoteStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(contactFormData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3v4m6pmvqr06es2q5cg', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setContactStatus('success');
        setContactFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setContactStatus('error');
      }
    } catch (error) {
      setContactStatus('error');
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuoteSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(quoteFormData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3v4m6pmvqr06es2q5d0', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setQuoteStatus('success');
        setQuoteFormData({ name: '', email: '', phone: '', address: '', service: '', property_type: '', urgency: '', description: '' });
      } else {
        setQuoteStatus('error');
      }
    } catch (error) {
      setQuoteStatus('error');
    } finally {
      setIsQuoteSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact FAB Air Conditioning & Plumbing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our expert team for all your HVAC and plumbing needs in Western Australia. 
            We're here to help with installations, repairs, and emergency services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:+61449197163" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                +61 449 197 163
              </a>
              <p className="text-sm text-gray-500 mt-2">Emergency Service Available</p>
            </div>

            {/* Email */}
            <div className="bg-teal-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <a href="mailto:andy.burman84@gmail.com" className="text-teal-600 font-semibold text-lg hover:text-teal-700">
                andy.burman84@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-2">We respond promptly</p>
            </div>

            {/* Location */}
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area</h3>
              <p className="text-gray-600 mb-4">Our coverage area</p>
              <p className="text-green-600 font-semibold">High Wycombe, WA</p>
              <p className="text-green-600 font-semibold">Western Australia</p>
              <p className="text-sm text-gray-500 mt-2">Perth Metro & Surrounding Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {contactStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you! We'll get back to you promptly.</p>
                </div>
              )}
              
              {contactStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Something went wrong. Please try again or call us directly.</p>
                </div>
              )}

              <form onSubmit={handleContactSubmit} data-readdy-form id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={contactFormData.name}
                      onChange={handleContactInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={contactFormData.phone}
                      onChange={handleContactInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleContactInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={contactFormData.subject}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="service-question">Service Question</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="maintenance">Maintenance Plan</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactInputChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{contactFormData.message.length}/500 characters</p>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={isContactSubmitting}
                >
                  {isContactSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill mr-2"></i>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Quote Request Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>
              
              {quoteStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Quote request received! We'll contact you promptly.</p>
                </div>
              )}
              
              {quoteStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Something went wrong. Please try again or call us directly.</p>
                </div>
              )}

              <form onSubmit={handleQuoteSubmit} data-readdy-form id="quote-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="quote-name"
                      name="name"
                      value={quoteFormData.name}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="quote-phone"
                      name="phone"
                      value={quoteFormData.phone}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={quoteFormData.email}
                    onChange={handleQuoteInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="quote-address" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="quote-address"
                    name="address"
                    value={quoteFormData.address}
                    onChange={handleQuoteInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Full property address in WA"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="quote-service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="quote-service"
                      name="service"
                      value={quoteFormData.service}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Select service</option>
                      <option value="air-conditioning">Air Conditioning</option>
                      <option value="heating">Heating Systems</option>
                      <option value="ventilation">Ventilation</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="gas-services">Gas Services</option>
                      <option value="maintenance">Maintenance Plan</option>
                      <option value="emergency">Emergency Repair</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-property-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      id="quote-property-type"
                      name="property_type"
                      value={quoteFormData.property_type}
                      onChange={handleQuoteInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Select type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="apartment">Apartment</option>
                      <option value="office">Office</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="quote-urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="quote-urgency"
                    name="urgency"
                    value={quoteFormData.urgency}
                    onChange={handleQuoteInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select urgency</option>
                    <option value="emergency">Emergency (Same Day)</option>
                    <option value="urgent">Urgent (Within 48 hours)</option>
                    <option value="normal">Normal (Within 1 week)</option>
                    <option value="flexible">Flexible (Within 2 weeks)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="quote-description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="quote-description"
                    name="description"
                    value={quoteFormData.description}
                    onChange={handleQuoteInputChange}
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Describe your project or issue in detail..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{quoteFormData.description.length}/500 characters</p>
                </div>

                <Button 
                  type="submit" 
                  variant="secondary" 
                  size="lg" 
                  className="w-full"
                  disabled={isQuoteSubmitting}
                >
                  {isQuoteSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="ri-file-text-fill mr-2"></i>
                      Request Quote
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve High Wycombe and surrounding areas throughout the Perth metropolitan region in Western Australia.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.5!2d115.9!3d-31.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a1dc0a5b5c5b%3A0x2b1c7f1c6b5c5b5b!2sHigh%20Wycombe%20WA%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FAB Services Service Area Map - High Wycombe WA"
            ></iframe>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {[
              'High Wycombe', 'Forrestfield', 'Kalamunda', 'Maida Vale',
              'Lesmurdie', 'Gooseberry Hill', 'Wattle Grove', 'Bickley',
              'Carmel', 'Paulls Valley', 'Walliston', 'Glen Forrest'
            ].map((area, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-3 text-center">
                <i className="ri-map-pin-fill text-blue-600 mb-1"></i>
                <div className="text-sm font-medium text-gray-900">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Business Hours</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-blue-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-500">Emergency Only</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Service</h3>
                <div className="bg-red-50 rounded-lg p-6 text-center">
                  <i className="ri-alarm-warning-fill text-red-600 text-3xl mb-3"></i>
                  <h4 className="font-bold text-red-800 mb-2">Emergency Service Available</h4>
                  <p className="text-red-700 mb-4">Available for urgent heating, cooling, and plumbing emergencies</p>
                  <a href="tel:+61449197163" className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    <i className="ri-phone-fill mr-2"></i>
                    Call Emergency Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
