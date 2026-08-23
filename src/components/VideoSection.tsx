import React from 'react';
import { motion } from 'motion/react';
import { Youtube, Play, ExternalLink, Sparkles, Video, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const VideoSection: React.FC = () => {
  const videoHighlights = [
    {
      id: 'vid-1',
      title: 'Bridal Transformations & Event Makeover',
      category: 'Bridal Series',
      description: 'Behind the scenes of HD bridal makeup and intricate hair styling artistry.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'vid-2',
      title: 'Keratin & Silky Smooth Hair Therapy',
      category: 'Hair Treatments',
      description: 'Step-by-step hair restoration, gloss infusions, and frizz control.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'vid-3',
      title: 'Salon Ambience & Relaxing Spa Sessions',
      category: 'Salon Tour',
      description: 'Explore the serene interior and client hospitality at Ariya Complex, Mastipur.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="videos" className="py-24 sm:py-32 relative bg-[#090807] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#d4af37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161410] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Video className="w-3 h-3" />
            <span>Official Video Channel</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f1e8] leading-tight mb-4">
            See Our <span className="gold-gradient-text">Work</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-[#bbb3a3] text-base sm:text-lg font-light leading-relaxed">
            Discover more of our salon and spa experience. Watch haircut tutorials, client transformations, and beauty highlights on our official YouTube channel.
          </p>
        </div>

        {/* Master Channel Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#14120f] border border-[#d4af37]/30 p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Channel Info (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold">
                <Youtube className="w-4 h-4 text-red-500" />
                <span>YouTube Channel • {SALON_INFO.youtubeHandle}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5f1e8] leading-snug">
                Experience Bodhgaya Ms Javed Salon &amp; Spa in Motion
              </h3>

              <p className="text-sm text-[#b0a898] leading-relaxed font-light">
                Follow our official channel for hair styling tips, trendy cuts, before-and-after bridal looks, skin care routines, and updates directly from our salon team in Bodh Gaya.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#cfc8ba]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Real Transformations</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#cfc8ba]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Bridal Styling</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#cfc8ba]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Hair Care Tips</span>
                </div>
              </div>
            </div>

            {/* Channel Action Trigger (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <a
                id="youtube-channel-cta-btn"
                href={SALON_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-red-900/30 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Us on YouTube</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <span className="text-[11px] text-[#8e8574] mt-3 font-mono">
                Opens {SALON_INFO.youtubeHandle} in a new tab
              </span>
            </div>

          </div>
        </motion.div>

        {/* Video Feature Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoHighlights.map((vid, idx) => (
            <motion.a
              key={vid.id}
              id={`video-highlight-card-${vid.id}`}
              href={SALON_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#14120f] border border-[#d4af37]/20 hover:border-[#d4af37]/60 shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={vid.image}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-85"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14120f] via-black/30 to-black/40" />

                {/* Centered Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-red-500 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/80 text-[#d4af37] border border-[#d4af37]/30">
                    {vid.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#f5f1e8] group-hover:text-[#d4af37] transition-colors leading-snug mb-2">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-[#a89f8f] font-light leading-relaxed">
                    {vid.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-xs text-red-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Youtube className="w-3.5 h-3.5" /> Watch on Channel
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
