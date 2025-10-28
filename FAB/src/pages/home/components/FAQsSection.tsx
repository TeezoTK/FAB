import React, { useState } from 'react';

export const FAQsSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you do emergency call-outs?",
      answer: "Yes, 24/7 for urgent issues like burst pipes, no hot water, or air conditioning breakdowns. Call +61 449 197 163 anytime for emergency service."
    },
    {
      question: "Which Perth areas do you cover?",
      answer: "We service High Wycombe, Forrestfield, Kalamunda, Maida Vale, Redcliffe, Belmont, Rivervale, Victoria Park, Bayswater, Midland, Cannington, Cloverdale, Ascot, Bicton, and surrounding Perth Metro areas. Message us if you're nearby."
    },
    {
      question: "What licences and insurance do you have?",
      answer: "ARCtick licensed for refrigerants, WA plumbing and gas fitting licences, plus comprehensive public liability insurance. All work meets Australian standards and compliance requirements."
    },
    {
      question: "Which brands do you service?",
      answer: "We service most major brands including Mitsubishi Heavy, Daikin, Panasonic, Fujitsu, LG, Samsung, and more. Our technicians are trained on the latest systems and technologies."
    },
    {
      question: "How do quotes work?",
      answer: "Free, upfront pricing before work begins. No hidden fees or surprises. We provide detailed quotes explaining all costs so you can make informed decisions."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Card and bank transfer accepted. All tax invoices include GST. We provide clear invoicing for your records and warranty purposes."
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes, we offer annual maintenance contracts for air conditioning and plumbing systems. Regular servicing prevents costly breakdowns and extends equipment life."
    },
    {
      question: "How quickly can you respond?",
      answer: "Same-day service available for most jobs. Emergency call-outs within 2 hours. We prioritize urgent issues like no hot water, burst pipes, and AC breakdowns."
    },
    {
      question: "Are your technicians qualified?",
      answer: "All our technicians are fully qualified tradespeople with current licences. We invest in ongoing training to stay current with new technologies and safety standards."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide comprehensive warranties on all work and parts. Installation warranties vary by equipment type. All work is guaranteed for quality and workmanship."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            FAQs
          </h2>
          <p className="text-xl text-[#CBD5E1] max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Common questions about our air conditioning and plumbing services in Perth Metro
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-[#0B1220] pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </h3>
                <i className={`ri-arrow-${openFAQ === index ? 'up' : 'down'}-s-line text-[#F97316] text-xl flex-shrink-0`}></i>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-[#CBD5E1] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-[#F97316] rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Still have questions?
            </h3>
            <p className="text-white/90 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Call us directly for immediate answers and free quotes
            </p>
            <a 
              href="tel:+61449197163"
              className="inline-flex items-center justify-center bg-white text-[#F97316] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call +61 449 197 163
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};