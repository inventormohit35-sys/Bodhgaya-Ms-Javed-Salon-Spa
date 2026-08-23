import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HeartHandshake, Smile, ShieldCheck, MapPin, Phone, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      title: 'Professional Service',
      desc: 'Expert stylists and beauticians delivering precision haircutting, styling, and rejuvenating skin rituals.',
      icon: Sparkles,
    },
    {
      title: 'Relaxing Experience',
      desc: 'A calm, hygienic atmosphere designed to soothe your senses and melt away daily tension.',
      icon: HeartHandshake,
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Uncompromising dedication to client delight, proudly evidenced by 22 perfect 5-star customer reviews.',
      icon: Smile,
    },
    {
      title: 'Quality Beauty Care',
      desc: 'Formulations and treatments crafted to protect hair health, enhance natural glow, and ensure lasting confidence.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#0c0b09] overflow-hidden">
      {/* Background Subtle Gradient & Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161410] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3" />
            <span>About Our Salon &amp; Spa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f1e8] leading-tight mb-4">
            Beauty, Care &amp; <span className="gold-gradient-text">Confidence</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-[#bbb3a3] text-base sm:text-lg font-light leading-relaxed">
            Welcome to Bodhgaya Ms Javed Salon &amp; Spa, your trusted sanctuary for luxury personal grooming, hair transformations, and calming spa wellness in Bodh Gaya.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Editorial Column (5 cols on lg) */}
          <motion.div
            id="about-visual-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                alt="Bodhgaya Ms Javed Salon & Spa Styling Session"
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-transparent opacity-80" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#14120f]/90 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#a89f8f] uppercase tracking-wider font-semibold">Location</div>
                  <div className="text-sm font-serif font-bold text-[#f5f1e8] flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    Ariya Complex, Mastipur
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#d4af37] font-bold">5.0 ★★★★★</div>
                  <div className="text-[11px] text-[#b0a797]">22 Verified Reviews</div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Frame Offset */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#d4af37]/20 rounded-2xl -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Narrative & Pillars Column (7 cols on lg) */}
          <motion.div
            id="about-content-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-[#cfc8ba] leading-relaxed font-light">
              <p className="text-base sm:text-lg">
                At <strong className="text-[#f5f1e8] font-semibold">Bodhgaya Ms Javed Salon &amp; Spa</strong>, we believe every individual deserves an exceptional self-care experience. Conveniently located in Ariya Complex, Mastipur, our salon offers a tranquil retreat from the bustling energy of Bodh Gaya.
              </p>
              <p className="text-sm sm:text-base text-[#b0a898]">
                Whether you seek a modern precision haircut, rejuvenating hair spa treatment, vibrant hair coloring, soothing facial therapy, or complete body relaxation rituals, our team approaches every service with utmost dedication, hygiene, and attention to detail.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#161410] border border-[#d4af37]/15 hover:border-[#d4af37]/40 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#221e17] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#0f0e0c] transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#f5f1e8] mb-1.5 group-hover:text-[#d4af37] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#a89f8f] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#d4af37]/15">
              <button
                id="about-book-appointment-btn"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e2c866] to-[#aa7c11] text-[#0f0e0c] font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-xl hover:shadow-[#d4af37]/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                id="about-call-salon-link"
                href={`tel:${SALON_INFO.phone}`}
                className="px-5 py-3.5 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] text-xs uppercase tracking-wider font-semibold text-[#f5f1e8] hover:text-[#d4af37] flex items-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call {SALON_INFO.phone}</span>
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
