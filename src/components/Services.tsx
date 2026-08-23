import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Scissors, Smile, Heart, Check, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, SALON_INFO } from '../data/salonData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'hair', label: 'Hair Care & Styling', icon: Scissors },
    { id: 'beauty', label: 'Skin & Beauty', icon: Smile },
    { id: 'spa', label: 'Spa & Relaxation', icon: Heart },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#090807] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161410] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Scissors className="w-3 h-3" />
            <span>Signature Care Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f1e8] leading-tight mb-4">
            Our <span className="gold-gradient-text">Services</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-[#bbb3a3] text-base sm:text-lg font-light leading-relaxed">
            Everything you need to look and feel your best. Customized hair styling, rejuvenating skin care, and deep relaxation treatments in Bodh Gaya.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as ServiceCategory)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b38a22] text-[#0f0e0c] font-bold shadow-lg shadow-[#d4af37]/20 scale-105'
                    : 'border border-[#d4af37]/25 bg-[#14120f] text-[#c5bea0] hover:text-[#f5f1e8] hover:border-[#d4af37]/50'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service: ServiceItem) => (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-[#14120f] border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Image Container */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14120f] via-transparent to-black/30" />

                    {/* Category & Popular Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#0f0e0c]/85 text-[#d4af37] border border-[#d4af37]/30 backdrop-blur-md">
                        {service.categoryLabel}
                      </span>
                      {service.popular && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#d4af37] text-[#0f0e0c] shadow-md">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Duration Badge if available */}
                    {service.duration && (
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#0f0e0c]/90 text-[#eae5dc] border border-white/10 backdrop-blur-md">
                        <Clock className="w-3 h-3 text-[#d4af37]" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5f1e8] group-hover:text-[#d4af37] transition-colors mb-2.5 leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#b0a898] leading-relaxed mb-4 font-light">
                      {service.description}
                    </p>

                    {/* Feature Highlights */}
                    <ul className="space-y-2 mb-6 pt-2 border-t border-[#d4af37]/10">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#d8d2c4]">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="px-6 pb-6 pt-0 mt-auto">
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#d4af37]/15">
                    <div>
                      <div className="text-[10px] text-[#8e8574] uppercase tracking-wider font-semibold">Pricing</div>
                      <div className="text-xs font-semibold text-[#d4af37] italic">
                        Price on Request
                      </div>
                    </div>

                    <button
                      id={`book-service-btn-${service.id}`}
                      onClick={() => onSelectServiceForBooking(service.name)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#221e17] hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#aa7c11] text-[#f5f1e8] hover:text-[#0f0e0c] border border-[#d4af37]/30 hover:border-transparent text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      <span>Enquire / Book</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Quick Help Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#14120f] border border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#f5f1e8]">
              Looking for a custom package or bridal consultation?
            </h4>
            <p className="text-xs sm:text-sm text-[#a89f8f] mt-0.5">
              Speak directly with our senior styling team at Bodhgaya Ms Javed Salon &amp; Spa.
            </p>
          </div>
          <a
            id="services-custom-enquiry-call"
            href={`tel:${SALON_INFO.phone}`}
            className="px-5 py-2.5 rounded-full bg-[#201c16] border border-[#d4af37]/40 hover:border-[#d4af37] text-xs uppercase tracking-wider font-semibold text-[#f5f1e8] hover:text-[#d4af37] transition-all flex items-center gap-2 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Call {SALON_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
