import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Heart, Sparkles, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface ReviewsProps {
  onOpenBooking: () => void;
}

export const Reviews: React.FC<ReviewsProps> = ({ onOpenBooking }) => {
  return (
    <section id="reviews" className="py-24 sm:py-32 relative bg-[#090807] overflow-hidden">
      {/* Golden glow ambient center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d4af37]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161410] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Heart className="w-3 h-3 fill-[#d4af37]" />
            <span>Customer Trust &amp; Satisfaction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f1e8] leading-tight mb-3">
            Loved by Our <span className="gold-gradient-text">Customers</span>
          </h2>
          <p className="text-lg sm:text-xl font-serif text-[#d4af37] tracking-wider mb-4">
            22 Reviews • 5-Star Rated
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-[#bbb3a3] text-base sm:text-lg font-light leading-relaxed">
            Every guest at Bodhgaya Ms Javed Salon &amp; Spa receives individualized attention, utmost hygiene, and world-class beauty craftsmanship.
          </p>
        </div>

        {/* Master Rating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#1c1813] via-[#14120f] to-[#100e0b] border border-[#d4af37]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold accent top line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Block (5 cols) */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-[#d4af37]/20 pb-8 md:pb-0 md:pr-8">
              <div className="text-6xl sm:text-7xl font-serif font-extrabold text-[#f5f1e8] tracking-tight flex items-baseline gap-2">
                <span>5.0</span>
                <span className="text-2xl sm:text-3xl text-[#8e8574] font-normal font-sans">/ 5.0</span>
              </div>

              {/* 5 Big Gold Stars */}
              <div className="flex items-center gap-1.5 my-3 text-[#f3ba3a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#f3ba3a]" />
                ))}
              </div>

              <div className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
                100% 5-Star Verified Ratings
              </div>
              <p className="text-xs text-[#a89f8f] mt-1">
                Based on 22 genuine local reviews in Bodh Gaya
              </p>
            </div>

            {/* Right Trust Badges (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#181511] border border-[#d4af37]/15">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5f1e8] font-serif">
                    Unanimous 5-Star Excellence
                  </h4>
                  <p className="text-xs text-[#a89f8f] leading-relaxed mt-0.5">
                    Our clients consistently praise our clean ambiance, skilled hair styling, gentle facials, and welcoming hospitality in Mastipur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#181511] border border-[#d4af37]/15">
                <Sparkles className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5f1e8] font-serif">
                    Care &amp; Comfort First
                  </h4>
                  <p className="text-xs text-[#a89f8f] leading-relaxed mt-0.5">
                    Every haircut, color touch-up, and spa therapy is performed with hygienic tools and high-quality products to ensure complete customer peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#181511] border border-[#d4af37]/15">
                <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5f1e8] font-serif">
                    Locally Cherished in Bodh Gaya
                  </h4>
                  <p className="text-xs text-[#a89f8f] leading-relaxed mt-0.5">
                    A preferred choice for personal grooming, bridal celebrations, and restorative relaxation across Gaya and Bodh Gaya.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Call to Experience Banner */}
          <div className="mt-8 pt-8 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Your Transformation Awaits</div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f5f1e8] mt-0.5">
                Visit Us &amp; Experience the Difference
              </h3>
            </div>

            <button
              id="reviews-visit-experience-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e6cf78] to-[#aa7c11] text-[#0f0e0c] font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/25 active:scale-95 transition-all cursor-pointer"
            >
              <span>Book Your Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
