import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Sparkles, MapPin, Calendar, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0e0c]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#0c0b09]/95 via-[#0c0b09]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="brand-logo"
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#1c1915] flex items-center justify-center text-[#d4af37] shadow-md group-hover:border-[#d4af37] group-hover:scale-105 transition-all">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#f5f1e8] group-hover:text-[#d4af37] transition-colors leading-tight">
                Ms Javed <span className="text-[#d4af37] font-normal text-base italic font-serif">Salon & Spa</span>
              </div>
              <div className="text-[11px] tracking-widest text-[#a89f8f] uppercase font-sans flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#d4af37]/70 inline" /> Bodh Gaya, Bihar
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(link.href)}
                className="text-xs uppercase tracking-widest font-medium text-[#c8c1b3] hover:text-[#d4af37] transition-colors relative py-1 group focus:outline-none cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#aa7c11] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={`tel:${SALON_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#d4af37]/30 bg-[#1a1713]/80 hover:border-[#d4af37] text-xs uppercase tracking-wider font-semibold text-[#f5f1e8] hover:text-[#d4af37] transition-all cursor-pointer"
              title="Call Bodhgaya Ms Javed Salon & Spa"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden xl:inline">{SALON_INFO.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <button
              id="header-book-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e2c866] to-[#aa7c11] text-[#0f0e0c] text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg hover:shadow-[#d4af37]/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-quick-call"
              href={`tel:${SALON_INFO.phone}`}
              className="p-2 rounded-full border border-[#d4af37]/40 bg-[#1c1915] text-[#d4af37] text-sm"
              aria-label="Call salon"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-[#d4af37]/30 bg-[#1c1915] text-[#eae5dc] hover:text-[#d4af37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-[#0f0e0c]/98 border-b border-[#d4af37]/25 p-6 backdrop-blur-xl shadow-2xl sm:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#eae5dc] hover:bg-[#1f1b15] hover:text-[#d4af37] transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#d4af37]/50 text-xs font-mono">→</span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#d4af37]/15 flex flex-col gap-3">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e2c866] to-[#aa7c11] text-[#0f0e0c] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <a
                id="mobile-drawer-call-btn"
                href={`tel:${SALON_INFO.phone}`}
                className="w-full py-3 rounded-xl border border-[#d4af37]/40 bg-[#1c1915] text-[#f5f1e8] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                Call {SALON_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
