import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface AppointmentCtaProps {
  onOpenBooking: () => void;
}

export const AppointmentCta: React.FC<AppointmentCtaProps> = ({ onOpenBooking }) => {
  return (
    <section id="appointment-cta" className="py-20 sm:py-28 relative overflow-hidden bg-[#0c0b09]">
      {/* Background Image with Deep Golden Luxury Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Salon Spa Ambience"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b09] via-[#0c0b09]/85 to-[#0c0b09]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4af37]/15 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#1a1713]/90 text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bodh Gaya's Destination for Luxury Self-Care</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#f5f1e8] leading-tight mb-6"
        >
          Ready for Your <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Beauty Transformation?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-[#d4ccbf] max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Book your visit to Bodhgaya Ms Javed Salon &amp; Spa and give yourself the care you deserve.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-10"
        >
          <a
            id="cta-call-now-btn"
            href={`tel:${SALON_INFO.phone}`}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1c1915] hover:bg-[#252019] text-[#f5f1e8] border border-[#d4af37]/60 hover:border-[#d4af37] text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl hover:shadow-[#d4af37]/15 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Call {SALON_INFO.phone}</span>
          </a>

          <button
            id="cta-book-appointment-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e6cf78] to-[#aa7c11] text-[#0f0e0c] font-bold text-xs sm:text-sm uppercase tracking-widest shadow-2xl hover:shadow-[#d4af37]/30 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </button>
        </motion.div>

        {/* Quick Assurance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#a89f8f] pt-4 border-t border-[#d4af37]/15">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Instant Phone Confirmation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Customized Service Timings</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Hygienic &amp; Sanitized</span>
          </div>
        </div>

      </div>
    </section>
  );
};
