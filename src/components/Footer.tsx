import React from 'react';
import { Sparkles, MapPin, Phone, Youtube, ChevronUp, Star } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080706] text-[#b0a898] border-t border-[#d4af37]/20 pt-16 pb-24 sm:pb-16 relative overflow-hidden">
      {/* Golden accent line top */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#d4af37]/15">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#1a1713] flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-[#f5f1e8] leading-tight">
                  Bodhgaya Ms Javed <span className="text-[#d4af37] font-serif italic font-normal text-base">Salon &amp; Spa</span>
                </div>
                <div className="text-[11px] uppercase tracking-widest text-[#8e8574]">
                  Where Beauty Meets Relaxation
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#a89f8f] leading-relaxed font-light max-w-md">
              Bodhgaya Ms Javed Salon &amp; Spa is your premier beauty and wellness sanctuary in Mastipur, Bodh Gaya. Dedicated to luxury hair care, revitalizing facials, and calming spa therapies with a 100% 5-star customer rating.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14120f] border border-[#d4af37]/25 text-xs text-[#e5b84c]">
              <div className="flex items-center text-[#e5b84c] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#e5b84c]" />
                ))}
              </div>
              <span className="font-semibold text-[#f5f1e8]">5.0 Rating</span>
              <span className="text-[#8e8574]">• 22 Local Reviews</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#f5f1e8] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#bbb3a3] hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#d4af37]/40 group-hover:text-[#d4af37] text-[10px]">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#f5f1e8] mb-4">
              Visit &amp; Connect
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-[#cfc8ba] leading-relaxed">
                  {SALON_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="text-[#f5f1e8] hover:text-[#d4af37] font-semibold text-sm transition-colors"
                >
                  {SALON_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Youtube className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={SALON_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  YouTube: {SALON_INFO.youtubeHandle}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#0f0e0c] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call For Appointments</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Local SEO Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e8574] text-center sm:text-left">
          <div>
            <p>© 2026 Bodhgaya Ms Javed Salon &amp; Spa. All Rights Reserved.</p>
            <p className="text-[11px] text-[#736c5e] mt-1">
              Serving Bodh Gaya, Mastipur, and surrounding Gaya regions with luxury hair, beauty, and spa care.
            </p>
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#d4af37]/30 bg-[#14120f] text-[#d4af37] hover:text-[#f5f1e8] hover:border-[#d4af37] transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
