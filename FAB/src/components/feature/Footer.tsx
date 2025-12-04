
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Pacifico, serif' }}>
                FAB Services
              </h3>
              <p className="text-white/80 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Professional air conditioning and plumbing services across Perth Metro. 
                Licensed, insured, and committed to quality workmanship.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-fill text-[#F97316] text-lg"></i>
                <a href="tel:+61449197163" className="hover:text-[#F97316] transition-colors cursor-pointer">
                  +61 449 197 163
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-fill text-[#F97316] text-lg"></i>
                <a href="mailto:andy.burman84@gmail.com" className="hover:text-[#F97316] transition-colors cursor-pointer">
                  andy.burman84@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-fill text-[#F97316] text-lg"></i>
                <span>High Wycombe, WA 6057</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-fill text-[#F97316] text-lg"></i>
                <span>Mon-Fri: 8:00 AM - 6:00 PM | 24/7 Emergency</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Services
            </h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-[#F97316] transition-colors cursor-pointer">Air Conditioning</a></li>
              <li><a href="#services" className="hover:text-[#F97316] transition-colors cursor-pointer">Hot Water Systems</a></li>
              <li><a href="#services" className="hover:text-[#F97316] transition-colors cursor-pointer">Plumbing Repairs</a></li>
              <li><a href="#services" className="hover:text-[#F97316] transition-colors cursor-pointer">Emergency Service</a></li>
              <li><a href="#services" className="hover:text-[#F97316] transition-colors cursor-pointer">Maintenance</a></li>
              <li><a href="#services" className="hover:text-[#F97316] transition-colors cursor-pointer">Gas Fitting</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Service Areas
            </h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>High Wycombe</li>
              <li>Forrestfield</li>
              <li>Kalamunda</li>
              <li>Maida Vale</li>
              <li>Belmont</li>
              <li>Midland</li>
              <li>Victoria Park</li>
              <li>+ Perth Metro</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              <p>© 2024 FAB Air Conditioning & Plumbing Services</p>
              <p>ABN: 12345678901 | Licensed & Insured</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.facebook.com/share/p/14EE3ojRfaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#F97316] transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
