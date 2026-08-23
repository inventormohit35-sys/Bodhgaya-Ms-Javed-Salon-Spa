import React from 'react';
import { motion } from 'motion/react';
import { Star, Sparkles, Phone, ArrowDown, ChevronRight, MapPin, Award } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Cinematic Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
          alt="Bodhgaya Ms Javed Salon & Spa Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.08]"
          loading="eager"
        />
        {/* Layered luxury lighting gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09] via-[#0c0b09]/75 to-[#0c0b09]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0c0b09]/50 to-[#0c0b09]" />
        {/* Golden ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#d4af37]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Floating subtle geometric gold accents */}
      <div className="absolute top-28 left-8 sm:left-16 w-24 h-24 border border-[#d4af37]/15 rounded-full pointer-events-none hidden md:block animate-pulse duration-1000" />
      <div className="absolute bottom-20 right-8 sm:right-16 w-32 h-32 border border-[#d4af37]/10 rounded-full pointer-events-none hidden md:block" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Trust Indicator Badge */}
        <motion.div
          id="hero-trust-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#1a1713]/80 backdrop-blur-md mb-6 shadow-lg shadow-black/50"
        >
          <div className="flex items-center text-[#e5b84c] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#e5b84c]" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#f5f1e8]">
            5.0 Rated <span className="text-[#d4af37]">•</span> 22 Reviews in Bodh Gaya
          </span>
          <Award className="w-3.5 h-3.5 text-[#d4af37] hidden xs:inline" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          id="hero-main-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f1e8] leading-[1.15] mb-4 max-w-4xl"
        >
          Bodhgaya <span className="gold-gradient-text">Ms Javed</span> <br className="hidden sm:block" />
          <span className="font-light italic font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e8dfcf]">
            Salon &amp; Spa
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.25em] uppercase text-[#d4af37] font-sans">
            Where Beauty Meets Relaxation
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </motion.div>

        {/* Supporting Narrative */}
        <motion.p
          id="hero-supporting-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[#cfc8ba] max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Premium salon and spa services in Bodh Gaya, designed to help you look your best and feel completely refreshed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <button
            id="hero-primary-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e6cf78] to-[#aa7c11] text-[#0f0e0c] font-bold text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/30 hover:brightness-105 active:scale-95 transition-all cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#0f0e0c]" />
            <span>Book an Appointment</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            id="hero-secondary-explore-btn"
            onClick={scrollToServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#d4af37]/40 bg-[#1a1713]/60 hover:bg-[#24201a] text-[#f5f1e8] hover:text-[#d4af37] font-semibold text-sm uppercase tracking-wider backdrop-blur-sm transition-all cursor-pointer"
          >
            <span>Explore Our Services</span>
          </button>

          <a
            id="hero-call-cta-btn"
            href={`tel:${SALON_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#d4af37]/20 bg-black/40 hover:border-[#d4af37]/60 text-[#d4af37] font-semibold text-sm transition-all"
            title="Call 07739068901"
          >
            <Phone className="w-4 h-4" />
            <span>Call {SALON_INFO.phone}</span>
          </a>
        </motion.div>

        {/* Quick Location & Distinction Chips */}
        <motion.div
          id="hero-location-chips"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl pt-8 border-t border-[#d4af37]/15 text-xs text-[#b8b09f]"
        >
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#14120f]/60 border border-[#d4af37]/10">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span>Ariya Complex, Mastipur</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#14120f]/60 border border-[#d4af37]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span>Hair • Beauty • Spa Treatments</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#14120f]/60 border border-[#d4af37]/10">
            <Star className="w-3.5 h-3.5 text-[#d4af37] shrink-0 fill-[#d4af37]" />
            <span>100% 5-Star Customer Rating</span>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          id="hero-scroll-indicator"
          onClick={scrollToServices}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 text-[#a89f8f] hover:text-[#d4af37] transition-colors flex flex-col items-center gap-1 focus:outline-none cursor-pointer"
          aria-label="Scroll to services"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-[#d4af37]" />
        </motion.button>

      </div>
    </section>
  );
};
