
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../base/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AC Install & Repair', href: '/services/air-conditioning' },
        { name: 'Hot Water & Heating', href: '/services/hot-water' },
        { name: 'Plumbing & Leaks', href: '/services/plumbing' },
        { name: 'Emergency 24/7', href: '/services/emergency' },
        { name: 'Maintenance', href: '/services/maintenance' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleQuoteClick = () => {
    const quoteSection = document.getElementById('quote-form');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#F97316] rounded-lg flex items-center justify-center">
              <i className="ri-tools-fill text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0B1220]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                FAB Services
              </h1>
              <p className="text-xs text-[#CBD5E1]">Air Conditioning & Plumbing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={`text-base font-medium transition-colors duration-200 flex items-center ${
                        isActive(item.href) || location.pathname.startsWith('/services')
                          ? 'text-[#F97316] border-b-2 border-[#F97316] pb-1'
                          : 'text-[#0B1220] hover:text-[#F97316]'
                      }`}
                    >
                      {item.name}
                      <i className="ri-arrow-down-s-line ml-1"></i>
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-[#0B1220] hover:text-[#F97316] hover:bg-gray-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-[#F97316] border-b-2 border-[#F97316] pb-1'
                        : 'text-[#0B1220] hover:text-[#F97316]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+61449197163" 
              className="text-[#F97316] font-semibold hover:text-[#0B1220] transition-colors whitespace-nowrap"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call Now
            </a>
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleQuoteClick}
              className="whitespace-nowrap"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#0B1220] hover:text-[#F97316] hover:bg-gray-100"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-medium px-4 py-2 rounded-md transition-colors duration-200 block ${
                      isActive(item.href)
                        ? 'text-[#F97316] bg-orange-50'
                        : 'text-[#0B1220] hover:text-[#F97316] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-[#CBD5E1] hover:text-[#F97316] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <a 
                  href="tel:+61449197163" 
                  className="block text-[#F97316] font-semibold mb-3"
                >
                  <i className="ri-phone-fill mr-2"></i>
                  Call Now
                </a>
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="w-full whitespace-nowrap"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleQuoteClick();
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
