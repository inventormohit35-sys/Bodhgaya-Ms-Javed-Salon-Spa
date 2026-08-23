import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Youtube, Navigation, Clock, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#090807] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161410] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-3 h-3" />
            <span>Salon Location &amp; Contact</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f1e8] leading-tight mb-4">
            Visit Our <span className="gold-gradient-text">Salon &amp; Spa</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-[#bbb3a3] text-base sm:text-lg font-light leading-relaxed">
            We are conveniently located at Ariya Complex in Mastipur, Bodh Gaya. Stop by for your grooming needs or call us to reserve your slot.
          </p>
        </div>

        {/* Contact Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14120f] border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#221e17] border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37]">Address</div>
                  <h3 className="font-serif text-lg font-bold text-[#f5f1e8] mt-0.5 mb-1">
                    Ariya Complex, Mastipur
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bbb3a3] leading-relaxed">
                    Bodh Gaya, Bihar 824231
                  </p>
                  <div className="mt-4">
                    <a
                      id="contact-get-directions-btn"
                      href={SALON_INFO.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#201c16] hover:bg-[#d4af37] text-[#f5f1e8] hover:text-[#0f0e0c] border border-[#d4af37]/30 hover:border-transparent text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14120f] border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#221e17] border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37]">Direct Phone / Bookings</div>
                  <h3 className="font-serif text-lg font-bold text-[#f5f1e8] mt-0.5 mb-1">
                    {SALON_INFO.phone}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bbb3a3] leading-relaxed">
                    Call anytime for service consultations &amp; appointments.
                  </p>
                  <div className="mt-4">
                    <a
                      id="contact-call-now-btn"
                      href={`tel:${SALON_INFO.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#0f0e0c] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14120f] border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-red-400">YouTube Channel</div>
                  <h3 className="font-serif text-lg font-bold text-[#f5f1e8] mt-0.5 mb-1">
                    Ms Javed Salon &amp; Spa
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bbb3a3] leading-relaxed">
                    {SALON_INFO.youtubeHandle} • Official Video Highlights
                  </p>
                  <div className="mt-4">
                    <a
                      id="contact-youtube-btn"
                      href={SALON_INFO.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/40 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      <span>Visit YouTube</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Interactive Map Frame Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden bg-[#14120f] border border-[#d4af37]/30 shadow-2xl relative min-h-[420px]"
          >
            {/* Top Bar of Map Container */}
            <div className="p-4 bg-[#181511] border-b border-[#d4af37]/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-[#f5f1e8]">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>Bodh Gaya Location Map (Mastipur)</span>
              </div>
              <a
                id="map-open-google-maps"
                href={SALON_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Map */}
            <div className="flex-1 w-full h-full min-h-[350px] relative bg-[#1c1915]">
              <iframe
                title="Bodhgaya Ms Javed Salon & Spa Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=84.975%2C24.685%2C85.005%2C24.710&amp;layer=mapnik&amp;marker=24.697%2C84.991"
                className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[185deg] contrast-[1.15]"
                loading="lazy"
              />

              {/* Location Marker Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 rounded-xl bg-[#0f0e0c]/95 backdrop-blur-md border border-[#d4af37]/40 shadow-2xl">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#d4af37] text-[#0f0e0c] shrink-0 font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#f5f1e8]">
                      Bodhgaya Ms Javed Salon &amp; Spa
                    </h4>
                    <p className="text-xs text-[#a89f8f] mt-0.5">
                      Ariya Complex, Mastipur, Bodh Gaya, Bihar 824231
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <a
                        href={`tel:${SALON_INFO.phone}`}
                        className="text-xs text-[#d4af37] font-bold hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" /> {SALON_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
