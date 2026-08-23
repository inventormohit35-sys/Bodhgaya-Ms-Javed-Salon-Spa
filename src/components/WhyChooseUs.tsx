import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HeartHandshake, Smile, Crown, CheckCircle2, MapPin, Award } from 'lucide-react';
import { FEATURES_DATA } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Smile':
        return Smile;
      case 'Crown':
        return Crown;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'MapPin':
        return MapPin;
      default:
        return Award;
    }
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 relative bg-[#0c0b09] overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161410] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Award className="w-3 h-3" />
            <span>The Javed Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f1e8] leading-tight mb-4">
            Why Choose <span className="gold-gradient-text">Bodhgaya Ms Javed</span> Salon &amp; Spa?
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-[#bbb3a3] text-base sm:text-lg font-light leading-relaxed">
            Crafting elevating salon and spa journeys in Bodh Gaya through professional standards, refined aesthetics, and personalized hospitality.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES_DATA.map((feat, idx) => {
            const IconComponent = getIcon(feat.iconName);
            return (
              <motion.div
                key={feat.id}
                id={`feature-card-${feat.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-[#14120f] border border-[#d4af37]/20 hover:border-[#d4af37]/60 shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/15 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full group-hover:bg-[#d4af37]/15 transition-colors duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#201c16] border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] group-hover:bg-gradient-to-br group-hover:from-[#d4af37] group-hover:to-[#aa7c11] group-hover:text-[#0f0e0c] group-hover:scale-105 transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#8e8574] group-hover:text-[#d4af37] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] mb-1">
                    {feat.highlight}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5f1e8] group-hover:text-[#d4af37] transition-colors mb-3 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#b0a898] leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#d4af37]/10 flex items-center gap-2 text-xs text-[#8e8574] group-hover:text-[#d8d2c4] transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Excellence guaranteed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
